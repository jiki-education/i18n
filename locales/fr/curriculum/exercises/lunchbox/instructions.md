---
title: "La lunchbox"
description: "Range autant d'aliments que possible dans une boîte à repas dont la taille est limitée."
en_md5: 0b9c26e60261ec4da42ae367a9102359
---

Enfant, je préparais tous les jours ma boîte à repas pour l'école. Ma mère me sortait les aliments à emporter (soigneusement rangés du plus grand au plus petit) et j'essayais d'en faire tenir le plus possible dans la boîte, mais elle ne pouvait évidemment pas tout contenir. Tout ce qui ne rentrait pas, je devais le mettre dans mon sac à dos et le traîner avec moi toute la journée plutôt que de le laisser dans mon casier.

Dans cet exercice, ta mission est de créer un algorithme qui détermine ce que je peux ranger dans la boîte et ce que je dois mettre dans mon sac à dos.

Tu dois écrire une fonction appelée `packLunch(items, capacity)` qui prend deux entrées : le tableau des aliments (les plus grands d'abord), et la taille de la boîte à repas, `capacity` (un nombre).

Le tableau des aliments est un tableau imbriqué : chaque aliment est lui-même un tableau de deux éléments, le nom de l'aliment et sa taille. Les aliments vont toujours du plus grand au plus petit. Par exemple, le tableau des aliments pourrait être :

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

La boîte à repas a une capacité maximale. Tu dois déterminer quels aliments peuvent rentrer dans la boîte. Fais-y tenir autant d'aliments que possible. Tout le reste doit aller dans le sac à dos.

Ta fonction doit renvoyer un tableau qui contient deux éléments. Le premier est le tableau des aliments destinés à la boîte à repas, le second celui des aliments pour le sac à dos. Les deux tableaux doivent être rangés du plus petit au plus grand.

Par exemple, pour le tableau ci-dessus, avec une capacité de 20, voici ce qui est attendu :

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Des méthodes pour t'aider

Comme pour tous les exercices de cette section, tu voudras utiliser la méthode `.push(element)` pour construire tes tableaux.

Tu disposes aussi d'une nouvelle méthode, `[...].toReversed()`, qui crée une copie d'un tableau avec tous les éléments inversés. Par exemple :

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Tu n'es pas obligé de l'utiliser, mais elle pourrait t'être utile.

Amuse-toi bien !
