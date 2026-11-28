---
title: "Ključna riječ `else`"
description: "Dodavanje grane `else` nakon naredbe `if` kako bi se izvršio drugi blok kôda kad se uvjet pokaže netočnim."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Naredbe `if` omogućuju ti da provjeriš uvjete i izvršiš kôd samo kad je nešto točno. A sad upoznajmo `else`, partnera u zločinu naredbe `if`.

Kad naiđe na naredbu `if` (_if statement_ na engleskom), Jiki izvršava blok naredbi kad je uvjet točan, a preskače taj blok kad je netočan. No što ako želiš da Jiki učini jedno kad je uvjet točan, a nešto sasvim drugo kad je netočan? Za to služi `else`. Nakon završne vitičaste zagrade naredbe `if` možemo staviti granu `else` (_else clause_ na engleskom) i Jiki će je izvršiti ako je uvjet naredbe `if` netočan. Vratimo se primjeru s izbacivačem u klubu: sad imamo opciju otvoriti vrata ili nekoga odbiti, što je vjerojatno bolje nego da ga posve ignoriramo kao prije. Zamisli to kao račvanje ceste. Jiki dolazi do račvanja, provjeri uvjet i onda može krenuti jednim putem ako je točan, ili drugim ako je netočan. Ali nikad ne ide obama putovima.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Račvanje ceste na vratima kluba: otvori vrata kad je uvjet točan, odbij osobu kad je netočan"
  width="500"
  height="332"
/>

No što ako imaš više od dvije mogućnosti? Zamisli da naš izbacivač prodaje ulaznice. Mlađi od trinaest dobivaju dječju ulaznicu. Između trinaest i dvadeset, tinejdžersku. Dvadeset i više, odraslu. Sad imaš tri različita ishoda. Za to možemo dodati još jednu naredbu `if` nakon `else`. Pa možemo reći: „Ako je ovo, učini ovo. Ako je ovo drugo, učini ono. Inače, učini ono treće." U ovom primjeru Jiki će vidjeti `if` i provjeriti prvi uvjet. Je li šesnaest manje od trinaest? Nije. Zato prelazi na `else if`. Je li šesnaest manje od dvadeset? Jest, to je točno. Zato izvršava taj blok i izdaje tinejdžersku ulaznicu. Ali time je završio. Ne provjerava ništa dalje. Ni ne gleda završni `else`. Kad Jiki jednom nađe uvjet koji je točan, izvrši taj blok i preskoči sve ispod njega.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Ovo je najvažnije za razumjeti. Uvijek se izvršava samo jedan blok. Jiki prolazi kroz taj slijed, nađe prvi točan uvjet, izvrši taj blok i ide dalje.

Sad, jedna stvar koju valja dobro razumjeti jer na njoj ljudi često posrnu. Postoji suptilna, ali vrlo važna razlika između dviju zasebnih naredbi `if` i korištenja `else if`. Zamisli da pravimo program koji daje osnovnu ili bonus nagradu, ovisno o nečijem rezultatu. Pogledajmo te dvije mogućnosti. Jedna koristi `else if`, a druga dvije zasebne naredbe `if`. Što će se različito dogoditi?

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

U prvom slučaju, s `else if`, provjeravamo visok rezultat i dajemo nagradu, a zatim ne izvršavamo `else if`. Tako osoba s rezultatom iznad stotinu dobiva samo bonus nagradu.

No u drugom primjeru dvije su naredbe `if` potpuno neovisne. Obje će se izvršiti i obje će biti točne. Tako osoba ovdje dobiva dvije nagrade. U prvom slučaju jednu nagradu. U drugom dvije. Odvoji trenutak da provjeriš da ti je to stvarno jasno.

Zanimljivo je i to da bi oba pristupa mogla biti ispravna, ovisno o tome kako je igra osmišljena. Možda natjecatelj dobije i redovnu i bonus nagradu, a možda samo bude nagrađen bonus nagradom. Nijedan od tih dvaju dijelova kôda nije sam po sebi dobar ni loš. Samo su korisni u različitim situacijama. Ali moraš znati koji namjeravaš upotrijebiti.
