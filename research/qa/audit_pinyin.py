#!/usr/bin/env python3
"""Read-only lexical audit of authored hanzi/pinyin pairs against local CC-CEDICT.
CC-CEDICT (MDBG), CC BY-SA 4.0. No definitions are copied. A mismatch is a
review candidate, NOT proof of error: lexical variation and sandhi need a reader.
Run from any directory; prints JSON. Source data stays gitignored.
"""
from pathlib import Path
import collections
import json
import re
import subprocess
import unicodedata

ROOT = Path(__file__).resolve().parents[2]
MARKS = {'a':'āáǎà','e':'ēéěè','i':'īíǐì','o':'ōóǒò','u':'ūúǔù','ü':'ǖǘǚǜ'}

def marked(syllable):
    syllable = syllable.lower().replace('u:', 'ü').replace('v', 'ü')
    match = re.fullmatch(r'([a-züê]+)([0-5])', syllable)
    if not match:
        return syllable
    base, tone = match.groups()
    tone = int(tone)
    if tone in (0, 5):
        return base
    if 'a' in base:
        index = base.index('a')
    elif 'e' in base:
        index = base.index('e')
    elif 'ou' in base:
        index = base.index('o')
    else:
        indices = [i for i, c in enumerate(base) if c in MARKS]
        if not indices:
            # Rare syllabic consonants require editorial review.
            return base + str(tone)
        index = indices[-1]
    return base[:index] + MARKS[base[index]][tone - 1] + base[index + 1:]

def norm(text):
    text = unicodedata.normalize('NFC', text.lower().replace('u:', 'ü').replace('v', 'ü'))
    return ''.join(c for c in text if c.isalpha())

assert marked('shui3') == 'shuǐ'
assert marked('liu2') == 'liú'
assert marked('nu:3') == 'nǚ'
assert marked('hao3') == 'hǎo'
assert marked('ma5') == 'ma'

entries = collections.defaultdict(set)
for line in (ROOT / 'research/source-data/cedict/cedict.txt').read_text().splitlines():
    m = re.match(r'\S+ (\S+) \[([^]]+)\]', line)
    if m:
        entries[m[1]].add(' '.join(marked(s) for s in m[2].split()))

js = r'''
const fs=require('node:fs'); const path=require('node:path');
const folder=path.resolve('app/src/units');
const files=fs.readdirSync(folder).filter(f=>/^u\d+\.js$/.test(f)).sort((a,b)=>parseInt(a.slice(1))-parseInt(b.slice(1)));
console.log(JSON.stringify(files.map(f=>require(path.join(folder,f)))));
'''
units = json.loads(subprocess.check_output(['node', '-e', js], cwd=ROOT))
rows = []
def visit(value, path, item_id=None):
    if isinstance(value, dict):
        item_id = value.get('id', item_id)
        if isinstance(value.get('hanzi'), str) and isinstance(value.get('pinyin'), str):
            hz = re.sub(r'[\s，。！？、,.!?：:；;“”"（）()]', '', value['hanzi'])
            rows.append((item_id, path, hz, value['pinyin']))
        for key, child in value.items():
            visit(child, path + '.' + key, item_id)
    elif isinstance(value, list):
        for i, child in enumerate(value):
            visit(child, path + '[' + str(i) + ']', item_id)
visit(units, 'units')
checked = 0
mismatches = []
missing = []
seen = set()
for item_id, path, hz, py in rows:
    if (hz,py) in seen:
        continue
    seen.add((hz,py))
    if hz not in entries:
        missing.append({'id':item_id,'hanzi':hz,'pinyin':py})
        continue
    checked += 1
    readings = entries[hz]
    if norm(py) not in {norm(r) for r in readings}:
        mismatches.append({'id':item_id,'path':path,'hanzi':hz,'authored':py,'dictionary_readings':sorted(readings)})
print(json.dumps({'units':len(units),'hanzi_pinyin_pairs':len(rows),'distinct_pairs':len(seen),'dictionary_exact_matches_checked':checked,'review_candidates':mismatches,'unmatched_count':len(missing),'note':'Exact lexical comparison only; no dictionary entry does not mean incorrect. Original sentences, grammar and naturalness require independent review.'},ensure_ascii=False,indent=2))
