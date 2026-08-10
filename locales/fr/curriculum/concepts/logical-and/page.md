---
title: "L'opérateur `&&` (ET)"
description: "Combiner deux conditions avec `&&` pour que la condition entière ne soit vraie que lorsque les deux parties sont vraies."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Si je te demandais d'ouvrir la porte seulement aux personnes de plus de 20 ans, tu saurais sans doute quoi faire. Mais que faire si tu devais vérifier qu'une personne a plus de 20 ans _et_ qu'elle porte la bonne tenue ? Il faudrait alors vérifier deux conditions différentes à la fois. Comment ferais-tu ?

Tu pourrais peut-être utiliser une instruction `if` imbriquée (_nested_ en anglais), un peu comme les boucles imbriquées qu'on a vues avant. Tu pourrais dire : si `age` est supérieur à `20`, alors on entre dans ce bloc de code, puis un autre `if` si `outfit` est égal à `"disco"`, avec une autre accolade et un nouveau bloc de code. Ça marcherait, mais ça devient vite le bazar, surtout quand tu veux avoir beaucoup de conditions.

Heureusement, il existe un moyen plus simple : utiliser des conditions composées de plusieurs parties. Plutôt que de vérifier une seule chose dans la condition, on peut en vérifier deux, trois ou plus. Et pour ça, on utilise le mot-clé `and`. Hélas, en JavaScript, ce mot-clé n'est pas vraiment le mot and, comme c'est le cas dans certains langages. À la place, tu dois écrire deux esperluettes (_ampersands_ en anglais) côte à côte. Il va falloir t'en souvenir. C'est agaçant, mais c'est comme ça, et tu vas t'y habituer.

On peut donc s'en servir pour construire une condition plus complexe. On peut dire que si `age` est supérieur à `20` et que `outfit` est `"disco"`, alors on continue. Si `age` est inférieur à `20` ou que `outfit` n'est pas `"disco"`, alors l'assertion entière, toute la condition, est fausse. Si tu as déjà étudié la logique, peut-être fait un peu d'électronique ou des maths un peu plus avancées, tout ça te semblera très naturel. Sinon, tu vas vite t'y faire.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Il y a une chose qui piège souvent les gens, avec le « et » comme avec le « ou » : chaque côté du et/ou (_and/or_ en anglais) doit être une comparaison complète. Ainsi, même si tu compares la même variable des deux côtés, tu dois la répéter. Tu ne peux pas écrire `if age is greater than 13 and less than 20`. Tu dois écrire `if age is greater than 13 and age is less than 20`. Il faut que les deux côtés soient des comparaisons complètes.

```javascript
if (age > 13 && age < 20)
```
