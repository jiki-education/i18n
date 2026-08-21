---
title: "Alphanumérique"
description: "Construis des fonctions pour déterminer si un texte contient des lettres, des chiffres ou les deux."
en_md5: f199432f63304f1d03c4ce1512c8a349
---

Dans cet exercice, ta mission est de créer des fonctions qui vérifient si une _string_ contient des lettres et/ou des chiffres.

Tu vas devoir écrire trois fonctions auxiliaires :

- `isAlpha(string)` (est alphabétique) : détermine si une _string_ se compose uniquement de lettres ASCII (par exemple "A", "a", "Hello")
- `isNumeric(string)` (est numérique) : détermine si une _string_ se compose uniquement de caractères numériques (par exemple "0", "1", "456")
- `isAlphanumeric(string)` (est alphanumérique) : détermine si une _string_ se compose uniquement de lettres ASCII ou de chiffres (par exemple "Hello", "42", "Hello42")

Pour tout autre symbole (par exemple "! ?") ou tout caractère non ASCII (par exemple "じき", "正直"), les trois fonctions doivent renvoyer _false_.

Ensuite, écris une fonction `whatAmI(string)` (que suis-je) qui s'appuie sur ces fonctions auxiliaires pour classer une _string_ :

- Les _strings_ qui ne contiennent que des lettres doivent renvoyer `"Alpha"`
- Les _strings_ qui ne contiennent que des chiffres doivent renvoyer `"Numeric"`
- Les _strings_ qui contiennent à la fois des lettres et des chiffres doivent renvoyer `"Alphanumeric"`
- Tout le reste doit renvoyer `"Unknown"`

### Mets en pratique ce que tu viens d'apprendre

Il existe de nombreuses façons valables de résoudre cet exercice, mais la solution qu'on attend de toi utilise une instruction `continue` ainsi que les trois fonctions ci-dessus.

Il y a aussi une tâche bonus qui te met au défi de résoudre le tout en 42 lignes de code ou moins. Cette cible n'est pas forcément la solution la plus digne d'un code de production : quelques lignes de plus donneraient sans doute un résultat plus élégant, et il existe aussi des solutions plus courtes. Mais c'est un bon objectif pour repousser tes limites.

Amuse-toi bien !
