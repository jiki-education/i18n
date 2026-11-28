---
title: "Rječnici"
description: "Stranica bilježnice na spiralu na kojoj svaki unos ima ključ s lijeve strane, a svoju vrijednost s desne, pa umjesto popisa dobivaš podatke s imenima."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Polja su naš prvi izbor kad imamo popis bilo čega: popis mentora, popis rezultata, popis sastojaka. Za bilo kakav popis posegni za poljem.

Ali postoji još jedna struktura podataka (_data structure_ na engleskom) koja je također vrlo česta kad želiš nešto malo složenije od popisa.

Zamisli da želimo pohraniti nekoliko podataka o meni: ime, dob i mjesto rođenja. Možeš za to upotrijebiti polje, ali nije baš jasno što se u njemu nalazi.

Je li Engleska mjesto gdje sam rođen ili mjesto gdje živim? Je li 42 moja dob ili nešto drugo?

I ako to želim upotrijebiti, moram zapamtiti da je prva pozicija za ime, druga za dob, a treća za mjesto rođenja. Sve je to malo neuredno, a neuredno je zato što ovo i nije popis stvari. Složenije je od toga. I tu na scenu stupaju rječnici (_dictionaries_ na engleskom). Rječnik je nova vrsta strukture podataka. To ti je peta vrsta. Imaš stringove, brojeve, Boolean, polja, a sada i rječnike.

A rječnik zamisli kao stranicu bilježnice na spiralu.

S lijeve strane imaš naslove, riječi `"name"`, `"age"`, `"birthplace"`, a za njih kažemo da su ključevi (_keys_ na engleskom).

A s desne strane, uz svaki naslov, imaš stvarne podatke: `"Jeremy"`, `42`, `"England"`, a za njih kažemo da su vrijednosti (_values_ na engleskom).

Kao i polje, rječnik je jedna stvar. To je jedna stranica iz bilježnice. I kao i polje, Jiki ga može staviti u varijablu, u kutiju ili na ulaz funkcije, ili ga može izvući iz izlaznog otvora. A evo kako rječnik izgleda u kôdu. Vitičastim zagradama označavamo početak i kraj, a unutra imaš parove: ključ s lijeve strane, dvotočku i vrijednost s desne. Između svakog para ide zarez. Jiki to vidi, izvadi svoju bilježnicu na spiralu i za svaki par zapiše `name`, `"Jeremy"`, `age`, `42` i tako dalje.

A kad završi, otkine stranicu i stavi je u kutiju s naljepnicom `person` (osoba).

Treba znati nekoliko pravila. Ključevi su uvijek stringovi. Moraju biti u navodnicima, a svaki ključ mora biti jedinstven. Ne možeš imati dva ključa `name` u istom rječniku.

Vrijednosti mogu biti iste ako želiš, ali ključevi moraju biti različiti.

A vrijednosti mogu biti bilo što: stringovi, brojevi, Boolean, polja ili čak drugi rječnici.

Možeš imati i prazan rječnik, baš kao što smo imali prazno polje, pa možemo krenuti od njega i kasnije ga nadograditi.

Rječnik dakle imaš, ali kako iz njega nešto izvući?

Koristimo istu sintaksu s uglatim zagradama kao kod polja i stringova, ali umjesto broja pozicije upisujemo ključ. Pa ako želimo iz rječnika izvući nečije ime, napišemo:

```javascript
person["name"] // "Jeremy"
```

To Jikiju kaže da pogleda u rječnik `person`, pronađe ključ `"name"` i izvadi njegovu vrijednost. Jiki odlazi do kutije `person`, vadi stranicu iz bilježnice, pregledava sve ključeve dok ne pronađe `"name"`, zatim pročita vrijednost `"Jeremy"` i stavi je u novu kutiju nazvanu `name`.

Uglate zagrade uvijek znače isto: posegneš u nešto i izvadiš ono što ti treba. Kod polja i stringova koristiš broj da kažeš s koje pozicije želiš nešto dobiti. Kod rječnika kao ključ koristiš string.

Ista ideja, samo malo drukčija sintaksa.
