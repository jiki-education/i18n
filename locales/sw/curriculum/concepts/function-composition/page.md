---
title: "Kutumia Vitendakazi Vingi Pamoja"
description: "Kugawanya tatizo katika vitendakazi vidogo vyenye jukumu moja vinavyoitana, ili kila kipande kibaki rahisi na kiweze kutumika tena."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Hadi sasa, ulipokuwa ukiandika vitendakazi, kila kimoja kwa kiasi kikubwa kilijitegemea na kilikuwa na mantiki yote iliyohitaji ili kifanye kazi.

Sasa tutaangalia jinsi ya kugawanya vitendakazi ili tuwe na vitendakazi vidogo vinavyofanya kazi pamoja badala ya vitendakazi vikubwa vyenye mambo mengi yanayoendelea ndani yake.

Kama kanuni ya jumla katika kupanga programu, unataka kila kitendakazi kifanye kidogo zaidi kinachowezekana. Tunaita hili kitendakazi kuwa na jukumu moja (_single responsibility_ kwa Kiingereza). Kila kitendakazi kinapaswa kufanya jambo moja tu na kutumia vitendakazi vingine kwa sehemu ndogo tofauti za hilo jambo.

Hebu tuangalie mfano.

Fikiria tuna kitendakazi ambacho kazi yake ni kurejesha string inayoelezea jina.

Toleo rahisi lingeonekana hivi. Tuna kitanzi cha kuhesabu, kitu ambacho tayari umeandika, kisha kiolezo cha string kinachounganisha matokeo.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Hii inafanya kazi vizuri, lakini inafanya mambo mawili. Inafanya jambo moja la jumla kabisa, kuhesabu, na jambo jingine mahususi sana, kujenga string hii katika muundo fulani.

Itakuwa vizuri zaidi kugawanya hii katika vitendakazi viwili, kimoja kinachohusika na kuhesabu na kingine kinachohusika na kuelezea jina katika muundo huu mahususi.

```javascript
// Inahesabu herufi tu
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Inapanga maandishi vizuri
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Na kisha tunaweza kutumia tena hicho kitendakazi cha jumla cha kuhesabu katika kupanga string hii, lakini pia mahali popote pengine tunapohitaji. Kila tunapohitaji kuhesabu herufi katika string, kitendakazi hicho hakina uhusiano wowote na mambo yoyote yanayohusiana na uchapishaji.

Unaweza kusoma vitendakazi vyote viwili kivyake na kuelewa mara moja kila kimoja kinafanya nini.

Kadiri vitendakazi vyako vinavyozidi kuwa changamano na unavyokuwa navyo vingi zaidi, mbinu hii ndiyo tofauti kati ya kuwa na msimbo nadhifu na unaosomeka, na hali ya mkanganyiko na mvurugo mtupu.

Kuna jambo moja linalofaa kutajwa tena hapa, nalo ni kwamba kitu chochote unachounda ndani ya kitendakazi hakiwezi kufikiwa na vitendakazi vingine isipokuwa ukirejesha kwa makusudi.

Kwa hivyo ukijaribu kurejelea variable ya `count` (idadi) kutoka ndani ya `describeName` (eleza jina), hutaweza, kwa sababu ni mali ya kitendakazi kingine.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki akifikiria, akiwa na balbu ya mwanga juu ya kichwa chake, jinsi variable zinavyobaki kuwa za faragha kwa kila kitendakazi"
  width="361"
  height="353"
/>

Katika JavaScript, tunaweza kuunda variable juu kabla ya kila kitu ambazo zinashirikiwa kati ya vitendakazi, lakini nakushauri sana usifanye hivyo isipokuwa kuna sababu nzuri sana.

Kadiri unavyoweka kila kitendakazi kikiwa huru, na neno la kiufundi kwa hilo ni safi (_pure_ kwa Kiingereza), yaani vitendakazi safi, ndivyo msimbo wako utakuwa nadhifu zaidi na ndivyo hitilafu utakazounda na kuzipata zitakuwa chache zaidi.
