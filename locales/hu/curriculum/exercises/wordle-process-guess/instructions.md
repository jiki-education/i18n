---
title: "Wordle: Tipp feldolgozása"
description: "Ellenőrizd a Wordle-tippet, és állapítsd meg, mely betűk vannak jó helyen."
en_md5: 2db4a680ca0788813ac1c48445bfca73
---

Üdvözlünk a Wordle-játékban, ami a Covid-19 miatti lezárások alatt hódította meg a világot!

A játék így működik:

- Van egy titkos szó, amit a játékos próbál kitalálni.
- A játékosnak 6 tippje van arra, hogy eltalálja.
- Minden tipphez 5 doboz tartozik, betűnként egy:
  - Ha egy betű a jó helyen van, a doboz zöldre vált.
  - Ha egy betű benne van a titkos szóban, de rossz helyen, a doboz sárgára vált.
  - Ha egy betű nincs benne a titkos szóban, a doboz szürkére vált.

Néhány feladatban majd megvalósítod az egész Wordle-játékot, de **ebben a feladatban** egyelőre csak az első sort kell működésre bírnod.

Ehhez létre kell hoznod egy `processGuess(target, guess)` (tipp feldolgozása) nevű függvényt. A függvénynek meg kell állapítania a tippben lévő minden betű állapotát, majd meg kell hívnia a `colorRow(1, states)` (sor kiszínezése) függvényt az egyes betűk állapotát tartalmazó tömbbel: `"correct"`, `"present"` vagy `"absent"`.

Például a `processGuess("Hello", "Holes")` esetében a `colorRow` függvényt ezzel kell meghívni:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Mielőtt továbblépnél, győződj meg arról, hogy érted ezt!

### Metódusok

Ahogy az előző néhány feladatban is, az állapotok tömbjét a `push` metódussal építheted fel, amely egy elemet ad a tömb végéhez. Például a `states.push("correct")` a `"correct"` értéket a `states` tömb végéhez adja.

Ha azt szeretnéd ellenőrizni, hogy egy string tartalmaz-e egy másik stringet, az `includes` metódust is használhatod.

Sok sikert!
