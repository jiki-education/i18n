---
title: "Operator `&&` (i)"
description: "Kombiniranje dvaju uvjeta pomoću `&&`, tako da je cijeli uvjet točan samo kad su oba dijela točna."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Da ti kažem da otvoriš vrata samo ako je netko stariji od 20 godina, vjerojatno bi ti bilo jasno što trebaš učiniti. A što ako trebaš provjeriti je li netko stariji od 20 _i_ nosi li odgovarajuću odjeću? Dakle, trebaš provjeriti dva različita uvjeta odjednom. Kako to učiniti?

Jedno je rješenje ugniježđena naredba `if` (_nested if statement_ na engleskom), slično kao što smo prije imali ugniježđene petlje. Mogli bismo reći: ako je `age` veći od `20`, ulazimo u ovaj blok naredbi, zatim još jedan `if` koji provjerava je li `outfit` jednak `"disco"`, pa još jedne vitičaste zagrade i novi blok naredbi. To bi radilo, ali ispadne prilično neuredno, pogotovo kad imaš mnogo uvjeta.

Srećom, postoji lakši način, a to je da uvjeti mogu imati više dijelova. Umjesto da u uvjetu provjeravamo samo jednu stvar, možemo provjeriti dvije, tri ili više stvari. A za to trebamo ključnu riječ `and`. Nažalost, u JavaScriptu ključna riječ `and` zapravo nije riječ and, kao što je u nekim jezicima. Umjesto toga moraš napisati dva znaka `&` jedan uz drugi. To ćeš jednostavno morati zapamtiti. Nezgodno je, ali tako je kako je, i brzo ćeš se naviknuti.

Zato ovo možemo iskoristiti za složeniji uvjet. Možemo reći: ako je `age` veći od `20` i `outfit` je `"disco"`, onda idemo dalje. Ako je `age` manji od `20` ili `outfit` nije `"disco"`, onda cijeli uvjet nije točan, a s njim ni cijela naredba. Ako ti je logika ikad bila dio školovanja, ako ti nije strana elektronika ili naprednija matematika, ovo će ti se činiti posve prirodnim. Ako nije, brzo ćeš to savladati.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Jedna stvar zbunjuje ljude i kod `and` i kod `or`: svaka strana tog `and`/`or` (i/ili) mora biti potpuna usporedba. Zato, čak i kad na objema stranama uspoređuješ istu varijablu, moraš je ponoviti. Ne možeš napisati `if age is greater than 13 and less than 20`. Moraš napisati `if age is greater than 13 and age is less than 20`. Obje strane moraju biti potpune usporedbe.

```javascript
if (age > 13 && age < 20)
```
