---
title: "Concatenação de strings"
description: "Juntar strings com `+` para colar texto fixo e variáveis numa única string mais longa."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Você já sabe o que são as strings. São pedaços de papel com texto.

Até agora, todas as strings que você usou foram escritas diretamente por você. O que acontece se você quiser construir uma string a partir de variáveis ou condições? Como fazemos isso?

Existem duas formas.

A primeira se chama concatenação de strings (_string concatenation_ em inglês), que é uma forma pomposa e um pouco confusa de dizer juntar duas strings.

Imagine que você tem duas palavras, `"hello"` (olá) e `"world"` (mundo), e quer criar uma string que contenha `"hello world"`.

Você poderia simplesmente escrever `"hello world"` como uma única string, mas também poderia escrever `"hello " + "world"`, e isso te daria a mesma string.

Claro que neste cenário isso não é assim tão útil. Mas e se tivéssemos uma variável com o nome de alguém e quiséssemos dizer olá para essa pessoa?

Então, imagine que temos uma variável chamada `name` (nome), e que ela contém `"Jeremy"` às vezes e `"Jiki"` em outras. Queremos dizer `"hello Jeremy"` ou `"hello Jiki"` usando essa variável.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="O Jiki segura uma caixa com a etiqueta name, que pode conter valores diferentes."
  width="207"
  height="400"
/>

Bem, podemos conseguir isso com esse conceito de concatenação:

```javascript
"hello " + name // "hello Jeremy" ou "hello Jiki"
```

Isso vai nos dar `"hello Jeremy"`, `"hello Jiki"` ou um olá para qualquer outra pessoa, dependendo do que estiver dentro da caixa `name`.
