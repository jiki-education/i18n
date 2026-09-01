---
title: "Alfanumérico"
description: "Crea funciones para clasificar texto como letras, números o ambos."
en_md5: ba81d7fc98b45703f0c9bba133ae8058
---

En este ejercicio, tu tarea es crear funciones que comprueben si un string contiene letras y/o números.

Tendrás que escribir tres funciones auxiliares:

- `isAlpha(string)` (solo letras ASCII): determina si un string consta únicamente de letras ASCII, por ejemplo «A», «a», «Hello».
- `isNumeric(string)` (solo números): determina si un string consta únicamente de caracteres numéricos, por ejemplo «0», «1», «456».
- `isAlphanumeric(string)` (solo letras o números): determina si un string consta únicamente de letras ASCII o números, por ejemplo «Hello», «42», «Hello42».

Para cualquier otro símbolo (por ejemplo, «! ?») o cualquier carácter no ASCII (por ejemplo, «じき», «正直»), las tres funciones deben devolver false.

A continuación, escribe una función `whatAmI(string)` (qué soy) que use esas funciones auxiliares para clasificar un string:

- Los strings que contienen solo letras deben devolver `"Alpha"`.
- Los strings que contienen solo números deben devolver `"Numeric"`.
- Los strings que contienen tanto letras como números deben devolver `"Alphanumeric"`.
- Todo lo demás debe devolver `"Unknown"`.

### Tareas adicionales

Hay muchas formas válidas de resolver este ejercicio. Quizás quieras probar a usar una instrucción `continue`, pero hay muchas otras buenas soluciones.

También hay una tarea adicional que te reta a resolver todo el ejercicio en 42 líneas de código o menos. Ese objetivo no es necesariamente la solución más adecuada para producción. Probablemente, un par de líneas más da una solución más elegante, y también hay soluciones más cortas. Pero es un buen objetivo para poner a prueba tus capacidades.

¡Diviértete!
