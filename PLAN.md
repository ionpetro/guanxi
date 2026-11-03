# Guanxi delivery plan — resumed 2026-11-03

The user authorized an ambitious Mandarin course using the same learning-game family as Greek, with local culture as central as language. Their goal is to do business with Chinese partners, understand people and build relationships; they admire Shenzhen and want to return.

Astra orchestrates and Sol builds, as requested. The original stopped run contained research recovery artifacts and a copied law-course engine, not a Mandarin curriculum. Work resumed in this repository; sibling apps are unchanged.

## Accepted direction

English interface; beginner entry point; simplified Chinese and pinyin; Shenzhen recurring cast and real places; other cities as contrasts. Guanxi is the working name. The user requires reuse of the existing Greek/Latin product design; Gnothi's stylesheet, owl, icons and components are the literal template. Free/no login/local progress/no analytics. No paid external AI calls. The Vercel project is `guanxi-mandarin`; each update is deployed after QA. No GitHub repository creation or push.

## Seven phases and evidence

1. **Research:** browsed local culture and primary service documentation recorded in `research/root-culture-sources.json`; recovered raw references remain ignored.
2. **Curriculum:** fourteen units, five lessons each, cumulative language and relationship skills, original local scenes; see `research/CURRICULUM.md`.
3. **Core:** adapted family mechanics to Mandarin; removed law/exam assumptions and analytics, added Mandarin voice selection, pinyin entry, tones, sentence chunks, component cards and separate assessments.
4. **Content:** separate literal unit files; first-half and second-half writers cross-reviewed the other half for language. Root independently reviewed culture, corrected sourcing and replaced generic/weak questions. Records in `research/reviews/`.
5. **QA:** schema validation, behavior tests and cross-course question checks; root conducts browser learning-flow and layout checks. Fixes are completed before deployment.
6. **Final review:** honest scope, source rendering, audio fallback, transfer separation, privacy, progress reliability and documentation.
7. **Ship:** final tests/build, deploy only the named Vercel project, verify production page and routes, record the address. No publication claim before verification.

This is a substantial foundation and ongoing practice tool, not a promise of fluency. Speaking missions deliberately use learner self-check; the app does not pretend to grade pronunciation. Future refinement should be led by actual usage and qualified Mandarin feedback, not additional filler items.

## Initial delivery checkpoint 2026-11-03

Published at https://guanxi-mandarin.vercel.app/ under the intended Vercel project. Root verified the production page, first lesson, About and glossary routes. Final evidence: `research/reviews/browser-qa.json`, `research/reviews/final-lexical-audit.json` and the production screenshot in `research/qa/guanxi-live.jpg`. The final code checkpoint before deployment is `5042359`; documentation and evidence are recorded in the following local commit. No GitHub push was performed.


## Design correction and final publication

The user then required the existing product design without new aesthetic decisions. Guanxi now copies Gnothi's baseline stylesheet, light/dark colors, owl, icons, onboarding, narrow app frame, Learn/Words/Me tabs, milestone path, practice stage and bottom feedback. Its public pages and sharing image use the same source templates. Mandarin typography and existing exercises are adapted to those components. See `research/reviews/family-design-reuse.md` and `family-template-manifest.json` for the source audit.

The replacement was published to the same address on 2026-11-03 from code checkpoint `ec0bb83`, with production deployment `guanxi-mandarin-mxq4nfvt8-ion-petropoulos-projects.vercel.app`. All 21 project tests, three independent learning checks, validation and build passed. Root verified the new interface and first lesson in production; home/About/glossary returned HTTP 200 and the published index matched the local build byte for byte. Current screenshots and browser checks replace the former visual evidence; the old QA is explicitly retained as a historical checkpoint. Curriculum and engine files are unchanged by the design correction. No GitHub push was performed.
