---
title: "Répare le mur"
description: "Comble les trous d'un mur abîmé avec des rectangles."
en_md5: d3801d3e7afec83435698bb052cf876e
---

Bienvenue dans ton premier exercice de dessin. Dans cet exercice, tu vas dessiner des rectangles à l'aide de la fonction (_function_ en anglais) `rectangle`.

Pour dessiner un rectangle, on a besoin de connaître sa position par rapport au haut et au bord gauche, ainsi que sa largeur et sa hauteur. Quand on utilise la fonction `rectangle`, on peut préciser ces valeurs sous forme d'entrées (_inputs_ en anglais) :

- `left` (gauche) : le bord gauche du rectangle
- `top` (haut) : le haut du rectangle
- `width` (largeur) : la largeur du rectangle
- `height` (hauteur) : la hauteur du rectangle

<img src="/static/images/exercise-assets/fix-wall/intro-rectangle.webp" alt="Répare le mur" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Tu dessines toujours sur un canvas de 100 de large et de 100 de haut. Le coin en haut à gauche du canvas est donc `0,0`, et le coin en bas à droite `100,100`.

### Répare le mur

Ton travail consiste à utiliser trois rectangles pour combler les trous dans le mur.

### Trouve les bonnes coordonnées

Tu peux **survoler la zone de dessin** pour trouver les coordonnées.

Pour te faciliter la vie, **tous les nombres utilisés sont divisibles par 10** (par exemple `10`, `20`, `30`, etc. sont valides, mais pas `5`, `12`, `25`, etc.).
