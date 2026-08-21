---
title: "Atualizar variáveis"
description: "Mudar o que está dentro de uma variável à medida que o seu programa roda, para você poder acompanhar posições, contagens, pontuações e outros valores que mudam."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Até agora, quando criamos variáveis, pusemos valores em caixas e voltamos a retirá-los mais tarde. Isso tem sido muito útil para dar clareza ao nosso código e para reduzir algum do cálculo mental que, de outra forma, teríamos que fazer. Mas o verdadeiro valor das variáveis vem da capacidade de mudar o que está numa caixa, o que está na variável, ao longo de um programa. Então, mesmo que executemos o mesmo pedaço de código várias vezes, o que ele faz pode mudar dependendo do que está dentro das caixas.

Imagine que queremos plantar uma flor num jardim. Temos uma função `plant` (plantar) muito útil, que tem uma única entrada para a posição onde queremos colocar a flor. Então, se quisermos colocar uma flor a 10 unidades da margem, escrevemos assim:

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

E se quisermos plantar oito flores? Bem, poderíamos escrever `plant(10)`, `plant(20)`, `plant(30)`, etc., mas isso é bem chato.

E já aprendemos algo que nos ajuda a substituir esse tipo de código chato. Use um laço! Use um bloco repeat! Então, vamos definir a posição como 10 e depois ter um bloco repeat onde chamamos `plant` e usamos a função `plant` oito vezes.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

O que você acha que vai acontecer?

Bem, vai plantar oito flores, mas vai plantá-las no mesmo lugar todas as vezes, o que não é bem o que queremos. Então, vamos parar um instante para pensar no que o Jiki está fazendo aqui. Ele está criando uma caixa com o rótulo position. Está colocando 10 lá dentro. Depois está rodando a máquina `plant` oito vezes. Toda vez, está tirando o valor da caixa da posição. É sempre 10, e está colocando esse mesmo 10 lá dentro todas as vezes.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="O Jiki tirando a caixa da posição da prateleira e introduzindo o valor 10 dela na máquina plant"
  width="400"
  height="400"
/>

Então, aquilo de que precisamos é de uma forma de avançar um pouco de cada vez. Depois de plantarmos uma flor, queremos dizer ao Jiki para avançar a posição em 10 unidades, para estar pronto para plantar a flor seguinte.

Deixando o código de lado por um instante, como isso funciona, em termos lógicos? Se eu te disser: “Plante a primeira flor na posição 10, a próxima na posição 20, a próxima na posição 30”, como o seu cérebro sabe que a seguinte deve ser plantada na posição 40 e a outra depois dela na posição 50?

O que o seu cérebro está fazendo é acompanhar o número atual, somar 10 a ele e, depois, atualizar esse número na sua cabeça.

E podemos fazer exatamente a mesma coisa em código. Para isso, dizemos: “Atualize (*Update* em inglês) a caixa da posição para ficar com o valor atual da posição mais 10.”

Quando o Jiki vê isso, ele tira o número atual da caixa da posição, soma 10 a ele, faz essa conta, soma os dois, e coloca o resultado de volta na caixa para a próxima vez.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="O Jiki tirando 10 da caixa da posição, somando 10 para obter 20 e colocando 20 de volta na caixa"
  width="427"
  height="400"
/>

Portanto, se acrescentarmos isso ao nosso programa e passarmos a dizer: “Defina o valor inicial da posição como 10”, depois plantamos oito vezes uma flor na posição e, por fim, mudamos a posição para ficar 10 unidades maior do que antes. Assim, o nosso código funciona e obtemos oito flores espaçadas.

Repare que não existe `let` (deixar) quando atualizamos a variável. Isso é mesmo importante. Quando o Jiki vê `let`, ele cria uma caixa nova. Mas aqui não queremos criar uma caixa nova. Queremos mudar o que está dentro da caixa que já temos.

Repare também que só criamos a caixa uma vez, fora do laço. É importante lembrar disso. Crie a caixa uma vez no início e depois atualize-a toda vez que o laço roda.

Podemos atualizar o que está dentro das caixas e usar essa capacidade para acompanhar algo que muda ao longo do tempo. Você vai usar esse padrão constantemente: acompanhar uma posição, contar quantas vezes algo aconteceu, manter a pontuação. Sempre que você precisar lembrar de algo que muda enquanto o seu programa roda, é assim que você faz.
