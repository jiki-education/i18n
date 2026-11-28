---
title: "Liczby losowe"
description: "Używanie `Math.randomInt` z minimum i maksimum, żeby za każdym razem, gdy funkcja się uruchomi, dostać inną liczbę."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Często w programowaniu chcemy użyć funkcji i za każdym razem otrzymać inną liczbę losową (ang. _random number_).

Przydaje się to na wiele sposobów i w wielu miejscach, ale szczególnie w kryptografii, gdzie robi się mnóstwo rzeczy, na przykład tworzy kody do udostępniania między komputerami, i te kody muszą być losowe, żeby nie dało się ich złamać.

Żeby Ci to ułatwić, masz do dyspozycji funkcję o nazwie `Math.randomInt` (Math oznacza matematykę, a randomInt to losowa liczba całkowita). Możesz zauważyć, że w środku jest kropka. Gdy masz dostęp do coraz większej liczby funkcji, dzielimy je na różne grupy, żeby zachować porządek, a fragment `Math` (skrót od matematyki) to nazwa grupy, do której należy ta funkcja. Mówi Jikiemu, w której sekcji półek ma szukać, w tym wypadku w sekcji `Math`. Kropka oznacza po prostu: przejdź do tej sekcji i znajdź funkcję. Na razie się tym zbytnio nie przejmuj. Instrukcje do ćwiczeń zawsze powiedzą Ci, jakie funkcje są dostępne i jak ich używać. Najważniejsze, żeby zrozumieć, że gdy Jiki użyje tej funkcji, to za każdym razem, gdy ją uruchomi, dostanie inną liczbę, ale z jednym ograniczeniem. Funkcja przyjmuje dwie dane wejściowe. Pierwsza z nich to najmniejsza liczba, jaką maszyna może zwrócić, a druga to największa liczba, jaką maszyna może zwrócić. Więc jeśli użyjesz funkcji `Math.randomInt` z liczbami `10` i `13`, zawsze dostaniesz z powrotem `10`, `11`, `12` albo `13`. Ale za każdym razem będzie to inna liczba.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki wspina się po drabinie do sekcji Math na półkach swojego magazynu"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Maszyna Math.randomInt z dwoma lejkami wejściowymi na górze"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Maszyna Math.randomInt z 10 i 13 w lejkach wejściowych, która zwraca 10, 11, 12 albo 13"
  width="488"
  height="400"
/>

Wyobraź sobie, że chcesz narysować koło w losowym miejscu na planszy. Możesz użyć `Math.randomInt`, żeby za każdym razem losowo dostawać inne wartości dla `left` i `top`, ale z granicami, powiedzmy, `10` i `90`, żeby koło nigdy nie wyszło poza planszę. Za każdym razem, gdy uruchomisz ten kod, koło zostanie narysowane w trochę innym miejscu.
