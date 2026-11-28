---
title: "Operator ya `||` (Au)"
description: "Kuchanganya masharti mawili kwa `||` ili sharti zima liwe kweli wakati angalau moja ya sehemu hizo ni kweli."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

Tunaweza pia kutumia `or`, na tena, kwa bahati mbaya, hakuna keyword nzuri ya or katika JavaScript. Badala yake, tunalazimika kutumia mistari (_bars_ kwa Kiingereza) hii miwili iliyo karibu kumaanisha au. Inaonekana ajabu, lakini kwa kweli sivyo. Utaizoea.

Kwa hivyo tunaweza kusema kwamba ikiwa mtu ana zaidi ya miaka 20 au amevaa mavazi ya disco, basi anaweza kuingia. Kwa hivyo tutakuwa na sherehe ya kufurahisha iliyo na watoto waliovaa mavazi ya disco na watu wazima waliovaa vibaya, jambo ambalo linaonekana kuwa la maana.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki akiwakaribisha watoto waliovaa mavazi ya disco na watu wazima waliovaa kawaida kupitia mlango wa kuingia kwenye sherehe"
  width="327"
  height="400"
/>

Kuna jambo moja ambalo huwatatiza watu kuhusu and na or, nalo ni kwamba kila upande wa and/or unahitaji kuwa ulinganisho kamili. Kwa hivyo hata kama unalinganisha variable ile ile kwa pande zote mbili, lazima uirudie. Hauwezi kuandika `if age is less than 13 or greater than 20`. Lazima uandike `if age is less than 13 or age is greater than 20`. Unahitaji pande zote mbili ziwe ulinganisho kamili.

```javascript
if (age < 13 || age > 20)
```

Unahitaji kufikiri ni lini masharti yote mawili yanahusika na ni lini moja tu kati yao linahitaji kuwa kweli.
