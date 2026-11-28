---
title: "Rangi"
description: "Njia mbili za kubainisha rangi yoyote unayotaka. RGB inachanganya mwanga wa nyekundu, kijani na bluu. HSL inatumia mwelekeo wa rangi, ukolevu na mwanga."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Kama utawahi kufanya kitu chochote cha kuonekana kwa macho kwa kutumia msimbo (na hata kama unataka kuwa mtaalamu wa data na unafikiri mambo yote ya kuchora ni ya kuchosha kidogo, kuwasilisha data kwa njia zinazoonekana ni ujuzi muhimu), kuna njia mbili tofauti za kueleza rangi. Tayari umekuwa ukitumia rangi kwa majina yao kama nyekundu au njano kama ingizo la mwisho katika vitendakazi vyako vya kuchora, na hiyo imekuwa njia nzuri ya kutumia rangi haraka, lakini ina mipaka sana. Kuna rangi chache tu zenye majina ambazo tunaweza kutumia. Kwa hiyo sasa tutaangalia njia mbili za kueleza rangi yoyote unayotaka, na hizo mbili zinaitwa RGB na HSL.

RGB inatuwezesha kufikiri juu ya rangi kama mchanganyiko wa nyekundu, kijani na bluu. Ndiyo maana ya RGB: nyekundu (_red (R)_ kwa Kiingereza), kijani (_green (G)_ kwa Kiingereza), bluu (_blue (B)_ kwa Kiingereza). Kama unakumbuka kuchanganya rangi za kupaka shuleni, ni wazo kama hilo, isipokuwa badala ya rangi ya kupaka, tunachanganya mwanga.

Katika mazoezi mengi, utakuwa na kitendakazi kinachoitwa `rgb`, na kitachukua namba tatu kama ingizo, moja kwa nyekundu, moja kwa kijani, moja kwa bluu, na kitarejesha rangi.

Namba unazoweza kutumia kama ingizo zinaanzia sifuri hadi `255`. Sifuri inamaanisha sitaki rangi hiyo kabisa, na `255` inamaanisha changanya rangi hiyo kwa kiwango cha juu iwezekanavyo. Kwa hiyo tukitumia kitendakazi `rgb` tukiweka `255`, sifuri na sifuri kama ingizo, tunasema nataka nyekundu yote. Kumbuka kwamba `255` ni namba kubwa zaidi unayoweza kuweka hapo. Lakini hatutaki kijani wala bluu yoyote, kwa hiyo zote mbili ni sifuri. Kwa hiyo tunapata nyekundu, na tunaweza kuhifadhi nyekundu hiyo kwenye variable na kisha kuitumia katika kitendakazi cha `circle` kama tulivyokuwa tukifanya na string zenye majina. Sasa vipi kama tutatumia kitendakazi `rgb` tukiweka sifuri, `255`, sifuri? Sasa tunasema hakuna nyekundu, kijani kote, hakuna bluu. Kwa hiyo tunapata duara la kijani. Vipi kama tunataka njano? Njano ni mchanganyiko wa nyekundu na kijani. Kwa hiyo tunaweza kusema nipe nyekundu yote, kijani kote, na hakuna bluu, na hiyo itatupa njano. Na tunaweza kutumia namba ndogo ndogo. Kwa hiyo tukitaka nyekundu kidogo, hakuna kijani, na bluu nyingi, tunapata zambarau. Na nyekundu nyingi, kijani kidogo, bluu kidogo zaidi, hiyo inatupa pinki. Kwa hiyo hiyo ndiyo RGB. Tunachanganya nyekundu, kijani na bluu kupata michanganyiko tofauti.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Duara tatu zinazopishana za mwanga wa nyekundu, kijani na bluu zikichanganyika na kutengeneza njano, magenta, cyan na nyeupe"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Sasa hebu tuangalie HSL, inayotupa njia tofauti kabisa ya kufikiri juu ya rangi. HSL ni kifupi cha mwelekeo wa rangi (_hue (H)_ kwa Kiingereza), ukolevu (_saturation (S)_ kwa Kiingereza), na mwanga (_lightness (L)_ kwa Kiingereza). Na kama ilivyo kwa RGB, unakuwa na kitendakazi kinachoitwa `hsl` kinachochukua namba tatu, moja kwa mwelekeo wa rangi, moja kwa ukolevu, na moja kwa mwanga, na kitarejesha rangi. Kwa hiyo hebu tuchambue maana ya maneno hayo matatu.

Mwelekeo wa rangi ni aina ya rangi unayotaka (_shade_ kwa Kiingereza), na unaanzia sifuri hadi 360. Labda fikiria upinde wa mvua. Hivi ndivyo mimi hufikiri kuhusu hilo. Upande wa kushoto tuna nyekundu, kisha tuna machungwa, njano, kijani, bluu, zambarau, na kwa kweli tunarudi hadi kwenye nyekundu. Kwa hiyo ukisema sifuri, unaanzia kushoto, na hiyo ni nyekundu. Ukisema `120`, unaomba kijani. `230` ni bluu. Unaweza pia kufikiria hii kama gurudumu la rangi (_color wheel_ kwa Kiingereza), ambalo ndilo 360 hasa. Ni idadi ya digrii katika duara. Mimi huwa natafuta tu namba ninazotaka, kwa hiyo usijali sana kujaribu kukariri hivi, lakini ni vizuri kujua kinachoendelea. Kwa hiyo huo ni mwelekeo wa rangi, ambao ni aina ya rangi. Kisha tuna ukolevu, ambao ni jinsi rangi ilivyojaa na yenye nguvu. Unaanzia sifuri hadi 100. Kwenye sifuri, unapata kijivu tu. Hakuna rangi, hakuna toni ndani yake kabisa. Kwenye 100, unapata rangi kamili, iliyojaa na yenye nguvu. Na kisha tuna mwanga. Mwanga ni jinsi rangi inavyong'aa, na hiyo nayo inaanzia sifuri hadi 100. Kwenye sifuri, unapata nyeusi. Haijalishi umechagua mwelekeo gani wa rangi, unapata nyeusi. Hakuna mwanga ndani yake. Na kwenye 100, unapata nyeupe. Haijalishi kitu kingine chochote, imejaa mwanga tu, kwa hiyo ni nyeupe. 50 iko katikati kabisa, rangi ya kawaida. Kwa hiyo unaweza kufikiria hii kama kiteleza (_slider_ kwa Kiingereza) cha kufanya rangi iwe angavu zaidi au nyeusi zaidi.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Upinde wa mvua na gurudumu la rangi linaloonyesha mwelekeo wa rangi kuanzia 0 (nyekundu) hadi 120 (kijani) hadi 240 (bluu)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Kiteleza cha ukolevu kutoka 0 (kijivu) kupitia 50 hadi 100 (magenta iliyojaa rangi)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Kiteleza cha mwanga kutoka 0 (nyeusi) kupitia 50 (rangi kamili) hadi 100 (nyeupe)"
  width="500"
  height="398"
/>

Kwa hiyo tukitaka duara la kawaida la nyekundu, ambalo tungekuwa tumeandika kama 255, sifuri, sifuri kwa RGB, nyekundu yote, hakuna kijani, hakuna bluu, hapa tungetumia sifuri, 100, 50. Sifuri kwa mwelekeo wa rangi nyekundu, 100 kwa ukolevu, rangi kamili, na 50 kwa mwanga, ambao ni kiwango cha kawaida cha mwanga. Tukitaka kulifanya hilo duara la kijani, tunaweza kubadilisha tu mwelekeo huo wa rangi uwe `120`. Tukitaka kulifanya kijani cha giza zaidi, tunaweza kupunguza mwanga hadi `25`.

Tukitaka kulifanya kijani hafifu zaidi, tunaweza kuondoa sehemu ya rangi, sehemu ya ukolevu, tuseme tuipunguze hadi `30`.

Kama unataka pinki angavu na kali, mwelekeo wa rangi wa karibu 300 ni pinki, kisha tunapandisha ukolevu hadi 100 kuifanya iwe na nguvu kweli kweli, na tunapandisha pia mwanga hadi karibu 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Kwa hiyo tuna njia mbili tofauti za kueleza rangi, na zinafaa katika hali tofauti. RGB ni nzuri unapotaka kurekebisha sehemu moja maalum, ni kiasi gani cha nyekundu, kiasi gani cha kijani, kiasi gani cha bluu. HSL ni nzuri unapotaka kupitia rangi mbalimbali kwa mzunguko. Kama unataka upinde wa mvua, unaweza kuendelea kuongeza mwelekeo wa rangi tu.
