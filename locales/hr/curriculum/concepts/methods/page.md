---
title: "Metode"
description: 'Funkcije koje pripadaju vrijednosti i pozivaju se točkastim zapisom, kao `"Jeremy".includes("e")` ili `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Do sada smo o stringovima i brojevima razmišljali kao o prilično statičnim stvarima.

Premda to i jesu, u njih je ugrađeno mnogo funkcionalnosti koje Jiki može koristiti.

Kako budemo napredovali, učiti ćemo o tim funkcionalnostima, o tim sposobnostima koje imaju i koje ti znatno olakšavaju život.

Postoje dvije vrste sposobnosti koje ćemo pogledati: svojstva (_properties_ na engleskom) i metode (_methods_ na engleskom).

Metode su funkcije koje pripadaju stringu.

Umjesto da pišemo funkciju kojoj string predajemo kao ulaz, metodu možemo koristiti izravno na stringu.

Na primjer, sjećaš li se funkcije koja provjerava sadrži li string neko određeno slovo? Pa, stringovi zapravo imaju metodu koja se zove `includes` (sadrži), i možemo je koristiti s istim točkastim zapisom kao kod svojstava.

Razlika u odnosu na svojstva je u tome što ih pišemo kao funkcije, sa zagradama i ulazima.

Pa možemo napisati:

```javascript
"Jeremy".includes("e") // true
```

I dobit ćemo natrag `true`, jer `"Jeremy"` sadrži `"e"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki piše string Jeremy na papiriću"
  width="359"
  height="400"
/>

Metode se razlikuju od svojstava jer nisu statične činjenice. One su zapravo funkcije. Možeš ih zamisliti kao funkcije koje imaju ugrađenu kutiju sa stringom unutra.

Kako rade, zasad nije toliko važno. Nećeš ih još neko vrijeme izrađivati. Dovoljno je znati da metodu koristiš tako da napišeš točku i zatim uobičajenu sintaksu funkcije.

Jedna stvar koju treba znati o stringovima je da metode ne mijenjaju ništa unutar stringa. Na primjer, postoji metoda `toUpperCase` (pretvori u velika slova) koja vraća string sa svim slovima velikim. Ali to ne mijenja izvorni string. On i dalje sadrži `"Jeremy"`, sa samo jednim velikim slovom J. Umjesto toga Jiki stvara novi string koji je sav velikim slovima.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
