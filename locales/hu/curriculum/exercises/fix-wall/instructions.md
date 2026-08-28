---
title: "Javítsd meg a falat"
description: "Töltsd ki a repedéseket a törött falon téglalapokkal."
en_md5: d3801d3e7afec83435698bb052cf876e
---

Üdvözlünk az első rajzos feladatodban. Ebben a feladatban téglalapokat fogsz rajzolni a `rectangle` (téglalap) függvény (_function_ angolul) segítségével.

Ahhoz, hogy téglalapot rajzoljunk, ismernünk kell a felső és bal pozíciót, valamint a téglalap szélességét és magasságát. Amikor a `rectangle` függvényt használjuk, ezeket bemenetként (_inputs_ angolul) adhatjuk meg:

- `left` (bal): A téglalap bal széle
- `top` (felső): A téglalap felső széle
- `width` (szélesség): A téglalap szélessége
- `height` (magasság): A téglalap magassága

<img src="/static/images/exercise-assets/fix-wall/intro-rectangle.webp" alt="Javítsd meg a falat" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

A vászon mindig 100 széles és 100 magas. Tehát a vászon bal felső sarka `0,0`, a jobb alsó sarka pedig `100,100`.

### A fal kijavítása

A feladatod, hogy három téglalappal kitöltsd a lyukakat a falon.

### A helyes koordináták kiszámítása

**Ha a rajzfelület fölé viszed az egeret**, láthatod a koordinátákat.

Hogy megkönnyítsük a dolgodat, **minden használt szám osztható 10-zel** (például a `10`, `20`, `30` stb. érvényesek, de az `5`, `12`, `25` stb. nem).
