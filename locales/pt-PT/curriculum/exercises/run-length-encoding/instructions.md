---
title: "Codificação por comprimento de sequência"
description: "Comprime e descomprime texto contando sequências de carateres repetidos."
en_md5: a176be7e6ed782e9aa4b54a4575f751f
---

A codificação por comprimento de sequência (_run-length encoding_ em inglês) é uma forma simples de compressão. As sequências de carateres iguais e consecutivos são substituídas por um número seguido desse único caráter. Os carateres que aparecem apenas uma vez ficam como estão, sem nenhum número antes deles.

Por exemplo, `"AABBBCCCC"` converte-se em `"2A3B4C"`, e `"XYZ"` (sem repetições) converte-se apenas em `"XYZ"`.

Os espaços contam como qualquer outro caráter, por isso `"  hsqq qww  "` converte-se em `"2 hs2q q2w2 "`.

### Duas funções

Escreve duas funções:

- `encode` (codificar) recebe uma string e devolve a sua forma codificada por comprimento de sequência.
- `decode` (descodificar) recebe uma string codificada e devolve o texto original.

Descodificar inverte o processo: um número indica quantas vezes deves repetir o caráter que vem a seguir. Lembra-te de que uma sequência pode ter mais de 9 carateres, por isso um número pode ter mais do que um algarismo (por exemplo, `"12W"` significa doze `W`s).

### Põe em prática o que aprendeste.

Embora haja muitas formas de resolver este exercício, a solução que queremos que encontres usa o tipo de ciclo `for` que aprendeste no último vídeo. Consulta os conceitos no fundo da página se precisares de recordar a sintaxe, porque é bastante feia!

Diverte-te!
