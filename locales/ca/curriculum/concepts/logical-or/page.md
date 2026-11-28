---
title: "L'operador `||` (o)"
description: "Combinar dues condicions amb `||` perquè tota la condició sigui certa quan almenys una de les parts és certa."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

També podem fer servir `or` i, malauradament, passa el mateix que abans: en JavaScript no hi ha cap paraula clau «or» que quedi bé. En lloc d'això, hem de fer servir aquestes dues barres juntes per dir «o». Sembla estrany, però no ho és gens. Ja t'hi acostumaràs.

Així que podem dir que, si algú té més de 20 anys o porta roba de discoteca, pot entrar. Així que tindrem una festa ben divertida amb criatures vestides de discoteca i adults mal vestits, cosa que sona raonable.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="El Jiki donant la benvinguda, a la porta d'una festa, a una barreja de criatures vestides de discoteca i adults vestits d'una manera informal"
  width="327"
  height="400"
/>

Hi ha una cosa que fa ensopegar la gent tant amb l'«and» com amb l'«or», i és que cada costat de l'operador ha de ser una comparació completa. Així que, fins i tot si compares la mateixa variable a les dues bandes, l'has de repetir. No pots escriure `if age is less than 13 or greater than 20`. Has d'escriure `if age is less than 13 or age is greater than 20`. Necessites que les dues bandes siguin comparacions completes.

```javascript
if (age < 13 || age > 20)
```

Cal que pensis quan importen les dues condicions i quan només una d'elles ha de ser certa.
