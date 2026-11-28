---
title: "Predlošci stringova"
description: "Ubacivanje vrijednosti izravno u string pomoću obrnutih kvačica i rezerviranih mjesta `${...}`, umjesto spajanja dijelova s `+`."
en_md5: 7fd0e09ac3b32db5f159f8e772872104
---

Možemo upotrijebiti nešto što se zove predlošci stringova (_template literals_ na engleskom), kako bismo u jedan string ubacili drugi.

Dakle, umjesto da stringove nadovezujemo jedan na drugi, možemo imati string ili predložak koji u sebi ima mjesta za druge stringove.

Za to umjesto navodnika koristimo obrnute kvačice (_backticks_ na engleskom).

Obrnute kvačice (`) su, kao što im i ime kaže, kvačice okrenute unatrag. Ako ti taj znak još nije poznat, na tipkovnici treba pronaći pravu tipku.

Njima stvaramo predložak koji može sadržavati i druge stringove. A da u predložak ubacimo string, koristimo još jednu neobičnu sintaksu, s dolarom i vitičastim zagradama. Primjerice, da dobijemo isto što i `"hello " + name` iz prošlog primjera s nadovezivanjem, možemo napisati:

```javascript
`hello ${name}` // "hello Jeremy" or "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki drži kutiju na kojoj piše name, vrijednost koja se umeće u predložak"
  width="207"
  height="400"
/>

To radi točno isto što i nadovezivanje stringova.

Ali kad imaš više stringova koje treba sastaviti na jedno mjesto, ovako je mnogo praktičnije.

Trebat će ti malo vremena da se navikneš na tu sintaksu, ali u njoj nema ničeg osobito složenog.
