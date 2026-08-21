---
title: "Valores de entrada das funções"
description: "Colocar valores nas fendas de uma função para mudar o que ela faz cada vez que é executada."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Uma das coisas mais poderosas nas máquinas, nas funções, é que muitas delas deixam você colocar informação lá dentro. Quando você as executa, essa informação muda o que elas fazem.

Até agora, vimos máquinas que se parecem um pouco com caixas, como a máquina `move` (mover).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="A máquina move, uma caixa simples sem fendas"
  width="322"
  height="400"
/>

Mas algumas máquinas têm fendas, como a máquina `walk` (andar). A máquina `walk` é como a máquina `move`: faz o bonequinho (_character_ em inglês) avançar para a frente, mas o Jiki pode usar a fenda para indicar quantos passos o seu bonequinho deve andar para a frente. Em vez de você ter que usar a função `move` três vezes seguidas, `move`, `move`, `move`, agora você pode simplesmente usar a função `walk` e dizer ao Jiki para colocar o número três na máquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="A máquina walk, com uma fenda em cima para o número de passos"
  width="481"
  height="400"
/>

Para fazer isso em código, continuamos escrevendo o nome da função, neste caso `walk`, e continuamos colocando o parêntese de abertura. Depois, antes do parêntese de fechamento, dizemos qual é o valor de entrada (_input_ em inglês) que queremos. Neste caso, queremos que o valor de entrada seja três, para dizer `walk` três passos para frente:

```javascript
walk(3)
```

Quando o Jiki vê isso, vai buscar o número três. Você pode pensar nesse número como uma moeda pequena: o Jiki vai colocá-lo na fenda da máquina antes de girar a manivela e ligar a máquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="O Jiki deixando cair o número 3 como uma moeda na fenda da máquina walk e depois girando a manivela"
  width="421"
  height="400"
/>

Para funções que desenham retângulos e círculos, você precisa dizer ao Jiki para inserir vários números diferentes, indicando, por exemplo, a que distância deve ficar da esquerda, a que distância deve ficar do topo, a largura de um retângulo e a altura de um retângulo.

No mundo do Jiki, essas são apenas fendas diferentes, uma para cada um desses números.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="A máquina dos retângulos com fendas para left, top, width e height, e a máquina dos círculos com fendas para cx, cy e radius"
  width="396"
  height="400"
/>

Então, no nosso código, escrevemos cada número e colocamos uma vírgula entre eles. O nome da função, um parêntese, um número para cada um dos valores de entrada, todos separados por vírgulas, e depois fechamos os parênteses:

```javascript
rectangle(10, 20, 30, 40)
```

Se você tentar usar uma função com o número errado de valores de entrada, vai receber um erro. Por exemplo, se você tentar colocar um valor de entrada numa máquina que não tem fenda, o Jiki te diz que você não pode. E, se você tentar usar uma máquina que tem uma fenda, mas não disser ao Jiki o que colocar lá dentro, ele também vai parar e reclamar. Se você estiver se sentindo um pouco rebelde, experimente e veja o que acontece. Você vai cometer muitos erros desses à medida que as coisas forem ficando mais complicadas. Tente não ficar estressado nem irritado com isso. Todos nós aprendemos com os erros. É literalmente o jeito mais rápido de as coisas entrarem na cabeça. E todo mundo comete esses erros. Todos nós começamos do zero, então não se estresse.

Há mais uma coisa que vale a pena mencionar: às vezes, nos exercícios, você vai ver linhas que começam com duas barras, `//`. Elas se chamam comentários (_comments_ em inglês). São notas privadas, só para você, que o Jiki ignora por completo. Então, se o Jiki vir uma linha que começa com essas duas barras, ele simplesmente passa por cima dela e vai para a linha seguinte. Esses comentários te dão um jeito de escrever suas próprias notas. São muito úteis para você lembrar como as coisas funcionam. Muitas vezes, os comentários também são escritos para você, para que, quando você começar um exercício, eles possam sugerir onde você precisa escrever código ou como resolver alguma coisa. Mas adicione seus próprios comentários à vontade.

No final das instruções de um exercício, você vai ver informação sobre as funções que pode usar e exatamente quais são os valores de entrada que precisa colocar.
