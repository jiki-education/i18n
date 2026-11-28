---
title: "Dodavanje ulaza funkcijama"
description: "Dodavanje ulaznih proreza vlastitim funkcijama kako bi mogle raditi različite stvari ovisno o vrijednostima koje im se prosljeđuju."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Tvoje dosadašnje funkcije svaki put rade točno istu stvar. `turnAround` (okreni se) uvijek dva puta skrene lijevo. `shootIfAlienAbove` (pucaj ako je izvanzemaljac iznad) uvijek provjeri i puca.

Ali razmisli o funkcijama koje smo cijeli tečaj koristili i o tome kako rade različite stvari ovisno o ulazima. Rectangle prima lijevo, vrh, širinu i visinu kao ulaze, a zatim nacrta drugačiji pravokutnik ovisno o tome što mu zadaš.

A sada ćemo ulazne proreze dodati i tvojim funkcijama.

Za to trebaš znati dvije stvari. Prvo: kako to zapravo izgleda, što trebaš napisati. I drugo: što se zapravo događa.

Prvi dio je sasvim jednostavan. Samo dodaš obične zagrade, a zatim nazive ulaza koje želiš.

Zamisli da stvaramo funkciju koja treba pucati mnogo puta. Nazovimo je `shootMany` (pucaj mnogo puta).

Napisali bismo je ovako:

```javascript
function shootMany(numShots) {
  // ...
}
```

Kad želiš upotrijebiti tu funkciju, pozoveš je s brojem hitaca koji želiš:

```javascript
shootMany(5)
shootMany(2)
```

A sad ono najvažnije. Kad se kôd izvrši, što god staviš u taj ulaz, `5` ili `2`, mali Jiki s kapom unutar funkcije uzme taj ulaz i stavi ga u kutiju koja se zove `numShots` (broj hitaca), a zatim tu kutiju stavi na police unutar funkcije, da je možeš koristiti u kôdu funkcije.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mali Jiki unutar stroja shootMany stavlja ulaz u kutiju s naljepnicom numShots"
  width="500"
  height="376"
/>

Ponovit ću to.

Kad napišemo `shootMany(5)` da bismo upotrijebili funkciju, Jiki izvana ode po `5` i stavi ga u ulazni prorez funkcije `shootMany`. Unutar stroja mali Jiki izvadi taj `5` i stavi ga u kutiju koja se zove `numShots`, jer je to naziv koji nosi taj ulazni prorez, a zatim tu kutiju stavi na police unutar funkcije u stroju.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mali Jiki stavlja kutiju numShots na police unutar stroja shootMany"
  width="500"
  height="302"
/>

A zatim unutar funkcije možeš jednostavno koristiti kutiju `numShots` kao i bilo koju drugu kutiju. Nema ničeg čarobnog u nazivu `numShots`. Mogli smo je nazvati kako god smo htjeli. On je samo uputa malom Jikiju da uvijek stvori kutiju s tom naljepnicom unutar funkcije i u nju stavi sve što se proslijedi u taj prorez.

A kad jednom imaš vrijednost u toj kutiji, možeš raditi sve što inače radiš s kutijama. Kutiju `numShots` možeš upotrijebiti u petlji repeat da pucaš točan broj puta. A možeš imati i više od jednog ulaza. Samo ih odvoji zarezima. Pa ako imamo funkciju koja se zove `drawStar` (nacrtaj zvijezdu) i koja crta zvijezdu na temelju svoje gornje lijeve pozicije, napisali bismo je ovako:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Stroj drawStar s dva ulazna proreza prima dvije zasebne vrijednosti"
  width="453"
  height="400"
/>

A kad se funkcija pozove, mali Jiki će jednostavno spremiti vrijednosti proslijeđene u ulaze u kutije koje se zovu `left` (lijevo) i `top` (vrh), a zatim će ih spremiti na police unutar funkcije.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mali Jiki sprema dva ulaza u kutije s naljepnicama left i top na police unutar stroja drawStar"
  width="431"
  height="400"
/>
