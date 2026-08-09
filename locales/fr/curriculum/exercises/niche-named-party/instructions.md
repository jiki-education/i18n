---
title: "Une soirée très sélecte"
description: "Détermine qui a le droit d'entrer à une soirée très sélecte."
---

Ce soir, l'entrée est très sélective : seules les personnes dont le nom commence par une suite de lettres bien précise sont admises !

Ton travail consiste à écrire une fonction appelée `handleGuest` (gérer l'invité) qui prend deux entrées :

- `name` : le nom de la personne qui se présente à l'entrée
- `allowedPrefix` : les lettres par lesquelles le nom doit commencer ce soir

Elle doit renvoyer `true` si la personne peut entrer, et `false` si elle doit être refoulée.

Par exemple :

- Si le préfixe autorisé de ce soir est `"S"`, Sarah entre (la fonction renvoie `true`) mais Brad non (elle renvoie `false`).
- Si le préfixe autorisé est `"Brad"`, Brad et Bradley entrent, mais pas Brian.

### Fonctions utilitaires

Au fil de cet exercice, tu vas devoir déterminer la longueur du nom de l'invité, ainsi que celle du préfixe autorisé. C'est l'occasion parfaite de créer une fonction utilitaire appelée `getLength(someString)`, qui compte le nombre de lettres d'une string. Tu pourras ensuite l'utiliser à plusieurs endroits dans `handleGuest(...)`.

Le scénario bonus te met au défi de résoudre l'exercice en un minimum de lignes. Tu trouveras peut-être d'autres solutions que tu préfères, qui utilisent davantage de lignes. C'est très bien aussi (n'hésite pas à explorer différentes approches), mais essaie également de trouver la version la plus courte.

Amuse-toi bien !
