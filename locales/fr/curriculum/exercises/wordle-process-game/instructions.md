---
title: "Wordle : joue une partie"
description: "Traite une partie complète de Wordle en coloriant chaque proposition rangée par rangée."
en_md5: 1b5b8da5306311ef573ee6181a74f162
---

Maintenant que tu sais traiter une seule proposition, il est temps de traiter une partie entière !

Crée une fonction appelée `processGame` (traiter la partie) qui prend deux entrées :

1. Le mot secret à deviner.
2. Un tableau des propositions faites par le joueur.

Tu dois déterminer l'état de chaque rangée, puis appeler la fonction `colorRow(row, states)` (colorier une rangée selon les états donnés) avec le numéro de la rangée (`1-6`) et un tableau contenant l'état de chaque lettre.

Par exemple, si la première proposition était correcte :

```
colorRow(1, ["correct", "correct", "correct", "correct", "correct"])
```
