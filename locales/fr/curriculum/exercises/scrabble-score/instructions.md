---
title: "Score au Scrabble"
description: "Calcule le score d'un mot au Scrabble."
en_md5: 69e7c6f8e0aaacd0f5ea8ed34929a805
---

Le Scrabble est un jeu de lettres où les joueurs posent des tuiles sur un plateau pour former des mots. Chaque lettre a une valeur, et le score d'un mot est la somme des valeurs de ses lettres.

Ta tâche consiste à calculer le score d'un mot au Scrabble en additionnant les valeurs de ses lettres.

Les lettres valent les points suivants :

- A, E, I, O, U, L, N, R, S, T = 1 point
- D, G = 2 points
- B, C, M, P = 3 points
- F, H, V, W, Y = 4 points
- K = 5 points
- J, X = 8 points
- Q, Z = 10 points

Par exemple, le mot « cabbage » vaut 14 points : 3 + 1 + 3 + 3 + 1 + 2 + 1.

Tu dois créer deux fonctions :

1. `letterValues()` (valeurs des lettres) : renvoie un dictionnaire (_dictionary_ en anglais) où chaque clé (_key_ en anglais) est une lettre majuscule et chaque valeur est son nombre de points. On te donne comme point de départ une liste de groupes de lettres et leurs valeurs ; convertis-la en dictionnaire plutôt que de tout taper à la main.

2. `scrabbleScore(word)` (score au Scrabble du mot) : prend un mot et renvoie son score total au Scrabble en utilisant le dictionnaire des valeurs de lettres.
