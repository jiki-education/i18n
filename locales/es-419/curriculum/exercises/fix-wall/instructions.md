---
title: "Reparar el muro"
description: "Repara los huecos de un muro roto con rectángulos."
en_md5: d3801d3e7afec83435698bb052cf876e
---

Te damos la bienvenida a tu primer ejercicio de dibujo. En este ejercicio dibujarás rectángulos usando `rectangle` (rectángulo), que es una función (_function_ en inglés).

Para dibujar rectángulos necesitamos saber la posición superior, la izquierda, el ancho y la altura del rectángulo. Cuando usamos la función `rectangle`, podemos especificar estos como argumentos (_inputs_ en inglés):

- `left` (izquierda): El lado izquierdo del rectángulo
- `top` (parte superior): La parte superior del rectángulo
- `width` (ancho): El ancho del rectángulo
- `height` (altura): La altura del rectángulo

<img src="/static/images/exercise-assets/fix-wall/intro-rectangle.webp" alt="Reparar el muro" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Siempre dibujas sobre un lienzo de 100 de ancho por 100 de alto. Así que la esquina superior izquierda del lienzo es `0,0` y la inferior derecha es `100,100`.

### Reparar el muro

Tu trabajo es usar tres rectángulos para rellenar los agujeros del muro.

### Calcular las coordenadas correctas

Puedes **pasar el cursor sobre el espacio de dibujo** para encontrar las coordenadas.

Para hacerte la vida más fácil, **todos los números que se usan son divisibles por 10** (por ejemplo, `10`, `20`, `30`, etc., son válidos, pero `5`, `12`, `25`, etc., no lo son).
