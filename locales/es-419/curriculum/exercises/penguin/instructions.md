---
title: "Pingüino"
description: "Completa un dibujo simétrico de un pingüino."
en_md5: 5a0659ec6a7911fcebe11756dae664f7
---

En este ejercicio dibujamos elipses por primera vez y, además, pensamos un poco más en la simetría que mencionamos en Cara de zorro.

Este ejercicio usa elipses. Las elipses son como círculos estirados. Seguimos indicando el punto central, pero en lugar de un solo radio, usamos dos: el radio horizontal y el radio vertical. Si el radio vertical es mayor que el horizontal, la elipse se verá alta. Y si el radio horizontal es mayor que el vertical, la elipse se verá achatada. Si igualas los dos radios, ¡vuelves a tener un círculo!

La función `ellipse` (elipse) recibe 5 argumentos: la posición central (`centerX` (coordenada X del centro), `centerY` (coordenada Y del centro)), el radio horizontal (`radiusX` (radio horizontal)), el radio vertical (`radiusY` (radio vertical)) y el color:

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="Diagrama de la función elipse" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### El pingüino

Ya dibujamos la mitad de la imagen por ti. Tu tarea es dibujar el lado derecho del pingüino. El dibujo final debería verse así:

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="Pingüino" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Cómo calcular las coordenadas correctas

A diferencia de los ejercicios anteriores, el objetivo es resolver este ejercicio **SIN** pasar el cursor sobre las coordenadas ni adivinarlas.

Al leer el código que está allí, deberías poder deducir los demás detalles para que el dibujo quede simétrico. Recuerda que la esquina superior izquierda del lienzo es `0,0`. La esquina inferior derecha es `100,100`. El pingüino está sentado en el centro.

Para el pico, debes **cambiar** las coordenadas centrales del triángulo. No agregues un triángulo nuevo.

**Empieza presionando _«Ejecutar código»_** para ver cómo se ve la imagen inicial. ¡Diviértete!
