---
title: "Muñeco de nieve"
description: "Construye un muñeco de nieve con tres círculos."
en_md5: 6fec2ba8f8e20c68c2168c199fa0cf8d
---

Este ejercicio te presenta la función `circle`, la cual usamos con 3 argumentos (_inputs_ en inglés):

- `centerX` (posición central horizontal (x) del centro del círculo)
- `centerY` (posición central vertical (y) del centro del círculo)
- `radius` (qué tan grande es el círculo)

Esta imagen te lo aclarará mejor:

<img src="/static/images/exercise-assets/snowman-basic/intro-circle.webp" alt="Muñeco de nieve" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Dibujar un muñeco de nieve

Tu tarea es dibujar tres círculos blancos para construir un muñeco de nieve. El muñeco de nieve tiene:

- Un círculo grande que hace de **base** en la parte inferior
- Un círculo mediano que hace de **cuerpo** en el medio
- Un círculo pequeño que hace de **cabeza** en la parte superior

Los tres círculos deben estar centrados horizontalmente en el lienzo. Usa la imagen de destino como guía.

Al igual que antes, estás dibujando en un lienzo de 100 de ancho por 100 de alto. Así que la esquina superior izquierda del lienzo es `0,0` y la esquina inferior derecha es `100,100`.

### Calcular las coordenadas correctas

Puedes **pasar el cursor sobre el espacio de dibujo** para encontrar las coordenadas.

En este ejercicio, **todos los números que se usan son divisibles por 5** (por ejemplo, `5`, `10`, `15`, etc. son válidos, pero `1`, `2`, `3`, `4`, etc. no lo son).
