---
title: "Kuunda na Kutumia Variable"
description: "Masanduku kwenye rafu za Jiki yanayohifadhi thamani pamoja na lebo, ili uweze kuipata tena baadaye kwenye msimbo wako."
en_md5: dd0834017a8d42c22cca25966c1fdd91
---

_variable_ (kigezo, mahali panapohifadhi thamani) ndiyo kitu kinachotuwezesha kuhifadhi taarifa. Tunapopanga programu, mara nyingi tunahitaji kuhifadhi namba au string ili kuitumia baadaye, na variable ndiyo njia tunayotumia kufanya hivyo. Kwa hiyo hebu tuangalie kwa upana kidogo ndani ya ghala la Jiki, na utaona kwamba ana rafu nyingine. Tayari tunafahamu rafu ya kwanza iliyo na vitendakazi, mashine hizi ndogo kama `move` na `rectangle`. Lakini kwenye rafu hii ya pili, badala ya mashine, unaweza kuona masanduku mengi, na masanduku haya ndiyo tunayoyaita variable. Unaweza kumwambia Jiki ahifadhi kitu chochote kwenye masanduku haya, na baadaye umwombe atoe kitu hicho tena. Kila sanduku lina jina, sawa kabisa na jinsi vitendakazi vinavyokuwa na jina, na kila sanduku lina kitu kimoja tu. Kwa sasa, ama namba au string. Lakini tutaangalia jinsi ya kuhifadhi vitu tata zaidi humo, mbele zaidi kwenye kozi.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/two-shelves.webp"
  alt="Rafu mbili ndani ya ghala la Jiki: moja imeandikwa vitendakazi na ina mashine, nyingine imeandikwa variable na ina masanduku"
  width="500"
  height="173"
/>

Kwa hiyo tunamwambiaje Jiki atengeneze sanduku na kuweka kitu ndani yake? Tunatumia keyword `let` (tengeneza variable mpya). Keyword `let` inamwambia Jiki kwamba anahitaji kutengeneza sanduku jipya. Unaweza kumfikiria akifungua sanduku la kadibodi kutoka kwenye kifungashio chake, akilikamilisha, kisha anaangalia kinachofuata baada ya neno `let`, na hiyo ndiyo lebo anayoiweka kwenye sanduku, katika hali hii, `name` (jina). Kwa hiyo anatoa kalamu yake, na anaandika `name` kwenye lebo. Kisha anaangalia kinachofuata baada ya alama ya sawa (_equal sign_ kwa Kiingereza). Katika hali hii, ni jina langu, `"Jeremy"`, na kwa sababu `"Jeremy"` ni string, anachukua karatasi, na anaandika `"Jeremy"` juu yake. Ni string tu, sawa kabisa na rangi ambazo umekuwa ukizitumia, kisha anaweka karatasi hiyo ndani ya sanduku.

```javascript
let name = "Jeremy"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/jeremy-paper.webp"
  alt="Jiki akiwa ameshika karatasi iliyoandikwa string Jeremy, tayari kuiweka kwenye sanduku"
  width="373"
  height="400"
/>

Kwa hiyo tumemwambia atengeneze sanduku, aweke lebo juu yake, na kuweka kitu ndani yake, na sasa anaenda kuweka sanduku hilo kwenye rafu. Na kisha wakati wowote mwingine kwenye programu yako, Jiki anaweza kwenda kuchukua sanduku hilo kutoka kwenye rafu, na kuangalia kilicho ndani yake. Anza kujenga modeli hii ya kiakili. Nimekuwa nikipanga programu kwa muda mrefu sana, na bado, ninapoandika msimbo, huwa najifikiria ninaweka kitu kwenye sanduku ili nikilitoa baadaye. Unapoona keyword `let` hiyo, fikiri kwa dhati, "Sawa, hiyo inamaanisha ninatengeneza sanduku jipya."

Neno kidogo kuhusu majina ya variable, yaani lebo za masanduku haya. Tuna sheria chache kuhusu hizo. Kwanza, majina ya variable hayawezi kuwa na nafasi ndani yake. Ikiwa unataka kutumia maneno mengi kwa lebo ya sanduku, tunagandamanisha maneno hayo, na tunabadilisha herufi ya kwanza ya kila neno iwe herufi kubwa. Hii tunaiita _camel case_ (mtindo wa kuunganisha maneno kwa herufi kubwa). Fikiri nundu za ngamia zinazosukuma herufi ya kwanza ya kila neno jipya iwe herufi kubwa. Kwa hiyo ikiwa unataka lebo ambayo ni jina langu, badala ya kuandika maneno mawili yenye nafasi, tunaiandika kama neno moja na N ikiwa herufi kubwa: `myName`.

Pia, kila jina la variable lazima liwe la kipekee. Huwezi kuwa na masanduku mawili yenye lebo moja, na pia variable haziwezi kuwa na jina sawa na vitendakazi. Ukisahau, Jiki atachanganyikiwa na atakupa ujumbe wa hitilafu.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/duplicate-names-confused.webp"
  alt="Jiki akiwa amechanganyikiwa akiangalia masanduku mawili yenye lebo `name`"
  width="485"
  height="400"
/>

Basi hebu tuangalie mahali tunapoweza kuhitaji kutumia variable. Tuseme tunachora jua angani. Tunajua tunaweza kutumia kitendakazi `circle` (duara) na kukipa maingizo manne. `left` (kushoto), `top` (juu), `radius` (nusu kipenyo), na `color` (rangi). Lakini tunapochora vitu vingi na namba hizi zote zikitawanyika kote kwenye msimbo wetu, inaweza kuwa vigumu sana kuzifuatilia na kusoma. Kwa hiyo badala yake, tunaweza kuunda variable kwa kila moja ya left, top, `radius`, na `color`, kisha kuzirejelea variable hizo baadaye. Kwa hiyo lengo letu la mwisho hapa ni kuweza kutumia kitendakazi `circle` na kubainisha majina mazuri yanayosomeka ya masanduku, na Jiki anapoona majina hayo, atajua kuchukua masanduku kutoka kwenye rafu na kutumia chochote kilicho ndani yake.

Kwa hiyo hebu tuunde variable kadhaa kwa hivi. Tunaanza na nafasi ya kushoto ya jua. Tunatumia keyword `let` kumwambia Jiki atengeneze sanduku jipya linaloitwa `leftPosition` (nafasi ya kushoto). Angalia camel case hapo na P kubwa. Na tunamwambia Jiki ni namba gani inaingia kwenye sanduku. Anaiweka kwenye rafu, kisha anaendelea kufanya vivyo hivyo kwa `topPosition` (nafasi ya juu), `radius`, na `color`.

```javascript
let leftPosition = 10
let topPosition = 20
let radius = 5
let color = "yellow"

circle(leftPosition, topPosition, radius, color)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/name-on-shelf.webp"
  alt="Masanduku yenye lebo kwenye rafu za variable, kila moja likihifadhi thamani moja ambayo Jiki ataichukua baadaye"
  width="500"
  height="378"
/>

Wakati wowote kwenye msimbo wetu, tunaweza kurejelea variable hizi, na Jiki atatoa thamani (_value_ kwa Kiingereza) na kuziweka kwenye mashine. Jambo lingine zuri kuhusu variable ni kwamba wakati wowote tunapotaka kuchora kitu katika nafasi ile ile ya jua, tunaweza kutumia tena variable zile zile za `leftPosition` na `topPosition`. Hebu tuchukue mfano mwingine. Fikiri unajenga ukuta, na una matofali 30, na unataka matofali yote yawe na upana sawa na urefu sawa. Ni bora zaidi kuunda variable za upana na urefu mwanzoni mwa msimbo wako, kisha kuzirejelea katika msimbo wako wote uliobaki. Kwa sababu ikiwa baadaye utataka kubadilisha upana au urefu, unaweza kuubadilisha mahali pamoja tu, na kila kitu kingine kitabadilika.
