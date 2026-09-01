---
title: "Aventuras en la poesía"
description: "Recorre un camino recogiendo las palabras de un poema e ignorando todo lo que no sea una."
en_md5: 90609a1f81b1b70871df0d2ed130e9e2
---

Estás creando un juego robótico de poesía llamado «Aventuras en la poesía». Como primer paso, tienes que programar al robot para que, mientras camina, recoja palabras y al final recite el poema.

Cada casilla contiene una de cuatro cosas:

1. Nada (`""`)
2. Una **palabra** del poema.
3. Paisaje, como una hoja o una mariposa (un emoji).
4. Una bandera a cuadros (`🏁`), que le dice al robot que se detenga.

Para ayudarte, tienes algunas funciones. Primero, tienes una función `move()`, que le dice al robot poético que avance a la siguiente casilla y devuelve lo que había en ella. También tienes una función `isEmoji(thing)` que devuelve un boolean y te dice si el string que le pasas es un emoji. Y, por último, tienes una función `recite(poem)` que debes usar con el poema final.

Tu trabajo es recorrer el camino, construir el poema y luego recitarlo.

## Las reglas

- Las **palabras** van al poema, con un **espacio entre cada una**.
- El **paisaje** no es parte del poema y debes ignorarlo.
- Un **apóstrofo** ocupa su propia casilla y une las palabras que están a cada lado. `heart`, luego `'` y luego `s` se convierte en `heart's`.
- Una **coma** también ocupa su propia casilla. Se pega a la palabra anterior, pero sigue habiendo un espacio después de ella.
- El poeta deja de caminar cuando llega a la **bandera a cuadros** o en cuanto recoge **siete palabras**, lo que ocurra primero.
- Cada vez que el poeta se detiene, sin importar cómo se detuvo, recita lo que recogió. Solo puedes llamar a `recite()` **una vez**.

## Restricciones

Hay muchas formas de resolver este ejercicio, pero queremos que uses las palabras clave `continue` y `break` que aprendiste hace poco, así que hay algunas reglas:

1. Tu solución debe usar tanto `continue` como `break`.
2. No puedes usar `&&` ni `!` en tu solución.
3. No puedes escribir ninguna función auxiliar.
4. Solo puedes usar dos niveles de indentación:

```javascript

// Permitido: 2 niveles de indentación
repeat() {
  if(...) {
    //...
  }
}

// No permitido: 3 niveles de indentación
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Eso significa que la solución que vas a crear es bastante «plana».

¡Buena suerte y diviértete!
