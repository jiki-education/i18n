---
title: "Dictionaries"
description: "Ukurasa wa daftari la spiral ambao kila mstari wake una funguo upande wa kushoto na thamani yake upande wa kulia, unaokupa data yenye lebo badala ya orodha."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Tunapokuwa na orodha ya kitu chochote, orodha ndiyo chaguo letu la kwanza. Orodha ya wakufunzi, orodha ya alama, orodha ya viambato, orodha yoyote ile: unataka kutumia orodha.

Lakini kuna muundo mwingine wa data (_data structure_ kwa Kiingereza) ambao pia ni wa kawaida sana unapotaka kitu kilicho tata kidogo kuliko orodha.

Fikiria tunataka kuhifadhi taarifa kadhaa kunihusu: jina langu, umri wangu, mahali nilipozaliwa. Unaweza kutumia orodha kwa hilo, lakini haieleweki vizuri kinachoendelea unapofanya hivyo.

Je, England ni mahali nilipozaliwa au mahali ninapoishi? Je, 42 ni umri wangu au kitu kingine?

Na ikiwa nataka kutumia hii, lazima nikumbuke kwamba nafasi ya kwanza ni ya jina, ya pili ni ya umri, ya tatu ni ya mahali nilipozaliwa. Yote haya ni mchafuko kidogo, na ni mchafuko kwa sababu hii si orodha ya vitu hasa. Ni tata zaidi ya hapo. Na hapo ndipo _dictionaries_ (kama kamusi, inaunganisha funguo na thamani) zinapoingia. Dictionary ni aina mpya ya muundo wa data. Huu ni muundo wako wa tano. Unayo strings, namba, Booleans, orodha, na sasa dictionary.

Na nataka ufikirie dictionary kama ukurasa wa daftari la spiral.

Upande wa kushoto kuna vichwa vya habari, yaani maneno `"name"`, `"age"`, `"birthplace"`, na haya tunayaita funguo (_keys_ kwa Kiingereza).

Na upande wa kulia, kando ya kila kichwa, una data halisi: `"Jeremy"`, `42`, `"England"`, na haya tunayaita thamani (_values_ kwa Kiingereza).

Kama vile orodha, dictionary ni kitu kimoja. Ni ukurasa mmoja wa daftari. Na kama vile orodha, Jiki anaweza kuiweka kwenye variable, kwenye sanduku, au kama ingizo la kitendakazi, au anaweza kutoa dictionary kutoka kwenye mteremko wa matokeo. Basi, hivi ndivyo dictionary inavyoonekana kwenye msimbo. Tunatumia mabano yaliyopinda kuashiria mwanzo na mwisho, na ndani yake una jozi: funguo upande wa kushoto, nukta mbili, kisha thamani upande wa kulia. Na tunakuwa na koma kati ya kila jozi. Jiki anaona hivi, anatoa daftari lake la spiral. Anaandika `name`, `"Jeremy"`, `age`, `42`, na kadhalika kwa kila jozi.

Na akimaliza, anang'oa ukurasa huo na kuuweka kwenye sanduku lililoandikwa `person` (mtu).

Kuna sheria chache za kujua. Funguo huwa ni strings kila wakati. Lazima ziwe na alama za nukuu pande zote, na kila funguo lazima iwe ya kipekee. Huwezi kuwa na funguo mbili zinazoitwa `name` katika dictionary moja.

Thamani zinaweza kufanana ikiwa unataka, lakini funguo lazima ziwe tofauti.

Na thamani zinaweza kuwa kitu chochote. Zinaweza kuwa strings, namba, Booleans, orodha, au hata dictionary nyingine.

Unaweza pia kuwa na dictionary tupu, kama tulivyokuwa na orodha tupu, na tunaweza kuanza na hiyo na kuijenga baadaye.

Sasa unayo dictionary, lakini unawezaje kutoa kitu kutoka ndani yake?

Tunatumia mabano ya mraba kama tulivyofanya na orodha na strings, lakini badala ya namba ya nafasi, tunaweka funguo. Kwa hiyo, ikiwa tunataka kutoa jina la mtu kutoka kwenye dictionary, tunaandika:

```javascript
person["name"] // "Jeremy"
```

Na hiyo inamwambia Jiki aangalie kwenye dictionary ya `person`, atafute funguo ya `"name"`, na atoe thamani yake. Jiki anaenda kwenye sanduku la `person`, anatoa ukurasa kutoka kwenye daftari, anapitia funguo zote mpaka anapopata `"name"`, kisha anasoma thamani, `"Jeremy"`, na kuiweka kwenye sanduku jipya liitwalo `name`.

Mabano ya mraba daima yanamaanisha kitu kimoja. Unaingia ndani ya kitu na kutoa kitu kutoka humo. Kwa orodha na strings, unatumia namba kusema ni nafasi gani unataka kutoa kitu. Kwa dictionary, unatumia string kama funguo.

Ni wazo lile lile, ila sintaksia ni tofauti kidogo.
