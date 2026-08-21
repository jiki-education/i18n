---
title: "Conversão de tipos"
description: "Transformar um valor de um tipo noutro, como converter uma string de algarismos num número com `Number()` ou um número numa string com `String()`."
en_md5: 8d85e3d274a6cdfdb74bd0488b685f18
---

Todos os valores nos nossos programas têm um tipo. O `"7"` é uma string e o `7` é um número. Podem parecer quase iguais, mas o Jiki trata-os de forma muito diferente. Não podes somar a string `"7"` ao número `3` e esperar obter `10`, porque um deles é um pedaço de texto e o outro é uma quantidade.

Muitas vezes, precisamos de passar um valor de um tipo para outro. Isto chama-se conversão de tipos (_type conversion_ em inglês), e há duas conversões a que vais recorrer a toda a hora.

### Converter uma string num número

Quando lês carateres de uma string, cada caráter é também uma string, mesmo quando parece um algarismo. Antes de poderes fazer contas com ele, precisas de o transformar num número de verdade. Fazemos isso com `Number()`.

```javascript
Number("7")
// 7

Number("42")
// 42
```

Quando tens um número de verdade, podes somá-lo, multiplicá-lo e fazer tudo o resto.

```javascript
let digit = Number("7")
let doubled = digit * 2
// 14
```

Se deres a `Number()` algo que não seja um número válido, como `Number("cat")`, não recebes número nenhum de volta, por isso vale a pena garantir que só lhe dás strings compostas por algarismos.

### Converter um número numa string

O sentido contrário também dá muito jeito. Às vezes, tens um número e queres tratá-lo como texto, talvez para o juntares a outra string ou para olhares para cada um dos seus algarismos. Fazemos isso com `String()`, o espelho de `Number()`.

```javascript
String(42)
// "42"

let count = 7
String(count)
// "7"
```

Agora que é uma string, podes usar nela todas as ferramentas habituais de strings, como lê-la caráter a caráter ou verificar o seu comprimento.
