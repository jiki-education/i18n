---
title: "Construire des tableaux"
description: "Partir d'un tableau vide et utiliser `push` pour ajouter des éléments un à un en parcourant des données."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Jusqu'ici, tu as travaillé avec des tableaux dont la valeur est simplement définie au départ, une fois pour toutes. Mais que faire si tu veux ajouter des choses à un tableau au fil du temps ? Eh bien, pour ça, les tableaux ont une méthode appelée `push` (pousser).

Cette méthode prend une seule entrée : la chose que tu veux attacher au bout du tableau. Ici, on veut donc pousser le mot `"Isaac"` au bout d'un tableau qui contient déjà `"DJ"` et `"Bethany"`.

Pour faire ça, Jiki sort le tableau de la boîte, il attache `"Isaac"` au bout de la chaîne, puis il remet le tout dans la boîte. Note que, contrairement à ce qui se passait avec les strings, où Jiki créait une nouvelle string à chaque fois, ici il modifie vraiment le tableau.

Quelque chose que tu verras très souvent en programmation, c'est partir d'un tableau vide et le remplir petit à petit. Tu peux imaginer une grande liste pleine de noms que tu vas passer en revue un par un. Chaque fois qu'on en trouve un qui est celui d'un mentor, on l'ajoute à notre tableau.

Cette façon de faire, boucler et ajouter au fur et à mesure, tu vas l'utiliser très souvent !
