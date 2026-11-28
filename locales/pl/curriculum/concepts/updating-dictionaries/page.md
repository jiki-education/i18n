---
title: "Aktualizowanie słowników"
description: "Używanie `dict[key] = value` do aktualizowania istniejących wpisów lub dodawania nowych oraz metoda `has` do sprawdzania kluczy."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Wiesz już, jak stworzyć słownik i wydobyć z niego wartości. Ale co się dzieje, kiedy dane się zmieniają? Z czasem będę starszy. Nie `42`, tylko `43`.

Jak zaktualizować słownik? W bardzo podobny sposób do tego, w jaki czegoś szukamy. Pamiętasz, że szukamy za pomocą nawiasów kwadratowych, żeby wydobyć wartość. Otóż nawiasów kwadratowych możemy też użyć razem ze znakiem równości, żeby zaktualizować słownik. Jiki podchodzi do pudełka osoby, wyjmuje kartkę z zeszytu, znajduje klucz `"age"`, a potem ściera `42`, które tam było, i wpisuje w jego miejsce `43`, po czym kartka z zeszytu wraca do pudełka. To właśnie jest zmienianie samego słownika.

```javascript
person["age"] = 43
```

Jiki nie tworzy nowego słownika, tylko zmienia zeszyt, który już był w pudełku.

A co, jeśli chcesz dodać informację, której wcześniej nie było? Możesz zrobić dokładnie to samo.

Jeśli podasz klucz, którego nie ma, Jiki po prostu doda na dole nowy klucz z tą wartością.

W tym przypadku otworzy zeszyt, poszuka `"country"`, stwierdzi, że go nie ma, a potem doda na dole nową linijkę: `"country"` po lewej, `"England"` po prawej.

```javascript
person["country"] = "England"
```

Czyli dokładnie ta sama składnia, co przy zmianie wartości. Jiki sam ogarnia oba przypadki. Jeśli klucz istnieje, aktualizuje go. Jeśli nie, dodaje go. Nie musisz robić niczego specjalnego.

I tak jak możesz zacząć od pustej tablicy i dodawać do niej kolejne elementy, tak możesz zacząć od pustego słownika i dodawać klucze jeden po drugim. To znowu bardzo częsty schemat. Spotkasz go na każdym kroku.

Jedno z częstych zastosowań słowników to liczenie różnych rzeczy. Kluczami mogą być rzeczy, które chcemy policzyć, a wartościami ich liczby. Wyobraź sobie, że obserwujesz ptaki i chcesz zliczać, ile razy zauważysz każdego z nich. Za każdym razem, gdy widzisz ptaka, ustawiasz jego licznik na jeden, a potem, przy każdym kolejnym spotkaniu, bierzesz jego aktualną wartość i zwiększasz ją o jeden. Żeby ten schemat zadziałał, potrzebujemy sposobu, żeby sprawdzić, czy słownik ma już ten klucz, i wtedy dodać do niego jeden, a jeśli klucza nie ma, zacząć od jedynki.

I żeby to zrobić, mamy w słownikach metodę, metodę `has` (czyli „ma”).

Podajesz klucz, który Cię interesuje, a Jiki sprawdza, czy słownik go ma, czy nie, i odpowiednio zwraca prawdę albo fałsz.

```javascript
person.has("age") // true
```

Składając to razem, schemat liczenia wygląda tak:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
