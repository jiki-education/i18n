---
title: "`&&` (Na) operator"
description: "Kuchanganya masharti mawili kwa `&&` ili sharti zima liwe kweli pale tu sehemu zote mbili zilipo kweli."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Nikuuliza ufungue mlango tu ikiwa mtu ana umri zaidi ya miaka 20, pengine utajua la kufanya. Lakini vipi ikiwa unahitaji kuangalia kama mtu ana umri zaidi ya 20 _na_ amevaa mavazi sahihi? Kwa hiyo unahitaji kuangalia masharti mawili tofauti kwa wakati mmoja. Ungefanyaje?

Labda unaweza kuwa na kauli ya masharti iliyowekwa ndani ya nyingine (_nested_ kwa Kiingereza), kama vile tulivyokuwa na vitanzi vilivyowekwa ndani ya vingine hapo awali. Kwa hiyo unaweza kusema, ikiwa `age` ni kubwa kuliko `20`, basi tunaingia katika kizuizi hiki cha msimbo, kisha `if` nyingine ikiwa `outfit` ni sawa na `"disco"`, na mabano mengine ya kukunja pamoja na kizuizi kipya cha msimbo. Hilo litafanya kazi, lakini linakuwa chafu sana, hasa unapotaka kuwa na masharti mengi.

Kwa bahati nzuri, kuna njia rahisi zaidi, nayo ni kuwa na masharti yenye sehemu nyingi. Badala ya kuangalia kitu kimoja tu katika sharti, tunaweza kuangalia vitu viwili au vitatu au zaidi. Na ili kufanya hivi, tunahitaji kutumia keyword `and`. Sasa, kwa bahati mbaya, katika JavaScript keyword and si neno and halisi, kama ilivyo katika baadhi ya lugha. Badala yake, unatakiwa kuwa na alama mbili za `&` (_ampersand_ kwa Kiingereza) karibu karibu. Itabidi tu ukumbuke hili. Inaudhi, lakini ndivyo ilivyo, na utaizoea.

Kwa hiyo tunaweza kutumia hili kutengeneza sharti lililo tata zaidi. Tunaweza kusema ikiwa `age` ni kubwa kuliko `20` na `outfit` ni `"disco"`, basi tunaendelea. Ikiwa `age` ni ndogo kuliko `20` au `outfit` si `"disco"`, basi kauli nzima, sharti zima ni sikweli. Kama umewahi kusoma mantiki, labda umewahi kutengeneza vifaa vya kielektroniki au umefanya hesabu za hali ya juu zaidi, basi hili litakuwa jambo la kawaida sana kwako. Kama sivyo, utalifahamu haraka.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Kuna jambo moja linalowachanganya watu kuhusu and na or, nalo ni kwamba kila upande wa na/au (_and/or_ kwa Kiingereza) unahitaji kuwa ulinganisho kamili. Kwa hiyo hata kama unalinganisha variable hiyo hiyo kwa pande zote mbili, unatakiwa kuirudia. Hauwezi kuandika `if age is greater than 13 and less than 20`. Unatakiwa kuandika `if age is greater than 13 and age is less than 20`. Unahitaji pande zote mbili ziwe ulinganisho kamili.

```javascript
if (age > 13 && age < 20)
```
