---
title: "Aritmetika"
description: "Kombiniranje varijabli s matematikom tako da vrijednosti mogu biti u međusobnom odnosu i ovisiti jedna o drugoj kroz zbrajanje, oduzimanje, množenje i dijeljenje."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Do sada smo pri stvaranju varijabli koristili samo jednostavne vrijednosti: broj poput `50` ili string poput `"yellow"`. Varijable postaju mnogo moćnije kad ih možemo koristiti u kombinaciji jedne s drugima. Kad možemo reći da lijevi rub pravokutnika treba biti na određenoj udaljenosti od ruba platna.

U programiranju možemo koristiti običnu, osnovnu matematiku, stvari poput zbrajanja, oduzimanja, množenja i dijeljenja, a kao dio toga možemo koristiti i varijable koje smo već postavili.

Krenimo od toga da na platnu želimo nacrtati pravokutnik koji počinje 10 od lijevog i desnog ruba te 20 od gornjeg i donjeg ruba. Dakle, nalazit će se u sredini platna, malo širi nego što je visok.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Plavi pravokutnik u sredini platna, 10 od lijevog i desnog ruba i 20 od gornjeg i donjeg ruba"
  width="399"
  height="400"
/>

Kad crtamo pravokutnik, moramo znati njegov `left` (lijevi rub), `top` (gornji rub), `width` (širina) i `height` (visina), kao i njegovu boju. Pa možemo početi tako da to zapišemo.

A sada moramo stvarno izračunati koliki bi trebali biti njegov `left`, `top`, `width` i `height`. Postavimo ih. `Left` je 10. `Top` je 20. `width`, pa, `width` je veličina platna, a to je 100, minus 10 s lijeve i 10 s desne strane, dakle 80. A `height` je visina platna, koja je također 100, minus 20 na vrhu i 20 na dnu, dakle 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Dakle, možemo postaviti te varijable. `Left` 10, `top` 20, `width` 80, `height` 60. No što se dogodi ako sad želimo pravokutnik malo uvući, malo ga smanjiti? Ako ga želimo pomaknuti 20 od lijevog i desnog ruba te 30 od gornjeg i donjeg ruba? Moramo sve iznova izračunati. `width` je sada 100 minus 20 minus 20, a `height` je 100 minus 30 minus 30, i to je definitivno više posla i više matematike nego što želim raditi. Zato možemo reći računalu da to napravi umjesto nas.

Možemo postaviti da `width` bude 100 minus `left` minus `left`, a `height` 100 minus `top` minus `top`, jer je gornji i donji razmak isti. Ili to možemo zapisati kao 100 minus `left` puta dva, odnosno 100 minus `top` puta dva.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

I sad, ako promijenimo `left` ili `top`, promijenit će se i `width` i `height`. Stvari se počinju odnositi jedna na drugu. A što s platnom? Ono je sada 100. No što ako se naše platno promijeni i bude 200 široko i visoko? Pa, vjerojatno bismo trebali postaviti varijablu `canvasSize` (veličina platna) na 100. I sad je naš `width` `canvasSize` minus `left` puta dva, a naš `height` `canvasSize` minus `top` puta dva.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Razmislimo što Jiki radi kad napišemo let `height` jednako `canvasSize` minus `top` puta dva. Pa, počinje tako da s police uzme kutiju `top`, u njoj nađe 30, izvadi svoj džepni kalkulator i izračuna 30 puta dva, a zatim zapamti 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki uzima kutiju top s police i računa da je 30 puta dva 60"
  width="377"
  height="400"
/>

Zatim s police uzme kutiju `canvasSize`, u njoj nađe 100 i izračuna da je 100 minus 60 jednako 40. I sad zna da ono što zapravo kažemo znači let `height` jednako 40. Zato posluša let, uzme novu kutiju, napiše na nju `height` i stavi u nju 40. A kad kasnije upotrijebi `height`, jednostavno opet izvadi 40.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki uzima novu kutiju, piše na nju height i stavlja unutra 40"
  width="462"
  height="400"
/>

Kad u vježbi sve proradi, poigraj se promjenom vrijednosti varijabli i vidi što se događa. Promatraj kako rastu i kako se smanjuju. Uzmi si vremena i razmisli o odnosima među stvarima.
