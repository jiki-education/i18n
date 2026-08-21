---
title: "Alfanumerikus"
description: "Készíts függvényeket, amelyek aszerint osztályozzák a szöveget, hogy betűkből, számokból vagy mindkettőből áll-e."
en_md5: f199432f63304f1d03c4ce1512c8a349
---

Ebben a feladatban olyan függvényeket kell készítened, amelyek ellenőrzik, hogy egy string betűket és/vagy számokat tartalmaz-e.

Három segédfüggvényt kell írnod:

- `` `isAlpha(string)` `` (csak betűkből áll-e): azt állapítja meg, hogy egy string kizárólag ASCII-betűkből áll-e (pl. „A”, „a”, „Hello”).
- `` `isNumeric(string)` `` (csak számjegyekből áll-e): azt állapítja meg, hogy egy string kizárólag számjegyekből áll-e (pl. „0”, „1”, „456”).
- `` `isAlphanumeric(string)` `` (csak betűkből vagy számokból áll-e): azt állapítja meg, hogy egy string kizárólag ASCII-betűkből vagy számokból áll-e (pl. „Hello”, „42”, „Hello42”).

Bármely más szimbólum (pl. „! ?”) vagy nem ASCII-karakter (pl. „じき”, „正直”) esetén mindhárom függvénynek hamis értéket kell visszaadnia.

Ezután írj egy `` `whatAmI(string)` `` (mi vagyok én) függvényt, amely ezekkel a segédfüggvényekkel osztályozza a stringet:

- A csak betűkből álló stringek esetén az eredmény `"Alpha"` legyen.
- A csak számokból álló stringek esetén az eredmény `"Numeric"` legyen.
- A betűket és számokat is tartalmazó stringek esetén az eredmény `"Alphanumeric"` legyen.
- Minden más esetben az eredmény `"Unknown"` legyen.

### Használd, amit most tanultál

Bár ennek a feladatnak sok helyes megoldása van, az elvárt megoldás egy `continue` utasítást és a fenti három függvényt használ.

Van egy bónuszfeladat is, amely arra ösztönöz, hogy az egészet legfeljebb 42 sornyi kódban oldd meg. Ez a cél nem feltétlenül a leginkább kiforrott megoldást jelenti. Néhány plusz sor valószínűleg szebb megoldást ad, és rövidebb megoldások is vannak. De jó cél arra, hogy feszegesd a képességeid határait.

Jó szórakozást!
