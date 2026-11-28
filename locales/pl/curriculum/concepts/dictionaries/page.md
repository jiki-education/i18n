---
title: "Słowniki"
description: "Kartka z notesu spiralnego, na której każdy wpis ma po lewej stronie klucz, a po prawej wartość: dane z etykietami zamiast listy."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Tablica to nasz pierwszy wybór, gdy mamy listę czegokolwiek: listę mentorów, listę wyników, listę składników, po prostu jakąś listę. Wtedy sięgamy po tablicę.

Jest jednak inna struktura danych (ang. _data structure_), która też bywa bardzo przydatna, gdy potrzebujemy czegoś trochę bardziej złożonego niż lista.

Wyobraźmy sobie, że chcemy zapisać kilka informacji o mnie: moje imię, mój wiek, miejsce, w którym się urodziłem. Można do tego użyć tablicy, ale wtedy nie bardzo wiadomo, co jest czym.

Czy Anglia to miejsce, w którym się urodziłem, czy to, gdzie mieszkam? Czy 42 to mój wiek, czy coś innego?

A jeśli chcę z tego skorzystać, muszę pamiętać, że pierwsza pozycja to imię, druga to wiek, a trzecia to miejsce urodzenia. Jest w tym trochę bałaganu, i ten bałagan bierze się stąd, że to wcale nie jest lista rzeczy. To coś bardziej złożonego. I tu właśnie wkraczają słowniki (ang. _dictionaries_). Słownik to nowy rodzaj struktury danych. Piąty z kolei: mamy stringi, liczby, wartości logiczne, tablice, a teraz jeszcze słowniki.

A słownik wyobraź sobie jako kartkę z notesu spiralnego.

Po lewej stronie masz nagłówki, czyli słowa `"name"`, `"age"`, `"birthplace"`, i to je nazywamy kluczami (ang. _keys_).

Po prawej stronie, obok każdego nagłówka, masz właściwe dane: `"Jeremy"`, `42`, `"England"`, i to nazywamy wartościami (ang. _values_).

Tak jak tablica, słownik jest jedną rzeczą. To jedna kartka z notesu. I tak jak tablicę, Jiki może włożyć go do zmiennej, do pudełka albo podać jako dane wejściowe do funkcji, a także wyjąć słownik z kanału zwrotnego. Oto jak słownik wygląda w kodzie. Używamy nawiasów klamrowych, żeby zaznaczyć początek i koniec, a w środku mamy pary: klucz po lewej, dwukropek i wartość po prawej. Między każdą parą stawiamy przecinek. Jiki to widzi, wyciąga swój notes spiralny i zapisuje `name`, `"Jeremy"`, `age`, `42` i tak dalej, para po parze.

A kiedy skończy, wyrywa kartkę i wkłada ją do pudełka z etykietą `person` (osoba).

Jest kilka zasad, o których warto wiedzieć. Klucze to zawsze stringi. Muszą być w cudzysłowie, a każdy klucz musi być unikalny. W jednym słowniku nie mogą się znaleźć dwa klucze o nazwie `name`.

Wartości mogą być takie same, jeśli chcesz, ale klucze muszą się różnić.

A wartościami może być wszystko: stringi, liczby, wartości logiczne, tablice, a nawet inne słowniki.

Możesz też mieć pusty słownik, tak jak mieliśmy pustą tablicę, i zacząć od niego, a potem go rozbudowywać.

Skoro mamy już słownik, to jak wyciągnąć z niego coś z powrotem?

Używamy tej samej składni z nawiasami kwadratowymi co przy tablicach i stringach, ale zamiast numeru pozycji podajemy klucz. Jeśli więc chcemy wyciągnąć ze słownika czyjeś imię, piszemy:

```javascript
person["name"] // "Jeremy"
```

To mówi Jikiemu, żeby zajrzał do słownika `person`, odnalazł klucz `"name"` i wydobył jego wartość. Jiki podchodzi do pudełka `person`, wyjmuje kartkę z notesu, przegląda wszystkie klucze, aż trafi na `"name"`, odczytuje wartość `"Jeremy"` i wkłada ją do nowego pudełka o nazwie `name`.

Nawiasy kwadratowe zawsze znaczą to samo: sięgasz do czegoś i coś z tego wyciągasz. W tablicach i stringach podajesz liczbę, żeby wskazać pozycję, z której chcesz coś wyciągnąć. W słownikach jako klucza używasz stringa.

To ta sama idea, tylko trochę inna składnia.
