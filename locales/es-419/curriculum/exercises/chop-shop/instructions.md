---
title: "The Chop Shop"
description: "Averigua si el peluquero tiene tiempo para un cliente más."
en_md5: c68a8a4856c5249baa901c170035ea78
---

Tienes una pequeña peluquería que prioriza la rapidez por encima de la calidad. La gente puede salir con el corte un poco desparejo, pero así no pasa demasiado tiempo en la silla.

Ofreces varios servicios, desde peinados hasta cortes completos, que toman tiempos distintos. Atiendes la peluquería por orden de llegada. No hay sistema de citas.

Cuando se acerca el final del día, necesitas una forma de saber si tienes tiempo para cualquier persona nueva que entre a la peluquería.

Escribe una función llamada `canFitIn` («cabe en el horario») que recibe tres argumentos:

- El primero son los cortes que ya tienes en la fila (un array de strings).
- El segundo es el corte que quiere la persona nueva (string).
- El tercero es la cantidad de minutos que quedan en el día (número).

Devuelve un boolean que indica si puedes atender a esa persona.

Los estilos que ofreces son:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays anidados

Este es el primer ejercicio en el que trabajas con un array que contiene otros arrays como elementos. Los llamamos «arrays anidados». Los arrays anidados son iguales que cualquier otro array, pero en lugar de contener strings o números, contienen otros arrays.

Observa el array `cuts` («cortes»). Contiene otros arrays, uno para cada corte de cabello, y cada uno de estos arrays tiene dos elementos: un nombre y una duración.

Para esto, lo más fácil es pensar primero en los arrays internos (los pares de nombre y duración), y después en que todos están agrupados dentro de otro array.

El acceso por índice funciona igual que siempre, pero puedes encadenar índices así:

```javascript
let cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
