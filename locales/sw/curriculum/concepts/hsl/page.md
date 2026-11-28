---
title: "Rangi za HSL"
description: "Kujenga rangi kutoka kwa aina ya rangi (kivuli, 0–360), ukolezi (jinsi ilivyojaa, 0–100) na mwanga (jinsi ilivyo angavu, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL inatupatia njia tofauti kabisa ya kufikiri kuhusu rangi kuliko RGB. HSL ni kifupi cha aina ya rangi (_hue (H)_ kwa Kiingereza), ukolezi (_saturation (S)_ kwa Kiingereza) na mwanga (_lightness (L)_ kwa Kiingereza). Unayo kitendakazi kinachoitwa `hsl` ambacho kinachukua namba tatu, moja kwa aina ya rangi, moja kwa ukolezi, na moja kwa mwanga, na kinarejesha rangi. Kwa hiyo hebu tuchambue maana ya maneno hayo matatu.

```javascript
hsl(hue, saturation, lightness)
```

Aina ya rangi ndiyo rangi unayoitaka, nayo inaanzia sifuri hadi 360. Labda fikiria upinde wa mvua. Hivi ndivyo mimi ninavyofikiria. Upande wa kushoto tuna nyekundu, kisha tuna machungwa, njano, kijani, bluu, zambarau, na kwa kweli tunarudi hadi kwenye nyekundu. Kwa hiyo ukisema sifuri, unaanzia kushoto, na hiyo ni nyekundu. Ukisema `120`, unaomba kijani. `230` ni bluu. Unaweza pia kufikiria hii kama gurudumu la rangi, ambalo ndilo 360 hasa. Ni idadi ya digrii zilizo kwenye duara. Mimi huwa ninatafuta tu namba ninazozitaka, kwa hiyo usijali sana kuhusu kukariri hivi, lakini ni vizuri kujua kinachoendelea. Kwa hiyo hiyo ndiyo aina ya rangi, yaani kivuli cha rangi. Kisha tuna ukolezi, ambao ni jinsi rangi ilivyojaa. Unaanzia sifuri hadi 100. Kwa sifuri, unapata kijivu tu. Hakuna rangi, hakuna toni ndani yake hata kidogo. Kwa 100, unapata rangi kamili, iliyojaa, iliyo na nguvu. Na kisha tuna mwanga. Mwanga ni jinsi rangi ilivyo na mwangaza, na huo unaanzia sifuri hadi 100 pia. Kwa sifuri, unapata nyeusi. Haijalishi umechagua aina gani ya rangi, unapata nyeusi. Hakuna mwanga ndani yake. Na kwa 100, unapata nyeupe. Haijalishi kingine chochote, imejaa mwanga tu, kwa hiyo ni nyeupe. 50 ni katikati kabisa, yaani rangi ya kawaida. Kwa hiyo unaweza kufikiria hii kama kitelezi cha kuifanya rangi iwe angavu zaidi au nyeusi zaidi.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Gurudumu la rangi na upinde wa mvua unaoonyesha kuwa 0 ni nyekundu, 120 ni kijani na 240 ni bluu"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Kitelezi cha ukolezi kutoka 0 (kijivu) kupitia 50 hadi 100 (rangi kamili iliyojaa)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Kitelezi cha mwanga kutoka 0 (nyeusi) kupitia 50 hadi 100 (nyeupe)"
  width="500"
  height="398"
/>

Kwa hiyo tukitaka duara la kawaida la rangi nyekundu, ambalo kwa RGB tungeandika kama 255, sifuri, sifuri (nyekundu yote, hakuna kijani, hakuna bluu), hapa tungetumia sifuri, 100, 50. Sifuri kwa aina ya rangi nyekundu, 100 kwa ukolezi, yaani rangi kamili, na 50 kwa mwangaza, ambao ni kiwango cha kawaida cha mwangaza. Tukitaka kuifanya duara la kijani, tunaweza kubadilisha tu aina hiyo ya rangi kuwa `120`. Tukitaka kuifanya kijani cha giza zaidi, tunaweza kupunguza mwanga hadi `25`.

```javascript
hsl(0, 100, 50) // nyekundu
hsl(120, 100, 50) // kijani
hsl(120, 100, 25) // kijani cha giza
```

Tukitaka kuifanya kijani kilichofifia zaidi, tunaweza kuondoa sehemu ya rangi, sehemu ya ukolezi, tuseme tuishushe hadi `30`.

Ukitaka pinki angavu na moto, aina ya rangi karibu 300 ni pinki, kisha tunapandisha ukolezi hadi 100 ili iwe na nguvu kweli, na tunapandisha pia mwanga hadi karibu 60.

HSL ni nzuri sana unapotaka kupitia rangi mbalimbali kwa mzunguko. Ukitaka upinde wa mvua, unaweza kuendelea kuongeza aina ya rangi tu.
