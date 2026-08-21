---
title: "Escopo"
description: "Entender como as chaves criam o seu próprio conjunto de prateleiras, para que as variáveis só vivam enquanto o bloco delas vive."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Imagine um código que desenha um círculo num lugar diferente cada vez que roda, e queremos desenhar 10 círculos em lugares diferentes. Poderíamos combinar isso com um laço. Mas, se você está prestando atenção, deve ter reparado numa coisa estranha aqui.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Lá atrás, eu disse que havia uma regra: as caixas nas prateleiras do Jiki precisam ter nomes únicos, e a palavra-chave `let` cria uma caixa nova cada vez que você a usa.

Mas, como o `let` está dentro de um laço, o Jiki vai criar uma caixa nova sempre que o laço roda.

Então, o código está errado ou tem outra coisa estranha acontecendo aqui?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="O Jiki com ar confuso, pensando se o código está errado"
  width="384"
  height="400"
/>

Bem, no fim das contas o código está correto. Isso é JavaScript perfeitamente válido e funciona por causa de um conceito chamado escopo (_scope_ em inglês) ou _scoping_.

O escopo é algo que, no começo, provavelmente parece bem simples, mas eu te garanto que vai te causar dores de cabeça pelo resto da sua carreira. Até os desenvolvedores mais experientes têm problemas com o escopo, e o JavaScript é uma das linguagens mais complicadas nesse aspecto. Eu estou te dizendo isso para que, quando você tiver problemas com o escopo, não se sinta mal com você mesmo. Mas preste muita atenção nesta parte também, porque é importante.

Quando você vê uma chave no código, ela cria o que se chama um novo escopo. O que isso quer dizer? Bem, você pode imaginar que o Jiki cria um novo conjunto pequeno de prateleiras na oficina dele sempre que vê uma chave. E todas as caixas que ele cria enquanto está trabalhando, rodando código dentro dessas chaves, essas caixas, as caixas novas, vão para o novo conjunto pequeno de prateleiras, e não para as prateleiras principais.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="As prateleiras principais do Jiki ao lado de um conjunto novo e menor de prateleiras criado por uma chave"
  width="500"
  height="205"
/>

E quando o Jiki chega à chave de fechamento correspondente, joga fora todas as caixas que estão nesse conjunto secundário de prateleiras.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="O Jiki jogando as caixas do conjunto secundário de prateleiras numa lixeira quando chega à chave de fechamento"
  width="500"
  height="237"
/>

Então, sempre que temos um laço como esse, podemos criar caixas que duram apenas o tempo de cada volta do laço. As caixas `left` (esquerda) e `top` (topo) que você está vendo aqui só duram até chegarmos à chave de fechamento e depois são jogadas fora. E o Jiki chega a essa chave de fechamento sempre que o laço roda. Neste programa, são 10 vezes. Então, ele cria uma caixa chamada `left` 10 vezes e joga ela fora de novo.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Duas caixas com os rótulos left e top que só duram uma iteração do laço"
  width="500"
  height="187"
/>

Então, quando você cria uma variável, precisa decidir quanto tempo quer que ela dure. Se você quer que ela viva por muito tempo, ela tem que ficar fora de quaisquer chaves. Se você quer que dure apenas uma iteração (_iteration_ em inglês), uma volta do laço, pode colocá-la dentro das chaves. Está vendo como isso pode ficar um pouco confuso?

Então, uma boa regra para manter isso simples quando você está começando é manter todas as suas variáveis perto do topo do seu código, fora das chaves, e só atualizá-las lá dentro. Por exemplo, poderíamos escrever o código acima com apenas uma caixa `left` e uma caixa `top`, colocadas em zero no começo e atualizadas a cada vez dentro do laço. Isso também é perfeitamente válido. Nenhuma das duas está certa ou errada. Existem boas práticas, mas vamos aprender sobre elas mais tarde. Por enquanto, experimente, divirta-se, veja o que parece mais confortável para você e tente não se preocupar demais com isso.
