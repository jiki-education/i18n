---
title: "Flor a brotar"
description: "Usa relações entre variáveis para animar uma flor a crescer da terra."
en_md5: acd8f364af4cfdc8f76ced2b17539bbb
---

A tua tarefa é criar uma flor que cresce ao longo de `60` iterações.

A animação deve ser parecida com isto.

<img src="/static/images/exercise-assets/sprouting-flower/frames.webp" alt="Fotogramas a mostrar uma flor a crescer da terra ao longo de 60 iterações" style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

A chave deste exercício é estabelecer relações entre os diferentes elementos. Esta é uma competência essencial em programação.

**Antes de leres mais alguma coisa das instruções**, dedica alguns minutos a pensar conceptualmente como podes conseguir isto. Escreve numa folha de papel os passos que achas que precisas de seguir.

**Quando tiveres uma solução** de que gostes (ou desistires), **faz scroll para baixo** para veres as instruções.

---

## Como resolver

O elemento fundamental aqui é o centro da flor. Tudo o resto pode ser calculado a partir desse ponto central. Em cada iteração do ciclo, o ponto central deve subir `1` (antes de desenhares).

Aqui estão outras coisas que precisas de saber:

- O canto superior esquerdo da tela de desenho é `0,0`. O canto inferior direito é `100,100`.
- O raio da flor começa em `0`. Deve aumentar `0.4` em cada iteração (antes de desenhares).
- O raio do pistilo (a parte amarela do meio da flor) começa em `0`. Deve aumentar `0.1` em cada iteração (antes de desenhares).
- O caule deve começar no centro da flor e chegar ao chão.
- A largura do caule é 10% da altura do caule (ou seja, `stemHeight / 10` (altura do caule a dividir por 10)).
- Tudo está centrado no eixo horizontal.
- As folhas ficam rentes ao caule de cada lado.
- As folhas ficam a meio do caule.
- O `radiusX` (raio horizontal) das folhas é 50% do raio da flor.
- O `radiusY` (raio vertical) das folhas é 20% do raio da flor.
- A cabeça da flor pode ser `"red"` ou `"pink"`, consoante o teu gosto. O pistilo (o centro da flor) deve ser `"yellow"`. A relva deve ser `"green"`. O fundo deve ser `"skyblue"`.

É **essencial** trabalhar numa coisa de cada vez:

- Começa por desenhar a flor cor-de-rosa e pô-la a subir.
- Depois, faz com que cresça.
- Acrescenta o centro amarelo mais pequeno.
- Acrescenta o caule.
- Acrescenta a folha da esquerda.
- Acrescenta a folha da direita.

Usa a barra de reprodução para percorrer o código e perceber onde as coisas estão a correr mal.

### Este é um exercício difícil

Este é um exercício desafiante. Faz as coisas com calma. Se ficares mesmo preso, pede ajuda e lembra-te de nos dar muita informação sobre o que não está a funcionar e porque achas que isso acontece.

Usa a barra de reprodução (a barra na parte inferior esquerda) para verificares o valor das tuas variáveis se não tiveres a certeza do que está a acontecer. Clica no pequeno botão de alternância para veres informações sobre cada linha.

Lembra-te: é na dificuldade que se aprende. Sempre que fazes algo mal e o resolves, estás a tornar-te programador. Com o tempo, vai parecer fácil. Continua em frente.
