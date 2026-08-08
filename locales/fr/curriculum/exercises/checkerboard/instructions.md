---
title: "Damier"
description: "Dessine un damier de n'importe quelle taille et prépare-le pour une partie, en calculant chaque position à partir de la taille du plateau."
en_md5: 1669c45c882ce94e16651bfc2d77a172
---

Dans ce projet, tu vas dessiner un damier et y placer les pions, pour que tout soit prêt pour une partie de dames.

Ton code doit fonctionner pour **n'importe quelle taille de plateau**. On te donne trois plateaux d'exemple à essayer : un puzzle utilise le plateau classique de 8x8, un autre un plateau plus petit de 6x6, et un dernier un plateau plus grand de 10x10. Tu peux utiliser `getBoardSize()` (obtenir la taille du plateau) pour savoir combien de cases le plateau compte en largeur et en hauteur cette fois-ci (les plateaux sont toujours carrés).

<div style="display: flex; gap: 8px; margin: 12px 0;">
  <img src="/static/images/exercise-assets/checkerboard/board-6.svg" alt="Damier de 6x6" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-8.svg" alt="Damier de 8x8" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-10.svg" alt="Damier de 10x10" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
</div>

### Le plateau

Comme d'habitude, le canvas fait toujours `100` de large et `100` de haut. Suis ces deux règles :

- Le plateau a une bordure `"black"` (noir) tout autour, d'une largeur de `2`.
- Les cases alternent entre `"dark brown"` (marron foncé) et `"white"` (blanc), en se partageant proprement l'espace à l'intérieur de la bordure. La case en bas à gauche est toujours marron foncé, jamais blanche.

### Les pions

- Chaque pion se place au centre d'une case.
- Les pions sont des cercles à rebord, avec un contour extérieur et une couleur intérieure :
  - Le pion complet fait 80 % de la largeur de la case.
  - Le cercle intérieur fait 75 % de la largeur du pion complet.
- Les rangées en **haut** du plateau reçoivent des pions `"charcoal"` (anthracite), chacun avec un contour `"black"`.
- Les rangées en **bas** reçoivent des pions `"white"`, chacun avec un contour `"grey"` (gris).
- Les pions se placent uniquement sur les cases **foncées**.
- Les **deux rangées du milieu** restent toujours vides. Toutes les autres rangées ont des pions.

## Raisonne en proportions

Le cœur de cet exercice, c'est de **ne jamais mettre les tailles et les positions « en dur »**, c'est-à-dire de ne pas les écrire comme des valeurs fixes. Calcule une taille de « cellule » unique à partir de la taille du plateau, puis construis chaque case et chaque pion à partir d'elle. Si tu t'y prends bien, exactement le même code dessinera un petit plateau de 6x6 et un plus grand de 10x10 sans changer un seul nombre.
