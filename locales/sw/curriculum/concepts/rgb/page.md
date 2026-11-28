---
title: "Rangi za RGB"
description: "Kuchanganya mwanga wa nyekundu, kijani na bluu kutoka 0 hadi 255 ili kupata rangi yoyote unayotaka kwenye skrini."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB inatuwezesha kufikiria rangi kama mchanganyiko wa nyekundu, kijani na bluu. Hiyo ndiyo maana ya RGB: nyekundu (_red (R)_ kwa Kiingereza), kijani (_green_ kwa Kiingereza), bluu (_blue_ kwa Kiingereza). Kama unakumbuka kuchanganya rangi za kupaka shuleni, wazo ni kama hilo, ila badala ya rangi za kupaka, tunachanganya mwanga.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Maduara matatu yanayopishana ya mwanga nyekundu, kijani na bluu yanayochanganyika na kutoa njano, magenta, cyan na nyeupe"
  width="500"
  height="390"
/>

Katika mazoezi mengi, utakuwa na kitendakazi kinachoitwa `rgb(red, green, blue)`, na kitachukua namba tatu kama ingizo, moja kwa nyekundu, moja kwa kijani, moja kwa bluu, na kitarejesha rangi.

Namba unazoweza kutumia kama ingizo zinaanzia sifuri hadi `255`. Sifuri inamaanisha sitaki rangi hiyo kabisa, na `255` inamaanisha changanya rangi hiyo kwa kiwango cha juu iwezekanavyo. Kwa hiyo tukitumia kitendakazi cha `rgb` tukiweka `255`, sifuri na sifuri kama ingizo, tunasema nataka nyekundu yote. Kumbuka kwamba `255` ni namba kubwa zaidi unayoweza kuweka hapo. Lakini hatutaki kijani wala bluu yoyote, kwa hiyo zote mbili ni sifuri. Kwa hiyo tunapata nyekundu, na tunaweza kuhifadhi hiyo nyekundu kwenye variable kisha kuitumia katika kitendakazi cha `circle` kama tu tulivyokuwa tukifanya na string zilizo na majina. Sasa vipi tukitumia kitendakazi cha `rgb` tukiweka sifuri, `255`, sifuri? Sasa tunasema hakuna nyekundu, kijani chote, hakuna bluu. Kwa hiyo tunapata duara la kijani. Je, tukitaka njano? Njano ni mchanganyiko wa nyekundu na kijani. Kwa hiyo tunaweza kusema nipe nyekundu yote, kijani chote, na bluu hakuna, nayo itatupa njano. Na tunaweza kutumia namba ndogo zaidi. Kwa hiyo tukitaka nyekundu kidogo, hakuna kijani, na bluu nyingi, tutapata rangi ya zambarau. Na nyekundu nyingi, kijani kidogo, bluu kidogo zaidi, hiyo inatupa rangi ya pinki. Ndiyo hiyo RGB. Tunachanganya nyekundu, kijani na bluu ili kupata michanganyiko tofauti.

```javascript
rgb(255, 0, 0) // nyekundu
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Duara la nyekundu linalotokana na rgb(255, 0, 0), nyekundu yote na hakuna kijani wala bluu"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // njano
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Duara la njano linalotokana na rgb(255, 255, 0), nyekundu yote na kijani chote bila bluu"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // pinki
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Duara la pinki linalotokana na rgb(230, 50, 170), nyekundu nyingi, kijani kidogo na bluu kiasi"
  width="436"
  height="400"
/>

RGB ni nzuri unapotaka kurekebisha component moja mahususi, kiasi gani cha nyekundu, kiasi gani cha kijani, kiasi gani cha bluu.
