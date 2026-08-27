---
title: "The Chop Shop"
description: "Averigua si el peluquero tiene tiempo para un cliente más."
en_md5: 5d80e48067c44af3dbda12f2fb2c1d4d
---

Llevas una pequeña peluquería que se centra en la rapidez más que en la calidad. Puede que la gente salga con el corte un poco descuidado, pero no pasa demasiado tiempo en el sillón.

Ofreces unos cuantos servicios, desde peinados hasta cortes de pelo completos, que llevan tiempos distintos. Atiendes por orden de llegada. No hay sistema de citas.

Cuando se acerca el final del día, necesitas una forma de saber si tienes tiempo para las personas nuevas que entran en la peluquería.

Escribe una función llamada `canFitIn` (puede atender) que recibe tres entradas:

- La primera entrada es el array de cortes que ya tienes en la cola (array de strings).
- La segunda entrada es el corte que quiere la persona nueva (string).
- La tercera entrada es la cantidad de minutos que quedan del día (número).

Devuelve un Boolean que indica si puedes atender a la persona.

Los estilos que ofreces son:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays anidados

Este es el primer ejercicio en el que trabajas con un array que contiene otros arrays como elementos. Los llamamos «arrays anidados». Los arrays anidados son iguales que cualquier otro array, pero en lugar de contener strings o números, contienen otros arrays.

Echa un vistazo al array `cuts` (cortes). Contiene otros arrays, uno por cada corte de pelo, y cada uno de estos arrays tiene dos elementos: un nombre y una duración.

Con esto, lo más fácil es pensar primero en los arrays internos (los pares de nombre y duración) y después pensar en que todos están agrupados dentro de otro array.

Acceder por índice funciona igual que siempre, pero puedes encadenar varios índices así...

```javascript
const cuts = [
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
