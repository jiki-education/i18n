---
title: "Cifra de César"
description: "Criptografe uma mensagem secreta com uma cifra romana antiga."
en_md5: 029bbd7050127405f5e67a3a20353139
---

A Cifra de César é uma das técnicas de criptografia mais antigas e mais simples. Ela foi usada por Júlio César para enviar mensagens secretas aos seus generais.

A cifra funciona deslocando cada letra da mensagem num número fixo de posições no alfabeto. Por exemplo, com um desvio de 3, 'a' passa a 'd', 'b' passa a 'e', e assim por diante. Se o desvio for além de 'z', ele dá a volta ao início do alfabeto.

Os espaços devem ser mantidos como espaços (eles não são deslocados).

Crie uma função chamada `encode(message, shift)` (codificar) que recebe uma mensagem em minúsculas e um valor de desvio, e retorna a mensagem codificada.

Por exemplo:

- `encode("abc", 1)` retorna `"bcd"`
- `encode("xyz", 3)` retorna `"abc"` (dá a volta)
- `encode("hello world", 5)` retorna `"mjqqt btwqi"`

Dica: Você vai querer dividir este problema em funções auxiliares menores!

### Curiosidade

Uma vez, eu fui o apresentador numa conferência de tecnologia em Braga, Portugal. Cinco minutos antes de entrar no palco, os organizadores se aproximaram. Um pouco envergonhados, me perguntaram se eu me importaria de ir vestido de Júlio César durante a primeira parte do dia, para celebrar a herança romana de Braga. Será que eu consegui...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy vestido de Júlio César"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
