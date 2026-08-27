---
title: "Wordle: Megoldó"
description: "Készíts egy megoldót, ami egy teljes Wordle-játszmát magától végigjátszik."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

A legutóbbi Wordle-feladatban olyan játszmát dolgoztál fel, ahol a tippeket készen kaptad. Ezúttal a másik oldalon ülsz: te találod ki a tippeket.

A feladatod, hogy létrehozz egy új `solveWordle()` nevű függvényt, amiben addig tippelsz szavakra, amíg meg nem találod a helyes szót. A játszmát a lehető leghatékonyabban kell megoldanod (a lehető legkevesebb szóval).

Kapsz egy új `commonWords()` (gyakori szavak) függvényt, ami a játékban használható több mint 100 szóból álló láncot ad vissza. Ezeken a szavakon kell végigmenned. Mindig azzal kezdd, hogy kiolvasod a lánc első szavát, és azt tippeled meg. Utána haladj tovább: keresd meg a következő lehetséges érvényes szót, tippeld meg, és így tovább.

Kapsz egy `guess(word)` (tippelj meg egy szót) függvényt is, ami minden betűhöz egy `"correct"`, `"present"` vagy `"absent"` értéket tartalmazó láncot ad vissza.

A feladat kulcsa, hogy végiggondold, hogyan jegyezd meg a korábbi szavakat és a `guess` hívásának eredményeit, és ezt a tudást felhasználva folyamatosan megtaláld a győzelemhez vezető leghatékonyabb utat.

### Egy példa

1. Kiolvasod a lánc első szavát, ami `"which"`.
2. Meghívod a `guess("which")` függvényt, ami ezt adja vissza: `["correct", "present", "absent", "absent", "absent"]`.
3. Kiválasztod a gyakori szavak láncában a következő olyan szót, ami `"w"`-vel kezdődik, és a harmadik, negyedik vagy ötödik helyen `"h"` van.
4. Menj vissza a (2)-re...

Sok sikert és jó szórakozást!
