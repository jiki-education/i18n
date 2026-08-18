---
title: "Adicionar o `return` às funções"
description: "Usar a palavra-chave `return` para dar às tuas funções uma calha de saída que devolve um valor a quem as chama."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Agora já sabes criar funções com e sem parâmetros de entrada. Só te falta aprender uma última coisa. Depois, vais ser um especialista em criar funções: como dar às tuas funções uma calha de saída.

Já usaste muitas funções que devolvem coisas. A função `isAlienAbove` (_há um extraterrestre por cima_) devolve-te true ou false. A função `Math.randomInt(1, 10)` (em que `Math` significa matemática e `randomInt` significa inteiro aleatório) devolve-te um número aleatório.

Quando o Jiki usa essas funções, alguma coisa sai da calha de saída e ele pode depois ir usá-la.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="O Jiki a apanhar um valor que sai da calha de saída de uma máquina"
  width="500"
  height="312"
/>

Portanto, para fazermos isto, precisamos de mais uma palavra-chave nova: a palavra-chave `return`.

A palavra-chave `return` diz ao Mini Jiki para empurrar alguma coisa para fora da calha de saída.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="O Mini Jiki dentro da máquina a empurrar o valor 42 para fora pela calha de saída"
  width="500"
  height="335"
/>

Vamos então criar uma função e chamar-lhe `meaningOfLife` (_sentido da vida_). O trabalho desta função é apenas devolver sempre o número `42`. Não tem parâmetros de entrada. Escrevemo-la assim:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="A máquina meaningOfLife a enviar o número 42 para fora da calha de saída"
  width="500"
  height="323"
/>

Agora, em qualquer sítio onde usarmos `meaningOfLife()` no nosso código, recebemos o número `42` de volta para o usarmos como qualquer outro valor. Podemos guardá-lo numa caixa com `let`, passá-lo como valor de entrada a outra função e compará-lo numa condicional.

As funções com `return` também podem receber parâmetros de entrada. Podes escrever uma função `ageBracket(age)` (`ageBracket` significa escalão etário; `age` significa idade). Essa função devolve `"Sorry, too young"` quando `age` for menor que 18, e `"Welcome"` caso contrário. Quem chamar a função recebe de volta a string que ela devolve.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Um valor de idade a ser colocado na fenda de entrada da máquina para ela poder decidir o que devolver"
  width="487"
  height="400"
/>

É assim que a programação funciona na sua essência. Criamos muitos destes pequenos blocos de construção e depois juntamo-los para formar programas.
