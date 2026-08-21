---
title: "Arranha-céus"
description: "Construa um arranha-céu na grade da cidade."
en_md5: 901851ded0ac8a0ef6cb80db60e59998
---

Este é o primeiro de dois exercícios em que você vai construir arranha-céus.

Neste exercício, a sua tarefa é construir um único arranha-céu no meio da cena. Em cada cenário, a altura do arranha-céu varia.

Para determinar quantos andares construir, você tem uma função `numFloors()` (número de andares) que retorna a altura total do edifício.

Há três componentes diferentes que você pode usar: parede (`W`), vidro (`G`) e entrada (`E`). Veja as funções abaixo para ver que funções criam esses componentes.

O andar mais próximo do chão (quer você chame de "térreo", quer de "primeiro andar", dependendo da sua região!) tem sempre uma entrada entre dois segmentos de vidro, que ficam entre dois segmentos de parede exteriores (`WGEGW`). Os outros andares têm três segmentos de vidro entre dois segmentos de parede (`WGGGW`). E, por cima dos andares, há um telhado (`WWWWW`).

Assim, um arranha-céu com 5 andares tem um andar de entrada, 4 andares de vidro e um telhado. Deve ter este aspecto:

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

O centro do arranha-céu deve estar na coluna `19`. O térreo começa em `2` (logo acima do chão de concreto) e sobe (portanto, no nosso exemplo acima, teríamos um andar de entrada em `2` e um telhado em `7`).

Uma regra essencial neste exercício é que todos os valores que você colocar nas funções precisam ser variáveis ou fórmulas. Você não pode simplesmente colocar um número como `20`.

Quando você terminar este exercício, vai desbloquear um Projeto onde você vai construir panoramas urbanos completos, com diferentes números de edifícios e larguras diferentes.
