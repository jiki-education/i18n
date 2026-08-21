---
title: "Inverse la string"
description: "Retourne un texte à l'envers."
en_md5: 9d47faf87b2864284ed64ce1300073ea
---

Inverser des _strings_ (les lire de droite à gauche plutôt que de gauche à droite) est une tâche étonnamment courante en programmation.

Par exemple, en bio-informatique, inverser des _strings_ d'ADN ou d'ARN est souvent important pour toutes sortes d'analyses, comme la recherche de brins complémentaires ou l'identification de séquences palindromiques.

Ta mission est de créer une fonction appelée `reverse` (inverser), qui prend une _string_ en entrée et renvoie sa version inversée.

Exemples :

- Transforme "stressed" en "desserts"
- Transforme "strops" en "sports"
- Transforme "racecar" en "racecar" (un palindrome)

### Nos deux derniers scénarios...

Les deux derniers scénarios ont l'air étranges, non ? Que se passe-t-il ?

En fait, beaucoup d'emojis sont composés d'autres emojis reliés entre eux par des espaces cachés (de largeur nulle).

L'emoji famille (👩‍👩‍👧‍👦) est composé de deux femmes et de deux enfants. Quand on l'inverse, on voit apparaître les caractères individuels (👦‍👧‍👩‍👩).

L'autre est un arc-en-ciel suivi d'un drapeau (🌈‍️🏳). Quand on inverse l'ordre pour obtenir le drapeau puis l'arc-en-ciel, ça devient un drapeau arc-en-ciel (🏳️‍🌈️) !

Si tu construis ton résultat caractère par caractère, ça devrait aller comme sur des roulettes. Si tu optes pour une astuce plus futée, tu risques de voir les emojis se fragmenter.
