---
title: "Jak działają pętle `for`"
description: "Pętla z trzema częściami (inicjalizacja, warunek i inkrementacja), która daje Ci pełną kontrolę nad iteracją."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Może pamiętasz, że pętla `repeat` tak naprawdę nie istnieje w języku JavaScript. To coś dodane po to, żeby ułatwić Ci życie na starcie.

Co więc stosujemy zamiast niej? Zwykłą pętlę `for`, która wygląda tak:

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Widać, dlaczego pierwszego dnia mogło to być dla Ciebie nieco onieśmielające.

Ale teraz masz już całą wiedzę, której potrzebujesz, żeby poczuć się z tym swobodnie. Rozłóżmy to więc na części.

Pętla `for` składa się z trzech części: inicjalizacji, warunku i inkrementacji.

Inicjalizacja, ten fragment `let i = 0`, wykonuje się na początku całej pętli. Wykonuje się tylko raz, a tutaj tworzy pudełko o nazwie `i` (czyli licznik), w którym jest zero. `i` to po prostu litera używana do śledzenia wartości podczas pętli i tradycyjnie używa się do tego `i` albo `x`.

Kolejny fragment, warunek, sprawdzany jest za każdym razem przed każdą iteracją pętli.

Jeśli warunek jest prawdziwy, uruchamiamy pętlę jeszcze raz.

Jeśli nie, to nie.

I wreszcie inkrementacja, czyli `i++`.

`i++` znaczy dokładnie to samo co `i = i + 1`. To tylko skrót, sposób na zwiększenie `i` o jeden za każdym razem.

W tym przykładzie ustawiamy `i` na zero. Sprawdzamy, czy `i` jest mniejsze od dwóch. Jest, więc uruchamiamy pętlę.

A potem na końcu zwiększamy `i` o jeden, więc `i` przyjmuje wartość jeden. Zero plus jeden to jeden.

I ruszamy od nowa. Sprawdzamy, czy jeden jest mniejszy od dwóch.

Jest, więc uruchamiamy pętlę. A potem na końcu znowu zwiększamy `i`. Teraz jest dwa, jeden plus jeden równa się dwa.

```javascript
i = 0
i < 2 // true - uruchom pętlę
...   // wykonaj iterację
i = i + 1 // 1

i < 2 // true - uruchom pętlę
...   // wykonaj iterację
i = i + 1 // 2

i < 2 // false - wyjdź z pętli
```

I wtedy ruszamy trzeci raz. Tym razem sprawdzamy, czy dwa jest mniejsze od dwóch, i nie jest, więc nie uruchamiamy pętli i właściwie to już koniec. Przechodzimy po prostu do kodu poniżej. Uruchomiliśmy więc pętlę dwa razy i warto o tym wiedzieć: jeśli zaczniemy od zera i mamy warunek `i < n`, to liczba `n` to liczba powtórzeń pętli.

Czyli to samo, co zapisać `repeat 2`.

Nie jest to więc trudne, ale znacznie bardziej zawiłe niż zwykłe `repeat 2`. Zaletą pętli `for` jest to, że w tych trzech miejscach możesz zrobić wszystko. Możesz zacząć od innej liczby, zwiększać licznik o więcej niż jeden, odliczać w dół albo użyć warunku, który zależy od czegoś innego niż prosty licznik. To właśnie ta elastyczność sprawia, że pętle `for` są koniem roboczym języka JavaScript.
