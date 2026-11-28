---
title: "Àmbit"
description: "Entén com les claus creen el seu propi conjunt de prestatges, de manera que les variables només viuen mentre viu el seu bloc."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Imagina un codi que dibuixa un cercle en un lloc diferent cada vegada que s'executa, i volem dibuixar 10 cercles en llocs diferents. Podríem combinar-ho amb un bucle. Però si estàs ben atent, potser t'has adonat que aquí hi ha una cosa estranya.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Al principi vaig dir que hi havia una regla: les capses dels prestatges del Jiki han de tenir noms únics,

i que la paraula clau `let` crea una capsa nova cada vegada que la fas servir.

Però com que el `let` és dins d'un bucle, el Jiki crearà una capsa nova cada vegada que el bucle s'executi.

Així que, el codi està malament, o aquí passa alguna altra cosa estranya?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="El Jiki amb cara de sorpresa, preguntant-se si el codi està malament"
  width="384"
  height="400"
/>

Doncs resulta que el codi està bé. És JavaScript perfectament vàlid, i funciona gràcies a un concepte que s'anomena àmbit (_scope_ en anglès) o _scoping_.

L'àmbit és una cosa que al principi et semblarà ben senzilla, però et puc garantir que et donarà problemes la resta de la teva carrera. Fins i tot els desenvolupadors més experimentats es troben amb problemes d'àmbit, i JavaScript és un dels llenguatges on això és més complicat. T'ho dic perquè, quan et trobis amb problemes d'àmbit, no et sentis malament amb tu mateix. Però també: para molta atenció a aquesta part, perquè és important.

Quan veus una clau en el codi, es crea el que s'anomena un àmbit nou. Què vol dir, això? Doncs imagina que el Jiki crea un conjunt petit de prestatges nou al seu taller cada vegada que veu una clau. I les capses que crea mentre treballa, executant codi dins d'aquestes claus, aquestes capses noves van al conjunt petit de prestatges nou, no al conjunt principal.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="El conjunt principal de prestatges del Jiki al costat d'un conjunt nou més petit creat per una clau"
  width="500"
  height="205"
/>

I quan el Jiki arriba a la clau de tancament corresponent, llença totes les capses que hi ha en aquest conjunt secundari de prestatges.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="El Jiki llençant les capses del conjunt secundari de prestatges en una paperera quan arriba a la clau de tancament"
  width="500"
  height="237"
/>

Així que cada vegada que tenim un bucle com aquest, podem crear capses que només duren el que dura cada volta del bucle. Les capses `left` (esquerra) i `top` (dalt) que veus aquí només duren fins que arribem a la clau de tancament, i després es llencen. I el Jiki arriba a aquesta clau de tancament cada vegada que el bucle s'executa. O sigui que això passa 10 vegades en aquest programa. Per tant, 10 vegades crearà una capsa anomenada `left`, i la tornarà a llençar.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Dues capses etiquetades left i top que només duren una iteració del bucle"
  width="500"
  height="187"
/>

Així que, quan crees una variable, has de decidir quant de temps vols que es quedi. Si vols que visqui molt de temps, ha d'anar fora de qualsevol clau. Si vols que només duri una iteració, una volta del bucle, aleshores la pots posar dins de les claus. Veus com tot això es pot tornar una mica confús? Així que una bona regla per mantenir-ho senzill quan comences és tenir totes les variables a prop de la part de dalt del teu codi, fora de les claus, i després només actualitzar-les dins de les claus. Per exemple, podríem escriure el codi anterior amb una sola capsa `left` i una de `top`, totes dues posades a zero al principi, i després actualitzar-les cada vegada dins del bucle. Això també és perfectament vàlid. Cap de les dues maneres no és ni correcta ni incorrecta. Hi ha bones pràctiques, però les aprendrem més endavant. Per ara, experimenta, diverteix-te, mira què et resulta més còmode, i intenta no amoïnar-te gaire per això.
