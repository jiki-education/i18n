---
title: "Vérificateur d'ISBN"
description: "Vérifie si le numéro ISBN d'un livre est valide."
en_md5: 1f50053213b8649f126851f264174e53
---

Chaque livre possède un ISBN, un numéro à 10 chiffres qui l'identifie de façon unique. Chaque ISBN est unique et suit un format précis. Il existe aussi un processus formel de vérification qui permet de contrôler qu'une string est bien un ISBN, et c'est justement ce que tu vas créer dans cet exercice.

Les ISBN contiennent normalement des tirets et ressemblent à ceci : `3-598-21508-8`

(Il existe aussi des ISBN à 13 chiffres, mais tu peux tranquillement les ignorer pour cet exercice !)

### Vérifie un ISBN

Pour vérifier un ISBN, on procède ainsi :

- On part de la gauche et on additionne chaque chiffre multiplié par un poids qui décroît de 10 à 1.
- On calcule le reste de la division de ce total par 11.
- On vérifie si ce reste vaut zéro.

Par exemple, pour l'ISBN `3-598-21508-8`, on vérifie si :

```
(3*10 + 5*9 + 9*8 + 8*7 + 2*6 + 1*5 + 5*4 + 0*3 + 8*2 + 8*1) % 11 === 0
```

Comme le résultat est 0, cela prouve que notre ISBN est valide.

Quelques remarques importantes :

- Un ISBN peut parfois se terminer par un X. Dans ce cas, ce X représente `10`. Si le X apparaît à n'importe quelle autre position, l'ISBN n'est pas valide.
- Les ISBN peuvent s'écrire avec ou sans tirets.
- Tout autre caractère rend l'ISBN invalide.

### À toi de jouer

Crée une fonction appelée `isValidIsbn(isbn)` (est un ISBN valide) qui prend une string ISBN et renvoie `true` si elle est valide et `false` sinon.

### La fonction Number(...)

Une chose qu'on n'a pas encore vue, et que tu dois connaître : la fonction `Number(str)`. C'est une fonction qui prend une string et renvoie cette string sous forme de nombre. Ainsi, si tu écris `Number("1234")`, tu obtiens `1234`. C'est une fonction un peu étrange, parce qu'elle commence par une majuscule. Pas de panique : on t'expliquera pourquoi bien plus tard.

Pour en savoir plus, consulte la <a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">page du concept sur la conversion de types</a>.

### Mets en pratique ce que tu viens d'apprendre

Comme dans l'exercice précédent, il existe de nombreuses façons valables de résoudre cet exercice, mais la solution qu'on attend de toi utilise une instruction `continue`.

Le scénario bonus te met au défi de le résoudre en 22 lignes de code. Il existe des solutions plus courtes, mais si tu tiens en 22 lignes, tu as déjà fait un beau travail d'optimisation.

Amuse-toi bien !
