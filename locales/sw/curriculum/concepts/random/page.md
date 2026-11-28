---
title: "Namba Nasibu"
description: "Kutumia `Math.randomInt` pamoja na kiwango cha chini na cha juu ili kupata namba tofauti kila mara kitendakazi kinapoendeshwa."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Mara nyingi katika kupanga programu, tunataka kutumia kitendakazi na kupata namba nasibu (_random number_ kwa Kiingereza) tofauti kila mara.

Hii ni muhimu kwa namna na mahali pengi, lakini hasa katika kriptografia, ambapo tunafanya mambo mengi kama kuunda misimbo ya kushirikiana kati ya mashine, na misimbo hiyo inahitaji kuwa nasibu ili isiweze kudukuliwa.

Kukusaidia na hili, una kitendakazi kinachoitwa `Math.randomInt` (Math ni hisabati, randomInt ni namba kamili nasibu). Huenda ukaona kuna nukta katikati ya hiyo. Unapopata vitendakazi zaidi, tunaweza kuviweka katika makundi tofauti ili kila kitu kiwe chenye mpangilio, na `Math` (kifupi cha hisabati) ni jina la kundi ambamo kitendakazi hiki kinapatikana. Inamwambia Jiki aangalie sehemu gani ya rafu, ambayo hapa ni sehemu ya `Math`. Nukta hiyo inamaanisha tu: nenda kwenye sehemu hii na utafute kitendakazi hicho. Usijisumbue sana na hili kwa sasa. Maelekezo ya zoezi yatakuambia kila mara vitendakazi vipi vinapatikana na jinsi ya kuvitumia. Jambo muhimu kuelewa ni hili: Jiki anapotumia kitendakazi hiki, kitampa namba tofauti kila mara anapokiendesha, lakini kuna sharti moja. Kitendakazi hiki kina maingizo mawili. La kwanza ni namba ndogo zaidi ambayo mashine inaruhusiwa kuirejesha, na la pili ni namba kubwa zaidi ambayo mashine inaruhusiwa kuirejesha. Kwa hiyo ukitumia kitendakazi cha `Math.randomInt` pamoja na `10` na `13`, utapata kila mara `10`, `11`, `12`, au `13` kurudi. Lakini utapata namba tofauti kila mara.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki akipanda ngazi kuelekea sehemu ya Math kwenye rafu za ghala lake"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Mashine ya Math.randomInt ikiwa na matundu mawili ya ingizo juu yake"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Mashine ya Math.randomInt ikiwa na 10 na 13 kwenye matundu yake ya ingizo, ikitoa 10, 11, 12 au 13"
  width="488"
  height="400"
/>

Hebu fikiri unataka kuchora duara mahali nasibu kwenye turubai. Unaweza kutumia `Math.randomInt` kupata thamani tofauti za `left` na `top` kwa nasibu kila mara, lakini ukiweka mipaka, tuseme `10` na `90`, ili zisitoke nje ya turubai. Kila mara unapoendesha msimbo huu, duara litachorwa mahali tofauti kidogo.
