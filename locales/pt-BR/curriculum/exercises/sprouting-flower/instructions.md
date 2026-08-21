---
title: "Flor brotando"
description: "Use relações entre variáveis para animar uma flor crescendo da terra."
en_md5: acd8f364af4cfdc8f76ced2b17539bbb
---

Sua tarefa é criar uma flor que cresce ao longo de `60` iterações.

A animação deve ser parecida com isto.

<img src="/static/images/exercise-assets/sprouting-flower/frames.webp" alt="Quadros mostrando uma flor crescendo da terra ao longo de 60 iterações" style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

A chave deste exercício é estabelecer relações entre os diferentes elementos. Essa é uma habilidade essencial em programação.

**Antes de ler mais alguma coisa das instruções**, dedique alguns minutos a pensar conceitualmente em como você pode conseguir isso. Escreva numa folha de papel os passos que você acha que precisa seguir.

**Quando você tiver uma solução** de que goste (ou desistir), **role para baixo** para ver as instruções.

---

## Como resolver

O elemento fundamental aqui é o centro da flor. Todo o resto pode ser calculado a partir desse ponto central. Em cada iteração do laço, o ponto central deve subir `1` (antes de desenhar).

Aqui estão outras coisas que você precisa saber:

- O canto superior esquerdo da tela de desenho é `0,0`. O canto inferior direito é `100,100`.
- O raio da flor começa em `0`. Deve aumentar `0.4` em cada iteração (antes de desenhar).
- O raio do pistilo (a parte amarela do meio da flor) começa em `0`. Deve aumentar `0.1` em cada iteração (antes de desenhar).
- O caule deve começar no centro da flor e chegar ao chão.
- A largura do caule é 10% da altura do caule (ou seja, `stemHeight / 10` (altura do caule dividida por 10)).
- Tudo está centrado no eixo horizontal.
- As folhas ficam rentes ao caule de cada lado.
- As folhas ficam no meio do caule.
- O `radiusX` (raio horizontal) das folhas é 50% do raio da flor.
- O `radiusY` (raio vertical) das folhas é 20% do raio da flor.
- A cabeça da flor pode ser `"red"` ou `"pink"`, conforme o seu gosto. O pistilo (o centro da flor) deve ser `"yellow"`. A grama deve ser `"green"`. O fundo deve ser `"skyblue"`.

É **essencial** trabalhar em uma coisa de cada vez:

- Comece desenhando a flor cor-de-rosa e fazendo-a subir.
- Depois, faça com que cresça.
- Adicione o centro amarelo menor.
- Adicione o caule.
- Adicione a folha da esquerda.
- Adicione a folha da direita.

Use a barra de reprodução para percorrer o código e entender onde as coisas estão dando errado.

### Este é um exercício difícil

Este é um exercício desafiador. Faça as coisas com calma. Se você ficar mesmo travado, peça ajuda e lembre-se de nos dar muita informação sobre o que não está funcionando e por que você acha que isso acontece.

Use a barra de reprodução (a barra na parte inferior esquerda) para verificar o valor das suas variáveis se não tiver certeza do que está acontecendo. Clique no pequeno botão de alternância para ver informações sobre cada linha.

Lembre-se: é na dificuldade que se aprende. Sempre que você faz algo errado e resolve, você está se tornando desenvolvedor. Com o tempo, vai parecer fácil. Continue em frente.
