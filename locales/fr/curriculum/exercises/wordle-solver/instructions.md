---
title: "Wordle : solveur"
description: "Construis un solveur qui joue une partie entière de Wordle tout seul."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

Dans le dernier exercice Wordle, tu as traité une partie dont les propositions t'étaient fournies. Cette fois, tu passes de l'autre côté : c'est toi qui dois trouver les propositions.

Ton travail consiste à créer une nouvelle fonction appelée `solveWordle()`, dans laquelle tu proposes des mots jusqu'à trouver le bon. Tu dois résoudre la partie le plus efficacement possible (en utilisant le moins de mots possible).

Tu disposes d'une nouvelle fonction `commonWords()` (mots courants), qui renvoie un tableau de plus de 100 mots que tu peux utiliser dans la partie. C'est avec ces mots que tu vas devoir travailler. Commence toujours par lire le premier mot de ce tableau, puis propose-le. Ensuite, cherche le prochain mot valide possible et propose-le à son tour, et ainsi de suite.

Tu disposes aussi d'une fonction `guess(word)` (proposer un mot), qui renvoie un tableau contenant `"correct"`, `"present"` ou `"absent"` pour chaque lettre.

La clé de cet exercice, c'est de réfléchir à la façon de mémoriser les mots précédents et les résultats des appels à `guess`, puis d'utiliser ces informations pour trouver à chaque étape le chemin le plus efficace vers la victoire.

### Un exemple

1. Tu lis le premier mot du tableau, qui est `"which"`.
2. Tu utilises `guess("which")`, qui renvoie `["correct", "present", "absent", "absent", "absent"]`.
3. Tu choisis le mot suivant du tableau de mots courants qui commence par `"w"` et qui a un `"h"` en troisième, quatrième ou cinquième position.
4. Retourne à l'étape (2)...

Bonne chance et amuse-toi bien !
