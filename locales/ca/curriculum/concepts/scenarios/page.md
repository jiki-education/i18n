---
title: "Escenaris"
description: "Les diferents condicions d'inici amb què un exercici executa el teu únic codi, de manera que l'has de fer funcionar per a totes elles."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Cada exercici inclou diversos escenaris, situacions diferents que el teu codi ha de saber gestionar.

Els veuràs com uns botonets just a sobre de la sortida de cada exercici. Cada botó correspon a un escenari diferent. La teva feina és escriure codi que funcioni per a tots, no només per al primer. T'ho repeteixo. Escrius el codi una vegada, però aquest mateix codi s'executa per a cada escenari. La diferència és que cada escenari es pot preparar d'una manera una mica diferent, o que les funcions que tens poden retornar coses una mica diferents segons l'escenari en què siguis.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="La fila de botons d'escenari just a sobre de la sortida d'un exercici, emmarcats per destacar-los"
  width="500"
  height="318"
/>

Pensa en l'exemple d'un joc de golf. Potser hauràs de variar fins on roda la pilota segons el valor retornat d'una funció anomenada `getShotLength` (longitud del cop), que et diu fins on ha colpejat la pilota el golfista. Imagina't que el jugador ha hagut de lliscar el dit per la pantalla del mòbil per indicar fins on ha colpejat.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Una escena d'un joc de golf amb un golfista, una pilota i una bandera al forat de la dreta"
  width="412"
  height="400"
/>

El resultat que et torna arriba a través d'aquesta funció. Així, en un escenari pots fer servir la funció `getShotLength` i et retornarà `23`, un lliscament petit. En un altre, retorna `70`, un lliscament llarg. En un altre, retorna `45`. El teu codi ha de fer rodar la pilota la distància correcta en cada escenari amb un sol programa, un sol conjunt de codi. Hauràs de fer servir la funció `getShotLength` per veure fins on ha anat el cop i, després, fer rodar la pilota fins a aquell punt.

```javascript
let distance = getShotLength()
```

Els escenaris serveixen per assegurar que el teu codi funciona de veritat, com cal. És força fàcil escriure codi que funcioni en una situació concreta. És molt més difícil, i molt més valuós, escriure codi que funcioni en moltes situacions diferents. Quan resolguis exercicis, comença pel primer escenari. Fes que funcioni. Després passa al següent escenari i fes que també funcioni. Quan el codi et falli en un altre escenari, pensa què és diferent i com s'ha d'adaptar el teu codi.
