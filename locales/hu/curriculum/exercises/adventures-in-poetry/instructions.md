---
title: "Kalandok a költészetben"
description: "Sétálj végig egy úton, gyűjtsd össze egy vers szavait, és hagyj figyelmen kívül mindent, ami nem szó."
en_md5: 9163e96662902baf726f464c9b58785f
---

Egy „Kalandok a költészetben” nevű robotos költészeti játékot készítesz. Első lépésként úgy kell beprogramoznod a robotot, hogy miközben sétál, szavakat gyűjtsön, a végén pedig elszavalja a verset.

Minden mező a következő négy dolog egyikét tartalmazza:

1. Semmi (`""`)
2. Egy **szó** a versből.
3. Díszlet, például egy levél vagy egy pillangó (egy emoji).
4. Egy kockás zászló, ami megállásra utasítja a robotot.

Segítségül néhány függvény áll rendelkezésedre. Először is itt van a `move()` függvény, amely arra utasítja a költői robotot, hogy lépjen előre a következő mezőre, és visszaadja, ami rajta volt. Van egy `isEmoji(thing)` függvény is, amely egy logikai értéket ad vissza arról, hogy a neki átadott string emoji-e. És végül itt van a `recite(poem)` függvény, amelyet a kész verssel kell meghívnod.

A te feladatod, hogy végigmenj az úton, összeállítsd a verset, majd elszavald.

## A szabályok

- A **szavak** kerülnek a versbe, mindegyik közé **szóköz** kerül.
- A **díszlet** nem része a versnek, és figyelmen kívül kell hagyni.
- Az **aposztróf** saját mezőn áll, és összekapcsolja a két oldalán lévő szavakat. A `heart`, majd `'`, majd `s` így lesz `heart's`.
- A **vessző** is saját mezőn áll. Az előtte lévő szóhoz tapad, de utána továbbra is szóköz van.
- A költő megáll, amikor eléri a **kockás zászlót**, vagy amint összegyűjtött **hét szót**. Amelyik előbb megtörténik.
- Bármikor is áll meg a költő, és bárhogyan is állt meg, elszavalja, amit addig összegyűjtött. A `recite()` függvényt csak **egyszer** hívhatod meg.

## Megszorítások

Sokféleképpen meg lehet oldani ezt a feladatot, de szeretnénk, ha a nemrég tanult `continue` és `break` kulcsszavakat használnád, ezért van néhány szabály:

1. A megoldásodnak mind a `continue`-t, mind a `break`-et használnia kell.
2. A megoldásodban tilos a `&&` és a `!` használata.
3. Nem írhatsz segédfüggvényeket.
4. Csak két szintű behúzás megengedett:

```javascript

// Megengedett - 2 szintű behúzás
repeat() {
  if(...) {
    //...
  }
}

// Nem megengedett - 3 szintű behúzás
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Ez azt jelenti, hogy a megoldás, amit majd kitalálsz, elég „lapos” lesz.

Sok szerencsét és jó szórakozást!
