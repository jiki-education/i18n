---
title: "Nombres aleatoris"
description: "Fer servir `Math.randomInt` amb un mínim i un màxim per obtenir un nombre diferent cada vegada que s'executa la funció."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Sovint, en programació, volem fer servir una funció i obtenir un nombre aleatori (_random number_ en anglès) diferent cada vegada.

Això és útil en tota mena de situacions i llocs, però sobretot en la criptografia, on fem moltes coses com ara crear codis per compartir entre màquines, i aquests codis han de ser aleatoris perquè no es puguin piratejar.

Per ajudar-te amb això, tens una funció disponible que es diu `Math.randomInt` (Math vol dir matemàtiques; randomInt vol dir enter aleatori). Potser et fixaràs que hi ha un punt al mig. A mesura que vagis tenint accés a més funcions, les podem organitzar en grups diferents per mantenir-ho tot endreçat, i la part de `Math` (abreviació de matemàtiques) és el nom d'un grup al qual pertany aquesta funció. Li diu al Jiki en quina secció dels prestatges ha de mirar, en aquest cas, la secció `Math`. El punt només vol dir «vés a aquesta secció i busca-hi la funció». No et preocupis gaire per això ara. Les instruccions dels exercicis sempre et diran quines funcions tens disponibles i com fer-les servir. L'important és entendre que, quan el Jiki fa servir aquesta funció, li donarà un nombre diferent cada vegada que l'executi, amb una restricció. La funció té dues entrades. La primera és el nombre més petit que la màquina pot retornar, i la segona és el nombre més gran que la màquina pot retornar. Així que, si fas servir la funció `Math.randomInt` amb `10` i `13`, sempre obtindràs `10`, `11`, `12` o `13`. Però cada vegada n'obtindràs un de diferent.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="El Jiki puja per una escala fins a la secció Math dels prestatges del seu magatzem"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="La màquina Math.randomInt amb dos embuts d'entrada a dalt"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="La màquina Math.randomInt amb 10 i 13 als seus embuts d'entrada, produint 10, 11, 12 o 13"
  width="488"
  height="400"
/>

Així que imaginem que vols dibuixar un cercle en una posició aleatòria del llenç. Pots fer servir `Math.randomInt` per obtenir valors diferents per a `left` i `top` de manera aleatòria cada vegada, però amb uns límits, posem per cas, de `10` i `90`, perquè mai no se superposin ni surtin fora del llenç. Cada vegada que executis aquest codi, el cercle es dibuixarà en un lloc lleugerament diferent.
