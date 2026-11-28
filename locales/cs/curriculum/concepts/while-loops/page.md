---
title: "Jak fungují cykly `while`"
description: "Cyklus, který běží tak dlouho, dokud platí nějaká podmínka."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

Další cyklus, se kterým se seznámíme, je `while` (dokud).

Ten říká: „Dokud platí nějaká podmínka, opakuj cyklus.“ Můžeme mít třeba pravidlo, že v Space Invaders můžeš vystřelit jen pětkrát. Pak bychom tady měli cyklus, který říká: no, dokud je počet výstřelů menší než pět, opakuj cyklus, ve kterém si hráč může hrát.

```javascript
while (numShots < 5) {
  // vystřel na mimozemšťana
  numShots++
}
```

Pokaždé, když někdo vystřelí, zvýšíme `numShots` o jedna, až se nakonec dostaneme na pět a cyklus skončí.

Jedna z potíží s cykly `while` je, že je docela snadné mít v kódu chybu, kvůli které cyklus nikdy neskončí. Říká se jim nekonečné cykly (anglicky _infinite loop_) a patří k nejčastějším chybám v programech.

Když se počítač zpomalí, roztočí se ventilátory, všechno začne hučet, často je to proto, že někdo nechal v kódu nekonečný cyklus, který nikdy neskončí.
