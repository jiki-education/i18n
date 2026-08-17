---
title: "Napraw mur"
description: "Załataj dziury w zniszczonym murze za pomocą prostokątów."
en_md5: ba2f5a5d726cef8cb80841c6e16132c6
---

Witaj w swoim pierwszym ćwiczeniu z rysowania. W tym ćwiczeniu będziesz rysować prostokąty, używając funkcji (ang. _function_) `rectangle` (prostokąt).

Aby narysować prostokąty, musimy znać ich górną i lewą pozycję oraz szerokość i wysokość. Kiedy używamy funkcji `rectangle`, możemy podać je jako dane wejściowe (ang. _input_):

- `left` (lewa strona): Lewa strona prostokąta
- `top` (góra): Góra prostokąta
- `width` (szerokość): Jak szeroki jest prostokąt
- `height` (wysokość): Jak wysoki jest prostokąt

<img src="/static/images/exercise-assets/fix-wall/intro-rectangle.webp" alt="Napraw mur" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Zawsze rysujesz na płótnie o szerokości 100 i wysokości 100. Zatem lewy górny róg płótna to `0,0`, a prawy dolny to `100,100`. **Możesz najechać kursorem na płótno**, aby sprawdzić, gdzie coś powinno się znaleźć.

### Naprawianie muru

Twoim zadaniem jest użycie trzech prostokątów, aby wypełnić dziury w murze.

Aby ułatwić Ci zadanie, wartości góry, lewej strony, wysokości i szerokości są podzielne przez 10.
