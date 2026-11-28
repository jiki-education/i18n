---
title: "Metodu"
description: 'Vitendakazi ambavyo ni mali ya thamani na huitwa kwa alama ya nukta, kama `"Jeremy".includes("e")` au `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Kufikia sasa, tunapofikiria kuhusu string au namba, tumezikiona kama vitu visivyobadilika.

Na ingawa ni hivyo, pia zina utendaji mwingi uliojengwa ndani yao ambao Jiki anaweza kutumia.

Na tunaposonga mbele, tutajifunza kuhusu utendaji huu, kuhusu uwezo huu ambao string na namba zinao, unaofanya maisha yako kuwa rahisi zaidi.

Tutatazama aina mbili za uwezo: sifa (_property_ kwa Kiingereza) na metodu.

Metodu ni vitendakazi ambavyo ni mali ya string.

Kwa hiyo, badala ya sisi kuandika kitendakazi tunachoweka string ndani yake kama ingizo, tunaweza kutumia metodu moja kwa moja kwenye string.

Kwa mfano, unakumbuka kitendakazi ambacho unahakiki kama string ina herufi fulani ndani yake? Kweli, string zina metodu inayoitwa `includes` (huangalia ikiwa kitu kipo ndani) inayofanya hivyo, na tunaweza kuitumia kwa sintaksia ile ile ya nukta uliyoona kwa sifa.

Tofauti na sifa ni kwamba tunapoziandika, tunaziandika kama vitendakazi vyenye mabano na maingizo.

Kwa hiyo tunaweza kuandika:

```javascript
"Jeremy".includes("e") // true
```

Na tutapata `true` kama matokeo, kwa sababu `"Jeremy"` ina `"e"` ndani yake.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki anaandika string Jeremy kwenye karatasi"
  width="359"
  height="400"
/>

Metodu ni tofauti na sifa kwa sababu si mambo tulivu. Kwa kweli ni vitendakazi. Unaweza kuzifikiria kama vitendakazi vilivyo na sanduku lililojengwa ndani yake lenye string ndani.

Jinsi zinavyofanya kazi haijalishi kwa sasa. Bado muda mrefu kabla ya kuzijenga. Unachohitaji kujua ni kwamba unatumia metodu kwa kuandika nukta kisha sintaksia ya kawaida ya kitendakazi.

Jambo moja la kujua kuhusu string ni kwamba metodu hazibadilishi chochote ndani ya string. Kwa mfano, kuna metodu `toUpperCase` (hufanya herufi zote ziwe kubwa), ambayo inarejesha string yenye herufi zote kubwa. Lakini hiyo haibadilishi string ya awali. Hiyo bado ina `"Jeremy"` yenye herufi J kubwa mwanzoni tu. Badala yake, Jiki anaunda string mpya yenye herufi kubwa zote.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
