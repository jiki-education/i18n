---
title: "Używanie `repeat` bez liczby"
description: "Puste nawiasy w pętli `repeat`, dzięki którym Jiki idzie dalej, dopóki coś innego nie każe mu się zatrzymać."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Do tej pory w pętli `repeat` zawsze pojawiała się liczba mówiąca, ile razy coś powtórzyć. Powtórz pięć razy, 10 razy, 40 razy. Czasem służyła do tego zmienna. Ale zawsze było dokładnie wiadomo, ile razy Jiki ma powtórzyć pętlę. Czasem jednak nie wiadomo z góry, ile razy trzeba powtórzyć. Pomyśl o labiryncie. Na samym początku tego kursu labirynt rozwiązywało się, wypisując konkretne ruchy. Ścieżkę było widać, wystarczyło policzyć kroki i wypisać odpowiednią liczbę ruchów.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Labirynt, w którym ludzik widzi ścieżkę, może policzyć kroki i wypisać dokładnie właściwe ruchy"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

A co, jeśli powiem: „Napisz mi kod, który rozwiąże każdy labirynt, jaki Ci dam”? Taki labirynt może wymagać 10 kroków, 50 albo 200. I nie wiadomo tego z góry.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Kilka różnych labiryntów o rozmaitych kształtach i rozmiarach, a Jiki głowi się, jak rozwiązać każdy z nich"
  width="402"
  height="400"
/>

Potrzebny jest więc sposób, żeby po prostu powiedzieć Jikiemu: idź dalej. Sprawdzaj, w którą stronę możesz iść, podejmuj decyzje, posuwaj się naprzód, w kółko, aż skończysz.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki biegnie na bieżni i po prostu cały czas idzie dalej"
  width="428"
  height="400"
/>

A sposób na to jest naprawdę prosty. Po prostu nie podawaj słowu kluczowemu `repeat` żadnej liczby. Zostaw te nawiasy puste. Jeśli tak zrobisz, Jiki będzie szedł dalej, dopóki coś innego nie każe mu się zatrzymać. Później zobaczymy, co może być tym czymś innym. Ale na razie będzie po prostu szedł dalej, aż ćwiczenie się skończy albo aż uzna, że idzie już bardzo, bardzo długo, że chce przerwy i że ma dosyć.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki zwisa wyczerpany nad bieżnią po bardzo długim biegu, gotowy się poddać i zrobić przerwę"
  width="500"
  height="378"
/>
