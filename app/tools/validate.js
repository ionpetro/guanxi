const {Engine:E}=require('../src/engine.js');
const {loadUnits}=require('../src/course.js');
const fs=require('node:fs');
const P=/[\u3400-\u9fff]/u;
const str=x=>typeof x==='string'&&!!x.trim();
const arr=(x,n=0)=>Array.isArray(x)&&x.length>=n;
function validateCourse(units,{strict=false}={}){
  const errors=[],warnings=[],ids=new Set(),unitIds=new Set();
  const bad=(w,m)=>errors.push(`${w}: ${m}`), warn=(w,m)=>warnings.push(`${w}: ${m}`);
  for(const u of units||[]){
    if(!u||!str(u.id)){bad('unit','missing id');continue;}
    const U=u.id; if(unitIds.has(U))bad(U,'duplicate unit');unitIds.add(U);
    if(!/^u(?:[1-9]|1[0-4])$/.test(U)&&U!=='u0_example')bad(U,'unexpected unit id');
    for(const k of ['title','blurb','place','focus'])if(!str(u[k]))bad(U,`missing ${k}`);
    if(!arr(u.lessons,1)){bad(U,'lessons missing');continue;}
    if(strict&&U!=='u0_example'&&u.lessons.length!==5)bad(U,'expected five lessons');
    if(u.assessment!==undefined){if(!arr(u.assessment,1))bad(U,'assessment must contain scenarios');else for(const it of u.assessment){const w=`${U}/assessment/${it?.id||'item'}`;if(!str(it?.id)||!it.id.startsWith(U+'-'))bad(w,'assessment id invalid');if(ids.has(it.id))bad(w,'duplicate id');ids.add(it.id);if(it.kind!=='scenario'||it.transfer!==true)bad(w,'assessment item must be transfer scenario');for(const k of ['title','scene','q','say','src'])if(!str(it[k]))bad(w,`missing ${k}`);if(!['general','sourced','unsure'].includes(it.status))bad(w,'status invalid');if(!arr(it.options,3)||it.options.length>4||it.options.some(o=>!str(o?.text)||!str(o?.why)))bad(w,'3–4 explained options required');if(!Number.isInteger(it.answer)||it.answer<0||it.answer>=(it.options||[]).length)bad(w,'answer index invalid');}}
    for(const l of u.lessons){const W=`${U}/${l?.id||'lesson'}`;
      if(!l||!str(l.id)){bad(W,'missing id');continue;}
      if(ids.has(l.id))bad(W,'duplicate id');ids.add(l.id);
      if(!l.id.startsWith(U+'l'))bad(W,'lesson id must start with unit id');
      for(const k of ['title','scene'])if(!str(l[k]))bad(W,`missing ${k}`);
      if(l.mission!==undefined&&!str(l.mission))bad(W,'mission must be a string');
      if(l.dialogue!==undefined){if(!arr(l.dialogue,1))bad(W,'dialogue must be nonempty');else l.dialogue.forEach((d,i)=>{for(const k of ['speaker','hanzi','pinyin','meaning'])if(!str(d?.[k]))bad(`${W}/dialogue${i}`,`missing ${k}`);});}
      if(!arr(l.items,1)){bad(W,'items missing');continue;}
      if(strict&&U!=='u0_example'&&(l.items.length<8||l.items.length>12))bad(W,'expected 8–12 items');
      for(const it of l.items){const w=`${W}/${it?.id||'item'}`;
        if(!it||!str(it.id)){bad(w,'missing id');continue;}
        if(ids.has(it.id))bad(w,'duplicate id');ids.add(it.id);
        if(!it.id.startsWith((U==='u0_example'?'u0':U)+'-'))bad(w,'item id must start with unit id plus hyphen');
        if(!E.KINDS.includes(it.kind)){bad(w,`unknown kind ${it.kind}`);continue;}
        for(const k of ['say','src'])if(!str(it[k]))bad(w,`missing ${k}`);
        if(!['general','sourced','unsure'].includes(it.status))bad(w,'status must be general, sourced or unsure');
        if(it.kind==='word'||it.kind==='character'){
          for(const k of ['hanzi','pinyin','meaning'])if(!str(it[k]))bad(w,`missing ${k}`);
          if(!arr(it.distractors,3))bad(w,'three distractors required');
          else if(new Set([it.meaning,...it.distractors].map(E.norm)).size!==4)bad(w,'meaning and distractors must differ');
          if(it.kind==='character'&&(!str(it.component)||!str(it.note)))bad(w,'component and note required');
          if(it.example&&['hanzi','pinyin','meaning'].some(k=>!str(it.example[k])))bad(w,'incomplete example');
        }else if(it.kind==='sentence'){
          for(const k of ['hanzi','pinyin','meaning'])if(!str(it[k]))bad(w,`missing ${k}`);
          if(!arr(it.tiles,2)||!arr(it.distractors,1))bad(w,'tiles and distractors required');
          else {for(const t of [...it.tiles,...it.distractors])if(!str(t?.hanzi)||(!str(t?.pinyin)&&!(/^[\p{P}\p{Z}]+$/u.test(t?.hanzi||'')&&t?.pinyin==='')))bad(w,'tile needs hanzi and pinyin');
            const plain=x=>String(x||'').replace(/[\p{P}\p{Z}\s]/gu,'');
            if(plain(it.tiles.map(t=>t.hanzi).join(''))!==plain(it.hanzi))bad(w,'correct tiles do not form hanzi');}
        }else if(it.kind==='tone'){
          for(const k of ['hanzi','pinyin','meaning','note'])if(!str(it[k]))bad(w,`missing ${k}`);
          if(!Number.isInteger(it.tone)||it.tone<0||it.tone>4)bad(w,'tone must be 0–4');
        }else if(it.kind==='grammar'||it.kind==='culture'){
          if(!str(it.title))bad(w,'title required');
          if(it.kind==='grammar'&&(!str(it.explanation)||!arr(it.examples,1)))bad(w,'explanation and example required');
          if(it.kind==='culture'&&(!str(it.place)||!str(it.body)))bad(w,'place and body required');
          const q=it.quiz;if(!str(q?.q)||!arr(q?.options,3)||!str(q?.answer)||!str(q?.why))bad(w,'complete quiz required');
          else if(new Set(q.options.map(E.norm)).size!==q.options.length||!q.options.some(x=>E.norm(x)===E.norm(q.answer)))bad(w,'quiz options need distinct included answer');
        }else if(it.kind==='scenario'){
          for(const k of ['title','scene','q'])if(!str(it[k]))bad(w,`missing ${k}`);
          if(!arr(it.options,3)||it.options.length>4||it.options.some(o=>!str(o?.text)||!str(o?.why)))bad(w,'3–4 explained options required');
          else if(new Set(it.options.map(o=>E.norm(o.text))).size!==it.options.length)bad(w,'scenario options duplicate');
          if(!Number.isInteger(it.answer)||it.answer<0||it.answer>=(it.options||[]).length)bad(w,'answer index invalid');
          if(it.transfer!==true)bad(w,'scenario must be transfer');
        }else if(it.kind==='pairs'){
          if(!arr(it.pairs,3)||it.pairs.length>5)bad(w,'3–5 pairs required');
          else {for(const p of it.pairs)for(const k of ['hanzi','pinyin','meaning'])if(!str(p[k]))bad(w,`pair missing ${k}`);
            if(new Set(it.pairs.map(p=>E.norm(p.hanzi))).size!==it.pairs.length||new Set(it.pairs.map(p=>E.norm(p.meaning))).size!==it.pairs.length)bad(w,'pair sides must be distinct');}
        }else if(it.kind==='sort'){
          if(!str(it.title)||!str(it.q)||!arr(it.buckets,2)||it.buckets.length!==2||!arr(it.entries,4)||it.entries.length>6)bad(w,'sort title, question, two buckets and 4–6 entries required');
          else for(const e of it.entries){if(!str(e.text)||!it.buckets.includes(e.bucket)||!str(e.why))bad(w,'entry incomplete');if(P.test(e.text)&&!/\([^)]*[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ][^)]*\)/i.test(e.text))warn(w,'Chinese in entry needs pinyin nearby');}
        }
      }
    }
  }
  return {errors,warnings};
}
module.exports={validateCourse};
if(require.main===module){const args=process.argv.slice(2),units=args.length?args.map(f=>require(require('node:path').resolve(f))):loadUnits({example:true});const r=validateCourse(units,{strict:true});for(const x of r.errors)console.error('ERROR',x);for(const x of r.warnings)console.warn('WARN',x);console.log(`${units.length} units, ${units.flatMap(u=>u.lessons||[]).length} lessons, ${units.flatMap(u=>(u.lessons||[]).flatMap(l=>l.items||[])).length} items; ${r.errors.length} errors, ${r.warnings.length} warnings`);if(r.errors.length)process.exitCode=1;}
