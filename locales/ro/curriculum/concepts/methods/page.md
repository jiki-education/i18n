---
title: "Metode"
description: 'Funcții care aparțin unei valori și se apelează cu notația cu punct, ca `"Jeremy".includes("e")` sau `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Până acum, când ne-am gândit la stringuri sau la numere, le-am văzut ca pe niște lucruri destul de statice.

Și, deși sunt statice, au în ele o mulțime de funcționalități predefinite pe care Jiki le poate folosi.

Și, pe măsură ce înaintăm, o să învățăm despre aceste funcționalități, despre genul acesta de abilități pe care le au și care îți fac viața mult mai ușoară.

Sunt două tipuri de abilități la care ne uităm: proprietăți (engl. _properties_) și metode (engl. _methods_).

Metodele sunt funcții care aparțin stringului.

Așadar, în loc să scriem noi o funcție în care punem un string ca intrare, putem folosi o metodă direct pe string.

De exemplu, îți amintești de o funcție care verifică dacă un string are o anumită literă în el? Ei bine, stringurile au de fapt o metodă numită `includes` (verifică dacă stringul conține ceva), care face exact asta, și o putem folosi cu aceeași notație cu punct pe care ai văzut-o la proprietăți.

Diferența față de proprietăți este că, atunci când le scriem, le scriem ca pe niște funcții, cu paranteze și intrări.

Deci putem scrie:

```javascript
"Jeremy".includes("e") // true
```

Și primim înapoi `true`, pentru că `"Jeremy"` are un `"e"` în el.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki scriind stringul Jeremy pe o foaie de hârtie"
  width="359"
  height="400"
/>

Metodele sunt diferite de proprietăți pentru că nu sunt fapte statice. Sunt de fapt funcții. Le poți vedea ca pe niște funcții care au o cutie predefinită cu stringul în ea.

Cum funcționează nu contează deocamdată. Nu o să le construiești tu prea curând. Tot ce trebuie să știi este că folosești o metodă punând un punct, apoi sintaxa normală de funcție.

Un lucru de știut despre stringuri este că metodele nu schimbă nimic în interiorul stringului. De exemplu, există o metodă `toUpperCase` (transformă toate literele în majuscule), care returnează stringul cu toate literele scrise cu majuscule. Dar asta nu schimbă stringul original. Acela conține în continuare `"Jeremy"`, scris doar cu J mare. În schimb, Jiki creează un string nou, cu toate literele majuscule.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
