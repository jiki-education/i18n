---
title: "Hesabu"
description: "Kuchanganya variable na hesabu ili thamani ziweze kuhusiana na kutegemeana kupitia kujumlisha, kutoa, kuzidisha, na kugawanya."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Hadi sasa tunapounda variable, tumekuwa tukitumia thamani rahisi tu; namba kama `50` au string kama `"yellow"`. Variable huwa na nguvu zaidi tunapoweza kuzitumia pamoja. Yaani tunapoweza kusema kwamba ukingo wa kushoto wa mstatili uwe umbali fulani kutoka ukingo wa turubai.

Katika kupanga programu, tunaweza kutumia hesabu za kawaida na rahisi, kama kujumlisha, kutoa, kuzidisha, na kugawanya, na tunaweza kutumia variable tulizokwisha weka kama sehemu ya hizo hesabu.

Hebu tuanze kwa kusema tunataka kuchora mstatili kwenye turubai yetu, na tunataka uanze 10 kutoka kushoto na 10 kutoka kulia, na 20 kutoka juu na 20 kutoka chini. Kwa hiyo utakuwa katikati ya turubai, ukiwa na upana mkubwa kidogo kuliko urefu wake.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Mstatili wa bluu ulio katikati ya turubai, 10 kutoka kushoto na kulia na 20 kutoka juu na chini"
  width="399"
  height="400"
/>

Tunapochora mstatili, tunahitaji kujua `left` (kushoto), `top` (juu), `width` (upana), na `height` (urefu), pamoja na rangi yake. Kwa hiyo tunaweza kuanza kwa kuandika hayo.

Na sasa tunahitaji kufikiri kwa kweli ni nini `left`, `top`, `width`, na `height` yake. Hebu tuziweke. `Left` ni 10. `Top` ni 20. `width`, kweli, `width` ni ukubwa wa turubai, ambao ni 100, ukitoa 10 ya kushoto na 10 ya kulia, kwa hiyo ni 80. Na `height` ni urefu wa turubai, ambao pia ni 100, ukitoa 20 ya juu na 20 ya chini, kwa hiyo 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Kwa hiyo tunaweza kuweka variable hizo. `Left`, 10, `top`, 20, `width`, 80, `height`, 60. Lakini nini kinatokea sasa ikiwa tunataka kusogeza mstatili ndani kidogo, kuufanya uwe mdogo kidogo? Ikiwa tunataka kuusogeza 20 kutoka kushoto na kulia na 30 kutoka juu na chini? Inatubidi twende tukahesabu kila kitu tena. `width` sasa ni 100 toa 20 toa 20, na `height` ni 100 toa 30 toa 30, na kwa kweli hii ni kazi na hesabu nyingi kuliko ninavyotaka kufanya. Kwa hiyo badala yake, tunaweza kumwambia kompyuta ifanye hivyo kwa ajili yetu.

Tunaweza kuweka `width` kuwa 100 toa `left` toa `left`, na `height` kuwa 100 toa `top` toa `top`, kwa sababu juu na chini ni sawa. Au tunaweza kuandika hiyo kama 100 toa `left` mara mbili, au 100 toa `top` mara mbili.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Na sasa tukibadilisha `left` au `top`, `width` na `height` pia zitabadilika. Kwa hiyo mambo yanaanza kuhusiana. Na turubai je? Hiyo ni 100 sasa. Lakini vipi ikiwa turubai yetu inabadilika kuwa 200 kwa upana na kwa urefu badala yake? Basa, labda tunapaswa kuweka variable inayoitwa `canvasSize` (ukubwa wa turubai) na kuiweka kuwa 100. Na sasa `width` yetu ni `canvasSize` toa `left` mara mbili, na `height` yetu ni `canvasSize` toa `top` mara mbili.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Hebu tufikiri Jiki anafanya nini tunapoandika let `height` sawa na `canvasSize` toa `top` mara mbili. Kweli, anaanza kwa kuchukua sanduku la `top` kutoka rafuni, na anapata 30 ndani yake, na anatoa kikokotoo chake cha mfukoni na kufanya 30 mara mbili, na anajiwekea akilini 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki akichukua sanduku la top kutoka rafuni na kugundua kuwa 30 mara mbili ni 60"
  width="377"
  height="400"
/>

Na kisha anachukua sanduku la `canvasSize` kutoka rafuni, anapata 100 ndani yake, na anagundua kuwa 100 toa 60 ni 40. Na sasa anajua kwamba kwa kweli tunachosema ni let `height` sawa na 40. Kwa hiyo anafuata ile let, akichukua sanduku jipya na kuandika `height` juu yake, kisha anaweka 40 ndani yake. Na baadaye anapotumia `height`, anatoa tu ile 40 tena.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki akichukua sanduku jipya, akiandika height juu yake, na kuweka 40 ndani"
  width="462"
  height="400"
/>

Mara tu kila kitu kinapofanya kazi katika zoezi, jaribu kubadilisha thamani za variable na uone kinachotokea. Angalia jinsi zinavyokua na jinsi zinavyopungua. Chukua muda wako, fikiri kuhusu uhusiano kati ya mambo.
