---
title: "Conversão de tipos"
description: "Transformar um valor de um tipo em outro, como converter uma string de dígitos num número com `Number()` ou um número numa string com `String()`."
en_md5: 8d85e3d274a6cdfdb74bd0488b685f18
---

Todos os valores nos nossos programas têm um tipo. O `"7"` é uma string e o `7` é um número. Eles podem parecer quase iguais, mas o Jiki os trata de forma muito diferente. Você não pode somar a string `"7"` ao número `3` e esperar obter `10`, porque um deles é um pedaço de texto e o outro é uma quantidade.

Muitas vezes, precisamos passar um valor de um tipo para outro. Isso se chama conversão de tipos (_type conversion_ em inglês), e há duas conversões que você vai usar a toda hora.

### Converter uma string num número

Quando você lê caracteres de uma string, cada caractere também é uma string, mesmo quando parece um dígito. Antes de poder fazer contas com ele, você precisa transformá-lo num número de verdade. Fazemos isso com `Number()`.

```javascript
Number("7")
// 7

Number("42")
// 42
```

Quando você tem um número de verdade, pode somá-lo, multiplicá-lo e fazer todo o resto.

```javascript
let digit = Number("7")
let doubled = digit * 2
// 14
```

Se você der a `Number()` algo que não seja um número válido, como `Number("cat")`, não recebe número nenhum de volta, então vale a pena garantir que você só dá a ele strings compostas por dígitos.

### Converter um número numa string

O sentido contrário também é bem útil. Às vezes, você tem um número e quer tratá-lo como texto, talvez para juntá-lo a outra string ou para olhar para cada um dos seus dígitos. Fazemos isso com `String()`, o espelho de `Number()`.

```javascript
String(42)
// "42"

let count = 7
String(count)
// "7"
```

Agora que é uma string, você pode usar nela todas as ferramentas habituais de strings, como lê-la caractere a caractere ou verificar o comprimento dela.
