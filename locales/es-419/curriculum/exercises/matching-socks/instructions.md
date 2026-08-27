---
title: "Calcetines a juego"
description: "Encuentra los pares de calcetines que combinan entre dos canastas de ropa."
en_md5: c58a4ca0800c19322e7e9a98b4634aad
---

Hay pocas cosas más molestas en la vida que tener calcetines desparejados y no poder encontrar su pareja. Así que un día decides por fin ordenar esos calcetines.

Sacas toda la ropa limpia de tus cajones y la pones en una canasta. Después buscas debajo de cada superficie y detrás de cada cojín para encontrar cualquier otra ropa tirada por ahí, y la pones en una segunda canasta de ropa sucia.

Ahora tienes dos canastas y quieres revisarlas para ver si cada calcetín tiene pareja o no.

Escribe una función llamada `matchingSocks` (calcetines a juego). Recibe dos argumentos: la canasta limpia y la canasta sucia, ambas como arrays de strings. Devuelve un array con todos los pares de calcetines.

Por ejemplo:

- Si la canasta limpia contiene: `["left blue sock", "green sweater"]`
- Y la canasta sucia contiene: `["blue shorts", "right blue sock", "left green sock"]`
- Debes devolver `["blue socks"]`

Las descripciones siguen estas reglas:

- Siempre están en minúsculas.
- Siempre son una o más palabras separadas por espacios.
- Las cosas que pueden formar pareja siempre empiezan con `"left "` o `"right "`.

### Métodos

Este ejercicio tiene muchos métodos de strings y arrays que puedes usar para hacerte la vida un poco más fácil. Revisa todas las descripciones de abajo para ver qué hay en tu caja de herramientas para este desafío.

### Extra

Hay muchas formas de resolver esto. Sin embargo, existe una solución bastante ingeniosa de 29 líneas de código, así que fijamos ese objetivo. Puedes escribir una solución más corta, pero el código tiende a volverse menos legible a medida que se acorta, así que creemos que alrededor de 29 es el mejor nivel.

¡Diviértete!
