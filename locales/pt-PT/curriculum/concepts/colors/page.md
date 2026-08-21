---
title: "Cores"
description: "Duas formas de especificar qualquer cor que queiras. O RGB mistura luz vermelha, verde e azul. O HSL usa matiz, saturação e luminosidade."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Se algum dia fizeres algo visual com código (e, mesmo que queiras ser cientista de dados e aches que tudo o que envolve desenho é um pouco aborrecido, comunicar informação através de elementos visuais é uma competência essencial), há duas formas diferentes de expressar cores. Já tens usado cores pelo nome, como vermelho ou amarelo, como último valor de entrada nas tuas funções de desenho. Tem sido uma forma agradável de usar cores rapidamente, mas é bastante limitadora. Só podemos usar um pequeno conjunto de cores com nome. Por isso, agora vamos ver duas formas de expressar qualquer cor que queiras, e essas duas chamam-se RGB e HSL.

O RGB permite-nos pensar nas cores como uma mistura de vermelho, verde e azul. É isso que RGB quer dizer: vermelho (_red (R)_ em inglês), verde (_green (G)_ em inglês), azul (_blue (B)_ em inglês). Se te lembras de misturar tintas na escola, a ideia é parecida, só que, em vez de tinta, estamos a misturar luz.

Em muitos exercícios, vais ter uma função chamada `rgb`, que recebe três números como parâmetros de entrada: um para o vermelho, um para o verde e um para o azul, e devolve uma cor.

Os números que podes usar como valores de entrada vão de zero a `255`. Zero quer dizer que não queres nada dessa cor, e `255` quer dizer que misturas o máximo possível dessa cor. Por isso, se usarmos a função `rgb` com `255`, zero e zero como valores de entrada, estamos a dizer que queremos todo o vermelho. Lembra-te de que `255` é o maior número que podes pôr ali. Mas não queremos nada de verde nem de azul, por isso ambos são zero. Por isso, obtemos vermelho e podemos guardar esse vermelho numa variável e, depois, usá-lo na função `circle`, tal como já temos feito com as strings nomeadas. E se usarmos a função `rgb` com zero, `255`, zero? Agora estamos a dizer: nada de vermelho, todo o verde, nada de azul. Por isso, obtemos um círculo verde. E se quisermos amarelo? O amarelo é uma mistura de vermelho e verde. Então podemos dizer: dá-me todo o vermelho, todo o verde e nada de azul, e isso dá-nos amarelo. E podemos usar números mais pequenos. Por isso, se quisermos algum vermelho, nada de verde e muito azul, obtemos roxo. E muito vermelho, um pouco de verde e um pouco mais de azul dá-nos um rosa. É isso o RGB. Misturamos vermelho, verde e azul para obter combinações diferentes.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Três círculos sobrepostos de luz vermelha, verde e azul que se misturam para formar amarelo, magenta, ciano e branco"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Agora vamos ver o HSL, que nos dá uma forma completamente diferente de pensar nas cores. HSL quer dizer matiz (_hue (H)_ em inglês), saturação (_saturation (S)_ em inglês) e luminosidade (_lightness (L)_ em inglês). À semelhança do RGB, tens uma função chamada `hsl` que recebe três números: um para o matiz, um para a saturação e um para a luminosidade, e devolve uma cor. Vamos então ver o que significam essas três palavras.

O matiz é a tonalidade (_shade_ em inglês) de cor que queres e vai de zero a 360. Imagina, talvez, um arco-íris. É assim que eu penso nisto. À esquerda, temos o vermelho e depois temos o laranja, o amarelo, o verde, o azul, o roxo e, na verdade, voltamos ao vermelho. Por isso, se disseres zero, começas à esquerda, e isso é o vermelho. Se disseres `120`, estás a pedir o verde. `230` é o azul. Também podes pensar nisto como uma roda de cores (_color wheel_ em inglês), que é o que o 360 realmente é. É o número de graus do círculo. Eu consulto sempre os números que quero, por isso não te preocupes demasiado em tentar decorar isto, mas é bom perceber o que se passa. Portanto, esse é o matiz, ou seja, a tonalidade. A seguir, temos a saturação, que indica quão viva é a cor. Vai de zero a 100. Com zero, obténs apenas cinzento. Não há cor nenhuma, nem tom nenhum. Com 100, obténs uma cor cheia, viva e vibrante. E depois temos a luminosidade. A luminosidade indica quão clara é a cor e também vai de zero a 100. Com zero, obténs preto. Independentemente do matiz que tenhas escolhido, obténs preto. Não há luz nenhuma nela. E com 100, obténs branco. Independentemente de tudo o resto, fica cheia de luz e, por isso, é branca. 50 está mesmo no meio, é a cor normal. Por isso, podes pensar nisto como um controlo deslizante (_slider_ em inglês) para tornar a cor mais clara ou mais escura.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Um arco-íris e uma roda de cores que mostram o matiz a ir de 0 (vermelho) para 120 (verde) e 240 (azul)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Controlo deslizante da saturação de 0 (cinzento), passando por 50, até 100 (magenta vivo)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Controlo deslizante da luminosidade de 0 (preto), passando por 50 (cor cheia), até 100 (branco)"
  width="500"
  height="398"
/>

Por isso, se quisermos um círculo vermelho normal, que teríamos escrito como `255`, zero, zero em RGB (todo o vermelho, nada de verde, nada de azul), aqui usaríamos zero, 100, 50. Zero para o matiz vermelho, 100 para a saturação, cor cheia, e 50 para a luminosidade, que é um nível normal de luminosidade. Se quisermos transformá-lo num círculo verde, basta mudar o matiz para `120`. Se quisermos torná-lo num verde mais escuro, podemos reduzir a luminosidade para `25`.

Se quisermos torná-lo num verde mais apagado, podemos retirar alguma cor, alguma saturação, por exemplo baixá-la para `30`.

Se quiseres um rosa-choque vivo e intenso, um matiz de cerca de 300 é rosa; depois, aumentamos a saturação para 100 para o tornar muito vibrante e aumentamos também a luminosidade para cerca de 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Temos, então, duas formas diferentes de expressar cores e são úteis em situações diferentes. O RGB é ótimo quando queres ajustar um componente específico: quanto vermelho, quanto verde, quanto azul. O HSL é ótimo quando queres percorrer as cores em ciclo. Se quiseres um arco-íris, basta continuares a aumentar o matiz.
