---
title: "Aritmética"
description: "Combinar variáveis com matemática para que os valores se relacionem e dependam uns dos outros através da adição, da subtração, da multiplicação e da divisão."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Até agora, quando criámos variáveis, usámos apenas valores simples: um número como `50` ou uma string como `"yellow"`. As variáveis tornam-se muito mais poderosas quando as usamos em combinação umas com as outras. Por exemplo, podemos dizer que o bordo esquerdo do retângulo deve ficar a uma certa distância do bordo da tela.

Em programação, podemos usar matemática normal e básica, coisas como somar, subtrair, multiplicar e dividir. Também podemos usar as variáveis que já definimos como parte disso.

Vamos começar por dizer que queremos desenhar um retângulo na nossa tela e que queremos que fique a 10 do bordo esquerdo e do bordo direito, e a 20 do topo e da base. Assim, fica no meio da tela, ligeiramente mais comprido do que alto.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Um retângulo azul centrado na tela, a 10 do bordo esquerdo e do bordo direito e a 20 do topo e da base"
  width="399"
  height="400"
/>

Quando desenhamos um retângulo, precisamos de saber os valores `left` (esquerda), `top` (topo), `width` (largura) e `height` (altura), e a cor. Por isso, podemos começar por escrever isso.

E agora precisamos de descobrir que valores devem ter `left`, `top`, `width` e `height`. Vamos defini-los. `left` é 10. `top` é 20. `width` é o tamanho da tela, que é 100, menos os 10 à esquerda e os 10 à direita, o que dá 80. E `height` é a altura da tela, que também é 100, menos os 20 no topo e os 20 na base, ou seja, 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Podemos então definir essas variáveis. `left` é 10, `top` é 20, `width` é 80, `height` é 60. Mas o que acontece se quisermos deslocar o retângulo um pouco para dentro e torná-lo um pouco mais pequeno? Se quisermos que fique a 20 da esquerda e da direita e a 30 do topo e da base? Temos de voltar a calcular tudo. `width` passa a ser 100 menos 20 menos 20, e `height` passa a ser 100 menos 30 menos 30. Isto é, sem dúvida, mais trabalho e mais matemática do que quero fazer. Por isso, podemos antes dizer ao computador que o faça por nós.

Podemos definir `width` como 100 menos `left` menos `left`, e `height` como 100 menos `top` menos `top`, porque o topo e a base são iguais. Ou podemos escrever isso como 100 menos `left` vezes dois, ou 100 menos `top` vezes dois.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

E agora, se mudarmos `left` ou `top`, `width` e `height` também mudam. As coisas começam assim a relacionar-se umas com as outras. E quanto à tela? Neste momento, o seu tamanho é 100. Mas e se a nossa tela passar a ter 200 de largura e 200 de altura? Bem, provavelmente devemos criar uma variável chamada `canvasSize` (tamanho da tela) e defini-la como 100. Agora `width` é `canvasSize` menos `left` vezes dois, e `height` é `canvasSize` menos `top` vezes dois.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Vamos pensar no que é que o Jiki está a fazer quando escrevemos let `height` igual a `canvasSize` menos `top` vezes dois. Bem, ele começa por tirar a caixa `top` da prateleira, encontra 30 lá dentro, pega na calculadora de bolso e calcula 30 vezes dois, e regista mentalmente 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="O Jiki a tirar da prateleira a caixa com o nome top e a calcular que 30 vezes dois é 60"
  width="377"
  height="400"
/>

Depois, tira a caixa `canvasSize` da prateleira, encontra 100 lá dentro e calcula que 100 menos 60 é 40. Agora já sabe que, na verdade, o que estamos a dizer é: let `height` igual a 40. Por isso, obedece ao let, pega numa caixa nova, escreve `height` nela e põe 40 lá dentro. Mais tarde, quando usa `height`, só tem de tirar o 40 de lá para fora.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="O Jiki a pegar numa caixa nova, a escrever o nome height nela e a pôr 40 lá dentro"
  width="462"
  height="400"
/>

Quando tiveres tudo a funcionar num exercício, diverte-te a mudar os valores das variáveis e vê o que acontece. Observa como crescem e como encolhem. Leva o teu tempo e pensa nas relações entre as coisas.
