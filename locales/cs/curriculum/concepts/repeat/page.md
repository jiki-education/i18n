---
title: "Cyklus `repeat`"
description: "Jak pomocí klíčového slova `repeat` říct Jikimu, aby kód ve složených závorkách spustil určený početkrát."
en_md5: f37a63911f75934656cbf04a38ff2b60
---

Zatím jsme všechno psali lineárně, tedy tak, že Jiki plní jeden pokyn za druhým shora dolů.

Teď se podíváme na to, jak může Jiki z tohoto striktního shora dolů jdoucího toku vybočit, a konkrétně jak mu můžeme říct, aby spustil stejnou část kódu mnohokrát za sebou.

Představ si třeba, že jsi v bludišti a chceš udělat 10 kroků dopředu. Existuje funkce `walk`, která s tím pomůže, ale co kdyby neexistovala? Co kdyby ti zůstala jen funkce `move` (pohni se)?

Místo abys psal `move` desetkrát za sebou, což je dost opakující se, potřebujeme umět říct: „Hele, Jiki, udělej desetkrát to, co řeknu příště.

`Move`.“

Abychom to v kódu uměli, potřebujeme použít naše první klíčové slovo (anglicky _keyword_), a klíčová slova jsou pokyny, kterým Jiki rozumí. Vypadají trochu jako stroje, ale stroje to nejsou. Když Jiki uvidí klíčové slovo, nehledá na polici žádný stroj, prostě ví, že má něco udělat. Je to zabudované v jeho hlavě. Ve kurzu se naučíme asi 20 různých klíčových slov a tím prvním je klíčové slovo `repeat`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-keywords-2.webp"
  alt="Jiki obklopený klíčovými slovy jako repeat, if, else, and, or, s poznámkou, že klíčová slova jsou pokyny, kterým Jiki rozumí"
  width="358"
  height="400"
/>

Klíčové slovo `repeat` dělá přesně to, co jsem řekl výše. Říká Jikimu: „Opakuj tolikrát, kolik řeknu, to, co řeknu příště.“ Podívej se na tento kód. Nejprve tedy pomocí klíčového slova `repeat` Jikimu řekneme, že bude něco dělat vícekrát. Potom do kulatých závěrek napíšeme, kolikrát chceš, aby to Jiki zopakoval, a pak máme tyto složené závorky a uvnitř nich je to, co chceme, aby Jiki opakoval. Tento vzorec je v programování neuvěřitelně častý. Určíme klíčové slovo, obvykle s nějakou informací, v tomto případě s počtem opakování, a pak blok kódu (anglicky _code block_) ve složených závorkách. Takže zpátky ve světě bludiště: místo `move`, `move`, `move`, `move` můžeme napsat repeat čtyřikrát `move`.

```javascript
repeat(4) {
  move()
}
```

Jiki ten kód uvidí a použije stroj `move` čtyřikrát za sebou.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-running-loop.webp"
  alt="Jiki používá stroj move čtyřikrát za sebou, jeden po druhém"
  width="421"
  height="400"
/>

A nejsme omezení jen na jednu věc ve složených závorkách. Jiki může dělat více věcí opakovaně. Můžeme mu říct, aby udělal `move`, pak `turnLeft`, a aby celé tohle zopakoval čtyřikrát. Když Jiki tohle uvidí, použije stroj `move`, pak stroj `turnLeft`, pak stroj `move`, pak stroj `turnLeft`, pak stroj `move` atd., dokud obojí neudělá čtyřikrát.

```javascript
repeat(4) {
  move()
  turnLeft()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/if-else-code.webp"
  alt="Jiki používá stroj move a potom stroj turnLeft, dvojici akcí opakuje čtyřikrát"
  width="500"
  height="390"
/>

Těmto pokynům k opakování říkáme cykly (anglicky _loops_) a existuje spousta různých cyklů, které všechny fungují trochu jinak.

Je tu ještě jedna věc, kterou je dobré vědět: když pracuješ s cykly, úhledný a přehledný kód je naprosto zásadní. Když má kód dobrou vizuální strukturu, je velmi snadné vidět, co se děje. Ale když ne, když zapomeneš pěkně odsazovat nebo si odsazení spleteš, věci se velmi rychle stanou matoucími. V tomto kurzu tedy máme vždy jedno pravidlo. Počáteční složenou závorku vždy píšeš na stejný řádek jako příkaz `repeat` (anglicky _statement_). Koncovou složenou závorku vždy píšeš na vlastní řádek za příkazem a kód mezi nimi vždy odsadíš o dvě mezery. Tím zůstane všechno opravdu úhledné, a když na to zapomeneš nebo zkusíš jiný vzorec, dostaneš chybu.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/multiple-things-in-loop.webp"
  alt="Jiki ukazuje na odsazení a nový řádek, které udržují blok kódu cyklu úhledný"
  width="500"
  height="398"
/>
