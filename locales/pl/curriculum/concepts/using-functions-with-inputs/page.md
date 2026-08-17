---
title: "Dane wejściowe funkcji"
description: "Wprowadzanie wartości do otworów wejściowych funkcji, aby zmienić jej działanie przy każdym uruchomieniu."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Jedną z najpotężniejszych cech maszyn, czyli funkcji, jest to, że wiele z nich pozwala na wprowadzenie do nich pewnych informacji, co po ich uruchomieniu zmienia sposób ich działania.

Do tej pory widzieliśmy maszyny, które wyglądają trochę jak pudełka, tak jak ta o nazwie `move` (porusz się).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Maszyna move, zwykłe pudełko bez otworów wejściowych"
  width="322"
  height="400"
/>

Ale niektóre maszyny mają otwory wejściowe, tak jak ta maszyna `walk` (idź). Maszyna `walk` jest bardzo podobna do maszyny `move`. Przesuwa ona ludzika (ang. _character_) do przodu, z tą różnicą, że Jiki może użyć otworu wejściowego, aby określić, ile kroków do przodu ma przejść Twój ludzik. Zamiast więc używać funkcji `move` trzy razy z rzędu: `move`, `move`, `move`, możesz teraz po prostu użyć funkcji `walk` i kazać Jikiemu wrzucić do maszyny liczbę trzy.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Maszyna walk z otworem wejściowym na górze na liczbę kroków"
  width="481"
  height="400"
/>

Aby zrobić to w kodzie, nadal piszemy nazwę funkcji, w tym przypadku `walk`, i nadal wstawiamy nawias otwierający. Jednak przed nawiasem zamykającym określamy, jakie mają być dane wejściowe (ang. _input_). W tym przypadku chcemy, aby danymi wejściowymi była liczba trzy, co oznacza, że ludzik ma przejść trzy kroki do przodu:

```javascript
walk(3)
```

Kiedy Jiki to zobaczy, weźmie liczbę trzy, o której możesz myśleć jak o małej monecie, i wrzuci ją do otworu wejściowego maszyny, zanim zakręci korbą, aby ją uruchomić.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki wrzucający liczbę 3 jak monetę do otworu wejściowego maszyny walk, a następnie kręcący korbą"
  width="421"
  height="400"
/>

W przypadku funkcji, które rysują prostokąty i koła, musisz kazać Jikiemu wprowadzić kilka różnych liczb, określających takie rzeczy, jak odległość od lewej krawędzi, odległość od górnej krawędzi, szerokość prostokąta czy jego wysokość.

W świecie Jikiego to po prostu różne otwory wejściowe, po jednym dla każdej z tych liczb.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Maszyna rectangle z otworami wejściowymi na odległość od lewej, od góry, szerokość i wysokość oraz maszyna circle z otworami na cx, cy i promień"
  width="396"
  height="400"
/>

W naszym kodzie po prostu wpisujemy każdą liczbę, oddzielając je przecinkami. Nazwa funkcji, nawias, liczba dla każdych danych wejściowych, wszystko oddzielone przecinkami, a na koniec zamykamy nawiasy:

```javascript
rectangle(10, 20, 30, 40)
```

Jeśli spróbujesz użyć funkcji z niewłaściwą liczbą danych wejściowych, otrzymasz błąd. Na przykład, jeśli spróbujesz wprowadzić dane do maszyny, która nie ma otworu wejściowego, Jiki powie Ci, że nie możesz tego zrobić. A jeśli spróbujesz użyć maszyny, która ma otwór wejściowy, ale nie powiesz Jikiemu, co ma do niego wrzucić, on również się zatrzyma i będzie narzekać. Spróbuj to zrobić, jeśli czujesz w sobie odrobinę buntu, i zobacz, co się stanie. W miarę jak rzeczy będą stawać się coraz bardziej skomplikowane, zaczniesz popełniać wiele takich błędów. Postaraj się tym nie stresować ani nie denerwować. Wszyscy uczymy się na błędach. To dosłownie najszybszy sposób, w jaki nasze mózgi mogą naprawdę przyswoić wiedzę. Każdy popełnia takie błędy. Wszyscy zaczynaliśmy od zera, więc nie stresuj się.

Warto wspomnieć o jeszcze jednej rzeczy: czasami w ćwiczeniach zobaczysz linie zaczynające się od dwóch ukośników, `//`. Nazywa się je komentarzami (ang. _comments_). Są to prywatne notatki tylko dla Ciebie, które Jiki całkowicie zignoruje. Jeśli więc Jiki zobaczy linię zaczynającą się od tych dwóch ukośników, po prostu ją przeskoczy i przejdzie do następnej. Komentarze dają Ci możliwość pisania własnych notatek. Są one bardzo przydatne, aby przypomnieć sobie, jak coś działa. Często komentarze są również pisane dla Ciebie, więc gdy zaczynasz ćwiczenie, mogą one sugerować, gdzie musisz napisać kod lub jak coś rozwiązać. Śmiało dodawaj też własne komentarze.

Na dole instrukcji do ćwiczenia znajdziesz informacje o funkcjach, których możesz użyć, oraz o tym, jakie dokładnie dane wejściowe musisz do nich wprowadzić.
