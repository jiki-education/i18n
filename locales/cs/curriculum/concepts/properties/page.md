---
title: "Vlastnosti"
description: "Statická fakta o hodnotě, která přečteš tečkovou notací a bez závorek, třeba `.length` řekne, kolik má řetězec písmen."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Dosud jsme o řetězcích a číslech uvažovali jako o docela statických věcech.

A i když statické jsou, mají v sobě zabudovanou spoustu schopností, které Jiki umí využít.

Podíváme se na dva druhy těchto schopností: vlastnosti a metody.

Vlastnosti jsou fakta o věcech, na která se můžeme Jikiho zeptat. Třeba řetězce mají vlastnost `length` (délka), pomocí které nám Jiki umí říct, jak je řetězec dlouhý.

Takže nemusíme psát cyklus přes všechna písmena, abychom zjistili, jak je řetězec dlouhý. Můžeme se prostě zeptat Jikiho.

A k tomu potřebujeme nový kus syntaxe: tečku.

Třeba když máme řetězec `"Jeremy"` a chceme zjistit jeho délku, napíšeme:

```javascript
"Jeremy".length // 6
```

Když Jiki vytvoří řetězec, spočítá písmena a prostě tak nějak napíše do rohu číslo, kolik jich je.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki počítá písmena řetězce Jeremy a do rohu píše číslo"
  width="359"
  height="400"
/>

A když pak použijeme vlastnost `length`, Jiki se prostě podívá, jaké to číslo bylo. Takže v našem příkladu `"Jeremy".length`: když Jiki vytvoří řetězec `"Jeremy"`, spočítá písmena, napíše do rohu číslo šest, a když pak napíšeme `"Jeremy".length`, podívá se, co tam stojí. Vlastnosti si tedy můžeš představit jako fakta o té věci.
