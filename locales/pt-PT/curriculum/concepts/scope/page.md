---
title: "Âmbito"
description: "Perceber como as chavetas criam o seu próprio conjunto de prateleiras, para que as variáveis só vivam enquanto o bloco delas vive."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Imagina código que desenha um círculo num sítio diferente de cada vez que corre, e queremos desenhar 10 círculos em sítios diferentes. Podíamos combinar isto com um ciclo. Mas, se estás a prestar atenção, deves ter reparado numa coisa estranha aqui.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Lá atrás, disse que havia uma regra: as caixas nas prateleiras do Jiki têm de ter nomes únicos, e a palavra-chave `let` cria uma caixa nova de cada vez que a usas.

Mas, como o `let` está dentro de um ciclo, o Jiki vai criar uma caixa nova sempre que o ciclo corre.

Então, o código está errado ou há aqui outra coisa estranha a acontecer?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="O Jiki com ar confuso, a pensar se o código está errado"
  width="384"
  height="400"
/>

Bem, afinal o código está correto. Isto é JavaScript perfeitamente válido e funciona por causa de um conceito chamado âmbito (_scope_ em inglês) ou _scoping_.

O âmbito é algo que, no início, provavelmente parece bastante simples, mas garanto-te que te vai causar dores de cabeça durante o resto da tua carreira. Até os programadores mais experientes têm problemas com o âmbito, e o JavaScript é uma das linguagens mais complicadas neste aspeto. Estou a dizer-te isto para que, quando tiveres problemas com o âmbito, não te sintas mal contigo próprio. Mas também presta muita atenção a esta parte, porque é importante.

Quando vês uma chaveta no código, ela cria aquilo a que se chama um novo âmbito. O que é que isso quer dizer? Bem, podes imaginar que o Jiki cria um novo conjunto pequeno de prateleiras na sua oficina sempre que vê uma chaveta. E todas as caixas que ele cria enquanto está a trabalhar, a correr código dentro dessas chavetas, essas caixas, as caixas novas, vão para o novo conjunto pequeno de prateleiras, e não para as prateleiras principais.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="As prateleiras principais do Jiki ao lado de um conjunto novo e mais pequeno de prateleiras criado por uma chaveta"
  width="500"
  height="205"
/>

E quando o Jiki chega à chaveta de fecho correspondente, deita fora todas as caixas que estão nesse conjunto secundário de prateleiras.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="O Jiki a deitar as caixas do conjunto secundário de prateleiras para um caixote do lixo quando chega à chaveta de fecho"
  width="500"
  height="237"
/>

Portanto, sempre que temos um ciclo como este, podemos criar caixas que duram apenas o tempo de cada duração do ciclo. As caixas `left` (esquerda) e `top` (topo) que estás a ver aqui só duram até chegarmos à chaveta de fecho e depois são deitadas fora. E o Jiki chega a essa chaveta de fecho sempre que o ciclo corre. Neste programa, são 10 vezes. Portanto, ele cria uma caixa chamada `left` 10 vezes e volta a deitá-la fora.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Duas caixas com os rótulos left e top que só duram uma iteração do ciclo"
  width="500"
  height="187"
/>

Por isso, quando crias uma variável, tens de decidir quanto tempo queres que ela dure. Se queres que ela viva durante muito tempo, tem de ficar fora de quaisquer chavetas. Se queres que dure apenas uma iteração (_iteration_ em inglês), uma duração do ciclo, podes colocá-la dentro das chavetas. Estás a ver como isto pode ficar um pouco confuso?

Por isso, uma boa regra para manter isto simples quando estás a começar é manteres todas as tuas variáveis perto do topo do teu código, fora das chavetas, e só as atualizares lá dentro. Por exemplo, podíamos escrever o código acima com apenas uma caixa `left` e uma caixa `top`, postas a zero no início e atualizadas de cada vez dentro do ciclo. Isso também é perfeitamente válido. Nenhuma das duas está certa ou errada. Há boas práticas, mas vamos aprender sobre elas mais tarde. Para já, experimenta, diverte-te, vê aquilo que te parece mais confortável e tenta não te preocupares demasiado com isto.
