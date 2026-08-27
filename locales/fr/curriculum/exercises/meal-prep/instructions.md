---
title: "Préparation des repas"
description: "Détermine les ingrédients que tu dois acheter pour ta recette."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Tu fais partie des gens qui aiment passer au magasin chaque jour pour acheter les ingrédients du dîner. Ça te donne une bonne excuse pour te dégourdir les jambes et discuter avec le commerçant du coin.

Chaque jour, tu choisis une recette, puis tu regardes ce qu'il y a dans le frigo et tu notes ce qu'il te faut acheter.

Tu as maintenant décidé de te simplifier la vie en écrivant un programme qui fait le travail à ta place ! Il compare ce qu'il y a sur ta liste avec ce qu'il y a dans le frigo, et affiche la différence.

Ton travail consiste à écrire une fonction appelée `shoppingList(fridgeContents, recipeItems)` (liste de courses). Elle prend deux entrées : le contenu de ton frigo, sous forme de tableau de _strings_, et les ingrédients de la recette, également en tableau de _strings_. Elle doit renvoyer ce qu'il te faut acheter, là aussi sous forme de tableau de _strings_.

Par exemple :

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### La méthode push

Pour résoudre l'exercice, tu dois construire ton tableau à l'aide de la méthode `.push(element)`. Tu ne peux créer qu'un seul nouveau tableau dans ton code. Revois la vidéo précédente si tu ne sais pas trop quoi faire.

Tu peux aussi utiliser la méthode `includes` (voir le rappel ci-dessous).

Amuse-toi bien !
