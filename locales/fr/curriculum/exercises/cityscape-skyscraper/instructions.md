---
title: "Gratte-ciel"
description: "Construis un gratte-ciel sur la grille de la ville."
en_md5: 901851ded0ac8a0ef6cb80db60e59998
---

C'est le premier de deux exercices dans lesquels tu vas construire des gratte-ciel.

Dans cet exercice, ton travail consiste à construire un seul gratte-ciel au milieu de la scène. La hauteur du gratte-ciel varie selon le scénario.

Pour déterminer combien d'étages construire, tu disposes d'une fonction `numFloors()` (nombre d'étages) qui renvoie la hauteur totale du bâtiment.

Tu peux utiliser trois composants différents : le mur (`W`), le verre (`G`) et l'entrée (`E`). Consulte la liste des fonctions ci-dessous pour voir celles qui permettent de les créer.

L'étage le plus proche du sol (le rez-de-chaussée) comporte toujours une entrée prise en sandwich entre deux segments de verre et deux segments de mur extérieurs (`WGEGW`). Les autres étages comportent trois segments de verre entourés de murs (`WGGGW`). Et au sommet des étages se trouve un toit (`WWWWW`).

Un gratte-ciel de 5 étages a donc un étage d'entrée, 4 étages de verre et un toit. Il devrait ressembler à ceci :

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

Le centre du gratte-ciel doit se trouver à la colonne `19`. Le rez-de-chaussée commence à `2` (juste au-dessus du sol en béton) et la construction monte ensuite (dans notre exemple ci-dessus, l'étage d'entrée serait donc à `2` et le toit à `7`).

Une règle essentielle de cet exercice : toutes les valeurs que tu donnes aux fonctions doivent être des variables ou des formules. Tu ne peux pas te contenter d'écrire un nombre comme `20`.

Une fois cet exercice terminé, tu débloqueras un Projet dans lequel tu construiras des lignes d'horizon urbaines complètes, avec un nombre de bâtiments et des largeurs qui varient.
