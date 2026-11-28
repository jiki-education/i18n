---
title: "Kuelewa Vitanzi vya `for`"
description: "Kitanzi chenye sehemu tatu (sehemu ya kuanzia, sharti, na nyongeza) kinachokupa udhibiti kamili juu ya marudio."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Huenda unakumbuka kwamba kitanzi cha repeat hakipo hasa katika JavaScript. Ni kitu kilichoongezwa tu ili kufanya maisha yako kuwa rahisi kidogo tunapoanza.

Kwa hiyo tunatumia nini badala yake? Tunatumia `for` kitanzi cha kawaida, na kinaonekana hivi.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Unaweza kuona kwa nini hilo linaweza kuwa lenye kutisha kidogo siku yako ya kwanza.

Lakini sasa unayo maarifa yote unayohitaji ili kuzoea hili. Hebu tukichambue.

`for` kitanzi kina sehemu tatu: sehemu ya kuanzia (_initializer_ kwa Kiingereza), sharti, na nyongeza (_increment_ kwa Kiingereza).

Sehemu ya kuanzia, hii `let i = 0`, inaendeshwa mwanzoni mwa kitanzi kizima. Inaendeshwa mara moja tu, na hapa inaunda sanduku linaloitwa `i` (herufi ya kufuatilia thamani) lililowekwa kuwa sifuri. `i` ni herufi inayotumika kufuatilia thamani tunapofanya marudio, na kwa kawaida `i` au `x` hutumika kwa hili.

Sehemu inayofuata ni sharti, nayo huendeshwa kila mara kabla ya kila marudio ya kitanzi.

Kama sharti ni kweli, tunaendesha kitanzi tena.

Kama si kweli, hatuendeshi.

Na mwisho ni nyongeza, `i++`.

`i++` ina maana sawa na `i = i + 1`. Ni kifupi tu, njia ya kuongeza `i` kwa moja kila mara.

Kwa hiyo katika mfano huu, tutaweka `i` kuwa sifuri. Tunakagua kama `i` ni ndogo kuliko mbili, na ni kweli, kwa hiyo tunaendesha kitanzi.

Na kisha mwishoni, tunaongeza `i` kwa moja, kwa hiyo `i` inakuwa moja. Sifuri jumlisha moja ni moja.

Kisha tunaenda tena. Tunakagua kama moja ni ndogo kuliko mbili.

Ni ndogo, kwa hiyo tunaendesha kitanzi. Na kisha mwishoni, tunaongeza `i` tena. Kwa hiyo sasa ni mbili, moja jumlisha moja ni sawa na mbili.

```javascript
i = 0
i < 2 // kweli - endesha kitanzi
...   // Fanya marudio
i = i + 1 // 1

i < 2 // kweli - endesha kitanzi
...   // Fanya marudio
i = i + 1 // 2

i < 2 // sikweli - ondoka kwenye kitanzi
```

Na kisha tunaenda mara ya tatu. Wakati huu tunakagua kama mbili ni ndogo kuliko mbili, na sivyo, kwa hiyo hatuendeshi kitanzi, na kwa kweli tumemaliza na kitanzi. Tunaendelea tu na msimbo wowote ulio chini. Kwa hiyo tuliendesha kitanzi mara mbili, na hilo ni jambo la muhimu kujua. Maadamu tunaanza kwa sifuri na tuna sharti `i < n`, namba `n` ni idadi ya mara ambazo kitanzi kitaendeshwa.

Kwa hiyo hii ni sawa na kusema repeat mbili.

Kwa hiyo si vigumu, lakini ni gumu zaidi kuliko kuandika repeat mbili tu. Faida ya `for` kitanzi ni kwamba unaweza kufanya chochote katika sehemu hizo tatu. Unaweza kuanza kwa namba tofauti, kuongeza kwa zaidi ya moja kila mara, kupunguza, au kutumia sharti linalotegemea kitu kingine badala ya kihesabu rahisi. Uwezo huo ndio unaofanya vitanzi vya `for` kuwa farasi wa kazi wa JavaScript.
