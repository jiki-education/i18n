---
title: "Scenariusze"
description: "Różne warunki startowe, względem których ćwiczenie uruchamia Twój jeden fragment kodu, więc musisz sprawić, żeby działał we wszystkich."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Każde ćwiczenie ma różne scenariusze, czyli różne sytuacje, z którymi Twój kod musi sobie poradzić.

Zobaczysz je jako małe przyciski tuż nad danymi wyjściowymi każdego ćwiczenia. Każdy przycisk odpowiada innemu scenariuszowi. Twoim zadaniem jest napisać kod, który działa we wszystkich, nie tylko w pierwszym. Powtórzę to jeszcze raz. Kod piszesz tylko raz, ale ten sam kod uruchamia się w każdym scenariuszu. Różnica polega na tym, że każdy scenariusz może być trochę inaczej przygotowany, a funkcje, które dostajesz, mogą zwracać nieco inne rzeczy w zależności od tego, w którym scenariuszu jesteś.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Rząd przycisków scenariuszy tuż nad danymi wyjściowymi ćwiczenia, otoczony okręgiem dla wyróżnienia"
  width="500"
  height="318"
/>

Weźmy przykład gry w golfa. Może się zdarzyć, że odległość, na jaką przetacza się piłka, trzeba zmieniać w zależności od wartości zwracanej (ang. _return value_) funkcji `getShotLength` (czyli odległości uderzenia), która mówi, jak daleko golfista posłał piłkę. Wyobraź sobie, że gracz musiał przesunąć palcem po ekranie telefonu, żeby określić, jak daleko uderzył.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Scena z gry w golfa: golfista, piłka i flaga w dołku po prawej stronie"
  width="412"
  height="400"
/>

Wynik, który do Ciebie trafia, przechodzi właśnie przez tę funkcję. W jednym scenariuszu możesz użyć funkcji `getShotLength` i zwróci ona `23`, czyli krótkie przesunięcie. W innym zwróci `70`, długie przesunięcie. W jeszcze innym `45`. Twój kod musi przetoczyć piłkę na odpowiednią odległość w każdym scenariuszu, mając tylko jeden program, jeden zestaw kodu. Musisz użyć funkcji `getShotLength`, żeby sprawdzić, jak daleko poleciała piłka, a potem przetoczyć ją w to miejsce.

```javascript
let distance = getShotLength()
```

Scenariusze pilnują, żeby Twój kod naprawdę działał poprawnie. Napisanie kodu, który działa w jednej konkretnej sytuacji, jest całkiem łatwe. Napisanie kodu, który działa w wielu różnych sytuacjach, jest znacznie trudniejsze i znacznie cenniejsze. Kiedy rozwiązujesz ćwiczenia, zacznij od pierwszego scenariusza. Doprowadź go do działania. Potem przejdź do następnego scenariusza i też spraw, żeby działał. Kiedy Twój kod przestaje działać w innym scenariuszu, pomyśl, czym ten scenariusz się różni i jak Twój kod musi się dostosować.
