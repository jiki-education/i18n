---
title: "Com fer servir l'operador `%` per obtenir el residu"
description: "Fer servir l'operador `%` per obtenir el que sobra després d'una divisió, que sovint serveix per comprovar si un nombre és parell o imparell."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Fins ara, quan hem fet aritmètica, hem fet servir la suma, la resta, la multiplicació i la divisió. Ara te'n presentem un més: l'operador de residu (*remainder* en anglès).

L'operador de residu s'encarrega de donar-te el residu, lògicament, quan divideixes dos nombres, i s'escriu amb el signe de percentatge. Així que si escrivim:

```javascript
10 % 4 // 2
```

estem dient, o estem preguntant: «Què sobra quan dividim 10 entre 4?» I la resposta és dos. Imagina't que tens 10 caramels o fruits secs i els vols repartir a parts iguals entre quatre persones. Cada persona en rep dos, i al final encara en sobren dos. I aquesta part que sobra és el residu. És el que et dona aquest signe de percentatge.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Una fila de deu caramels que es reparteixen a parts iguals entre quatre persones, i en sobren dos com a residu"
  width="500"
  height="22"
/>

Una de les raons per les quals fem servir això tan sovint al codi és que ens permet saber si una cosa es divideix de manera exacta o no, i el patró més habitual que veuràs amb això és esbrinar si tenim un nombre parell o imparell. Els nombres parells, com ja saps, es divideixen tots de manera exacta entre dos. Els nombres imparells sempre tenen un de sobra quan els divideixes entre dos.

Així que si agafes el quatre, el sis o el vuit, quan els divideixes entre dos no els sobra res, mentre que el cinc, el set i el nou, quan els divideixes entre dos, sempre els sobra un al final. Així que quan escrivim `if something % 2 === 0`, estem dient: «Això és un nombre parell?» I això pot ser útil per a un munt de coses. Imagina't crear ratlles de colors diferents o dividir una cua per la meitat, enviant cada persona per un dels dos camins a mesura que s'acosten a tu.

Una cosa que has de saber: potser sentiràs que la gent es refereix a aquesta paraula clau, el residu, com a l'operador mòdul. Mòdul i residu són bàsicament idèntics. Hi ha algunes diferències lleugeres que probablement mai no caldrà que et preocupin, així que de moment el considerarem l'operador de residu, perquè així és molt més fàcil.
