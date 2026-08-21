---
title: "Lisi pyszczek"
description: "Zbuduj geometryczny lisi pyszczek z kolorowych trójkątów."
en_md5: 095833a5b2117c2d26500103216bf247
---

To ćwiczenie wprowadzi Cię do funkcji `triangle` (trójkąt). Przyjmuje ona 7 danych wejściowych. Pierwsze 6 danych wejściowych to pary współrzędnych dla trzech rogów. Ostatnią daną wejściową jest `color`:

- `x1`, `y1`: Pierwszy punkt narożny
- `x2`, `y2`: Drugi punkt narożny
- `x3`, `y3`: Trzeci punkt narożny
- `color` (kolor): Kolor trójkąta (np. `"orange"`)

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="Schemat funkcji triangle" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Rysowanie lisiego pyszczka

Twoim zadaniem jest użycie trójkątów do zbudowania geometrycznego lisiego pyszczka:

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="Lisi pyszczek" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Pyszczek jest symetryczny w poziomie (lewa strona jest identyczna z prawą). Składa się w sumie z 8 trójkątów:

- Dwa policzki w kolorze `"white"`
- Dwoje uszu w kolorze `"brown"`
- Dwie połowy pyszczka w kolorze `"orange"`
- Nos w kolorze `"charcoal"` (dwa trójkąty)

(Upewnij się, że używasz tych kolorów podczas rysowania trójkątów, i pamiętaj, aby sprawdzić, czy zapisujesz je jako ciągi znaków (ang. _string_)!)

Narysowaliśmy dla Ciebie kontury niektórych części, aby pomóc Ci zacząć. Jeśli będziesz postępować zgodnie z kolejnością podaną w komentarzach, zauważysz, że ułatwi to nieco zadanie.

Dodatkowo, aby jeszcze bardziej ułatwić Ci pracę, wszystkie użyte liczby są podzielne przez 5 (np. `5`, `10`, `15` itd. są prawidłowe, ale `1`, `2`, `3`, `4`, `6`, `7`, `8`, `9`, `11` itd. już nie). Często spotkasz się z tym wzorcem w kolejnych ćwiczeniach.

I jeszcze jedno. Możesz najechać kursorem na obszar roboczy, aby znaleźć współrzędne. To świetne rozwiązanie dla lewej strony, ale ponieważ prawa strona jest symetryczna, czy potrafisz sobie z nią poradzić bez najeżdżania kursorem?

Powodzenia!
