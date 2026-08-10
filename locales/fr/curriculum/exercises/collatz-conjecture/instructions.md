---
title: "La conjecture de Collatz"
description: "Explore un célèbre casse-tête mathématique avec ta propre fonction."
en_md5: e4f7ab61c163cdb7c2eb2b6541a2cedc
---

Un soir, tu tombes sur un vieux carnet rempli de gribouillis énigmatiques, comme si quelqu'un avait poursuivi une idée de façon obsessionnelle. Sur une page, une question ressort : **Tout nombre finit-il par atteindre 1 ?** Elle est liée à ce qu'on appelle la **conjecture de Collatz**, un casse-tête qui déroute les penseurs depuis des décennies.

Les règles sont d'une simplicité trompeuse :

1. Choisis un nombre.
2. S'il est pair, divise-le par 2.
3. S'il est impair, multiplie-le par 3, puis ajoute 1.
4. Répète l'opération avec le résultat, indéfiniment.

Par exemple, en partant de 12 :

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

En comptant à partir du deuxième nombre (6), il a fallu 9 étapes pour atteindre 1.

Crée une fonction appelée `collatzSteps` (étapes de Collatz) qui prend un nombre en entrée. Renvoie **le nombre d'étapes** qu'il faut pour aller d'un nombre donné à 1, en suivant les règles de la conjecture de Collatz.
