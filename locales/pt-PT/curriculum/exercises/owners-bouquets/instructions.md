---
title: Os ramos do dono
description: Planta flores em diferentes disposições do jardim.
en_md5: bdb2a772a6549db0226a6c17326f20c6
---

Bem-vindo ao teu segundo exercício com cenários.

Estamos de volta com a nossa máquina de jardinagem automática. Até agora, plantávamos sempre 9 flores, mas as coisas estão a mudar. O nosso robô precisa de conseguir plantar o número de flores que o dono da casa lhe indicar.

Para isso, temos uma função chamada `askNumberOfFlowers()` (pergunta o número de flores). Quando a usamos, perguntamos ao dono da casa quantas flores plantar e a função devolve um número com a resposta. Se a função devolver 3, temos de plantar 3 flores. Se devolver 8, temos de plantar 8 flores.

Temos instruções rigorosas para manter o jardim arranjado, por isso precisamos de plantar as flores de forma uniforme ao longo do jardim. Se houver 3 flores, temos de as plantar nas posições 25, 50 e 75. Se houver 4 flores, plantamo-las nas posições 20, 40, 60 e 80, e assim por diante. (Como habitualmente, o jardim tem 100 unidades de largura.)

### Cenários

Tal como no exercício do golfe que acabaste de resolver, do lado esquerdo vais ver quatro pontos cinzentos para os quatro cenários diferentes. **Clicar em cada ponto** mostra-te um cenário diferente, mas desta vez é a função `askNumberOfFlowers()` que vai devolver um número diferente de cada vez.

O teu trabalho é escrever um único programa que funcione para todos os valores possíveis que `askNumberOfFlowers()` possa devolver.

Boa sorte!
