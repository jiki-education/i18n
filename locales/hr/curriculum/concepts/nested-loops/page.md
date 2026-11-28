---
title: "Petlje u petljama"
description: "Stavljanje jedne petlje u drugu tako da se unutarnja petlja izvrši do kraja za svaki korak vanjske petlje, što je savršeno za mreže."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Recimo da želimo red cvijeća. Možemo napisati nešto ovako. Postavimo poziciju, posadimo cvijet, povećamo poziciju za 10, ponovimo to i na kraju dobijemo lijep, uredan red cvijeća.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki za pločom, a ispod je posađen jedan uredan red cvijeća"
  width="406"
  height="400"
/>

No što ako želimo mrežu cvijeća s redovima i stupcima? Možda četiri reda s po pet cvjetova u svakom redu.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Mreža cvijeća četiri puta pet, a Jiki razmišlja kako da je nacrta"
  width="383"
  height="400"
/>

Imamo petlju koja crta jedan red cvijeća. Kako je možeš iskoristiti da nacrtaš četiri reda? Ili što bismo mogli napraviti da nacrtamo četiri reda?

Jedna je mogućnost jednostavno kopirati tu petlju četiri puta i promijeniti gornju poziciju u svakoj. To bi radilo. Bilo bi u redu. Ali to je ponavljanje, a postoji bolji način. Znamo da, kad se kôd ponavlja, možemo upotrijebiti petlju da ga pojednostavimo.

Ovdje dakle možemo upotrijebiti jednu petlju unutar druge. Jednu petlju za redove i jednu za cvjetove u tom redu. Počnimo tako da oko postojećeg kôda dodamo petlju `repeat`, da stekneš osjećaj za to kako funkcionira. I ponovit ćemo samo jednom. Dakle, govorimo Jikiju da sve unutar ovih vanjskih vitičastih zagrada napravi jednom. To ima točno isti učinak kao da vanjske petlje uopće nema. Govorimo Jikiju da nešto ponovi jednom, što je isto kao da mu kažemo da to napravi bez `repeat`. Ali tako ovaj kôd funkcionira. To je legitiman, valjan kôd. Imamo jednu petlju unutar druge.

Što se onda dogodi ako vanjsku petlju promijenimo tako da se ponovi dvaput? Sad će Jiki dvaput izvršiti cijelu onu stvar u kojoj `plant` (saditi) radi pet puta. Posadit će 10 cvjetova. Ali svi će ti cvjetovi biti u istom redu.

Isto kao što svaki put moramo malo pomaknuti poziciju slijeva nadesno, tako nakon svakog nacrtanog reda moramo pomaknuti i okomitu poziciju. Pa kako to napraviti? Možemo dodati vanjsku varijablu za gornju poziciju, upotrijebiti je u funkciji `plant` i zatim je povećati za 10 nakon svakog reda.

Razmisli o tome kolika je vrijednost u svakom trenutku. Gornja pozicija počinje na 10. Prvih pet puta kad sadimo, ostaje takva. Lijeva pozicija se povećava. Zatim gornjoj poziciji dodamo još 10 i posadimo još pet cvjetova malo niže. Lijevu poziciju vraćamo natrag na 10 i onda je svaki put iznova povećavamo.

I sad možemo reći da se to ponovi četiri puta i dobit ćemo četiri reda po pet cvjetova.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Gotova mreža cvijeća četiri puta pet, a nasmijani Jiki diže oba palca"
  width="389"
  height="400"
/>

Ključno je razumjeti da Jiki završi sav posao u unutarnjoj petlji (_inner loop_ na engleskom) prije nego se vrati na vanjsku petlju (_outer loop_ na engleskom). On ne skače amo-tamo. Dovrši unutarnju petlju i zatim prelazi na sljedeći korak vanjske petlje.

U ovoj situaciji možeš o vanjskoj petlji razmišljati kao o onoj koja kontrolira skupine ili red, a o unutarnjoj kao o onoj koja kontrolira svaki element u toj skupini ili svaki element u tom redu. Tako u našem primjeru vanjska petlja stvara četiri reda, a unutarnja stavlja pet cvjetova, pet elemenata u svaku skupinu.
