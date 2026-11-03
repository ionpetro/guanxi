# Guanxi family-design reuse map

Source inspected: `../ancient-greek-panhellenic/app/src/app.js`, `style.css`, `shell.html`; compared with `../latin-panhellenic/app/src`. The two products share the same phone-width frame, navigation, card geometry, lesson stage and feedback layout. Guanxi uses the **Gnothi implementation as the literal visual template**. Mandarin labels and learning controls are adapters to that template, not a new visual design.

| Guanxi surface | Exact Gnothi source component / selector | Reuse decision |
|---|---|---|
| App frame | `#app`, `.topbar`, `.wordmark`, `.stats`, `.stat` | Copied 560px column, sticky header, three stat pills for streak, freezes, XP. Remove GitHub link because Guanxi has no repository URL. |
| Main navigation | `.tabbar`, `.tabbar-inner`, `.tab` and source `TABS`/`tabbar()` | Copied fixed 64px bottom tabs: Learn, Words, Me. Review actions live in Learn quick tiles. |
| Home | `.view`, `.hero`, `.mascot`, `.bubble`, `.goalring`, `.quick`, `.tile` | Copied owl-and-bubble placement, circular daily goal, two-column quick tiles. Use the unchanged source owl SVG and source icon set. |
| Course path | `.via`, `.milestone`, `.mile`, `.ucard`, `.ubar`, `.stones`, `.stone` and source `via()` | Copied one milestone per unit, five lesson stones and an assessment stone. Units remain browseable and suggested next lesson gets `.current`. |
| Lesson | `.lesson`, `.lesson-inner`, `.lesson-top`, `.progress`, `.stage`, `.qlabel`, `.prompt`, `.options`, `.opt`, `.footer` | Copied fullscreen practice layout, top progress, scrollable stage and bottom feedback sheet. Mandarin teaching, audio, pinyin, tiles, matching, sorting and scenarios render within these selectors. |
| Results and settings | `.results`, `.resgrid`, `.badges`, `.badge`, `.setting`, `.goalopts`, `.search`, `.lexcard` | Copied family result, profile, badges and lexicon presentation; retain Guanxi voice choice and progress export/import controls. |
| Colors and type | Gnothi `:root` / dark-mode tokens, Nunito UI, Noto Serif/GFS Didot display, 16px radii, 3–4px button shadows | Copied values exactly. Chinese glyphs add only a system CJK fallback. No Guanxi field-journal jade/red/serif palette remains. |
| Static pages | Gnothi `site.mjs` `PAGE_CSS` 760px public-page frame, nav, glossary table and footer | About and glossary use the same blue/gold/marble tokens and public-page column; source links and privacy copy stay Guanxi-specific. |

Behavior retained from Guanxi: all 14 units and 70 lessons; immediate retrieval, spaced review, daily drill, speed, listening, matching, sorting, mistakes, scenario assessment; local data export/import; Mandarin browser voices with explicit no-voice fallback. No analytics, invented repository link, microphone scoring or deployment is added.
