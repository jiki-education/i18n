---
title: "Les méthodes"
description: 'Des fonctions qui appartiennent à une valeur et que tu appelles avec la notation pointée, comme `"Jeremy".includes("e")` ou `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Jusqu'ici, quand on a parlé des _strings_ ou des nombres, on les a plutôt vus comme des choses assez statiques.

Et même si c'est le cas, ils embarquent aussi tout un tas de fonctionnalités intégrées que Jiki peut utiliser.

Au fil du cours, on va découvrir ces fonctionnalités, ces sortes de capacités qu'ils possèdent et qui vont te simplifier beaucoup la vie.

On va s'intéresser à deux types de capacités : les propriétés (_properties_ en anglais) et les méthodes (_methods_ en anglais).

Les méthodes sont des fonctions qui appartiennent à la _string_.

Donc, au lieu d'écrire une fonction dans laquelle on place une _string_ comme entrée, on peut utiliser une méthode directement sur la _string_.

Par exemple, tu te souviens d'une fonction qui vérifie si une _string_ contient une lettre en particulier ? Eh bien, les _strings_ ont justement une méthode appelée `includes` (contient) qui fait exactement ça, et on peut l'utiliser avec la même notation pointée que tu as vue pour les propriétés.

La différence avec les propriétés, c'est qu'on les écrit comme des fonctions, avec des parenthèses et des entrées.

On peut donc écrire :

```javascript
"Jeremy".includes("e") // true
```

Et on obtiendra `true` en retour, puisque `"Jeremy"` contient bien un `"e"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki écrivant la string Jeremy sur un bout de papier"
  width="359"
  height="400"
/>

Les méthodes se distinguent des propriétés parce qu'elles ne sont pas des faits statiques : ce sont de vraies fonctions. Tu peux les imaginer comme des fonctions équipées d'une boîte intégrée qui contient la _string_.

Leur fonctionnement interne n'a pas vraiment d'importance pour l'instant. Tu ne vas pas en construire avant un bon moment. Tout ce que tu as besoin de savoir, c'est qu'on utilise une méthode en écrivant un point, puis la syntaxe habituelle d'une fonction.

Une chose à savoir avec les _strings_ : les méthodes ne modifient rien à l'intérieur de la _string_. Par exemple, il existe une méthode `toUpperCase` (mettre en majuscules), qui renvoie la _string_ avec toutes ses lettres en majuscules. Mais elle ne change pas la _string_ d'origine, qui contient toujours `"Jeremy"` écrit avec un seul J majuscule. À la place, Jiki crée une nouvelle _string_ tout en majuscules.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
