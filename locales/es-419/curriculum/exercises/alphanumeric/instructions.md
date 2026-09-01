---
title: "Alfanumérico"
description: "Crea funciones para clasificar texto en letras, números o ambos."
en_md5: ba81d7fc98b45703f0c9bba133ae8058
---

En este ejercicio, tu tarea es crear funciones que verifiquen si un string contiene letras y/o números.

Tendrás que escribir tres funciones auxiliares:

- `isAlpha(string)` (solo letras): determina si un string está formado únicamente por letras ASCII (por ejemplo, "A", "a", "Hello").
- `isNumeric(string)` (solo números): determina si un string está formado únicamente por caracteres numéricos (por ejemplo, "0", "1", "456").
- `isAlphanumeric(string)` (alfanumérico): determina si un string está formado únicamente por letras ASCII o números (por ejemplo, "Hello", "42", "Hello42").

Para cualquier otro símbolo (por ejemplo, "! ?") o para los caracteres no ASCII (por ejemplo, "じき", "正直"), las tres funciones deben devolver false.

Luego, escribe una función `whatAmI(string)` (qué soy) que use esas funciones auxiliares para clasificar un string:

- Los strings que solo contienen letras deben devolver `"Alpha"`.
- Los strings que solo contienen números deben devolver `"Numeric"`.
- Los strings que contienen letras y números deben devolver `"Alphanumeric"`.
- Todo lo demás debe devolver `"Unknown"`.

### Tareas adicionales

Hay muchas formas válidas de resolver este ejercicio. Podrías intentar usar una sentencia `continue`, pero hay muchas otras buenas soluciones.

También hay una tarea adicional que te reta a resolver todo el ejercicio en 42 líneas de código o menos. Ese objetivo no es necesariamente la solución de mayor calidad para producción. Un par de líneas extra probablemente dan una mejor solución, y también hay soluciones más cortas. Pero es una buena meta para llevar tus capacidades más lejos.

¡Diviértete!
