---
title: "Com funcionen els bucles `for`"
description: "Un bucle amb tres parts (un inicialitzador, una condició i un increment) que et dona control total sobre la iteració."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Potser recordes que el bucle `repeat` no existeix realment a JavaScript. És només una cosa que hi hem afegit per fer-te la vida una mica més fàcil mentre comencem.

I què fem servir, doncs, en lloc d'això? Doncs fem servir un bucle `for` normal, que té aquest aspecte.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Ja veus per què això podia ser una mica intimidant el primer dia.

Però ara ja tens tots els coneixements que necessites per sentir-te còmode amb això. Així que analitzem-ho per parts.

Un bucle `for` té tres components: un inicialitzador, una condició i un increment.

L'inicialitzador, aquesta part de `let i = 0`, s'executa a l'inici de tot el bucle. Només s'executa una vegada, i aquí crea una capsa anomenada `i` (índex) que val zero. `i` és només una lletra que fem servir per anar seguint un valor mentre fem el bucle, i tradicionalment es fan servir `i` o `x` per a això.

La part següent, la condició, s'executa cada vegada abans de cada iteració del bucle.

Si la condició és certa, tornem a executar el bucle.

I si no és així, no ho fem.

I finalment hi ha l'increment, el `i++`.

`i++` vol dir exactament el mateix que `i = i + 1`. És només una forma abreujada, una manera d'augmentar `i` en una unitat cada vegada.

Així que, en aquest exemple, posem `i` a zero. Comprovem si `i` és menor que dos, i ho és, de manera que executem el bucle.

I després, al final, augmentem `i` en una unitat, de manera que `i` passa a valer u. Zero més u és u.

I llavors hi tornem. Comprovem si u és menor que dos.

Sí que ho és, així que executem el bucle. I al final tornem a augmentar `i`. Ara ja val dos: u més u fan dos.

```javascript
i = 0
i < 2 // true - run the loop
...   // Do the iteration
i = i + 1 // 1

i < 2 // true - run the loop
...   // Do the iteration
i = i + 1 // 2

i < 2 // false - exit the loop
```

I llavors hi tornem per tercera vegada. Aquesta vegada comprovem si dos és menor que dos, i no ho és, així que no executem el bucle i, de fet, ja hem acabat amb el bucle. Simplement passem a qualsevol codi que hi hagi a sota. Així que hem executat el bucle dues vegades, i això és una cosa útil de saber. Sempre que comencem a zero i tinguem una condició `i < n`, el nombre `n` és la quantitat de vegades que s'executarà el bucle.

Així que ve a ser el mateix que dir `repeat` dues vegades.

No és difícil, però és molt més enrevessat que escriure simplement `repeat` dues vegades. L'avantatge d'un bucle `for` és que pots fer qualsevol cosa en aquests tres espais. Pots començar amb un altre número, comptar augmentant de més d'una unitat cada vegada, comptar enrere o fer servir una condició que depengui d'alguna cosa més que un simple comptador. Aquesta flexibilitat és el que converteix els bucles `for` en el cavall de batalla de JavaScript.
