# Story: Title-to-slug helper

**As a** content editor, **I want** article titles turned into URL slugs, **so that** links are readable.

`slugify` does not exist yet. It is implemented by the agent in later spikes (one export per file: `src/slugify.ts`, tests in `test/slugify.test.ts`).

## Acceptance criteria

- **AC1:** `slugify('Hello World')` returns `hello-world`.
- **AC2:** Characters other than a-z and 0-9 become separators, runs of separators collapse to one hyphen, and leading/trailing hyphens are trimmed. `slugify('  C++ & Rust!  ')` returns `c-rust`.
- **AC3:** Input that produces an empty slug throws a `RangeError`.
