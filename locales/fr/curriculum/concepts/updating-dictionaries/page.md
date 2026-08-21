---
title: "Modifier les dictionnaires"
description: "Utiliser `dict[key] = value` pour mettre à jour des entrées existantes ou en ajouter de nouvelles, et la méthode `has` pour vérifier la présence d'une clé."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Tu sais maintenant créer un dictionnaire et en récupérer des valeurs. Mais que se passe-t-il si les données changent ? À un moment, je vais vieillir. Je ne vais plus avoir `42` ans, j'en aurai `43`.

Comment mettre à jour le dictionnaire ? Eh bien, on s'y prend d'une façon très proche de celle qui sert à retrouver quelque chose. Tu sais qu'on retrouve une valeur en utilisant des crochets (`[]`). Eh bien, on peut aussi utiliser des crochets suivis d'un signe égal pour mettre à jour le dictionnaire. Jiki va à la boîte `person`, sort la page du carnet, trouve la clé `"age"`, gomme le `42` qui s'y trouvait et écrit `43` à la place, puis la page du carnet retourne dans la boîte. C'est le dictionnaire lui-même qui est modifié.

```javascript
person["age"] = 43
```

Jiki ne crée pas un nouveau dictionnaire, il modifie le carnet qui était déjà dans la boîte.

Et si tu veux ajouter une information qui n'existait pas encore ? Eh bien, tu peux faire exactement la même chose.

Si tu indiques une clé qui n'existe pas, Jiki va juste rajouter une nouvelle clé tout à la fin avec cette valeur-là.

Donc dans ce cas, il va ouvrir le carnet, chercher `"country"`, voir qu'elle n'y est pas, puis ajouter une nouvelle ligne à la fin : `"country"` à gauche, `"England"` à droite.

```javascript
person["country"] = "England"
```

C'est donc exactement la même syntaxe que pour modifier une valeur. Jiki gère les deux automatiquement. Si la clé existe, il la met à jour. Si elle n'existe pas, il l'ajoute. Tu n'as rien de spécial à faire.

Et tout comme tu peux partir d'un tableau vide et y ajouter des éléments un à un, tu peux partir d'un dictionnaire vide et y ajouter des clés une par une. Là encore, c'est un schéma très courant, que tu verras tout le temps.

Un usage courant des dictionnaires consiste à compter des choses. Tu peux utiliser les clés pour les choses que tu veux compter, et les valeurs pour leur nombre. Imagine que tu observes les oiseaux et que tu veuilles noter combien d'oiseaux de chaque espèce tu as vus. La première fois que tu vois un oiseau, tu mets son compte à un, puis chaque fois que tu le revois, tu récupères sa valeur actuelle et tu l'augmentes de un. Pour que ce schéma fonctionne, on a besoin d'un moyen de vérifier si le dictionnaire possède déjà cette clé, auquel cas on ajoutera un à son compte, ou s'il ne la possède pas encore, auquel cas on démarrera le compte à un.

Et pour ça, les dictionnaires ont une méthode : la méthode `has` (possède).

Tu indiques la clé qui t'intéresse, et Jiki vérifie si le dictionnaire possède cette clé ou non, puis renvoie vrai ou faux selon le cas.

```javascript
person.has("age") // true
```

En assemblant tout ça, le schéma de comptage ressemble à ceci :

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
