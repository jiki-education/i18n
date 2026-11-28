---
title: "Klíčové slovo `else`"
description: "Jak za `if` přidat větev `else`, aby se při nesplněné podmínce spustil jiný blok kódu."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Příkazy `if` ti umožňují ověřovat podmínky a spustit kód jen tehdy, když něco platí. Teď se pojďme podívat na `if` a jeho komplice: `else`.

S příkazem `if` (anglicky _if statement_) Jiki spustí blok kódu, když podmínka platí, a když neplatí, ten blok přeskočí. Ale co když chceš, aby Jiki udělal jednu věc, když podmínka platí, a jinou, když neplatí? Přesně k tomu slouží `else`. Větev `else` (anglicky _else clause_) můžeme napsat za zavírací složenou závorku `if` a Jiki ji spustí, když podmínka neplatí. Když se vrátíme k příkladu s vyhazovačem v klubu, máme teď na výběr buď otevřít dveře, nebo dotyčného poslat pryč, což je nejspíš lepší než ho úplně ignorovat, jako jsme to dělali předtím. Představ si to jako rozcestí. Jiki dojde na rozcestí, ověří podmínku, a pak se může vydat jednou cestou, pokud platí, nebo druhou, pokud neplatí. Nikdy ale nejde oběma cestami zároveň.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Rozcestí u dveří klubu: když podmínka platí, otevři dveře, když neplatí, pošli dotyčného pryč"
  width="500"
  height="332"
/>

Ale co když máš víc než dvě možnosti? Představ si, že náš vyhazovač prodává lístky. Do třinácti let dostaneš dětský lístek. Od třinácti do dvaceti lístek pro teenagery. Od dvaceti výš lístek pro dospělé. Máš tedy tři různé výsledky. Proto můžeme za `else` přidat další `if`. Můžeme tak říct: „Když tohle, udělej tohle. Jinak když tohle, udělej tamto. Jinak udělej tuhle třetí věc.“ V tomto příkladu tedy Jiki narazí na `if` a ověří první podmínku. Je šestnáct méně než třináct? Ne. Přesune se k `else if`. Je šestnáct méně než dvacet? Ano, to platí. Spustí ten blok a vydá lístek pro teenagery. Tím ale skončí. Nic dalšího nekontroluje. Na poslední `else` se vůbec nepodívá. Jakmile Jiki najde podmínku, která platí, spustí její blok a všechno ostatní pod ním přeskočí.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Tohle je to klíčové, co je potřeba pochopit. Vždycky se spustí jen jeden blok. Jiki prochází tuhle řadu podmínek shora dolů, najde první, která platí, spustí její blok a jde dál.

Teď je tu jedna věc, kterou je potřeba opravdu pochopit, protože na ní lidé často klopýtnou. Mezi tím, když napíšeš dva samostatné příkazy `if`, a tím, když použiješ `else if`, je nenápadný, ale velmi důležitý rozdíl. Představ si, že tvoříme program, který podle něčího skóre dá buď základní cenu, nebo bonusovou. Podívej se na tyhle dvě možnosti. Jedna používá `else if`, druhá dva samostatné příkazy `if`. Co se bude dít jinak?

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

V prvním případě, s `else if`, zkontrolujeme vysoké skóre a dáme cenu, a pak už `else if` nespustíme. Takže kdo má skóre přes sto, dostane jen bonusovou cenu.

Ale ve druhém příkladu jsou oba příkazy `if` úplně nezávislé. Spustí se oba a oba budou platit. Dotyčný tady dostane dvě ceny. V prvním případě jednu, ve druhém dvě. Zastav se na chvíli a ujisti se, že to opravdu chápeš.

Stojí za zmínku, že podle toho, jak je hra navržená, může být správně jedno i druhé. Třeba soutěžící dostane normální cenu a k ní bonusovou, nebo je rovnou povýšen na bonusovou. Ani jeden z těch kusů kódu není správný ani špatný. Prostě se každý hodí v jiné situaci. Ale musíš vědět, který z nich chceš použít.
