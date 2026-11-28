---
title: "Uvod u stringove"
description: "Dijelovi teksta u navodnicima (slovo, riječ, rečenica ili cijeli odlomak) koje Jiki zapisuje na papir."
en_md5: 4947f6ac1b3eb8eb85d2dea9b82ffc40
---

Kad želiš upotrijebiti broj, možeš jednostavno napisati taj broj i Jiki zna što misliš. Ali što kad želiš upotrijebiti slovo, riječ ili rečenicu? Primjerice, s funkcijom `rectangle` (pravokutnik) ili funkcijom `circle` (krug), što ako imaš dodatni ulaz u kojem određuješ boju? Kako bismo zapisali boju da je stavimo u stroj? Ako samo napišemo riječ `green` (zeleno) ili `blue` (plavo), Jiki će pomisliti da govorimo o stroju na polici i reći će: „Ne postoji stroj koji se zove green. Ne znam što da radim."

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="Jiki zbunjeno stoji pokraj stroja za pravokutnike, s upitnicima iznad glave"
  width="446"
  height="400"
/>

Zato imamo pravilo: kad god trebamo upotrijebiti tekst, stavljamo ga u navodnike, i to u dvostruke navodnike. A kad nešto staviš u navodnike ovako, Jiki izvadi papirić i na njega napiše sve što piše u tim navodnicima. Takvi papirići zovu se _stringovi_ (nizovi znakova).

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="Jiki zapisuje riječ green na papirić, koji postaje string"
  width="398"
  height="400"
/>

Stringovi mogu biti i jedno slovo, i riječ, i rečenica, odlomak, čak i cijela knjiga. Pravilo je jednostavno: ako je tekst, ide u navodnike i postaje string.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="Ploča na kojoj su stringovi različitih duljina u navodnicima: jedno slovo, riječ, rečenica i adresa u više redaka"
  width="500"
  height="398"
/>

Dakle, ako želimo plavi pravokutnik, napišemo broj za poziciju slijeva, poziciju odozgo, širinu i visinu. Ali na peti ulaz napisat ćemo `"blue"` u navodnicima.

```javascript
rectangle(10, 20, 30, 40, "blue")
```

Jiki će uzeti stroj s police i staviti novčiće u prva četiri proreza. Zatim će napisati blue na papirić, staviti taj papirić u peti prorez i pokrenuti stroj.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="Jiki ubacuje plavi papirić u peti prorez stroja za pravokutnike, dok su u prva četiri proreza novčići 10, 20, 30, 40"
  width="500"
  height="392"
/>

String je jedna od onih tehničkih riječi koje ljude isprva malo plaše, ali zapravo znači samo tekst. Brzo ćeš se naviknuti. Nema u tome ničega čarobnog.
