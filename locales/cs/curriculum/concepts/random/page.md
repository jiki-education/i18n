---
title: "Náhodná čísla"
description: "Jak pomocí `Math.randomInt` s minimem a maximem získat při každém spuštění funkce jiné číslo."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

V programování se často dostaneme do situace, kdy chceme použít funkci a pokaždé z ní dostat jiné náhodné číslo (anglicky _random number_).

Hodí se to všelijak a všude, ale hlavně v kryptografii, kde se pořád dělá něco jako vytváření kódů, které si stroje mezi sebou předávají, a ty kódy musí být náhodné, aby je nešlo prolomit.

Proto máš k dispozici funkci, která se jmenuje `Math.randomInt` (náhodné celé číslo). Uprostřed toho názvu možná vidíš tečku. Jak postupně dostáváš přístup k dalším funkcím, můžeme je rozdělovat do různých skupin, aby v tom byl pořádek, a ta část `Math` (matematika) je název skupiny, do které tahle funkce patří. Říká Jikimu, do které části police se má podívat, v tomhle případě do části `Math`. Tečka prostě znamená: jdi do téhle části a najdi tam tuhle funkci. Zatím si s tím nedělej těžkou hlavu. V zadání cvičení vždycky najdeš, jaké funkce máš k dispozici a jak je použít. Důležité je pochopit, že když Jiki tuhle funkci použije, dostane pokaždé jiné číslo, jen s jedním omezením. Funkce má dva vstupy. První je nejmenší číslo, které stroj smí vrátit, a druhý je největší číslo, které stroj smí vrátit. Takže když funkci `Math.randomInt` použiješ s `10` a `13`, vždycky ti vypadne `10`, `11`, `12` nebo `13`. Ale pokaždé jiné.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki šplhá po žebříku k části police Math ve svém skladu"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Stroj Math.randomInt se dvěma vstupními trychtýři nahoře"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Stroj Math.randomInt s čísly 10 a 13 ve vstupních trychtýřích, který vydává 10, 11, 12 nebo 13"
  width="488"
  height="400"
/>

Představ si, že chceš nakreslit kruh na náhodné pozici na plátně. Můžeš použít `Math.randomInt` a pokaždé dostat jiné hodnoty pro `left` a `top`, ale s hranicemi třeba `10` a `90`, aby kruh nikdy nepřesáhl okraje plátna. Pokaždé, když tenhle kód spustíš, se kruh nakreslí trochu jinam.
