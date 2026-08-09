---
title: "Acronyme"
description: "Transforme une phrase en son acronyme, en ignorant la ponctuation au passage."
en_md5: 97e2adefc1da7867f5e218d0fe8c4fdb
---

Tu as déjà résolu des acronymes simples de trois lettres, par exemple en transformant `Portable Network Graphics` en `PNG`.

Mais dans cet exercice, on va un peu plus loin : il s'agit de gérer tous les acronymes, pas seulement ceux de trois lettres. Et c'est bien plus corsé...

Ton travail consiste à écrire une fonction appelée `acronym(phrase)` qui prend une phrase et renvoie son acronyme.

## Les règles

Un nouveau mot commence après un **espace** ou un **trait d'union** (`-`). Tous les autres caractères (virgules, apostrophes, tirets bas, points d'exclamation, etc.) ne sont **pas** des séparateurs et ne font jamais partie de l'acronyme. Seules les lettres comptent.

| Phrase                    | Acronyme |
| ------------------------- | -------- |
| As Soon As Possible       | ASAP     |
| Liquid-crystal display    | LCD      |
| Thank George It's Friday! | TGIF     |

## Attention

On ne t'a fourni aucune des méthodes JavaScript plus avancées que tu verras plus tard dans le cours (rien pour magiquement mettre une lettre en majuscule, ni pour te dire si un caractère est une lettre). Tu devras construire toutes ces fonctions auxiliaires toi-même avant de pouvoir assembler l'ensemble.

Celui-ci est plus délicat qu'il n'y paraît. Amuse-toi bien !
