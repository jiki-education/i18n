---
title: "Aritmetică"
description: "Combinarea variabilelor cu matematica, astfel încât valorile să se raporteze unele la altele și să depindă unele de altele prin adunare, scădere, înmulțire și împărțire."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Până acum, când am creat variabile, am folosit doar valori simple: un număr ca `50` sau un string ca `"yellow"`. Variabilele devin mult mai puternice atunci când le putem folosi împreună. Adică atunci când putem spune că marginea din stânga a dreptunghiului trebuie să fie la o anumită distanță de marginea pânzei.

În programare putem folosi matematica obișnuită, de bază: adunare, scădere, înmulțire și împărțire. Și putem folosi în calculele astea variabilele pe care le-am setat deja.

Hai să începem prin a spune că vrem să desenăm un dreptunghi pe pânză, care să înceapă la 10 de marginea din stânga și din dreapta, și la 20 de sus și de jos. Așa că o să fie în mijlocul pânzei, puțin mai lat decât înalt.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Un dreptunghi albastru centrat pe pânză, la 10 de marginile din stânga și din dreapta și la 20 de marginile de sus și de jos"
  width="399"
  height="400"
/>

Când desenăm un dreptunghi, trebuie să știm `left` (stânga), `top` (sus), `width` (lățime) și `height` (înălțime), precum și culoarea lui. Așa că putem începe prin a scrie asta.

Iar acum trebuie să calculăm efectiv ce ar trebui să fie `left`, `top`, `width` și `height`. Hai să le setăm. `left` este 10. `top` este 20. `width`, ei bine, `width` este dimensiunea pânzei, adică 100, minus 10 din stânga și 10 din dreapta, deci 80. Iar `height` este înălțimea pânzei, care e tot 100, minus 20 sus și 20 jos, deci 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Deci putem seta variabilele astea. `left` 10, `top` 20, `width` 80, `height` 60. Dar ce se întâmplă acum dacă vrem să mutăm dreptunghiul mai spre interior, să-l facem puțin mai mic? Dacă vrem să-l mutăm la 20 de marginile din stânga și din dreapta și la 30 de sus și de jos? Trebuie să luăm totul de la capăt și să calculăm din nou. `width` este acum 100 minus 20 minus 20, iar `height` este 100 minus 30 minus 30, și asta e clar mai multă muncă și mai multă matematică decât vreau eu să fac. Așa că, în schimb, îi putem spune calculatorului să facă treaba pentru noi.

Putem seta `width` ca fiind 100 minus `left` minus `left`, iar `height` ca fiind 100 minus `top` minus `top`, pentru că sus și jos sunt la fel. Sau putem scrie asta ca 100 minus `left` ori doi, respectiv 100 minus `top` ori doi.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Iar acum, dacă schimbăm `left` sau `top`, se schimbă și `width` și `height`. Așa încep lucrurile să aibă legătură între ele. Și pânza? Acum are 100. Dar ce facem dacă pânza noastră devine 200 pe lățime și pe înălțime? Ei bine, probabil că ar trebui să setăm o variabilă numită `canvasSize` (dimensiunea pânzei) și să o setăm la 100. Iar acum `width` este `canvasSize` minus `left` ori doi, iar `height` este `canvasSize` minus `top` ori doi.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Hai să ne gândim ce face Jiki atunci când scriem let `height` egal cu `canvasSize` minus `top` ori doi. Ei bine, începe prin a lua de pe raft cutia `top`, găsește 30 în ea, își scoate calculatorul de buzunar și calculează 30 ori doi, apoi își notează mintal 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki ia cutia top de pe raft și calculează că 30 ori doi fac 60"
  width="377"
  height="400"
/>

Apoi ia de pe raft cutia `canvasSize`, găsește 100 în ea și calculează că 100 minus 60 fac 40. Și acum știe că, de fapt, noi spunem let `height` egal cu 40. Așa că ascultă de let, ia o cutie nouă, scrie `height` pe ea și pune 40 înăuntru. Iar mai târziu, când folosește `height`, doar scoate din nou 40 din ea.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki ia o cutie nouă, scrie height pe ea și pune 40 înăuntru"
  width="462"
  height="400"
/>

Odată ce totul funcționează într-un exercițiu, joacă-te schimbând valorile variabilelor și vezi ce se întâmplă. Privește cum cresc și cum scad. Ia-ți timpul, gândește-te la relațiile dintre lucruri.
