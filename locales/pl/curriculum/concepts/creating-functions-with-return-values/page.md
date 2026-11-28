---
title: "Dodawanie zwracania wartości do funkcji"
description: "Używanie słowa kluczowego `return`, żeby dać własnym funkcjom kanał wyjściowy, który oddaje wartość temu, kto je wywołuje."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Wiesz już, jak tworzyć funkcje z danymi wejściowymi i bez nich. Została jeszcze jedna rzecz do nauczenia, po której staniesz się ekspertem od tworzenia funkcji: jak dać swoim funkcjom kanał zwrotny.

Korzystasz już z wielu funkcji, które coś zwracają. `isAlienAbove` (czy nad Tobą jest obcy) zwraca Ci prawdę albo fałsz. `Math.randomInt(1, 10)` (Math to matematyka, randomInt to losowa liczba całkowita) zwraca Ci losową liczbę.

Kiedy Jiki używa takich funkcji, z kanału wyjściowego coś wyskakuje, a potem Jiki może tego użyć.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki odbiera wartość, która wyskakuje z kanału wyjściowego maszyny"
  width="500"
  height="312"
/>

Żeby to zrobić, potrzebujemy kolejnego nowego słowa kluczowego, a jest nim słowo kluczowe `return`.

Słowo kluczowe `return` mówi Mini Jikiemu, żeby wypchnął coś z kanału zwrotnego.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Mini Jiki wewnątrz maszyny wypycha wartość 42 przez kanał wyjściowy"
  width="500"
  height="335"
/>

Zróbmy więc funkcję i nazwijmy ją `meaningOfLife` (sens życia). Jej jedynym zadaniem jest zawsze zwracać liczbę `42`. Nie przyjmuje żadnych danych wejściowych. Zapisujemy ją tak:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Maszyna meaningOfLife wysyła liczbę 42 ze swojego kanału wyjściowego"
  width="500"
  height="323"
/>

Teraz wszędzie tam, gdzie w kodzie użyjemy `meaningOfLife()`, dostajemy z powrotem liczbę `42`, którą możemy wykorzystać jak każdą inną wartość. Możemy włożyć ją do pudełka za pomocą `let`, przekazać jako dane wejściowe do innej funkcji albo porównać w instrukcji warunkowej.

Funkcje ze zwracaniem wartości mogą też przyjmować dane wejściowe. Możesz napisać funkcję `ageBracket(age)` (przedział wiekowy), która zwraca `"Sorry, too young"`, gdy `age` jest poniżej 18, a w przeciwnym razie `"Welcome"`. Kto ją wywoła, dostaje z powrotem ten string, który zwróciła funkcja.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Wartość wieku wrzucana do otworu wejściowego maszyny, żeby mogła zdecydować, co zwrócić"
  width="487"
  height="400"
/>

Tak właśnie działa programowanie u samych podstaw. Tworzymy mnóstwo takich małych klocków, a potem składamy je w programy.
