---
title: "Pętla po stringach z `for ... of`"
description: "Użycie pętli `for of` do przejścia przez wszystkie litery stringa i zrobienia czegoś z każdą z nich po kolei."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Do pojedynczej litery stringa dostaniesz się za pomocą nawiasów kwadratowych. Teraz zobaczmy, jak przejść pętlą przez string, wyciągając z niego po jednej literze naraz.

A żeby to zrobić, potrzebujemy nowego rodzaju pętli. Do tej pory używaliśmy pętli repeat, a teraz użyjemy czegoś, co nazywa się pętlą `for of` (czyli pętlą, która przechodzi po kolei przez każdy element kolekcji). To dwa nowe słowa kluczowe: `for` i `of`.

Słowo kluczowe `for` zobaczymy jeszcze w całkiem wielu miejscach w dalszej części kursu. Może występować samo albo w parze z `in` lub `of`. Na razie skupmy się na tym ostatnim, czyli `of`.

Zobaczmy więc jakiś kod.

Zaczniemy od utworzenia zmiennej o nazwie `name` (czyli nazwa), która zawiera string `"Jeremy"` (imię Jeremy). Nic nowego.

Potem mamy linię z pętlą, w której dużo się dzieje, więc omówmy ją spokojnie krok po kroku.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Po pierwsze mamy słowo kluczowe `for`. Mówi ono Jikiemu, że chcemy zapętlić jakieś instrukcje. Jiki patrzy więc dalej, widzi `of` i wie, że chcemy użyć pętli typu „for of”.

To znaczy, że zamiast pętli repeat, w której mówimy „powtórzmy 10 razy”, mówimy „przejdźmy przez wszystkie litery stringa”. Właśnie to oznacza „for of”.

Potem mamy ten fragment z `let letter` (czyli „niech litera”). To dokładnie to samo co powyżej, przy `let name`. Po prostu tworzymy zmienną o nazwie `letter`.

Różnica polega na tym, że zamiast mówić wprost, co ma się w niej znaleźć, prosimy Jikiego, żeby wkładał do niej kolejne litery stringa, jedną po drugiej.

Jiki widzi więc `for`, sprawdza, czy jest `of`, i rusza do pracy. Patrzy na pierwszą literę stringa, w tym przypadku `"J"`, i wkłada ją do nowego pudełka o nazwie `letter`. Nawiasem mówiąc, moglibyśmy nazwać je dowolnie. To nie musi być `letter`. Po prostu tutaj zdecydowaliśmy się na `letter`.

Potem Jiki uruchamia kod w nawiasach klamrowych, a Ty możesz tam robić wszystko to, co wszędzie indziej w kodzie. Jedyna różnica jest taka, że ten blok kodu wykona się raz dla każdej litery stringa i będzie miał dostęp do tej zmiennej.

Za każdym razem, gdy Jiki dociera do zamykającego nawiasu klamrowego, wyrzuca pudełko `letter` i tworzy nowe, z kolejną literą w środku. Za pierwszym razem wyrzuci więc `"J"` i włoży do pudełka `"e"`. Potem zrobi to samo z `"r"`, następnie z `"e"`, `"m"` i `"y"`. Sześć liter, sześć przejść przez pętlę. Trochę czasu potrzeba, żeby przyzwyczaić się do tej składni, ale to naprawdę nie jest trudne pojęcie.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki wyrzuca stare pudełko z literą i wrzuca kolejną literę do nowego pudełka oznaczonego letter, powtarzając to dla każdej litery w stringu"
  width="500"
  height="168"
/>
