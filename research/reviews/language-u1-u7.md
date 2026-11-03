# Language review: units 1–7

Reviewed 2026-11-03. This is an editorial pass by an AI assistant, **not native-speaker review**. It covers the 35 lessons in units 1–7: word senses and distractors, sentence builds and chunks, pinyin, the sound and grammar prompts, and original scene dialogue. Culture-source verification is recorded separately by the research reviewer.

## Method and scope

- Read each unit's word list, sentence, grammar explanation, tone card and transfer choice in lesson order. Checked whether an English distractor could also plausibly translate the target in the taught sense. The choices reviewed have a single intended answer in their stated contexts; real translation remains context dependent.
- Ran `research/qa/audit_pinyin.py` against local CC-CEDICT data. The exact-headword comparison across all 14 units checked 434 of 600 distinct hanzi/pinyin pairs; 166 are not exact dictionary headwords, mostly original sentences or chunks. After the corrections below, the script reports zero lexical mismatch candidates for units 1–7. This does **not** certify the remaining phrases, naturalness or spoken prosody.
- Checked the 35 sentence tile sequences against their displayed sentence. The app's validator now accepts punctuation-only tiles with empty pinyin and the question builder attaches punctuation to the preceding spoken chunk. Duplicate language chunks remain distinct buttons.
- Checked the app's sound handling: citation tones stay visible in teaching; spoken sandhi is labeled separately where present. Audio comes from an available browser Mandarin voice and gives no pronunciation score. Tone listening is ungraded when no Mandarin voice is available.

## Corrections made

|Location|Correction|Reason|
|---|---|---|
|u1 word teaching lines and u1l4 grammar|Used citation `bù duì` / `bù shì` in written teaching lines; kept `bú` in explicitly labeled spoken notes.|Do not mix a spoken sandhi form into the citation line.|
|u3 direction vocabulary|Changed `nàlǐ`, `hòumiàn`, `yòubiān`, `zuǒbiān` to the neutral-ending readings `nàli`, `hòumian`, `yòubian`, `zuǒbian` in linked lesson text.|Matches the lexical readings in the local dictionary used for this audit. Other full-tone variants can occur in speech.|
|u4 food vocabulary|Changed the citation pinyin for 不要, 不辣 and 不用 from `bú` to `bù`; added separately labeled spoken `bú` notes to those cards.|The sound change before a fourth tone is real, but the course contract prints dictionary/citation tones.|
|u6 number lesson|Replaced the awkward “Twenty thousand is twenty thousands” build with `这个价格是两万元。` (“This price is 20,000 yuan.”).|A useful business sentence states the scale without an unnatural construction.|
|u6 measure word|Used standalone `个 (gè)`, while retaining the lexical neutral reading `每个 (měi ge)`.|Separates an isolated character's citation tone from a common unstressed phrase.|
|u1–u7 visual literacy|Added two character cards per unit, each pointing to a visible component in a word used nearby. Added a two-line original cast exchange to the first lesson of each unit.|Makes the written forms and local relationships more memorable without inventing character origins.|

## Limits and follow-up

The CC-CEDICT check is a candidate finder, not a full pronunciation authority. Many original sentences have no whole-sentence headword. Browser speech can pronounce proper names and tone changes inconsistently. A native Mandarin speaker should review naturalness, regional usage and the audio experience before any claim of native-speaker validation. The course currently makes no such claim.
