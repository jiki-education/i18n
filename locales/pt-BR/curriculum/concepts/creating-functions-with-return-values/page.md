---
title: "Adicionar o `return` às funções"
description: "Usar a palavra-chave `return` para dar às suas funções uma boca da máquina que retorna um valor a quem as chama."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Agora você já sabe criar funções com e sem entradas. Só te falta aprender uma última coisa. Depois, você vai ser especialista em criar funções: como dar às suas funções uma boca da máquina.

Você já usou muitas funções que retornam coisas. A função `isAlienAbove` (_há um extraterrestre por cima_) te retorna true ou false. A função `Math.randomInt(1, 10)` (em que `Math` significa matemática e `randomInt` significa inteiro aleatório) te retorna um número aleatório.

Quando o Jiki usa essas funções, alguma coisa sai da boca da máquina e ele pode depois usá-la.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="O Jiki pegando um valor que sai da boca de uma máquina"
  width="500"
  height="312"
/>

Portanto, para fazermos isso, precisamos de mais uma palavra-chave nova: a palavra-chave `return`.

A palavra-chave `return` diz ao Mini Jiki para empurrar alguma coisa para fora da boca da máquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="O Mini Jiki dentro da máquina empurrando o valor 42 para fora pela boca da máquina"
  width="500"
  height="335"
/>

Vamos então criar uma função e chamar de `meaningOfLife` (_sentido da vida_). O trabalho desta função é apenas retornar sempre o número `42`. Ela não tem entradas. Escrevemos ela assim:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="A máquina meaningOfLife enviando o número 42 para fora da boca da máquina"
  width="500"
  height="323"
/>

Agora, em qualquer lugar onde usarmos `meaningOfLife()` no nosso código, recebemos o número `42` de volta para usarmos como qualquer outro valor. Podemos guardá-lo numa caixa com `let`, passá-lo como valor de entrada a outra função ou compará-lo numa condição.

As funções com `return` também podem receber entradas. Você pode escrever uma função `ageBracket(age)` (`ageBracket` significa faixa etária; `age` significa idade). Essa função retorna `"Sorry, too young"` quando `age` for menor que 18, e `"Welcome"` caso contrário. Quem chamar a função recebe de volta a string que ela retorna.

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
  alt="Um valor de idade sendo colocado na fenda de entrada da máquina para ela poder decidir o que retornar"
  width="487"
  height="400"
/>

É assim que a programação funciona na sua essência. Criamos muitos destes pequenos blocos de construção e depois os juntamos para formar programas.
