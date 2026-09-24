---
title: "Wordle: obrada cele igre"
description: "Obradi celu Wordle igru, bojeći red po red svaki pokušaj."
en_md5: d825747e1df06c1d9bcdc0900a0615f4
---

Evo nas ponovo kod Wordle igre, a sada je vreme da obradimo celu igru, a ne samo jedan pokušaj!

Kada završiš ovu vežbu, otključaćeš **Premium izazov** u kome praviš bota koji zaista odigra celu igru od početka do kraja, smišljajući usput svoje pokušaje. To je daleko najnapredniji izazov do sada!

### Ova vežba

Za sada treba da napraviš funkciju koja se zove `processGame(target, guesses)` (obrađuje igru) i prima dva ulaza: tajnu ciljnu reč i niz pokušaja koje je igrač napravio.

Treba da odrediš stanje svakog reda, a zatim pozoveš funkciju `colorRow(row, states)` (boji red) sa brojem reda (`1-6`) i nizom stanja, po jedno za svako slovo.

Na primer, ako pozovemo `processGame("crane", ["spoil", "trace", "crane"])`, očekujemo da tvoj kod tri puta pozove funkciju `colorRow`:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

U editoru te čeka tvoj kod iz prethodne vežbe kao polazna tačka. Razmisli kako da svoj postojeći kod učiniš **generičkijim** da bi ovo radilo. Srećno!

### Bonus: novo pravilo

Postoji jedno Wordle pravilo koje je do sada ostalo po strani...

Ako se neko slovo pojavi dva puta u tvom pokušaju, a samo jednom u ciljnoj reči:

- Ako je jedno od njih na pravom mestu, ono dobija zelenu boju, a drugo sivu.
- Ako su oba na pogrešnim mestima, prvo dobija žutu boju, a drugo sivu.

Isti princip važi i za veće brojeve: kada se isto slovo pojavi tri puta u pokušaju, a dva puta u reči, dva se oboje, a treće postaje sivo.

Pokreni drugi bonus scenario i pogledaj red `"swiss"`. Ciljna reč je `"swims"`, koja sadrži dva slova `"s"`, i oba su već zelena: ono na početku i ono na kraju. Ali tvoj kod boji i četvrto polje žuto, što igraču govori da postoji _još jedno_ `"s"` koje tek treba pronaći. A ne postoji. To četvrto polje treba da bude sivo.

Problem treba da rešiš delimično za prvi bonus scenario (pa počni od njega!), a zatim ga u potpunosti rešiš i za drugi.

Ovaj zadatak je izazov! **Zapamti, ovo je bonus i ne moraš da ga završiš!**
