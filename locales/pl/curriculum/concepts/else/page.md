---
title: "Słowo kluczowe `else`"
description: "Dodawanie klauzuli `else` po `if`, aby inny blok kodu uruchomił się, gdy warunek okaże się fałszem."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Instrukcje warunkowe pozwalają sprawdzać warunki i uruchamiać kod tylko wtedy, gdy coś jest prawdą. A teraz poznajmy wspólnika `if`, czyli `else`.

W instrukcji warunkowej (ang. _if statement_) Jiki uruchamia blok kodu, gdy warunek to prawda, a pomija ten blok, gdy to fałsz. Co jednak, jeśli chcesz, żeby Jiki zrobił jedną rzecz, gdy warunek to prawda, a inną, gdy to fałsz? Do tego właśnie służy `else`. Możemy umieścić klauzulę `else` (ang. _else clause_) po nawiasie klamrowym zamykającym `if`, a Jiki uruchomi ją, gdy warunek `if` okaże się fałszem. Wracając do przykładu z ochroniarzem w klubie: mamy teraz wybór, żeby otworzyć drzwi albo komuś odmówić wejścia, co jest chyba lepsze niż zupełne ignorowanie go, tak jak robiliśmy wcześniej. Pomyśl o tym jak o rozwidleniu drogi. Jiki dochodzi do tego rozwidlenia, sprawdza warunek, a potem może pójść w jedną stronę, jeśli to prawda, albo w drugą, jeśli to fałsz. Nigdy jednak nie idzie w obie strony naraz.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Rozwidlenie drogi przy drzwiach klubu: otwórz drzwi, gdy warunek to prawda, odmów wejścia, gdy to fałsz"
  width="500"
  height="332"
/>

A co, jeśli masz więcej niż dwie możliwości? Wyobraź sobie, że nasz ochroniarz sprzedaje bilety. Poniżej trzynastu lat dostajesz bilet dziecięcy. Między trzynastym a dwudziestym rokiem życia dostajesz bilet młodzieżowy. Od dwudziestu lat wzwyż bilet dla dorosłych. Masz więc trzy różne wyniki. W tym celu możemy dodać kolejną instrukcję warunkową po `else`. Możemy więc powiedzieć: „Jeśli to, zrób to. A jeśli tamto, zrób tamto. W przeciwnym razie zrób coś jeszcze innego”. W tym przykładzie Jiki widzi `if` i sprawdza pierwszy warunek. Czy szesnaście jest mniejsze niż trzynaście? Nie. Przechodzi więc do `else if`. Czy szesnaście jest mniejsze niż dwadzieścia? Tak, to prawda. Uruchamia ten blok i wydaje bilet młodzieżowy. Ale na tym koniec. Nie sprawdza już niczego więcej. W ogóle nie zagląda do ostatniego `else`. Gdy Jiki znajdzie warunek, który jest prawdą, uruchamia ten blok i pomija wszystko poniżej.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

To najważniejsza rzecz do zrozumienia. Zawsze uruchamia się tylko jeden blok. Jiki przechodzi po kolei przez wszystkie te warunki, znajduje pierwszy warunek, który jest prawdą, uruchamia ten blok i idzie dalej.

Jest jeszcze jedna rzecz, którą naprawdę trzeba zrozumieć, bo łatwo się na niej potknąć. Między napisaniem dwóch osobnych instrukcji warunkowych a użyciem `else if` istnieje subtelna, ale bardzo ważna różnica. Wyobraź sobie, że piszemy program, który w zależności od wyniku gracza przyznaje nagrodę podstawową albo nagrodę dodatkową. Spójrz na te dwie możliwości. W jednej używamy `else if`, w drugiej dwóch osobnych instrukcji `if`. Co wtedy zadziała inaczej?

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

W pierwszym przypadku, z `else if`, sprawdzamy, czy wynik jest wysoki, i przyznajemy nagrodę, a potem nie uruchamiamy już `else if`. Osoba z wynikiem powyżej stu dostaje więc tylko nagrodę dodatkową.

W drugim przykładzie obie instrukcje `if` są całkowicie niezależne. Obie się uruchomią i obie będą prawdą. Ta osoba dostanie więc dwie nagrody. W pierwszym przypadku jedną nagrodę. W drugim dwie. Zatrzymaj się na chwilę i upewnij się, że naprawdę to rozumiesz.

Warto też zauważyć, że oba warianty mogą być poprawne, w zależności od tego, jak zaprojektowana jest gra. Może zawodnik dostaje nagrodę zwykłą i dodatkową, a może po prostu awansuje na nagrodę dodatkową. Żaden z tych fragmentów kodu nie jest ani dobry, ani zły. Po prostu każdy z nich przydaje się w innej sytuacji. Musisz jednak wiedzieć, którego zamierzasz użyć.
