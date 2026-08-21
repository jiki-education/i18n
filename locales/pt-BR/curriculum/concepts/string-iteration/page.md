---
title: "Percorrer strings com `for ... of`"
description: "Usar um laço `for of` para percorrer todas as letras de uma string e fazer algo com cada uma delas, uma de cada vez."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Você pode acessar uma única letra de uma string usando colchetes (`[]`). Agora vamos ver como percorrer uma string em laço e tirar cada letra uma de cada vez.

E, para isso, precisamos de um novo tipo de laço. Até agora, usamos o laço repeat e agora vamos usar algo chamado laço `for of` (que percorre cada elemento de uma coleção, um de cada vez). São duas palavras-chave novas, `for` e `of`.

A palavra-chave `for` é uma que vamos encontrar em vários lugares à medida que avançamos. Pode aparecer sozinha ou vir acompanhada de `in` ou `of`. Por agora, vamos nos concentrar na última, `of`.

Vamos então ver algum código.

Vamos começar criando uma variável chamada `name` (nome), que contém a string `"Jeremy"` (o nome Jeremy). Nada de novo aqui.

Depois, temos a linha do laço e, aí, acontece muita coisa, então vamos explicá-la com calma.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Primeiro, temos a palavra-chave `for`. É ela que diz ao Jiki que queremos fazer um laço. Então, ele olha mais à frente, vê `of` e sabe que queremos fazer um laço `for of`.

E isso significa que, em vez de usarmos um laço repeat, em que dizemos “Vamos repetir 10 vezes”, estamos dizendo “Vamos percorrer todas as letras da string.” É isso que `for of` significa.

Depois, temos esta parte `let letter` (declara a variável `letter`). É exatamente igual ao que temos acima, com `let name`. Estamos apenas criando uma variável chamada `letter`.

A diferença é que, em vez de dizermos explicitamente o que fica lá, estamos dizendo ao Jiki para colocar cada letra da string lá dentro, uma de cada vez.

Então, o Jiki vê `for`, procura `of` e entra em ação. Ele olha para a primeira letra da string, `"J"` neste caso, e coloca ela numa caixa nova chamada `letter`. Aliás, podíamos chamar ela de qualquer coisa. Não tem que ser `letter`. Simplesmente decidimos chamar de `letter` aqui.

Depois, executa o código que está dentro das chaves (`{}`) e você pode fazer aqui tudo o que faria em qualquer outro lugar do código. A única diferença é que este bloco de código vai rodar uma vez por cada letra da string e vai ter esta variável disponível.

Sempre que o Jiki chega à chave que fecha (`}`), ele joga fora a caixa `letter` e cria uma nova com a letra seguinte lá dentro. Assim, da primeira vez, joga fora o `"J"` e põe o `"e"` na caixa. Depois faz o mesmo com `"r"`, `"e"`, `"m"` e `"y"`. Seis letras, seis voltas no laço. Leva um tempinho para a gente se acostumar com a sintaxe, mas não é um conceito tão difícil assim.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki jogando fora a caixa antiga da letra e colocando a letra seguinte numa caixa nova com o rótulo letter, repetindo para cada letra da string"
  width="500"
  height="168"
/>
