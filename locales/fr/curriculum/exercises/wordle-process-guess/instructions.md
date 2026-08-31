---
title: "Wordle : traite une proposition"
description: "Vérifie une proposition de Wordle et détermine quelles lettres sont correctes."
en_md5: 2db4a680ca0788813ac1c48445bfca73
---

Bienvenue dans Wordle, le jeu devenu viral pendant les confinements du Covid-19 !

Le jeu fonctionne comme ceci :

- Il y a un mot secret que le joueur essaie de deviner.
- Le joueur a 6 propositions pour le trouver.
- Il y a 5 cases, une pour chaque lettre. Pour chaque proposition :
  - Si une lettre est correcte, la case devient verte.
  - Si une lettre est dans le mot secret mais à la mauvaise place, la case devient jaune.
  - Si une lettre n'est pas dans le mot secret, la case devient grise.

Dans quelques exercices, tu implémenteras le jeu Wordle en entier, mais pour **cet exercice**, tu ne vas faire fonctionner que la première rangée.

Pour cela, tu dois créer une fonction appelée `processGuess(target, guess)` (« traiter la proposition »). Elle doit déterminer l'état de chaque lettre de la proposition, puis appeler la fonction `colorRow(1, states)` (« colorier la rangée ») avec un tableau contenant l'état de chaque lettre : soit `"correct"`, soit `"present"`, soit `"absent"`.

Par exemple, `processGuess("Hello", "Holes")` doit utiliser `colorRow` avec :

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Assure-toi d'avoir bien compris cet exemple avant de continuer !

### Méthodes

Comme dans les derniers exercices, tu peux construire le tableau des états avec la méthode `push`, qui ajoute un élément à la fin d'un tableau. Par exemple, `states.push("correct")` ajoute `"correct"` à la fin du tableau `states`.

Tu as aussi la méthode `includes` si tu veux vérifier si une _string_ en contient une autre.

Bonne chance !
