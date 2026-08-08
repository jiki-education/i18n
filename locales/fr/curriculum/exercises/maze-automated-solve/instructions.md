---
title: "Évade-toi du labyrinthe en programmant"
description: "Écris du code qui trouve tout seul la sortie de n'importe quel labyrinthe."
en_md5: d3f3c0d2727632fe7872d07e1c2cd99a
---

Dans le premier exercice du labyrinthe, tu déplaçais ton personnage à la main. Maintenant, tu es prêt à faire sortir ton personnage de n'importe quel labyrinthe grâce au code !

Pour rendre ça possible, tu disposes de trois nouvelles fonctions :

- `canTurnLeft()` (peut tourner à gauche) : renvoie `true` si la case à gauche du personnage n'est pas un mur.
- `canTurnRight()` (peut tourner à droite) : renvoie `true` si la case à droite du personnage n'est pas un mur.
- `canMove()` (peut avancer) : renvoie `true` si la case devant le personnage n'est pas un mur.

Quand on les combine avec `move()` (avancer), `turnLeft()` (tourner à gauche) et `turnRight()` (tourner à droite), que tu connaissais déjà, il devient possible d'écrire un algorithme qui fait sortir le personnage de **n'importe quel** labyrinthe. « Algorithme » est un mot savant qui veut simplement dire « une façon de faire quelque chose ». C'est comme une formule ou une recette.

Plus bas dans les instructions, je te donnerai l'algorithme tout prêt. Mais avant, j'aimerais que tu essaies de le trouver par toi-même, comme un petit casse-tête de logique. Si tu sais si tu peux tourner à gauche, tourner à droite ou avancer, comment faire sortir ton personnage de n'importe quel labyrinthe que je te donne ?

Une fois que tu as trouvé (ou que tu as abandonné), fais défiler la page pour voir la réponse et ce que tu dois écrire en code.

<hr style="border-top: 1px solid var(--color-gray-200); margin:40px 0"/>

### L'algorithme

Bon, ce n'était pas facile ! J'imagine que tu as eu quelques idées, sans forcément trouver la solution complète. Voici les étapes à suivre :

- Si tu peux tourner à gauche, tourne à gauche et avance
- Sinon, si tu peux avancer, avance.
- Sinon, si tu peux tourner à droite, tourne à droite et avance.
- Sinon, fais demi-tour

Si tu suis ces étapes, tu peux faire sortir ton personnage de n'importe quel labyrinthe !

Écris ces instructions en code. Amuse-toi bien !
