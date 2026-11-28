---
title: "Vitanzi Ndani ya Vitanzi"
description: "Kuweka kitanzi kimoja ndani ya kingine ili kitanzi cha ndani kikamilike kwa kila hatua ya kitanzi cha nje, jambo ambalo linafaa sana kwa gridi."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Hebu tuseme tunataka mstari wa maua. Tunaweza kuandika kitu kama hiki. Tunaweka nafasi, tunapanda ua, tunaongeza nafasi kwa 10, tunarudia, na mwishowe tunapata mstari mzuri wa maua uliopangwa vizuri.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki kwenye ubao akiwa na mstari mmoja mzuri wa maua uliopandwa chini yake"
  width="406"
  height="400"
/>

Lakini vipi ikiwa tunataka gridi ya maua yenye mistari na safu? Labda mistari minne yenye maua matano katika kila mstari.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Gridi ya maua ya mistari minne kwa mitano huku Jiki akifikiria jinsi ya kuichora"
  width="383"
  height="400"
/>

Tuna kitanzi kinachochora mstari mmoja wa maua. Unawezaje kukitumia kuchora mistari minne? Au tunaweza kufanya nini ili kuchora mistari minne?

Njia moja inaweza kuwa kunakili na kubandika kitanzi hicho mara nne na kubadilisha nafasi ya juu kwa kila kimoja. Hiyo itafanya kazi. Itakuwa sawa. Lakini inarudia rudia, na kuna njia bora. Tunajua kwamba msimbo unaporudia rudia, tunaweza kutumia kitanzi kurahisisha mambo.

Kwa hiyo hapa tunaweza kutumia kitanzi kimoja ndani ya kitanzi kingine. Kitanzi kimoja kwa mistari na kingine kwa maua ya mstari huo. Hebu tuanze kwa kuongeza kitanzi cha repeat kuzunguka msimbo wetu uliopo ili uone jinsi hii inavyokwenda. Na tutarudia mara moja tu. Kwa hiyo tunamwambia Jiki afanye kila kitu kilicho ndani ya mabano yaliyopinda ya nje mara moja. Hivyo hii ina athari sawa kabisa na kutokuwa na kitanzi hiki cha nje kabisa. Tunamwambia Jiki arudie kitu mara moja, ambayo ni sawa kabisa na kumwambia Jiki afanye hivyo bila repeat. Lakini hivi ndivyo msimbo huu unavyofanya kazi. Ni msimbo halali na sahihi. Tuna kitanzi kimoja ndani ya kitanzi kingine.

Kwa hiyo sasa nini kinatokea ikiwa tunabadilisha kitanzi hicho cha nje kirudie mara mbili? Sasa Jiki atafanya kile kitu kizima cha `plant` (panda) mara tano, mara mbili. Atapanda maua 10. Lakini yote hayo yatakuwa kwenye mstari mmoja.

Kwa hiyo, kama vile tunavyohitaji kusogeza nafasi kutoka kushoto kwenda kulia kidogo kila mara, baada ya kuchora kila mstari kamili, tunahitaji pia kusogeza nafasi ya wima. Kwa hiyo tunafanyaje hilo? Tunaweza kuongeza variable ya nje kwa nafasi ya juu, kuitumia katika kitendakazi chetu cha `plant`, kisha kuiongeza kwa 10 baada ya kila mstari.

Kwa hiyo fikiria thamani inakuwa nini kila wakati. Nafasi ya juu inaanza kwa 10. Mara tano za kwanza tunapopanda, inabaki hivyo. Nafasi ya kushoto inaongezeka. Kisha tunaongeza 10 nyingine kwenye hiyo nafasi ya juu, na tunapanda maua mengine matano chini kidogo. Tunairudisha nafasi ya kushoto kwenye 10 tena, kisha tunaiongeza tena kila mara.

Na sasa tunaweza kusema rudia hili mara nne, na tutapata mistari minne ya maua matano.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Gridi ya maua ya mistari minne kwa mitano iliyokamilika, huku Jiki mwenye furaha akionesha vidole gumba viwili juu"
  width="389"
  height="400"
/>

Jambo la muhimu kuelewa ni kwamba Jiki hukamilisha kazi yote ya kitanzi cha ndani (_inner loop_ kwa Kiingereza) kabla ya kurudi kwenye kitanzi cha nje (_outer loop_ kwa Kiingereza). Hajirukii huku na huko. Anakamilisha kitanzi cha ndani, kisha anaendelea na hatua inayofuata ya kitanzi cha nje.

Katika hali hii, unaweza kufikiria kitanzi cha nje kama kinachodhibiti vikundi au mstari, na kitanzi cha ndani kama kinachodhibiti kila kipengele katika kikundi hicho au kila kipengele katika mstari huo. Kwa hiyo katika mfano wetu, kitanzi cha nje kinaunda mistari minne, na kitanzi cha ndani kinaweka mimea mitano, vipengele vitano katika kila kikundi.
