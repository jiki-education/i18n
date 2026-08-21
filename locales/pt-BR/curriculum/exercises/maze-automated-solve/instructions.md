---
title: "Resolva o labirinto de forma programática"
description: "Escreva código que percorre qualquer labirinto sozinho."
en_md5: d3f3c0d2727632fe7872d07e1c2cd99a
---

No primeiro exercício do labirinto, você moveu o seu bonequinho manualmente pelo labirinto. Agora você já pode resolver qualquer labirinto de forma programática, usando código!

Para tornar isso possível, você tem três funções novas:

- `canTurnLeft()`: retorna `true` se o espaço à esquerda do bonequinho não for uma parede.
- `canTurnRight()`: retorna `true` se o espaço à direita do bonequinho não for uma parede.
- `canMove()`: retorna `true` se o espaço à frente do bonequinho não for uma parede.

Quando você junta estas funções às funções `move()`, `turnLeft()` e `turnRight()` que você já tinha, é possível escrever um algoritmo para resolver **qualquer** labirinto. “Algoritmo” é uma palavra pomposa que significa apenas “um jeito de fazer algo”. É como uma fórmula ou uma receita.

Mais abaixo nas instruções, eu te dou o algoritmo já pronto para você resolver o labirinto. Mas eu quero que você tente descobrir sozinho primeiro, como um pequeno desafio de lógica. Se você souber se pode virar à esquerda, à direita ou avançar, como você resolve qualquer labirinto que eu te der?

Assim que você descobrir, ou desistir, desça para ver a resposta e o que você precisa escrever em código.

<hr style="border-top: 1px solid var(--color-gray-200); margin:40px 0"/>

### O Algoritmo

OK, foi muito pedir, então imagino que você tenha tido algumas ideias, mas não tenha chegado à solução completa. Aqui estão os passos que você precisa seguir:

- Se puder virar à esquerda, vire à esquerda e avance.
- Caso contrário, se puder avançar, avance.
- Caso contrário, se puder virar à direita, vire à direita e avance.
- Caso contrário, dê meia-volta.

Se você fizer isso, consegue resolver qualquer labirinto!

Escreva essas instruções em código. Divirta-se!
