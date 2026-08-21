---
title: "Construyendo arrays"
description: "Empezar con un array vacío y usar `push` para añadir elementos de a uno mientras recorres los datos."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Hasta ahora has estado trabajando con arrays cuyo valor se asigna al principio y se queda fijo. Pero, ¿qué pasa si quieres añadir elementos a un array con el tiempo? Bueno, para esto, los arrays tienen un método llamado `push` (añadir al final).

Push tiene un argumento: lo que quieres añadir al final del array. Así que en este caso, queremos añadir la palabra `"Isaac"` al final de un array que ya contiene `"DJ"` y `"Bethany"`.

Para hacer esto, Jiki saca el array de la caja, añade `"Isaac"` al final de la cadena y luego vuelve a poner todo en la caja. Fíjate que, a diferencia de lo que pasaba con los strings, donde Jiki creaba un string nuevo cada vez, aquí está cambiando el array de verdad.

Un patrón que verás mucho en programación es empezar con un array vacío e irlo llenando. Imagina que tenemos una lista grande de nombres y queremos recorrerla. Cada vez que encontremos uno que sea mentor, lo añadimos a nuestro array.

Este patrón de recorrer y añadir es algo que usarás mucho.
