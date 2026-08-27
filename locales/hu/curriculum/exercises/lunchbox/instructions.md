---
title: "Uzsonnásdoboz"
description: "Csomagolj be minél több elemet a korlátozott méretű uzsonnásdobozba."
en_md5: af9957974ff71f16820079737f887b0e
---

Gyerekkoromban minden nap bepakoltam az uzsonnásdobozomat az iskolába. Édesanyám kikészítette nekem az elemeket (szépen elrendezve a legnagyobbtól a legkisebbig), én pedig megpróbáltam minél többet bepakolni az uzsonnásdobozba. A doboz persze csak korlátozott mennyiséget tudott befogadni. Ami nem fért bele, azt a hátizsákomba kellett tennem, és egész nap magammal cipelnem, ahelyett hogy a szekrényemben hagytam volna.

Ebben a feladatban az a dolgod, hogy olyan algoritmust készíts, amely kiszámolja, mi fér be az uzsonnásdobozba, és mit kell a hátizsákba tennem.

A feladatod, hogy írj egy `packLunch(items, capacity)` (csomagold be az uzsonnát) nevű függvényt, amely két bemenetet kap: az elemek tömbjét (a legnagyobb az első), és az uzsonnásdoboz méretét, a `capacity` (befogadóképesség) nevű számot.

Az elemek tömbje egymásba ágyazott tömb, vagyis minden elem maga is egy kételemű tömb, amely az elem nevét és a méretét tartalmazza. Az elemek mindig a legnagyobbtól a legkisebbig vannak rendezve. Az elemek tömbje például így nézhet ki:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Az uzsonnásdoboznak van egy maximális befogadóképessége. Azt kell kiszámolnod, hogy mely elemek férnek be az uzsonnásdobozba. Pakolj be a lehető legtöbb elemet. Minden más a hátizsákba kerüljön.

A függvénynek egy kételemű tömböt kell visszaadnia. Az első elem az uzsonnásdobozba kerülő elemek tömbje, a második pedig a hátizsákba kerülő elemeké. Mindkét tömböt a legkisebbtől a legnagyobbig kell rendezni.

A fenti tömbbel és 20-as befogadóképességgel például ezt kellene visszaadnod:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Segítő metódusok

Ahogy ebben a szakaszban az összes feladatnál, a tömbjeid felépítéséhez érdemes a `.push(element)` metódust használnod.

Van egy új metódusod is, a `[...].toReversed()`, amely a tömb másolatát készíti el úgy, hogy minden elem fordított sorrendben szerepel. Például:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Nem kötelező használnod, de jól jöhet.

Jó szórakozást!
