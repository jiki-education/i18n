---
title: "Zvezde"
description: "Napravi i nacrtaj piramidu od zvezda."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

U ovoj vežbi ćeš napraviti generator vizuelnih šablona koji crta redove zvezda.

Tvoj zadatak je da napraviš funkciju `layoutStars` (raspoređivanje zvezda) koja prima jedan ulaz, `numRows`, koji određuje koliko je redova potrebno, a zatim crta razne redove zvezda.

Funkcija treba da:

1. Napravi niz stringova, po jedan string za svaki red. Kreni od dna, tako da najduži red bude prvi. Na primer, kada je `numRows` `3`, taj niz bi bio `["***", "**", "*"]`.
2. Iskoristi funkciju `drawStars(rows)`, prosleđujući joj svoje redove, i ona će nacrtati zvezde.

Ako je `numRows` 0, niz treba da bude prazan (`[]`) i ništa se ne crta.

Ako želiš da vidiš kako to izgleda u akciji, možeš da pokreneš `drawStars(["***", "**", "*"])` i vidiš kako se zvezde crtaju.

### Metoda `push`

Kao i u prošloj vežbi, niz ćeš morati da gradiš koristeći metodu `.push(element)`. U ovoj vežbi smeš da napraviš samo jedan novi niz (`let something = []`) u svom kodu.

Lepo se zabavi!
