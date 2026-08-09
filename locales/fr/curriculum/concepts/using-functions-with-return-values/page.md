---
title: "Les fonctions qui renvoient quelque chose"
description: "Attraper la valeur qui sort du tapis roulant d'une fonction et l'utiliser dans ton code."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Jusqu'ici, on a vu des fonctions qui font quelque chose dans le monde. La fonction `circle` (cercle) dessine un cercle. La fonction `move` (se déplacer) déplace ton personnage. Mais certaines fonctions marchent autrement : plutôt que d'agir sur l'extérieur, elles te redonnent quelque chose que tu peux utiliser dans ton code. Quand une fonction redonne quelque chose à Jiki pour qu'il l'utilise dans le code, on dit que cette fonction renvoie (_return_ en anglais) quelque chose. Elle le renvoie à Jiki. Tu peux imaginer ces machines avec un tapis roulant de sortie. On a déjà nos entonnoirs dans lesquels on met des choses, mais une machine peut aussi avoir une seule sortie, un tapis roulant par lequel quelque chose peut ressortir. Quand Jiki appuie sur le bouton de la machine, celle-ci se met à ronronner, et à la fin, quelque chose sort du tapis roulant. Ça peut être un nombre. Ça peut être une string. C'est quelque chose que Jiki peut attraper et utiliser.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Une machine avec un tapis roulant de sortie sur le côté, prête à renvoyer une valeur à Jiki"
  width="500"
  height="317"
/>

La plupart des fonctions, sans doute 95 % d'entre elles, renvoient quelque chose. Elles peuvent faire des calculs pour toi et renvoyer le résultat, ou coller des strings ensemble puis te donner la string obtenue. Ou peut-être qu'elles te donnent l'heure actuelle chaque fois que tu fais tourner la machine. Regardons ce dernier cas. Disons qu'on a une fonction appelée `getCurrentTime` (obtenir l'heure actuelle). Chaque fois que Jiki fait tourner la machine, un bout de papier glisse hors du tapis roulant avec l'heure écrite dessus, par exemple 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="La machine getCurrentTime avec un bout de papier indiquant 14:35 qui glisse hors de son tapis roulant"
  width="500"
  height="312"
/>

Ensuite, on peut ranger cette valeur de retour dans une boîte grâce à `let` :

```javascript
let time = getCurrentTime()
```

Jiki va faire tourner la machine, récupérer l'heure actuelle sur le tapis roulant, et la ranger dans une boîte appelée `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki qui range le papier 14:35 sorti du tapis roulant dans une boîte étiquetée time"
  width="372"
  height="400"
/>

Maintenant, il est important de comprendre que le bout de papier que Jiki met dans la boîte est figé à cet instant-là. Même si l'heure réelle change pendant que ton programme tourne, la boîte contient toujours ce bout de papier avec 14:35 écrit dessus. Une fois que quelque chose est dans la boîte, c'est figé. Ça ne change pas par magie. Si on veut remettre l'heure actuelle dans la boîte plus tard, il faut réutiliser notre fonction `getCurrentTime` pour l'obtenir.

La plupart des fonctions qui renvoient quelque chose ont aussi des entrées. Par exemple, on pourrait avoir une fonction `join` (joindre) qui prend deux strings en entrée et les renvoie assemblées, séparées par un espace. Donc si on utilise une machine `join` avec `"Hello"` et `"World"` comme entrées, il sortira du tapis roulant une seule string avec `"Hello World"` écrit dessus.

```javascript
join("Hello", "World"); // "Hello World"
```
