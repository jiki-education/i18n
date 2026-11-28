---
title: "Metody"
description: 'Funkce, které patří k hodnotě a volají se tečkovou notací, jako `"Jeremy".includes("e")` nebo `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Doteď jsme si řetězce a čísla představovali jako docela statické věci.

A i když statické jsou, mají v sobě zabudovanou spoustu schopností, které Jiki umí využít.

Jak budeme postupovat dál, budeme se o téhle funkčnosti učit, o těch schopnostech, které mají a které ti hodně usnadní práci.

Podíváme se na dva typy schopností: vlastnosti (anglicky _properties_) a metody (anglicky _methods_).

Metody jsou funkce, které patří k řetězci.

Takže místo abychom psali funkci, do které řetězec vkládáme jako vstup, můžeme metodu použít přímo na řetězci.

Například si vzpomeň na funkci, kde zjišťuješ, jestli řetězec obsahuje nějaké konkrétní písmeno? Řetězce na to mají metodu `includes` (obsahuje) a můžeme ji použít se stejnou tečkovou notací, jakou znáš u vlastností.

Rozdíl oproti vlastnostem je v tom, že je zapisujeme jako funkce, se závorkami a vstupy.

Můžeme napsat:

```javascript
"Jeremy".includes("e") // true
```

A dostaneme zpátky `true`, protože `"Jeremy"` obsahuje `"e"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki píše řetězec Jeremy na papírek"
  width="359"
  height="400"
/>

Metody se od vlastností liší, protože nejsou statické údaje. Jsou to skutečné funkce. Můžeš si je představit jako funkce, které mají zabudovanou krabici s řetězcem uvnitř.

Jak fungují, teď není moc důležité. Ještě nějakou dobu je stavět nebudeš. Stačí vědět, že metodu použiješ tak, že napíšeš tečku a pak obvyklou syntaxi funkce.

U řetězců je dobré vědět, že metody nic uvnitř řetězce nemění. Například existuje metoda `toUpperCase` (převede na velká písmena), která vrátí řetězec se všemi písmeny velkými. Původní řetězec to ale nezmění. Ten pořád obsahuje `"Jeremy"` napsané jen s velkým J. Jiki místo toho vytváří nový řetězec, celý velkými písmeny.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
