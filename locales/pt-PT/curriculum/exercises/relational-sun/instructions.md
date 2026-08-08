---
title: "Sol relacional"
description: "Posiciona um sol em que tudo é calculado a partir de variáveis."
en_md5: d8de4704a25f3733ddaaea16f0232005
---

Neste exercício, a tua tarefa é posicionar um sol no canto superior direito do céu, usando aritmética e variáveis. A restrição principal é que a borda do sol deve estar sempre a uma **distância** fixa da borda da tela, seja qual for o tamanho do sol.

Já predefinimos quatro variáveis (_variables_ em inglês) no topo do ficheiro:

- `canvasSize` (tamanho da tela): o tamanho da tela, que é `100`.
- `color` (cor): definida como `"yellow"`.
- `gap` (distância): a distância a que a borda do sol fica das bordas superior e direita da tela.
- `radius` (raio): o raio do sol.

### Um processo em dois passos

Para resolver este exercício, faz duas coisas

#### 1. Define variáveis derivadas

Define as variáveis `sunX` (x do sol) e `sunY` (y do sol), que usam `gap`, `radius` e `canvasSize` para colocar o centro do sol no canto superior direito.

#### 2. Desenha o círculo

Desenha um círculo usando `sunX`, `sunY`, `radius` e `color`.

## Flexibilidade

Por predefinição, o `gap` está definido como 10 e o `radius` como 15. Resolve primeiro o exercício com esses valores, para poderes usar o fundo para alinhar tudo. Quando o teu código estiver correto, vais ver o círculo aparecer no sítio certo da página.

No entanto, para passares o exercício não podes limitar-te a «fixar» o valor no código (ou seja, escrevê-lo como um único número): `sunX` e `sunY` têm de ser cálculos que envolvem outras variáveis.

Depois de passares o exercício, carrega em «Arrumar o código» e experimenta alterar os valores de `gap` e `radius` no topo do ficheiro. Volta a correr o teu código para veres o sol crescer ou deslocar-se, mantendo-se sempre no canto.

Quando terminares, podes carregar em «Painel», no canto superior direito, para continuares como habitualmente.
