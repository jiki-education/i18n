---
title: "Dîner de gala"
description: "Retrouve la table d'un invité à partir du plan de table."
en_md5: 96fcee7c5e2237298b1a8e288278cf04
---

On reprend notre petit boulot de videur. On est le lendemain de l'after, et il y a encore une sauterie. Cette fois, c'est un dîner de gala : ce soir, tu es moins « costaud posté devant la porte » et plus « personne au porte-bloc et au joli gilet ».

Ici, pas question de se présenter avec **seulement** son prénom. En fait, pas question de prénom du tout. Tout le monde se présente par son titre de civilité (_honorific_ en anglais), comme Miss, Mr ou Dr, suivi de son nom de famille.

Les organisateurs t'ont remis le plan de table sous forme de deux tableaux séparés. Le premier contient les noms complets des invités. Le second contient le nom de la table à laquelle chaque invité est assis (des tables baptisées d'après des arbres et des fleurs). Comme dans « L'after », les deux tableaux sont alignés : l'invité en position 3 du premier tableau est assis à la table en position 3 du second.

Alors quand Mr Pitt fait son entrée, à toi de comprendre qu'il s'agit du « Brad Pitt » de ta liste, puis de lui indiquer sa table.

Écris une fonction appelée `tableFor` (« la table de », elle cherche la table à laquelle un invité est assis). La fonction a trois entrées :

- La première est le tableau des noms complets des invités, sous forme de _strings_
- La deuxième est le tableau des noms de tables, dans le même ordre que les invités
- La troisième est l'invité qui arrive, sous la forme d'un titre de civilité suivi de son nom de famille (par exemple « Mr Pitt »)

Renvoie le nom de la table à laquelle l'invité est assis. S'il ne figure pas du tout sur le plan de table, renvoie à la place la _string_ `"No table found"` (aucune table trouvée), exactement comme elle est écrite (pas de resquilleurs ici !).

Le titre de civilité tient toujours en un seul mot, et tout ce qui suit est le nom de famille de l'invité. La plupart des noms de famille tiennent en un seul mot, mais quelques noms prestigieux en comptent deux.

Attention, cependant : de nombreux noms de famille se ressemblent beaucoup.

### Méthodes et propriétés des _strings_ et des tableaux

En plus de la propriété `.length` que tu as découverte dans l'exercice précédent, quatre méthodes peuvent t'être utiles. Il existe de nombreuses façons de résoudre cet exercice, mais celles-ci te mèneront à la solution la plus courte possible.

`"...".split(substring)` découpe une _string_ à l'aide d'une autre _string_. Par exemple :

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` capture une partie d'un tableau, en partant de l'indice `start` et en continuant jusqu'à la fin du tableau. Les éléments capturés sont copiés dans un NOUVEAU tableau, qui t'est renvoyé. En pratique, cela revient à laisser tomber les `start` premiers éléments. Par exemple :

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` assemble les éléments d'un tableau en les reliant par la _string_ fournie. Par exemple :

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` t'indique si une _string_ se termine par une autre _string_. Par exemple :

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
