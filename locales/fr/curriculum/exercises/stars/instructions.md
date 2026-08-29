---
title: "Étoiles"
description: "Construis et dessine une pyramide d'étoiles."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

Dans cet exercice, tu vas construire un générateur de motifs visuels qui dessine des rangées d'étoiles.

Ta mission est de créer une fonction appelée `layoutStars` (dispose les étoiles) qui prend une entrée, `numRows`, pour préciser combien de rangées il faut, puis qui dessine les différentes rangées d'étoiles.

La fonction doit :

1. Construire un tableau de _strings_, avec une _string_ par rangée, en commençant par le bas avec la rangée la plus longue. Par exemple, si `numRows` vaut `3`, ce tableau sera `["***", "**", "*"]`.
2. Utiliser la fonction `drawStars(rows)` en lui passant tes rangées : c'est elle qui dessine les étoiles.

Si `numRows` vaut 0, le tableau doit être vide (`[]`) et rien n'est dessiné.

Si tu veux voir le résultat, tu peux exécuter `drawStars(["***", "**", "*"])` pour voir les étoiles se dessiner.

### La méthode push

Comme dans l'exercice précédent, tu vas devoir construire ton tableau avec la méthode `.push(element)`. Dans cet exercice, tu ne peux créer qu'un seul nouveau tableau (`let something = []`) dans ton code.

Amuse-toi bien !
