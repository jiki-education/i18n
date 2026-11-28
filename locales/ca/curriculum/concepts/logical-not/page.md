---
title: "L'operador `!` (no)"
description: "Fer servir `!` per invertir un booleà: true es converteix en false i false es converteix en true, útil per alternar o invertir comprovacions."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Fins ara, quan hem comparat coses per veure si són iguals, hem fet servir tres signes iguals. De vegades, però, volem comprovar si les coses no són iguals, i per a això fem servir un signe d'exclamació seguit de dos signes iguals. I, en general, en programació, un signe d'exclamació o, com crec que en diuen els nostres amics americans, un *bang*, vol dir «no». Així que imagina que treballes en una botiga i que la direcció ha decidit que no s'hi admeten conjunts de música disco.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Un porter a la porta d'una botiga que comprova els conjunts de la gent que fa cua"
  width="451"
  height="400"
/>

Podem dir: «Si el conjunt no és disco, obre la porta». La sentència if funciona exactament igual.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Només passa que la condició retorna true si les coses són diferents, i retorna false si són iguals. Així que podríem escriure el mateix dient: «Si el conjunt és disco, no facis res. Si no, obre la porta». Però, en general, és més fàcil i més net fer servir l'operador `not` per dir exactament el que vols dir.

Una cosa més relacionada amb això. De vegades tindràs una variable que és true i voldràs invertir-la a false, o tindràs una cosa que és false i voldràs invertir-la a true, i podem fer servir això per portar el compte d'alguna cosa. Així que imagina que tenim una cosa que va botant d'esquerra a dreta i que tenim una variable anomenada `movingRight` (es mou a la dreta), que és true quan t'has de moure cap a la dreta. Però quan la vols alternar (_toggle_ en anglès) a false, quan arribes a la vora dreta.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Una pista d'estil Pong amb pales i una pilota que bota d'un costat a l'altre, que il·lustra com s'alterna la variable movingRight"
  width="500"
  height="352"
/>

Així que podríem fer-ho dient: «Si `movingRight` és igual a true, `movingRight` és igual a false. Si no, `movingRight` és igual a true». Aquesta és una manera d'alternar la variable. Així, el Jiki mirarà `movingRight` per veure si és true o false, i després calcularà el contrari i tornarà a posar aquest valor a la capsa.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Però hi ha una manera més neta de fer-ho, i és fer servir el mateix signe d'exclamació, el *bang*:

```javascript
movingRight = !movingRight
```

I això ho inverteix. `!movingRight` vol dir el contrari del que era abans.

Així, si `movingRight` era true, ara és false. Si era false, ara és true. El Jiki agafa el que hi ha ara a la capsa, i aquell bang li diu que trobi el contrari. El contrari de true és false. El contrari de false és true, i llavors ho torna a posar a la capsa. Això és exactament el mateix que aquella sentència if/else més llarga, però és molt més net i més concís d'escriure.
