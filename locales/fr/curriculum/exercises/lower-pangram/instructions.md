---
title: "Pangramme simple"
description: "Vérifie si une phrase utilise toutes les lettres de l'alphabet."
en_md5: 50b09bb1fbd35081cb842c55fc40e313
---

Un pangramme est une phrase qui utilise **chaque lettre de l'alphabet au moins une fois**. Le pangramme anglais le plus connu est « the quick brown fox jumps over the lazy dog » !

Les trois prochains exercices consisteront tous à déterminer si des phrases sont des pangrammes.

Dans ce premier exercice, tu n'as à gérer que les minuscules. L'entrée ne contiendra que des lettres minuscules et d'autres caractères comme des espaces, des chiffres ou de la ponctuation, mais aucune majuscule.

Ta tâche est d'écrire `isPangram(sentence)` (« estUnPangramme(phrase) »), qui prend une phrase en entrée et renvoie `true` si elle contient chaque lettre de « a » à « z » au moins une fois, ou `false` dans le cas contraire.

### Fonctions auxiliaires

Pour réussir cet exercice, tu n'as pas le droit d'imbriquer une boucle dans une autre. À la place, comme dans l'exercice précédent, la clé est de créer une **fonction auxiliaire** que `isPangram(…)` utilisera.

Cette fonction auxiliaire t'aidera à déterminer si une string en contient une autre. On te recommande de l'appeler `includes` (inclus) et de nommer ses entrées `haystack` (botte de foin) et `needle` (aiguille). L'idée est que l'on cherche à « trouver l'aiguille dans la botte de foin », comme le dit l'expression bien connue.

Si créer plusieurs fonctions te semble intimidant, tu peux d'abord résoudre l'exercice sans la fonction auxiliaire, avec une boucle imbriquée, puis réfléchir ensuite à la façon d'en extraire une fonction auxiliaire.

Amuse-toi bien !
