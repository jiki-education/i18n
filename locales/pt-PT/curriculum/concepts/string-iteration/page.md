---
title: "Percorrer strings com `for ... of`"
description: "Usar um ciclo `for of` para percorrer todas as letras de uma string e fazer algo com cada uma delas, uma de cada vez."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Podes aceder a uma única letra de uma string usando parênteses retos (`[]`). Agora vamos ver como percorrer uma string em ciclo e tirar cada letra uma de cada vez.

E, para isso, precisamos de um novo tipo de ciclo. Até agora, usámos o ciclo repeat e agora vamos usar algo chamado ciclo `for of` (que percorre cada elemento de uma coleção, um de cada vez). São duas palavras-chave novas, `for` e `of`.

A palavra-chave `for` é uma que vamos encontrar em vários sítios à medida que avançamos. Pode aparecer sozinha ou vir acompanhada de `in` ou `of`. Por agora, vamos concentrar-nos na última, `of`.

Vamos então ver algum código.

Vamos começar por criar uma variável chamada `name` (nome), que contém a string `"Jeremy"` (o nome Jeremy). Nada de novo aqui.

Depois, temos a linha do ciclo e, aí, acontece muita coisa, por isso vamos explicá-la com calma.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Primeiro, temos a palavra-chave `for`. É ela que diz ao Jiki que queremos fazer um ciclo. Por isso, ele olha mais à frente, vê `of` e sabe que queremos fazer um ciclo `for of`.

E isso significa que, em vez de usarmos um ciclo repeat, em que dizemos «Vamos repetir 10 vezes», estamos a dizer «Vamos percorrer todas as letras da string.» É isso que `for of` significa.

Depois, temos esta parte `let letter` (declara a variável `letter`). É exatamente igual ao que temos acima, com `let name`. Estamos apenas a criar uma variável chamada `letter`.

A diferença é que, em vez de dizermos explicitamente o que lá fica, estamos a dizer ao Jiki para colocar cada letra da string lá dentro, uma de cada vez.

Então, o Jiki vê `for`, procura `of` e põe-se em ação. Ele olha para a primeira letra da string, `"J"` neste caso, e coloca-a numa caixa nova chamada `letter`. Já agora, podíamos chamar-lhe qualquer coisa. Não tem de ser `letter`. Simplesmente decidimos chamar-lhe `letter` aqui.

Depois, executa o código que está dentro das chavetas (`{}`) e podes fazer aqui tudo o que farias em qualquer outro sítio do código. A única diferença é que este bloco de código vai correr uma vez por cada letra da string e vai ter esta variável disponível.

Sempre que o Jiki chega à chaveta que fecha (`}`), deita fora a caixa `letter` e cria uma nova com a letra seguinte lá dentro. Assim, da primeira vez, deita fora o `"J"` e põe antes o `"e"` na caixa. Depois faz o mesmo com `"r"`, `"e"`, `"m"` e `"y"`. Seis letras, seis voltas ao ciclo. É preciso algum tempo para nos habituarmos à sintaxe, mas não é um conceito assim tão difícil.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki a deitar fora a caixa antiga da letra e a colocar a letra seguinte numa caixa nova com o rótulo letter, repetindo para cada letra da string"
  width="500"
  height="168"
/>
