---
title: "Dodawanie danych wejściowych do funkcji"
description: "Dodawanie otworów wejściowych do własnych funkcji, żeby mogły robić różne rzeczy w zależności od przekazanych wartości."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Funkcje, które powstały do tej pory, za każdym razem robią dokładnie to samo. `turnAround` (obróć się) zawsze obraca się dwa razy w lewo. `shootIfAlienAbove` (strzelaj, jeśli nad Tobą jest kosmita) zawsze sprawdza i strzela.

Pomyśl jednak o funkcjach, których używasz przez cały kurs: one robią różne rzeczy w zależności od danych wejściowych. Funkcja Rectangle przyjmuje lewą krawędź, górną krawędź, szerokość i wysokość jako dane wejściowe, a potem rysuje inny prostokąt w zależności od tego, co jej podasz.

Teraz dodamy otwory wejściowe także do Twoich własnych funkcji.

Żeby to zrobić, musisz wiedzieć dwie rzeczy. Pierwsza to jak to wygląda w praktyce, czyli co trzeba napisać, a druga to co się wtedy faktycznie dzieje.

Pierwsza część jest całkiem prosta. Wystarczy dodać zwykłe nawiasy, a w nich nazwy dowolnych danych wejściowych, jakich chcesz.

Wyobraź sobie, że tworzymy funkcję, która ma strzelać wiele razy. Nazwijmy ją `shootMany` (strzelaj wiele razy).

Zapiszemy ją tak:

```javascript
function shootMany(numShots) {
  // ...
}
```

Kiedy chcesz użyć tej funkcji, wywołujesz ją z liczbą strzałów, jaką chcesz oddać:

```javascript
shootMany(5)
shootMany(2)
```

Teraz najważniejsze. Kiedy kod się uruchamia, mini-Jiki, ten w czapce wewnątrz funkcji, bierze to, co trafiło do otworu wejściowego, czyli `5` albo `2`, i wkłada to do pudełka o nazwie `numShots` (liczba strzałów), a potem stawia to pudełko na półkach wewnątrz funkcji, żeby można było z niego korzystać w kodzie funkcji.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki wewnątrz maszyny shootMany wkłada dane wejściowe do pudełka z etykietą numShots"
  width="500"
  height="376"
/>

Powtórzę to jeszcze raz.

Kiedy piszemy `shootMany(5)`, żeby użyć funkcji, Jiki na zewnątrz idzie po `5` i wkłada je do otworu wejściowego `shootMany`. W środku maszyny mini-Jiki wyjmuje tę `5` i wkłada ją do pudełka o nazwie `numShots`, bo tak nazywa się ten otwór wejściowy, a potem stawia to pudełko na półkach wewnątrz funkcji, wewnątrz maszyny.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki stawia pudełko numShots na półkach wewnątrz maszyny shootMany"
  width="500"
  height="302"
/>

A potem, już wewnątrz funkcji, możesz używać pudełka `numShots` tak samo jak każdego innego pudełka. W nazwie `numShots` nie ma nic magicznego. Moglibyśmy ją nazwać, jak tylko byśmy chcieli. To po prostu instrukcja dla mini-Jikiego, żeby zawsze tworzył wewnątrz funkcji pudełko z taką etykietą i wkładał do niego wszystko, co trafi do tego otworu.

A kiedy w pudełku jest już wartość, możesz robić z nim wszystko to, co zwykle robi się z pudełkami. Możesz użyć pudełka `numShots` w pętli `repeat`, żeby strzelić odpowiednią liczbę razy. Możesz też mieć więcej niż jedno wejście, wystarczy oddzielić je przecinkami. Jeśli więc mamy funkcję `drawStar` (narysuj gwiazdę), która rysuje gwiazdę na podstawie pozycji jej lewego górnego rogu, zapiszemy ją tak:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Maszyna drawStar z dwoma otworami wejściowymi, przyjmująca dwie osobne wartości"
  width="453"
  height="400"
/>

A potem, kiedy funkcja zostaje wywołana, mini-Jiki po prostu wkłada wartości przekazane do otworów wejściowych do pudełek o nazwach `left` (lewo) i `top` (góra), a następnie stawia je na półkach wewnątrz funkcji.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki odkłada dwie wartości wejściowe do pudełek z etykietami left i top na półkach wewnątrz maszyny drawStar"
  width="431"
  height="400"
/>
