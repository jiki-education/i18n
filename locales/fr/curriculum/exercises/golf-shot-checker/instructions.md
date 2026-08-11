---
title: "Vérification du coup"
description: "Détermine si un coup de golf est arrivé assez près du trou pour y tomber."
en_md5: 0585e8c489eca5a11da4df955e647456
---

Bienvenue à nouveau sur le parcours de golf. Jusqu'ici, tu n'as fait rouler la balle qu'horizontalement : quand elle arrivait au trou, elle restait simplement posée au-dessus. Cette fois, on va vraiment l'animer pour qu'elle descende dans le trou.

Premier changement : la fonction `moveTo` (déplacer vers) a maintenant des entrées pour `x` (la position horizontale) et `y` (la position verticale). Comme avant, tu dois faire rouler la balle une position à la fois, sans la faire sauter directement à la fin. Mais cette fois, si le golfeur met la balle dans le trou, tu dois aussi animer cette dernière partie, en la faisant tomber dedans, une fois arrivée au bon endroit.

Pour finir, **si la balle atterrit dans le trou**, une fois qu'elle a roulé jusqu'au fond, il est temps de célébrer : tire un feu d'artifice avec la fonction `fireFireworks()` (tirer un feu d'artifice).

Quelques points à connaître :

1. La balle démarre sur le tee à `x = 28`, `y = 75`, et roule une position à la fois.
2. Un coup réussi signifie que la longueur du coup est de `58`, `59`, `60`, `61` ou `62`.
3. Tu dois faire descendre la balle de `9` unités.

Dans cet exercice, essaie de bien réfléchir à chaque étape et avance étape par étape. Bonne chance !
