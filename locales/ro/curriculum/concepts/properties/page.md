---
title: "Proprietăți"
description: "Fapte statice despre o valoare, accesate cu notația cu punct și fără paranteze, ca `.length`, care îți spune câte litere are un string."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Până acum, când ne-am gândit la stringuri sau la numere, le-am văzut ca pe niște lucruri destul de statice.

Și, deși chiar sunt așa, au în ele și o mulțime de funcționalități predefinite pe care Jiki le poate folosi.

Hai să ne uităm la două tipuri de abilități: proprietățile și metodele.

Proprietățile sunt fapte despre care îl putem întreba pe Jiki. De exemplu, stringurile au o proprietate numită `length` (lungime), pe care Jiki o poate folosi ca să ne spună cât de lung este un string.

Așa că, în loc să parcurgem toate literele într-o buclă ca să aflăm cât de mare e un string, pur și simplu îl putem întreba pe Jiki.

Iar ca să facem asta, folosim o formă nouă de sintaxă: punctul.

De exemplu, dacă avem stringul `"Jeremy"` și vrem să aflăm lungimea lui, putem scrie:

```javascript
"Jeremy".length // 6
```

Când Jiki creează un string, numără literele și pur și simplu scrie undeva în colț un număr cu câte sunt.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki numărând literele stringului Jeremy și scriind numărul în colț"
  width="359"
  height="400"
/>

Iar apoi, când folosim proprietatea `length`, Jiki se duce și verifică ce număr era acolo. Așa că, în exemplul nostru cu `"Jeremy".length`, când Jiki creează stringul `"Jeremy"`, numără literele, scrie numărul șase în colț, iar apoi, când scriem `"Jeremy".length`, se duce și îl verifică. Așadar, poți să te gândești la proprietăți ca la niște fapte despre lucrul respectiv.
