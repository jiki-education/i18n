---
title: "Korištenje lanaca `else if`"
description: "Nizanje `else if` klauzula za provjeru nekoliko uvjeta po redu, gdje se izvršava samo prvi blok čiji je uvjet točan."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Već znaš kako ti `if` i `else` otvaraju dvije staze: jedno napraviš kad je uvjet točan, a drugo kad nije. No što ako imaš više od dvije mogućnosti?

Zamisli da naš izbacivač prodaje ulaznice. Ako imaš manje od trinaest godina, dobiješ dječju ulaznicu. Između trinaest i dvadeset slijedi tinejdžerska. S dvadeset ili više godina dobiješ ulaznicu za odrasle. Dakle, sad imaš tri različita ishoda. Za to možemo dodati još jednu naredbu `if` nakon `else`. Možemo reći: „Ako je ovo točno, napravi ovo. Inače, ako je ovo točno, napravi ono. Inače, napravi ovo treće." U ovom primjeru Jiki će vidjeti `if` i provjeriti prvi uvjet. Je li šesnaest manje od trinaest? Nije. Zato prelazi na else if. Je li šesnaest manje od dvadeset? Jest, to je točno. Zato izvrši taj blok i izda tinejdžersku ulaznicu. Ali onda je gotov. Ne provjerava ništa više. Uopće ne gleda završni else. Kad Jiki nađe uvjet koji je točan, izvrši taj blok i preskoči sve ispod njega.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Tri ulaznice s natpisima CHILD, TEEN i ADULT, po jedna za svaki ishod provjere dobi"
  width="500"
  height="142"
/>

To je ključno za razumijevanje. Uvijek se izvršava samo jedan blok. Jiki prolazi kroz ovaj lanac, nađe prvi točan uvjet, izvrši taj blok i ide dalje.

Sad, postoji jedna stvar koju stvarno trebaš razumjeti, jer na njoj ljudi često zapnu. Postoji suptilna, ali vrlo važna razlika između pisanja dviju zasebnih naredbi if i korištenja else if. Zamisli da pravimo program koji daje osnovnu ili bonus nagradu, ovisno o nečijem rezultatu. Pogledaj ove dvije mogućnosti. Jedna koristi else if, a druga dvije zasebne naredbe `if`. Što će se razlikovati?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

U prvom slučaju, s else if, provjeravamo je li rezultat visok i dajemo bonus nagradu, a zatim ne izvršavamo else if. Dakle, osoba s rezultatom iznad sto dobije samo bonus nagradu.

No u drugom primjeru dvije su naredbe if potpuno neovisne. Obje će se izvršiti i obje će biti točne. Zato osoba ovdje dobije dvije nagrade. U prvom slučaju jednu nagradu, u drugom dvije. Odvoji trenutak i provjeri je li ti to stvarno jasno.

Zanimljivo je i to da bi oba pristupa mogla biti točna, ovisno o tome kako je igra osmišljena. Možda natjecatelj dobije redovnu nagradu i još bonus, a možda samo bonus nagradu. Nijedan od tih dijelova kôda nije ni točan ni netočan. Samo su korisni u različitim situacijama. No moraš znati koji namjeravaš koristiti.
