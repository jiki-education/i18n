---
title: "Sons de gouttes de pluie"
description: "Transforme des nombres en sons de gouttes de pluie : Pling, Plang et Plong."
en_md5: 93b85e63b3d48e4e7f6d249592b367a1
---

Raindrops est une variante du classique FizzBuzz, un défi utilisé depuis toujours dans les entretiens d'embauche en programmation.

Ta mission consiste à convertir un nombre en des sons de gouttes de pluie correspondants.

Pour cela, on regarde par quels nombres il est divisible (par exemple, 10 est divisible par 1, 2, 5 et 10, tandis que 12 est divisible par 1, 2, 3, 4, 6 et 12).

Si un nombre donné :

- est divisible par 3, ajoute "Pling" au résultat.
- est divisible par 5, ajoute "Plang" au résultat.
- est divisible par 7, ajoute "Plong" au résultat.
- n'est divisible ni par 3, ni par 5, ni par 7, le résultat doit être le nombre sous forme de _string_.

Tu dois créer une fonction appelée `raindrops(num)` (littéralement « gouttes de pluie », `num` étant le nombre) qui prend le nombre en entrée et renvoie ses sons de gouttes de pluie.

Construis la _string_ du résultat avec la concaténation (`+`) ou avec une _template string_ (littéral de gabarit).

### Exemples

- `raindrops(28)` renvoie "Plong", car 28 est divisible par 7, mais pas par 3 ni par 5.
- `raindrops(30)` renvoie "PlingPlang", car 30 est divisible par 3 et par 5, mais pas par 7.
- `raindrops(34)` renvoie "34", car 34 n'est divisible ni par 3, ni par 5, ni par 7.
