---
title: "Alphanumérique"
description: "Construis des fonctions pour classer un texte en lettres, en chiffres ou les deux."
en_md5: 4a99adb1b883c6f6710a3494a8961cc2
---

Dans cet exercice, ta mission est de créer des fonctions qui vérifient si une string contient des lettres et/ou des chiffres.

Tu vas devoir écrire trois fonctions auxiliaires :

- `isAlpha(string)` (est alphabétique) : détermine si une string se compose uniquement de lettres ASCII (par exemple "A", "a", "Hello")
- `isNumeric(string)` (est numérique) : détermine si une string se compose uniquement de caractères numériques (par exemple "0", "1", "456")
- `isAlphanumeric(string)` (est alphanumérique) : détermine si une string se compose uniquement de lettres ASCII ou de chiffres (par exemple "Hello", "42", "Hello42")

Pour tout autre symbole (par exemple "! ?") et pour les caractères non ASCII (par exemple "じき", "正直"), les trois fonctions doivent renvoyer faux.

Écris ensuite une fonction `whatAmI(string)` (que suis-je) qui utilise ces fonctions auxiliaires pour catégoriser une string :

- Une string qui ne contient que des lettres doit renvoyer `"Alpha"`
- Une string qui ne contient que des chiffres doit renvoyer `"Numeric"`
- Une string qui contient à la fois des lettres et des chiffres doit renvoyer `"Alphanumeric"`
- Tout le reste doit renvoyer `"Unknown"`

### Mets en pratique ce que tu viens d'apprendre

Il existe de nombreuses façons valables de résoudre cet exercice, mais la solution qu'on attend de toi utilise une instruction `continue` et les trois fonctions ci-dessus.

Cet exercice te met aussi au défi de tout résoudre en 42 lignes de code ou moins. Cet objectif ne donne pas forcément la solution la plus soignée : quelques lignes de plus donnent sans doute une version plus agréable, et il existe aussi des solutions plus courtes. Mais c'est un bon objectif pour repousser tes limites.

Amuse-toi bien !
