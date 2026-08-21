---
title: "Métodos"
description: 'Funções que pertencem a um valor e são chamadas com notação de ponto, como `"Jeremy".includes("e")` ou `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Até agora, quando pensámos em strings ou números, pensámos neles como coisas bastante estáticas.

E, embora o sejam, também têm muita funcionalidade incorporada que o Jiki pode usar.

E, à medida que avançamos, vamos aprender mais sobre esta funcionalidade, sobre este tipo de capacidades que eles têm e que tornam a tua vida muito mais fácil.

Há dois tipos de capacidades que vamos ver: as <define>propriedades</define> e os <define>métodos</define>.

Os métodos são funções que pertencem à string.

Portanto, em vez de escrevermos uma função na qual colocamos uma string como valor de entrada, podemos usar um método diretamente na string.

Por exemplo, lembras-te de uma função em que verificas se uma string tem uma letra específica lá dentro? Bem, as strings têm, na verdade, um método chamado <define>`includes`</define> que faz isso, e podemos usá-lo com a mesma sintaxe de ponto que viste para as propriedades.

A diferença em relação às propriedades é que, quando os escrevemos, escrevemo-los como funções, com parênteses e valores de entrada.

Então podemos escrever:

```javascript
"Jeremy".includes("e") // true
```

E receberemos `true`, porque `"Jeremy"` tem um `"e"` lá dentro.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="O Jiki a escrever a string Jeremy num pedaço de papel"
  width="359"
  height="400"
/>

Os métodos são diferentes das propriedades porque não são factos estáticos. São, na verdade, funções. Podes pensar neles como funções que têm uma caixa incorporada com a string lá dentro.

O modo como funcionam não importa muito para já. Não vais construí-los tão cedo. Tudo o que precisas de saber é que usas um método usando um ponto e, depois, a sintaxe normal de função.

Uma coisa a saber sobre as strings é que os métodos não alteram nada dentro da string. Por exemplo, existe um método <define>`toUpperCase`</define>, que devolve a string com todas as letras em maiúsculas. Mas isso não altera a string original. Essa continua a conter `"Jeremy"` escrito apenas com um J maiúsculo. Em vez disso, o Jiki está a criar uma nova string toda em maiúsculas.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
