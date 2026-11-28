---
title: "Svojstva"
description: "Statične činjenice o vrijednosti, kojima pristupamo točkom i bez zagrada, kao što je `.length` za broj slova u stringu."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Do sada smo o stringovima i brojevima razmišljali kao o prilično statičnim stvarima.

I dok to doista jesu, u njih je ugrađeno i mnogo funkcionalnosti koje Jiki može iskoristiti.

Pogledajmo dvije vrste mogućnosti: svojstva i metode.

Svojstva su činjenice o nečemu što možemo pitati Jikija da nam kaže. Tako na primjer stringovi imaju svojstvo koje se zove `length`, a pomoću kojeg nam Jiki može reći koliko je string dugačak.

Dakle, umjesto da petljom prolazimo kroz sva slova i računamo koliki je string, možemo jednostavno pitati Jikija da nam to kaže.

A za to koristimo novi oblik sintakse: točku.

Na primjer, ako imamo string `"Jeremy"` i želimo doznati njegovu duljinu, možemo napisati:

```javascript
"Jeremy".length // 6
```

Kad Jiki stvori string, prebroji slova i nekako u kut zapiše broj koji govori koliko ih je.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki broji slova stringa Jeremy i u kut zapiše broj"
  width="359"
  height="400"
/>

A zatim, kad upotrijebimo svojstvo `length`, Jiki jednostavno provjeri o kojem se broju radilo. Tako u našem primjeru `"Jeremy".length`, kad Jiki stvori string `"Jeremy"`, prebroji slova, u kut zapiše broj šest, a onda kad napišemo `"Jeremy".length`, on to provjeri. Dakle, o svojstvima možeš razmišljati kao o činjenicama o toj stvari.
