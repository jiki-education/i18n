---
title: "L'arithmétique"
description: "Combiner des variables et des maths pour que les valeurs puissent être liées les unes aux autres et dépendre les unes des autres, grâce à l'addition, la soustraction, la multiplication et la division."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Jusqu'ici, quand on a créé des variables, on n'y a mis que des valeurs simples : un nombre comme `50` ou une _string_ comme `"yellow"` (jaune). Mais les variables deviennent bien plus puissantes quand on peut les combiner entre elles, par exemple pour dire que le bord gauche d'un rectangle doit se trouver à une certaine distance du bord du canvas.

En programmation, on peut utiliser des maths tout à fait ordinaires, comme additionner, soustraire, multiplier et diviser, et y intégrer les variables qu'on a déjà définies.

Commençons par dire qu'on veut dessiner un rectangle sur notre canvas, et qu'on veut qu'il commence à 10 unités des bords gauche et droit, et à 20 unités du haut et du bas. Il sera donc au milieu du canvas, un peu plus long que haut.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Un rectangle bleu centré sur le canvas, à 10 unités des bords gauche et droit et à 20 unités du haut et du bas"
  width="399"
  height="400"
/>

Quand on dessine un rectangle, on a besoin de connaître ses valeurs `left` (gauche), `top` (haut), `width` (largeur) et `height` (hauteur), ainsi que sa couleur. On peut donc commencer par écrire tout ça.

Il faut maintenant déterminer ce que doivent valoir `left`, `top`, `width` et `height`. Alors définissons-les. Pour `left`, ce sera 10. Pour `top`, 20. La `width`... eh bien, c'est la taille du canvas, c'est-à-dire 100, moins les 10 à gauche et les 10 à droite, donc 80. Et la `height`, c'est la hauteur du canvas, 100 elle aussi, moins les 20 en haut et les 20 en bas, donc 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

On peut donc définir ces variables : `left`, 10 ; `top`, 20 ; `width`, 80 ; `height`, 60. Mais que se passe-t-il si on veut maintenant rapprocher le rectangle du centre, le rendre un peu plus petit ? Si on veut le placer à 20 unités des bords gauche et droit et à 30 unités du haut et du bas ? Il faut tout recalculer. La `width` devient 100 moins 20 moins 20, la `height` devient 100 moins 30 moins 30, et ça fait franchement plus de travail et plus de calculs que je n'ai envie d'en faire. Alors autant demander à l'ordinateur de le faire à notre place.

On peut définir la `width` comme 100 moins `left` moins `left`, et la `height` comme 100 moins `top` moins `top`, puisque la marge est la même en haut et en bas. Ou alors, on peut l'écrire comme 100 moins `left` fois deux, et 100 moins `top` fois deux.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Et maintenant, si on change `left` ou `top`, la `width` et la `height` changeront aussi. Les choses commencent à être liées les unes aux autres. Et le canvas, dans tout ça ? Pour l'instant, il fait 100. Mais que se passe-t-il si notre canvas passe à 200 de large et de haut ? Le mieux est sans doute de créer une variable appelée `canvasSize` (taille du canvas) et de lui donner la valeur 100. Notre `width` devient alors `canvasSize` moins `left` fois deux, et notre `height`, `canvasSize` moins `top` fois deux.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Réfléchissons à ce que fait Jiki quand on écrit let `height` égale `canvasSize` moins `top` fois deux. Il commence par prendre la boîte `top` sur l'étagère, et il y trouve 30. Il sort sa calculatrice de poche, fait 30 fois deux, et note 60 dans un coin de sa tête.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki prend la boîte top sur l'étagère et calcule que 30 fois deux font 60"
  width="377"
  height="400"
/>

Ensuite, il prend la boîte `canvasSize` sur l'étagère, y trouve 100, et calcule que 100 moins 60 font 40. Il sait maintenant que ce qu'on lui dit en réalité, c'est let `height` égale 40. Il obéit donc au `let` : il prend une nouvelle boîte, écrit `height` dessus, puis met 40 à l'intérieur. Et quand il utilisera `height` plus tard, il n'aura qu'à ressortir le 40.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki prend une nouvelle boîte, écrit height dessus et met 40 à l'intérieur"
  width="462"
  height="400"
/>

Une fois que tout fonctionne dans un exercice, amuse-toi à changer les valeurs des variables et regarde ce qui se passe. Observe ce qui grandit, ce qui rétrécit. Prends ton temps, et réfléchis aux relations entre les choses.
