---
title: "Kolory"
description: "Dwa sposoby na określenie dowolnego koloru. RGB miesza czerwone, zielone i niebieskie światło. HSL korzysta z barwy, nasycenia i jasności."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Jeśli kiedykolwiek robisz z kodem coś wizualnego (a nawet jeśli chcesz zostać specjalistą od danych i całe to rysowanie wydaje Ci się trochę nudne, przekazywanie danych obrazami to kluczowa umiejętność), kolory można wyrażać na dwa różne sposoby. Używasz już kolorów po nazwie, takich jak `red` czy `yellow`, jako ostatniego argumentu funkcji rysujących. To wygodny sposób na szybkie sięgnięcie po kolor, ale dość ograniczający: nazwanych kolorów mamy tylko garstkę. Dlatego teraz zobaczymy dwa sposoby wyrażenia dowolnego koloru. Nazywają się RGB i HSL.

RGB pozwala myśleć o kolorze jako o mieszaninie czerwieni, zieleni i błękitu. Właśnie to oznacza skrót RGB: czerwony (ang. _red (R)_), zielony (ang. _green (G)_), niebieski (ang. _blue (B)_). Jeśli pamiętasz mieszanie farb w szkole, to podobny pomysł, tylko zamiast farby mieszamy światło.

W wielu ćwiczeniach spotkasz funkcję o nazwie `rgb`. Przyjmie trzy liczby jako dane wejściowe: jedną dla czerwieni, jedną dla zieleni i jedną dla błękitu, a zwróci kolor.

Liczby, których możesz użyć jako danych wejściowych, mieszczą się w zakresie od zera do `255`. Zero znaczy „nie chcę w ogóle tego koloru”, a `255` znaczy „wmieszaj tyle tego koloru, ile się da”. Jeśli więc wywołamy funkcję `rgb` z `255`, zerem i zerem, mówimy: chcę całą czerwień. Pamiętaj, że `255` to największa liczba, jaką można tam podać. Nie chcemy jednak ani zieleni, ani błękitu, więc oba są zerami. Dostajemy czerwony kolor i możemy zapisać go w zmiennej, a potem użyć w funkcji `circle` tak samo, jak dotąd robiliśmy z nazwanymi stringami. A co, jeśli wywołamy `rgb` z zerem, `255` i zerem? Mówimy wtedy: żadnej czerwieni, cała zieleń, żadnego błękitu. Dostajemy zielone koło. A jeśli chcemy żółty? Żółty to mieszanka czerwieni i zieleni. Mówimy więc: daj mi całą czerwień, całą zieleń i zero błękitu, i wychodzi żółty. Możemy też używać mniejszych liczb. Jeśli chcemy trochę czerwieni, zero zieleni i dużo błękitu, dostaniemy fiolet. A dużo czerwieni, trochę zieleni i jeszcze trochę więcej błękitu daje róż. To właśnie RGB: mieszamy czerwień, zieleń i błękit, żeby uzyskać różne kombinacje.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Trzy zachodzące na siebie okręgi czerwonego, zielonego i niebieskiego światła, które mieszają się w żółty, magenta, cyjan i biały"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Teraz zobaczmy HSL, czyli zupełnie inny sposób myślenia o kolorach. HSL to barwa (ang. _hue (H)_), nasycenie (ang. _saturation (S)_) i jasność (ang. _lightness (L)_). Podobnie jak przy RGB mamy funkcję `hsl`, która przyjmuje trzy liczby: jedną dla barwy, jedną dla nasycenia i jedną dla jasności, a zwraca kolor. Rozłóżmy więc te trzy słowa na części.

Barwa to odcień (ang. _shade_) koloru, jakiego chcesz użyć, i przyjmuje wartości od zera do 360. Wyobraź sobie tęczę. Ja myślę o tym właśnie tak. Po lewej mamy czerwień, potem pomarańcz, żółć, zieleń, błękit, fiolet i tak naprawdę wracamy do czerwieni. Jeśli podasz zero, zaczynasz po lewej, czyli masz czerwony. Jeśli podasz `120`, prosisz o zieleń. `230` to błękit. Możesz też myśleć o tym jak o kole barw (ang. _color wheel_), i to właśnie naprawdę oznacza 360: liczbę stopni w kole. Ja zawsze po prostu sprawdzam liczby, których potrzebuję, więc nie przejmuj się za bardzo zapamiętywaniem ich. Dobrze jednak wiedzieć, o co w tym chodzi. To była barwa, czyli odcień. Dalej mamy nasycenie, czyli to, jak żywy jest kolor. Przyjmuje wartości od zera do 100. Przy zerze masz po prostu szarość: żadnego koloru, żadnego tonu. Przy 100 dostajesz pełny, żywy, nasycony kolor. Potem mamy jasność. Jasność mówi, jak jasny jest kolor, i również przyjmuje wartości od zera do 100. Przy zerze dostajesz czerń, niezależnie od wybranej barwy. Nie ma w niej światła. Przy 100 dostajesz biel: niezależnie od wszystkiego innego kolor jest pełen światła, więc jest biały. 50 to dokładnie środek, normalny kolor. Możesz myśleć o tym jak o suwaku (ang. _slider_), którym rozjaśnia się albo przyciemnia kolor.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Tęcza i koło barw pokazujące barwę od 0 (czerwony) przez 120 (zielony) do 240 (niebieski)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Suwak nasycenia od 0 (szary) przez 50 do 100 (żywa magenta)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Suwak jasności od 0 (czarny) przez 50 (pełny kolor) do 100 (biały)"
  width="500"
  height="398"
/>

Jeśli więc chcemy normalne czerwone koło, które w RGB zapisalibyśmy jako 255, zero, zero (cała czerwień, zero zieleni, zero błękitu), tutaj użyjemy zera, 100 i 50. Zero dla czerwonej barwy, 100 dla nasycenia, czyli pełny kolor, i 50 dla jasności, czyli normalny poziom jasności. Jeśli chcemy zrobić z tego zielone koło, wystarczy zmienić barwę na `120`. Jeśli chcemy ciemniejszą zieleń, obniżamy jasność do `25`.

Jeśli chcemy bardziej wyblakłą zieleń, możemy ująć trochę koloru, trochę nasycenia, powiedzmy zejść do `30`.

Jeśli chcesz jasny, gorący róż, barwa około 300 to róż. Podnosimy wtedy nasycenie do 100, żeby kolor był naprawdę żywy, i podbijamy też jasność, do około 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Mamy więc dwa różne sposoby wyrażania koloru i oba są przydatne w różnych sytuacjach. RGB świetnie się sprawdza, gdy chcesz dostroić jeden konkretny składnik: ile czerwieni, ile zieleni, ile błękitu. HSL jest świetny, gdy chcesz przechodzić przez kolejne kolory. Jeśli chcesz tęczę, wystarczy cały czas zwiększać barwę.
