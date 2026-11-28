---
title: "Vitendakazi vinavyorejesha vitu"
description: "Kunasa thamani inayotoka kwenye mteremko wa matokeo ya kitendakazi na kuitumia kwenye msimbo wako."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Hadi sasa tumeangalia vitendakazi vinavyofanya jambo fulani huko nje. Kwa mfano, kitendakazi `circle` (duara) huchora duara. Kitendakazi `move` (sogea) husogeza mhusika wako. Lakini vitendakazi vingine hufanya kazi kwa namna tofauti. Badala ya kufanya kitu cha nje, vinakupa kitu ambacho unaweza kutumia kwenye msimbo wako. Kitendakazi kinapompa Jiki kitu cha kutumia kwenye msimbo, tunasema kuwa kitendakazi hicho kinarejesha (_returning_ kwa Kiingereza) kitu. Kinarejesha kitu kurudi kwa Jiki. Unaweza kufikiria mashine hizi kuwa na mteremko wa matokeo. Tayari tuna matundu ya ingizo ambayo tunaweka vitu ndani, lakini tunaweza pia kuwa na tundu moja la matokeo au mteremko ambao kitu kinaweza kutokea. Jiki anapobonyeza kitufe kwenye mashine, mashine inanguruma, na mwishowe kitu kinatokea kwenye mteremko huo. Inaweza kuwa namba. Inaweza kuwa string. Ni kitu ambacho Jiki anaweza kunasa na kutumia.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Mashine yenye mteremko wa matokeo kando yake, tayari kurejesha thamani kwa Jiki"
  width="500"
  height="317"
/>

Vitendakazi vingi, huenda asilimia 95 kati yao, vinarejesha kitu. Vinaweza kukufanyia hesabu fulani na kurejesha thamani, au vinaweza kuunganisha string kadhaa pamoja na kukupa string inayotokana na hiyo. Au huenda vinakupa muda wa sasa kila unapoendesha mashine hiyo. Hebu tuangalie hili la mwisho. Tuseme tuna kitendakazi kinachoitwa `getCurrentTime` (pata muda wa sasa). Kila Jiki anapoendesha mashine, kipande cha karatasi kinatoka kwenye mteremko wa matokeo kikiwa na muda umeandikwa juu yake, labda 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Mashine ya getCurrentTime yenye kipande cha karatasi kinachoonyesha 14:35 kikitoka kwenye mteremko wake wa matokeo"
  width="500"
  height="312"
/>

Na kisha tunaweza kuweka thamani hiyo iliyorejeshwa kwenye sanduku kwa kutumia `let`:

```javascript
let time = getCurrentTime()
```

Jiki ataendesha mashine, atapata muda wa sasa kutoka kwenye mteremko, na kuuhifadhi kwenye sanduku linaloitwa `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki akiweka karatasi ya 14:35 kutoka kwenye mteremko ndani ya sanduku lenye lebo ya time"
  width="372"
  height="400"
/>

Sasa, ni muhimu kuelewa kuwa kipande cha karatasi ambacho Jiki anaweka kwenye sanduku ni kitu kilichowekwa wakati huo na hakibadiliki. Hata kama muda halisi unabadilika wakati programu yako inaendelea kufanya kazi, sanduku bado lina kipande hicho cha karatasi kilichoandikwa 14:35. Kitu kikiwa kimeshaingia kwenye sanduku, kinabaki kama kilivyo humo. Hakibadiliki kwa miujiza. Tukitaka kuweka muda wa sasa kwenye sanduku tena siku zijazo, tunahitaji kutumia kitendakazi chetu cha `getCurrentTime` tena ili kuupata.

Vitendakazi vingi vinavyorejesha vitu pia vina maingizo. Kwa mfano, tunaweza kuwa na kitendakazi `join` (unganisha) kinachopokea string mbili kama maingizo yake na kuzirejesha zimeunganishwa pamoja kwa nafasi moja. Kwa hivyo tukitumia mashine ya `join` tukiwa na `"Hello"` na `"World"` kama maingizo yetu, string moja iliyoandikwa `"Hello World"` itatoka kwenye mteremko wa matokeo.

```javascript
join("Hello", "World"); // "Hello World"
```
