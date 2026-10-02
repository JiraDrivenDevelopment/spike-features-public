# spike-target

Throwaway TypeScript/Vitest repository used to exercise an unattended coding agent. There is no real code here.

## Commands

- Install: `npm ci`
- Test: `npm test`
- Typecheck: `npm run typecheck`

## Conventions

- Tests live in `test/`, one test file per source file (`test/<name>.test.ts`).
- One export per file in `src/`.
- Relative imports use the `.js` extension (NodeNext module resolution).
- Write the failing test first, commit it, then implement.
