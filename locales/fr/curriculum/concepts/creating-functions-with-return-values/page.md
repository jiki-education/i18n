---
title: "Ajouter une valeur de retour aux fonctions"
description: "Utilise le mot-clé `return` pour donner à tes propres fonctions un tapis roulant qui renvoie une valeur à celui qui les appelle."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Tu sais maintenant créer des fonctions avec ou sans entrées. Il ne reste plus qu'une dernière chose à apprendre pour devenir un expert en fabrication de fonctions : comment donner un tapis roulant à tes fonctions.

Tu as déjà utilisé plein de fonctions qui renvoient des choses. `isAlienAbove` (y a-t-il un alien au-dessus ?) te renvoie vrai ou faux. `Math.randomInt(1, 10)` (`Math` pour mathématiques, `randomInt` pour nombre entier aléatoire) te renvoie un nombre aléatoire.

Quand Jiki utilise ces fonctions, quelque chose sort sur le tapis roulant, qu'il peut ensuite aller récupérer et utiliser.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki récupérant une valeur qui sort sur le tapis roulant d'une machine"
  width="500"
  height="312"
/>

Pour faire ça, on a besoin d'un nouveau mot-clé : le mot-clé `return`.

Le mot-clé `return` dit à Mini Jiki de déposer quelque chose sur le tapis roulant.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Mini Jiki, à l'intérieur de la machine, pousse la valeur 42 sur le tapis roulant"
  width="500"
  height="335"
/>

Alors créons une fonction, et appelons-la `meaningOfLife` (le sens de la vie). Le travail de cette fonction est toujours le même : renvoyer le nombre `42`. Elle n'a aucune entrée. On l'écrit comme ceci :

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="La machine meaningOfLife envoie le nombre 42 sur son tapis roulant"
  width="500"
  height="323"
/>

Désormais, partout où on utilise `meaningOfLife()` dans le code, on récupère le nombre `42`, qu'on peut utiliser comme n'importe quelle autre valeur. On peut le mettre dans une boîte avec `let`, le passer en entrée à une autre fonction, ou le comparer dans une instruction `if`.

Les fonctions avec un `return` peuvent aussi prendre des entrées. Tu pourrais écrire une fonction `ageBracket(age)` (tranche d'âge) qui renvoie `"Sorry, too young"` quand `age` est inférieur à 18, et `"Welcome"` dans le cas contraire. Celui qui l'appelle récupère la string que la fonction a renvoyée.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Une valeur d'âge glissée dans l'entonnoir de la machine pour qu'elle puisse décider quoi renvoyer"
  width="487"
  height="400"
/>

C'est le cœur même de la programmation : on crée plein de ces petites briques, puis on les assemble pour en faire des programmes.
