---
title: "Les mots de l'enseigne"
description: "Découpe le nom d'une entreprise en mots individuels à imprimer."
en_md5: b2d0a5c31cfbb7036c1a860f59498ff8
---

Il y a quelque temps, tu as créé un programme pour aider un client dans son activité de fabrication d'enseignes. Il revient aujourd'hui avec un nouveau besoin : il fabrique désormais des enseignes plus grandes, dont chaque mot est imprimé à l'avance, puis les mots sont assemblés sur place, sur les vitrines de l'entreprise.

Il a besoin que tu réalises la première étape du programme : prendre le nom de l'entreprise et le découper en mots, qu'il pourra ensuite imprimer.

Écris une fonction appelée `signWords(businessName)` (« mots de l'enseigne ») qui prend le nom de l'entreprise et renvoie un tableau des mots qui le composent. Par exemple, `signWords("Frank's Hotdogs")` doit renvoyer `["Frank's", "Hotdogs"]`.

Les mots sont séparés par des espaces. Mais attention à une chose... Il arrive que des clients envoient par accident un nom d'entreprise qui contient plusieurs espaces à la suite. Dans ce cas, il faut les ignorer : `"Frank's   Hotdogs"` doit donc quand même renvoyer `["Frank's", "Hotdogs"]`.

### Les méthodes `push` et `split`

La clé de cet exercice est d'utiliser la méthode `push` pour construire le tableau. Tu peux aussi utiliser la méthode `split`, mais tu trouveras peut-être plus simple de faire le découpage à la main. Aucune des deux approches n'est meilleure que l'autre. Si tu as besoin d'un rappel sur le fonctionnement de ces méthodes, regarde ci-dessous.

Amuse-toi bien !
