---
title: "Operator `&&` (and)"
description: "Łączenie dwóch warunków za pomocą `&&`, tak aby cały warunek był prawdziwy tylko wtedy, gdy obie jego części są prawdziwe."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Wyobraź sobie, że masz otworzyć drzwi tylko wtedy, gdy ktoś ma ponad 20 lat. Zapewne od razu wiesz, co zrobić. A co, jeśli trzeba sprawdzić, czy ktoś ma ponad 20 lat _i_ ma na sobie odpowiedni strój? Trzeba wtedy sprawdzić dwa różne warunki naraz. Jak to zrobić?

Można na przykład użyć zagnieżdżonej (ang. _nested_) instrukcji warunkowej, trochę tak jak wcześniej z zagnieżdżonymi pętlami. Czyli: jeśli `age` jest większe niż `20`, wchodzimy do tego bloku kodu, potem kolejne `if`, które sprawdza, czy `outfit` równa się `"disco"`, kolejny nawias klamrowy i nowy blok kodu. To by zadziałało, ale robi się z tego niezły bałagan, zwłaszcza gdy chcemy mieć dużo warunków.

Na szczęście jest na to łatwiejszy sposób: warunki mogą mieć kilka części. Zamiast sprawdzać w warunku tylko jedną rzecz, możemy sprawdzić dwie, trzy albo więcej. Żeby to zrobić, używamy słowa kluczowego `and`. Niestety w języku JavaScript słowo kluczowe and wcale nie jest słowem and, jak to jest w niektórych językach. Zamiast tego trzeba napisać dwa ampersandy obok siebie. Po prostu trzeba to zapamiętać. Trochę to irytujące, ale trudno, z czasem się przyzwyczaisz.

Dzięki temu możemy zbudować bardziej złożony warunek. Możemy powiedzieć: jeśli `age` jest większe niż `20` i `outfit` to `"disco"`, to idziemy dalej. Jeśli `age` jest mniejsze niż `20` albo `outfit` to nie `"disco"`, to cały warunek jest fałszywy. Kto uczył się kiedyś logiki, składał układy elektroniczne albo zna trochę bardziej zaawansowaną matematykę, ten poczuje się tu bardzo naturalnie. A jeśli nie, to szybko to załapie.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Jest jedna rzecz, która sprawia ludziom kłopot zarówno w przypadku and, jak i w przypadku or: każda strona operatora and/or (czyli „i”/„lub”) musi być kompletnym porównaniem. Więc nawet jeśli po obu stronach porównuje się tę samą zmienną, trzeba ją powtórzyć. Nie można napisać `if age is greater than 13 and less than 20`. Trzeba napisać `if age is greater than 13 and age is less than 20`. Obie strony muszą być kompletnymi porównaniami.

```javascript
if (age > 13 && age < 20)
```
