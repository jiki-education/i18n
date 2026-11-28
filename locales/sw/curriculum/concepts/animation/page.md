---
title: "Uhuishaji"
description: "Kuidanganya jicho kuona mwendo kwa kupaka rangi mpya ya nyuma na kuchora upya kila fremu katika nafasi iliyobadilika kidogo."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Hadi sasa, tunapotumia `repeat` (rudia) kitanzi kuchora vitu, kila kitu kipya tunachochora huongeza kitu kwenye picha. Tukichora tofali jipya ukutani, limeziba pengo. Tukichora maduara kumi, tunaona maduara kumi kwenye skrini. Ni kama mchoro uliopakwa rangi. Ukipaka rangi ukutani, haitoweka unapochora kitu kipya pembeni yake. Inabaki pale pale. Lakini vipi kama tunataka kufanya kitu kionekane kinasogea?

Umewahi kuona kitabu cha kugeuza kurasa? Kilikuwa maarufu sana nilipokuwa mtoto, lakini sasa si hivyo tena. Kitabu cha kugeuza kurasa ni kitabu kidogo ambacho kila ukurasa wake una mchoro tofauti kidogo. Unapogeuza kurasa hizo haraka, macho yako yanaona michoro ikibadilika, na ubongo wako unafikiri kuna kitu kinasogea. Kwa kweli hakuna kinachosogea. Ni picha nyingi tu zilizotofautiana kidogo, moja baada ya nyingine. Na hivyo ndivyo uhuishaji unavyofanya kazi kwenye msimbo. Hila ni ile ile. Kabla hatujachora picha mpya, tunapaka rangi ya nyuma juu ya turubai lote, kama vile kuanza ukurasa mpya kwenye kitabu chetu cha kugeuza kurasa, kisha tunafanya mabadiliko madogo kwenye picha ili ionekane kuna mwendo.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Kitabu cha kugeuza kurasa kinachoonyesha mchoro wa mtu wa vijiti akikimbia, kila ukurasa ukiwa tofauti kidogo ili yule mtu aonekane akisogea"
  width="500"
  height="274"
/>

Kwa hivyo, tukichukua kizuizi cha msimbo tulichokizoea ambapo tunachora maduara kwenye skrini, tunaweka variable `position` (nafasi), na tuna kizuizi cha `repeat` ambapo tunachora duara kisha tunasogeza `position` moja kwenda kulia. Tukiendesha kizuizi hicho cha `repeat` mara 100, tutaona maduara 100 kwenye skrini.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Mfululizo wa maduara 100 ya bluu yaliyochorwa kutoka kushoto kwenda kulia kwenye skrini"
  width="500"
  height="197"
/>

Sasa, angalia kinachotokea tukiongeza mstatili mmoja wa kawaida kabla ya kuchora duara kila mara.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Badala ya mfululizo wa maduara, sasa macho yetu yanadanganywa kuona duara moja linaloonekana likiteleza kwenye skrini.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Mfululizo wa fremu, kila moja ikiwa turubai jeupe jipya lenye duara moja la bluu lililosogea hatua moja zaidi kulia"
  width="500"
  height="187"
/>

Kila mara tunapopita kwenye kitanzi, tunapaka rangi mpya ya nyuma kabisa, tunafunika kila kitu kilichokuwa pale awali, kisha tunachora duara mahali pake mpya.

Kila mzunguko wa kitanzi ni kama ukurasa mpya kwenye kitabu cha kugeuza kurasa.

Na jambo la muhimu kuelewa hapa ni kwamba hatusogezi duara. Duara si object inayoteleza kuvuka. Ni mchoro tu. Kila mara tunapopita kwenye kitanzi, tunapaka rangi juu ya mchoro wa zamani, na tunatengeneza mchoro mpya kabisa kidogo upande wa kulia. Jicho lako linaunganisha yote pamoja na kuona mwendo, lakini kwa kweli, ni michoro mingi tofauti tu, moja baada ya nyingine.

Unaweza kutumia wazo hili kutengeneza machweo ya jua. Unasogeza jua, unabadilisha ukubwa wake, unabadilisha rangi yake. Yote ni mbinu ile ile. Weka variables, paka rangi mpya ya nyuma, kisha chora kila kitu. Sasisha variables hizo, kisha rudia.
