---
title: "Pingwin"
description: "Dokończ symetryczny rysunek pingwina."
en_md5: bff370c28fd178d8c0ac9f65e3384e81
---

W tym ćwiczeniu po raz pierwszy narysujemy elipsy, a także zastanowimy się nieco bardziej nad symetrią, o której wspomnieliśmy w ćwiczeniu Lisi pyszczek.

W tym ćwiczeniu używa się elips. Elipsy przypominają rozciągnięte koła. Nadal określamy punkt środkowy, ale zamiast jednego promienia używamy dwóch: poziomego i pionowego. Jeśli promień pionowy jest większy od poziomego, elipsa będzie wysoka. Z kolei jeśli promień poziomy jest większy od pionowego, elipsa będzie spłaszczona. Jeśli oba promienie będą równe, znów powstanie koło!

Funkcja `ellipse` (elipsa) przyjmuje 5 danych wejściowych: pozycję środka (`centerX` (współrzędna X środka), `centerY` (współrzędna Y środka)), promień poziomy (`radiusX` (promień poziomy)), promień pionowy (`radiusY` (promień pionowy)) oraz kolor:

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="Schemat funkcji ellipse" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Pingwin

Twoim zadaniem jest narysowanie prawej połowy pingwina. Spróbuj to zrobić **BEZ** najeżdżania kursorem na współrzędne i bez ich zgadywania. Gotowy rysunek powinien wyglądać następująco:

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="Pingwin" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Narysowaliśmy dla Ciebie połowę obrazka. Analizując gotowy kod, bez problemu ustalisz pozostałe szczegóły, aby rysunek był symetryczny. Pamiętaj, że lewy górny róg obszaru rysowania to `0,0`. Prawy dolny to `100,100`. Pingwin znajduje się na samym środku. Aby narysować nos, **zmień** środkowe współrzędne trójkąta. Nie dodawaj nowego trójkąta.

**Zacznij od kliknięcia _„Uruchom kod”_**, aby zobaczyć, jak wygląda początkowy obrazek. Miłej zabawy!
