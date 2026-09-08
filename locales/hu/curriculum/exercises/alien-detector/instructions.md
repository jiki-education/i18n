---
title: "Űrlény-detektor"
description: "Mozgasd a lézeredet jobbra-balra, és lődd le az űrlényeket."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

Az előző Space Invaders feladatban a lézeredet jobbra-balra mozgattad, hogy lelődd az összes űrlényt. Ezt nagyrészt az `isAlienAbove()` (van-e fölötted űrlény) függvény tette lehetővé. Ebben a feladatban kivettük, de az összes űrlényt így is le kell lőnöd!

Kiindulásként egy üres vásznat kaptál. Nyugodtan indulj ki az <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">előző Space Invaders feladatban</a> írt kódodból.

Ez a feladat kihívásnak készült! Haladj lassan.

### A feladatod

Lődd le az összes űrlényt. Ahelyett, hogy megkérdezhetnéd a feladattól, van-e fölötted űrlény, neked kell nyilvántartanod a már lelőtt és a még meglévő űrlényeket.

### Ismerd meg a `getStartingAliensInRow(idx)` (lekéri a kezdő űrlényeket a megadott sorból) függvényt

Van egy új függvényed, a `getStartingAliensInRow(idx)`. Egy bemenete van: a sor indexe, alulról számolva. Legfeljebb három sor van, ezért a bemeneti érték `0`, `1` vagy `2` lehet.

A függvény egy 11 Boolean-értékből álló listát ad vissza. Minden Boolean-érték azt jelzi, hogy az adott helyen van-e űrlény a feladat **kezdetén**. A `[true, false, false, ...]` tehát azt jelenti, hogy mielőtt bármit tennél, az első helyen van egy űrlény, a következő kettőn viszont nincs (és így tovább).

Ez a függvény csak az űrlények **kezdeti** pozícióit adja vissza. Nem frissül, miközben lelövöd őket!

### Megjegyzések

- Amikor balra vagy jobbra mozdulsz, egy pozíciót lépsz előre vagy hátra. Ez a pozíció azoknak a helyeknek felel meg, ahol az űrlények lehetnek.
- Az űrlények ebben a feladatban nem jelennek meg újra.
