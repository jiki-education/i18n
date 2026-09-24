---
title: "Wordle: obrada pogađanja"
description: "Proveri pogađanje u igri Wordle i utvrdi koja su slova tačna."
en_md5: d9a619535c9794108b46091447b14f6d
---

Dobro došao u Wordle, igru koja je postala viralna tokom karantina zbog kovida 19!

Igra funkcioniše ovako:

- Postoji tajna reč koju korisnik pokušava da pogodi.
- Korisnik ima 6 pokušaja da je pogodi.
- Za svako pogađanje postoji 5 kutija, po jedna za svako slovo:
  - Ako je slovo tačno, kutija postaje zelena.
  - Ako je slovo u tajnoj reči, ali na pogrešnom mestu, kutija postaje žuta.
  - Ako slovo nije u tajnoj reči, kutija postaje siva.

U nekoliko vežbi ćeš napraviti celu igru Wordle, ali u **ovoj vežbi** ćeš samo da se pobrineš da prvi red radi.

Za to treba da napraviš funkciju koja se zove `processGuess(target, guess)` (obrada pogađanja). Reči koje tvoja funkcija dobije uvek će biti napisane malim slovima.

Funkcija treba da utvrdi stanje svakog slova u pogađanju, a zatim da pozove funkciju `colorRow(1, states)` (bojenje reda) sa nizom stanja za svako slovo: `"correct"`, `"present"` ili `"absent"`.

Na primer, `processGuess("hello", "holes")` treba da pozove `colorRow` sa:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Proveri da ti je to jasno pre nego što nastaviš!

Takođe, ako si ljubitelj igre Wordle, možda ćeš primetiti da su pravila iznad **malo pojednostavljena** u odnosu na zvaničnu igru. U ovoj vežbi se drži ovih pojednostavljenih pravila, a kompletan set ćemo uvesti u sledećoj Wordle vežbi!

### Metode

Kao i u prethodnih nekoliko vežbi, niz stanja možeš da gradiš pomoću metode `push`, koja dodaje element na kraj niza. Na primer, `states.push("correct")` dodaje `"correct"` na kraj niza `states`.

Imaš i metodu `includes` ako želiš da proveriš da li jedan string sadrži drugi.

Srećno!
