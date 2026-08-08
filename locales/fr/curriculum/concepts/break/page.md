---
title: "L'instruction break"
description: "Utiliser le mot-clé `break` dans le corps d'une boucle pour en sortir immédiatement et passer au code qui vient après."
en_md5: 30148766de67ae467ab1a4852ad35895
---

Le mot-clé `break` peut être utilisé n'importe où dans le corps de n'importe quelle boucle.

La partie entre les accolades, c'est le corps. Et quand Jiki voit un `break`, il sort immédiatement de la boucle et passe au code qui se trouve en dessous.

Imaginons donc une contrainte qui dit d'exécuter cette boucle 50 fois, mais qu'on veuille s'arrêter si l'utilisateur tire cinq fois. On pourrait avoir en haut une boucle `for` qui compte jusqu'à 50.

Mais on pourrait aussi placer au milieu de la boucle une condition qui vérifie si l'utilisateur a tiré cinq fois, et si c'est le cas, on utilise l'instruction `break` (interrompre) pour arrêter la boucle.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // sortir de la boucle
  }
}
```
