---
title: "Wordle: Solucionador"
description: "Crea un solucionador que juega una partida completa de Wordle por sí solo."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

En el último ejercicio de Wordle, procesaste una partida en la que las palabras que debías probar ya venían dadas. Esta vez te sientas al otro lado y eres tú quien averigua las palabras.

Tu trabajo consiste en crear una nueva función llamada `solveWordle()`, con la que irás probando palabras hasta dar con la palabra correcta. Tienes que resolver la partida de la forma más eficiente posible (usando el menor número de palabras que puedas).

Tienes una nueva función `commonWords()` (palabras comunes) que devuelve un array con las más de 100 palabras que puedes usar en la partida. Estas son las palabras con las que debes trabajar. Siempre debes empezar leyendo la primera palabra de ese array y probándola; después, sigue avanzando, encuentra la siguiente palabra que pueda ser válida y pruébala, y así sucesivamente.

También tienes una función `guess(word)` (adivinar una palabra) que devuelve un array con `"correct"`, `"present"`, `"absent"` para cada letra.

La clave de este ejercicio es pensar bien cómo recuerdas las palabras anteriores y los resultados de llamar a `guess`, y usar ese conocimiento para ir encontrando continuamente el camino más eficiente hacia la victoria.

### Un ejemplo

1. Lees la primera palabra del array, que es `"which"`.
2. Usas `guess("which")`, que devuelve `["correct", "present", "absent", "absent", "absent"]`.
3. Eliges la siguiente palabra del array de palabras comunes que empieza por `"w"` y tiene una `"h"` en la tercera, cuarta o quinta posición.
4. Vuelve al paso (2)...

¡Buena suerte y pásalo bien!
