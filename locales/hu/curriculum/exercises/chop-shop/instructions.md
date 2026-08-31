---
title: "The Chop Shop"
description: "Számold ki, hogy a fodrásznak van-e ideje még egy vendégre."
en_md5: c68a8a4856c5249baa901c170035ea78
---

Egy kis fodrászszalont vezetsz, ahol a gyorsaság fontosabb, mint a minőség. A vendégek talán kissé egyenetlen frizurával távoznak, cserébe nem kell túl sokáig a székben ülniük.

Néhány különböző szolgáltatást kínálsz, a hajformázástól a teljes hajvágásig, és ezek különböző ideig tartanak. A vendégeket érkezési sorrendben szolgálod ki, időpontfoglalás nincs.

Ahogy közeledik a nap vége, tudnod kell, hogy van-e még időd azokra az új vendégekre, akik betérnek a szalonba.

Írj egy `canFitIn` (befér-e) nevű függvényt, amely három bemenetet kap:

- Az első: a már sorban álló hajvágások (stringekből álló lánc).
- A második: a hajvágás, amelyet az új vendég szeretne (string).
- A harmadik: a napból hátralévő percek száma (szám).

Adj vissza egy boolean értéket arról, hogy befér-e a vendég.

Az alábbi stílusokat kínálod:

- Mohawk: 20 perc
- Slicked-Back Pixie: 15 perc
- Bob: 25 perc
- Shave and Polish: 15 perc
- Afro Trim: 45 perc
- Up-do: 30 perc

### Egymásba ágyazott láncok

Ez az első feladat, ahol olyan lánccal dolgozol, amely elemként más láncokat tartalmaz. Ezeket egymásba ágyazott láncoknak hívjuk. Az egymásba ágyazott láncok ugyanolyanok, mint bármelyik másik lánc, csak nem stringeket vagy számokat tartalmaznak, hanem más láncokat.

Nézd meg a `cuts` (vágások) láncot. Ez más láncokat tartalmaz, minden hajvágáshoz egyet, és ezek mindegyikének két eleme van: egy név és egy időtartam.

Ezt a legkönnyebb úgy elképzelni, hogy először a belső láncokra, a név-időtartam párokra gondolsz, majd arra, hogy ezek együtt egy másik láncban vannak.

Az indexelés ugyanúgy működik, mint mindenhol máshol, de az indexeket egymás után is írhatod, például így...

```javascript
let cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
