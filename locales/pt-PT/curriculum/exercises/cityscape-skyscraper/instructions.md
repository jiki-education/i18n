---
title: "Arranha-céus"
description: "Constrói um arranha-céus na grelha da cidade."
en_md5: 901851ded0ac8a0ef6cb80db60e59998
---

Este é o primeiro de dois exercícios em que vais construir arranha-céus.

Neste exercício, a tua tarefa é construir um único arranha-céus no meio da cena. Em cada cenário, a altura do arranha-céus varia.

Para determinar quantos andares construir, tens uma função `numFloors()` (número de andares) que devolve a altura total do edifício.

Há três componentes diferentes que podes usar: parede (`W`), vidro (`G`) e entrada (`E`). Vê as funções abaixo para veres que funções criam estes componentes.

O andar mais próximo do chão (quer lhe chames "rés-do-chão", quer "primeiro andar", conforme a tua região!) tem sempre uma entrada entre dois segmentos de vidro, que ficam entre dois segmentos de parede exteriores (`WGEGW`). Os outros andares têm três segmentos de vidro entre dois segmentos de parede (`WGGGW`). E, por cima dos andares, há um telhado (`WWWWW`).

Assim, um arranha-céus com 5 andares tem um andar de entrada, 4 andares de vidro e um telhado. Deve ter este aspeto:

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

O centro do arranha-céus deve estar na coluna `19`. O rés-do-chão começa em `2` (imediatamente acima do chão de betão) e sobe (portanto, no nosso exemplo acima, teríamos um andar de entrada em `2` e um telhado em `7`).

Uma regra essencial neste exercício é que todos os valores que introduzires nas funções têm de ser variáveis ou fórmulas. Não podes simplesmente introduzir um número como `20`.

Quando terminares este exercício, vais desbloquear um Projeto onde vais construir panoramas urbanos completos, com diferentes números de edifícios e larguras diferentes.
