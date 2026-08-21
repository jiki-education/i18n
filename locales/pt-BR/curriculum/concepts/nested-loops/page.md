---
title: "Laços dentro de laços"
description: "Colocar um laço dentro de outro para que o laço interno rode por completo em cada passo do laço externo, o que é perfeito para grades."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Imagine que queremos uma fila de flores. Podemos escrever algo assim. Definimos uma posição, plantamos uma flor, aumentamos a posição em 10, repetimos e ficamos com uma fila de flores bem arrumada.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="O Jiki junto a um quadro com uma única fila de flores bem arrumada por baixo"
  width="406"
  height="400"
/>

Mas e se quisermos uma grade de flores com linhas e colunas? Talvez quatro linhas com cinco flores em cada linha.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Uma grade de flores de quatro por cinco com o Jiki pensando em como desenhá-la"
  width="383"
  height="400"
/>

Temos um laço que desenha uma fila de flores. Como você pode usá-lo para desenhar quatro filas? Ou o que poderíamos fazer para desenhar quatro filas?

Uma opção seria copiar e colar esse laço quatro vezes e mudar a posição vertical em cada uma. E isso funcionaria. Seria aceitável. Mas é repetitivo e há uma forma melhor. Sabemos que, quando o código é repetitivo, podemos usar um laço para simplificar.

Portanto, aqui podemos usar um laço dentro de outro laço. Um laço para as linhas e outro para as flores dessa linha. Vamos começar acrescentando um laço repeat em volta do código que já temos, para você ter uma ideia de como isso funciona. E vamos repetir apenas uma vez. Estamos dizendo ao Jiki para fazer tudo o que está dentro destas chaves externas uma vez. Isso tem exatamente o mesmo efeito que não ter este laço externo de jeito nenhum. Estamos dizendo ao Jiki para repetir algo uma vez, o que é o mesmo que dizer para ele fazer isso sem o repeat. Mas é assim que este código funciona. É código legítimo e válido. Temos um laço dentro de outro laço.

Então, o que acontece se mudarmos esse laço externo para repetir duas vezes? Agora o Jiki vai executar duas vezes aquela sequência de `plant` (plantar) cinco vezes. Ele planta 10 flores. Mas todas essas flores ficam na mesma fila.

Assim, da mesma forma que precisamos deslocar a posição da esquerda para a direita um pouco de cada vez, depois de desenharmos cada fila completa também precisamos deslocar a posição vertical. Então, como fazemos isso? Podemos acrescentar uma variável externa para a posição vertical, usá-la na nossa função `plant` e, em seguida, aumentá-la em 10 depois de cada fila.

Pense no valor em cada momento. A posição vertical começa em 10. Nas primeiras cinco vezes em que plantamos, ela se mantém assim. A posição horizontal aumenta. Depois somamos mais 10 a essa posição vertical e plantamos mais cinco flores um pouco mais abaixo. Voltamos a colocar a posição horizontal em 10 e depois aumentamos ela novamente a cada vez.

E agora podemos dizer para repetir isso quatro vezes e vamos obter quatro filas com cinco plantas.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="A grade final de flores de quatro por cinco com o Jiki feliz mostrando os dois polegares para cima"
  width="389"
  height="400"
/>

O essencial a entender é que o Jiki termina todo o trabalho no laço interno (_inner loop_ em inglês) antes de voltar ao laço externo (_outer loop_ em inglês). Ele não fica pulando para trás e para a frente. Ele completa o laço interno e, depois, avança para o próximo passo do laço externo.

Nesta situação, você pode pensar no laço externo como aquele que controla os grupos, ou a linha, e no laço interno como aquele que controla cada elemento desse grupo, ou cada elemento dessa linha. No nosso exemplo, o laço externo cria quatro linhas e o laço interno coloca cinco plantas, cinco elementos em cada grupo.
