---
title: "Les nombres aléatoires"
description: "Utiliser `Math.randomInt` avec un minimum et un maximum pour obtenir un nombre différent à chaque exécution de la fonction."
---

En programmation, on veut souvent utiliser une fonction et obtenir en retour un nombre aléatoire (_random number_ en anglais) différent à chaque fois.

C'est utile dans toutes sortes de situations, mais surtout en cryptographie, où l'on fait beaucoup de choses comme créer des codes à partager entre machines, et ces codes doivent être aléatoires pour ne pas pouvoir être piratés.

Pour t'aider, tu as à ta disposition une fonction appelée `Math.randomInt` (`Math` pour mathématiques, `randomInt` pour nombre entier aléatoire). Tu remarqueras peut-être qu'il y a un point au milieu. À mesure que tu as accès à plus de fonctions, on peut les organiser en différents groupes pour garder les choses en ordre, et `Math` (abréviation de « mathématiques ») est le nom du groupe auquel cette fonction appartient. Cela indique à Jiki dans quelle section des étagères chercher, ici la section `Math`. Le point signifie simplement : va dans cette section et trouve la fonction. Pas de panique, tu n'as pas besoin de maîtriser tout ça pour le moment. Les instructions des exercices te diront toujours quelles fonctions sont disponibles et comment les utiliser. L'important, c'est de comprendre que lorsque Jiki utilise cette fonction, elle lui donne un nombre différent à chaque exécution, avec une seule contrainte. La fonction prend deux entrées : la première est le plus petit nombre que la machine a le droit de renvoyer, et la seconde est le plus grand nombre qu'elle a le droit de renvoyer. Donc si tu utilises la fonction `Math.randomInt` avec `10` et `13`, tu obtiendras toujours `10`, `11`, `12` ou `13` en sortie. Mais un nombre différent à chaque fois.

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
  alt="La machine Math.randomInt avec deux entonnoirs sur le dessus"
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

Maintenant, imagine que tu veuilles dessiner un cercle à une position aléatoire sur le canvas. Tu peux utiliser `Math.randomInt` pour obtenir à chaque fois des valeurs différentes pour `top` et `left`, mais avec des limites, disons `10` et `90`, pour que le cercle ne déborde jamais du canvas. À chaque exécution de ce code, le cercle sera dessiné à un endroit légèrement différent.
