---
title: "Kupata herufi kwa nafasi katika string"
description: "Kutumia mabano ya mraba na namba ya nafasi kuchukua herufi moja kutoka kwenye string. Kumbuka kwamba nafasi zinaanza na sifuri."
en_md5: cd31e0366b3090b358494667003f54c9
---

Fikiria una jina langu, Jeremy, na unataka kuchukua herufi yake ya kwanza, J, kutoka humo. Tutaifanyaje hiyo?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki akifikiria jinsi ya kuchukua herufi moja kutoka kwenye string"
  width="361"
  height="353"
/>

Unaweza kufikiria string kama mfululizo wa herufi. Kwa hivyo `"Jeremy"` ina herufi sita, J-E-R-E-M-Y, na kila moja ina nafasi yake. `"J"` iko katika nafasi ya kwanza, na `"y"` iko katika nafasi ya mwisho.

Sasa, katika JavaScript na lugha nyingi za programu, nafasi hizi zinaanza na sifuri. Kwa hivyo herufi ya kwanza `"J"` iko katika nafasi ya sifuri, kisha tunapata `"e"` katika nafasi ya moja, `"r"` katika mbili, `"e"` katika tatu, `"m"` katika nne, na `"y"` katika tano.

Sasa, hili suala la kuanza na sifuri ni la ajabu sana, na kwa kweli, maisha yangekuwa rahisi kama tungeanza kuhesabu kutoka moja, kama ilivyo katika ulimwengu wa kawaida. Lakini hatufanyi hivyo. Katika lugha nyingi za programu, tunaanza kuhesabu kutoka sifuri badala yake, kwa hivyo unachohitaji ni kuijifunza hiyo.

Kwa hivyo, kama tunataka kuchukua herufi katika nafasi fulani, tunaweza kutumia mabano ya mraba tukiweka namba ndani yake.

Kwa hivyo, tukisema `"Jeremy"[0]`, tunamaanisha nipe herufi ya kwanza ya neno `"Jeremy"`.

Tukisema `"Jeremy"[1]`, tunamaanisha nipe herufi ya pili.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Na tunaweza kufanya hivi na variable pia. Kwa hivyo, tukitengeneza variable inayoitwa `name` (jina) na kuweka thamani yake kuwa string `"Jeremy"`, basi tunaweza kufanya `name[0]`, na tutapata `"J"` tena.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Jambo moja la kuelewa wazi: unachopata kutoka `name[0]` ni string nyingine tu. Ni karatasi nyingine iliyo na J juu yake. Hakuna kitu cha kipekee kuhusu hiyo. Ni string kama vile `"Jeremy"` ilivyo string.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki akiwa ameshika karatasi mpya iliyo na herufi J pekee"
  width="500"
  height="289"
/>

Inatokea tu kwamba ina herufi moja badala ya sita.

Na kufanya hivi hakuathiri string ya awali hata kidogo. Hatuondoi J wala kufanya kitu kama hicho. Tunachagua tu ni herufi ipi tunayotaka, kisha tunatengeneza string mpya yenye herufi hiyo ndani.
