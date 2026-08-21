---
title: "Cores HSL"
description: "Criar cores a partir do matiz (o tom, 0–360), da saturação (a intensidade, 0–100) e da luminosidade (o brilho, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

O HSL permite-nos pensar nas cores de uma forma completamente diferente do RGB. HSL significa matiz (*hue (H)* em inglês), saturação (*saturation (S)* em inglês) e luminosidade (*lightness (L)* em inglês). Tens uma função chamada `hsl` que recebe três números, um para o matiz, um para a saturação e um para a luminosidade, e devolve uma cor. Vamos então perceber o que é que estas três palavras significam.

```javascript
hsl(hue, saturation, lightness)
```

O matiz é o tom de cor que queres e vai de zero até 360. Imagina um arco-íris. É assim que eu penso nele. À esquerda, temos o vermelho e, depois, o laranja, o amarelo, o verde, o azul, o roxo e, na verdade, damos a volta completa até chegar outra vez ao vermelho. Portanto, se disseres zero, começas à esquerda, e é vermelho. Se disseres `120`, estás a pedir verde. `230` é azul. Também podes pensar nisto como uma roda de cores. É exatamente isso que são os 360: o número de graus de um círculo. Eu consulto sempre os números de que preciso, por isso não te preocupes demasiado em tentar decorar isto, mas é bom saberes o que se passa. Portanto, é esse o matiz, ou seja, o tom. A seguir, temos a saturação, que é a intensidade da cor. Vai de zero a 100. No zero, obténs cinzento. Não há cor nenhuma, nem tom nenhum. No 100, obténs uma cor cheia, viva e vibrante. E depois temos a luminosidade. A luminosidade é o brilho da cor e também vai de zero a 100. No zero, obténs preto. Não interessa o matiz que tenhas escolhido: obténs preto. Não há luz nenhuma. No 100, obténs branco. Não interessa mais nada: fica cheio de luz, por isso é branco. 50 fica exatamente no meio, é a cor normal. Por isso, podes pensar nisto como um controlo deslizante para tornar a cor mais clara ou mais escura.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Uma roda de cores de matizes e um arco-íris que mostram que 0 é vermelho, 120 é verde e 240 é azul"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Um controlo deslizante de saturação de 0 (cinzento), passando por 50, até 100 (cor cheia e viva)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Um controlo deslizante de luminosidade de 0 (preto), passando por 50, até 100 (branco)"
  width="500"
  height="398"
/>

Portanto, se quisermos um círculo vermelho normal, que teríamos escrito como 255, zero, zero em RGB (todo o vermelho, nenhum verde, nenhum azul), aqui usaríamos zero, 100, 50. Zero para o matiz vermelho, 100 para a saturação, cor cheia, e 50 para o brilho, que é um nível de brilho normal. Se quisermos que o círculo fique verde, basta mudar o matiz para `120`. Se quisermos um verde mais escuro, podemos reduzir a luminosidade para `25`.

```javascript
hsl(0, 100, 50) // vermelho
hsl(120, 100, 50) // verde
hsl(120, 100, 25) // verde escuro
```

Se quisermos um verde mais apagado, podemos retirar alguma cor, alguma saturação, por exemplo, reduzi-la para `30`.

Se quiseres um rosa vivo e quente, um matiz de cerca de 300 é rosa. Depois, aumentamos a saturação para 100 para a cor ficar mesmo vibrante e aumentamos também a luminosidade para cerca de 60.

O HSL dá muito jeito quando queres percorrer as cores em ciclo. Se quiseres um arco-íris, basta continuares a aumentar o matiz.
