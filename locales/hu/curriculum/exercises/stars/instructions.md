---
title: "Csillagok"
description: "Építsd meg és rajzold ki a csillagokból álló piramist."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

Ebben a feladatban egy olyan vizuális mintagenerátort fogsz készíteni, ami csillagsorokat rajzol ki.

A feladatod, hogy létrehozz egy `layoutStars` (rendezd el a csillagokat) nevű függvényt. Ez a függvény egy bemenetet kap, a `numRows` értéket, ami megadja, hány sorra van szükség, majd kirajzolja a csillagsorokat.

A függvénynek a következőket kell tennie:

1. Építs fel egy stringekből álló tömböt, soronként egy stringgel. Kezdd alulról, először a leghosszabb sorral. Ha például a `numRows` értéke `3`, akkor a tömb ez lesz: `["***", "**", "*"]`.
2. Használd a `drawStars(rows)` függvényt, és add át neki a soraidat. Ez a függvény rajzolja ki a csillagokat.

Ha a `numRows` értéke `0`, a tömb üres legyen (`[]`), és ne rajzolódjon ki semmi.

Ha meg szeretnéd nézni, ahogy a csillagok kirajzolódnak, lefuttathatod a `drawStars(["***", "**", "*"])` kódot.

### A push metódus

Ahogy az előző feladatban is, a tömböt a `.push(element)` metódussal kell felépítened. Ebben a feladatban csak egy új tömböt hozhatsz létre (`let something = []`) a kódodban.

Jó szórakozást!
