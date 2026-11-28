---
title: "Jak funkcím přidat návratovou hodnotu"
description: "S klíčovým slovem `return` dáš svým funkcím výdejní otvor, který vrací hodnotu zpátky volajícímu."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Už umíš vytvářet funkce se vstupy i bez nich. Zbývá se naučit jednu poslední věc a pak z tebe bude expert na výrobu funkcí. Tou věcí je, jak funkcím dát výdejní otvor.

Už používáš spoustu funkcí, které něco vrací. `isAlienAbove` (zjistí, jestli je nade mnou mimozemšťan) ti vrací pravdu nebo nepravdu. `Math.randomInt(1, 10)` (Math znamená matematika, randomInt náhodné celé číslo) ti vrací náhodné číslo.

Když Jiki tyhle funkce použije, něco mu vypadne z výdejního otvoru a on to pak může použít dál.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki sbírá hodnotu, která vypadla z výdejního otvoru stroje"
  width="500"
  height="312"
/>

Aby to šlo, potřebujeme další nové klíčové slovo, a tím je `return`.

Klíčové slovo `return` říká malému Jikimu, aby něco vytlačil z výdejního otvoru.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Malý Jiki uvnitř stroje vytlačuje hodnotu 42 výdejním otvorem"
  width="500"
  height="335"
/>

Tak si udělejme funkci a pojmenujme ji `meaningOfLife` (smysl života). Jejím úkolem je vždycky jen vrátit číslo `42`. Nemá žádné vstupy. Napíšeme ji takhle:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Stroj meaningOfLife posílá číslo 42 ven ze svého výdejního otvoru"
  width="500"
  height="323"
/>

Teď kdekoli v kódu použijeme `meaningOfLife()`, dostaneme zpátky číslo `42`, se kterým můžeme pracovat jako s jakoukoli jinou hodnotou. Můžeme ho uložit do krabice pomocí `let`, můžeme ho předat jako vstup jiné funkci, můžeme ho porovnat v příkazu `if`.

Funkce s návratovou hodnotou taky umí brát vstupy. Můžeš napsat funkci `ageBracket(age)` (věková kategorie), která vrátí `"Sorry, too young"`, když je `age` menší než 18, a jinak `"Welcome"`. Kdokoli ji zavolá, dostane zpátky ten řetězec, který funkce vrátila.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Hodnota věku padá do vstupní štěrbiny stroje, aby se stroj mohl rozhodnout, co vrátí"
  width="487"
  height="400"
/>

Takhle programování funguje ve svém jádru. Vytváříme spoustu takových malých stavebních kamenů a pak z nich skládáme programy.
