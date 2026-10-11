# Progress

Claude adds entries here after reviews and after heavy hints. Newest entries go at the bottom.

Review entry:

```
## 1.3 State and events, review (2026-10-15)
Verdict: done / done with fixes / redo
Notes: what was good, what to revisit
```

Hint entry, added after a level 3 hint or a shown solution:

```
## 1.3 hint (2026-10-14)
Level 3: updater function for the cart state.
Revisit: state as a snapshot.
```

## 0.1 Project setup and your first test, review (2026-10-11)
Verdict: done with fixes
Notes: formatPrice correct, formatter created once at module level, 4 tests pass, strict and noUncheckedIndexedAccess on, typecheck and lint clean. Hints at levels 1 and 2: TS syntax in .js files, then the type name `number` passed as a value. A nested shop/.git was removed. Not met: nothing committed or pushed yet, all files are only staged. To fix: `.ts` extension in the test import (use './format'), PHP code style (Allman braces, double quotes, mixed semicolons, 4 spaces), the name `intl`. Revisit: ASI with `return` before a brace on the next line (lesson 1.4, Prettier); rounding and -0 in formatPrice when discount math arrives (1.005 gives $1.01, -0 gives -$0.00, signDisplay); two nvm installs (shell 24.15.0, PhpStorm 24.14.1).
