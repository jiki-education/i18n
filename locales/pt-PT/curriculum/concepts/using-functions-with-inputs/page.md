---
title: "Valores de entrada das funções"
description: "Colocar valores nas fendas de uma função para mudar o que ela faz de cada vez que é executada."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Uma das coisas mais poderosas nas máquinas, nas funções, é que muitas delas permitem-te colocar informação lá dentro. Quando as executas, essa informação muda o que elas fazem.

Até agora, vimos máquinas que se parecem um pouco com caixas, como a máquina `move` (mover).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="A máquina move, uma caixa simples sem fendas"
  width="322"
  height="400"
/>

Mas algumas máquinas têm fendas, como a máquina `walk` (andar). A máquina `walk` é como a máquina `move`: faz avançar a personagem (_character_ em inglês) para a frente, mas o Jiki pode usar a fenda para indicar quantos passos a tua personagem deve andar para a frente. Em vez de teres de usar a função `move` três vezes seguidas, `move`, `move`, `move`, podes agora simplesmente usar a função `walk` e dizer ao Jiki para pôr o número três na máquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="A máquina walk, com uma fenda em cima para o número de passos"
  width="481"
  height="400"
/>

Para fazermos isto em código, continuamos a escrever o nome da função, neste caso `walk`, e continuamos a pôr o parêntese de abertura. Depois, antes do parêntese de fecho, dizemos qual é o valor de entrada (_input_ em inglês) que queremos. Neste caso, queremos que o valor de entrada seja três, para dizer `walk` três passos em frente:

```javascript
walk(3)
```

Quando o Jiki vê isso, vai buscar o número três. Podes pensar nesse número como uma pequena moeda: o Jiki vai pô-lo na fenda da máquina antes de rodar a manivela para a ligar.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="O Jiki a deixar cair o número 3 como uma moeda na fenda da máquina walk e depois a rodar a manivela"
  width="421"
  height="400"
/>

Para funções que desenham retângulos e círculos, tens de dizer ao Jiki para inserir vários números diferentes, indicando, por exemplo, a que distância deve ficar da esquerda, a que distância deve ficar do topo, a largura de um retângulo e a altura de um retângulo.

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

Se tentares usar uma função com o número errado de valores de entrada, vais receber um erro. Por exemplo, se tentares pôr um valor de entrada numa máquina que não tem fenda, o Jiki diz-te que não podes. E, se tentares usar uma máquina que tem uma fenda, mas não disseres ao Jiki o que pôr lá dentro, ele também vai parar e reclamar. Se te sentires um pouco rebelde, experimenta e vê o que acontece. Vais cometer muitos erros destes à medida que as coisas forem ficando mais complicadas. Tenta não ficar stressado nem aborrecido com isso. Todos aprendemos com os erros. É literalmente a forma mais rápida de interiorizarmos as coisas. E toda a gente comete estes erros. Todos começámos do zero, por isso não te stresses.

Há mais uma coisa que vale a pena referir: às vezes, nos exercícios, vais ver linhas que começam com duas barras, `//`. Chamam-se comentários (_comments_ em inglês). São notas privadas, só para ti, que o Jiki ignora por completo. Portanto, se o Jiki vir uma linha que começa com essas duas barras, simplesmente passa por cima dela e avança para a linha seguinte. Estes comentários dão-te uma forma de escreveres as tuas próprias notas. São muito úteis para te lembrares de como as coisas funcionam. Muitas vezes, os comentários também são escritos para ti, para que, quando começares um exercício, possam sugerir-te onde precisas de escrever código ou como resolver alguma coisa. Mas acrescenta os teus próprios comentários à vontade.

No fundo das instruções de um exercício, vais ver informação sobre as funções que podes usar e exatamente quais são os valores de entrada que precisas de pôr.
