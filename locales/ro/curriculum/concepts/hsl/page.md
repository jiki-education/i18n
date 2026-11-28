---
title: "Culori HSL"
description: "Cum să construiești culori din nuanță (tonul, 0–360), saturație (cât de vie, 0–100) și luminozitate (cât de deschisă, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL ne oferă o modalitate complet diferită de a gândi culorile față de RGB. HSL vine de la nuanță (engl. _hue (H)_), saturație (engl. _saturation (S)_) și luminozitate (engl. _lightness (L)_). Ai o funcție numită `hsl` care primește trei numere, unul pentru nuanță, unul pentru saturație și unul pentru luminozitate, iar la final returnează o culoare. Hai să vedem ce înseamnă aceste trei cuvinte.

```javascript
hsl(hue, saturation, lightness)
```

Nuanța este tonul de culoare pe care îl vrei și merge de la zero până la 360. Poate încearcă să-ți imaginezi un curcubeu. Așa îmi place mie să mă gândesc la ea. În stânga avem roșu, apoi portocaliu, galben, verde, albastru, violet și, de fapt, ajungem înapoi la roșu. Deci, dacă spui zero, pornești din stânga, iar acolo e roșu. Dacă spui `120`, ceri verde. `230` este albastru. Poți să te gândești la asta și ca la un cerc de culori, care este de fapt ce reprezintă 360: numărul de grade din cerc. Eu mereu caut numerele de care am nevoie, așa că nu te stresa să le memorezi, dar e bine să înțelegi ce se întâmplă. Deci asta e nuanța, adică tonul.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Un cerc de culori și un curcubeu care arată că 0 este roșu, 120 este verde și 240 este albastru"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Un glisor de saturație de la 0 (gri), prin 50, până la 100 (culoare plină, vie)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Un glisor de luminozitate de la 0 (negru), prin 50, până la 100 (alb)"
  width="500"
  height="398"
/>

Urmează saturația, care ne spune cât de vie este culoarea. Merge de la zero la 100. La zero obții doar gri. Nu există nicio culoare, niciun ton acolo. La 100 obții o culoare plină, vie, vibrantă. Și apoi avem luminozitatea. Luminozitatea spune cât de deschisă este culoarea și merge tot de la zero la 100. La zero obții negru. Indiferent ce nuanță ai ales, obții negru. Nu există lumină în el. Iar la 100 obții alb. Orice altceva s-ar întâmpla, culoarea e plină de lumină, deci iese albă. 50 este exact la mijloc, culoarea normală. Poți să te gândești la asta ca la un glisor care face culoarea mai deschisă sau mai închisă.

Deci, dacă vrem un cerc roșu normal, pe care l-am fi scris ca 255, zero, zero cu RGB, tot roșul, fără verde, fără albastru, aici am folosi zero, 100, 50. Zero pentru nuanța roșie, 100 pentru saturație, culoare plină, și 50 pentru luminozitate, adică un nivel normal de luminozitate. Dacă vrem să facem din el un cerc verde, putem pur și simplu să schimbăm nuanța în `120`. Dacă vrem un verde mai închis, putem reduce luminozitatea la `25`.

```javascript
hsl(0, 100, 50) // roșu
hsl(120, 100, 50) // verde
hsl(120, 100, 25) // verde închis
```

Dacă vrem un verde mai șters, putem să scoatem ceva din culoare, ceva din saturație, să zicem să o coborâm la `30`.

Dacă vrei un roz aprins și intens, o nuanță de aproximativ 300 înseamnă roz, apoi urcăm saturația la 100 ca să fie cu adevărat vie și creștem și luminozitatea, până la vreo 60.

HSL e grozav când vrei să treci prin mai multe culori. Dacă vrei un curcubeu, pur și simplu crești nuanța tot mai mult.
