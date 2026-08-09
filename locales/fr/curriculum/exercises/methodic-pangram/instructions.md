---
title: "Pangramme méthodique"
description: "Mets à jour ton pangramme pour utiliser les méthodes intégrées des strings."
en_md5: 61b73caa0318f68e9a0facca189e7abf
---

Bienvenue dans le troisième exercice sur les pangrammes, où l'on va reprendre toutes ces fonctions auxiliaires que tu as écrites et simplifier énormément les choses !

Chacune des fonctions que je t'ai encouragé à écrire (`includes`, `indexOf` et `toLowerCase`) est en réalité intégrée aux strings sous forme de méthode.

Ainsi, au lieu d'écrire `includes("Jeremy", "r")`, tu peux écrire `"Jeremy".includes("r")`, et cela fait exactement la même chose. Et comme cette méthode est intégrée à la string, tu n'as pas besoin de l'écrire toi-même !

Pour cet exercice, tu n'as besoin que de deux d'entre elles :

- `"Jeremy".toLowerCase()`
- `"Jeremy".includes("r")`

Tu n'auras plus du tout besoin de `indexOf` : tu ne l'avais écrite que pour t'aider à construire `toLowerCase`, et maintenant la méthode intégrée `toLowerCase` fait ce travail pour toi.

Tu peux donc supprimer toutes ces fonctions que tu as écrites (mais au moins, tu sais maintenant comment ces méthodes fonctionnent vraiment sous le capot, alors ne m'en veux pas trop !) et utiliser celles-ci à la place.

Amuse-toi bien !
