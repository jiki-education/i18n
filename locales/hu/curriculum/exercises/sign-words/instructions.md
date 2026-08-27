---
title: "Cégtáblaszavak"
description: "Bontsd a cégnevet a kinyomtatandó szavakra."
en_md5: b2d0a5c31cfbb7036c1a860f59498ff8
---

Egy ideje már írtál egy programot, hogy egy ügyfél cégtáblakészítő vállalkozását segítsd. Most ismét megkerestek egy új követelménnyel. Most már nagyobb táblákat készítenek: minden szót előre kinyomtatnak, majd a helyszínen a cég kirakatára rakják össze őket.

Arra kérnek, hogy készítsd el nekik a program első lépését: vedd a cégnevet, és bontsd szavakra, amelyeket ki tudnak nyomtatni.

Írj egy `signWords(businessName)` (bontsd szavakra) nevű függvényt, amely a cégnevet kapja, és visszaadja a benne lévő szavak láncát. Például a `signWords("Frank's Hotdogs")` hívás a `["Frank's", "Hotdogs"]` láncot adja vissza.

A szavakat szóközök választják el egymástól. De van egy dolog, amire érdemes figyelni... Néha az ügyfelek véletlenül több egymást követő szóközzel küldik el a cégnevüket. Ha ez megtörténik, figyelmen kívül kell hagynod őket, így a `"Frank's   Hotdogs"` bemenet esetén is a `["Frank's", "Hotdogs"]` láncot kell visszaadnia.

### Push és Split

A feladat kulcsa, hogy a láncot a `push` metódussal építsd fel. A `split` metódust is használhatod, de lehet, hogy egyszerűbbnek találod, ha kézzel végzed el a szétválasztást. Nincs jó vagy rossz megoldás. Ha emlékeztetőre van szükséged a metódusok működéséről, nézd meg alább.
