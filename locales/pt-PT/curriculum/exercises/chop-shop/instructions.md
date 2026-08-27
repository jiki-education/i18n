---
title: "The Chop Shop"
description: "Descobre se o barbeiro tem tempo para mais um cliente."
en_md5: 5d80e48067c44af3dbda12f2fb2c1d4d
---

Tens um pequeno salão de cabeleireiro que dá prioridade à rapidez em vez da qualidade. Os clientes podem sair com um acabamento menos perfeito, mas não têm de passar demasiado tempo na cadeira.

Ofereces vários serviços, desde penteados a cortes completos, que demoram tempos diferentes. O salão funciona por ordem de chegada. Não há marcações.

À medida que o dia se aproxima do fim, precisas de uma forma de saber se tens tempo para atender os novos clientes que entram no salão.

Escreve uma função chamada `canFitIn` (consegue encaixar) que recebe três parâmetros de entrada:

- O primeiro são os cortes de cabelo que já tens na fila (array de strings).
- O segundo é o corte de cabelo que o novo cliente quer (string).
- O terceiro é o número de minutos que restam no dia (number).

Devolve um boolean que indica se consegues encaixar a pessoa.

Os estilos que ofereces são:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays aninhados

Este é o primeiro exercício em que lidas com um array que contém outros arrays como elementos. Chamamos-lhes «arrays aninhados». Os arrays aninhados são iguais a qualquer outro array, mas, em vez de conterem strings ou números, contêm outros arrays.

Repara no array `cuts` (cortes). Contém outros arrays, um para cada corte de cabelo, e cada um destes arrays tem dois elementos: um nome e uma duração.

É mais fácil olhares primeiro para os arrays interiores, os pares de nomes e durações, e depois imaginares todos esses pares agrupados noutro array.

A indexação funciona da mesma forma que em qualquer outro contexto, mas podes encadear índices assim...

```javascript
const cuts = [
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
