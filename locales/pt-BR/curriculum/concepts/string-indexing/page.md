---
title: "Indexação de strings"
description: "Usar colchetes e um número de posição para tirar uma única letra de uma string. Lembre-se de que as posições começam em zero."
en_md5: cd31e0366b3090b358494667003f54c9
---

Imagine que você tem o meu nome, Jeremy, e quer tirar de lá a minha inicial, o J. Como faríamos isso?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="O Jiki pensando em como tirar uma única letra de uma string"
  width="361"
  height="353"
/>

Bem, você pode pensar numa string como uma sequência de letras. Portanto, `"Jeremy"` tem seis letras, J-E-R-E-M-Y, e cada uma tem uma posição. `"J"` está na primeira posição e `"y"` está na última posição.

Agora, em JavaScript e na maioria das linguagens de programação, estas posições começam em zero. Portanto, a primeira letra `"J"` está na posição zero; a seguir temos `"e"`, que está na posição um, `"r"` na posição dois, `"e"` na posição três, `"m"` na posição quatro e `"y"` na posição cinco.

Esta história de começar em zero é bastante estranha e, sinceramente, a vida seria mais fácil se começássemos simplesmente a contar a partir de um, como no mundo normal. Mas não é o que fazemos. Na maioria das linguagens de programação, começamos a contar a partir de zero, então você só tem que aprender isso.

Então, se quisermos obter uma letra numa posição específica, podemos usar colchetes (`[]`) com o número lá dentro.

Então, se dissermos `"Jeremy"[0]`, estamos dizendo: me dê a primeira letra da palavra `"Jeremy"`.

Se dissermos `"Jeremy"[1]`, estamos dizendo: me dê a segunda letra.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

E também podemos fazer isso com variáveis. Portanto, se criarmos uma variável chamada `name` (nome) e definirmos o valor dela como a string `"Jeremy"`, podemos fazer `name[0]` e voltamos a obter `"J"`.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Convém esclarecer uma coisa: o que você recebe de `name[0]` é apenas outra string. É outro pedaço de papel com a letra J escrita. Não há nada de especial nela. É uma string tal como `"Jeremy"` é uma string.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="O Jiki segurando um pedaço de papel novo só com a letra J"
  width="500"
  height="289"
/>

Acontece que só tem uma letra, em vez de seis.

E fazer isso não afeta nada a string original. Não estamos, tipo, arrancando o J nem nada disso. Estamos apenas descobrindo qual das letras queremos e, depois, criando uma nova string com essa letra.
