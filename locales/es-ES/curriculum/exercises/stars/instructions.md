---
title: "Estrellas"
description: "Construye y dibuja una pirámide de estrellas."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

En este ejercicio vas a construir un generador visual de patrones que dibuja filas de estrellas.

Tu trabajo es crear una función llamada `layoutStars` (organizar las estrellas) que recibe una entrada, `numRows`, que indica cuántas filas se necesitan, y que luego dibuja las distintas filas de estrellas.

La función debe:

1. Construir un array de strings, con un string por fila. Empieza por abajo, con la fila más larga primero. Por ejemplo, si `numRows` es `3`, el array sería `["***", "**", "*"]`.
2. Usar la función `drawStars(rows)`, pasándole tus filas, que dibujará las estrellas.

Si `numRows` es 0, el array debe estar vacío (`[]`) y no se dibuja nada.

Si quieres verlo en acción, puedes ejecutar `drawStars(["***", "**", "*"])` para ver cómo se dibujan las estrellas.

### El método push

Como en el ejercicio anterior, tendrás que construir tu array con el método `.push(element)`. En este ejercicio solo puedes crear un array nuevo (`let something = []`) en tu código.

¡Diviértete!
