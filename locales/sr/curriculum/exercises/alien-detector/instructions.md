---
title: "Detektor vanzemaljaca"
description: "Pomeraj laser s leva na desno i obaraj vanzemaljce."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

U prethodnoj vežbi Space Invaders pomeraš laser s jedne strane na drugu i obaraš sve vanzemaljce. Najvećim delom je to omogućavala funkcija `isAlienAbove()` (da li je vanzemaljac iznad tebe). U ovoj vežbi je nema, ali i dalje treba da oboriš sve vanzemaljce!

Pred tobom je prazno platno za početak. Slobodno iskoristi svoj kod iz <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">prethodne vežbe Space Invaders</a> kao osnovu.

Ova vežba je osmišljena kao izazov! Idi polako.

### Tvoj zadatak

Obori sve vanzemaljce. Umesto da možeš da pitaš vežbu da li je iznad tebe vanzemaljac, treba da pratiš koji su vanzemaljci oboreni, a koji su još tu.

### Upoznaj `getStartingAliensInRow(idx)` (dobavi početne vanzemaljce u redu)

Imaš novu funkciju koja se zove `getStartingAliensInRow(idx)`. Prima jedan ulaz: indeks reda, računajući od dna. Redova ima najviše tri, pa vrednost ulaza može biti `0`, `1` ili `2`.

Funkcija vraća niz od 11 Boolean vrednosti. Svaka Boolean vrednost govori da li se na toj poziciji nalazi vanzemaljac na **početku** vežbe. Tako bi `[true, false, false, ...]` značilo da, pre nego što bilo šta uradiš, vanzemaljac postoji na prvoj poziciji, ali ne i na sledeće dve (itd).

Ova funkcija vraća samo **početne** pozicije vanzemaljaca. Ona se **ne** ažurira dok ih obaraš!

### Napomene

- Svaki put kada se pomeriš levo ili desno, pomeraš se jednu poziciju napred ili nazad. Ta pozicija odgovara mestima na kojima vanzemaljci mogu da budu.
- Vanzemaljci se u ovoj vežbi ne pojavljuju ponovo.
