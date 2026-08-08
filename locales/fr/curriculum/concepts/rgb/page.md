---
title: "Les couleurs RGB"
description: "Mélanger de la lumière rouge, verte et bleue, de 0 à 255, pour créer n'importe quelle couleur à l'écran."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB nous permet de voir les couleurs comme un mélange de rouge, de vert et de bleu. C'est ce que signifie RGB : rouge (_red (R)_ en anglais), vert (_green (G)_ en anglais), bleu (_blue (B)_ en anglais). Si tu te souviens des mélanges de peinture à l'école, l'idée est la même, sauf qu'au lieu de peinture, on mélange de la lumière.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Trois cercles de lumière rouge, verte et bleue qui se chevauchent et se mélangent pour donner du jaune, du magenta, du cyan et du blanc"
  width="500"
  height="390"
/>

Dans beaucoup d'exercices, tu vas avoir une fonction appelée `rgb(red, green, blue)`, qui prend trois nombres en entrées, un pour le rouge, un pour le vert, un pour le bleu, et qui renvoie une couleur.

Les nombres que tu peux utiliser en entrées vont de zéro à `255`. Zéro signifie « je ne veux pas du tout de cette couleur », et `255` signifie « mets-en autant que possible dans le mélange ». Donc si on utilise la fonction `rgb` avec `255`, zéro et zéro en entrées, on dit : je veux tout le rouge. Souviens-toi que `255` est le plus grand nombre qu'on peut mettre. Mais on ne veut ni vert ni bleu, donc ces deux-là restent à zéro. On obtient donc du rouge, qu'on peut stocker dans une variable puis utiliser dans la fonction `circle`, exactement comme on le faisait déjà avec les couleurs nommées. Et si on utilise la fonction `rgb` avec zéro, `255`, zéro ? On dit maintenant : pas de rouge, tout le vert, pas de bleu. On obtient donc un cercle vert. Et si on veut du jaune ? Le jaune est un mélange de rouge et de vert. On peut donc dire : donne-moi tout le rouge, tout le vert, et pas de bleu, et cela nous donnera du jaune. On peut aussi utiliser des nombres plus petits. Si on veut un peu de rouge, pas de vert et beaucoup de bleu, on obtient du violet. Et beaucoup de rouge, un peu de vert, un peu plus de bleu, cela donne un rose. Voilà pour RGB : on mélange du rouge, du vert et du bleu pour obtenir différentes combinaisons.

```javascript
rgb(255, 0, 0) // rouge
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Un cercle rouge produit par rgb(255, 0, 0), tout le rouge, sans vert ni bleu"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // jaune
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Un cercle jaune produit par rgb(255, 255, 0), tout le rouge et tout le vert, sans bleu"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // rose
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Un cercle rose produit par rgb(230, 50, 170), beaucoup de rouge, un peu de vert et un peu de bleu"
  width="436"
  height="400"
/>

RGB est idéal quand on veut ajuster une composante précise : la quantité de rouge, de vert ou de bleu.
