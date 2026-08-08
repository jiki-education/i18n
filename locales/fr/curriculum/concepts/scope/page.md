---
title: "La portée"
description: "Comprendre comment les accolades créent leur propre jeu d'étagères, pour que les variables ne vivent que le temps de leur bloc."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Imagine du code qui dessine un cercle à un endroit différent à chaque exécution, et qu'on veuille dessiner 10 cercles à des endroits différents. On pourrait combiner ça avec une boucle. Mais si tu fais partie de ceux qui suivent attentivement, tu as peut-être remarqué quelque chose d'étrange ici.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Au début, j'ai dit qu'il y avait une règle : les boîtes sur les étagères de Jiki doivent porter des noms uniques,

et que ce mot-clé `let` crée une nouvelle boîte chaque fois qu'on l'utilise.

Mais comme le `let` se trouve dans une boucle, Jiki va créer une nouvelle boîte à chaque tour de boucle.

Alors, le code est-il faux, ou est-ce qu'il se passe quelque chose de bizarre ici ?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki, l'air perplexe, se demande si le code est faux"
  width="384"
  height="400"
/>

Eh bien, il s'avère que le code est correct. C'est du JavaScript parfaitement valide, et ça fonctionne grâce à un concept appelé la portée (_scope_ ou _scoping_ en anglais).

La portée, c'est quelque chose qui te semblera sans doute assez simple au premier abord, mais je peux te garantir qu'elle te causera des soucis pendant tout le reste de ta carrière. Même les développeurs les plus expérimentés rencontrent des problèmes de portée, et JavaScript est l'un des langages les plus compliqués sur ce point. Je te dis ça pour que, le jour où tu rencontreras un problème de portée, tu ne te sentes pas mal. Mais du coup, sois vraiment attentif à cette partie, parce qu'elle est importante.

Quand tu vois une accolade dans du code, elle crée ce qu'on appelle une nouvelle portée. Qu'est-ce que ça veut dire ? Eh bien, tu peux imaginer que Jiki installe un nouveau petit jeu d'étagères dans son atelier chaque fois qu'il voit une accolade. Et toutes les boîtes qu'il crée pendant qu'il travaille, pendant qu'il exécute le code à l'intérieur de ces accolades, ces boîtes, ces nouvelles boîtes, vont sur le petit jeu d'étagères tout neuf, pas sur les étagères principales.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Les étagères principales de Jiki à côté d'un nouveau jeu d'étagères plus petit créé par une accolade"
  width="500"
  height="205"
/>

Et quand Jiki arrive à l'accolade fermante correspondante, il jette toutes les boîtes qui se trouvent sur ce jeu d'étagères secondaire.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki jette les boîtes du jeu d'étagères secondaire à la poubelle quand il atteint l'accolade fermante"
  width="500"
  height="237"
/>

Donc chaque fois qu'on a une boucle comme celle-ci, on peut créer des boîtes qui ne durent que le temps d'un tour de boucle. Les boîtes `top` (haut) et `left` (gauche) que tu vois ici ne vivent que jusqu'à l'accolade fermante, puis elles sont jetées. Et Jiki atteint cette accolade fermante à chaque tour de boucle. Soit 10 fois dans ce programme. Donc 10 fois, il va créer une boîte appelée `left`, puis la jeter à nouveau.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Deux boîtes étiquetées left et top qui ne durent qu'une seule itération de la boucle"
  width="500"
  height="187"
/>

Donc quand tu crées une variable, tu dois décider combien de temps tu veux la garder. Si tu veux qu'elle vive longtemps, elle doit se trouver en dehors de toute accolade. Si tu veux qu'elle ne dure qu'une seule itération, un seul tour de boucle, alors tu peux la mettre à l'intérieur des accolades. Tu vois comme tout ça peut devenir un peu déroutant ? Alors, une règle simple pour t'y retrouver quand tu débutes : garde toutes tes variables vers le haut de ton code, en dehors des accolades, et contente-toi de les mettre à jour à l'intérieur. Par exemple, on pourrait écrire le code ci-dessus avec une seule boîte `top` et une seule boîte `left` mises à zéro au départ, puis mises à jour à chaque tour de boucle. C'est parfaitement valide aussi. Aucune des deux approches n'est bonne ou mauvaise. Il existe des bonnes pratiques, mais on les verra plus tard. Pour l'instant, expérimente, amuse-toi, vois ce qui te semble le plus confortable, et essaie de ne pas trop t'inquiéter de tout ça.
