---
title: "Kolory RGB"
description: "Mieszanie czerwonego, zielonego i niebieskiego światła w zakresie od 0 do 255, żeby uzyskać dowolny kolor na ekranie."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB pozwala myśleć o kolorach jak o mieszaninie czerwonego, zielonego i niebieskiego światła. Właśnie to oznaczają te trzy litery: czerwony (ang. _red (R)_), zielony (ang. _green (G)_), niebieski (ang. _blue (B)_). Jeśli pamiętasz mieszanie farb w szkole, to podobny pomysł, tylko że zamiast farb mieszamy światło.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Trzy nachodzące na siebie okręgi czerwonego, zielonego i niebieskiego światła, których zmieszanie daje żółty, magenta, cyjan i biały"
  width="500"
  height="390"
/>

W wielu ćwiczeniach spotkasz funkcję o nazwie `rgb(red, green, blue)`. Przyjmie ona trzy liczby jako dane wejściowe (jedną dla czerwonego, jedną dla zielonego, jedną dla niebieskiego) i zwróci kolor.

Liczby, których możesz użyć jako danych wejściowych, mieszczą się w zakresie od zera do `255`. Zero oznacza „nie chcę ani trochę tego koloru”, a `255` znaczy „dodaj tego koloru tyle, ile się da”. Jeśli więc wywołamy funkcję `rgb` z danymi wejściowymi `255`, zero i zero, mówimy: „chcę cały czerwony”. Pamiętaj, że `255` to największa liczba, jaką możesz tam podać. Ale nie chcemy ani trochę zielonego ani niebieskiego, więc oba wynoszą zero. Dostajemy więc czerwony kolor. Możemy zapisać go w zmiennej, a potem użyć w funkcji `circle` tak samo, jak już robiliśmy to z nazwanymi stringami. A co, jeśli wywołamy funkcję `rgb` z danymi wejściowymi zero, `255` i zero? Mówimy teraz: żadnego czerwonego, cały zielony, żadnego niebieskiego. I dostajemy zielone koło. A co, jeśli chcemy żółty? Żółty to mieszanina czerwonego i zielonego. Możemy więc powiedzieć: daj mi cały czerwony, cały zielony i ani trochę niebieskiego, a to da nam żółte koło. Możemy też używać mniejszych liczb. Jeśli chcemy trochę czerwonego, zero zielonego i dużo niebieskiego, dostaniemy fioletowe koło. A dużo czerwonego, trochę zielonego i odrobinę więcej niebieskiego daje różowe koło. I to całe RGB. Mieszamy czerwony, zielony i niebieski, żeby uzyskać różne kombinacje.

```javascript
rgb(255, 0, 0) // czerwony
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Czerwone koło utworzone przez rgb(255, 0, 0): cały czerwony, bez zielonego i niebieskiego"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // żółty
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Żółte koło utworzone przez rgb(255, 255, 0): cały czerwony i cały zielony, bez niebieskiego"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // różowy
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Różowe koło utworzone przez rgb(230, 50, 170): dużo czerwonego, trochę zielonego i odrobina niebieskiego"
  width="436"
  height="400"
/>

RGB sprawdza się świetnie, kiedy chcesz wyregulować jeden konkretny składnik: ile czerwonego, ile zielonego, ile niebieskiego.
