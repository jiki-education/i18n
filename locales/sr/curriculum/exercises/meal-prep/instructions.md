---
title: "Priprema obroka"
description: "Izračunaj koje sastojke treba da kupiš za svoj recept."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Ti si tip osobe koja voli da svakog dana svrati do prodavnice po sastojke koji su joj potrebni za večeru. To je lep izgovor da protegneš noge i popričaš s lokalnim prodavcem.

Svakog dana izabereš recept, zatim pogledaš šta imaš u frižideru i zapišeš šta treba da kupiš.

A sada odlučuješ da sebi malo olakšaš život i napišeš program koji će umesto tebe da obavi težak deo posla! On upoređuje ono što je na tvom spisku sa onim što je u frižideru i ispisuje razliku.

Tvoj zadatak je da napišeš funkciju pod imenom `shoppingList(fridgeContents, recipeItems)` (spisak za kupovinu). Ona uzima dva ulaza: sadržaj tvog frižidera kao niz stringova i sastojke iz recepta, takođe kao niz stringova. Kao rezultat treba da vrati ono što moraš da kupiš, kao niz stringova.

Na primer:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### Metoda `push`

Za rešavanje vežbe treba da gradiš svoj niz pomoću metode `.push(element)`. U svom kodu možeš da napraviš samo jedan novi niz. Pogledaj ponovo prethodni video ako ti nije jasno šta treba da radiš.

Možeš da iskoristiš i metodu `includes` (u nastavku je podsetnik).

Lepo se zabavi!
