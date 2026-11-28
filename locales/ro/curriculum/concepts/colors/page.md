---
title: "Culori"
description: "Două moduri de a specifica orice culoare vrei. RGB amestecă lumină roșie, verde și albastră. HSL folosește nuanța, saturația și luminozitatea."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Dacă faci vreodată ceva vizual cu cod, există două moduri diferite de a exprima culorile. Și chiar dacă vrei să devii data scientist și ți se pare că toată partea de desen e cam plictisitoare, să comunici date prin imagini este o abilitate esențială. Până acum ai folosit culorile cu numele lor, ca roșu sau galben, ca ultima intrare în funcțiile tale de desen. A fost o cale comodă de a folosi repede culori, dar e destul de limitativă. Există doar câteva culori cu nume pe care le putem folosi. Așa că acum hai să vedem două moduri de a exprima orice culoare vrei, iar acestea două se numesc RGB și HSL.

RGB ne lasă să gândim culorile ca un amestec de roșu, verde și albastru. De la asta vine RGB: roșu (engl. _red (R)_), verde (engl. _green (G)_), albastru (engl. _blue (B)_). Dacă îți amintești cum amestecai vopselele la școală, ideea e asemănătoare, doar că în loc de vopsea amestecăm lumină.

În multe exerciții o să ai o funcție numită `rgb`, care primește trei numere ca intrări, unul pentru roșu, unul pentru verde și unul pentru albastru, iar la final returnează o culoare.

Numerele pe care le poți folosi ca intrări merg de la zero la `255`. Zero înseamnă că nu vrei deloc din culoarea aceea, iar `255` înseamnă să amesteci cât mai mult din ea. Deci dacă folosim funcția `rgb` cu `255`, zero și zero ca intrări, ceea ce spunem este că vrem tot roșul. Ține minte că `255` este cel mai mare număr pe care îl poți pune acolo. Dar nu vrem deloc verde și nici albastru, așa că amândouă sunt zero. Așa că obținem roșu, iar roșul acela îl putem stoca într-o variabilă și apoi îl putem folosi în funcția `circle`, exact așa cum am făcut deja cu numele de culori scrise ca stringuri. Și dacă folosim funcția `rgb` cu zero, `255`, zero? Acum spunem: deloc roșu, tot verdele, deloc albastru. Așa că obținem un cerc verde. Și dacă vrem galben? Galbenul este un amestec de roșu și verde. Așa că putem spune: dă-mi tot roșul, tot verdele și deloc albastru, iar asta ne va da galben. Și putem folosi numere mai mici. Deci dacă vrem puțin roșu, deloc verde și mult albastru, obținem violet. Și mult roșu, puțin verde, un pic mai mult albastru, asta ne dă un roz. Așadar, acesta este RGB. Amestecăm roșu, verde și albastru ca să obținem diferite combinații.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Trei cercuri suprapuse de lumină roșie, verde și albastră care se amestecă și formează galben, magenta, cyan și alb"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Hai să ne uităm acum la HSL, care ne oferă un mod complet diferit de a gândi culorile. HSL vine de la nuanță (engl. _hue (H)_), saturație (engl. _saturation (S)_) și luminozitate (engl. _lightness (L)_). Și, la fel ca la RGB, ai o funcție numită `hsl` care primește trei numere, unul pentru nuanță, unul pentru saturație și unul pentru luminozitate, iar la final returnează o culoare. Așa că hai să vedem ce înseamnă aceste trei cuvinte.

Nuanța este tonul (engl. _shade_) de culoare pe care îl vrei și merge de la zero până la 360. Poate imaginează-ți un curcubeu. Așa mă gândesc eu la asta. În stânga avem roșu, apoi portocaliu, galben, verde, albastru, violet și, de fapt, ajungem înapoi la roșu. Deci dacă spui zero, începi din stânga, iar acela este roșu. Dacă spui `120`, ceri verde. 230 este albastru. Poți să te gândești la asta și ca la o roată de culori (engl. _color wheel_), care este de fapt ce reprezintă 360. Este numărul de grade dintr-un cerc. Eu mereu caut numerele de care am nevoie, așa că nu-ți face griji prea mult încercând să memorezi asta, dar e bine să înțelegi ce se întâmplă. Deci aceasta este nuanța, adică tonul. Urmează saturația, care este cât de vie este culoarea. Merge de la zero la 100. La zero obții doar gri. Nu există nicio culoare, niciun ton acolo. La 100 obții culoare plină, vie, vibrantă. Și apoi avem luminozitatea. Luminozitatea este cât de aprinsă este culoarea și merge tot de la zero la 100. La zero obții negru. Indiferent de nuanța pe care ai ales-o, obții negru. Nu există lumină în el. Iar la 100 obții alb. Indiferent de orice altceva, e plin de lumină, deci e alb. 50 este exact la mijloc, culoarea normală. Așa că poți să te gândești la asta ca la un glisor (engl. _slider_) care face culoarea mai deschisă sau mai închisă.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Un curcubeu și o roată de culori care arată nuanța mergând de la 0 (roșu) la 120 (verde) și la 240 (albastru)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Glisor de saturație de la 0 (gri), prin 50, până la 100 (magenta aprins)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Glisor de luminozitate de la 0 (negru), prin 50 (culoare plină), până la 100 (alb)"
  width="500"
  height="398"
/>

Deci dacă vrem un cerc roșu normal, pe care l-am fi scris ca 255, zero, zero cu RGB, tot roșul, deloc verde, deloc albastru, aici am folosi zero, 100, 50. Zero pentru nuanța roșie, 100 pentru saturație, culoare plină, și 50 pentru luminozitate, adică un nivel normal de luminozitate. Dacă vrem să facem din el un cerc verde, putem schimba pur și simplu nuanța la `120`. Dacă vrem să facem un verde mai închis, putem reduce luminozitatea la `25`.

Dacă vrem să facem un verde mai spălăcit, putem scoate puțină culoare, puțină saturație, să zicem să o coborâm la `30`.

Dacă vrei un roz aprins și intens, o nuanță de aproximativ 300 este roz, apoi urcăm saturația la 100 ca să fie cu adevărat vie și creștem și luminozitatea, până la vreo 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Deci avem două moduri diferite de a exprima culoarea și sunt utile în situații diferite. RGB este grozav când vrei să reglezi o componentă anume, cât roșu, cât verde, cât albastru. HSL este grozav când vrei să treci prin mai multe culori. Dacă vrei un curcubeu, poți pur și simplu să crești nuanța tot mai mult.
