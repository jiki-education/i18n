---
title: "Actualitzar variables"
description: "Canviar què hi ha dins d'una variable mentre el programa s'executa, per poder seguir posicions, comptadors, puntuacions i altres valors que van canviant."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Fins ara, quan hem creat variables, hem posat valors dins de capses i després els hem recuperat més tard. Això ens ha estat molt útil per donar claredat al nostre codi i per reduir part del càlcul mental que, si no, hauríem hagut de fer. Però el valor real de les variables ve de la capacitat de canviar què hi ha dins d'una capsa, què hi ha dins de la variable, al llarg d'un programa. Així, tot i que executem el mateix tros de codi diverses vegades, el que fa pot canviar segons què hi hagi dins de les capses.

Imagina't que volem plantar una flor en un jardí. Tenim una funció `plant` (plantar) molt pràctica que té una sola entrada per a la posició on volem col·locar la flor. Així, si volem col·locar una flor a 10 de la vora, ho escrivim així:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Una flor plantada en un jardí al costat de la pissarra del Jiki"
  width="406"
  height="400"
/>

I si volem plantar vuit flors? Doncs podríem escriure `plant(10)`, `plant(20)`, `plant(30)`, etcètera, però és força feixuc.

I ja hem après una cosa que ens ajuda a substituir aquesta mena de codi tan feixuc. Fes servir un bucle! Fes servir un bloc de repetició! Així que posem la posició a 10 i després tenim un bloc de repetició on cridem `plant`, on fem servir la funció `plant`, vuit vegades.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Què creus que passarà?

Doncs plantarà vuit flors, però les plantarà al mateix lloc cada vegada, que no és ben bé el que volem. Així que parem un moment a pensar què fa el Jiki aquí. Crea una capsa amb l'etiqueta posició. Hi posa un 10. Després fa funcionar la màquina `plant` vuit vegades. Cada vegada, treu el valor de la capsa de la posició. Sempre és 10, i hi posa el mateix 10 cada cop.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="El Jiki agafant la capsa de la posició del prestatge i posant el seu valor, 10, dins de la màquina de plantar"
  width="400"
  height="400"
/>

Així que el que necessitem és una manera d'avançar una mica cada vegada. Després de plantar una flor, volem dir al Jiki que mogui la posició 10 endavant, per estar a punt de plantar la flor següent.

Així que, deixant el codi de banda un moment, com es veu, això, en termes lògics? Si et dic «Planta la primera flor a 10, després la següent a 20 i després la següent a 30», com sap el teu cervell que la propera s'ha de plantar a 40 i la següent a 50?

El que fa el teu cervell és anar seguint el número actual, sumar-hi 10 i després actualitzar aquest número dins del teu cervell.

I podem fer exactament el mateix en codi. Per fer-ho, diem: «Actualitza (_update_ en anglès) la capsa de la posició perquè tingui el valor actual de la posició més 10».

Quan el Jiki ho vegi, traurà el número actual de la capsa de la posició, hi sumarà 10, farà aquest càlcul, els sumarà, i després tornarà a posar el resultat dins de la capsa per a la propera vegada.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="El Jiki traient un 10 de la capsa de la posició, sumant-hi 10 per fer 20 i tornant a posar el 20 dins de la capsa"
  width="427"
  height="400"
/>

Així que, si afegim això al nostre programa, de manera que ara diem «Posa el valor inicial de la posició a 10», després plantem una flor a la posició vuit vegades, i després canviem la posició perquè sigui 10 més gran que abans, el nostre codi funciona i obtenim vuit flors ben espaiades.

Fixa't que no hi ha cap `let` (declara una variable) quan actualitzem la variable. Això és molt important. Quan el Jiki veu `let`, crea una capsa nova. Però aquí no volem crear una capsa nova. El que volem és canviar què hi ha dins de la capsa que ja tenim.

Fixa't també que només creem la capsa una vegada, fora del bucle. Vale la pena recordar-ho. Crea la capsa una vegada a dalt, i després actualitza-la cada vegada que s'executi el bucle.

Podem actualitzar què hi ha dins de les capses, i podem fer servir aquest poder per seguir una cosa que canvia amb el temps. Faràs servir aquest patró constantment: seguir una posició, comptar quantes vegades ha passat una cosa, portar la puntuació. Sempre que hagis de recordar una cosa que canvia mentre el programa s'executa, així és com es fa.
