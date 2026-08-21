---
title: "Cenários"
description: "Diferentes condições iniciais contra as quais um exercício executa o seu único bloco de código, para você ter que fazê-lo funcionar em todas elas."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Cada exercício vem com cenários diferentes, situações diferentes que o seu código tem que tratar.

Você vai vê-los como pequenos botões bem em cima do resultado de cada exercício. Cada botão corresponde a um cenário diferente. A sua tarefa é escrever código que funcione em todos eles, não apenas no primeiro. Deixa eu repetir isso. Você escreve o seu código uma única vez, mas esse mesmo código roda em cada cenário. A diferença é que cada cenário pode estar preparado de forma ligeiramente diferente, ou as funções que você recebe podem retornar coisas ligeiramente diferentes dependendo do cenário em que você está.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="A fila de botões de cenários bem em cima do resultado de um exercício, marcada com um círculo para destacá-los"
  width="500"
  height="318"
/>

Imagine um exemplo de um jogo de golfe. Você pode precisar variar a distância que uma bola rola com base no valor de retorno (_return value_ em inglês) de uma função chamada `getShotLength` (obter a distância da tacada). Esta função te diz a distância a que o golfista bateu a bola. Imagine que o jogador teve que deslizar o dedo no celular para indicar a distância a que bateu a bola.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Uma cena de jogo de golfe com um golfista, uma bola e uma bandeira no buraco à direita"
  width="412"
  height="400"
/>

O resultado chega até você através desta função. Assim, num cenário, você pode usar a função `getShotLength`, e ela retorna `23`, um gesto pequeno. Em outro, retorna `70`, um gesto longo. Em outro ainda, retorna `45`. O seu código tem que fazer a bola rolar a distância certa em cada cenário com apenas um programa, um único conjunto de código. Você vai precisar usar a função `getShotLength` para ver a distância que a tacada percorreu e depois fazer a bola rolar até esse ponto.

```javascript
let distance = getShotLength()
```

Os cenários garantem que o seu código funciona corretamente. É bastante fácil escrever código que funciona numa situação específica. É muito mais difícil e mais valioso escrever código que funciona em muitas situações diferentes. Quando você estiver resolvendo exercícios, comece pelo primeiro cenário. Faça-o funcionar. Depois passe ao cenário seguinte e faça-o funcionar. Quando o seu código falhar num cenário diferente, pense no que é diferente e em como o seu código precisa se adaptar.
