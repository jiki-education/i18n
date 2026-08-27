---
title: "Wordle: Procesa una partida"
description: "Procesa una partida completa de Wordle, coloreando cada fila de intentos una por una."
en_md5: 087a112241856ada8b0cfb4bc7da4798
---

¡Volvemos con el juego de Wordle y ahora toca procesar la partida completa, no solo un intento!

Cuando completes este ejercicio, desbloquearás un **Desafío Premium** donde crearás un bot para jugar de verdad la partida completa de principio a fin, haciendo tus propios intentos sobre la marcha. ¡Es, por mucho, el desafío más avanzado hasta ahora!

### Este ejercicio

Por ahora, necesitas crear una función llamada `processGame(target, guesses)` (procesar la partida) que recibe dos argumentos: la palabra secreta objetivo y un array con los intentos que ha hecho el jugador.

Debes averiguar el estado de cada fila y luego llamar a la función `colorRow(row, states)` (colorear la fila) con el número de fila (`1-6`) y un array de estados, uno por cada letra.

Por ejemplo, si llamamos a `processGame("crane", ["spoil", "trace", "crane"])`, esperamos que tu código use la función `colorRow` tres veces:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

Ya pusimos tu código del ejercicio anterior en el editor como punto de partida. Piensa en cómo puedes hacer que tu código existente sea **más genérico** para hacer que esto funcione. ¡Buena suerte!

### Extra: una regla nueva

Hay una regla de Wordle que omitimos hasta ahora...

Si una letra aparece dos veces en tu intento, pero solo una vez en la palabra objetivo:

- Si alguna de las dos está en el lugar correcto, esa se pone verde y la otra se pone gris.
- Si ambas están en lugares incorrectos, la primera se pone amarilla y la segunda se pone gris.

La misma idea se amplía: con tres en un intento y dos en la palabra, dos se colorean y la tercera se pone gris.

Ejecuta el segundo escenario extra y observa la fila `"SWISS"`. La palabra objetivo es `"swims"`, que tiene dos letras `"s"` y ambas ya están verdes: la del inicio y la del final. Pero tu código también pinta de amarillo el cuarto cuadrado, lo que le dice al jugador que hay _otra_ `"s"` por encontrar. No la hay. Ese cuarto cuadrado debería ser gris.

Debes resolver parcialmente el problema en el primer escenario extra (¡así que empieza por ahí!) y luego resolverlo por completo en el segundo.

¡Esta tarea es un desafío! **¡Recuerda que es un extra y no tienes que completarlo!**
