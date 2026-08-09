---
title: "Procédures de combat"
description: "Extrais ta logique de tir dans une fonction réutilisable."
en_md5: 3f2bb9c8622396d8ee591087d949c3de
---

Dans le niveau précédent, tu as trouvé comment faire des allers-retours avec un canon laser pour abattre des aliens. Nous avons repris ta solution pour que tu puisses continuer à partir de là.

Le code précédent fonctionnait, mais la logique de tir était mélangée à tout le reste. À mesure que tu progresses en programmation, une des clés de la réussite consiste à découper le code en petits morceaux qui font chacun une seule chose.

Dans cet exercice, tu dois extraire la logique de tir dans une fonction dédiée, appelée `shootIfAlienAbove` (tirer si un alien est au-dessus). Cette fonction a la responsabilité de vérifier s'il y a un alien au-dessus du canon laser et, si c'est le cas, de l'abattre.

Le reste de la logique du jeu (suivre la position, changer de direction aux bords, déplacer le laser) reste dans la boucle, comme avant.

Crée ta fonction `shootIfAlienAbove`, puis utilise-la dans la boucle, avec la logique de déplacement.
