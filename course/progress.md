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

## 0.2 hint (2026-10-12)
Solution shown: shared frozen product constants from the fixtures at the top of cart.test.ts, first two addItem tests rewritten with them.
Revisit: module-level constants are shared references between tests; object property shorthand.

## 0.2 Values, references and immutability, review (2026-10-12)
Verdict: done with fixes
Notes: addItem, updateQuantity and removeItem are pure and correct, a probe with deeply frozen inputs passes. Hint topics fixed: updateQuantity sets the quantity, money functions return numbers, no default ids. Typecheck and lint clean. Not met: suite red (two-mascara cartTotals gives total 17.88 and savings 2.10, because unit values are rounded before multiplying by quantity), no frozen-array tests, 8 tests of 10, rounding per unit instead of per line. To fix: one roundMoney helper, round once per line and once per total, subtotal from list prices, total = subtotal - savings; two-mascara test as one line with quantity 2; readonly CartItem[] params and returns, then freeze arrays and items in tests; tests for finalPrice, lineTotal, removeItem, the quantity argument, a negative quantity, toBe for an unknown id; `{ ...prevItem, quantity }` instead of rebuilding fields; `some` instead of `find` as a boolean; param name `product`; `quantity <= 0`; drop annotations TS infers. Revisit: rounding rule for multi-line carts (mascara + palette gives 25.30, summing rounded lines gives 25.29); readonly arrays in React state (module 1); `.ts` import extension and 0.1 code style (Prettier in 1.4). Course gap: the lesson's freeze snippet doesn't compile against `CartItem[]` params (TS2345), the lesson needs a readonly note.

## 0.2 hint (2026-10-12)
Solution shown, part 1 of the review fixes: roundMoney helper, finalPrice, lineTotal and cartTotals rounded once per line and once per total, lineDiscount removed.
Revisit: why rounding the unit price first gives 17.88; subtotal as list prices, total as subtotal - savings.

## 0.3 hint (2026-10-13)
Solution shown: Claude wrote Dimension, Review, ProductMeta, Product, ProductList, CartProduct as Pick<Product, ...>, types.test.ts, and the sort.ts fixes (no `return` before `switch`, subtraction comparators, toSorted on a readonly input, never default, isProductSort type guard), and the payment.ts fixes (export, ${} interpolation, last four digits, switch on method.type, typos cash-on-delivery and cvc, PAYMENT_TYPES kept with `satisfies readonly PaymentMethod["type"][]`, file renamed from payments.ts), payment.test.ts and sort.test.ts. The learner asked to skip writing them.
Revisit: switch is a statement, not an expression like PHP match; comparator returns negative/zero/positive; sort mutates a shared array; `value is X` return type; an annotated copy of the discriminant (`const type: PaymentType = method.type`) breaks narrowing. Course gap: lesson 0.3 says the products fixture has 12 products, it has 30 (limit=30).
