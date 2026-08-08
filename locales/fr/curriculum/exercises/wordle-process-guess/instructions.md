---
title: "Wordle : traite l'essai"
description: "Vérifie un essai de Wordle et détermine quelles lettres sont correctes."
---

Bienvenue dans Wordle ! Le principe du jeu est simple : il y a un mot secret à trouver, et tu as 6 essais pour y arriver. À chaque essai, une lettre bien placée devient verte, une lettre présente dans le mot mais mal placée devient jaune, et une lettre absente du mot devient grise.

Ton travail consiste à créer une fonction appelée `processGuess` (« traiter l'essai ») qui prend deux entrées : le mot secret à trouver, et l'essai proposé par le joueur. Tu dois déterminer l'état de chaque lettre, puis appeler la fonction `colorRow(1, states)` (« colorier la rangée ») avec un tableau contenant l'état de chaque lettre : soit `"correct"`, soit `"present"`, soit `"absent"`.

Par exemple, si l'essai était entièrement correct, tu appellerais :

```
colorRow(1, ["correct", "correct", "correct", "correct", "correct"])
```

Tu as aussi accès à la fonction `push(list, element)` (« ajouter un élément »), qui ajoute un élément à un tableau et renvoie le nouveau tableau.
