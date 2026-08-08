---
title: "Pangramme"
description: "Vérifie si une phrase contient toutes les lettres de l'alphabet, quelle que soit la casse."
---

Bienvenue dans la deuxième partie de la série Pangramme. Pour rappel, un pangramme est une phrase qui utilise chaque lettre de l'alphabet au moins une fois.

Cet exercice est une version plus complexe de l'exercice Pangramme précédent que tu as résolu, car cette fois la phrase contient aussi des majuscules. Cela ajoute une complexité étonnante.

Crée une fonction appelée `isPangram` (« est un pangramme ») qui prend une phrase sous forme de string et renvoie un booléen qui indique si c'est un pangramme ou non.

On t'a fourni ton code précédent comme point de départ.

### Fonctions auxiliaires

En plus de ta fonction auxiliaire existante (que l'on t'avait suggéré d'appeler `includes`), on te recommande d'en créer deux nouvelles pour t'aider à résoudre cet exercice. Leurs noms sont des noms standards, que l'on te conseille de conserver :

1. `indexOf(haystack, needle)` : une fonction qui calcule **où** se trouve `needle` dans `haystack`. Ainsi, plutôt que de renvoyer `true`/`false` comme `includes`, elle renvoie l'**indice** de `needle`. Par exemple, `indexOf("Jeremy", "r")` renverrait `2` (rappelle-toi qu'on compte à partir de 0).
2. `toLowerCase(someString)` : une fonction qui prend une string et la renvoie convertie en minuscules. Par exemple, `toLowerCase("JeReMy")` renverrait `"jeremy"`.

Amuse-toi bien !
