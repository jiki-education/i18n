---
title: "Collectionneur d'emojis"
description: "Explore les labyrinthes, ramasse des emojis et fais le compte de ta récolte."
en_md5: 35fec0e21c9bf54a107ab339a9288967
---

Jusqu'ici, quand tu regardais autour de toi, tu vérifiais des mots. Mais maintenant, les labyrinthes sont passés aux emojis ! Il faut donc mettre à jour ton code pour gérer ceux-ci :

- `"star"` (Ton point de départ)
- `"flag"` (Là où tu essaies d'arriver)
- `"white square"` (Une case vide où tu peux te déplacer)
- `"fire"` (Attention !)
- `"poop"` (Beurk)
- `"brick"` (Un mur)

On a aussi éparpillé quelques emojis supplémentaires dans les labyrinthes pour que tu les ramasses. Chaque fois que ton personnage trouve un emoji qui ne figure pas dans la liste ci-dessus, il doit l'ajouter à son décompte.

Pour t'aider, on a ajouté :

- Une nouvelle direction dans laquelle regarder (`"down"` !). Elle te dit ce qui se trouve sur la case actuelle.
- Une nouvelle fonction `removeEmoji()` (retirer l'emoji) qui retire du plateau l'emoji présent sur la case actuelle. N'essaie pas de ramasser un des emojis spéciaux de la liste ci-dessus !

Une fois que tu as atteint la case d'arrivée, utilise la fonction `announceEmojis(result)` (annoncer les emojis), en lui passant un dictionnaire qui représente le nombre d'emojis que tu as collectés.

C'est le bon moment pour utiliser la fonction `hasKey()` (contient la clé) !
