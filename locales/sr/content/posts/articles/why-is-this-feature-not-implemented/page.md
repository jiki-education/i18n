---
title: "Zašto ova funkcionalnost nije implementirana?"
excerpt: "Saznaj zašto su određene funkcionalnosti jezika isključene iz Jikija i kako ti to pomaže da učiš efikasnije."
tags: ["exercises"]
seo:
  description: "Razumevanje zašto Jiki isključuje određene JavaScript i Python funkcionalnosti da bi pomogao početnicima da uče"
  keywords: ["jiki", "javascript", "python", "isključene funkcionalnosti", "opasne prečice", "učenje"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Pokušavaš da pokreneš svoj kod i dobijaš poruku da nešto nije dostupno u ovoj verziji jezika? Nastavi da čitaš da saznaš o čemu se radi!

Ako dobiješ poruku koja kaže „This feature isn't available to you yet“, to je drugačija situacija – pročitaj **[Kada će ova funkcionalnost biti otključana?](/articles/when-will-this-feature-unlock)**.

## Uvod

Koristiš ključnu reč ili koncept koji naša verzija jezika ne podržava. Ne brini – ovo nije bag!

Verzije JavaScript-a i Python-a koje koristiš u Jikiju su **posebno dizajnirane od nas** da ti pomognu da učiš. Pažljivo smo uklonili određene funkcionalnosti kako bismo sprečili da slučajno naletiš na složene ili zbunjujuće delove jezika pre nego što za to dođe vreme.

## Zašto isključujemo funkcionalnosti?

Programski jezici su dizajnirani za **profesionalce**. Sadrže napredne funkcionalnosti koje pomažu iskusnim programerima da rade brže, plus istorijski teret – funkcionalnosti koje je verovatno trebalo ukloniti pre više godina, ali su ostale da bi stari sistemi nastavili da rade.

Kada učiš, ove funkcionalnosti stvaraju zabunu. Uklanjanjem njih, Jiki ti omogućava da se fokusiraš na ono što je važno: **učenje da razmišljaš kao programer**.

### Opasne prečice

Neke funkcionalnosti zovemo **„opasnim prečicama“** – stvari kojima možeš slučajno da pucaš sebi u nogu. To su:

- **Zaista problematične** i najbolje ih je izbegavati čak i ako si profesionalac.
- **Zbunjujući granični slučajevi** koji odvlače pažnju od osnovnih koncepata.
- **Istorijski teret** koji postoji samo zbog unazadne kompatibilnosti.

Ove funkcionalnosti su trajno isključene iz Jikija jer jednostavno nisu vredne zabune koju izazivaju.

### Napredne funkcionalnosti

Druge funkcionalnosti su isključene jer su **previše napredne** za tvoju trenutnu fazu učenja. Ovo nisu loše funkcionalnosti – jednostavno nisu korisne kada učiš osnove.

Kako napreduješ kroz Jiki, neke od ovih funkcionalnosti će se otključati. Ali za sada, fokusiraj se na savladavanje osnova.

## Specifičnosti

Ovo ne moraš da čitaš osim ako te aktivno ne zanima šta se dešava ispod haube i koje smo odluke doneli.

### JavaScript

| Funkcionalnost                                             | Zašto je isključena                                                                                                            |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `var`                                                      | Koristi `let` ili `const` umesto toga. `var` ima zbunjujuća pravila opsega koja uzrokuju bagove čak i kod iskusnih programera. |
| `with`                                                     | Zastarela i zbunjujuća. Stvara dvosmislen kod o kome je teško rasuđivati.                                                     |
| `debugger`                                                 | Alat za razvoj, nije potreban za učenje.                                                                                       |
| `void`                                                     | Retko koristan i zbunjujući za početnike.                                                                                      |
| `yield`                                                    | Napredna funkcionalnost generatora. O generatorima ćeš učiti kasnije u svom putovanju.                                         |
| `delete`                                                   | Može izazvati zbunjujuće ponašanje sa nizovima i objektima.                                                                    |
| `import` / `export`                                        | Funkcionalnosti sistema modula. Jiki rukuje modulima na drugačiji način da bi stvari ostale jednostavne.                        |
| Bitovni operatori (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Veoma retko potrebni i zbunjujući kada učiš. Ovo su za manipulaciju bitovima na niskom nivou.                                  |

### Python

| Funkcionalnost | Zašto je isključena                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `global`       | Menjanje globalnih promenljivih unutar funkcija vodi do zbunjujućeg koda. Umesto toga nauči da prosleđuješ vrednosti kao parametre.                |
| `nonlocal`     | Napredna funkcionalnost opsega za ugnežđene funkcije. Nije potrebna kada učiš osnove.                                                              |
| `assert`       | Alat za debagovanje koji može biti onemogućen u produkciji. Umesto toga, nauči pravilno rukovanje greškama.                                        |

## Šta ako mi treba neka funkcionalnost?

Svaka vežba u Jikiju je dizajnirana tako da se može rešiti pomoću funkcionalnosti koje su ti do sada predstavljene. Ako naiđeš na ograničenje, obično postoji bolji način da rešiš svoj problem koristeći dostupne funkcionalnosti. To je deo učenja – shvatanje kako da radiš unutar ograničenja.

Ako zaista misliš da bi neka funkcionalnost trebalo da bude dostupna na tvom nivou, javi nam! Uvek prilagođavamo ono što je uključeno na osnovu povratnih informacija.
