---
title: "Kusasisha Dictionary"
description: "Kutumia `dict[key] = value` kusasisha maingizo yaliyopo au kuongeza mapya, pamoja na metodu ya `has` ya kukagua funguo."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Unajua jinsi ya kuunda dictionary na kupata thamani kutoka ndani yake. Lakini nini kinatokea kama data ikibadilika? Wakati fulani, nitakuwa mzee zaidi. Sitakuwa `42`, nitakuwa `43`.

Tunacasishaje dictionary? Basi, tunatumia njia inayofanana sana na ile tunayotumia kupata kitu. Unajua kwamba tunapata kitu kwa kutumia mabano ya mraba kutoa thamani. Basi, tunaweza pia kutumia mabano ya mraba yakifuatiwa na alama ya sawa kusasisha dictionary. Jiki anaenda kwenye sanduku la person, anatoa ukurasa wa daftari, anatafuta funguo `"age"`, kisha anafuta `42` iliyokuwa hapo na kuandika `43` mahali pake, na kisha ukurasa wa daftari unarudi ndani ya sanduku. Hapa tunabadilisha dictionary yenyewe.

```javascript
person["age"] = 43
```

Jiki hafanyi dictionary mpya, anabadilisha daftari lililokuwa tayari ndani ya sanduku.

Vipi kama unataka kuongeza taarifa ambazo hazikuwepo awali? Basi, unaweza kufanya kitu kile kile.

Ukitaja funguo ambayo haipo, Jiki ataongeza tu funguo mpya chini kabisa na thamani hiyo.

Kwa hiyo katika kesi hii, atafungua daftari, atatafuta `"country"`, ataona haipo, kisha ataongeza mstari mpya chini, `"country"` upande wa kushoto, `"England"` upande wa kulia.

```javascript
person["country"] = "England"
```

Kwa hiyo sintaksia ile ile kama tunavyobadilisha thamani. Jiki hushughulikia vyote viwili kiotomatiki. Kama funguo ipo, anaisasisha. Kama haipo, anaiongeza. Huna haja ya kufanya lolote la pekee.

Na kama vile unavyoweza kuanza na orodha tupu na kuongeza vitu ndani yake, unaweza kuanza na dictionary tupu na kuongeza funguo moja baada ya nyingine. Tena, huo ni mtindo unaotumika sana. Utaiona kila wakati.

Matumizi moja ya kawaida ya dictionary ni kuhesabu vitu. Unaweza kutumia funguo kama vitu tunavyotaka kuhesabu na thamani kama idadi yake. Kwa hiyo fikiria unatazama ndege na unataka kufuatilia ni ndege wangapi wa kila aina umewaona. Kila unapomwona ndege, unaweka idadi yake kuwa moja, na kila unapomwona tena, unapata thamani yake ya sasa na kuiongeza kwa moja. Ili mtindo huu ufanye kazi, tunahitaji njia ya kukagua kama dictionary tayari ina funguo hiyo, na kama inayo, tunaongeza moja; kama haina funguo hiyo, tunahitaji kuianza na moja.

Na ili kufanya hivyo, tuna metodu kwenye dictionary, metodu ya `has` (kuwa na).

Unataja funguo unayovutiwa nayo, na Jiki atakagua kama dictionary ina funguo hiyo au la, kisha arejeshe kweli au sikweli kulingana na hilo.

```javascript
person.has("age") // true
```

Tukiunganisha yote pamoja, mtindo wa kuhesabu unaonekana hivi:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
