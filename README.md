# Guanxi · return to Shenzhen

A free Mandarin and local-culture learning app for an English-speaking beginner who wants to work with Chinese partners and build lasting relationships. Shenzhen is home base: fictional colleagues meet in Nanshan, source components in Huaqiangbei, visit Dongguan, share meals and keep in touch between trips. Guangzhou, Shanghai and Chengdu provide contrasting local settings.

The interface is English. Chinese uses simplified characters, pinyin and English meaning. The app is a sibling of the Greek and Latin learning games: short sittings, a first guess, a teaching card, immediate recall, new situations, sentence tiles, matching, listening drills, spaced review, XP, forgiving streaks and a mistakes notebook. At the user's direction, it reuses Gnothi's existing design: the exact baseline stylesheet, owl and icons, narrow frame, Learn/Words/Me tabs, lesson path, onboarding and full-screen practice layout. Mandarin controls and text fit those existing components.

**Course:** 14 units and 70 lessons, with 450 word/phrase/character entries, 70 original sentence builds, cultural context, grammar, 28 separately held-out scenario questions, 14 original dialogue scenes and speak-aloud field missions. Some words recur in later situations; an entry count is not a claim that every entry is a new word. The course teaches practical foundations, not fluency or HSK/BCT certification.

**Live course:** [guanxi-mandarin.vercel.app](https://guanxi-mandarin.vercel.app/) — published and verified on 2026-11-03. The app, About page and glossary return successfully. The MIT-licensed source is at [ionpetro/guanxi](https://github.com/ionpetro/guanxi). The top-right star prompt uses the same component as the other family apps, including the welcome screen.

## Open source, and the family

Guanxi is free and open source (MIT). **If it helps you, please [star the repo](https://github.com/ionpetro/guanxi)**: a star helps other people find it. Corrections and pull requests are welcome.

Guanxi is one of eight free, open-source learning apps built the same way (short daily lessons and spaced review):

- **Skepsis**: the Greek hiding in everyday English. [Play](https://skepsis-greek.vercel.app) · [GitHub](https://github.com/ionpetro/skepsis)
- **Carpe**: Latin for Greece's national exams. [Play](https://carpe-latin.vercel.app) · [GitHub](https://github.com/ionpetro/carpe)
- **Gnothi**: Ancient Greek for Greece's national exams. [Play](https://gnothi-greek.vercel.app) · [GitHub](https://github.com/ionpetro/gnothi)
- **Objection**: prep for the US bar exam (MBE). [Play](https://objection-bar.vercel.app) · [GitHub](https://github.com/ionpetro/objection)
- **Agora**: sales and negotiation, with ethics. [Play](https://agora-sales-xi.vercel.app) · [GitHub](https://github.com/ionpetro/agora)
- **Oikos**: economics and incentives. [Play](https://oikos-azure-five.vercel.app) · [GitHub](https://github.com/ionpetro/oikos)
- **Guanxi** (this one): Mandarin and local culture. [Play](https://guanxi-mandarin.vercel.app) · [GitHub](https://github.com/ionpetro/guanxi)
- **Everyday Ethics**: everyday choices and ethical judgment. [Private preview](https://everyday-ethics-ion.wintrypenny4.chatgpt.site) · [GitHub](https://github.com/ionpetro/everyday-ethics)

## Learn with it

Start at unit 1 even if you plan to use later business topics. Choose a Mandarin voice in Me when your browser offers one. Read a phrase, listen, say it aloud, then try to reconstruct it without looking. Complete due reviews before a new sitting. Use each field mission to practice a real communicative action: ask a clarification, confirm a time, explain a problem, make an optional invitation or summarize the next step.

The app cannot evaluate your spoken pronunciation. Its browser speech voice is practice audio, not a native-speaker recording or a tone grader. If no Mandarin voice is available, tone listening becomes explicitly ungraded visual practice. Printed pinyin uses citation tones; spoken tone changes are labeled separately. A teacher or willing conversation partner is the right source of feedback on how you actually sound.

Every unit can be opened immediately, but the recommended route builds from greetings and sounds to meetings, samples, negotiation, problem solving, travel and the return visit. Scenario assessments are kept outside lessons and ordinary review; repeated attempts are practice, not new evidence of transfer. Local customs are presented as situations to understand and questions to ask, not rules about every person.

## Run and build

No dependency installation is required for the static app. Use a recent Node.js release.

```sh
npm run validate
npm test
npm run build
python3 -m http.server 8011 --directory app/vercel
```

The build creates `app/dist/index.html` and a deployable `app/vercel/` directory with the app, glossary, about page, icons and clean-URL Vercel configuration. Set `SITE_URL` when building for canonical URLs and the sitemap. Generated output is ignored by git.

## Files and ownership

- `app/src/units/u1.js` through `u14.js`: one literal content object per unit, including separate assessment scenarios.
- `app/CONTENT_SCHEMA.md`: the content contract, provenance and pinyin conventions.
- `app/src/engine.js`: pure learning logic, question builders and local progress calculations.
- `app/src/app.js`, `style.css`, `shell.html`: the browser interface.
- `app/tools/validate.js` and `app/test/`: structural checks and behavior tests.
- `research/CURRICULUM.md`: storyline and teaching sequence.
- `research/root-culture-sources.json`: browsed source evidence, supported claims and limits.
- `research/reviews/`: independent language/culture review records and remaining limits.
- `research/qa/`: read-only lexical audit tooling and QA artifacts.

All dialogues and questions are original. Source material informed factual context; textbook passages and examination questions were not copied. Raw dictionary/reference downloads remain in the ignored research folder. Dictionary spellings were used as audit candidates, not as an authoritative substitute for context or a source of copied dictionary glosses.

## Progress and privacy

Guanxi sends visit and learning events to PostHog on its production website for Pulse. Names, typed answers and recordings are not sent. No account, microphone access or external AI/speech API is built into Guanxi. Progress stays in this browser under a Guanxi-specific storage key; Me can export or import it. Clearing site data or changing devices does not carry progress across automatically. The build never reads the inherited `app/.env` file. Browser-provided voices may have their own platform behavior; Guanxi itself does not upload recordings or score speech.

Spaced review uses 1, 3, 7, 14, 30 and 60-day intervals. Early practice does not postpone a due review or promote a card. A miss returns the card to the first interval. Streaks advance once per learning day, forgive weekends and provide freezes. There are no hearts or lost lives.

## Editorial limits

The course received separate AI-assisted language and culture passes, automated validation and browser QA. It has not been represented as professionally or natively reviewed. Naturalness, regional usage and browser pronunciation can still benefit from teacher feedback. Culture sources establish the specific local facts listed in the evidence bank; original communication advice is labeled separately. Live travel rules, payment eligibility, prices, schedules and company policies must be confirmed when used.

The project code and original content are MIT licensed. Third-party sources keep their own terms; they are linked, not relicensed by this project.
