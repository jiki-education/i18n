---
title: "Kuelewa Kauli za Masharti za `if`"
description: "Kutumia keyword `if` kuendesha kizuizi cha msimbo pale tu sharti fulani linapokuwa kweli, kama mlinzi wa mlango anayewaacha watu wapite."
en_md5: 81c99eea67b02e082ca6c9d7988a3914
---

Kuna keyword ambayo inatusaidia kumwambia Jiki afanye mambo tu katika hali fulani. Labda unaandika msimbo wa kulinda mlango wa baa, labda wewe ni mlinzi wa mlango, na Jiki anapaswa kufungua mlango tu ikiwa mtu amevaa ipasavyo. Au labda unaandika msimbo ambapo wewe ndiye unayeshughulikia kupeperusha bendera yenye mraba mraba mwishoni mwa mbio, lakini Jiki anahitaji kujua kwamba anapaswa kuifanya hivyo tu kwenye mzunguko wa mwisho. Katika hali kama hizi, tutatumia keyword ya `if`.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bar-door-scenario.webp"
  alt="Jiki kama mlinzi wa mlango akiamua ikiwa awaache watu waingie kwenye kilabu cha usiku"
  width="292"
  height="400"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/if/waving-flag.webp"
  alt="Jiki akiwa tayari kupeperusha bendera yenye mraba mraba mwishoni mwa mbio"
  width="266"
  height="400"
/>

Tunatumia keyword ya `if` kwa mtindo unaofanana sana na ule wa `repeat`. Tunaweka taarifa fulani ndani ya mabano ya kawaida. Katika kesi hii, taarifa hiyo ni sharti (_condition_ kwa Kiingereza) tunalokagua. Na kisha tunaweka kizuizi cha msimbo ndani ya mabano yaliyopinda ambacho tunaendesha tu ikiwa sharti hilo ni kweli.

```javascript
if (condition) {
}
```

Sasa, masharti haya yanaonekanaje? Kwa kawaida, huwa ni aina fulani ya ulinganisho (_comparison_ kwa Kiingereza). Tunalinganisha namba mbili au string mbili na kuangalia kama matokeo ni kweli au sikweli.

Kwa hivyo, fikiri kuhusu haya kama kauli (_statements_ kwa Kiingereza) ambazo unaweza kuzisema kwa sauti. Tatu ni chini ya tano. Hiyo ni kweli. Saba ni chini ya mbili. Hiyo ni sikweli.

Tunatumia alama kuandika ulinganisho huu. Huenda tayari unazifahamu kutoka kwenye hisabati. Tuna alama za chini ya, za kubwa kuliko, za chini ya au sawa na, za kubwa kuliko au sawa na, na pia tuna alama ya kuangalia kama vitu viwili ni sawa, yaani kama vinafanana. Na hii ni tofauti kidogo na ule uliozoea, kwa sababu tunatumia alama tatu za sawa mfululizo kuona kama vitu viwili ni sawa au ni tofauti.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/comparisons-symbols.webp"
  alt="Jedwali la operator za ulinganisho: chini ya, kubwa kuliko, chini ya au sawa, kubwa kuliko au sawa, sawa, na si sawa, pamoja na mifano"
  width="449"
  height="400"
/>

Na hii inatusaidia tusichanganye wakati tunapoweka au kubadilisha thamani ya variable, ambapo tunatumia alama moja ya sawa kumaanisha weka hii kwenye sanduku. Kumbuka tu: alama tatu za sawa kwa kulinganisha.

Unaweza pia kulinganisha string. Kwa hivyo `"hello"` ni sawa na `"hello"`. Hiyo ni kweli. String hizo mbili zinafanana. Lakini kuwa mwangalifu hapa, kwa sababu Jiki hulinganisha kila herufi (_character_ kwa Kiingereza) katika string zote mbili, kwenye karatasi zote mbili. Kwa hivyo `"Hello"` yenye H kubwa si sawa na `"hello"` yenye h ndogo. Ni string tofauti. Kwa hivyo kulinganisha hizo kutakuwa sikweli, kwa sababu H kubwa na h ndogo ni herufi tofauti.

Na kumbuka: kweli na sikweli huitwa Booleans (aina ya data yenye thamani mbili tu: kweli au sikweli), nayo ni neno lingine linalosikika kiufundi. Lakini ni rahisi sana. Ni njia rasmi tu ya kusema kwamba kitu ni kweli au sikweli. Kwa hivyo ukikutana na neno Booleans, inamaanisha tu kweli au sikweli. Hebu tuone hili likifanya kazi. Fikiria tunatengeneza yule mlinzi wa mlango wa roboti kwa ajili ya kilabu, na tutasema mlinzi anapaswa kufungua mlango tu ikiwa mtu ana umri wa miaka 21 au zaidi. Kwa hivyo tuna kitendakazi `askAge` (uliza umri), ambacho tunaweza kutumia kupata umri wa mtu, na tutahifadhi matokeo yake kwenye variable inayoitwa `age` (umri). Na kisha tunaweza kusema, ikiwa `age` hiyo ni kubwa kuliko 20, tutafungua mlango. Kwa hivyo ikiwa `askAge` inarejesha `30`, tunaufungua, na ikiwa inarejesha `12`, hatuufungui.

```javascript
let age = askAge()
if (age >= 21) {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bouncer-open-close.webp"
  alt="Jiki akimfungulia mlango mtu mwenye umri unaotosha, na akimkatalia kuingia mtu mdogo sana"
  width="410"
  height="400"
/>
