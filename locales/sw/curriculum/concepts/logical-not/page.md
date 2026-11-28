---
title: "Operator ya `!` (Not)"
description: "Kutumia `!` kupindua Boolean: kweli inakuwa sikweli na sikweli inakuwa kweli, muhimu kwa kubadilisha hali au kupindua ukaguzi."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Hadi sasa, tunapolinganisha vitu ili kuona kama vinafanana, tumekuwa tukitumia alama tatu za usawa. Lakini wakati mwingine, tunataka kuangalia kama vitu havifanani, na kwa hilo tunatumia alama ya mshangao ikifuatiwa na alama mbili za usawa. Na kwa ujumla, katika kupanga programu, alama ya mshangao, au _bang_ kama nadhani marafiki zetu wa Marekani wanavyoita, inamaanisha "si". Kwa hiyo fikiria unafanya kazi kwenye duka, na wasimamizi wameamua kwamba hakuna mavazi ya disco yanayoruhusiwa kuingia.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Mlinzi wa mlango wa duka akikagua mavazi ya watu waliopanga foleni"
  width="451"
  height="400"
/>

Tunaweza kusema, "Kama vazi si la disco, fungua mlango." Kauli ya masharti inafanya kazi vivyo hivyo.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Tofauti ni kwamba sharti linarejesha kweli kama vitu vinatofautiana, na linarejesha sikweli kama vinafanana. Kwa hiyo tunaweza kuandika kitu kimoja kwa kusema, "Kama vazi ni la disco, usifanye kitu. La sivyo, fungua mlango." Lakini kwa ujumla, ni rahisi na safi zaidi kutumia _operator_ (kiendeshi, k.m. `+`, `-`) ya `not` ili kujua na kusema unachomaanisha kwa uwazi.

Jambo moja zaidi linalohusiana na hili. Wakati mwingine utakuwa na variable ambayo ni kweli, na unataka kuipindua iwe sikweli, au utakuwa na kitu ambacho ni sikweli, na unataka kuipindua iwe kweli, na tunaweza kutumia hili kufuatilia jambo fulani. Kwa hiyo fikiria tuna kitu kinachodunda kutoka kushoto kwenda kulia, na tuna variable inayoitwa `movingRight`, ambayo ni kweli unapopaswa kusogea kulia. Lakini unapotaka kuibadilisha (_toggle_ kwa Kiingereza) iwe sikweli, unapofika kwenye ukingo wa kulia.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Uwanja wa mtindo wa Pong wenye raketi na mpira unaodunda kutoka upande hadi upande, ukionyesha kubadilisha variable ya movingRight"
  width="500"
  height="352"
/>

Kwa hiyo tunaweza kufanya hivi kwa kusema, "Kama `movingRight` ni kweli, `movingRight` ni sikweli. La sivyo, `movingRight` ni kweli." Hiyo ni njia moja ya kuibadilisha variable. Kwa hiyo Jiki ataangalia `movingRight` kuona kama ni kweli au sikweli, kisha atabaini kinyume chake na kuweka thamani hiyo tena kwenye sanduku.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Lakini kuna njia safi zaidi ya kufanya hivi, na hiyo ni kutumia alama hiyo hiyo ya mshangao, au bang:

```javascript
movingRight = !movingRight
```

Na hiyo inaipindua. `!movingRight` inamaanisha kinyume cha kile ilichokuwa awali.

Kwa hiyo kama `movingRight` ilikuwa kweli, sasa ni sikweli. Kama ilikuwa sikweli, sasa ni kweli. Jiki anapata kilichomo kwenye sanduku kwa sasa, na hiyo bang inamwambia atafute kinyume. Kwa hiyo kinyume cha kweli ni sikweli. Kinyume cha sikweli ni kweli, kisha anakiweka tena kwenye sanduku. Hii ni sawa kabisa na ile kauli ndefu ya masharti ya if/else, lakini ni safi na fupi zaidi kuandika.
