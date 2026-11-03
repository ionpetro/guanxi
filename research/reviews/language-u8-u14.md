# Independent language review: u8–u14

Reviewed 2026-11-03 after the root author completed these seven units. This is an AI editorial pass, **not native-speaker review**. I inspected all 35 lessons, 330 lesson items after edits, 14 heldout scenarios, sentence tile order, word distractors, grammar explanations and examples, and character cards. I ran `research/qa/audit_pinyin.py`; its local CC-CEDICT comparison is a flagging tool, not an authority for unlisted sentences or spoken tone changes. No CC-CEDICT definitions were copied.

## Edits made

- Added two explicit character cards in each unit (14 total) using visible parts as memory aids without etymology claims: 言/心, 金/工, 手/目, 门/电, 车/日, 月/山, 食/土. Each has pinyin, meaning, distinct wrong answers, a `component` and a visual note. Lessons remain within 8–12 items.
- Added separate `spokenPinyin` and notes for connected-speech changes in 看一下 (kàn yīxià → kàn yíxià), 不错 (bùcuò → búcuò), 一样 (yīyàng → yíyàng), 一个 (yī ge → yí ge), 一张 (yī zhāng → yì zhāng), 一起 (yīqǐ → yìqǐ), 一路 (yī lù → yí lù), 好久不见 (hǎojiǔ bù jiàn → háo jiǔ bú jiàn), and 确认一下 (quèrèn yīxià → quèrèn yíxià). Written `pinyin` remains citation tone. The spoken field is a teaching aid, not pronunciation scoring.
- Changed the sentence gloss of 请把照片发给我 (Qǐng bǎ zhàopiàn fā gěi wǒ) to singular “Please send me the photo,” matching the scene.
- Replaced two overlapping/broad wrong choices: “quantity” for 起订量 (qǐdìngliàng, minimum order quantity) and the near-synonymous apology for 抱歉 (bàoqiàn).

## Validation and flagged variants

- Structural check: 35 lessons, 330 lesson items, 14 heldout assessments; each lesson has 9–10 items. No duplicate item IDs, missing base fields, malformed scenario answers, missing quiz answers, or sentence-tile mismatches found.
- Dictionary audit over all 14 units: 1,060 structured hanzi/pinyin pairs, 425 distinct headword pairs checked against local CC-CEDICT, 10 review candidates. Three candidates in u8–u14 were reviewed and retained: 尺寸 (chǐcùn), 好久不见 (hǎojiǔ bù jiàn), 照顾 (zhàogù). The [Hàndiǎn entry for 尺寸](https://zdic.net/hans/%E5%B0%BA%E5%AF%B8) lists chǐ cùn for a size/measurement sense; its entries also show other historical or contextual readings. The [Hàndiǎn entry for 照顾](https://zdic.net/hans/%E7%85%A7%E9%A1%BE) lists zhào gù for care/attention and a neutral-tone variant for a different commercial sense. For 好久不见, the course intentionally keeps the citation tone of 不 (bù) and separately labels the spoken bú before 见 (jiàn); the local lexicon's neutral `bu` entry is not a reason to erase that distinction.
- Remaining limitation: no native-speaker or professional pronunciation review has been completed. TTS output varies by voice and must not be treated as a tone grade.
