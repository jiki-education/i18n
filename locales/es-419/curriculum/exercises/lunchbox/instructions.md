---
title: "Lonchera"
description: "Empaca todos los artículos que puedas en una lonchera de capacidad limitada."
en_md5: af9957974ff71f16820079737f887b0e
---

Cuando iba a la escuela, empacaba mi lonchera todos los días. Mi mamá me dejaba los artículos afuera, ordenados de mayor a menor, y yo intentaba meter la mayor cantidad posible en la lonchera, pero, obviamente, la lonchera solo podía contener una cantidad limitada. Lo que no cabía, tenía que meterlo en la mochila y cargarlo todo el día conmigo, en lugar de dejarlo en mi casillero.

En este ejercicio, tu trabajo es crear un algoritmo que determine qué artículos puedo meter en la lonchera y qué tengo que llevar en la mochila.

Tu trabajo es escribir una función llamada `packLunch(items, capacity)` (empacar el almuerzo). Esta función recibe dos argumentos: el array de artículos (ordenados de mayor a menor) y el tamaño de la lonchera, `capacity` (capacidad), que es un número.

El array de artículos es un array anidado; cada artículo también es un array con dos elementos: el nombre del artículo y su tamaño. Los artículos siempre van de mayor a menor. Por ejemplo, el array de artículos podría ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

La lonchera tiene una capacidad máxima. Tienes que determinar qué artículos pueden ir en la lonchera. Mete la mayor cantidad de artículos posible. Todo lo demás debe ir a la mochila.

Tu función debe devolver un array que contenga dos elementos. El primer elemento es un array con los artículos para la lonchera, y el segundo, con los artículos para la mochila. Ambos arrays deben estar ordenados de menor a mayor.

Por ejemplo, para el array anterior, con una capacidad de 20, se espera que devuelvas:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos útiles

Al igual que en todos los ejercicios de esta sección, te conviene usar el método `.push(element)` para armar tus arrays.

También cuentas con un método nuevo llamado `[...].toReversed()`, que crea una copia de un array con todos los artículos en orden inverso. Por ejemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

No tienes que usarlo, pero puede resultarte útil.

¡Diviértete!
