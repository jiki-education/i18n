---
title: "Regarde autour de toi"
description: "Construis les fonctions qui vérifient ce qui se trouve autour du personnage dans le labyrinthe."
en_md5: 9ca44b407519cf6b3d5fa9f3f0e3b3d3
---

La dernière fois, tu as ajouté une nouvelle fonction pour aider le personnage à se repérer dans le labyrinthe : `turnAround()` (faire demi-tour). On a repris ton code à gauche pour que tu puisses continuer à travailler dessus.

Cette fois, on a retiré trois des fonctions sur lesquelles tu t'appuyais jusqu'ici. Ton travail dans cet exercice, c'est de les implémenter toi-même !

### Les fonctions à écrire

Les trois fonctions que tu dois créer sont `canTurnLeft()` (peut tourner à gauche), `canTurnRight()` (peut tourner à droite) et `canMove()` (peut avancer).

Aucune de ces fonctions ne prend d'entrée. Toutes doivent renvoyer un booléen qui indique s'il est possible d'aller dans cette direction.

Pour t'aider, on a ajouté une nouvelle fonction : `look(direction)` (regarder dans une direction). Cette fonction prend une entrée, une direction qui peut être `"left"`, `"right"` ou `"ahead"`. Elle renvoie l'une des valeurs suivantes :

- `"start"` (le point de départ)
- `"target"` (l'endroit où le personnage doit arriver)
- `"empty"` (le chemin à suivre !)
- `"fire"` (prudence !)
- `"poop"` (beurk)
- `"wall"` (aïe !)

### Quelques notes pour t'aider

Voici trois notes pour t'aider.

1. Dans un exercice comme celui-ci, une bonne pratique consiste à **commencer par créer les fonctions** dont le code a besoin pour s'exécuter (c'est-à-dire `canTurnLeft()`, `canTurnRight()` et `canMove()`). Donne-leur d'abord une valeur de retour par défaut raisonnable (soit `true`, soit `false` dans ce cas). Tu peux ensuite implémenter la logique de chaque fonction et progresser un peu à chaque fois, plutôt que d'obtenir sans arrêt une erreur parce qu'une fonction n'existe pas tant que tout le programme n'est pas écrit.
2. **Tu ne devrais pas avoir besoin de modifier le code existant** pour cet exercice. Ajoute simplement les trois fonctions en haut du code.
3. Tu peux écrire **plus de fonctions** que celles demandées si ça t'aide.
