---
title: "Balaie l'écran et tire"
description: "Traverse Space Invaders et abats tous les aliens."
en_md5: a238bdc121bdfe425015d2e9e6b872d5
---

Nous revoilà dans Space Invaders. La dernière fois, il te suffisait de te déplacer de gauche à droite pour abattre tous les aliens. Cette fois, tu dois aussi faire rebondir le laser d'un bord à l'autre, en plusieurs passages, pour les abattre tous.

Tu peux déplacer le canon laser vers la gauche et vers la droite avec les fonctions `moveLeft()` (se déplacer vers la gauche) et `moveRight()` (se déplacer vers la droite). Essaie de voir jusqu'où tu peux aller de chaque côté. Si tu sors de l'écran, tu perds.

Comme avant, à chaque déplacement, vérifie s'il y a un alien au-dessus de toi avec la fonction `isAlienAbove()` (y a-t-il un alien au-dessus ?), puis tire dessus avec `shoot()` (tirer) si c'est le cas. Si tu tires alors qu'il n'y a pas d'alien, tu perds la partie : il est interdit de gaspiller les munitions !

Le canon laser surchauffe facilement. Tu dois te déplacer entre deux tirs pour le laisser refroidir.

Les vagues sont de plus en plus denses. Dans la dernière vague, les aliens réapparaissent, donc impossible de savoir à l'avance combien de tirs il te faudra : ta boucle doit continuer à tourner jusqu'à ce qu'il ne reste plus aucun alien.

Une règle dans cet exercice : pour réussir le dernier scénario, tu ne peux pas utiliser une boucle `repeat` avec une entrée (autrement dit, tu **peux** utiliser `repeat() { ... }`, mais tu **ne peux pas** utiliser `repeat(10) { ... }`).

Une fois tous les aliens abattus, tu as gagné ! Bonne chance !
