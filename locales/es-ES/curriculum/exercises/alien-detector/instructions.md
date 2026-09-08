---
title: "Detector de alienígenas"
description: "Mueve tu láser de izquierda a derecha y dispara a los alienígenas."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

En el ejercicio anterior de Space Invaders movías tu láser de un lado a otro para derribar a todos los alienígenas. Gran parte de lo que lo hacía posible era la función `isAlienAbove()` (¿hay un alienígena encima?). ¡En este ejercicio la hemos quitado, pero aún tienes que derribar a todos los alienígenas!

Puedes reutilizar tu código del <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">ejercicio anterior de Space Invaders</a> como punto de partida.

Este ejercicio está diseñado para ser un reto. Tómatelo con calma.

### Tu tarea

Derriba a todos los alienígenas. En lugar de poder preguntarle al ejercicio si hay un alienígena encima de ti, tienes que llevar la cuenta de cuáles has derribado y cuáles siguen ahí.

### Conoce `getStartingAliensInRow(idx)` (obtener los alienígenas iniciales de la fila)

Tienes una función nueva llamada `getStartingAliensInRow(idx)`. Recibe una entrada: el índice de la fila, empezando por abajo. Hay un máximo de tres filas, así que el valor de entrada puede ser `0`, `1` o `2`.

La función devuelve un array de 11 valores booleanos. Cada valor booleano indica si hay un alienígena en esa posición al **inicio** del ejercicio. Así, `[true, false, false, ...]` significaría que, antes de hacer nada, hay un alienígena en la primera posición, pero no en las dos siguientes (etcétera).

Esta función solo devuelve las posiciones **iniciales** de los alienígenas. ¡No se actualiza a medida que los derribas!

### Notas

- Cada vez que te mueves hacia la izquierda o hacia la derecha, avanzas o retrocedes una posición. Esa posición equivale a los lugares donde pueden estar los alienígenas.
- Los alienígenas no reaparecen en este ejercicio.
