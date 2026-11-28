---
title: "Řetězení `else if`"
description: "Řetězení `else if` pro postupné ověření několika podmínek: provede se jen první blok, jehož podmínka platí."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Už víš, jak `if` a `else` vytvářejí dvě cesty: jedno uděláš, když podmínka platí, a něco jiného, když neplatí. Ale co když máš možnosti víc než dvě?

Představ si, že náš vyhazovač prodává vstupenky. Pod třináct let dostaneš dětskou vstupenku. Mezi třinácti a dvaceti vstupenku pro teenagery. Od dvaceti výš vstupenku pro dospělé. Takže teď máš tři různé výsledky. Proto můžeme za `else` přidat další příkaz `if`. Můžeme tedy říct: „Když platí tohle, udělej tohle. Když neplatí a platí tamto, udělej tamto. Jinak udělej tuhle další věc.“ V našem příkladu tedy Jiki uvidí `if` a ověří první podmínku. Je šestnáct menší než třináct? Ne. Takže přejde k `else if`. Je šestnáct menší než dvacet? Ano, to platí. Spustí tedy ten blok a vydá vstupenku pro teenagery. Ale tím skončí. Nic dalšího nekontroluje. Na poslední `else` se vůbec nepodívá. Jakmile Jiki najde podmínku, která platí, spustí ten blok a všechno ostatní pod ním přeskočí.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Tři vstupenky s nápisy CHILD, TEEN a ADULT, každá pro jeden výsledek kontroly věku"
  width="500"
  height="142"
/>

Tohle je to klíčové, co je potřeba pochopit. Vždy se provede jen jeden blok. Jiki prochází tenhle řetěz shora dolů, najde první podmínku, která platí, spustí její blok a jde dál.

Teď je tu jedna věc, kterou je potřeba opravdu pochopit, protože právě na tom se lidé často zaseknou. Mezi napsáním dvou samostatných příkazů `if` a použitím `else if` je nenápadný, ale velmi důležitý rozdíl. Představ si, že vytváříme program, který podle skóre hráče udělí buď základní cenu, nebo bonusovou cenu. Podívej se na tyhle dvě možnosti. Jedna používá `else if`, druhá dva samostatné příkazy `if`. Co se bude dít jinak?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

V prvním případě, s `else if`, zkontrolujeme vysoké skóre a dáme bonusovou cenu, a pak už `else if` nespustíme. Kdo má skóre přes sto, dostane jen bonusovou cenu.

Ale ve druhém příkladu jsou oba příkazy `if` úplně nezávislé. Provedou se oba a obě podmínky budou platit. Takže dotyčný dostane dvě ceny. V prvním případě jednu cenu. Ve druhém dvě. Zastav se na chvíli a ujisti se, že to opravdu chápeš.

Je taky zajímavé, že správně může být jedno i druhé, podle toho, jak je hra navržená. Možná soutěžící dostane normální cenu a k tomu bonusovou, a možná se mu ta normální jen povýší na bonusovou. Ani jeden z těch kódů není správný nebo špatný. Každý se hodí v jiné situaci. Ale musíš vědět, který z nich chceš použít.
