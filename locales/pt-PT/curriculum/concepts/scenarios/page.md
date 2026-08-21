---
title: "Cenários"
description: "Diferentes condições iniciais contra as quais um exercício executa o teu único bloco de código, para teres de o pôr a funcionar em todas elas."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Cada exercício vem com cenários diferentes, situações diferentes que o teu código tem de tratar.

Vais vê-los como pequenos botões mesmo por cima do resultado de cada exercício. Cada botão corresponde a um cenário diferente. A tua tarefa é escrever código que funcione em todos eles, não apenas no primeiro. Deixa-me repetir isto. Escreves o teu código uma única vez, mas esse mesmo código corre em cada cenário. A diferença é que cada cenário pode estar preparado de forma ligeiramente diferente, ou as funções que recebes podem devolver coisas ligeiramente diferentes consoante o cenário em que estás.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="A fila de botões de cenários mesmo por cima do resultado de um exercício, assinalada com um círculo para os destacar"
  width="500"
  height="318"
/>

Imagina um exemplo de um jogo de golfe. Podes precisar de variar a distância que uma bola rola com base no valor devolvido (_return value_ em inglês) de uma função chamada `getShotLength` (obter a distância da tacada). Esta função diz-te a distância a que o golfista bateu a bola. Imagina que o jogador teve de deslizar o dedo no telemóvel para indicar a distância a que bateu a bola.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Uma cena de jogo de golfe com um golfista, uma bola e uma bandeira no buraco à direita"
  width="412"
  height="400"
/>

O resultado chega-te através desta função. Assim, num cenário, podes usar a função `getShotLength`, e devolve `23`, um gesto pequeno. Noutro, devolve `70`, um gesto longo. Noutro ainda, devolve `45`. O teu código tem de fazer a bola rolar a distância certa em cada cenário com apenas um programa, um único conjunto de código. Vais precisar de usar a função `getShotLength` para veres a distância que a tacada percorreu e depois fazer a bola rolar até esse ponto.

```javascript
let distance = getShotLength()
```

Os cenários garantem que o teu código funciona corretamente. É bastante fácil escrever código que funciona numa situação específica. É muito mais difícil e mais valioso escrever código que funciona em muitas situações diferentes. Quando estiveres a resolver exercícios, começa pelo primeiro cenário. Põe-no a funcionar. Depois passa ao cenário seguinte e põe-no a funcionar. Quando o teu código falhar num cenário diferente, pensa no que é diferente e em como o teu código precisa de se adaptar.
