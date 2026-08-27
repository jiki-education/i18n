---
title: "Wordle: Solucionador"
description: "Crea un solucionador que juega por sí mismo una partida completa de Wordle."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

En el último ejercicio de Wordle, procesaste una partida en la que los intentos ya venían dados. Esta vez estás del otro lado y eres tú quien realmente decide los intentos.

Tu trabajo es crear una nueva función llamada `solveWordle()`, con la que sigues probando palabras hasta encontrar la palabra correcta. Debes resolver la partida de la forma más eficiente posible (usando la menor cantidad de palabras posible).

Ahora tienes una nueva función `commonWords()` (palabras comunes), que devuelve un array con las más de 100 palabras que puedes usar en la partida. Estas son las palabras que debes recorrer. Siempre debes empezar leyendo la primera palabra de ese array y probándola. Luego avanza: encuentra la siguiente palabra válida posible y pruébala, y así sucesivamente.

También tienes una función `guess(word)` (probar una palabra) que devuelve un array de `"correct"`, `"present"` y `"absent"` para cada letra.

La clave de este ejercicio está en pensar bien cómo recordar las palabras que ya probaste y los resultados de llamar a `guess`, y usar ese conocimiento para encontrar siempre el camino más eficiente hacia la victoria.

### Un ejemplo

1. Lees la primera palabra del array, que es `"which"`.
2. Usas `guess("which")`, que devuelve `["correct", "present", "absent", "absent", "absent"]`.
3. Eliges la siguiente palabra del array de palabras comunes que empieza con `"w"` y tiene una `"h"` en la tercera, cuarta o quinta posición.
4. Regresa al (2)...

¡Buena suerte y diviértete!
