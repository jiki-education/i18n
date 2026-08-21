---
title: "Les nombres aléatoires"
description: "Utiliser `Math.randomInt` avec un minimum et un maximum pour obtenir un nombre différent à chaque fois que la fonction s'exécute."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

En programmation, on veut souvent utiliser une fonction et obtenir en retour un nombre aléatoire (_random number_ en anglais) différent à chaque fois.

C'est utile dans toutes sortes de situations, en particulier en cryptographie, où l'on passe beaucoup de temps à créer des codes à partager entre machines, et ces codes doivent être aléatoires pour qu'on ne puisse pas les pirater.

Pour t'aider, tu disposes d'une fonction appelée `Math.randomInt` (Math veut dire mathématiques, et randomInt, nombre entier aléatoire). Tu remarqueras peut-être qu'il y a un point au milieu de ce nom. À mesure que tu auras accès à davantage de fonctions, on pourra les organiser en différents groupes pour que tout reste bien rangé, et la partie `Math` (abréviation de « mathématiques ») est le nom du groupe auquel cette fonction appartient. Elle indique à Jiki dans quelle section des étagères regarder, ici la section `Math`. Le point veut simplement dire : va dans cette section et trouve la fonction. Ne t'inquiète pas trop de tout ça pour l'instant. Les instructions des exercices te diront toujours quelles fonctions sont disponibles et comment les utiliser. L'important, c'est de comprendre que quand Jiki utilise cette fonction, elle lui donne un nombre différent à chaque exécution, avec une seule contrainte. La fonction a deux entrées : la première est le plus petit nombre que la machine a le droit de renvoyer, et la seconde, le plus grand nombre qu'elle a le droit de renvoyer. Donc si tu utilises la fonction `Math.randomInt` avec `10` et `13`, tu obtiendras toujours `10`, `11`, `12` ou `13` en sortie. Mais tu en obtiendras un différent à chaque fois.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki grimpant à une échelle vers la section Math des étagères de son entrepôt"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="La machine Math.randomInt avec deux entonnoirs d'entrée sur le dessus"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="La machine Math.randomInt avec 10 et 13 dans ses entonnoirs, produisant 10, 11, 12 ou 13"
  width="488"
  height="400"
/>

Imaginons maintenant que tu veuilles dessiner un cercle à une position aléatoire sur le canvas. Tu peux utiliser `Math.randomInt` pour obtenir à chaque fois des valeurs différentes pour `top` et `left`, mais avec des limites, disons `10` et `90`, pour que le cercle ne déborde jamais du canvas. À chaque fois que tu exécutes ce code, le cercle est dessiné à un endroit légèrement différent.
