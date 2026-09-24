---
title: "After Party"
description: "Saznaj koliko gostiju poznata ličnost sme da povede, koristeći dva niza koja se poklapaju."
en_md5: 622d23b4488d6bc76957579a7a5e8993
---

Ponovo smo u ulozi izbacivača. Ali ovog puta, suočavamo se sa slavnim ličnostima sa A-liste na After Party-ju.

Kada se ove osobe pojave na tvojoj žurci, očekuju da ih prepoznaješ samo po imenu. Brad Pitt neće trošiti reči da ti kaže svoje prezime, već će samo reći „Brad“, i pogledaće te kao da si ti neprijatan.

Večeras se na tvom klipbordu nalaze dva niza. Prvi je `names`, puna imena svih pozvanih. Drugi je `plusOnes`, koliko dodatnih osoba svaki od tih gostiju sme da povede sa sobom (njihovu „pratnju“ (engl. _plus-ones_)). Ova dva niza su zapisana uporedo, unos po unos, istim redosledom, tako da se poklapaju. Na primer, treći unos niza `names` odgovara istoj osobi kao i treći unos niza `plusOnes`.

Napiši funkciju pod imenom `plusOnesFor` (za pronalaženje pratnje). Funkcija ima tri ulaza: niz `names`, niz `plusOnes` i **ime** osobe koja stoji ispred tebe. Treba da vratiš broj dodatnih gostiju koje ta osoba sme da povede.

Ipak, budi oprezan. Red se formira, a ovi ljudi ne stoje mirno u redu. „Brad“ znači Brad Pitt, a ne Bradley Cooper. A neki od njih su dovoljno slavni da su potpuno izbacili prezime.

Neki gosti su pozvani, ali ne smeju da povedu nikoga sa sobom, tako da je `0` potpuno ispravan odgovor za ime koje se nalazi u nizu. Neko koga uopšte nema u nizu je sasvim druga stvar, a za takvu osobu treba da vratiš string `"Not on the list!"`, tačno onako kako je napisano.

### Metode i svojstva nizova

Baš kao i stringovi, nizovi takođe imaju metode i svojstva. U ovoj vežbi mogao bi da koristiš svojstvo `.length`. Radi potpuno isto kao i verzija za stringove, samo što sada govori koliko elemenata se nalazi u nizu, a ne koliko slova ima u stringu.

Na primer:

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

Zabavi se!
