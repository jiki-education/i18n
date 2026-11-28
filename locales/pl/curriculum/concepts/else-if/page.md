---
title: "Łączenie klauzul `else if`"
description: "Łączenie klauzul `else if`, żeby sprawdzać kilka warunków po kolei i uruchamiać tylko pierwszy blok, którego warunek jest prawdziwy."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Wiesz już, że `if` i `else` dają dwie ścieżki: zrób jedną rzecz, gdy warunek jest prawdziwy, a inną, gdy jest fałszywy. A co, jeśli możliwości jest więcej niż dwie?

Wyobraź sobie, że nasz ochroniarz sprzedaje bilety. Poniżej trzynastu lat dostajesz bilet dla dziecka. Między trzynastoma a dwudziestoma laty dostajesz bilet młodzieżowy. Od dwudziestu lat w górę to bilet dla dorosłych. Masz więc teraz trzy różne wyniki. W tym celu możemy dodać kolejną instrukcję warunkową po `else`. Możemy więc powiedzieć: „Jeśli to, zrób tak. A jeśli to, zrób inaczej. W przeciwnym razie zrób jeszcze coś innego”. W tym przykładzie Jiki widzi `if` i sprawdza pierwszy warunek. Czy szesnaście jest mniejsze od trzynastu? Nie. Przechodzi więc do `else if`. Czy szesnaście jest mniejsze od dwudziestu? Tak, to prawda. Uruchamia ten blok i wydaje bilet młodzieżowy. I to wszystko. Nie sprawdza już niczego więcej. W ogóle nie zagląda do końcowego `else`. Gdy Jiki znajdzie warunek, który jest prawdziwy, uruchamia ten blok i pomija wszystko poniżej.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Trzy bilety z napisami CHILD, TEEN i ADULT, po jednym dla każdego wyniku sprawdzania wieku"
  width="500"
  height="142"
/>

To jest najważniejsze. Zawsze uruchamia się tylko jeden blok. Jiki przechodzi po kolei przez te warunki, znajduje pierwszy prawdziwy, uruchamia jego blok i idzie dalej.

Jest jeszcze jedna rzecz, którą trzeba naprawdę zrozumieć, bo wielu osobom sprawia kłopot. Jest subtelna, ale bardzo ważna różnica między napisaniem dwóch osobnych instrukcji `if` a użyciem `else if`. Wyobraź sobie, że tworzymy program, który przyznaje podstawową albo dodatkową nagrodę w zależności od wyniku gracza. Spójrz na te dwie możliwości. Jedna używa `else if`, druga dwóch osobnych instrukcji `if`. Czym będzie się różnić ich działanie?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

W pierwszym przypadku, z `else if`, sprawdzamy wysoki wynik i przyznajemy dodatkową nagrodę, a potem nie uruchamiamy `else if`. Osoba z wynikiem powyżej stu dostaje więc tylko dodatkową nagrodę.

W drugim przykładzie oba `if` są całkowicie niezależne. Oba się uruchomią i oba będą prawdziwe. Ta osoba dostaje więc dwie nagrody. W pierwszym przypadku jedna nagroda. W drugim dwie. Poświęć chwilę, żeby naprawdę to zrozumieć.

Warto też zauważyć, że oba rozwiązania mogą być poprawne, w zależności od tego, jak zaprojektowano grę. Może się zdarzyć, że zawodnik dostaje normalną nagrodę i dodatkową, albo że po prostu awansuje na tę dodatkową. Żaden z tych fragmentów kodu nie jest ani dobry, ani zły. Po prostu każdy przydaje się w innej sytuacji. Musisz tylko wiedzieć, który z nich chcesz zastosować.
