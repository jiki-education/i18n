---
title: "Klíčové slovo `break`"
description: "Použití klíčového slova `break` v těle cyklu k okamžitému ukončení cyklu a přechodu ke kódu, který za ním následuje."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Klíčové slovo `break` můžeš použít kdekoli v těle jakéhokoli cyklu.

Část mezi složenými závorkami, to je tělo cyklu. A když ho tam Jiki uvidí, okamžitě z cyklu vyskočí a přejde na kód, který je pod cyklem.

Takže když máme zadání, podle kterého se má cyklus spustit padesátkrát, ale chceme skončit, když uživatel vystřelí pětkrát, můžeme nahoře mít cyklus `for`, který počítá až k padesáti.

Uprostřed cyklu ale pak můžeme mít podmínku, která ověří, jestli uživatel už vystřelil pětkrát. Pokud ano, použijeme `break` a cyklus ukončíme.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // ukonči cyklus
  }
}
```
