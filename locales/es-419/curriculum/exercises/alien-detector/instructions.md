---
title: "Detector de alienígenas"
description: "Mueve tu láser de izquierda a derecha y derriba a los alienígenas."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

En el ejercicio anterior de Space Invaders movías tu láser de un lado a otro para derribar a todos los alienígenas. Gran parte de lo que hizo posible eso fue la función `isAlienAbove()` (que te dice si hay un alienígena encima de ti). En este ejercicio, la quitamos, ¡pero todavía tienes que derribar a todos los alienígenas!

Te dimos un lienzo en blanco para empezar. Puedes reutilizar tu código del <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">ejercicio anterior de Space Invaders</a> como punto de partida.

Este ejercicio está pensado como un desafío. ¡Tómalo con calma!

### Tu tarea

Derriba a todos los alienígenas. En lugar de poder preguntarle al ejercicio si hay un alienígena encima de ti, tienes que llevar la cuenta de qué alienígenas derribaste y cuáles siguen allí.

### Conoce `getStartingAliensInRow(idx)` (obtener los alienígenas iniciales de la fila indicada)

Tienes una nueva función llamada `getStartingAliensInRow(idx)`. Recibe un argumento: el índice de la fila, contando desde abajo. Hay un máximo de tres filas, así que el argumento puede ser `0`, `1` o `2`.

La función devuelve una lista de 11 booleanos. Cada booleano indica si hay un alienígena en esa posición al **inicio** del ejercicio. Entonces, `[true, false, false, ...]` significaría que, antes de que hagas nada, hay un alienígena en la primera posición, pero no en las dos siguientes (etc.).

Esta función solo devuelve las posiciones **iniciales** de los alienígenas. ¡**No** se actualiza a medida que los derribas!

### Notas

- Cada vez que te mueves a la izquierda o a la derecha, avanzas o retrocedes una posición. Esa posición corresponde a los lugares donde pueden estar los alienígenas.
- Los alienígenas no reaparecen en este ejercicio.
