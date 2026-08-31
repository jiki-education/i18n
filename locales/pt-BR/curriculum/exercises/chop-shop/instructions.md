---
title: "O Salão Vapt-Vupt"
description: "Descubra se o cabeleireiro tem tempo para mais um cliente."
en_md5: c68a8a4856c5249baa901c170035ea78
---

Você tem um pequeno salão de cabeleireiro que prioriza a velocidade em vez da qualidade. As pessoas podem sair com o corte um pouco irregular, mas não precisam passar muito tempo na cadeira.

Você oferece alguns serviços diferentes, de penteados a cortes completos, e cada um leva um tempo diferente para ficar pronto. O salão funciona por ordem de chegada. Não existe sistema de agendamento.

Quando o fim do dia se aproxima, você precisa de um jeito de saber se ainda tem tempo para atender as pessoas novas que entrarem no salão.

Escreva uma função chamada `canFitIn` (dá para encaixar) que recebe três entradas:

- A primeira são os cortes que já estão na fila (array de strings)
- A segunda é o corte que a nova pessoa quer (string)
- A terceira é a quantidade de minutos que restam no dia (número)

Retorne um Boolean indicando se você consegue encaixar a pessoa.

Os estilos que você oferece são:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays aninhados

Este é o primeiro exercício em que você lida com um array que contém outros arrays como elementos. Chamamos esses arrays de "arrays aninhados". Arrays aninhados são iguais a qualquer outro array, mas em vez de conter strings ou números, eles contêm outros arrays.

Dê uma olhada no array `cuts` (cortes). Ele contém outros arrays, um para cada corte de cabelo, e cada um desses arrays tem dois elementos: um nome e uma duração.

O jeito mais fácil de pensar nisso é imaginar primeiro os arrays internos, os pares de nome e duração, e depois pensar em todos eles agrupados dentro de outro array.

A indexação funciona igual a qualquer outro lugar, mas você pode encadear índices assim...

```javascript
let cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
