---
title: "Les couleurs"
description: "Deux façons d'exprimer n'importe quelle couleur. RGB mélange de la lumière rouge, verte et bleue. HSL utilise la teinte, la saturation et la luminosité."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Si un jour tu fais quelque chose de visuel avec du code (et même si tu veux devenir data scientist et que tout ce qui touche au dessin te semble un peu ennuyeux, communiquer des données par le visuel est une compétence essentielle), il existe deux grandes façons d'exprimer les couleurs. Tu as déjà utilisé des couleurs par leur nom, comme _red_ ou _yellow_, en dernière entrée de tes fonctions de dessin. C'est pratique pour utiliser une couleur rapidement, mais c'est assez limité : il n'existe qu'une poignée de couleurs nommées. On va donc voir deux façons d'exprimer n'importe quelle couleur, et ces deux façons s'appellent RGB et HSL.

RGB nous permet de voir une couleur comme un mélange de rouge, de vert et de bleu. C'est ce que signifie RGB : rouge (_red (R)_ en anglais), vert (_green (G)_ en anglais), bleu (_blue (B)_ en anglais). Si tu te souviens des mélanges de peinture à l'école, l'idée est la même, sauf qu'au lieu de peinture, on mélange de la lumière.

Dans beaucoup d'exercices, tu vas avoir une fonction appelée `rgb`, qui prend trois nombres en entrées, un pour le rouge, un pour le vert, un pour le bleu, et qui renvoie une couleur.

Les nombres que tu peux utiliser en entrées vont de zéro à `255`. Zéro signifie « je ne veux pas du tout de cette couleur », et `255` signifie « mets-en autant que possible dans le mélange ». Donc si on utilise la fonction `rgb` avec `255`, zéro et zéro en entrées, on dit : je veux tout le rouge. Souviens-toi que `255` est le plus grand nombre qu'on peut mettre. Mais on ne veut ni vert ni bleu, donc ces deux-là restent à zéro. On obtient donc du rouge, qu'on peut stocker dans une variable puis utiliser dans la fonction `circle`, exactement comme on le faisait déjà avec les couleurs nommées. Et si on utilise la fonction `rgb` avec zéro, `255`, zéro ? On dit maintenant : pas de rouge, tout le vert, pas de bleu. On obtient donc un cercle vert. Et si on veut du jaune ? Le jaune est un mélange de rouge et de vert. On peut donc dire : donne-moi tout le rouge, tout le vert, et pas de bleu, et cela nous donnera du jaune. On peut aussi utiliser des nombres plus petits. Si on veut un peu de rouge, pas de vert et beaucoup de bleu, on obtient du violet. Et beaucoup de rouge, un peu de vert, un peu plus de bleu, cela donne un rose. Voilà pour RGB : on mélange du rouge, du vert et du bleu pour obtenir différentes combinaisons.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Trois cercles de lumière rouge, verte et bleue qui se chevauchent et se mélangent pour donner du jaune, du magenta, du cyan et du blanc"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Passons maintenant à HSL, qui nous donne une façon complètement différente de penser les couleurs. HSL signifie teinte (_hue (H)_ en anglais), saturation (_saturation (S)_ en anglais) et luminosité (_lightness (L)_ en anglais). Comme pour RGB, tu as une fonction appelée `hsl` qui prend trois nombres, un pour la teinte, un pour la saturation et un pour la luminosité, et qui renvoie une couleur. Décortiquons ce que ces trois mots veulent dire.

La teinte, c'est la nuance (_shade_ en anglais) de couleur que tu veux, et elle va de zéro à 360. Imagine un arc-en-ciel. C'est comme ça que je me le représente. À gauche, on a le rouge, puis l'orange, le jaune, le vert, le bleu, le violet, et en réalité on revient jusqu'au rouge. Donc si tu dis zéro, tu pars de la gauche, et c'est du rouge. Si tu dis `120`, tu demandes du vert. `230`, c'est du bleu. Tu peux aussi voir cela comme un cercle chromatique (_color wheel_ en anglais), et c'est de là que vient le 360 : c'est le nombre de degrés du cercle. Personnellement, je cherche toujours les nombres dont j'ai besoin, donc ne t'inquiète pas d'essayer de mémoriser tout ça, mais c'est bien de comprendre ce qui se passe. Voilà pour la teinte, qui est donc la nuance. Ensuite, on a la saturation, qui indique à quel point la couleur est vive. Elle va de zéro à 100. À zéro, tu obtiens juste du gris : il n'y a aucune couleur, aucun ton. À 100, tu obtiens une couleur pleine, vive, éclatante. Et enfin, on a la luminosité. La luminosité indique à quel point la couleur est claire, et elle va aussi de zéro à 100. À zéro, tu obtiens du noir. Quelle que soit la teinte choisie, tu obtiens du noir : il n'y a aucune lumière. Et à 100, tu obtiens du blanc. Peu importe le reste, la couleur est pleine de lumière, donc elle est blanche. 50 est juste au milieu, la couleur normale. Tu peux donc voir cela comme un curseur (_slider_ en anglais) pour rendre la couleur plus claire ou plus foncée.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Un arc-en-ciel et un cercle chromatique où la teinte va de 0 (rouge) à 120 (vert) puis 240 (bleu)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Curseur de saturation allant de 0 (gris) à 100 (magenta vif) en passant par 50"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Curseur de luminosité allant de 0 (noir) à 100 (blanc) en passant par 50 (couleur pleine)"
  width="500"
  height="398"
/>

Donc si on veut un cercle rouge normal, qu'on aurait écrit 255, zéro, zéro en RGB (tout le rouge, pas de vert, pas de bleu), ici on utilise zéro, 100, 50. Zéro pour la teinte rouge, 100 pour la saturation (la couleur pleine), et 50 pour la luminosité, un niveau normal de clarté. Si on veut en faire un cercle vert, il suffit de passer la teinte à `120`. Et si on veut un vert plus foncé, on peut baisser la luminosité à `25`.

Si on veut un vert plus terne, on peut retirer un peu de couleur, un peu de saturation, en la descendant par exemple à `30`.

Si tu veux un rose vif et éclatant, une teinte d'environ 300 donne du rose, puis on monte la saturation à 100 pour le rendre vraiment vif, et on augmente aussi la luminosité, jusqu'à environ 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

On a donc deux façons différentes d'exprimer une couleur, et elles sont utiles dans des situations différentes. RGB est idéal quand on veut ajuster une composante précise : la quantité de rouge, de vert ou de bleu. HSL est idéal quand on veut faire défiler les couleurs : si tu veux un arc-en-ciel, il suffit d'augmenter la teinte petit à petit.
