---
title: "La skyline"
description: "Construis toute une skyline de bâtiments aléatoires."
en_md5: cb89a31566f55397d19e1375dbac44cc
---

Dans l'exercice Gratte-ciel, tu as construit un seul gratte-ciel, de différentes hauteurs selon les scénarios. Cette fois, on va plus loin en créant une skyline de bâtiments de différentes hauteurs et de différentes largeurs.

Tu disposes d'une fonction `numBuildings()` (nombre de bâtiments), qui t'indique combien de bâtiments tu dois créer pour le scénario. Tu as ensuite les fonctions `randomWidth()` (largeur aléatoire) et `randomNumFloors()` (nombre d'étages aléatoire). Utilise-les pour déterminer la largeur et le nombre d'étages de chaque bâtiment du scénario. Le premier appel de ces fonctions te donne les valeurs du premier bâtiment, et ainsi de suite.

Les bâtiments commencent après un écart de `1` colonne à gauche, et il y a un écart de `1` colonne entre eux.

Ainsi, si tu avais un scénario où `numBuildings()` renvoie `2`, `randomWidth()` renvoie `5` puis `7`, et `randomNumFloors()` renvoie `4` puis `8`, tu obtiendrais cette disposition (où `xxxxx` représente le sol en béton)

```
       WWWWWWW
       WGGGGGW
       WGGGGGW
       WGGGGGW
 WWWWW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGEGW WGGEGGW
xxxxxxxxxxxxxxxxxxxxxxx
```
