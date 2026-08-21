---
title: "Festa de Nomes Exclusivos"
description: "Descubra quem pode entrar numa festa muito exclusiva."
en_md5: 3c03097aed9465c8f132574b033ad7ce
---

A festa desta noite é muito exclusiva: só entram as pessoas cujos nomes começam com uma sequência específica de letras!

A sua tarefa é escrever uma função chamada `handleGuest` (lidar com o convidado) que recebe duas entradas:

- `name` - o nome da pessoa na porta
- `allowedPrefix` - as letras iniciais exigidas para a festa desta noite

A função deve retornar `true` se a pessoa puder entrar e `false` se ela for barrada.

Por exemplo:

- Se o prefixo permitido desta noite for `"S"`, a Sarah entra (retorna `true`), mas o Brad não entra (retorna `false`).
- Se o prefixo permitido for `"Brad"`, o Brad e o Bradley entram, mas o Brian não entra.

### Funções auxiliares

Ao longo deste exercício, você vai perceber que precisa calcular o comprimento do nome do convidado e também o comprimento do prefixo permitido. Esta é a oportunidade perfeita para criar uma função auxiliar chamada `getLength(someString)`, que conta quantas letras a string tem. Depois, você pode usar essa função em lugares diferentes dentro de `handleGuest(...)`.

O cenário bônus desafia você a resolver isso no menor número de linhas possível. Você também pode encontrar outras soluções que prefira e que usem mais linhas. Isso é perfeitamente aceitável (e incentivamos você a explorar abordagens diferentes), mas tente também encontrar a versão mais curta.

Divirta-se!
