---
title: "Balle arc-en-ciel"
description: "Crée une balle qui rebondit et peint une traînée arc-en-ciel sur le canvas."
en_md5: 501aa30e85d8fceb38890c72be4a0b87
---

Ton travail consiste à créer une balle qui rebondit aléatoirement dans le canvas, en dessinant un arc-en-ciel sur son passage.

Voilà à quoi ça devrait ressembler :

<img src="/static/images/exercise-assets/rainbow-ball/example.gif" alt="Balle arc-en-ciel animée qui rebondit dans le canvas en laissant une traînée colorée" style="width: 100%; max-width: 200px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Pour cet exercice, tu disposes de la fonction `Math.randomInt(min, max)` (« Math » pour les mathématiques, « randomInt » pour un nombre entier aléatoire), qui renvoie un nombre entier aléatoire compris entre le `min` et le `max` que tu lui donnes.

Prends quelques minutes pour réfléchir à la façon dont tu pourrais t'y prendre. C'est la partie la plus enrichissante de l'exercice, alors prends ton temps et **note tes idées avant de lire la formule ci-dessous.**

Quand tu as une idée de ton approche, poursuis ta lecture. Mais pas avant d'avoir vraiment pris le temps de réfléchir !

## La formule

Dans ce projet, tout repose sur des variables responsables de la position de la balle, qui augmentent ou diminuent régulièrement, et sur d'autres variables qui contrôlent **comment** la balle se déplace et qui changent quand certaines conditions sont remplies.

### Dessine la balle

- Le premier cercle que tu dessines doit se trouver en `(5, 5)`.
- Tous les cercles doivent avoir un rayon de `10`.
- La couleur des cercles doit utiliser HSL, en commençant par une teinte de `100` (vert), une saturation de `80` (couleurs vives) et une luminosité de `50` (intermédiaire).

### Anime la balle

- Pour commencer, à chaque itération, déplace la balle de `2` vers la droite et de `1` vers le bas.
- La teinte doit augmenter de `1` à chaque fois, jusqu'à atteindre le maximum (`360`), puis se mettre à diminuer. La saturation et la luminosité n'ont pas besoin de changer.

### Fais-la rebondir

- Quand la balle atteint le bord du canvas, elle doit changer de direction. (Consulte les indices si tu ne trouves pas comment faire.)
- Pour rendre les choses plus amusantes, change de direction à l'aide de la fonction `Math.randomInt(min, max)`. Choisis un `min` (minimum) et un `max` (maximum) qui donnent le style d'animation que tu veux.

## Pour réussir les vérifications

On te laisse beaucoup de liberté dans cet exercice. On vérifie que :

- Les premiers cercles sont corrects.
- Plus de 80 % du canvas est peint.

Les nombres que tu choisis pour y arriver, c'est toi qui vois. Tu vas probablement avoir besoin d'un bloc de répétition qui tourne entre `500` et `1000` fois.

## Décompose le problème...

La clé de cet exercice, c'est de procéder une étape à la fois :

1. Fais changer la couleur de la balle pendant qu'elle se déplace
2. Fais-la rebondir sur le côté droit
3. Fais-la rebondir sur le bas.
4. Fais-la rebondir aléatoirement
