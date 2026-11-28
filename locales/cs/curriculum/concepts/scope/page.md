---
title: "Obor platnosti"
description: "Jak složené závorky vytvářejí vlastní sadu polic, a proměnné tak žijí jen tak dlouho jako jejich blok."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Představ si kód, který nakreslí kruh pokaždé na jiné místo. Chceme jich takhle nakreslit 10. Můžeme to spojit s cyklem. Ale jestli dáváš dobrý pozor, možná ti tady něco nesedí.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Na začátku jsem říkal, že platí pravidlo, že krabice na Jikiho policích musí mít jedinečná jména.

A klíčové slovo `let` vytvoří novou krabici pokaždé, když ho použiješ.

Ale protože je to `let` uvnitř cyklu, Jiki vytvoří novou krabici pokaždé, když cyklus proběhne.

Takže je ten kód špatně, nebo se tu děje něco jiného zvláštního?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki se zmateně tváří a přemýšlí, jestli není ten kód špatně"
  width="384"
  height="400"
/>

Tak se ukazuje, že kód je v pořádku. Je to naprosto platný JavaScript a funguje díky pojmu, kterému se říká obor platnosti (anglicky _scope_), neboli scoping.

Obor platnosti se ti nejdřív asi bude zdát docela jednoduchý, ale můžu ti zaručit, že ti bude dělat problémy po zbytek kariéry. S oborem platnosti se potýkají i ti nejzkušenější vývojáři a JavaScript je v tomhle jeden z nejsložitějších jazyků. Říkám ti to proto, aby tě to nezaskočilo, až na problémy s oborem platnosti narazíš. To se prostě stává. Ale taky dávej pořádně pozor na tenhle kousek, protože je důležitý.

Když v kódu narazíš na složenou závorku, vzniká tím takzvaný nový obor platnosti. Co to znamená? Můžeš si představit, že Jiki pokaždé, když narazí na složenou závorku, postaví ve své dílně novou malou sadu polic. A všechny krabice, které přitom vytvoří, když spouští kód uvnitř těch složených závorek, tyhle nové krabice jdou na tuhle novou malou sadu polic, a ne na tu hlavní.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Jikiho hlavní sada polic vedle nové menší sady polic, kterou vytvořila složená závorka"
  width="500"
  height="205"
/>

A když Jiki dojde k odpovídající zavírací složené závorce, všechny krabice, které jsou na téhle vedlejší sadě polic, vyhodí.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki hází krabice z vedlejší sady polic do koše, když dojde k zavírací složené závorce"
  width="500"
  height="237"
/>

Takže pokaždé, když máme takovýhle cyklus, můžeme vytvořit krabice, které vydrží jen po dobu jednoho průběhu cyklu. Krabice `left` (vlevo) a `top` (nahoře), které tu vidíš, vydrží jen do chvíle, než dojdeme k zavírací složené závorce, a pak se vyhodí. A Jiki k té zavírací složené závorce dojde pokaždé, když cyklus proběhne. Takže v tomhle programu desetkrát. Takže desetkrát vytvoří krabici jménem `left` a zase ji vyhodí.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Dvě krabice s nápisem left a top, které vydrží jen jeden průchod cyklem"
  width="500"
  height="187"
/>

Takže když vytváříš proměnnou, musíš se rozhodnout, jak dlouho má vydržet. Pokud ji chceš mít k dispozici dlouho, musí být mimo jakékoli složené závorky. Pokud má vydržet jen jeden průchod (anglicky _iteration_), jedno proběhnutí cyklu, můžeš ji dát dovnitř složených závorek. Vidíš, jak snadno se to celé může začít plést? Existuje ale jedno prima pravidlo, které ti to na začátku zjednoduší: všechny proměnné měj nahoře v kódu, mimo složené závorky, a uvnitř závorek je jen aktualizuj. Třeba kód výše bychom mohli napsat jen s jednou krabicí `left` a jednou `top`, na začátku nastavenými na nulu, a pak je uvnitř cyklu pokaždé aktualizovat. To je taky naprosto v pořádku. Ani jedna verze není správná ani špatná. Existují osvědčené postupy, ale o těch si řekneme později. Zatím experimentuj, bav se, zjisti, co ti sedí nejvíc, a zkus si s tím moc nelámat hlavu.
