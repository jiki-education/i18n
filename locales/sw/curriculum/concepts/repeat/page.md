---
title: "Kitanzi cha `repeat`"
description: "Kutumia neno muhimu `repeat` kumwambia Jiki aendeshe msimbo ulio ndani ya mabano yaliyopinda idadi maalum ya mara."
en_md5: f37a63911f75934656cbf04a38ff2b60
---

Hadi sasa, kila kitu kimeandikwa kwa mtindo wa mstari, ambapo Jiki hufuata kila agizo kwa mpangilio kuanzia juu hadi chini.

Sasa tutaangalia jinsi Jiki anavyoweza kuvunja mtiririko huu mkali wa juu hadi chini, na hasa jinsi tunavyoweza kumwambia Jiki aendeshe sehemu hiyo hiyo ya msimbo mara nyingi mfululizo.

Kwa mfano, fikiria uko kwenye labirinthi na unataka kusonga hatua 10 mbele. Kuna kitendakazi cha `walk` kinachosaidia hili, lakini vipi kama hicho hakikuwepo? Vipi kama ungekuwa na kitendakazi cha `move` (sogea) pekee?

Badala ya kuandika `move` mara 10 mfululizo, jambo ambalo hurudia rudia sana, tunachohitaji kuweza kufanya ni kumwambia: "Jiki, fanya kitu kinachofuata nitakachosema mara 10.

`Move`."

Ili kufanya hivi kwenye msimbo, tunahitaji kutumia _keyword_ (neno muhimu la lugha ya programu) yetu ya kwanza, na keyword ni maagizo ambayo Jiki anayaelewa. Zinaonekana kidogo kama mashine, lakini si mashine. Jiki anapoona keyword, hataangalia mashine kwenye rafu, badala yake anajua tu kwamba afanye jambo fulani. Imejengwa ndani ya ubongo wake. Na kuna takriban keyword 20 tofauti ambazo tutajifunza wakati wa kozi, na ya kwanza kati yao ni keyword ya `repeat`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-keywords-2.webp"
  alt="Jiki amezungukwa na keyword kama repeat, if, else, and, or, pamoja na dokezo kwamba keyword ni maagizo ambayo Jiki anayaelewa"
  width="358"
  height="400"
/>

Keyword ya `repeat` inafanya kwa hakika yale niliyoyasema hapo juu. Inamwambia Jiki: "Rudia mara hii kitu chochote nitakachosema kinachofuata." Hebu tuangalie msimbo huu. Kwanza kabisa, tutatumia keyword ya `repeat` kumwambia Jiki kwamba atafanya jambo fulani mara nyingi. Kisha, ndani ya mabano ya duara, tunaweka ni mara ngapi unataka Jiki arudie jambo hilo, na kisha tunakuwa na mabano haya yaliyopinda, haya yenye mikunjo, na ndani ya mabano hayo yaliyopinda ndiyo yale tunayotaka Jiki ayarudie. Sasa, mtindo huu umeenea sana katika kupanga programu. Tunabainisha keyword, kwa kawaida ikiwa na taarifa fulani kama vile idadi ya mara ya kufanya jambo fulani katika kesi hii, na kisha kizuizi cha msimbo (_code block_ kwa Kiingereza) ndani ya mabano yaliyopinda. Kwa hiyo tukirudi kwenye ulimwengu wa labirinthi, badala ya kuandika `move`, `move`, `move`, `move`, tunaweza kuandika repeat mara nne kisha `move`.

```javascript
repeat(4) {
  move()
}
```

Jiki ataona msimbo huo na atatumia mashine ya `move` mara nne mfululizo.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-running-loop.webp"
  alt="Jiki akitumia mashine ya move mara nne mfululizo, moja baada ya nyingine"
  width="421"
  height="400"
/>

Na hatulazimiki kuweka kitu kimoja tu ndani ya mabano hayo yaliyopinda. Jiki anaweza kufanya mambo kadhaa kwa kurudia. Tunaweza kumwambia Jiki afanye `move`, kisha `turnLeft`, na kurudia yote hayo mara nne. Jiki akiona hivi, atatumia mashine ya `move`, kisha mashine ya `turnLeft`, kisha mashine ya `move`, kisha mashine ya `turnLeft`, kisha mashine ya `move`, na kadhalika, hadi atakapomaliza zote mbili mara nne.

```javascript
repeat(4) {
  move()
  turnLeft()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/if-else-code.webp"
  alt="Jiki akitumia mashine ya move kisha mashine ya turnLeft, akirudia jozi hiyo ya vitendo mara nne"
  width="500"
  height="390"
/>

Tunaita maagizo haya ya kurudia vitanzi (_loops_ kwa Kiingereza), na kuna vitanzi vingi tofauti tunavyoweza kutumia ambavyo hufanya kazi kwa namna tofauti kidogo.

Kuna jambo moja zaidi la kujua, nalo ni kwamba kuweka msimbo wako nadhifu na safi inakuwa lazima unapofanya kazi na vitanzi. Unapokuwa na muundo mzuri wa kuona kwenye msimbo wako, inarahisisha sana kuona kinachotokea. Lakini kama huna, kama utasahau kuacha nafasi vizuri au utachanganya nafasi zako, mambo yanachanganya haraka sana. Kwa hiyo katika kozi hii, kila wakati tuna kanuni. Kila wakati unaweka mabano ya kufungua yaliyopinda kwenye mstari huo huo na amri (_statement_ kwa Kiingereza) ya `repeat`. Kila wakati unaweka mabano ya kufunga yaliyopinda kwenye mstari wake wenyewe baada ya amri, na kila wakati unaacha nafasi mbili mwanzoni mwa msimbo ulio kati yao. Kwa njia hiyo kila kitu kitabaki nadhifu, na kama utasahau au utajaribu kufuata mtindo mwingine, utapata hitilafu.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/multiple-things-in-loop.webp"
  alt="Jiki akionyesha nafasi zilizoachwa na mstari mpya unaofanya kizuizi cha msimbo cha kitanzi kibaki nadhifu"
  width="500"
  height="398"
/>
