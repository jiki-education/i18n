---
title: "Entendre les sentències `if`"
description: "Fer servir la paraula clau `if` per executar un bloc de codi només quan una condició és certa, com un porter de discoteca que decideix qui pot entrar."
en_md5: 81c99eea67b02e082ca6c9d7988a3914
---

Hi ha una paraula clau que ens ajuda a dir al Jiki que només faci coses en determinades situacions. Potser estàs escrivint codi per vigilar l'entrada d'un bar, potser ets el porter, i el Jiki només ha d'obrir la porta si algú va vestit com cal. O potser escrius codi en què tu ets qui ha de fer onejar la bandera de quadres al final d'una cursa, però el Jiki ha de saber que només ho ha de fer a l'última volta. En aquesta mena de situacions, farem servir la paraula clau `if`.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bar-door-scenario.webp"
  alt="El Jiki fent de porter i decidint si deixa entrar la gent a la discoteca"
  width="292"
  height="400"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/if/waving-flag.webp"
  alt="El Jiki a punt de fer onejar la bandera de quadres al final d'una cursa"
  width="266"
  height="400"
/>

Fem servir la paraula clau `if` de manera molt semblant a la `repeat`. Posem una informació entre parèntesis normals. En aquest cas, aquesta informació és la condició que estem comprovant. I després posem un bloc de codi entre claus que executem només si aquesta condició és certa.

```javascript
if (condition) {
}
```

I com són, aquestes condicions? Doncs normalment són algun tipus de comparació. Comparem dos nombres o dues cordes i comprovem si el resultat és cert o fals.

Així que pensa en aquestes comparacions com a afirmacions (_statements_ en anglès) que podries dir en veu alta. Tres és menor que cinc. És cert. Set és menor que dos. És fals.

Fem servir símbols per escriure aquestes comparacions. Segurament ja els coneixes de les matemàtiques. Tenim menor que, major que, menor o igual que, major o igual que, i també tenim una comprovació per veure si dues coses són iguals. I aquesta és una mica diferent de la que segurament estàs acostumat, perquè fem servir tres signes iguals seguits per veure si dues coses són iguals o diferents.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/comparisons-symbols.webp"
  alt="Una taula d'operadors de comparació: menor que, major que, menor o igual, major o igual, igual i diferent, amb exemples"
  width="449"
  height="400"
/>

I això ens ajuda a no confondre'ns quan establim o actualitzem variables, que fem servir un sol signe igual per dir «posa això a la capsa». Només cal recordar que per comparar es fan servir tres signes iguals.

També pots comparar cordes. Així, `"hello"` és igual a `"hello"`. Això és cert. Les dues cordes són la mateixa. Però ves amb compte aquí, perquè el Jiki compara cada caràcter de les dues cordes, als dos fulls de paper. Per tant, `"Hello"` amb H majúscula no és igual a `"hello"` amb h minúscula. Són cordes diferents. Comparar-les donaria fals, perquè la H majúscula i la h minúscula són caràcters diferents.

Ah, i per cert: cert i fals es diuen booleans, que és una altra paraula que sona tècnica. Però és molt senzill. Només és una manera formal de dir que una cosa és certa o falsa. Així que si et trobes la paraula booleans, vol dir simplement cert o fals. Vegem-ho en acció. Imagina que estem construint aquest robot porter per a una discoteca, i volem dir que el porter només ha d'obrir la porta si la persona té 21 anys o més. Així que tenim una funció `askAge` (pregunta l'edat), que podem fer servir per obtenir l'edat d'algú, i guardarem el resultat en una variable anomenada `age` (edat). I després podem dir que, si aquest `age` és més gran que 20, obrirem la porta. Així, si `askAge` retorna `30`, l'obrim, i si retorna `12`, no.

```javascript
let age = askAge()
if (age >= 21) {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bouncer-open-close.webp"
  alt="El Jiki obrint la porta a algú prou gran i negant l'entrada a algú massa jove"
  width="410"
  height="400"
/>
