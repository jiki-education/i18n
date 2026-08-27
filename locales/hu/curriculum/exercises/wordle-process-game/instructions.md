---
title: "Wordle: Dolgozz fel egy játékot"
description: "Dolgozz fel egy teljes Wordle-játékot, és színezd be a tippek sorait sorról sorra."
en_md5: 087a112241856ada8b0cfb4bc7da4798
---

Visszatértünk a Wordle-játékhoz, és most nem egyetlen tippet, hanem az egész játékot dolgozzuk fel!

Ha ezt a feladatot befejezed, feloldasz egy **prémium kihívást**. Ebben létrehozol egy botot, ami valóban lejátssza az egész játékot az elejétől a végéig, te pedig közben a saját tippjeidet találod ki. Ez eddig messze a legösszetettebb kihívás!

### Ez a feladat

Egyelőre hozz létre egy `processGame(target, guesses)` (dolgozd fel a játékot) nevű függvényt, ami két bemenetet kap: a titkos célszót és a játékos eddigi tippjeit tartalmazó tömböt.

Számold ki minden sor állapotát, majd hívd meg a `colorRow(row, states)` (színezd be a sort) függvényt a sor számával (`1-6`) és egy állapotokat tartalmazó tömbbel, minden betűhöz egy állapottal.

Például ha ezt hívnánk meg: `processGame("crane", ["spoil", "trace", "crane"])`, akkor azt várnánk, hogy a kódod háromszor használja a `colorRow` függvényt:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

Az előző feladatból származó kódodat már betettük a szerkesztőbe kiindulópontként. Gondold át, hogyan tehetnéd a meglévő kódodat **általánosabbá**, hogy ez működjön. Sok sikert!

### Bónusz: egy új szabály

Van egy Wordle-szabály, amit eddig kihagytunk...

Ha egy betű kétszer szerepel a tippedben, de a célszóban csak egyszer:

- Ha az egyikük jó helyen van, az zöld lesz, a másik pedig szürke.
- Ha mindkettő rossz helyen van, az első sárga lesz, a második pedig szürke.

Ugyanez az elv nagyobb számokra is érvényes: ha a tippedben három, a szóban pedig két ilyen betű van, akkor kettő színt kap, a harmadik pedig szürke lesz.

Futtasd le a második bónusz forgatókönyvet, és nézd meg a `"SWISS"` sort. A célszó: `"swims"`, amiben két `"s"` betű van, és mindkettő már zöld: az egyik a szó elején, a másik a végén. A kódod azonban a negyedik négyzetet is sárgára színezi. Ez azt mondja a játékosnak, hogy van még egy `"s"`, amit meg kell találnia. De nincs. A negyedik négyzetnek szürkének kellene lennie.

Az első bónusz forgatókönyvnél csak részben kell megoldanod a problémát (tehát ott kezdd!), a másodiknál viszont teljesen meg kell oldanod.

Ez a feladat kihívás! **Ne feledd, hogy ez bónusz, nem kell megoldanod!**
