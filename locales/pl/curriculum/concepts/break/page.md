---
title: "Słowo kluczowe `break`"
description: "Używanie słowa kluczowego `break` w ciele pętli, żeby natychmiast wyjść z pętli i przejść do kodu, który znajduje się po niej."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Słowo kluczowe `break` można zastosować w dowolnym miejscu ciała dowolnej pętli.

Fragment między nawiasami klamrowymi to właśnie ciało pętli. A kiedy Jiki go zobaczy, natychmiast wychodzi z pętli i przechodzi do kodu, który jest poniżej.

Załóżmy więc, że mamy wymóg: pętla ma się wykonać 50 razy, ale chcemy ją zatrzymać, kiedy użytkownik strzeli pięć razy. Wtedy na górze możemy umieścić pętlę `for`, która liczy do 50.

Ale w środku pętli możemy też umieścić warunek, który sprawdza, czy użytkownik strzelił już pięć razy, a jeśli tak, to używamy `break`, żeby zatrzymać pętlę.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // wyjdź z pętli
  }
}
```
