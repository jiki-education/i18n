---
title: "Jak používat více funkcí dohromady"
description: "Rozdělení problému na malé funkce s jedinou odpovědností, které volají jedna druhou, takže každá část zůstane jednoduchá a znovupoužitelná."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Dosud každá funkce, kterou napíšeš, v podstatě stála na vlastních nohou a obsahovala všechnu logiku, kterou ke své práci potřebuje.

Teď se podíváme na to, jak funkce rozdělit, abychom měli menší funkce, které spolupracují, místo velkých funkcí, ve kterých se toho děje hodně.

V programování platí obecné pravidlo, že každá funkce má dělat co nejméně. Říkáme tomu, že funkce má jedinou odpovědnost (anglicky _single responsibility_). Každá funkce by měla dělat jen jednu věc a na různé dílčí části té věci používat jiné funkce.

Podívejme se tedy na příklad.

Představ si, že máme funkci, jejímž úkolem je vrátit řetězec, který popisuje jméno.

Jednoduchá verze by vypadala takto. Máme cyklus, který počítá, něco, co už umíš napsat, a pak šablonu řetězce, která z toho slepí výsledek.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Tohle funguje dobře, ale dělá to dvě věci. Jednu docela obecnou, počítání, a druhou velmi konkrétní, skládání toho řetězce v určitém formátu.

Mnohem hezčí by bylo rozdělit to na dvě funkce: jedna by měla na starosti počítání a druhá popis jména v tomhle konkrétním formátu.

```javascript
// Jen počítá písmena
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Jen hezky naformátuje text
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

A tuhle obecnou funkci na počítání pak můžeme znovu použít při skládání řetězce, ale i kdekoli jinde, kde ji budeme potřebovat. Kdykoli potřebujeme spočítat písmena v řetězci, je úplně oddělená od všeho, co souvisí s vypisováním.

Obě funkce můžeš číst samostatně a hned pochopíš, co každá z nich dělá.

Čím složitější funkce máš a čím víc jich je, tím víc platí, že tenhle postup rozhoduje o tom, jestli budeš mít úhledný a čitelný kód, nebo v tom budeš mít úplný zmatek a nepořádek.

Ještě jedna věc stojí za zmínku: na cokoli vytvoříš uvnitř funkce, se jiné funkce nedostanou, pokud to záměrně nevrátíš.

Takže když zkusíš odkázat na proměnnou `count` (počet) uvnitř `describeName` (popiš jméno), nepůjde to, protože patří té druhé funkci.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki přemýšlí se žárovkou nad hlavou o tom, jak proměnné zůstávají soukromé pro každou funkci"
  width="361"
  height="353"
/>

V JavaScriptu můžeme vytvořit proměnné nahoře nad vším ostatním, které jsou sdílené mezi funkcemi, ale rozhodně to nedělej, pokud pro to nemáš opravdu dobrý důvod.

Čím víc držíš každou funkci nezávislou, a odborně se takové funkci říká čistá (anglicky _pure_), tím bude tvůj kód čistší a tím méně chyb vytvoříš a budeš mít.
