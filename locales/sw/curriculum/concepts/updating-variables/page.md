---
title: "Kusasisha Variable"
description: "Kubadilisha kilicho ndani ya variable wakati programu yako inaendesha, ili uweze kufuatilia nafasi, hesabu, alama na thamani nyingine zinazobadilika."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Hadi sasa, tulipounda variable, tumeweka thamani kwenye masanduku na kuzitoa baadaye. Hilo limekuwa msaada mkubwa kwa kuongeza uwazi kwenye msimbo wetu na kwa kupunguza hesabu za kiakili ambazo tungelazimika kufanya. Lakini thamani halisi ya variable inatokana na uwezo wa kubadilisha kilicho ndani ya sanduku, kilicho ndani ya variable, katika kipindi chote cha programu. Hivyo hata tukiendesha sehemu hiyo hiyo ya msimbo mara nyingi, kile inachofanya kinaweza kubadilika kutegemea kilicho ndani ya masanduku.

Tuseme tunataka kupanda ua kwenye bustani. Tuna kitendakazi cha `plant` (panda) kinachotumika kirahisi, chenye ingizo moja kwa nafasi tunayotaka kuweka ua. Hivyo tukitaka kuweka ua umbali wa 10 kutoka ukingoni, tunaandika hivi:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Ua lililopandwa kwenye bustani karibu na ubao wa Jiki"
  width="406"
  height="400"
/>

Je, kama tunataka kupanda maua manane? Tunaweza kuandika `plant(10)`, `plant(20)`, `plant(30)`, n.k., lakini hiyo ni kazi ya kuchosha sana.

Na tumekwisha jifunza kuhusu kitu kinachotusaidia kuchukua nafasi ya msimbo wa kuchosha kama huu. Tumia kitanzi! Tumia kizuizi cha repeat! Hivyo hebu tuweke position kuwa 10, kisha tuwe na kizuizi cha repeat ambapo tunaita `plant`, tunatumia kitendakazi cha `plant`, mara nane.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Unafikiri nini kitatokea?

Kwa kweli, kitapanda maua manane, lakini kitayapanda mahali pamoja kila mara, jambo ambalo si kweli tunalotaka. Hivyo hebu tuchukue muda kufikiri kuhusu anachofanya Jiki hapa. Anatengeneza sanduku lenye lebo ya position. Anaweka 10 ndani yake. Kisha anaendesha mashine ya `plant` mara nane. Kila mara, anatoa thamani kutoka sanduku la position. Daima ni 10, na anaweka hiyo 10 hiyo hiyo kila mara.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki akichukua sanduku la position kutoka rafuni na kuingiza thamani yake ya 10 kwenye mashine ya plant"
  width="400"
  height="400"
/>

Hivyo tunachohitaji ni njia ya kusonga mbele kidogo kila mara. Baada ya kupanda ua, tunataka kumwambia Jiki asogeze position mbele kwa 10, tayari kwa kupanda ua linalofuata.

Hivyo, tukisahau msimbo kwa muda, ni vipi tungefanya hivi kimantiki? Kama nikikuambia, "Panda ua la kwanza kwenye 10, kisha linalofuata kwenye 20, kisha linalofuata kwenye 30," ubongo wako unajuaje kwamba lifuatalo linapaswa kupandwa kwenye 40 na lile baada ya hapo linapaswa kupandwa kwenye 50?

Unachofanya ubongo wako ni kufuatilia namba ya sasa na kuiongeza 10, kisha kusasisha namba hiyo akilini mwako.

Na tunaweza kufanya kitu kile kile kwenye msimbo. Kufanya hivi, tunasema, "Sasisha (_update_ kwa Kiingereza) sanduku la position liwe na thamani ya sasa ya position pamoja na 10."

Jiki anapoona hili, atatoa namba ya sasa kutoka sanduku la position, aiongeze 10, afanye hiyo hesabu, kuzijumlisha, kisha arudishe matokeo kwenye sanduku kwa ajili ya mara inayofuata.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki akitoa 10 kutoka sanduku la position, akiongeza 10 kupata 20, na kurudisha 20 kwenye sanduku"
  width="427"
  height="400"
/>

Kwa hivyo tukiongeza hili kwenye programu yetu, hivyo kwamba sasa tunasema, "Weka thamani ya awali ya position kuwa 10," kisha mara nane panda ua kwenye position, na kisha badilisha position iwe kubwa kwa 10 kuliko ilivyokuwa, msimbo wetu unafanya kazi, na tunapata maua manane yenye nafasi kati yao.

Angalia kwamba hakuna `let` (tengeneza variable mpya) tunaposasisha variable. Hilo ni muhimu sana. Jiki anapoona `let`, anatengeneza sanduku jipya. Lakini hapa, hatutaki kutengeneza sanduku jipya. Tunataka kubadilisha kilicho ndani ya sanduku ambalo tunalo tayari.

Pia angalia kwamba tunatengeneza sanduku mara moja tu nje ya kitanzi. Hilo ni muhimu kulikumbuka. Tengeneza sanduku mara moja mwanzoni, kisha usasishe kila kitanzi kinapoendesha.

Tunaweza kusasisha kilicho ndani ya masanduku, na tunaweza kutumia uwezo huo kufuatilia kitu kinachobadilika kadri muda unavyopita. Utautumia mtindo huu kila wakati, kufuatilia nafasi, kuhesabu mara ngapi kitu kimetokea, kuweka alama. Wakati wowote unapohitaji kukumbuka kitu kinachobadilika wakati programu yako inaendesha, hivi ndivyo unavyofanya.
