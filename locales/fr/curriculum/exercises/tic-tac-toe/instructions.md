---
title: "Morpion"
description: "Construis toute la logique du jeu du morpion."
en_md5: 69a7f49aa82a884b196987293d6fe763
---

Bienvenue dans le morpion, ton premier grand projet !

Cet exercice rassemble tout ce que tu as appris jusqu'ici : les variables, les fonctions, les conditions, les boucles, les tableaux et les différents types de données. Tu vas écrire bien plus de 100 lignes de code et construire quelque chose en partant de zéro.

C'est un exercice plus ambitieux que ceux que tu as déjà résolus. Prends ton temps, réfléchis bien à chaque problème, et n'hésite pas à demander de l'aide.

## Les règles du jeu

Au morpion, un joueur est `o` et l'autre est `x`, et chacun à son tour écrit son symbole dans l'une des cases d'une grille de 3x3.

Si tu alignes trois de tes symboles (horizontalement, verticalement ou en diagonale), tu gagnes ! Si toutes les cases sont occupées sans que trois symboles soient alignés, la partie se termine par un match nul.

## Instructions

Crée une fonction `runGame(moves)` (lancer la partie, avec `moves` la liste des coups).

Elle prend un seul argument, `moves`, un tableau de paires de coordonnées (par exemple, `[[1,2], [3,2]]` signifie que le premier joueur place un pion dans la colonne 2 de la rangée 1, puis que le joueur suivant en place un dans la colonne 2 de la rangée 3).

La fonction doit créer un plateau de jeu, puis placer chaque pion du tableau `moves`. Ce faisant, elle doit vérifier que chaque coup est valide, et annoncer un gagnant le cas échéant.

Parfois, un coup peut être un `"?"` au lieu d'une paire de coordonnées. Dans ce cas, c'est ton code qui décide quel coup jouer :

- Si tu peux gagner, gagne.
- Si tu peux bloquer une victoire de ton adversaire, fais-le.
- Sinon, place un pion là où cela semble judicieux.

### Le plateau

Dessine un plateau composé de :

1. Un rectangle à partir de (5,5), avec une `width` (largeur) de 90 et une `height` (hauteur) de 90 : `rectangle(5, 5, 90, 90, "#ffffff")`
2. Des lignes de grille qui divisent le plateau en 9 cases égales.

Utilise `changeStroke(1, "#333333")` (modifier le trait) pour définir une épaisseur de trait de 1 et une couleur de ton choix.

### Les pions

Dessine les pions sous forme de cercles et de croix (deux lignes chacune) :

- Tous les pions sont placés au centre de leur case.
- Les cercles ont un rayon de 10.
- Les croix sont deux lignes qui s'étendent sur 20 dans les deux directions.

Ensemble, le plateau et les pions devraient ressembler à ceci :

<img src="/static/images/exercise-assets/tic-tac-toe/pieces.webp" alt="Plateau de morpion avec des pions o et x dessinés" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Joue les coups

- Le premier coup est toujours un `o`.
- Les coups alternent entre `o` et `x`.
- Si un joueur fait un coup invalide (placer un pion sur une case déjà occupée), écris `"Invalid move!"` avec un voile rouge (`rectangle(0, 0, 100, 100, "#c80000")`) et arrête de traiter les coups de `moves`.

### Match nul

Si le plateau se remplit sans gagnant :

- Passe tous les pions en gris clair avec `changeStroke` et une couleur grise.
- Dessine un voile violet : `rectangle(0, 0, 100, 100, "#604fcd")`
- Écris `"The game was a draw!"`

### La victoire

Si l'un des joueurs aligne 3 symboles :

- Redessine l'alignement gagnant en `"#604fcd"`.
- Passe tous les autres pions en gris clair.
- Dessine un voile violet : `rectangle(0, 0, 100, 100, "#604fcd")`
- Écris `"The x's won!"` ou `"The o's won!"`

La situation obtenue devrait ressembler à ceci :

<img src="/static/images/exercise-assets/tic-tac-toe/won.webp" alt="Plateau de morpion avec l'alignement gagnant mis en évidence et un écran de résultats" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Parties inachevées

Certains scénarios comportent des parties inachevées. Dans ce cas, n'affiche pas d'écran de résultats. Laisse la partie dans un état où un autre coup pourrait encore être joué.

### Joue dans l'ordre

Les scénarios s'attendent à ce que tu joues la partie dans l'ordre. Joue chaque coup sur le plateau, puis occupe-toi de l'état final une fois tous les coups joués.
