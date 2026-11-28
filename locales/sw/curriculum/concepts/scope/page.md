---
title: "Scope"
description: "Kuelewa jinsi mabano yaliyopinda yanavyounda seti yao ya rafu, kwa hivyo variable huishi muda mfupi kama kizuizi chao kinavyodumu."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Fikiria msimbo unaochora duara mahali tofauti kila unapoendeshwa, na tunataka kuchora maduara 10 mahali tofauti. Tunaweza kuunganisha hili na kitanzi. Lakini kama unafuatilia kwa makini, huenda umeona kitu cha ajabu hapa.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Mwanzoni, nilisema kuna sheria kwamba masanduku kwenye rafu za Jiki lazima yawe na majina ya kipekee,

na kwamba keyword `let` huunda sanduku jipya kila unapoitumia.

Lakini kwa sababu `let` iko ndani ya kitanzi, Jiki ataunda sanduku jipya kila kitanzi kinapoendeshwa.

Kwa hivyo, msimbo huu una hitilafu, au kuna kitu kingine cha ajabu kinatokea hapa?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki akiwa amechanganyikiwa, akijiuliza kama msimbo huu una hitilafu"
  width="384"
  height="400"
/>

Kumbe msimbo huu uko sawa. Hii ni JavaScript halali kabisa, na inafanya kazi kwa sababu ya dhana inayoitwa _scope_ (wigo), au _scoping_.

_Scope_ ni kitu ambacho mwanzoni huenda kitaonekana rahisi kabisa, lakini nakuhakikishia kitakuletea matatizo kwa muda wote wa kazi yako. Hata wasanidi programu wenye uzoefu mkubwa hukutana na matatizo ya _scope_, na JavaScript ni mojawapo ya lugha zilizo ngumu zaidi kwa hili. Nakuambia hivi ili utakapokutana na matatizo ya _scope_, usijihisi vibaya. Lakini pia, zingatia sana sehemu hii kwa sababu ni muhimu.

Unapoona mabano yaliyopinda kwenye msimbo, huunda kile kinachoitwa _scope_ mpya. Hiyo inamaanisha nini? Fikiria Jiki akiunda seti ndogo mpya ya rafu katika karakana yake kila anapoona mabano yaliyopinda. Na masanduku yoyote anayounda anapofanya kazi, akiendesha msimbo ndani ya mabano hayo yaliyopinda, masanduku hayo, masanduku mapya hayo huwekwa kwenye seti ndogo mpya ya rafu, si kwenye rafu kuu.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Rafu kuu za Jiki kando ya seti ndogo mpya ya rafu iliyoundwa na mabano yaliyopinda"
  width="500"
  height="205"
/>

Na Jiki anapofika kwenye mabano yaliyopinda ya kufunga yanayolingana, hutupa masanduku yote yaliyo kwenye seti hii ya pili ya rafu.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki akitupa masanduku kutoka seti ya pili ya rafu kwenye pipa anapofika kwenye mabano yaliyopinda ya kufunga"
  width="500"
  height="237"
/>

Kwa hivyo kila tunapokuwa na kitanzi kama hiki, tunaweza kuunda masanduku yanayodumu tu kwa muda wa marudio moja ya kitanzi. Masanduku ya `left` (kushoto) na `top` (juu) unayoyaona hapa, yanadumu tu hadi tunapofika kwenye mabano yaliyopinda ya kufunga, kisha yanatupwa. Na Jiki hufika kwenye mabano hayo ya kufunga kila kitanzi kinapoendeshwa. Kwa hivyo ni mara 10 katika programu hii. Hivyo mara 10 ataunda sanduku linaloitwa `left`, na atalitupa tena.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Masanduku mawili yaliyoandikwa left na top ambayo yanadumu kwa marudio moja tu ya kitanzi"
  width="500"
  height="187"
/>

Kwa hivyo unapounda variable, lazima uamue unataka idumu kwa muda gani. Kama unataka idumu kwa muda mrefu, inabidi iwe nje ya mabano yoyote yaliyopinda. Kama unataka idumu kwa marudio (_iteration_ kwa Kiingereza) moja tu, yaani mzunguko mmoja wa kitanzi, basi unaweza kuiweka ndani ya mabano yaliyopinda. Unaona jinsi hii inaweza kuchanganya kidogo? Kwa hivyo sheria moja nzuri ya kurahisisha hili unapoanza ni kuweka variable zako zote karibu na mwanzo wa msimbo wako nje ya mabano yaliyopinda, na kisha kuzibadilisha tu ndani ya mabano. Kwa mfano, tunaweza kuandika msimbo ulio juu ukiwa na sanduku moja tu la `left` na moja la `top`, yaliyowekwa sifuri mwanzoni, kisha yakabadilishwa kila mara ndani ya kitanzi. Hiyo pia ni halali kabisa. Hakuna iliyo sahihi au isiyo sahihi. Kuna njia bora za kufanya mambo, lakini tutajifunza kuzihusu baadaye. Kwa sasa, jaribu, furahia, angalia ni ipi inayokufaa zaidi, na jaribu kutojisumbua sana na hili.
