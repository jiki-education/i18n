---
title: "Comprendre les boucles `while`"
description: "Une boucle qui continue de tourner tant qu'une condition reste vraie."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

La prochaine boucle à connaître est la boucle `while` (tant que).

Elle dit : « Tant qu'une certaine condition est vraie, exécute la boucle. » Par exemple, on pourrait avoir une règle qui dit qu'on ne peut tirer que cinq fois dans Space Invaders. On aurait donc ici une boucle qui dit : tant que le nombre de tirs est inférieur à cinq, exécute une boucle qui permet de continuer à jouer.

```javascript
while (numShots < 5) {
  // tirer sur l'alien
  numShots++
}
```

Chaque fois que quelqu'un tire, on augmente `numShots` de un, si bien qu'on finira par atteindre cinq et que la boucle s'arrêtera.

Cela dit, les boucles while posent un problème : il est assez facile d'introduire des bugs qui font que la boucle ne se termine jamais. On appelle cela des boucles infinies (_infinite loops_ en anglais), et c'est l'un des bugs les plus courants dans les programmes.

Quand ton ordinateur ralentit, que les ventilateurs se mettent à tourner et que tout devient bruyant, c'est souvent parce que quelqu'un a laissé dans son code une boucle infinie qui, par définition, ne se termine jamais.
