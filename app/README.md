# Guanxi app

A static, offline-friendly learning app for an English-speaking beginner returning to Shenzhen. The browser stores progress locally. No login, analytics, microphone or external speech API.

## Development

From the repository root:

- `npm run validate` validates every content file.
- `npm test` runs engine and content tests.
- `npm run build` writes `app/dist/index.html` and the deploy-ready `app/vercel/` directory.

The build concatenates `app/src/units/u1.js` through `u14.js` in numerical order. `u0_example.js` is a schema fixture and is excluded unless `npm run build:example` is used. The build never reads `app/.env`.

## Audio and data

The browser SpeechSynthesis API provides audio only when a Mandarin voice is available. Tone practice is ungraded when none is available. Settings support progress export and import. For a new device, export the JSON file first and import it there.
