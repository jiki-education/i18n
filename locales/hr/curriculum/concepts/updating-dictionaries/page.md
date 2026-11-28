---
title: "Ažuriranje rječnika"
description: "Kako pomoću `dict[key] = value` ažurirati postojeće zapise ili dodati nove, te metoda `has` za provjeru ključeva."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Znaš stvoriti rječnik i izvući vrijednosti iz njega. Ali što se dogodi kad se podaci promijene? S vremenom ću ostarjeti. Neću više biti `42`, bit ću `43`.

Kako ažuriramo rječnik? Na vrlo sličan način kao kad nešto tražimo. Znaš da nešto tražimo pomoću uglatih zagrada kako bismo izvukli vrijednost. E pa, uglate zagrade nakon kojih slijedi znak jednakosti služe i za ažuriranje rječnika. Jiki odlazi do kutije s naljepnicom person, vadi stranicu bilježnice, pronalazi ključ `"age"`, briše `42` koji je ondje bio i na njegovo mjesto upisuje `43`, a zatim se stranica bilježnice vraća u kutiju. Time se mijenja sam rječnik.

```javascript
person["age"] = 43
```

Jiki ne stvara novi rječnik, on mijenja bilježnicu koja je već bila u kutiji.

Što ako želiš dodati podatak kojeg prije nije bilo? Pa možeš učiniti potpuno istu stvar.

Ako navedeš ključ koji ne postoji, Jiki će jednostavno dodati novi ključ na dno, s tom vrijednošću.

U ovom slučaju otvorit će bilježnicu, potražiti `"country"`, vidjeti da ga nema, a zatim na dno dodati novi redak: `"country"` lijevo, `"England"` desno.

```javascript
person["country"] = "England"
```

Dakle, posve ista sintaksa kao kod promjene vrijednosti. Jiki se automatski brine za oboje. Ako ključ postoji, ažurira ga. Ako ne postoji, dodaje ga. Ne moraš raditi ništa posebno.

I baš kao što možeš krenuti s praznim poljem i dodavati stvari u njega, možeš krenuti s praznim rječnikom i dodavati ključeve jedan po jedan. I to je, opet, vrlo čest obrazac. Viđat ćeš ga stalno.

Jedna je od čestih upotreba rječnika brojanje stvari. Ključevi mogu biti stvari koje želimo brojati, a vrijednosti njihovi brojevi. Zamisli da promatraš ptice i želiš znati koliko si puta vidio koju pticu. Kad prvi put vidiš neku pticu, postaviš njezin broj na jedan, a svaki sljedeći put kad je vidiš, uzmeš njezinu trenutnu vrijednost i uvećaš je za jedan. Da bi ovaj obrazac radio, trebamo način da provjerimo ima li rječnik taj ključ: ako ima, dodat ćemo mu jedan, a ako ga nema, krenut ćemo od jedinice.

A za to na rječnicima postoji metoda, metoda `has` (sadrži).

Navedeš ključ koji te zanima, a Jiki provjeri ima li rječnik taj ključ i prema tome vrati točno ili netočno.

```javascript
person.has("age") // true
```

Kad to sve spojimo, obrazac za brojanje izgleda ovako:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
