---
title: "Ključna riječ `break`"
description: "Kako pomoću ključne riječi `break` u tijelu petlje odmah izaći iz petlje i prijeći na kôd koji slijedi."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Ključna riječ `break` može se upotrijebiti bilo gdje u tijelu bilo koje petlje.

Dio između vitičastih zagrada je tijelo. A kad ga Jiki vidi, odmah izlazi iz petlje i prelazi na kôd koji je ispod petlje.

Ako, dakle, imamo ograničenje koje kaže da se petlja izvršava 50 puta, ali želimo stati ako korisnik puca pet puta, na vrhu bismo mogli imati petlju `for` koja broji prema 50.

A nasred petlje onda bismo mogli imati uvjet koji provjerava je li korisnik pucao pet puta, pa ako je, naredbom `break` (prekinuti petlju) zaustavljamo petlju.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // izlazak iz petlje
  }
}
```
