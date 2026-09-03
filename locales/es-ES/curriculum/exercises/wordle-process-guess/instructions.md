---
title: "Wordle: Procesar el intento"
description: "Revisa un intento de Wordle y averigua qué letras son correctas."
en_md5: d9a619535c9794108b46091447b14f6d
---

¡Bienvenido a Wordle, el juego que se hizo viral durante los confinamientos por la covid-19!

El juego funciona así:

- Hay una palabra secreta que el usuario intenta adivinar.
- El usuario tiene 6 intentos para acertarla.
- En cada intento hay 5 casillas, una para cada letra:
  - Si una letra es correcta, la casilla se pone verde.
  - Si una letra está en la palabra secreta pero en el lugar equivocado, la casilla se pone amarilla.
  - Si una letra no está en la palabra secreta, la casilla se pone gris.

En unos cuantos ejercicios implementarás el juego completo de Wordle, pero en **este ejercicio** solo vas a hacer que funcione la primera fila.

Para ello, tienes que crear una función llamada `processGuess(target, guess)` (procesar el intento). Las palabras que recibas en tu función siempre estarán en minúsculas. Debe calcular el estado de cada letra del intento y, después, llamar a la función `colorRow(1, states)` (colorear la fila) con un array de estados para cada letra: `"correct"`, `"present"` o `"absent"`.

Por ejemplo, `processGuess("hello", "holes")` debería usar `colorRow` con:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

¡Asegúrate de que lo entiendes antes de continuar!

Además, si eres un aficionado a Wordle, puede que notes que las reglas anteriores están **ligeramente simplificadas** en comparación con el juego oficial. En este ejercicio, cíñete a estas reglas simplificadas y en el próximo ejercicio de Wordle te presentaremos el conjunto completo de reglas.

### Métodos

Como en los últimos ejercicios, puedes construir el array de estados con el método `push`, que añade un elemento al final de un array. Por ejemplo, `states.push("correct")` añade `"correct"` al final del array `states`.

También tienes el método `includes` si quieres comprobar si un string contiene otro string.

¡Buena suerte!
