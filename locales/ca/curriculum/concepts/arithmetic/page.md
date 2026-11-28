---
title: "Aritmètica"
description: "Combinant variables amb les matemàtiques perquè els valors es puguin relacionar i dependre els uns dels altres mitjançant la suma, la resta, la multiplicació i la divisió."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Fins ara, quan hem creat variables, només hem fet servir valors simples: un nombre com `50` o una corda com `"yellow"`. On les variables es tornen molt més potents és quan les podem combinar entre elles. És a dir, quan podem dir que la vora esquerra del rectangle ha d'estar a una certa distància de la vora del llenç.

En programació podem fer servir les matemàtiques normals i bàsiques, coses com sumar, restar, multiplicar i dividir, i hi podem fer servir les variables que ja hem creat.

Comencem dient que volem dibuixar un rectangle al llenç, i el volem a 10 de la vora esquerra i de la dreta, i a 20 de la vora superior i de la inferior. Així quedarà al mig del llenç, una mica més llarg que alt.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Un rectangle blau centrat al llenç, a 10 de les vores esquerra i dreta i a 20 de les vores superior i inferior"
  width="399"
  height="400"
/>

Quan dibuixem un rectangle, necessitem saber el `left` (esquerra), el `top` (dalt), el `width` (amplada) i el `height` (alçada), a més del color. Així que podem començar escrivint-ho.

I ara hem d'esbrinar de debò quins valors han de tenir el `left`, el `top`, el `width` i el `height`. Doncs els hi posem. `Left` és 10. `Top` és 20. El `width`, bé, el `width` és la mida del llenç, que és 100, menys els 10 de l'esquerra i els 10 de la dreta, així que són 80. I el `height` és l'alçada del llenç, que també és 100, menys els 20 de dalt i els 20 de baix, o sigui 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Així que podem assignar aquestes variables. `Left`, 10, `top`, 20, `width`, 80, `height`, 60. Però què passa ara si volem fer entrar una mica el rectangle, fer-lo una mica més petit? Si el volem a 20 de les vores esquerra i dreta i a 30 de les vores superior i inferior? Hem de tornar a calcular-ho tot. El `width` ara és 100 menys 20 menys 20, i el `height` és 100 menys 30 menys 30, i sens dubte és més feina i més càlculs dels que vull fer. Així que, en lloc d'això, podem demanar a l'ordinador que ho faci per nosaltres.

Podem definir el `width` com a 100 menys el `left` menys el `left`, i el `height` com a 100 menys el `top` menys el `top`, perquè la part de dalt i la de baix són iguals. O ho podem escriure com a 100 menys el `left` per dos, o 100 menys el `top` per dos.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

I ara, si canviem el `left` o el `top`, el `width` i el `height` també canviaran. Les coses comencen a relacionar-se entre elles. I el llenç? Ara fa 100. Però i si el nostre llenç passa a fer 200 d'amplada i d'alçada? Doncs segurament hauríem de crear una variable anomenada `canvasSize` (mida del llenç) i posar-hi 100. I ara el nostre `width` és `canvasSize` menys `left` per dos, i el nostre `height` és `canvasSize` menys `top` per dos.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Pensem en què fa el Jiki quan escrivim que `height` és igual a `canvasSize` menys `top` per dos. Doncs comença agafant la capsa `top` del prestatge, hi troba 30, treu la calculadora de butxaca i fa 30 per dos, i pren nota mentalment de 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="El Jiki agafant la capsa top del prestatge i calculant que 30 per dos és 60"
  width="377"
  height="400"
/>

I després agafa la capsa `canvasSize` del prestatge, hi troba 100, i calcula que 100 menys 60 és 40. I ara ja sap que, en realitat, el que li diem és que `height` és igual a 40. Així que obeeix el let: agafa una capsa nova, hi escriu `height` i hi posa 40 a dins. I després, quan utilitza `height` més endavant, només n'ha de tornar a treure el 40.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="El Jiki agafa una capsa nova, hi escriu height i hi posa 40 a dins"
  width="462"
  height="400"
/>

Quan ho tinguis tot funcionant en un exercici, prova de canviar els valors de les variables i mira què passa. Fixa't com creixen i com s'encongeixen. Pren-t'ho amb calma i pensa en les relacions entre les coses.
