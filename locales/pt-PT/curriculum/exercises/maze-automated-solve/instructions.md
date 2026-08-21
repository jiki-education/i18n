---
title: "Resolve o labirinto de forma programática"
description: "Escreve código que percorre qualquer labirinto por si só."
en_md5: d3f3c0d2727632fe7872d07e1c2cd99a
---

No primeiro exercício do labirinto, moveste a tua personagem manualmente pelo labirinto. Agora já podes resolver qualquer labirinto de forma programática, usando código!

Para tornar isso possível, tens três funções novas:

- `canTurnLeft()`: devolve `true` se o espaço à esquerda da personagem não for uma parede.
- `canTurnRight()`: devolve `true` se o espaço à direita da personagem não for uma parede.
- `canMove()`: devolve `true` se o espaço à frente da personagem não for uma parede.

Quando juntas estas funções às funções `move()`, `turnLeft()` e `turnRight()` que já tinhas, é possível escrever um algoritmo para resolver **qualquer** labirinto. «Algoritmo» é uma palavra pomposa que significa apenas «uma forma de fazer algo». É como uma fórmula ou uma receita.

Mais abaixo nas instruções, dou-te o algoritmo já pronto para resolveres o labirinto. Mas quero que tentes primeiro descobri-lo por ti, como um pequeno desafio de lógica. Se souberes se podes virar à esquerda, à direita ou avançar, como resolves qualquer labirinto que eu te der?

Assim que o descobrires, ou desistires, desce para veres a resposta e o que precisas de escrever em código.

<hr style="border-top: 1px solid var(--color-gray-200); margin:40px 0"/>

### O Algoritmo

OK, foi muito pedir, por isso imagino que tenhas tido algumas ideias, mas não tenhas chegado à solução completa. Aqui estão os passos que tens de seguir:

- Se puderes virar à esquerda, vira à esquerda e avança.
- Caso contrário, se puderes avançar, avança.
- Caso contrário, se puderes virar à direita, vira à direita e avança.
- Caso contrário, dá meia-volta.

Se fizeres isso, consegues resolver qualquer labirinto!

Escreve essas instruções em código. Diverte-te!
