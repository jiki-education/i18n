---
title: "Cores RGB"
description: "Misturar luz vermelha, verde e azul, de 0 a 255, para criar qualquer cor que queiras no ecrã."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

O RGB permite-nos pensar nas cores como uma mistura de vermelho, verde e azul. É isso que o RGB significa: vermelho (_red (R)_ em inglês), verde (_green (G)_ em inglês), azul (_blue (B)_ em inglês). Se te lembras de misturar tintas na escola, a ideia é parecida, só que, em vez de tinta, estamos a misturar luz.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Três círculos sobrepostos de luz vermelha, verde e azul que se misturam para formar amarelo, magenta, ciano e branco"
  width="500"
  height="390"
/>

Em muitos exercícios, vais ter uma função chamada `rgb(red, green, blue)` que recebe três números como parâmetros de entrada: um para o vermelho, outro para o verde e outro para o azul, e devolve uma cor.

Os números que podes usar como valores de entrada variam entre zero e `255`. Zero significa que não quero nada dessa cor, e `255` significa misturar o máximo possível dessa cor. Por isso, se usarmos a função `rgb` com `255`, zero e zero como valores de entrada, o que estamos a dizer é: quero todo o vermelho. Lembra-te de que `255` é o maior número que podes lá pôr. Mas não queremos nada de verde nem de azul, por isso os dois são zero. Assim, obtemos vermelho, e podemos guardar esse vermelho numa variável para depois o usarmos na função `circle`, tal como já temos feito com as strings nomeadas. E se usarmos a função `rgb` com zero, `255` e zero? Agora estamos a dizer: nada de vermelho, todo o verde, nada de azul. Assim, obtemos um círculo verde. E se quisermos amarelo? O amarelo é uma mistura de vermelho e verde. Por isso, podemos dizer: dá-me todo o vermelho, todo o verde e nada de azul, e isso dá-nos amarelo. E podemos usar números mais pequenos. Por isso, se quisermos algum vermelho, nenhum verde e muito azul, obtemos roxo. E com muito vermelho, um pouco de verde e um pouco mais de azul, obtemos um rosa. É isso o RGB. Misturamos vermelho, verde e azul para obter combinações diferentes.

```javascript
rgb(255, 0, 0) // vermelho
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Um círculo vermelho produzido por rgb(255, 0, 0), com todo o vermelho e sem verde nem azul"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // amarelo
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Um círculo amarelo produzido por rgb(255, 255, 0), com todo o vermelho e todo o verde, e sem azul"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // rosa
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Um círculo rosa produzido por rgb(230, 50, 170), com muito vermelho, um pouco de verde e algum azul"
  width="436"
  height="400"
/>

O RGB é ótimo quando queres ajustar um component específico: quanto vermelho, quanto verde, quanto azul.
