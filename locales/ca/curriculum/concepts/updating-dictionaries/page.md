---
title: "Actualitzar diccionaris"
description: "Fer servir `dict[key] = value` per actualitzar entrades existents o afegir-ne de noves, i també el mètode `has` per comprovar les claus."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Ja saps com crear un diccionari i com treure'n valors. Però què passa si les dades canvien? Tard o d'hora em faré més gran. Ja no seré `42`, seré `43`.

Com actualitzem el diccionari? Doncs fem servir un mètode molt semblant al que fem servir per trobar una cosa. Ja saps que trobem una cosa amb claudàtors per extreure'n el valor. Doncs també podem fer servir claudàtors seguits d'un signe igual per actualitzar el diccionari. El Jiki va a la capsa de la persona, en treu el full de la llibreta, troba la clau `"age"`, esborra el `42` que hi havia i hi escriu `43` al seu lloc, i després el full de la llibreta torna a dins de la capsa. Això és canviar el diccionari mateix.

```javascript
person["age"] = 43
```

El Jiki no està creant un diccionari nou: està canviant la llibreta que ja hi havia a la capsa.

I si vols afegir informació que abans no hi era? Doncs pots fer exactament el mateix.

Si especifiques una clau que no existeix, el Jiki simplement afegeix una clau nova al final amb aquest valor.

Així que, en aquest cas, obrirà la llibreta, buscarà `"country"`, veurà que no hi és i afegirà una línia nova al final: `"country"` a l'esquerra, `"England"` a la dreta.

```javascript
person["country"] = "England"
```

És exactament la mateixa sintaxi que per canviar un valor. El Jiki s'encarrega de totes dues coses automàticament. Si la clau existeix, l'actualitza. Si no existeix, l'afegeix. No has de fer res especial.

I de la mateixa manera que pots començar amb una llista buida i anar-hi afegint coses, pots començar amb un diccionari buit i afegir-hi claus una a una. Un altre cop, és un patró molt habitual. El veuràs pertot arreu.

Un ús molt habitual dels diccionaris és portar el compte de coses. Pots posar com a claus les coses de les quals vols portar el compte i com a valors els comptes. Així que imagina't que estàs observant ocells i vols saber quants n'has vist de cada espècie. El primer cop que veus un ocell, poses el seu compte a u; i cada cop següent que el veus, n'agafes el valor actual i l'augmentes en u. Perquè aquest patró funcioni, necessitem una manera de comprovar si el diccionari ja té aquesta clau, i en aquest cas hi sumarem u, o si no la té, haurem de començar-la a u.

I per fer-ho, els diccionaris tenen un mètode: el mètode `has` (té).

Especifiques la clau que t'interessa, i el Jiki comprova si el diccionari té aquesta clau o no, i retorna true o false segons el cas.

```javascript
person.has("age") // true
```

Si ho ajuntem tot, el patró de recompte queda així:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
