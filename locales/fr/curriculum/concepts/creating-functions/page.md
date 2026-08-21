---
title: "Écrire tes propres fonctions"
description: "Utilise le mot-clé function pour fabriquer tes propres machines, que Jiki pourra ranger sur ses étagères et réutiliser."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Jusqu'ici, tu as utilisé des fonctions déjà construites pour toi, des fonctions comme `circle`, `rectangle`, `moveRight` ou `shoot`. Toutes ces fonctions ont été fabriquées puis posées sur les étagères de Jiki.

Mais maintenant, il est temps que tu commences à fabriquer tes propres fonctions.

Pour te montrer comment faire, on va fabriquer une nouvelle fonction pour le labyrinthe, appelée `walk5` (marche de 5 pas).

Cette fonction fera toujours avancer le personnage de cinq pas. Ce n'est pas la fonction la plus utile du monde, il faut bien l'avouer, mais elle est simple et constitue un bon point de départ.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Le personnage sur la grille du labyrinthe, prêt à avancer de cinq pas"
  width="500"
  height="314"
/>

Donc, si on te demandait d'écrire du code pour faire avancer le personnage de cinq pas, tu pourrais soit écrire `move` (avancer) cinq fois, soit utiliser une boucle `repeat` (répéter). Dans cet exemple, pour garder les choses simples, on va opter pour les cinq `move` à la suite.

```javascript
move()
move()
move()
move()
move()
```

Voilà donc ce qu'on veut mettre à l'intérieur de notre fonction.

Maintenant, ajoute en dessous une ligne qui dit à Jiki d'utiliser cette fonction. Tu l'as déjà fait ça de nombreuses fois.

Notre travail va ensuite consister à envelopper ces cinq premières lignes dans une fonction, pour que, quand Jiki utilise `walk5`, ce soient ces cinq premières lignes de code qui s'exécutent.

Pour transformer ces cinq lignes en une fonction, ces cinq `move` en une fonction, on a besoin d'un nouveau mot-clé : le mot-clé `function`.

Quand on utilise le mot-clé `function`, on doit faire deux choses. Un : indiquer le nom de la fonction, ici `walk5`. Deux : utiliser des accolades pour envelopper du code, comme pour dire : « Voici ce que tu dois faire à l'intérieur de la fonction. » On peut donc ajouter ça à notre code : on dit maintenant à Jiki de créer une fonction appelée `walk5`, et quand `walk5` sera utilisée, il devra exécuter ces cinq lignes de code.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Quand Jiki voit ce mot-clé `function`, il va fabriquer une nouvelle fonction, écrire ces instructions sur un tableau blanc à l'intérieur, puis coller sur la machine une étiquette `walk5`. Il posera ensuite cette fonction sur les étagères, à côté de toutes celles qui s'y trouvent déjà.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki à côté d'une nouvelle machine avec un tableau blanc à l'intérieur, pour y écrire les instructions de la fonction"
  width="500"
  height="396"
/>

Il n'y a rien de spécial dans cette fonction que tu as fabriquée par rapport aux fonctions intégrées (_built-in_ en anglais). Elles sont toutes posées côte à côte sur ses étagères.

Et quand tu utilises la fonction, quand tu écris `walk5()`, Jiki va simplement chercher la machine sur les étagères et l'utiliser exactement comme il l'a toujours fait avec n'importe quelle autre fonction. Tu peux imaginer qu'un mini Jiki habite à l'intérieur de chaque machine. Le mini Jiki porte toujours un chapeau très classe. Et ce mini Jiki travaille exactement de la même façon que le Jiki normal à l'extérieur : il suit les instructions de la même manière.

Un point essentiel à comprendre ici : quand Jiki crée la fonction, il n'exécute pas vraiment le code. Il ne fait que noter ce code pour l'utiliser plus tard.

Le personnage du labyrinthe ne bouge pas à ce moment-là, quand tu écris le mot-clé `function`.

Jiki a fabriqué la machine et l'a posée sur les étagères. Ce n'est que lorsque tu lui dis d'utiliser la machine, en écrivant `walk5()`, que tout cela se produit vraiment.
