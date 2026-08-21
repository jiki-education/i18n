---
title: "Aritmética"
description: "Combinar variáveis com matemática para que os valores se relacionem e dependam uns dos outros através da adição, da subtração, da multiplicação e da divisão."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Até agora, quando criamos variáveis, usamos apenas valores simples: um número como `50` ou uma string como `"yellow"`. As variáveis se tornam muito mais poderosas quando a gente usa umas em combinação com as outras. Por exemplo, podemos dizer que a borda esquerda do retângulo deve ficar a uma certa distância da borda da tela de desenho.

Em programação, podemos usar matemática normal e básica, coisas como somar, subtrair, multiplicar e dividir. Também podemos usar as variáveis que já definimos como parte disso.

Vamos começar dizendo que queremos desenhar um retângulo na nossa tela e que queremos que ele fique a 10 da borda esquerda e da borda direita, e a 20 do topo e da base. Assim, ele fica no meio da tela, um pouco mais longo do que alto.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Um retângulo azul centralizado na tela, a 10 da borda esquerda e da borda direita e a 20 do topo e da base"
  width="399"
  height="400"
/>

Quando desenhamos um retângulo, precisamos saber os valores `left` (esquerda), `top` (topo), `width` (largura) e `height` (altura), e a cor. Então podemos começar escrevendo isso.

E agora precisamos descobrir que valores `left`, `top`, `width` e `height` devem ter. Vamos defini-los. `left` é 10. `top` é 20. `width` é o tamanho da tela, que é 100, menos os 10 da esquerda e os 10 da direita, o que dá 80. E `height` é a altura da tela, que também é 100, menos os 20 do topo e os 20 da base, ou seja, 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Podemos então definir essas variáveis. `left` é 10, `top` é 20, `width` é 80, `height` é 60. Mas o que acontece se quisermos deslocar o retângulo um pouco para dentro e deixá-lo um pouco menor? Se quisermos que ele fique a 20 da esquerda e da direita e a 30 do topo e da base? Temos que calcular tudo de novo. `width` passa a ser 100 menos 20 menos 20, e `height` passa a ser 100 menos 30 menos 30. Isso é, sem dúvida, mais trabalho e mais matemática do que eu quero fazer. Então podemos, em vez disso, dizer ao computador que faça isso para a gente.

Podemos definir `width` como 100 menos `left` menos `left`, e `height` como 100 menos `top` menos `top`, porque o topo e a base são iguais. Ou podemos escrever isso como 100 menos `left` vezes dois, ou 100 menos `top` vezes dois.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

E agora, se mudarmos `left` ou `top`, `width` e `height` também mudam. As coisas começam assim a se relacionar umas com as outras. E quanto à tela? Neste momento, o tamanho dela é 100. Mas e se a nossa tela passar a ter 200 de largura e 200 de altura? Bem, provavelmente devemos criar uma variável chamada `canvasSize` (tamanho da tela) e defini-la como 100. Agora `width` é `canvasSize` menos `left` vezes dois, e `height` é `canvasSize` menos `top` vezes dois.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Vamos pensar no que o Jiki está fazendo quando escrevemos let `height` igual a `canvasSize` menos `top` vezes dois. Bem, ele começa tirando a caixa `top` da prateleira, encontra 30 lá dentro, pega a calculadora de bolso e calcula 30 vezes dois, e anota mentalmente 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="O Jiki tirando da prateleira a caixa com o nome top e calculando que 30 vezes dois é 60"
  width="377"
  height="400"
/>

Depois, ele tira a caixa `canvasSize` da prateleira, encontra 100 lá dentro e calcula que 100 menos 60 é 40. Agora ele já sabe que, na verdade, o que estamos dizendo é: let `height` igual a 40. Então ele obedece ao let, pega uma caixa nova, escreve `height` nela e põe 40 lá dentro. Mais tarde, quando usa `height`, ele só precisa tirar o 40 de lá de dentro.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="O Jiki pegando uma caixa nova, escrevendo o nome height nela e pondo 40 lá dentro"
  width="462"
  height="400"
/>

Quando você tiver tudo funcionando num exercício, divirta-se mudando os valores das variáveis e veja o que acontece. Observe como eles crescem e como encolhem. Vá no seu tempo e pense nas relações entre as coisas.
