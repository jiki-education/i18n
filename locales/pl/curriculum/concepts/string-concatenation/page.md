---
title: "Konkatenacja ciągów znaków"
description: "Łączenie ciągów znaków za pomocą `+`, aby skleić stały tekst i zmienne w jeden dłuższy ciąg znaków."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Wiesz już, czym są ciągi znaków. To kawałki papieru z zapisanym na nich tekstem.

Do tej pory każdy używany przez Ciebie ciąg znaków był wpisywany bezpośrednio. Co się stanie, jeśli zechcesz zbudować ciąg znaków na podstawie zmiennych lub warunków? Jak to zrobić?

Istnieją na to dwa sposoby.

Pierwszy z nich to konkatenacja ciągów znaków (ang. _string concatenation_), co jest wyszukanym i nieco mylącym określeniem na łączenie dwóch ciągów znaków ze sobą.

Wyobraź sobie, że masz dwa słowa: `"hello"` (cześć) i `"world"` (świat), i chcesz utworzyć ciąg znaków zawierający `"hello world"`.

Możesz po prostu wpisać `"hello world"` jako jeden ciąg znaków, ale możesz też napisać `"hello " + "world"`, co da Ci dokładnie ten sam ciąg znaków.

Oczywiście w tym przypadku nie jest to zbyt przydatne. Ale co, jeśli mielibyśmy zmienną z czyimś imieniem i chcielibyśmy się z tą osobą przywitać?

Wyobraź sobie więc, że mamy zmienną o nazwie `name` (imię), która czasami zawiera `"Jeremy"` (imię Jeremy), a innym razem `"Jiki"` (imię Jiki). Chcemy powiedzieć `"hello Jeremy"` lub `"hello Jiki"`, używając tej zmiennej.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki trzymający pudełko z napisem name, które może zawierać różne wartości"
  width="207"
  height="400"
/>

Cóż, możemy to osiągnąć, wykorzystując koncepcję konkatenacji:

```javascript
"hello " + name // "hello Jeremy" lub "hello Jiki"
```

To da nam `"hello Jeremy"`, `"hello Jiki"` lub przywitanie z kimkolwiek innym, w zależności od tego, co znajduje się w pudełku `name`.
