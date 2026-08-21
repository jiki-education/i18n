---
title: "Bola arco-íris"
description: "Crie uma bola que salta e pinta um rastro de arco-íris pela tela."
en_md5: 501aa30e85d8fceb38890c72be4a0b87
---

Seu objetivo é criar uma bola que fica saltando ao acaso pela tela e deixa um rastro de arco-íris.

Deve ter um aspecto parecido com isto:

<img src="/static/images/exercise-assets/rainbow-ball/example.gif" alt="Bola arco-íris animada saltando pela tela e deixando um rastro colorido" style="width: 100%; max-width: 200px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Neste exercício, você tem a função `Math.randomInt(min, max)` (número inteiro aleatório), que retorna um número inteiro aleatório entre o `min` e o `max` que você der para ela.

Dedique alguns minutos a pensar em como você pode resolver isso. Esta é a parte mais valiosa do exercício, então vá com calma e **escreva suas ideias antes de ler a fórmula abaixo.**

Quando você já tiver uma ideia da sua abordagem, continue lendo. Mas não continue lendo até ter dedicado algum tempo a pensar!

## A fórmula

Este projeto consiste em você ter algumas variáveis responsáveis pela posição da bola, que aumentam ou diminuem pouco a pouco. Você também tem outras variáveis que controlam **como** a bola se move e que mudam quando certas condições se verificam.

### Desenhar

- O primeiro círculo que você desenhar deve estar no ponto `(5, 5)`.
- Todos os círculos devem ter um raio de `10`.
- A cor do círculo deve usar HSL, começando com um matiz de `100` (verde), uma saturação de `80` (cores vivas) e uma luminosidade de `50` (brilho médio).

### Animar

- Para começar, em cada iteração você deve mover a bola `2` para a direita e `1` para baixo.
- O matiz deve aumentar `1` de cada vez, até chegar ao máximo (`360`), e depois começar a diminuir novamente. A saturação e a luminosidade não precisam mudar.

### Saltar

- Quando a bola chegar ao limite da tela, deve mudar de direção. (Veja as pistas se você não conseguir entender como fazer isso.)
- Para tornar as coisas mais divertidas, você deve mudar de direção usando a função `Math.randomInt(min, max)`. Escolha `min` (mínimo) e `max` (máximo) que deem o estilo de animação que você quer.

## Para passar nas verificações

Demos muita liberdade para você neste exercício. Verificamos que:

- Os primeiros círculos estão corretos.
- Mais de 80% da tela fica pintada.

Os números que você escolher para isso ficam a seu critério. Provavelmente, você vai querer um bloco repeat que itere entre `500` e `1000` vezes.

## Vamos por partes...

O segredo deste exercício é você fazer uma coisa de cada vez:

1. Faça com que a bola mude de cor à medida que se move.
2. Faça com que ela salte quando chegar ao lado direito da tela.
3. Faça com que ela salte quando chegar ao fundo da tela.
4. Faça com que ela salte de forma aleatória.
