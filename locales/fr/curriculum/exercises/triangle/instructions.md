---
title: "Triangle"
description: "Détermine si un triangle est équilatéral, isocèle ou scalène."
en_md5: 15574e7bfbdfaffbd935bf6bba258e63
---

Ta mission est de créer une fonction qui détermine si un triangle est équilatéral, isocèle, scalène ou invalide.

### Les triangles

- Un triangle _équilatéral_ a ses trois côtés de la même longueur.
- Un triangle _isocèle_ a deux côtés de la même longueur.
- Un triangle _scalène_ a tous ses côtés de longueurs différentes.

Pour qu'un triangle soit valide :

- Tous les côtés doivent être supérieurs à 0
- Si tu additionnes deux côtés, quels qu'ils soient, le total doit être plus grand que le troisième côté.

### La fonction

La fonction doit s'appeler `determineTriangleType` (détermine le type de triangle). Elle doit prendre trois entrées, qui seront des nombres correspondant aux trois côtés du triangle. Elle doit renvoyer l'une de ces valeurs : `"invalid"`, `"equilateral"`, `"isosceles"` ou `"scalene"`.
