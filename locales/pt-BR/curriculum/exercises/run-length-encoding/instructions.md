---
title: "Codificação por comprimento de sequência"
description: "Comprima e descomprima texto contando sequências de caracteres repetidos."
en_md5: a176be7e6ed782e9aa4b54a4575f751f
---

A codificação por comprimento de sequência (_run-length encoding_ em inglês) é uma forma simples de compressão. As sequências de caracteres iguais e consecutivos são substituídas por um número seguido desse único caractere. Os caracteres que aparecem só uma vez ficam como estão, sem nenhum número antes deles.

Por exemplo, `"AABBBCCCC"` se converte em `"2A3B4C"`, e `"XYZ"` (sem repetições) se converte só em `"XYZ"`.

Os espaços contam como qualquer outro caractere, então `"  hsqq qww  "` se converte em `"2 hs2q q2w2 "`.

### Duas funções

Escreva duas funções:

- `encode` (codificar) recebe uma string e retorna a forma dela codificada por comprimento de sequência.
- `decode` (decodificar) recebe uma string codificada e retorna o texto original.

Decodificar inverte o processo: um número indica quantas vezes você deve repetir o caractere que vem em seguida. Lembre-se de que uma sequência pode ter mais de 9 caracteres, então um número pode ter mais de um dígito (por exemplo, `"12W"` significa doze `W`s).

### Ponha em prática o que você aprendeu.

Embora existam muitas formas de resolver este exercício, a solução que queremos que você encontre usa o tipo de laço `for` que você aprendeu no último vídeo. Consulte os conceitos no fim da página se precisar relembrar a sintaxe, porque ela é bem feia!

Divirta-se!
