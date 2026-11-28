---
title: "Jak fungují příkazy `if`"
description: "Použití klíčového slova `if` ke spuštění bloku kódu jen tehdy, když platí nějaká podmínka, jako vyhazovač, který pouští lidi dovnitř."
en_md5: 81c99eea67b02e082ca6c9d7988a3914
---

Existuje klíčové slovo, které nám pomáhá říct Jikimu, aby něco dělal jen v určitých situacích. Třeba píšeš kód, který hlídá vchod do baru, jsi vyhazovač a Jiki má otevřít dveře jen tehdy, když je člověk vhodně oblečený. Nebo píšeš kód, kde máš na starosti mávání šachovnicovou vlajkou na konci závodu, a Jiki musí vědět, že to má udělat jen v posledním kole. V takových situacích použijeme klíčové slovo `if`.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bar-door-scenario.webp"
  alt="Jiki jako vyhazovač, který rozhoduje, jestli pustí lidi do nočního klubu"
  width="292"
  height="400"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/if/waving-flag.webp"
  alt="Jiki připravený mávat šachovnicovou vlajkou na konci závodu"
  width="266"
  height="400"
/>

Klíčové slovo `if` používáme velmi podobně jako `repeat`. Nějakou informaci dáme do kulatých závorek. V tomto případě je tou informací podmínka (anglicky _condition_), kterou kontrolujeme. A potom do složených závorek vložíme blok kódu, který se provede jen tehdy, když tato podmínka platí.

```javascript
if (condition) {
}
```

Jak takové podmínky vypadají? Většinou jde o nějaké porovnání (anglicky _comparison_). Porovnáváme dvě čísla nebo dva řetězce a kontrolujeme, jestli je výsledek pravda, nebo nepravda.

Takže si je představ jako tvrzení (anglicky _statements_), která se dají říct nahlas. Tři je menší než pět. To je pravda. Sedm je menší než dva. To je nepravda.

K zápisu těchto porovnání používáme symboly. Pravděpodobně je už znáš z matematiky. Máme menší než, větší než, menší nebo rovno, větší nebo rovno, a taky kontrolu, jestli jsou dvě věci stejné, jestli se rovnají. A tenhle symbol je trochu jiný, než je obvyklé, protože ke zjištění, jestli jsou dvě věci stejné nebo různé, používáme tři rovnítka za sebou.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/comparisons-symbols.webp"
  alt="Tabulka porovnávacích operátorů: menší než, větší než, menší nebo rovno, větší nebo rovno, rovná se a nerovná se, s příklady"
  width="449"
  height="400"
/>

To nám pomáhá neplést si to s nastavováním nebo aktualizací proměnných, kde rovnítko znamená: tohle dej do krabice. Prostě si zapamatuj, že tři rovnítka znamenají porovnávání.

Porovnávat se dají i řetězce. Takže `"hello"` se rovná `"hello"`. To je pravda. Oba řetězce jsou stejné. Ale tady si dej pozor, protože Jiki porovnává každý jednotlivý znak (anglicky _character_) v obou řetězcích, a to na obou papírcích. Takže `"Hello"` s velkým H se nerovná `"hello"` s malým h. Jsou to různé řetězce, a jejich porovnání by proto dalo nepravdu, protože velké H a malé h jsou různé znaky.

Mimochodem, pravda a nepravda se nazývají _Booleans_ (pravdivostní hodnoty), a to je další slovo, které zní odborně. Ale je to opravdu jednoduché. Je to jen formální způsob, jak říct, že něco je buď pravda, nebo nepravda. Takže když narazíš na slovo Booleans, znamená to prostě pravda nebo nepravda. Podívejme se, jak to funguje. Představ si, že stavíme toho robotického vyhazovače pro klub, a chceme, aby otevřel dveře jen tehdy, když je člověku 21 nebo víc. Takže máme funkci `askAge` (zeptej se na věk), kterou zjistíme něčí věk, a výsledek si uložíme do proměnné `age` (věk). A pak můžeme říct: když je ten `age` větší než 20, otevřeme dveře. Takže když `askAge` vrátí `30`, otevřeme, a když vrátí `12`, neotevřeme.

```javascript
let age = askAge()
if (age >= 21) {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bouncer-open-close.webp"
  alt="Jiki otevírá dveře někomu, kdo je dost starý, a odmítá vpustit někoho příliš mladého"
  width="410"
  height="400"
/>
