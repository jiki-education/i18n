---
title: "Indeksiranje stringa"
description: "Izdvajanje jednog slova iz stringa pomoću uglatih zagrada i broja pozicije. Upamti da pozicije počinju od nule."
en_md5: cd31e0366b3090b358494667003f54c9
---

Zamisli da imaš moje ime, Jeremy, i da želiš iz njega izvući moj inicijal J. Kako bismo to napravili?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki razmišlja kako izvući jedno slovo iz stringa"
  width="361"
  height="353"
/>

Pa, o stringu možeš razmišljati kao o slijedu slova. Tako `"Jeremy"` ima šest slova, J-E-R-E-M-Y, i svako od njih ima svoju poziciju. `"J"` je na prvoj poziciji, a `"y"` na posljednjoj.

U JavaScriptu i većini programskih jezika te pozicije počinju od nule. Prvo slovo `"J"` zato je na poziciji nula, a zatim imamo `"e"` na poziciji jedan, `"r"` na dva, `"e"` na tri, `"m"` na četiri i `"y"` na pet.

Ta stvar s početkom od nule prilično je čudna i, iskreno, život bi bio lakši da jednostavno počnemo brojati od jedan, kao u normalnom svijetu. Ali ne počinjemo tako. U većini programskih jezika brojimo od nule, pa to jednostavno moraš naučiti.

Ako želimo dobiti slovo na određenoj poziciji, upotrijebit ćemo uglate zagrade s brojem unutra.

Ako napišemo `"Jeremy"[0]`, kažemo: daj mi prvo slovo riječi `"Jeremy"`.

Ako napišemo `"Jeremy"[1]`, kažemo: daj mi drugo slovo.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Isto možemo raditi i s varijablama. Ako napravimo varijablu `name` (ime) i postavimo njezinu vrijednost na string `"Jeremy"`, onda možemo napisati `name[0]` i opet ćemo dobiti `"J"`.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Jedno je važno razjasniti: ono što dobiješ iz `name[0]` samo je još jedan string. To je još jedan papirić na kojem piše J. U njemu nema ničeg posebnog. To je string baš kao što je i `"Jeremy"` string.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki drži novi papirić na kojem je samo slovo J"
  width="500"
  height="289"
/>

Samo ima jedno slovo umjesto šest.

A to nimalo ne utječe na izvorni string. Ne otkidamo J s njega ni ništa slično. Samo pronađemo koje slovo želimo i zatim napravimo novi string s njim unutra.
