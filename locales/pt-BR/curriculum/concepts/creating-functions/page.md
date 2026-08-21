---
title: "Escrever as suas próprias funções"
description: "Usar a palavra-chave function para construir as suas próprias máquinas, que o Jiki pode colocar nas prateleiras dele e reutilizar."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Até agora, você tem usado funções que foram construídas para você, funções como `circle`, `rectangle`, `moveRight`, `shoot`. Todas elas são funções que foram criadas e colocadas nas prateleiras do Jiki.

Mas agora chegou a hora de você começar a criar as suas próprias funções.

Para te mostrar como se faz isso, vamos ver como construir uma função nova para o labirinto, chamada `walk5` (andar cinco).

Esta função vai sempre fazer o bonequinho avançar cinco passos. É verdade que não é a função mais útil do mundo, mas é uma função simples e boa para a gente começar.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="O bonequinho na grade do labirinto, pronto para avançar cinco passos"
  width="500"
  height="314"
/>

Então, se eu pedisse para você escrever código para fazer o bonequinho avançar cinco passos, você podia escrever `move` (avançar) cinco vezes, ou podia usar um laço repeat. Neste exemplo, só para manter as coisas simples, vamos usar a abordagem de escrever `move` cinco vezes seguidas.

```javascript
move()
move()
move()
move()
move()
```

Então, é isso que queremos que esteja dentro da nossa função.

Agora, acrescente uma linha embaixo que diga ao Jiki para usar esta função. Você já viu isso muitas vezes.

E depois o nosso trabalho vai ser envolver essas primeiras cinco linhas numa função, para que, quando o Jiki usar `walk5`, sejam essas primeiras cinco linhas de código que rodam.

Para transformar essas cinco linhas numa função, essas cinco chamadas a `move` numa função, precisamos usar uma palavra-chave nova, que é a palavra-chave `function`.

Quando usamos a palavra-chave `function`, precisamos fazer duas coisas. Primeiro, indicar o nome da função. Neste caso, é `walk5`. Segundo, usar chaves (`{}`) para envolver algum código que diga: “Isto é o que você deve fazer dentro da função.”

Então, podemos acrescentar isso ao nosso código. Agora estamos dizendo ao Jiki para criar uma função chamada `walk5`. Depois, quando `walk5` for usada, ele deve rodar essas cinco linhas de código.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Quando o Jiki vê a palavra-chave `function`, ele vai construir uma função nova, escrever essas instruções num quadro dentro da máquina e, em seguida, colocar uma etiqueta na máquina com o nome `walk5`. Depois, coloca essa função nas prateleiras, ao lado de todas as outras que estão lá.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="O Jiki ao lado de uma máquina nova com um quadro lá dentro para escrever as instruções da função"
  width="500"
  height="396"
/>

Agora, não há nada de especial nessa função que você criou, em comparação com as funções incorporadas (_built-in_ em inglês). Elas ficam todas umas ao lado das outras nas prateleiras dele.

E quando você usa a função, quando você escreve `walk5()`, o Jiki simplesmente vai buscar a máquina nas prateleiras e usá-la exatamente da mesma forma que faz com qualquer outra função.

Você pode imaginar que cada máquina tem um mini Jiki morando lá dentro. O mini Jiki anda sempre com um chapéu legal. E esse mini Jiki funciona exatamente da mesma forma que o Jiki normal aqui fora, seguindo instruções do mesmo jeito.

Uma coisa essencial de entender aqui é que, quando o Jiki cria a função, ele não chega a rodar o código. Ele está apenas escrevendo esse código para usar mais tarde.

Quando você escreve a palavra-chave `function`, o bonequinho no labirinto não se move nesse momento.

O Jiki construiu a máquina e a colocou nas prateleiras. Só quando você disser para ele usar a máquina, escrevendo `walk5()`, é que isso acontece de verdade.
