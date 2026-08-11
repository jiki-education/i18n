---
title: "Zegar cyfrowy"
description: "Wyświetl prawidłową godzinę na 12-godzinnym zegarze cyfrowym."
en_md5: e3decc089d371b7113f2657f7571c001
---

W tym ćwiczeniu użyjesz dwóch nowych funkcji do odczytywania czasu:

- `currentTimeHour()` (bieżąca godzina): zwraca bieżącą godzinę w formacie 24-godzinnym (np. 15 minut przed północą zwróci `23`) jako liczbę.
- `currentTimeMinute()` (bieżąca minuta): zwraca bieżącą minutę jako liczbę.

Twoim zadaniem jest aktualizowanie zegara cyfrowego na podstawie liczb, które zwrócą te funkcje.

Zegar cyfrowy oczekuje liczb w formacie 12-godzinnym z oznaczeniem `am` lub `pm` (nazywanym „meridiem”).

Na przykład:

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

Aby wyświetlić czas na zegarze, używasz funkcji `displayTime(hour, minutes, meridiem)` (wyświetl czas).

W każdym scenariuszu bieżący czas jest inny. Twoim zadaniem jest napisanie kodu, dzięki któremu wszystkie scenariusze zadziałają. W ostatnim scenariuszu używamy bieżącego czasu rzeczywistego, więc ten scenariusz będzie się zmieniał za każdym razem, gdy czas rzeczywisty przesunie się o minutę!
