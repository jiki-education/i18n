---
title: "Reči za natpise"
description: "Razbij naziv firme na pojedinačne reči koje treba odštampati."
en_md5: b2d0a5c31cfbb7036c1a860f59498ff8
---

Pre nekog vremena, jedan kupac koji se bavi izradom natpisa zamolio te je da mu napraviš program. Sada se vraća sa novim zahtevom. Pravi sve veće natpise: svaku reč prvo odštampa, a zatim ih sastavlja na izlozima firme, na licu mesta.

Potrebno mu je da napraviš prvi korak tog programa: da uzmeš naziv firme i razbiješ ga na reči, koje onda može da štampa.

Napiši funkciju `signWords(businessName)` (reči natpisa, naziv firme). Ona prima naziv firme i vraća niz reči iz njega. Na primer, `signWords("Frank's Hotdogs")` treba da vrati `["Frank's", "Hotdogs"]`.

Reči su delovi razdvojeni razmacima. Ali na jednu stvar treba da paziš... Ponekad kupci greškom pošalju naziv firme sa više uzastopnih razmaka. Ako se to desi, treba da ih zanemariš, pa `"Frank's   Hotdogs"` i dalje treba da vrati `["Frank's", "Hotdogs"]`.

### `push` i `split`

Ključ ove vežbe je da pomoću metode `push` izgradiš niz. Možeš da koristiš i metodu `split`, ali možda će ti biti lakše da posao razdvajanja uradiš ručno. Nijedan način nije pogrešan. Ako ti treba podsetnik kako te metode rade, pogledaj ispod.

Zabavi se!
