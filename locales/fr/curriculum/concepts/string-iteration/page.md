---
title: "Parcourir les strings avec `for ... of`"
description: "Utiliser une boucle `for of` pour passer sur chaque lettre d'une string et faire quelque chose avec chacune, l'une après l'autre."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Tu peux accéder à une seule lettre d'une string avec des crochets (`[]`). Maintenant, on va voir comment parcourir une string avec une boucle, en récupérant chaque lettre une par une.

Et pour ça, il nous faut un nouveau type de boucle. Jusqu'ici, on a utilisé la boucle `repeat`, et maintenant on va utiliser ce qu'on appelle une boucle `for of` (qui parcourt chaque élément d'une collection, l'un après l'autre). Ça fait deux nouveaux mots-clés, `for` et `of`.

Le mot-clé `for`, on va le retrouver à pas mal d'endroits par la suite. Il peut être utilisé seul, ou associé à `in` ou à `of`. Pour l'instant, on va se concentrer sur le dernier, `of`.

Alors, regardons un peu de code.

On commence par créer une variable appelée `name` (nom), qui contient la string `"Jeremy"` (le prénom Jeremy). Rien de nouveau ici.

Ensuite vient la ligne de la boucle, et il s'y passe beaucoup de choses, alors prenons le temps de la détailler.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

D'abord, on a le mot-clé `for`. Il indique à Jiki qu'on veut faire une boucle. Jiki regarde alors un peu plus loin, voit `of`, et comprend qu'on veut faire une boucle « for of ».

Et ça veut dire qu'au lieu d'utiliser une boucle `repeat`, où on dit « Répétons 10 fois », on dit « Parcourons toutes les lettres de la string ». C'est ça, le sens de « for of ».

Ensuite, on a ce `let letter` (lettre). C'est exactement la même chose que le `let name` juste au-dessus : on crée simplement une variable appelée `letter`.

La différence, c'est qu'au lieu de dire explicitement ce qu'on y met, on demande à Jiki d'y placer chaque lettre de la string, une par une.

Donc Jiki voit `for`, vérifie qu'il y a bien `of`, puis se met au travail. Il regarde la première lettre de la string, `"J"` dans notre cas, et la met dans une nouvelle boîte appelée `letter`. Au passage, on aurait pu l'appeler autrement : rien n'oblige à choisir `letter`. On a juste décidé de l'appeler `letter` ici.

Ensuite, il exécute le code entre les accolades, et tu peux y faire tout ce que tu ferais ailleurs dans du code. La seule différence, c'est que ce bloc de code va s'exécuter une fois pour chaque lettre de la string, et qu'il aura cette variable à disposition.

Chaque fois que Jiki arrive à l'accolade fermante, il jette la boîte `letter` et en crée une nouvelle avec la lettre suivante dedans. La première fois, il jette donc le `"J"` et met un `"e"` dans la boîte à la place. Puis il fait pareil pour `"r"`, puis `"e"`, puis `"m"`, puis `"y"`. Six lettres, six tours de boucle. Il faut un peu de temps pour s'habituer à la syntaxe, mais le concept en lui-même n'est pas si difficile.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki jetant l'ancienne boîte de lettre et déposant la lettre suivante dans une nouvelle boîte étiquetée letter, en répétant l'opération pour chaque lettre de la string"
  width="500"
  height="168"
/>
