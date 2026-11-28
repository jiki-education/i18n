---
title: "Indeksowanie stringów"
description: "Wyciąganie pojedynczej litery ze stringa za pomocą nawiasów kwadratowych i numeru pozycji. Pamiętaj, że pozycje zaczynają się od zera."
en_md5: cd31e0366b3090b358494667003f54c9
---

Wyobraź sobie, że masz moje imię, Jeremy, i chcesz wyciągnąć z niego mój inicjał, J. Jak się do tego zabrać?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki zastanawia się, jak wyciągnąć pojedynczą literę ze stringa"
  width="361"
  height="353"
/>

String możesz sobie wyobrazić jako ciąg liter. Zatem `"Jeremy"` ma sześć liter, J-E-R-E-M-Y, a każda z nich ma swoją pozycję. `"J"` jest na pierwszej pozycji, a `"y"` na ostatniej.

W języku JavaScript i w większości języków programowania te pozycje zaczynają się od zera. Pierwsza litera, `"J"`, jest więc na pozycji 0, potem mamy `"e"` na pozycji 1, `"r"` na 2, `"e"` na 3, `"m"` na 4, a `"y"` na 5.

A to liczenie od zera jest dość dziwne i szczerze mówiąc, życie byłoby łatwiejsze, gdybyśmy po prostu zaczynali liczyć od jedynki, tak jak w normalnym świecie. Ale tak nie jest. W większości języków programowania liczymy od zera, więc trzeba się tego po prostu nauczyć.

Jeśli więc chcemy wyciągnąć literę z konkretnej pozycji, możemy użyć nawiasów kwadratowych z numerem w środku.

Jeśli napiszemy `"Jeremy"[0]`, mówimy: daj mi pierwszą literę słowa `"Jeremy"`.

Jeśli napiszemy `"Jeremy"[1]`, mówimy: daj mi drugą literę.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

To samo możemy zrobić ze zmiennymi. Jeśli więc utworzymy zmienną `name` (nazwa) i ustawimy jej wartość na string `"Jeremy"`, to możemy napisać `name[0]` i znowu dostaniemy `"J"`.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Jedna rzecz powinna być jasna: to, co zwraca `name[0]`, to po prostu kolejny string. To kolejna kartka papieru z literą J. Nie ma w niej nic szczególnego. To string, tak samo jak `"Jeremy"` jest stringiem.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki trzyma nową kartkę papieru z samą literą J"
  width="500"
  height="289"
/>

Po prostu jest na niej jedna litera zamiast sześciu.

A robienie tego w ogóle nie wpływa na oryginalny string. Nie odrywamy przecież J ani nic takiego. Po prostu znajdujemy tę literę, której chcemy, i tworzymy z niej nowy string.
