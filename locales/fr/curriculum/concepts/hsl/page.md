---
title: "Les couleurs HSL"
description: "Construire des couleurs à partir de la teinte (la nuance, de 0 à 360), de la saturation (son intensité, de 0 à 100) et de la luminosité (sa clarté, de 0 à 100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL nous offre une façon complètement différente de penser les couleurs par rapport à RGB. HSL est l'abréviation de teinte (_hue (H)_ en anglais), saturation (_saturation (S)_ en anglais) et luminosité (_lightness (L)_ en anglais). Tu disposes d'une fonction appelée `hsl` qui prend trois nombres, un pour la teinte, un pour la saturation et un pour la luminosité, et qui renvoie une couleur. Alors, voyons ce que ces trois mots veulent dire.

```javascript
hsl(hue, saturation, lightness)
```

La teinte, c'est la nuance de couleur que tu veux, et elle va de zéro à 360. Imagine un arc-en-ciel. C'est comme ça que je vois les choses. À gauche, on a le rouge, puis l'orange, le jaune, le vert, le bleu, le violet, et en fait, on revient jusqu'au rouge. Donc si tu dis zéro, tu pars de la gauche, et c'est le rouge. Si tu dis `120`, tu demandes du vert. `230`, c'est du bleu. Tu peux aussi voir ça comme une roue des couleurs, et c'est de là que vient le 360 : c'est le nombre de degrés dans le cercle. Personnellement, je cherche toujours les nombres dont j'ai besoin, donc pas la peine d'essayer de mémoriser tout ça, mais c'est bien de comprendre ce qui se passe. Voilà pour la teinte, qui est donc la nuance. Ensuite, on a la saturation, qui indique à quel point la couleur est vive. Elle va de zéro à 100. À zéro, tu obtiens simplement du gris. Il n'y a aucune couleur, aucun ton. À 100, tu obtiens une couleur pleine, vive et éclatante. Et enfin, on a la luminosité. La luminosité, c'est la clarté de la couleur, et elle va de zéro à 100 elle aussi. À zéro, tu obtiens du noir. Quelle que soit la teinte que tu as choisie, tu obtiens du noir. Il n'y a aucune lumière. Et à 100, tu obtiens du blanc. Peu importe le reste, la couleur est pleine de lumière, donc elle est blanche. 50 se trouve juste au milieu : c'est la couleur normale. Tu peux donc voir ça comme un curseur qui rend la couleur plus claire ou plus foncée.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Une roue des couleurs et un arc-en-ciel montrant que 0 correspond au rouge, 120 au vert et 240 au bleu"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Un curseur de saturation allant de 0 (gris) à 100 (couleur pleine et vive), en passant par 50"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Un curseur de luminosité allant de 0 (noir) à 100 (blanc), en passant par 50"
  width="500"
  height="398"
/>

Donc si on veut un cercle rouge normal, qu'on aurait écrit 255, zéro, zéro en RGB (tout le rouge, pas de vert, pas de bleu), ici on utilise zéro, 100, 50. Zéro pour la teinte rouge, 100 pour la saturation (la couleur pleine) et 50 pour la luminosité, ce qui correspond à un niveau normal de clarté. Si on veut en faire un cercle vert, il suffit de passer cette teinte à `120`. Et si on veut un vert plus foncé, on peut réduire la luminosité à `25`.

```javascript
hsl(0, 100, 50) // rouge
hsl(120, 100, 50) // vert
hsl(120, 100, 25) // vert foncé
```

Si on veut un vert plus terne, on peut retirer un peu de couleur, un peu de saturation, en la baissant par exemple à `30`.

Si tu veux un rose vif et éclatant, une teinte d'environ 300 donne du rose ; ensuite, on monte la saturation à 100 pour rendre la couleur bien vive, et on augmente aussi la luminosité, jusqu'à 60 environ.

HSL est génial quand tu veux faire défiler les couleurs. Si tu veux un arc-en-ciel, il te suffit d'augmenter la teinte petit à petit.
