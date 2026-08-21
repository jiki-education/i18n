---
title: "Propriedades"
description: "Fatos estáticos sobre um valor, acessados com notação de ponto e sem parênteses, como `.length` para descobrir quantas letras tem uma string."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Até agora, quando pensávamos em strings ou em números, tínhamos a ideia de que eram coisas bem estáticas.

E, embora sejam, elas também têm um monte de recursos embutidos que o Jiki pode usar.

Existem dois tipos de capacidades que vamos ver: propriedades e métodos.

As propriedades são fatos que podemos pedir para o Jiki nos contar sobre as coisas.

Assim, por exemplo, as strings têm uma propriedade chamada `length` (comprimento), que o Jiki pode usar para nos dizer qual é o comprimento de uma string.

Então, em vez de termos que percorrer todas as letras para descobrir o tamanho de uma string, podemos simplesmente pedir para o Jiki nos dizer.

E, para isso, usamos uma nova forma de sintaxe: um ponto.

Por exemplo, se tivermos a string `"Jeremy"` e quisermos obter o comprimento dela, podemos escrever:

```javascript
"Jeremy".length // 6
```

Quando o Jiki cria uma string, ele conta as letras e, digamos assim, escreve um número no canto com quantas são.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="O Jiki contando as letras da string Jeremy e escrevendo o número no canto"
  width="359"
  height="400"
/>

E depois, quando usamos a propriedade `length`, o Jiki vai ver qual era esse número.

Assim, no nosso exemplo `"Jeremy".length`, quando o Jiki cria a string `"Jeremy"`, ele conta as letras, escreve o número seis no canto e, depois, quando escrevemos `"Jeremy".length`, ele vai verificar esse número.

Então, você pode pensar nas propriedades como fatos sobre essa coisa.
