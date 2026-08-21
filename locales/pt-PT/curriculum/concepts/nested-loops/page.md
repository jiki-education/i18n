---
title: "Ciclos dentro de ciclos"
description: "Colocar um ciclo dentro de outro para que o ciclo interior corra por completo em cada passo do ciclo exterior, o que é perfeito para grelhas."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Imagina que queremos uma fila de flores. Podemos escrever algo assim. Definimos uma posição, plantamos uma flor, aumentamos a posição em 10, repetimos e ficamos com uma fila de flores bem arrumada.

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

Mas e se quisermos uma grelha de flores com linhas e colunas? Talvez quatro linhas com cinco flores em cada linha.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Uma grelha de flores de quatro por cinco com o Jiki a pensar em como desenhá-la"
  width="383"
  height="400"
/>

Temos um ciclo que desenha uma fila de flores. Como podes usá-lo para desenhar quatro filas? Ou o que poderíamos fazer para desenhar quatro filas?

Uma opção seria copiar e colar esse ciclo quatro vezes e mudar a posição vertical em cada uma. E isso funcionaria. Seria aceitável. Mas é repetitivo e há uma forma melhor. Sabemos que, quando o código é repetitivo, podemos usar um ciclo para simplificar.

Portanto, aqui podemos usar um ciclo dentro de outro ciclo. Um ciclo para as linhas e outro para as flores dessa linha. Vamos começar por acrescentar um ciclo repeat à volta do código que já temos, para ganhares uma ideia de como isto funciona. E vamos repetir apenas uma vez. Estamos a dizer ao Jiki para fazer tudo o que está dentro destas chavetas exteriores uma vez. Isto tem exatamente o mesmo efeito que não ter este ciclo exterior de todo. Estamos a dizer ao Jiki para repetir algo uma vez, o que é o mesmo que lhe dizer para o fazer sem o repeat. Mas é assim que este código funciona. É código legítimo e válido. Temos um ciclo dentro de outro ciclo.

Então, o que acontece se mudarmos esse ciclo exterior para repetir duas vezes? Agora o Jiki vai executar duas vezes aquela sequência de `plant` (plantar) cinco vezes. Ele planta 10 flores. Mas todas essas flores ficam na mesma fila.

Assim, da mesma forma que precisamos de deslocar a posição da esquerda para a direita um pouco de cada vez, depois de desenharmos cada fila completa também precisamos de deslocar a posição vertical. Então, como fazemos isso? Podemos acrescentar uma variável externa para a posição vertical, usá-la na nossa função `plant` e, a seguir, aumentá-la em 10 depois de cada fila.

Pensa no valor em cada momento. A posição vertical começa em 10. Nas primeiras cinco vezes em que plantamos, mantém-se assim. A posição horizontal aumenta. Depois somamos mais 10 a essa posição vertical e plantamos mais cinco flores um pouco mais abaixo. Voltamos a repor a posição horizontal em 10 e depois aumentamo-la novamente de cada vez.

E agora podemos dizer para repetir isto quatro vezes e vamos obter quatro filas com cinco plantas.

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
  alt="A grelha final de flores de quatro por cinco com o Jiki feliz a mostrar os dois polegares para cima"
  width="389"
  height="400"
/>

O essencial a perceber é que o Jiki termina todo o trabalho no ciclo interior (_inner loop_ em inglês) antes de voltar ao ciclo exterior (_outer loop_ em inglês). Ele não anda a saltar para trás e para a frente. Ele completa o ciclo interior e, depois, avança para o próximo passo do ciclo exterior.

Nesta situação, podes pensar no ciclo exterior como aquele que controla os grupos, ou a linha, e no ciclo interior como aquele que controla cada elemento desse grupo, ou cada elemento dessa linha. No nosso exemplo, o ciclo exterior cria quatro linhas e o ciclo interior coloca cinco plantas, cinco elementos em cada grupo.
