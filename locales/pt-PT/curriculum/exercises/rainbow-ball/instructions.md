---
title: "Bola arco-íris"
description: "Cria uma bola que salta e pinta um rasto de arco-íris pelo ecrã."
en_md5: 501aa30e85d8fceb38890c72be4a0b87
---

O teu objetivo é criar uma bola que anda a saltar ao acaso pelo ecrã e deixa um rasto de arco-íris.

Deve ter um aspeto parecido com isto:

<img src="/static/images/exercise-assets/rainbow-ball/example.gif" alt="Bola arco-íris animada a saltar pelo ecrã e a deixar um rasto colorido" style="width: 100%; max-width: 200px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Neste exercício, tens a função `Math.randomInt(min, max)` (número inteiro aleatório), que devolve um número inteiro aleatório entre o `min` e o `max` que lhe deres.

Dedica alguns minutos a pensar em como podes resolver isto. Esta é a parte mais valiosa do exercício, por isso vai com calma e **escreve as tuas ideias antes de leres a fórmula abaixo.**

Quando já tiveres uma ideia da tua abordagem, continua a ler. Mas não continues a ler até teres dedicado algum tempo a pensar!

## A fórmula

Este projeto consiste em teres algumas variáveis responsáveis pela posição da bola, que aumentam ou diminuem pouco a pouco. Também tens outras variáveis que controlam **como** a bola se move e que mudam quando certas condições se verificam.

### Desenhar

- O primeiro círculo que desenhares deve estar no ponto `(5, 5)`.
- Todos os círculos devem ter um raio de `10`.
- A cor do círculo deve usar HSL, a começar com um matiz de `100` (verde), uma saturação de `80` (cores vivas) e uma luminosidade de `50` (brilho médio).

### Animar

- Para começar, em cada iteração deves mover a bola `2` para a direita e `1` para baixo.
- O matiz deve aumentar `1` de cada vez, até chegar ao máximo (`360`), e depois começar a diminuir novamente. A saturação e a luminosidade não precisam de mudar.

### Saltar

- Quando a bola chegar ao limite do ecrã, deve mudar de direção. (Vê as pistas se não conseguires perceber como fazer isto.)
- Para tornar as coisas mais divertidas, deves mudar de direção usando a função `Math.randomInt(min, max)`. Escolhe `min` (mínimo) e `max` (máximo) que deem o estilo de animação que queres.

## Para passares nas verificações

Demos-te muita liberdade neste exercício. Verificamos que:

- Os primeiros círculos estão corretos.
- Mais de 80% do ecrã fica pintado.

Os números que escolheres para isso ficam ao teu critério. Provavelmente, vais querer um bloco repeat que itere entre `500` e `1000` vezes.

## Vamos por partes...

O segredo deste exercício é fazeres uma coisa de cada vez:

1. Faz com que a bola mude de cor à medida que se move.
2. Faz com que ela salte quando chegar ao lado direito do ecrã.
3. Faz com que ela salte quando chegar ao fundo do ecrã.
4. Faz com que ela salte de forma aleatória.
