---
title: Cara de raposa
description: Construa uma cara de raposa geométrica com triângulos coloridos.
en_md5: 095833a5b2117c2d26500103216bf247
---

Este exercício apresenta a você a função `triangle` (triângulo). Você vai usá-la com 7 entradas. As primeiras 6 são pares de coordenadas para os três cantos. A última é a `color`:

- `x1`, `y1`: o primeiro canto
- `x2`, `y2`: o segundo canto
- `x3`, `y3`: o terceiro canto
- `color`: a cor do triângulo (por exemplo, `"orange"`)

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="Diagrama da função triangle" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Desenhar a cara da raposa

A sua tarefa é usar triângulos para construir uma cara de raposa geométrica:

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="Cara de raposa" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

A cara é simétrica na horizontal (o lado esquerdo é igual ao lado direito). E tem 8 triângulos no total:

- Duas bochechas `"white"`
- Duas orelhas `"brown"`
- Duas metades da cara `"orange"`
- Um nariz `"charcoal"` (dois triângulos)

(Certifique-se de que usa essas cores ao desenhar os triângulos, e lembre-se de conferir que você as escreve como _strings_ (_cadeias de caracteres_)!)

Já desenhamos os contornos de algumas partes para te ajudar a começar. Se você seguir a ordem indicada nos comentários, vai ver que fica tudo um pouco mais fácil.

Além disso, para facilitar ainda mais a sua vida, todos os números usados são divisíveis por 5 (por exemplo, `5`, `10`, `15`, etc. são válidos, mas `1`, `2`, `3`, `4`, `6`, `7`, `8`, `9`, `11`, etc. não são). Você vai encontrar este padrão muitas vezes nos próximos exercícios.

Uma última coisa. Você pode passar o mouse por cima do espaço para ver as coordenadas. Isso ajuda bastante no lado esquerdo, mas, como o lado direito é simétrico, você consegue resolvê-lo sem precisar passar o mouse?

Boa sorte!
