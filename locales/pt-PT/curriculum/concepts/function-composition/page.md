---
title: "Usar várias funções em conjunto"
description: "Dividir um problema em pequenas funções de responsabilidade única que se chamam umas às outras, para que cada parte se mantenha simples e reutilizável."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Até agora, quando escreveste funções, cada uma praticamente se aguentava sozinha e continha toda a lógica de que precisava para funcionar.

Agora vamos ver como dividir funções para termos funções mais pequenas que trabalham em conjunto, em vez de funções grandes com muita coisa a acontecer lá dentro.

Como regra geral em programação, queres que cada função faça o mínimo possível. Chamamos a isto uma função de responsabilidade única (_single responsibility_ em inglês). Cada função deve fazer apenas uma coisa e usar outras funções para as diferentes subpartes dessa tarefa.

Vamos então ver um exemplo.

Imagina que temos uma função cujo trabalho é devolver uma string que descreve um nome.

Uma versão simples teria este aspeto. Temos um ciclo de contagem, algo que já escreveste, e depois um modelo de string que monta o resultado.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Isto funciona bem, mas está a fazer duas coisas. Está a fazer uma coisa bastante genérica, contar, e outra muito específica, construir esta string num formato concreto.

Seria muito melhor dividir isto em duas funções: uma responsável pela contagem e outra responsável por descrever um nome neste formato concreto.

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

E podemos depois reutilizar essa função de contagem genérica nesta formatação de strings e também em qualquer outro lugar onde precisemos dela. Sempre que precisarmos de contar letras numa string, essa função fica totalmente separada de tudo o que tenha a ver com a impressão.

Consegues ler ambas as funções isoladamente e perceber imediatamente o que cada uma faz.

À medida que as tuas funções ficam mais complexas e tens mais delas, esta técnica é a diferença entre teres código limpo e legível e teres uma confusão e desorganização totais.

Há uma coisa que vale a pena referir outra vez: tudo o que crias dentro de uma função não pode ser acedido por outras funções, a menos que o devolvas de propósito.

Portanto, se tentares referenciar a variável `count` (contagem) dentro da função `describeName` (descrever o nome), não consegues, porque pertence à outra função.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="O Jiki a pensar, com uma lâmpada por cima da cabeça, sobre como as variáveis se mantêm privadas dentro de cada função"
  width="361"
  height="353"
/>

Em JavaScript, podemos criar variáveis no topo, acima de tudo o resto, que são partilhadas entre funções, mas recomendo mesmo que não o faças, a não ser que haja uma razão muito boa para isso.

Quanto mais manteres cada função independente, mais limpo ficará o teu código e menos bugs vais criar e ter. A palavra técnica para essa independência é pura (_pure_ em inglês), ou seja, funções puras.
