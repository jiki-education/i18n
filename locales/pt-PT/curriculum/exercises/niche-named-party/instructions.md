---
title: "Festa de Nomes Exclusivos"
description: "Descobre quem pode entrar numa festa muito exclusiva."
en_md5: 3c03097aed9465c8f132574b033ad7ce
---

A festa desta noite é muito exclusiva: só entram as pessoas cujos nomes começam com uma sequência específica de letras!

A tua tarefa é escrever uma função chamada `handleGuest` (lidar com o convidado) que recebe dois parâmetros de entrada:

- `name` - o nome da pessoa à porta
- `allowedPrefix` - as letras iniciais exigidas para a festa desta noite

A função deve devolver `true` se a pessoa puder entrar e `false` se for mandada embora.

Por exemplo:

- Se o prefixo permitido desta noite for `"S"`, a Sarah entra (devolve `true`), mas o Brad não entra (devolve `false`).
- Se o prefixo permitido for `"Brad"`, o Brad e o Bradley entram, mas o Brian não entra.

### Funções auxiliares

Ao longo deste exercício, vais perceber que precisas de calcular o comprimento do nome do convidado e também o comprimento do prefixo permitido. Esta é a oportunidade perfeita para criares uma função auxiliar chamada `getLength(someString)`, que conta quantas letras tem a string. Depois, podes usar esta função em diferentes sítios dentro de `handleGuest(...)`.

O cenário bónus desafia-te a resolver isto no menor número de linhas possível. Também podes encontrar outras soluções que prefiras e que usem mais linhas. Isso é perfeitamente aceitável (e encorajamos-te a explorar abordagens diferentes), mas tenta também encontrar a versão mais curta.

Diverte-te!
