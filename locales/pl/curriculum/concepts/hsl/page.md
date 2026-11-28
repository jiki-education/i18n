---
title: "Kolory HSL"
description: "Tworzenie kolorów z odcienia (barwy, 0–360), nasycenia (jak żywy, 0–100) i jasności (jak jasna, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL daje nam zupełnie inny sposób myślenia o kolorach niż RGB. HSL to skrót oznaczający odcień (ang. _hue (H)_), nasycenie (ang. _saturation (S)_) i jasność (ang. _lightness (L)_). Masz do dyspozycji funkcję o nazwie `hsl`, która przyjmuje trzy liczby: jedną na odcień, jedną na nasycenie i jedną na jasność, a w wyniku zwraca kolor. Przyjrzyjmy się więc, co oznaczają te trzy słowa.

```javascript
hsl(hue, saturation, lightness)
```

Odcień to barwa koloru, jakiej chcesz użyć, i mieści się w zakresie od zera do 360. Wyobraź sobie tęczę. Ja myślę o tym właśnie tak. Po lewej mamy czerwień, potem pomarańcz, żółć, zieleń, błękit, fiolet i tak naprawdę wracamy z powrotem do czerwieni. Jeśli więc podasz zero, zaczynasz po lewej, a to jest czerwień. Jeśli podasz `120`, prosisz o zieleń. `230` to błękit. Możesz o tym myśleć także jak o kole kolorów, i właśnie tym naprawdę jest liczba 360. To liczba stopni w kole. Ja zawsze po prostu wyszukuję potrzebne liczby, więc nie martw się, że musisz to zapamiętać, ale dobrze jest wiedzieć, o co chodzi. To tyle o odcieniu, czyli o barwie. Następnie mamy nasycenie, czyli to, jak żywy jest kolor. Mieści się w zakresie od zera do 100. Przy zerze dostajesz po prostu szarość. Nie ma tam w ogóle żadnego koloru ani tonu. Przy 100 dostajesz pełny, żywy, intensywny kolor. A potem mamy jasność. Jasność mówi o tym, jak jasny jest kolor, i ona też mieści się w zakresie od zera do 100. Przy zerze dostajesz czerń. Niezależnie od wybranego odcienia dostajesz czerń. Nie ma w niej światła. A przy 100 dostajesz biel. Niezależnie od wszystkiego innego jest po prostu pełna światła, więc jest biała. 50 to sam środek, czyli normalny kolor. Możesz więc myśleć o tym jak o suwaku do rozjaśniania lub przyciemniania koloru.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Koło kolorów odcieni i tęcza pokazujące, że 0 to czerwień, 120 to zieleń, a 240 to błękit"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Suwak nasycenia od 0 (szarość) przez 50 do 100 (pełny, żywy kolor)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Suwak jasności od 0 (czerń) przez 50 do 100 (biel)"
  width="500"
  height="398"
/>

Jeśli więc chcemy zwykłe czerwone koło, które w RGB zapisalibyśmy jako 255, zero, zero (cała czerwień, żadnej zieleni, żadnego błękitu), tutaj użyjemy zera, 100 i 50. Zero na odcień czerwieni, 100 na nasycenie, czyli pełny kolor, i 50 na jasność, czyli normalny poziom jasności. Jeśli chcemy zrobić z niego zielone koło, wystarczy zmienić odcień na `120`. Jeśli chcemy ciemniejszą zieleń, możemy zmniejszyć jasność do `25`.

```javascript
hsl(0, 100, 50) // czerwony
hsl(120, 100, 50) // zielony
hsl(120, 100, 25) // ciemnozielony
```

Jeśli chcemy uzyskać bardziej wyblakłą zieleń, możemy ująć trochę koloru, trochę nasycenia, powiedzmy zejść do `30`.

Jeśli chcesz jaskrawy, gorący róż, to odcień około 300 daje róż, potem podnosimy nasycenie do 100, żeby był naprawdę żywy, i zwiększamy też jasność, do jakichś 60.

HSL świetnie się sprawdza, kiedy chcesz przechodzić przez kolejne kolory. Jeśli chcesz tęczę, wystarczy cały czas zwiększać odcień.
