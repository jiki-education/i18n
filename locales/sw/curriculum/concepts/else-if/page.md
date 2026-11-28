---
title: "Kutumia Minyororo ya `else if`"
description: "Kuunganisha vifungu vya `else if` ili kuangalia masharti kadhaa kwa mpangilio, na kuendesha kizuizi cha kwanza tu ambacho sharti lake ni kweli."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Umeona jinsi `if` na `else` vinavyokupa njia mbili: fanya kitu kimoja sharti linapokuwa kweli, fanya kingine linapokuwa sikweli. Lakini vipi kama una uwezekano zaidi ya miwili?

Fikiria mlinzi wetu wa mlango anauza tikiti. Ukiwa chini ya miaka kumi na tatu, unapata tikiti ya mtoto. Ukiwa kati ya miaka kumi na tatu na ishirini, unapata tikiti ya kijana. Ukiwa na miaka ishirini au zaidi, ni tikiti ya mtu mzima. Kwa hiyo sasa una matokeo matatu tofauti. Kwa hili, tunaweza kuongeza kauli nyingine ya masharti baada ya `else`. Kwa hiyo tunaweza kusema, "Kama hivi, basi fanya hivi. La sivyo kama hivi, fanya hivi. La sivyo, fanya kitu kingine." Kwa hiyo katika mfano huu, Jiki ataona `if` na kuangalia sharti la kwanza. Je, kumi na sita ni ndogo kuliko kumi na tatu? Hapana. Kwa hiyo anaendelea hadi kwenye `else if`. Je, kumi na sita ni ndogo kuliko ishirini? Ndiyo, hilo ni kweli. Kwa hiyo anaendesha kizuizi hicho na kutoa tikiti ya kijana. Lakini hapo amemaliza. Haangalii kitu kingine chochote. Hata haangalii hicho `else` cha mwisho. Mara Jiki anapopata sharti ambalo ni kweli, anaendesha kizuizi hicho, na anaruka kila kitu kingine kilicho chini yake.

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
  alt="Tikiti tatu zenye maandishi CHILD, TEEN na ADULT, moja kwa kila matokeo ya ukaguzi wa umri"
  width="500"
  height="142"
/>

Hili ndilo jambo la muhimu kuelewa. Kizuizi kimoja tu ndicho kinaendeshwa. Jiki anashuka kwenye mnyororo huu, anapata sharti la kwanza la kweli, anaendesha kizuizi hicho, na anaendelea.

Sasa, kuna jambo moja unalopaswa kuelewa vizuri kwa sababu hili huwachanganya watu wengi. Kuna tofauti ndogo lakini muhimu sana kati ya kuandika kauli mbili tofauti za masharti na kutumia `else if`. Kwa hiyo fikiria tunaunda programu inayotoa zawadi ya kawaida au zawadi ya ziada kulingana na alama za mtu. Angalia uwezekano huu miwili. Mmoja unatumia `else if` na mwingine unatumia kauli mbili tofauti za `if`. Nini kitatokea tofauti?

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

Kwa hiyo katika kisa cha kwanza, chenye `else if`, tunaangalia kama alama ni kubwa na kutoa zawadi ya ziada, na kisha hatuendeshi hicho `else if`. Kwa hiyo mtu huyo, kama ana alama zaidi ya mia moja, anapata zawadi ya ziada pekee.

Lakini katika mfano wa pili, `if` hizo mbili zinajitegemea kabisa. Zote mbili zitaendeshwa na zote mbili zitakuwa kweli. Kwa hiyo mtu hapa anapata zawadi mbili. Katika wa kwanza, zawadi moja. Katika wa pili, zawadi mbili. Chukua muda kidogo kuhakikisha umeelewa hilo vizuri.

Pia, inafurahisha kutambua kwamba yote mawili yanaweza kuwa sahihi kulingana na jinsi mchezo ulivyoundwa. Labda mshiriki anapata zawadi ya kawaida na ya ziada, au labda anapewa zawadi ya ziada tu badala ya ile ya kawaida. Hakuna msimbo ulio sahihi au mbaya kati ya hivi viwili. Yanafaa tu katika hali tofauti. Lakini unahitaji kujua ni upi unakusudia kutumia.
