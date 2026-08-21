---
title: "Concatenação de strings"
description: "Juntar strings com `+` para colar texto fixo e variáveis numa única string mais comprida."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Já sabes o que são as strings. São pedaços de papel com texto.

Até agora, todas as strings que usaste foram escritas diretamente por ti. O que acontece se quiseres construir uma string a partir de variáveis ou condições? Como fazemos isso?

Há duas formas.

A primeira chama-se concatenação de strings (_string concatenation_ em inglês), que é uma forma pomposa e um pouco confusa de dizer juntar duas strings.

Imagina que tens duas palavras, `"hello"` (olá) e `"world"` (mundo), e queres criar uma string que contenha `"hello world"`.

Podias simplesmente escrever `"hello world"` como uma única string, mas também podias escrever `"hello " + "world"`, e isso dava-te a mesma string.

Claro que neste cenário isto não é assim tão útil. Mas e se tivéssemos uma variável com o nome de alguém e quiséssemos dizer olá a essa pessoa?

Então, imagina que temos uma variável chamada `name` (nome), e que ela contém `"Jeremy"` por vezes e `"Jiki"` noutras alturas. Queremos dizer `"hello Jeremy"` ou `"hello Jiki"` usando essa variável.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="O Jiki segura uma caixa com a etiqueta name, que pode conter valores diferentes."
  width="207"
  height="400"
/>

Bem, podemos conseguir isto com este conceito de concatenação:

```javascript
"hello " + name // "hello Jeremy" ou "hello Jiki"
```

Isto vai dar-nos `"hello Jeremy"`, `"hello Jiki"` ou um olá a qualquer outra pessoa, dependendo do que estiver dentro da caixa `name`.
