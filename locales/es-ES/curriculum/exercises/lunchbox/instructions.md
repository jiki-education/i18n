---
title: "Fiambrera"
description: "Mete en una fiambrera de capacidad limitada tantos objetos como puedas."
en_md5: 0b9c26e60261ec4da42ae367a9102359
---

De niño, preparaba mi fiambrera todos los días para ir al colegio. Mi madre me dejaba los objetos fuera, ordenados del más grande al más pequeño, y yo intentaba meter en la fiambrera todo lo que podía, pero, claro, la fiambrera solo podía contener una cantidad limitada. Lo que no cabía en ella, tenía que meterlo en la mochila y llevarlo todo el día conmigo, en lugar de dejarlo en la taquilla.

En este ejercicio, tu tarea es crear un algoritmo que calcule qué puedo meter en la fiambrera y qué tengo que llevar en la mochila.

Tu tarea es escribir una función llamada `packLunch(items, capacity)` (guardar el almuerzo) que recibe dos entradas: el array de objetos (con el más grande primero) y el tamaño de la fiambrera `capacity` (la capacidad, un número).

El array de objetos es un array anidado: cada objeto es, a su vez, un array con dos elementos, el nombre del objeto y su tamaño. Los objetos van siempre de mayor a menor. Por ejemplo, el array de objetos podría ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

La fiambrera tiene una capacidad máxima. Tienes que averiguar qué objetos caben en la fiambrera. Mete en la fiambrera todos los que puedas. Todo lo demás debe ir a la mochila.

Tu función debe devolver un array que contenga dos elementos. El primer elemento es un array con los objetos que van a la fiambrera, y el segundo, con los objetos que van a la mochila. Ambos arrays deben estar ordenados de menor a mayor.

Por ejemplo, para el array anterior, con una capacidad de 20, deberías devolver:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos de ayuda

Al igual que en todos los ejercicios de esta sección, te convendrá usar el método `.push(element)` para construir tus arrays.

También tienes un método nuevo llamado `[...].toReversed()`, que crea una copia de un array con todos los elementos en orden inverso. Por ejemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

No tienes que usarlo, pero puede resultarte útil.

¡Diviértete!
