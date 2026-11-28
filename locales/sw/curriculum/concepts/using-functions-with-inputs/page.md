---
title: "Ingizo za Kitendakazi"
description: "Kuweka thamani kwenye matundu ya ingizo ya kitendakazi ili kubadilisha kinachofanya kila kinapoendeshwa."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Kimoja cha mambo yenye nguvu zaidi kuhusu mashine, kuhusu vitendakazi, ni kwamba nyingi zao zinakuruhusu kuweka taarifa fulani ndani yao, na unapoziendesha, taarifa hizo hubadilisha kile zinachofanya.

Hadi sasa, tumeona mashine zinazofanana kidogo na masanduku, kama ile ya `move` (sogea).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Mashine ya move, sanduku tupu lisilo na matundu ya ingizo"
  width="322"
  height="400"
/>

Lakini mashine zingine zina matundu, kama hii mashine ya `walk` (tembea). Mashine ya `walk` ni kama ile ya `move` tu. Inasogeza mhusika mbele, isipokuwa kwamba Jiki anaweza kutumia tundu hilo kubainisha ni hatua ngapi mhusika wako anapaswa kutembea mbele. Kwa hivyo, badala ya kutumia kitendakazi cha `move` mara tatu mfululizo, `move`, `move`, `move`, sasa unaweza kutumia kitendakazi cha `walk` na kumwambia Jiki aweke namba tatu kwenye mashine.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Mashine ya walk, yenye tundu la ingizo juu kwa ajili ya idadi ya hatua"
  width="481"
  height="400"
/>

Kufanya hivi kwenye msimbo, bado tunaandika jina la kitendakazi, kwa hapa `walk`, na bado tunaweka mabano yetu ya kufungua. Lakini kisha, kabla ya mabano ya kufunga, tunasema tunataka ingizo (_input_ kwa Kiingereza) liwe nini. Kwa hivyo hapa, tunataka ingizo liwe tatu, kumaanisha `walk` hatua tatu mbele:

```javascript
walk(3)
```

Jiki anapoona hivyo, atachukua namba tatu, na unaweza kuifikiria namba hiyo kama sarafu ndogo, naye ataweka hiyo kwenye tundu la ingizo la mashine kabla ya kuzungusha mpini kuiwasha.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki akiangusha namba 3 kama sarafu ndani ya tundu la mashine ya walk, kisha akizungusha mpini"
  width="421"
  height="400"
/>

Kwa vitendakazi vinavyochora mistatili na miduara, unahitaji kumwambia Jiki aingize namba kadhaa tofauti, akibainisha mambo kama umbali wake kutoka kushoto, umbali wake kutoka juu, upana wa mstatili, na urefu wa mstatili.

Katika ulimwengu wa Jiki, hizo ni tundu tofauti tu, moja kwa kila namba.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Mashine ya mstatili yenye matundu ya kushoto, juu, upana, urefu, na mashine ya duara yenye matundu ya cx, cy, radius"
  width="396"
  height="400"
/>

Kwa hivyo kwenye msimbo wetu, tunaandika kila namba tu kisha kuweka koma katikati. Jina la kitendakazi, bano la kufungua, namba kwa kila ingizo, zote zikitenganishwa na koma, na kisha tunafunga mabano yetu:

```javascript
rectangle(10, 20, 30, 40)
```

Ukijaribu kutumia kitendakazi chenye idadi isiyo sahihi ya ingizo, utapata hitilafu. Kwa mfano, ukijaribu kuweka ingizo moja kwenye mashine isiyo na tundu, Jiki atakuambia huwezi. Na ukijaribu kutumia mashine iliyo na tundu la ingizo lakini usimwambie Jiki aweke nini ndani yake, naye pia atasimama na kulalamika. Jaribu ikiwa unajisikia mwasi kidogo, uone kitakachotokea. Utafanya makosa mengi kama haya kadiri mambo yanavyozidi kuwa magumu. Jaribu usipate msongo wa mawazo wala usikasirike kwa sababu ya hilo. Sote tunajifunza kwa kufanya makosa. Kwa kweli ni njia ya haraka zaidi kwa akili zetu kuyaelewa mambo kwa dhati. Na kila mtu hufanya makosa haya. Sote tulianza kutoka sifuri, kwa hivyo usikate tamaa.

Jambo lingine linalofaa kutajwa: wakati mwingine kwenye mazoezi, utaona mistari inayoanza na mikwaju miwili, `//`. Hii inaitwa maoni (_comment_ kwa Kiingereza). Ni madokezo ya faragha kwa ajili yako mwenyewe ambayo Jiki atayapuuza kabisa. Kwa hivyo Jiki akiona mstari unaoanza na mikwaju hii miwili, ataupita tu, na ataendelea hadi mstari unaofuata. Maoni haya yanakupa njia ya kuandika madokezo yako mwenyewe. Ni muhimu sana kwa kukukumbusha jinsi mambo yanavyofanya kazi. Mara nyingi, maoni huwa yameandikwa kwa ajili yako pia, ili unapoanza zoezi, yanaweza kukudokeza mahali unapaswa kuandika msimbo au jinsi ya kutatua jambo fulani. Lakini jisikie huru kuongeza maoni yako mwenyewe pia.

Chini ya maelekezo ya zoezi, utaona taarifa kuhusu vitendakazi unavyoweza kutumia, na ingizo kamili ambazo unahitaji kuweka.
