---
title: "La boucle repeat sans nombre"
description: "Laisser les parenthèses d'une boucle repeat vides pour que Jiki continue jusqu'à ce que quelque chose d'autre lui dise de s'arrêter."
en_md5: 5902e86c82b7bfe9ca519f9bdf8650ad
---

Jusqu'ici, quand tu as utilisé la boucle repeat, tu as toujours précisé un nombre qui indique combien de fois répéter. Répéter cinq fois, 10 fois, 40 fois. Parfois, tu as même utilisé une variable pour ça. Mais tu as toujours dit à Jiki exactement combien de fois répéter la boucle. Pourtant, il arrive qu'on ne sache pas à l'avance combien de fois répéter. Pense au labyrinthe. Tout au début de ce cours, tu as fait sortir le personnage du labyrinthe en écrivant chaque déplacement un par un. Tu pouvais voir le labyrinthe, compter les pas et écrire exactement le bon nombre de déplacements.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Un labyrinthe où le personnage peut voir le chemin, compter les pas et écrire exactement les bons déplacements"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Mais imagine que je te dise : « Écris-moi du code capable de faire sortir le personnage de n'importe quel labyrinthe que je te donne. » Ce labyrinthe pourrait demander 10 pas, ou 50, ou 200. Impossible de le savoir à l'avance.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Plusieurs labyrinthes de formes et de tailles différentes, avec Jiki qui se demande comment sortir de chacun d'eux"
  width="402"
  height="400"
/>

Il te faut donc un moyen de dire à Jiki de continuer, tout simplement. Continuer à vérifier où il peut aller, continuer à prendre des décisions, continuer à avancer, encore et encore, jusqu'à ce que ce soit terminé.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki qui court sur un tapis de course, encore et encore, sans s'arrêter"
  width="428"
  height="400"
/>

Et la façon de faire est vraiment simple : il suffit de ne pas donner de nombre au mot-clé `repeat`. Laisse simplement ces parenthèses vides. Si tu fais ça, Jiki continuera jusqu'à ce que quelque chose d'autre lui dise de s'arrêter. Plus tard, on verra ce que peuvent être ces « quelque chose d'autre ». Mais pour l'instant, il continuera jusqu'à ce que l'exercice soit terminé, ou jusqu'à ce qu'il décide qu'il tourne depuis des heures, qu'il veut faire une pause et qu'il en a assez.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki épuisé, affalé sur le tapis de course après avoir couru pendant des heures, prêt à abandonner et à faire une pause"
  width="500"
  height="378"
/>
