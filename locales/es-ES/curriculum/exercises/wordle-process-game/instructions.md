---
title: "Wordle: procesa una partida"
description: "Procesa una partida completa de Wordle, coloreando cada fila de intentos una por una."
en_md5: 087a112241856ada8b0cfb4bc7da4798
---

¡Volvemos con el juego de Wordle! Ahora toca procesar la partida completa, no solo un único intento.

En cuanto completes este ejercicio, desbloquearás un **Reto Premium** en el que crearás un bot para jugar la partida completa de principio a fin, haciendo tus propios intentos sobre la marcha. ¡Es, con diferencia, el reto más avanzado hasta ahora!

### Este ejercicio

Por ahora, tienes que crear una función llamada `processGame(target, guesses)` (procesar la partida) que recibe dos entradas: la palabra objetivo secreta y un array de los intentos que ha hecho el jugador.

Debes averiguar el estado de cada fila y, después, llamar a la función `colorRow(row, states)` (colorear la fila) con el número de fila (`1-6`) y un array de estados, uno por cada letra.

Por ejemplo, si llamáramos a `processGame("crane", ["spoil", "trace", "crane"])`, esperaríamos que tu código usara la función `colorRow` tres veces:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

Hemos puesto tu código del ejercicio anterior en el editor como punto de partida. Piensa en cómo puedes hacer que tu código actual sea **más genérico** para que esto funcione. ¡Mucha suerte!

### Extra: una regla nueva

Hay una regla de Wordle que hemos pasado por alto hasta ahora...

Si una letra aparece dos veces en tu intento, pero solo una vez en la palabra objetivo:

- Si una de ellas está en el lugar correcto, esa se colorea de verde y la otra de gris.
- Si las dos están en el lugar equivocado, la primera se colorea de amarillo y la segunda de gris.

La misma idea se amplía: si hay tres en tu intento y dos en la palabra, dos se colorean y la tercera se queda gris.

Ejecuta el segundo escenario extra y mira la fila `"SWISS"`. La palabra objetivo es `"swims"` y contiene dos `"s"`; ambas ya están verdes: una al principio y otra al final.

Pero tu código también colorea de amarillo la cuarta casilla, lo que le dice al jugador que todavía queda _otra_ `"s"` por encontrar. No hay otra. Esa cuarta casilla debería quedar gris.

Tienes que resolver parcialmente el problema en el primer escenario extra (¡así que empieza por ahí!) y, después, resolverlo por completo en el segundo.

¡Esta tarea es todo un reto! **Recuerda que es un extra y no tienes que completarlo.**
