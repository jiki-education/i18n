---
title: "Neno muhimu la `else`"
description: "Kuongeza kifungu cha `else` baada ya `if` ili kizuizi kingine cha msimbo kiendeshwe pale sharti linapokuwa sikweli."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Kauli za masharti hukuruhusu kukagua masharti na kuendesha msimbo pale tu jambo linapokuwa kweli. Sasa hebu tumtambulishe mwenza wa `if`, yaani `else`.

Kwa kauli ya masharti (_if statement_ kwa Kiingereza), Jiki anaendesha kizuizi cha msimbo pale sharti linapokuwa kweli, na anaruka kizuizi hicho cha msimbo pale linapokuwa sikweli. Lakini vipi ikiwa unataka Jiki afanye jambo moja sharti linapokuwa kweli, na jambo lingine linapokuwa sikweli? Hapo ndipo `else` inapokuja. Tunaweza kuweka kifungu cha `else` baada ya mabano ya kufunga ya `if`, na Jiki ataendesha kifungu hicho ikiwa sharti la `if` ni sikweli. Kwa hiyo, tukirudi kwenye mfano wa mlinda mlango wa klabu, sasa tuna chaguo la kufungua mlango au la kumkatalia mtu, jambo ambalo pengine ni bora kuliko kumpuuza kabisa kama tulivyokuwa tunafanya awali. Fikiria kama njia panda. Jiki anafika kwenye njia panda hii, anakagua sharti, kisha anaweza kuchukua njia moja ikiwa ni kweli, au njia nyingine ikiwa ni sikweli. Lakini hacheuki njia zote mbili.

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
  alt="Njia panda mlangoni pa klabu: fungua mlango sharti linapokuwa kweli, mkatalie mtu sharti linapokuwa sikweli"
  width="500"
  height="332"
/>

Lakini vipi ikiwa una uwezekano zaidi ya miwili? Fikiria mlinda mlango wetu anauza tikiti. Chini ya miaka kumi na tatu, unapata tikiti ya mtoto. Kati ya miaka kumi na tatu na ishirini, unapata tikiti ya kijana. Miaka ishirini au zaidi, ni tikiti ya mtu mzima. Kwa hiyo sasa una matokeo matatu tofauti. Kwa hili, tunaweza kuongeza kauli nyingine ya masharti baada ya `else`. Kwa hiyo tunaweza kusema, "Ikiwa hivi, fanya hivi. `else if` hivi, fanya hivyo. `else`, fanya kitu kingine." Kwa hiyo katika mfano huu, Jiki ataona `if` na kukagua sharti la kwanza. Kumi na sita ni ndogo kuliko kumi na tatu? Hapana. Kwa hiyo anaendelea hadi kwenye `else if`. Kumi na sita ni ndogo kuliko ishirini? Ndiyo, hilo ni kweli. Kwa hiyo anaendesha kizuizi hicho na kutoa tikiti ya kijana. Lakini hapo amemaliza. Hakagui kitu kingine chochote. Haangalii hata mara moja `else` ya mwisho. Mara Jiki anapopata sharti lililo kweli, anaendesha kizuizi hicho, na anaruka kila kitu kingine kilicho chini yake.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Hili ndilo jambo la msingi kuelewa. Kizuizi kimoja tu huendeshwa. Jiki anapitia masharti haya moja baada ya jingine, anapata sharti la kwanza lililo kweli, anaendesha kizuizi hicho, na anaendelea.

Sasa, kuna jambo moja unalopaswa kuelewa vizuri, kwa sababu hili huwachanganya watu. Kuna tofauti ndogo lakini muhimu sana kati ya kuandika kauli mbili tofauti za masharti na kutumia `else if`. Kwa hiyo fikiria tunaunda programu inayotoa zawadi ya kawaida au zawadi ya ziada kulingana na alama za mtu. Angalia uwezekano huu miwili. Mmoja unatumia `else if`, na mwingine unatumia kauli mbili tofauti za `if`. Nini kitatokea tofauti?

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

Kwa hiyo katika hali ya kwanza, tukiwa na `else if`, tunakagua kama alama ni nyingi na kutoa zawadi, kisha hatuendeshi `else if`. Kwa hiyo mtu, ikiwa ana alama zaidi ya mia moja, anapata zawadi ya ziada tu.

Lakini katika mfano wa pili, `if` hizo mbili zinajitegemea kabisa. Zote zitaendeshwa na zote zitakuwa kweli. Kwa hiyo mtu hapa anapata zawadi mbili. Katika ule wa kwanza, zawadi moja. Katika ule wa pili, zawadi mbili. Chukua muda kidogo kuhakikisha umeelewa hilo vizuri.

Pia, ni jambo la kuvutia kutambua kwamba yoyote kati ya haya yanaweza kuwa sahihi, kulingana na jinsi mchezo umeundwa. Labda mshindani anapata zawadi ya kawaida na zawadi ya ziada, au labda anapewa zawadi ya ziada tu badala ya ile ya kawaida. Hakuna mmoja wa misimbo hii miwili ulio sahihi au usio sahihi. Yote mawili yana matumizi yake katika hali tofauti. Lakini unahitaji kujua ni upi unaokusudia kutumia.
