---
title: "Używanie operatora `%` do obliczania reszty z dzielenia"
description: "Operator `%` pozwala sprawdzić, co zostaje po dzieleniu. Często używa się go do sprawdzania, czy liczba jest parzysta, czy nieparzysta."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Do tej pory, gdy liczyliśmy, używaliśmy dodawania, odejmowania, mnożenia i dzielenia. Teraz dodamy jeszcze jeden: operator reszty z dzielenia (ang. _remainder_).

Operator reszty z dzielenia, zgodnie z nazwą, podaje resztę z dzielenia dwóch liczb, a zapisujemy go znakiem procentu. Jeśli więc napiszemy:

```javascript
10 % 4 // 2
```

to mówimy, a właściwie pytamy: „Co zostaje, gdy podzielimy 10 przez 4?” Odpowiedź brzmi: dwa. Wyobraź sobie, że masz 10 cukierków albo orzechów i chcesz podzielić je po równo między cztery osoby. Każda osoba dostaje dwa, a na końcu zostają dwa. I właśnie to, co zostaje, to reszta. Właśnie to daje Ci znak procentu.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Rząd dziesięciu cukierków dzielonych po równo między cztery osoby, przy czym dwa zostają jako reszta"
  width="500"
  height="22"
/>

Jednym z powodów, dla których używamy go w kodzie dość często, jest to, że możemy sprawdzić, czy coś dzieli się bez reszty. Najczęstszy wzorzec, jaki się z tym wiąże, to ustalanie, czy mamy liczbę parzystą, czy nieparzystą. Liczby parzyste, jak wiesz, dzielą się przez dwa bez reszty. Liczby nieparzyste przy dzieleniu przez dwa zawsze dają resztę jeden.

Jeśli więc weźmiesz cztery, sześć albo osiem i podzielisz je przez dwa, nic nie zostaje, a przy pięciu, siedmiu i dziewięciu po podzieleniu przez dwa na końcu zostaje jeden. Zapisując `if something % 2 === 0`, pytamy, czy coś jest liczbą parzystą. To bywa przydatne w mnóstwie rzeczy. Wyobraź sobie tworzenie pasków w różnych kolorach albo dzielenie kolejki na pół, tak że każda osoba idzie w jedną z dwóch stron, gdy podchodzi do Ciebie.

Jedna uwaga: możesz spotkać się z tym, że ten operator reszty z dzielenia nazywa się operatorem modulo. Modulo i reszta z dzielenia to w zasadzie to samo. Są między nimi drobne różnice, którymi prawdopodobnie nigdy nie musisz się przejmować, więc na razie myślmy o nim jak o operatorze reszty z dzielenia, bo tak jest po prostu dużo łatwiej.
