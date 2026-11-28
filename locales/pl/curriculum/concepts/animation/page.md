---
title: "Animacja"
description: "Oszukiwanie oka, żeby dostrzegło ruch: zamalowujemy tło i rysujemy każdą klatkę od nowa w trochę innym miejscu."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Do tej pory, gdy rysujemy za pomocą pętli `repeat` (powtarzaj), każda nowa rzecz, którą narysujemy, coś dodaje do obrazu. Jeśli narysujemy nową cegłę w murze, wypełni ona lukę. Jeśli narysujemy 10 kółek, na ekranie zobaczymy 10 kółek. To jak obraz. Gdy położysz farbę na ścianie, nie znika ona, kiedy obok malujesz coś nowego. Zostaje. Ale co, jeśli chcemy, żeby coś wyglądało, jakby się poruszało?

Czy zdarzyło Ci się kiedyś zobaczyć flipbook? Były bardzo popularne w czasach mojego dzieciństwa, dziś już rzadziej. Flipbook to taka mała książeczka, w której każda kartka ma trochę inny rysunek. Kiedy szybko przerzucasz kartki, Twoje oczy widzą, że rysunki się zmieniają, a mózg myśli, że coś się porusza. W rzeczywistości nic się nie porusza. To po prostu mnóstwo trochę różnych obrazków, jeden po drugim. I dokładnie tak działa animacja w kodzie. Sztuczka jest ta sama. Zanim narysujemy nową scenę, zamalowujemy całą planszę kolorem tła, trochę jakbyśmy zaczynali nową kartkę we flipbooku, a potem wprowadzamy w scenie drobną zmianę, żeby sprawiała wrażenie ruchu.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Flipbook przedstawiający biegnącą postać z patyczków, każda kartka jest trochę inna, więc postać wydaje się poruszać"
  width="500"
  height="274"
/>

Weźmy więc dobrze znany blok kodu, w którym rysujemy kółka w poprzek ekranu: ustawiamy zmienną `position` (pozycja) i mamy blok `repeat`, w którym rysujemy kółko, a potem przesuwamy `position` o jeden w prawo. Jeśli uruchomimy ten blok `repeat` 100 razy, zobaczymy 100 kółek w poprzek ekranu.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Szereg 100 niebieskich kółek narysowanych od lewej do prawej w poprzek ekranu"
  width="500"
  height="197"
/>

A teraz zobacz, co się dzieje, jeśli przed narysowaniem kółka dodamy za każdym razem jeden zwykły prostokąt.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Zamiast szeregu kółek nasze oczy dają się teraz oszukać i widzą jedno kółko, które zdaje się sunąć przez ekran.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Sekwencja klatek, z których każda to świeża biała plansza z jednym niebieskim kółkiem o krok dalej w prawo"
  width="500"
  height="187"
/>

Za każdym razem, gdy przechodzimy przez pętlę, malujemy zupełnie nowe tło, zakrywając wszystko, co było wcześniej, a potem rysujemy kółko w jego nowym miejscu.

Każde przejście przez pętlę to jak nowa kartka we flipbooku.

Najważniejsze, co trzeba tu zrozumieć, to fakt, że nie przesuwamy kółka. Kółko nie jest obiektem, który się przesuwa. To tylko rysunek. Za każdym przejściem przez pętlę zamalowujemy stary rysunek i tworzymy zupełnie nowy, trochę dalej w prawo. Twoje oko składa to wszystko w całość i widzi ruch, ale w rzeczywistości to po prostu mnóstwo osobnych rysunków, jeden po drugim.

Możesz wykorzystać ten pomysł, żeby stworzyć zachód słońca. Przesuwasz słońce, zmieniasz jego rozmiar i kolor. Za każdym razem to ta sama technika. Ustaw kilka zmiennych, pomaluj świeże tło i narysuj wszystko. Zaktualizuj zmienne i powtórz.
