---
title: "Kutija za užinu"
description: "Spakuj što više predmeta u kutiju za užinu ograničene veličine."
en_md5: 0b9c26e60261ec4da42ae367a9102359
---

Kao klinac, svakog dana sam za školu pakovao kutiju za užinu. Mama bi mi ostavila predmete (uredno poređane od najvećeg do najmanjeg), a ja bih se trudio da u kutiju spakujem što više. Ali je, očigledno, mogla da primi samo toliko. Sve što nije stajalo unutra morao sam da stavim u ranac i da to nosim sa sobom ceo dan, umesto da ostavim u ormariću.

U ovoj vežbi tvoj zadatak je da napraviš algoritam koji određuje šta mogu da spakujem u kutiju za užinu, a šta moram da stavim u ranac.

Tvoj zadatak je da napišeš funkciju `packLunch(items, capacity)` (spakuj užinu) koja prima dva ulaza: niz predmeta (od najvećeg ka najmanjem) i `capacity` (kapacitet) kutije za užinu, a to je broj.

Niz predmeta je ugnežden niz: svaki predmet je i sam niz sa dva elementa, naziv predmeta i njegova veličina. Predmeti su uvek poređani od najvećeg do najmanjeg. Na primer, niz predmeta može da izgleda ovako:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Kutija za užinu ima maksimalni kapacitet. Treba da odrediš koji predmeti mogu da stanu u kutiju. Spakuj u kutiju što više predmeta. Sve ostalo treba da ide u ranac.

Tvoja funkcija treba da vrati niz sa dva elementa. Prvi element je niz predmeta za kutiju za užinu, a drugi su predmeti za ranac. Oba niza treba da budu poređana od najmanjeg do najvećeg.

Na primer, za niz iznad, sa kapacitetom 20, trebalo bi da vratiš:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Metode koje ti pomažu

Kao i u svim vežbama u ovom odeljku, koristićeš metodu `.push(element)` da sastaviš svoje nizove.

Imaš i novu metodu `[...].toReversed()`, koja pravi kopiju niza u kojoj su svi elementi obrnuti. Na primer:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Ne moraš da je koristiš, ali može da ti bude korisna.

Zabavi se!
