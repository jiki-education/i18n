---
title: "La conversion de type"
description: "Transformer une valeur d'un type en un autre, par exemple convertir une string de chiffres en nombre avec `Number()`, ou un nombre en string avec `String()`."
en_md5: 8d85e3d274a6cdfdb74bd0488b685f18
---

Chaque valeur dans nos programmes a un type. `"7"` est une string et `7` est un nombre. Ils se ressemblent beaucoup, mais Jiki les traite très différemment. Tu ne peux pas additionner la string `"7"` et le nombre `3` en espérant obtenir `10`, parce que l'un des deux est un morceau de texte et l'autre une quantité.

Assez souvent, on a besoin de faire passer une valeur d'un type à un autre. C'est ce qu'on appelle la « conversion de type » (_type conversion_ en anglais), et il y a deux conversions que tu utiliseras tout le temps.

### Transformer une string en nombre

Quand tu lis les caractères d'une string, chaque caractère est lui-même une string, même quand il ressemble à un chiffre. Avant de pouvoir faire le moindre calcul avec, il faut le transformer en vrai nombre. Pour ça, on utilise `Number()`.

```javascript
Number("7")
// 7

Number("42")
// 42
```

Une fois que tu as un véritable nombre, tu peux l'additionner, le multiplier, et tout le reste.

```javascript
let digit = Number("7")
let doubled = digit * 2
// 14
```

Si tu donnes à `Number()` quelque chose qui n'est pas un nombre valide, comme `Number("cat")`, elle ne te renverra pas de nombre du tout. Mieux vaut donc t'assurer de ne lui donner que des strings qui sont vraiment des chiffres.

### Transformer un nombre en string

La direction opposée est tout aussi pratique. Parfois, tu as un nombre et tu veux le traiter comme du texte, par exemple pour l'accoler à une autre string ou pour regarder ses chiffres un par un. Pour ça, on utilise `String()`, le miroir de `Number()`.

```javascript
String(42)
// "42"

let count = 7
String(count)
// "7"
```

Maintenant que c'est une string, tu peux lui appliquer tous les outils habituels des strings, comme la lire caractère par caractère ou vérifier sa longueur.
