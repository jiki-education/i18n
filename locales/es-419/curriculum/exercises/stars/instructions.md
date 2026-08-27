---
title: "Estrellas"
description: "Construye y dibuja una pirámide de estrellas."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

En este ejercicio vas a construir un generador de patrones visuales que dibuja filas de estrellas.

Tu trabajo es crear una función llamada `layoutStars` (acomodar las estrellas) que recibe un argumento, `numRows`, que indica cuántas filas se necesitan, y luego dibuja las distintas filas de estrellas.

La función debe:

1. Construir un array de strings: un string por fila. Empezar desde abajo, poniendo primero la fila más larga. Por ejemplo, si `numRows` es `3`, ese array sería `["***", "**", "*"]`.
2. Usar la función `drawStars(rows)`, pasándole tus filas, para que dibuje las estrellas.

Si `numRows` es 0, el array debe estar vacío (`[]`) y no se dibuja nada.

Si quieres verlo en acción, puedes ejecutar `drawStars(["***", "**", "*"])` para ver cómo se dibujan las estrellas.

### El método push

Como en el ejercicio anterior, tendrás que construir tu array usando el método `.push(element)`. En este ejercicio, solo puedes crear un array nuevo (`let something = []`) en tu código.

¡Diviértete!
