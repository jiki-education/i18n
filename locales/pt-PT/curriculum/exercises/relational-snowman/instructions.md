---
title: "Boneco de neve relacional"
description: "Reconstrói o teu boneco de neve para que todos os tamanhos sejam calculados a partir de uma única variável."
en_md5: 1753f8d873e9a5b58885cc1daee5ea5d
---

Neste exercício, vamos construir outro boneco de neve. Tal como no exercício anterior, queremos que tudo possa ser calculado a partir de uma única variável `size` (tamanho), usando aritmética.

Consoante o valor de `size` que escolheres, o boneco de neve deve crescer.

<img
  src="/static/images/exercise-assets/relational-snowman/sizes.webp"
  alt="Boneco de neve nos tamanhos 1 a 5"
  style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>

### Como funciona

- O canto superior esquerdo da área de desenho é `0,0`. O canto inferior direito é `100,100`.
- Tens uma variável já definida para o centro da imagem, `snowmanX` (coordenada horizontal do boneco de neve), e uma variável `size` que podes alterar de `1` a `5` para o boneco de neve crescer.
- Precisas de calcular todas as outras variáveis com expressões aritméticas.
- O raio da cabeça é `size * 2`, o raio do corpo é `size * 3` e o raio da base é `size * 4`.
- Os círculos devem tocar uns nos outros: o corpo fica mesmo por cima da base e a cabeça fica mesmo por cima do corpo. (O nosso boneco de neve fica um pouco mais instável do que nos exercícios anteriores: cada bola de neve está pousada exatamente sobre a bola que está por baixo, sem se fundirem umas com as outras. Deve estar mesmo um dia gelado!)
- A parte de baixo do círculo da base fica a `size` de distância do fundo.
- Precisas de calcular os centros das três bolas de neve.

### Variáveis

A tua tarefa é definir estas variáveis de acordo com as instruções acima.

- `headRadius` (raio da cabeça): calcula a partir de `size`
- `bodyRadius` (raio do corpo): calcula a partir de `size`
- `baseRadius` (raio da base): calcula a partir de `size`
- `baseY` (coordenada vertical da base): calcula a partir de `size` e de `baseRadius` (a base assenta no chão)
- `bodyY` (coordenada vertical do corpo): calcula a partir de `baseY`, `baseRadius` e `bodyRadius`
- `headY` (coordenada vertical da cabeça): calcula a partir de `bodyY`, `bodyRadius` e `headRadius`

### Brinca com o tamanho

Podes alterar o tamanho de `1` a `5` e o boneco de neve deve crescer. Lembra-te de carregar em "Correr código" depois de o alterares.
