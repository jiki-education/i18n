---
title: "Atualizar variáveis"
description: "Mudar o que está dentro de uma variável à medida que o teu programa corre, para poderes acompanhar posições, contagens, pontuações e outros valores que mudam."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Até agora, quando criámos variáveis, pusemos valores em caixas e voltámos a retirá-los mais tarde. Isso tem sido muito útil para dar clareza ao nosso código e para reduzir algum do cálculo mental que, de outra forma, teríamos de fazer. Mas o verdadeiro valor das variáveis vem da capacidade de mudar o que está numa caixa, o que está na variável, ao longo de um programa. Por isso, mesmo que executemos o mesmo pedaço de código várias vezes, o que ele faz pode mudar consoante o que está dentro das caixas.

Imagina que queremos plantar uma flor num jardim. Temos uma função `plant` (plantar) muito útil, que tem um único parâmetro de entrada para a posição onde queremos colocar a flor. Por isso, se quisermos colocar uma flor a 10 unidades da margem, escrevemos assim:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Uma flor plantada num jardim ao lado do quadro do Jiki"
  width="406"
  height="400"
/>

E se quisermos plantar oito flores? Bem, podíamos escrever `plant(10)`, `plant(20)`, `plant(30)`, etc., mas isso é bastante aborrecido.

E já aprendemos algo que nos ajuda a substituir este tipo de código aborrecido. Usa um ciclo! Usa um bloco repeat! Então, vamos definir a posição como 10 e depois ter um bloco repeat onde chamamos `plant` e usamos a função `plant` oito vezes.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

O que achas que vai acontecer?

Bem, vai plantar oito flores, mas vai plantá-las no mesmo sítio de cada vez, o que não é bem o que queremos. Por isso, vamos parar um instante para pensar no que o Jiki está a fazer aqui. Está a criar uma caixa com o rótulo position. Está a pôr 10 lá dentro. Depois está a correr a máquina `plant` oito vezes. De cada vez, está a tirar o valor da caixa da posição. É sempre 10, e está a pôr esse mesmo 10 lá dentro de cada vez.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="O Jiki a tirar a caixa da posição da prateleira e a introduzir o seu valor 10 na máquina plant"
  width="400"
  height="400"
/>

Então, aquilo de que precisamos é de uma forma de avançar um pouco de cada vez. Depois de plantarmos uma flor, queremos dizer ao Jiki para avançar a posição em 10 unidades, para estar pronto a plantar a flor seguinte.

Pondo o código de lado por instantes, como é que isso funciona, em termos lógicos? Se eu te disser: «Planta a primeira flor na posição 10, a próxima na posição 20, a próxima na posição 30», como é que o teu cérebro sabe que a seguinte deve ser plantada na posição 40 e a outra a seguir na posição 50?

O que o teu cérebro está a fazer é acompanhar o número atual, somar-lhe 10 e, depois, atualizar esse número na tua cabeça.

E podemos fazer exatamente a mesma coisa em código. Para isto, dizemos: «Atualiza (*Update* em inglês) a caixa da posição para ficar com o valor atual da posição mais 10.»

Quando o Jiki vê isto, tira o número atual da caixa da posição, soma-lhe 10, faz essa conta, soma os dois, e volta a pôr o resultado na caixa para a próxima vez.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="O Jiki a tirar 10 da caixa da posição, a somar 10 para obter 20 e a voltar a colocar 20 na caixa"
  width="427"
  height="400"
/>

Portanto, se acrescentarmos isto ao nosso programa e passarmos a dizer: «Define o valor inicial da posição como 10», depois plantamos oito vezes uma flor na posição e, por fim, mudamos a posição para ficar 10 unidades maior do que antes. Assim, o nosso código funciona e obtemos oito flores espaçadas.

Repara que não existe `let` (deixar) quando atualizamos a variável. Isto é mesmo importante. Quando o Jiki vê `let`, cria uma caixa nova. Mas aqui não queremos criar uma caixa nova. Queremos mudar o que está dentro da caixa que já temos.

Repara também que só criamos a caixa uma vez, fora do ciclo. É importante recordar isto. Cria a caixa uma vez no início e depois atualiza-a de cada vez que o ciclo corre.

Podemos atualizar o que está dentro das caixas e usar essa capacidade para acompanhar algo que muda ao longo do tempo. Vais usar este padrão constantemente: acompanhar uma posição, contar quantas vezes algo aconteceu, manter a pontuação. Sempre que precisares de te lembrar de algo que muda enquanto o teu programa corre, é assim que o fazes.
