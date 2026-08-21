---
title: "Usar várias funções em conjunto"
description: "Dividir um problema em pequenas funções de responsabilidade única que se chamam umas às outras, para que cada parte se mantenha simples e reutilizável."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Até agora, quando você escreveu funções, cada uma praticamente se sustentava sozinha e continha toda a lógica de que precisava para funcionar.

Agora vamos ver como dividir funções para termos funções menores que trabalham em conjunto, em vez de funções grandes com muita coisa acontecendo lá dentro.

Como regra geral em programação, você quer que cada função faça o mínimo possível. Chamamos isso de função de responsabilidade única (_single responsibility_ em inglês). Cada função deve fazer apenas uma coisa e usar outras funções para as diferentes subpartes dessa tarefa.

Vamos então ver um exemplo.

Imagine que temos uma função cujo trabalho é retornar uma string que descreve um nome.

Uma versão simples ficaria assim. Temos um laço de contagem, algo que você já escreveu, e depois um modelo de string que monta o resultado.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Isso funciona bem, mas está fazendo duas coisas. Está fazendo uma coisa bastante genérica, contar, e outra muito específica, construir esta string num formato concreto.

Seria muito melhor dividir isso em duas funções: uma responsável pela contagem e outra responsável por descrever um nome neste formato concreto.

```javascript
// Apenas conta letras
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Apenas formata o texto de forma agradável
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

E podemos depois reutilizar essa função de contagem genérica nesta formatação de strings e também em qualquer outro lugar onde precisemos dela. Sempre que precisarmos contar letras numa string, essa função fica totalmente separada de tudo o que tenha a ver com a impressão.

Você consegue ler as duas funções isoladamente e entender imediatamente o que cada uma faz.

À medida que suas funções ficam mais complexas e você tem mais delas, esta técnica é a diferença entre ter código limpo e legível e ter uma confusão e desorganização totais.

Há uma coisa que vale a pena mencionar outra vez: tudo o que você cria dentro de uma função não pode ser acessado por outras funções, a menos que você retorne de propósito.

Portanto, se você tentar referenciar a variável `count` (contagem) dentro da função `describeName` (descrever o nome), não vai conseguir, porque pertence à outra função.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="O Jiki pensando, com uma lâmpada por cima da cabeça, sobre como as variáveis se mantêm privadas dentro de cada função"
  width="361"
  height="353"
/>

Em JavaScript, podemos criar variáveis no topo, acima de tudo o resto, que são compartilhadas entre funções, mas recomendo mesmo que você não faça isso, a não ser que haja uma razão muito boa para isso.

Quanto mais você mantiver cada função independente, mais limpo vai ficar o seu código e menos bugs você vai criar e ter. A palavra técnica para essa independência é pura (_pure_ em inglês), ou seja, funções puras.
