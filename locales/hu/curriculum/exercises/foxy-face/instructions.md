---
title: "Rókafej"
description: "Építs egy geometrikus rókafejet színes háromszögekből."
en_md5: ace60854184185ffc1ec1e82e45af4bf
---

Ez a feladat bemutatja a `triangle` (háromszög) függvényt. A függvény hét bemenettel működik. Az első hat bemenet a három csúcs koordináta-párjait adja meg, az utolsó pedig a `color`:

- `x1` (az első csúcs x koordinátája), `y1` (az első csúcs y koordinátája): Az első csúcspont
- `x2` (a második csúcs x koordinátája), `y2` (a második csúcs y koordinátája): A második csúcspont
- `x3` (a harmadik csúcs x koordinátája), `y3` (a harmadik csúcs y koordinátája): A harmadik csúcspont
- `color` (szín): A háromszög színe (pl. `"orange"`)

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="A háromszög függvény diagramja" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Egy rókafej rajzolása

A feladatod, hogy háromszögekből felépíts egy geometrikus rókafejet:

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="Rókafej" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Az arc vízszintesen szimmetrikus (a bal oldala megegyezik a jobb oldalával), és összesen 8 háromszögből áll:

- Két `"white"` pofa
- Két `"brown"` fül
- Két `"orange"` arcfél
- Egy `"charcoal"` orr (két háromszög)

(Győződj meg róla, hogy ezeket a színeket használod a háromszögek rajzolásakor, és ne feledd, hogy karakterláncként (_strings_ angolul) írod őket!)

### A helyes koordináták kidolgozása

Néhány rész körvonalát előre megrajzoltuk neked, hogy könnyebb legyen az indulás. Ha **a megjegyzésekben megadott sorrendet követed**, látni fogod, hogy egy kicsit megkönnyíti a dolgodat.

A korábbi feladatokhoz hasonlóan **vidd az egérmutatót a rajzterület fölé**, hogy megtaláld a koordinátákat, és **az összes használt szám osztható 5-tel** (például az `5`, `10`, `15` stb. érvényesek).

Sok sikert!
