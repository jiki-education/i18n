---
title: "Słowo kluczowe `continue`"
description: "Używanie słowa kluczowego `continue` w pętli, żeby pominąć resztę bieżącej iteracji i przejść od razu do następnej."
en_md5: 6cd21a2f25c493f61d000f865014709d
---

Czasami chcemy pominąć konkretną iterację pętli, zamiast wychodzić z niej całkiem. Wyobraź sobie, że chcemy coś zrobić tylko dla liczb nieparzystych.

Chcemy móc powiedzieć: jeśli `i` (licznik pętli) jest nieparzyste, nie wykonuj tej iteracji.

Ale nie chcemy całkiem wychodzić z pętli. Chcemy tylko pominąć tę jedną iterację i spojrzeć na następną.

I właśnie do tego mamy kolejne słowo kluczowe: `continue`.

Kiedy Jiki widzi `continue`, po prostu wraca na początek pętli i zaczyna kolejną iterację. Więc w pętli `for...of`, jeśli natrafi na `continue`, przechodzi do kolejnego elementu tablicy.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Pomija resztę pętli dla "something"
  }
  // Reszta pętli...
}
```

W pętli `for` trafia na inkrementację `i++` i zaczyna kolejną iterację.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Pomija resztę pętli dla liczb parzystych
  }
  // Reszta pętli...
}
```
