---
title: "Space Invaders : Condition"
description: "Ne tire que lorsqu'un alien est dans ta ligne de mire."
en_md5: 4a603e339af722e912ab2ff9b25cc287
---

Les aliens ont changé de formation ! Ils sont maintenant répartis sur deux rangées, mais toutes les colonnes ne contiennent pas d'alien.

Tu disposes de trois fonctions :

- `move()` (se déplacer) déplace ton canon laser d'une position vers la droite
- `shoot()` (tirer) tire au laser vers le haut
- `isAlienAbove()` (y a-t-il un alien au-dessus ?) renvoie `true` s'il y a un alien au-dessus de toi, `false` dans le cas contraire

Tu dois parcourir tout l'écran en vérifiant chaque position. S'il y a un alien au-dessus de toi, abats-le ! Sinon, continue d'avancer.

**Ne tire pas lorsqu'il n'y a pas d'alien au-dessus de toi, sinon tu perds !**
