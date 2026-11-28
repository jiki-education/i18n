---
title: "Afegir retorns a les funcions"
description: "Fer servir la paraula clau `return` per donar a les teves funcions un conducte de sortida que retorna un valor a qui les crida."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Ja saps com crear funcions amb entrades i sense. Encara hi ha una última cosa per aprendre, i després seràs tot un expert a fer funcions, i aquesta cosa és com donar a les teves funcions un conducte de sortida.

Ja has fet servir un munt de funcions que retornen coses. `isAlienAbove` (hi ha un alienígena a sobre) et retorna cert o fals. `Math.randomInt(1, 10)` (Math vol dir matemàtiques; randomInt vol dir nombre enter aleatori) et retorna un nombre aleatori.

Quan el Jiki fa servir aquestes funcions, alguna cosa surt disparada pel conducte de sortida, i després la pot anar a fer servir.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="El Jiki recollint un valor que surt disparat pel conducte de sortida d'una màquina"
  width="500"
  height="312"
/>

Doncs per fer això ens cal una altra paraula clau nova, i és la paraula clau `return`.

La paraula clau `return` li diu al Mini Jiki que empenyi alguna cosa cap al conducte de sortida.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="El Mini Jiki dins de la màquina empenyent un valor 42 pel conducte de sortida"
  width="500"
  height="335"
/>

Ara creem una funció, li direm `meaningOfLife` (el significat de la vida), i la feina d'aquesta funció és sempre, només, retornar el nombre `42`. No té cap entrada. S'escriu així:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="La màquina meaningOfLife enviant el nombre 42 pel seu conducte de sortida"
  width="500"
  height="323"
/>

Ara, a qualsevol lloc del nostre codi on fem servir `meaningOfLife()`, recuperem el nombre `42` per fer-lo servir com qualsevol altre valor. El podem posar en una capsa amb `let`, el podem passar com a entrada a una altra funció, el podem comparar en una sentència `if`.

Les funcions amb retorn també poden rebre entrades. Pots escriure una funció `ageBracket(age)` (tram d'edat) que retorni `"Sorry, too young"` quan `age` és menor de 18, i `"Welcome"` en cas contrari. Qui la crida rep de tornada el text que la funció hagi retornat.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Un valor d'edat que cau dins la ranura d'entrada de la màquina perquè pugui decidir què ha de retornar"
  width="487"
  height="400"
/>

Així és com funciona la programació en essència. Creem un munt d'aquestes petites peces de construcció i després les encaixem per formar programes.
