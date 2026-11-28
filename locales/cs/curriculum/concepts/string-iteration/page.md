---
title: "Procházení řetězců cyklem `for ... of`"
description: "Jak pomocí cyklu `for of` projít řetězec písmeno po písmenu a s každým z nich něco udělat."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

K jednomu písmenu v řetězci se dostaneš přes hranaté závorky. Teď se podíváme, jak projít řetězec cyklem a dostat z něj postupně jedno písmeno za druhým.

A k tomu potřebujeme nový typ cyklu. Zatím jsme používali cyklus `repeat` a teď sáhneme po něčem, čemu se říká cyklus `for of` (prochází postupně každý prvek kolekce). Jsou to dvě nová klíčová slova: `for` a `of`.

Klíčové slovo `for` uvidíme ještě na pár místech, až půjdeme dál. Může stát samo, nebo se může spojit s `in` nebo s `of`. Zatím se soustředíme na to poslední, na `of`.

Podívejme se tedy na nějaký kód.

Začneme tím, že vytvoříme proměnnou `name` (jméno), která obsahuje řetězec `"Jeremy"` (křestní jméno). Nic nového.

Pak je tu řádek s cyklem a děje se na něm dost věcí, tak si ho projdeme pomalu.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Nejdřív je tu klíčové slovo `for`. To Jikimu říká, že chceme opakovat kus kódu. Podívá se tedy dopředu, uvidí `of` a je mu jasné, že chceme opakovat stylem „for of“.

A to znamená, že místo cyklu `repeat`, kde říkáme „zopakuj tohle desetkrát“, teď říkáme „projdi všechna písmena v řetězci“. Přesně to „for of“ znamená.

Pak je tu ta část s `let letter` (písmeno). Je to přesně to samé, co jsme měli výš s `let name`. Jen si vytváříme proměnnou s názvem `letter`.

Rozdíl je v tom, že místo abychom přímo řekli, co v ní má být, říkáme Jikimu, aby do ní dával po jednom každé písmeno z řetězce.

Jiki tedy uvidí `for`, zkontroluje, jestli tam je `of`, a jde na věc. Podívá se na první písmeno v řetězci, tady na `"J"`, a dá ho do nové krabice s názvem `letter`. Mimochodem, ta krabice se může jmenovat jakkoli. Nemusí to být zrovna `letter`. Tady jsme se prostě rozhodli jí tak říkat.

Pak provede kód ve složených závorkách. Tady se dá udělat všechno, co jde udělat kdekoli jinde v kódu. Jediný rozdíl je, že tenhle blok kódu se provede jednou pro každé písmeno v řetězci a bude mít tuhle proměnnou k dispozici.

Pokaždé, když Jiki dojde na zavírací složenou závorku, krabici `letter` vyhodí a vytvoří novou, do které vloží další písmeno. Poprvé tedy vyhodí `"J"` a do krabice místo něj dá `"e"`. Pak to samé udělá s `"r"`, potom s `"e"`, pak s `"m"` a nakonec s `"y"`. Šest písmen, šest průchodů cyklem. Chvíli trvá, než si na tu syntaxi zvykneš, ale není to nic složitého.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki vyhazuje starou krabici s písmenem a vkládá další písmeno do nové krabice s označením letter, a to pro každé písmeno v řetězci"
  width="500"
  height="168"
/>
