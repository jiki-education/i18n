---
title: "Kupitia string kwa `for ... of`"
description: "Kutumia `for of` kitanzi kupitia kila herufi katika string, tukifanya kitu kwa kila herufi kwa zamu."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Unaweza kufikia herufi moja ya string kwa kutumia mabano ya mraba. Sasa tutaangalia jinsi ya kupitia string kwa kitanzi, tukitoa kila herufi moja baada ya nyingine.

Na ili kufanya hivyo, tunahitaji aina mpya ya kitanzi. Hadi sasa, tumekuwa tukitumia `repeat` kitanzi, na sasa tutatumia kitu kinachoitwa `for of` kitanzi (kitanzi kinachopitia kipengele kimoja kimoja cha mkusanyiko). Hizo ni keyword mbili mpya, `for` na `of`.

Keyword `for` ni mojawapo ya yale tutakayoyaona sehemu nyingi tunaposonga mbele. Inaweza kusimama yenyewe, au inaweza kuambatana na `in` au `of`. Kwa sasa, tutazingatia hilo la mwisho, `of`.

Hebu tuangalie msimbo fulani.

Tutaanza kwa kutengeneza variable iitwayo `name` (jina) ambayo ina string `"Jeremy"` (jina Jeremy). Hakuna kipya hapa.

Kisha tunayo mstari wa kitanzi, na kuna mambo mengi yanayotokea hapo, kwa hivyo hebu tuyazungumze taratibu.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Kwanza, tunayo keyword `for`. Hiyo inamwambia Jiki kwamba tunataka kufanya marudio. Kwa hivyo anaangalia mbele na kuona `of`, na anajua kwamba tunataka kufanya marudio ya `for of`.

Na hiyo inamaanisha kwamba badala ya kutumia `repeat` kitanzi ambapo tunasema, "Hebu turudie mara 10," tunasema, "Hebu tupitie herufi zote za string." Hiyo ndiyo maana ya `for of`.

Kisha tunayo kipande hiki cha `let letter` (tengeneza variable iitwayo letter). Hiki ni kitu kilekile tulichonacho juu yake kwa `let name`. Tunatengeneza tu variable iitwayo `letter`.

Tofauti ni kwamba badala ya kusema wazi kinachokwenda ndani yake, tunamwambia Jiki aweke kila herufi ya string ndani yake moja baada ya nyingine.

Kwa hivyo Jiki anaona `for`, anakagua `of`, kisha anaanza. Anaangalia herufi ya kwanza ya string, ambayo hapa ni `"J"`, na kuiweka katika sanduku jipya linaloitwa `letter`. Kwa njia, tungeweza kuliita jina lolote. Si lazima liwe `letter`. Tumeamua tu kuliita `letter` hapa.

Kisha anaendesha msimbo ulio ndani ya mabano yaliyokunjwa, na unaweza kufanya kitu chochote hapa ambacho ungefanya popote pengine kwenye msimbo. Tofauti pekee ni kwamba kizuizi hiki cha msimbo kitaendeshwa mara moja kwa kila herufi ya string, na kitakuwa na variable hii tayari.

Kila Jiki anapofika kwenye mabano yaliyokunjwa ya kufunga, Jiki anatupa sanduku la `letter` na kutengeneza jipya lenye herufi inayofuata. Kwa hivyo mara ya kwanza, atatupa `"J"` na kuweka `"e"` kwenye sanduku badala yake. Kisha atafanya vivyo hivyo kwa `"r"`, kisha `"e"`, kisha `"m"`, kisha `"y"`. Herufi sita, mara sita kuzunguka kitanzi. Inachukua muda kidogo kuizoea sintaksia, lakini si dhana ngumu hivyo.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki anatupa sanduku la zamani la herufi na kuweka herufi inayofuata kwenye sanduku jipya lenye lebo letter, akirudia kwa kila herufi ya string"
  width="500"
  height="168"
/>
