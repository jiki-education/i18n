---
title: "Ajouter des entrées aux fonctions"
description: "Ajouter des entonnoirs à tes propres fonctions pour qu'elles fassent des choses différentes selon les valeurs qu'on leur passe."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Jusqu'ici, les fonctions que tu as créées font exactement la même chose à chaque fois. `turnAround` (faire demi-tour) tourne toujours deux fois à gauche. `shootIfAlienAbove` (tirer si un alien est au-dessus) vérifie toujours, puis tire.

Mais pense aux fonctions que tu utilises depuis le début du cours : elles font des choses différentes selon leurs entrées. Rectangle prend en entrées une position en haut, une position à gauche, une largeur et une hauteur, puis dessine un rectangle différent selon ce que tu lui indiques.

Maintenant, on va aussi ajouter des entonnoirs à tes propres fonctions.

Pour cela, il y a deux choses à savoir : d'abord à quoi ça ressemble concrètement, c'est-à-dire ce que tu dois écrire, et ensuite ce qui se passe réellement.

La première partie est assez simple. Il suffit d'ajouter des parenthèses, puis les noms des entrées que tu veux.

Imagine qu'on crée une fonction qui doit tirer plusieurs fois. Appelons-la `shootMany` (tirer plusieurs fois).

On l'écrirait comme ceci :

```javascript
function shootMany(numShots) {
  // ...
}
```

Quand tu veux utiliser cette fonction, tu l'appelles avec le nombre de tirs souhaité :

```javascript
shootMany(5)
shootMany(2)
```

Et voici le point essentiel. Quand le code s'exécute, quelle que soit la valeur que tu mets dans cette entrée, `5` ou `2`, mini-Jiki, celui avec le chapeau à l'intérieur de la fonction, prend cette entrée et la place dans une boîte appelée `numShots` (nombre de tirs), puis pose cette boîte sur les étagères à l'intérieur de la fonction pour que tu puisses l'utiliser dans le code de la fonction.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki à l'intérieur de la machine shootMany plaçant l'entrée dans une boîte étiquetée numShots"
  width="500"
  height="376"
/>

Je le répète.

Quand on écrit `shootMany(5)` pour utiliser la fonction, Jiki, à l'extérieur, va chercher un `5` et le met dans l'entonnoir de `shootMany`. À l'intérieur de la machine, mini-Jiki récupère ce `5` et le place dans une boîte appelée `numShots`, parce que c'est le nom que tu as donné à cet entonnoir, puis il pose cette boîte sur les étagères à l'intérieur de la fonction, dans la machine.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki posant la boîte numShots sur les étagères à l'intérieur de la machine shootMany"
  width="500"
  height="302"
/>

Ensuite, dans la fonction, tu peux utiliser la boîte `numShots` exactement comme n'importe quelle autre boîte. Le nom `numShots` n'a rien de magique. On aurait pu l'appeler comme on voulait. Ce n'est qu'une instruction pour mini-Jiki : créer à chaque fois, à l'intérieur de la fonction, une boîte portant cette étiquette, et y mettre ce qui est passé dans cet entonnoir.

Et une fois qu'une valeur se trouve dans cette boîte, tu peux faire tout ce que tu ferais normalement avec des boîtes. Tu pourrais par exemple utiliser la boîte `numShots` dans une boucle repeat pour tirer le bon nombre de fois. Tu peux aussi avoir plusieurs entrées : il suffit de les séparer par des virgules. Donc si on a une fonction appelée `drawStar` (dessiner une étoile) qui dessine une étoile à partir de sa position en haut à gauche, on l'écrirait comme ceci :

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="La machine drawStar avec deux entonnoirs, recevant deux valeurs distinctes"
  width="453"
  height="400"
/>

Ensuite, quand la fonction est appelée, mini-Jiki range simplement les valeurs passées dans les entrées dans des boîtes nommées `top` (haut) et `left` (gauche), puis les pose sur les étagères à l'intérieur de la fonction.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki rangeant les deux entrées dans des boîtes étiquetées left et top sur les étagères à l'intérieur de la machine drawStar"
  width="431"
  height="400"
/>
