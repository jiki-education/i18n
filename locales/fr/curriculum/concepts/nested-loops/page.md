---
title: "Des boucles dans des boucles"
description: "Placer une boucle à l'intérieur d'une autre pour que la boucle interne s'exécute entièrement à chaque étape de la boucle externe, ce qui est parfait pour les grilles."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Disons qu'on veut une rangée de fleurs. On peut écrire quelque chose comme ceci. On définit une position, on plante une fleur, on augmente la position de 10, on recommence, et on obtient une belle rangée de fleurs bien alignées.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki devant un tableau blanc, avec une seule rangée de fleurs bien alignées plantées en dessous"
  width="406"
  height="400"
/>

Mais que se passe-t-il si on veut une grille de fleurs, avec des rangées et des colonnes ? Par exemple quatre rangées de cinq fleurs chacune.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Une grille de fleurs de quatre rangées sur cinq colonnes, avec Jiki qui réfléchit à la façon de la dessiner"
  width="383"
  height="400"
/>

On a une boucle qui dessine une rangée de fleurs. Comment peux-tu l'utiliser pour en dessiner quatre ? Ou plutôt, que pourrait-on faire pour dessiner quatre rangées ?

Une option serait tout simplement de copier-coller cette boucle quatre fois, en changeant la position verticale à chaque fois. Et ça fonctionnerait. Ce serait tout à fait correct. Mais ce code se répète, et il existe une meilleure façon de faire. On le sait : quand du code se répète, on peut utiliser une boucle pour simplifier les choses.

Ici, on peut donc utiliser une boucle à l'intérieur d'une autre boucle : une boucle pour les rangées, et une pour les fleurs de chaque rangée. Commençons par ajouter une boucle repeat autour de notre code existant, pour que tu te fasses une idée du fonctionnement. Et on va simplement répéter une seule fois. Autrement dit, on demande à Jiki de faire une fois tout ce qui se trouve entre ces accolades externes. Cela a donc exactement le même effet que de ne pas avoir cette boucle externe du tout. On demande à Jiki de répéter quelque chose une fois, ce qui revient exactement à lui demander de le faire sans le repeat. Mais c'est comme ça que ce code fonctionne. C'est du code légitime, parfaitement valide. On a bien une boucle à l'intérieur d'une autre boucle.

Maintenant, que se passe-t-il si on modifie cette boucle externe pour qu'elle répète deux fois ? Jiki va alors exécuter deux fois toute la partie « `plant` (planter) cinq fois ». Il va planter 10 fleurs. Mais toutes ces fleurs seront sur la même rangée.

De la même façon qu'on doit décaler la position de gauche à droite à chaque fleur, on doit aussi déplacer la position verticale après avoir dessiné chaque rangée complète. Alors, comment faire ? Eh bien, on peut ajouter une variable externe pour la position verticale, l'utiliser dans notre fonction `plant`, puis l'augmenter de 10 après chaque rangée.

Prends le temps de suivre la valeur à chaque étape. La position verticale commence à 10. Pendant les cinq premières plantations, elle ne bouge pas. C'est la position horizontale qui augmente. Ensuite, on ajoute encore 10 à cette position verticale, et on plante cinq nouvelles fleurs un peu plus bas. On remet la position horizontale à 10, puis on l'augmente à nouveau à chaque fois.

Et maintenant, on peut dire : répète tout ça quatre fois, et on obtient quatre rangées de cinq plantes.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="La grille finale de fleurs, quatre rangées sur cinq, avec un Jiki tout content qui lève les deux pouces"
  width="389"
  height="400"
/>

La chose essentielle à comprendre, c'est que Jiki termine tout le travail de la boucle interne (_inner loop_ en anglais) avant de revenir à la boucle externe (_outer loop_ en anglais). Il ne fait pas des allers-retours entre les deux. Il termine la boucle interne, puis il passe à l'étape suivante de la boucle externe.

Dans cette situation, tu peux voir la boucle externe comme celle qui contrôle les groupes, autrement dit les rangées, et la boucle interne comme celle qui contrôle chaque élément du groupe, chaque élément de la rangée. Dans notre exemple, la boucle externe crée quatre rangées, et la boucle interne place cinq plantes, cinq éléments, dans chaque groupe.
