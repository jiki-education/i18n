---
title: "Aventuras en poesía"
description: "Recorre un camino recogiendo las palabras de un poema e ignorando todo lo que no sea una de ellas."
en_md5: 90609a1f81b1b70871df0d2ed130e9e2
---

Estás creando un juego de poesía robótica llamado «Aventuras en poesía». Como primer paso, tienes que programar el robot para que, mientras camina, recoja palabras y después recite el poema al final.

Cada casilla contiene una de estas cuatro cosas:

1. Nada (`""`)
2. Una **palabra** del poema.
3. Un elemento decorativo como una hoja o una mariposa (un emoji).
4. Una bandera de cuadros (`🏁`), que le indica al robot que se detenga.

Para ayudarte, tienes algunas funciones. En primer lugar, tienes una función `move()` que le indica al robot poético que avance a la siguiente casilla y devuelve lo que hubiera en ella. También tienes una función `isEmoji(thing)` que devuelve un boolean que te dice si el string que le pasas es un emoji. Y, por último, tienes una función `recite(poem)` que tendrás que usar con el poema final.

Tu trabajo es recorrer el camino, construir el poema y, después, recitarlo.

## Las reglas

- Las **palabras** van al poema, con un **espacio entre cada una**.
- Los **elementos decorativos** no forman parte del poema y deben ignorarse.
- Un **apóstrofo** está en su propia casilla y une las palabras que hay a ambos lados. `heart`, después `'` y después `s`, se convierte en `heart's`.
- Una **coma** también está en su propia casilla. Se pega a la palabra anterior, pero sigue habiendo un espacio después de ella.
- El poeta deja de caminar cuando llega a la **bandera de cuadros** o en cuanto ha recogido **siete palabras**, lo que ocurra primero.
- Siempre que el poeta se detenga, y sin importar cómo se haya detenido, recita lo que haya recogido. Solo puedes llamar a `recite()` **una vez**.

## Restricciones

Hay muchas maneras de resolver este ejercicio, pero queremos que uses las palabras clave `continue` y `break` que has aprendido recientemente, así que aquí tienes unas cuantas reglas:

1. Tu solución debe usar tanto `continue` como `break`.
2. No puedes usar `&&` ni `!` en tu solución.
3. No puedes escribir ninguna función auxiliar.
4. Solo puedes usar dos niveles de sangría:

```javascript

// Permitido: 2 niveles de sangría
repeat() {
  if(...) {
    //...
  }
}

// No permitido: 3 niveles de sangría
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Eso significa que la solución que se te ocurra será bastante «plana».

¡Buena suerte y diviértete!
