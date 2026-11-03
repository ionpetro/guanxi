# Guanxi content contract

One CommonJS-compatible unit file `app/src/units/uN.js`, no imports, and browser registration:
```
(function(){const unit={id:'u1',title:'Arrive in Shenzhen',blurb:'...',place:'Shenzhen',focus:'...',lessons:[{id:'u1l1',title:'...',scene:'An original fictional scene with Lin, Chen or Zhou.',items:[]} ]}; if(typeof GUANXI_UNITS!=='undefined')GUANXI_UNITS.push(unit);if(typeof module!=='undefined')module.exports=unit;})();
```
Five lessons per unit; 8–12 items per lesson. Short sittings are engine-managed. Aim for 25–35 useful word/phrase entries per unit, plus 5–10 sentence builds, at least 5 culture/grammar cards and 5 unseen scenarios. Every lesson includes a local scene, Chinese language and a relationship decision. Unit 1 adds sound foundations; u14 combines retrieval with fresh situations.

Every item: `id` unique prefixed `uN-`, `kind`, `say` concise teaching line, `src` source URL or shared source ID, `status` (`general` = standard language/original pedagogical example, `sourced` = culture claim checked against linked source, `unsure` = unresolved, excluded from assessment). Optional `hook`, `note`, `place`. Do not claim native-speaker review. Original situations cite the underlying principle's source and say `general`; factual culture cards `sourced` only if actually supported. No invented source citations. Pinyin uses dictionary/citation tones consistently; spoken sandhi in `spokenPinyin` and `note`. Neutral tone unmarked. Simplified characters. Do not label the course HSK/BCT certified or equate completion to fluency.

Kinds:
- `word`: `hanzi`, `pinyin`, `meaning`, `distractors` (3 distinct English meanings), optional `example:{hanzi,pinyin,meaning}`, `spokenPinyin`. May be useful short phrase; avoid duplicate exact taught words unless intentional review.
- `sentence`: `hanzi`, `pinyin`, `meaning`, `tiles:[{hanzi,pinyin},...]` ordered correct chunks, `distractors:[{hanzi,pinyin},...]` (1–3), optional `spokenPinyin`. Concatenated correct tiles equal hanzi after ignoring punctuation/whitespace. Prefer beginner 3–7 chunks. `transfer:true` means unseen build, no pre-teaching card.
- `tone`: `hanzi` (one syllable), `pinyin`, `meaning`, `tone` integer 0..4, `note` explains contour. The audio quiz must HIDE written tone/pinyin until feedback, and offer an honest visual alternate if audio unavailable. Context-sensitive sandhi is taught separately; use isolated syllables with stable readings for tested tones.
- `character`: same as word, plus `component` and `note` explaining a visual component as a memory aid, never invented etymology.
- `grammar`: `title`, `explanation`, `examples:[{hanzi,pinyin,meaning},...]`, `quiz:{q,options:[string,string,string],answer:string,why}`. At least one example. Quiz can target English explanation to avoid guessing from unglossed Chinese.
- `culture`: `title`, `place`, `body` (specific source-backed observation with nuance), optional `phrase:{hanzi,pinyin,meaning}`, `quiz:{q,options:[...],answer,why}`. No rules about what all Chinese people think. Name the situation. Personal preferences override etiquette generalizations.
- `scenario`: `title`, `scene`, `q`, `options:[{text,why},...]` (3 or 4), `answer` zero-based index, `transfer:true`, optional `phrase:{hanzi,pinyin,meaning}`. Choices must be plausible and one best in explicit circumstances. Original scenes, no pre-teaching card. Explain uncertainty; indirect phrases are not mind-reading.
- `pairs`: `title`, `pairs:[{hanzi,pinyin,meaning},...]` (3–5 distinct on both sides).
- `sort`: `title`, `q`, `buckets:[string,string]`, `entries:[{text,bucket,why},...]` (4–6). Any Chinese text needs pinyin in parentheses.

All Chinese displayed outside structured hanzi fields should include pinyin nearby. Do not use source URLs as learner explanations. Sources appear through links or source details. Language glossary distractors must be unambiguously wrong for the chosen sense; contextual translation may differ legitimately, so explicitly define scope.

Design: preserve guess-first, immediate retrieval, transfer, Chinese tile building, matching/sorting, spaced 1/3/7/14/30/60-day review, local XP/progress, daily target, streak freezes/no hearts, mistakes notebook, daily drill, speed round and scenario assessment. Match can be generated from learned words even without pairs items. All units browsable from day one; recommended progression clear. Typed pinyin should be accepted with marks or numbers where used, without pretending unmarked pinyin trains tones. Audio uses user-selected available Mandarin voices, slow replay and explicit fallback, no external paid API, microphone or hidden scoring. Privacy: no login, no analytics, no `.env` loading.

Lesson optional fields: `dialogue:[{speaker,hanzi,pinyin,meaning},...]` for original exchanges, and `mission` (English, a concrete speak-aloud or real-world task with self-check). Audio available per dialogue line. Missions never claim automatic pronunciation assessment.

Unit optional `assessment:[scenario,...]`: at least two original held-out transfer scenarios per real unit, IDs `uN-assess1` etc. These are separate from lessons, daily practice and normal review. Assessment reports must distinguish a fresh held-out attempt from a repeat. They use ordinary scenario fields and provenance; no hidden claim of formal HSK/BCT equivalence.
