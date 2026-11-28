---
title: "Kuongeza Maingizo kwenye Vitendakazi"
description: "Kuongeza matundu ya ingizo kwenye vitendakazi vyako mwenyewe ili viweze kufanya mambo tofauti kulingana na thamani zinazopitishwa."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Vitendakazi ulivyounda hadi sasa hufanya kitu kile kile kila wakati. `turnAround` (geuka pande nyingine) hugeuka kushoto mara mbili kila wakati. `shootIfAlienAbove` (piga risasi ikiwa kuna alien juu yako) hukagua na kupiga risasi kila wakati.

Lakini fikiria vitendakazi ulivyokuwa ukitumia katika kozi yote, jinsi vinavyofanya mambo tofauti kulingana na maingizo. Rectangle inachukua kushoto, juu, upana na urefu kama maingizo, kisha huchora mstatili tofauti kulingana na unachomwambia.

Sasa tutaongeza matundu ya ingizo kwenye vitendakazi vyako mwenyewe pia.

Ili kufanya hivi, unahitaji kujua mambo mawili. La kwanza ni jinsi hii inavyoonekana kwa hakika, ni nini unahitaji kuandika, na la pili ni kile kinachotokea kwa hakika.

Sehemu ya kwanza ni rahisi kueleweka. Unaongeza tu mabano ya kawaida, kisha majina ya maingizo yoyote unayotaka.

Kwa hiyo fikiria tunaunda kitendakazi kinachopaswa kupiga risasi mara nyingi. Hebu tukiite `shootMany` (piga risasi nyingi).

Tungeandika hivi:

```javascript
function shootMany(numShots) {
  // ...
}
```

Unapotaka kutumia kitendakazi hiki, unakiita kwa idadi ya risasi unazotaka:

```javascript
shootMany(5)
shootMany(2)
```

Sasa, hii ndiyo sehemu muhimu. Msimbo unapoendeshwa, chochote unachoweka kwenye ingizo hilo, `5` au `2`, mini-Jiki, yule aliye na kofia ndani ya kitendakazi, anachukua ingizo hilo na kuliweka kwenye sanduku linaloitwa `numShots` (idadi ya risasi), kisha analiweka sanduku hilo kwenye rafu ndani ya kitendakazi ili uweze kulitumia katika msimbo wa kitendakazi.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki ndani ya mashine ya shootMany akiweka ingizo kwenye sanduku lenye lebo numShots"
  width="500"
  height="376"
/>

Hebu niseme tena.

Tunapoandika `shootMany(5)` kutumia kitendakazi hicho, Jiki aliye nje anaenda kuchukua `5` na kuiweka kwenye tundu la ingizo la `shootMany`. Ndani ya mashine, mini-Jiki anatoa hiyo `5` na kuiweka kwenye sanduku linaloitwa `numShots`, kwa sababu hilo ndilo jina ulilotoa kwa tundu hilo la ingizo, kisha anaweka sanduku hilo kwenye rafu ndani ya kitendakazi kilicho ndani ya mashine.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki akiweka sanduku la numShots kwenye rafu ndani ya mashine ya shootMany"
  width="500"
  height="302"
/>

Na kisha ndani ya kitendakazi, unaweza kutumia tu sanduku la `numShots` kama vile ungetumia sanduku lingine lolote. Hakuna lolote la kichawi kuhusu jina `numShots`. Tungeweza kuliita lolote tulilotaka. Ni maagizo tu kwa mini-Jiki kuunda kila wakati sanduku lenye lebo hiyo ndani ya kitendakazi, na kuweka chochote kinachopitishwa kwenye tundu hilo ndani ya sanduku hilo.

Na mara tu unapokuwa na thamani kwenye sanduku hilo, unaweza kufanya chochote unachofanya kawaida na masanduku. Unaweza kutumia sanduku la `numShots` ndani ya `repeat` kitanzi ili kupiga risasi idadi sahihi ya mara. Na unaweza kuwa na maingizo zaidi ya moja pia. Tenganisha tu kwa koma. Kwa hiyo, ikiwa tuna kitendakazi kinachoitwa `drawStar` (chora nyota) kinachochora nyota kulingana na nafasi yake ya juu kushoto, tungekiandika hivi:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Mashine ya drawStar yenye matundu mawili ya ingizo, ikichukua thamani mbili tofauti"
  width="453"
  height="400"
/>

Na kisha kitendakazi kinapoitwa, mini-Jiki ataweka tu thamani zinazopitishwa kwenye maingizo kwenye masanduku yenye majina `left` (kushoto) na `top` (juu), kisha ataweka masanduku hayo kwenye rafu ndani ya kitendakazi.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki akihifadhi maingizo mawili kwenye masanduku yenye lebo left na top kwenye rafu ndani ya mashine ya drawStar"
  width="431"
  height="400"
/>
