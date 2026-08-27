---
title: "Étkezés előkészítése"
description: "Derítsd ki, mely hozzávalókat kell megvenned a receptedhez."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Olyan ember vagy, aki szeret mindennap beugrani a boltba, hogy megvegye, ami éppen kell a vacsorához. Ez jó ürügy arra, hogy megmozgasd magad, és elbeszélgess a helyi boltossal.

Minden nap kiválasztasz egy receptet, megnézed, mi van a hűtőben, és feljegyzed, mit kell megvenned.

Most úgy döntöttél, hogy kicsit megkönnyíted az életed, és írsz egy programot, ami elvégzi helyetted a nehéz munkát! A program összeveti azt, ami a listádon van, azzal, ami a hűtőben van, és kiadja a különbséget.

A te dolgod, hogy írj egy `shoppingList(fridgeContents, recipeItems)` nevű függvényt (bevásárlólista). Két bemenetet kap: a hűtőd tartalmát stringek tömbjeként, és a recept elemeit, szintén stringek tömbjeként. Azokat kell visszaadnia, amiket meg kell venned, stringek tömbjeként.

Például:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### A push metódus

A feladat megoldásához a `.push(element)` metódussal kell felépítened a tömbödet. A kódodban csak egy új tömböt hozhatsz létre. Ha nem vagy biztos benne, mit kell tenned, nézd meg újra az előző videót.

Használhatod még az `includes` metódust is (lentebb találsz róla emlékeztetőt).

Jó szórakozást!
