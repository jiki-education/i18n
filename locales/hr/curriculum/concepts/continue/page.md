---
title: "Ključna riječ `continue`"
description: "Kako pomoću ključne riječi `continue` unutar petlje preskočiti ostatak iteracije i prijeći ravno na sljedeću."
en_md5: 6cd21a2f25c493f61d000f865014709d
---

Ponekad želimo preskočiti pojedinu iteraciju petlje, umjesto da prekinemo cijelu petlju. Zamisli da nešto želimo raditi samo za neparne brojeve.

Želimo moći reći: ako je `i` (brojač) neparan, ovaj put ne izvršavaj petlju.

Ali ne želimo potpuno izaći iz petlje. Želimo samo preskočiti tu jednu iteraciju i pogledati sljedeću.

A za to imamo još jednu ključnu riječ koja se zove `continue`.

Kad Jiki vidi `continue`, jednostavno skoči natrag na početak petlje i krene u sljedeću iteraciju. Tako u for-of petlji, kad vidi `continue`, prelazi na sljedeći element u polju.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Preskače ostatak petlje za "something"
  }
  // Ostatak petlje...
}
```

U for petlji skoči na uvećavanje `i++` i zatim započne sljedeću iteraciju.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Preskače ostatak petlje za parne brojeve
  }
  // Ostatak petlje...
}
```
