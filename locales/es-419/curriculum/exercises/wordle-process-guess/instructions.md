---
title: "Wordle: Procesar el intento"
description: "Revisa un intento de Wordle y averigua qué letras son correctas."
en_md5: d9a619535c9794108b46091447b14f6d
---

¡Te damos la bienvenida a Wordle, el juego que se volvió viral durante las cuarentenas por la covid-19!

El juego funciona así:

- Hay una palabra secreta que el usuario intenta adivinar.
- El usuario tiene 6 intentos para acertar.
- Para cada intento hay 5 casillas, una para cada letra:
  - Si una letra es correcta, la casilla se pone verde.
  - Si una letra está en la palabra secreta pero en el lugar equivocado, la casilla se pone amarilla.
  - Si una letra no está en la palabra secreta, la casilla se pone gris.

En unos cuantos ejercicios vas a implementar el juego completo de Wordle, pero en **este ejercicio** solo vas a hacer que las cosas funcionen para la primera fila.

Para lograrlo, tienes que crear una función llamada `processGuess(target, guess)` (procesar el intento). Las palabras que recibe tu función siempre estarán en minúsculas. Debe determinar el estado de cada letra del intento y luego llamar a la función `colorRow(1, states)` (colorear la fila 1) con un array de estados para cada letra: `"correct"`, `"present"` o `"absent"`.

Por ejemplo, `processGuess("hello", "holes")` debería usar `colorRow` con:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

¡Asegúrate de entenderlo antes de continuar!

Además, si eres aficionado a Wordle, quizá notes que las reglas anteriores están **un poco simplificadas** en comparación con el juego oficial. En este ejercicio, por favor, sigue estas reglas simplificadas y en el próximo ejercicio de Wordle te mostraremos las reglas completas.

### Métodos

Al igual que en los últimos ejercicios, puedes construir el array de estados con el método `push`, que agrega un elemento al final de un array. Por ejemplo, `states.push("correct")` agrega `"correct"` al final del array `states`.

También tienes el método `includes` si quieres verificar si un string contiene otro string.

¡Buena suerte!
