---
title: "Wordle: Rešavač"
description: "Napravi rešavač koji sam odigra celu partiju Wordle-a."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

U prošloj Wordle vežbi obrađuješ partiju u kojoj su ti pokušaji već bili dati. Ovaj put si na drugoj strani i ti si taj koji zapravo smišlja pokušaje.

Tvoj zadatak je da napraviš novu funkciju pod imenom `solveWordle()`, u kojoj pogađaš reči sve dok ne pogodiš tačnu. Igru treba da rešiš što efikasnije možeš, uz što manje reči.

Imaš novu funkciju `commonWords()` (uobičajene reči), koja vraća niz od 100+ reči koje možeš da koristiš u igri. To su reči kroz koje treba da prođeš. Uvek treba da počneš tako što ćeš pročitati prvu reč iz tog niza i pogoditi je, a zatim da nastaviš dalje: pronađeš sledeću moguću validnu reč i pogodiš je, pa tako redom.

Imaš funkciju `guess(word)` (pogodi reč) koja za svako slovo vraća niz vrednosti `"correct"`, `"present"`, `"absent"`.

Ključ ove vežbe je da razmisliš kako da pamtiš prethodne reči i rezultate pozivanja funkcije `guess`, pa da to znanje iskoristiš da stalno pronalaziš najefikasniji put do pobede.

### Primer

1. Pročitaš prvu reč iz niza, a to je `"which"`.
2. Pozoveš `guess("which")`, što vraća `["correct", "present", "absent", "absent", "absent"]`.
3. Izabereš sledeću reč iz niza uobičajenih reči koja počinje slovom `"w"` i ima `"h"` na trećem, četvrtom ili petom mestu.
4. Idi na (2)...

Srećno i zabavi se!
