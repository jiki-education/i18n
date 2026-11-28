---
title: "Korištenje više funkcija zajedno"
description: "Razbijanje problema na male funkcije s jednom odgovornošću koje pozivaju jedna drugu, tako da svaki dio ostane jednostavan i da se može ponovno upotrijebiti."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Do sada je svaka napisana funkcija uglavnom stajala na vlastitim nogama i sadržavala svu logiku koja joj je potrebna za rad.

Sada ćemo pogledati kako razdvojiti funkcije tako da dobijemo manje funkcije koje rade zajedno, umjesto velikih funkcija u kojima se mnogo toga događa.

Kao opće pravilo u programiranju, svaka funkcija treba raditi najmanje što može. To znači da funkcija ima jednu odgovornost (_single responsibility_ na engleskom). Svaka funkcija treba raditi samo jednu stvar, a za različite poddijelove te stvari koristiti druge funkcije.

Pogledajmo primjer.

Zamisli da imamo funkciju čiji je posao vratiti string koji opisuje neko ime.

Jednostavna verzija izgledala bi ovako. Imamo petlju za brojanje, nešto što već znaš napisati, a zatim predložak stringa koji sastavlja rezultat.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

To radi ispravno, ali funkcija radi dvije stvari. Radi jednu prilično općenitu stvar, brojanje, i drugu vrlo specifičnu, sastavljanje tog stringa u određenom formatu.

Bilo bi mnogo ljepše to razdvojiti na dvije funkcije: jednu koja je odgovorna za brojanje i drugu koja je odgovorna za opisivanje imena u tom određenom formatu.

```javascript
// Samo broji slova
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Samo lijepo oblikuje tekst
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Tu općenitu funkciju za brojanje zatim možemo ponovno upotrijebiti u ovom oblikovanju stringa, ali i na bilo kojem drugom mjestu gdje nam zatreba. Kad god trebamo prebrojati slova u stringu, ta funkcija nema nikakve veze s ispisom.

Obje funkcije možeš čitati zasebno i odmah razumjeti što svaka od njih radi.

Kako funkcije postaju složenije i kako ih je sve više, ta tehnika je razlika između urednog, čitljivog kôda i potpune zbrke i nereda.

Ovdje vrijedi ponovno spomenuti jednu stvar: ono što stvoriš unutar funkcije ne mogu druge funkcije dohvatiti, osim ako to namjerno ne vratiš.

Dakle, ako pokušaš referencirati varijablu `count` (broj) iz `describeName` (opiši ime), to ne možeš, jer pripada drugoj funkciji.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki razmišlja, sa žaruljom iznad glave, o tome kako varijable ostaju privatne unutar svake funkcije"
  width="361"
  height="353"
/>

U JavaScriptu možemo stvarati varijable na vrhu, iznad svega, koje su zajedničke funkcijama, ali stvarno preporučujem da to ne radiš, osim ako za to postoji stvarno dobar razlog.

Što više držiš svaku funkciju neovisnom, a stručni naziv za to je čista funkcija (_pure function_ na engleskom), to će tvoj kôd biti čišći i stvarat ćeš manje bugova.
