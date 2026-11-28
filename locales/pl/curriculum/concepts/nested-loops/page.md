---
title: "Pętle w pętlach"
description: "Umieszczanie jednej pętli w drugiej, tak żeby pętla wewnętrzna wykonała się w całości dla każdego kroku pętli zewnętrznej, co świetnie sprawdza się przy siatkach."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Załóżmy, że chcemy rząd kwiatów. Możemy napisać coś takiego. Ustawiamy pozycję, sadzimy kwiat, zwiększamy pozycję o 10, powtarzamy i w końcu mamy ładny, równy rząd kwiatów.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki przy notatniku, a poniżej jeden równy rząd posadzonych kwiatów"
  width="406"
  height="400"
/>

A co, jeśli chcemy siatkę kwiatów z rzędami i kolumnami? Na przykład cztery rzędy po pięć kwiatów w każdym.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Siatka kwiatów cztery na pięć, a Jiki zastanawia się, jak ją narysować"
  width="383"
  height="400"
/>

Mamy pętlę, która rysuje jeden rząd kwiatów. Jak wykorzystać ją do narysowania czterech rzędów? Albo co można zrobić, żeby narysować cztery rzędy?

Jedną z opcji jest po prostu skopiowanie tej pętli cztery razy i zmiana górnej pozycji w każdej z nich. To by zadziałało. Byłoby w porządku. Ale to się powtarza, a jest na to lepszy sposób. Wiemy, że kiedy kod się powtarza, można użyć pętli, żeby go uprościć.

Tutaj możemy więc użyć jednej pętli wewnątrz drugiej. Jednej pętli na rzędy i jednej na kwiaty w danym rzędzie. Zacznijmy od dodania pętli `repeat` wokół naszego kodu, żeby poczuć, jak to działa. I powtórzymy tylko raz. Mówimy więc Jikiemu, żeby wykonał raz wszystko, co jest w tych zewnętrznych nawiasach klamrowych. To daje dokładnie taki sam efekt, jak brak tej zewnętrznej pętli. Mówimy Jikiemu, żeby coś powtórzył raz, a to dokładnie to samo, co kazać mu zrobić to bez `repeat`. Ale tak właśnie działa ten kod. To legalny, poprawny kod. Mamy jedną pętlę wewnątrz drugiej.

A co się stanie, jeśli zmienimy tę zewnętrzną pętlę tak, żeby powtarzała dwa razy? Wtedy Jiki wykona dwa razy całe to powtórzenie: `plant` (sadzić) pięć razy. Posadzi 10 kwiatów. Ale wszystkie te kwiaty będą w tym samym rzędzie.

Tak samo, jak za każdym razem musimy nieco przesunąć pozycję z lewej na prawą, tak po narysowaniu każdego pełnego rzędu musimy też przesunąć pozycję pionową. Jak to zrobić? Możemy dodać zewnętrzną zmienną na górną pozycję, użyć jej w naszej funkcji `plant`, a potem zwiększać ją o 10 po każdym rzędzie.

Prześledźmy, jaka jest wartość w każdym momencie. Górna pozycja zaczyna się od 10. Przez pierwsze pięć sadzeń zostaje taka sama. Lewa pozycja rośnie. Potem dodajemy kolejne 10 do górnej pozycji i sadzimy pięć kolejnych kwiatów trochę niżej. Lewą pozycję znowu ustawiamy na 10, a potem znów ją zwiększamy za każdym razem.

A teraz możemy powiedzieć: powtórz to cztery razy, i dostaniemy cztery rzędy po pięć roślin.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Gotowa siatka kwiatów cztery na pięć, a szczęśliwy Jiki pokazuje dwa kciuki do góry"
  width="389"
  height="400"
/>

Najważniejsze jest to, że Jiki kończy całą pracę w pętli wewnętrznej (ang. _inner loop_), zanim wróci do pętli zewnętrznej (ang. _outer loop_). Nie skacze tam i z powrotem. Kończy pętlę wewnętrzną i przechodzi do kolejnego kroku pętli zewnętrznej.

W tej sytuacji pętlę zewnętrzną można traktować jako tę, która kontroluje grupy, czyli rzędy, a pętlę wewnętrzną jako tę, która kontroluje każdy element tej grupy, czyli każdy element w rzędzie. W naszym przykładzie pętla zewnętrzna tworzy cztery rzędy, a pętla wewnętrzna umieszcza pięć roślin, pięć elementów w każdej grupie.
