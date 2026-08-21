---
title: "Sol relacional"
description: "Posicione um sol em que tudo é calculado a partir de variáveis."
en_md5: d8de4704a25f3733ddaaea16f0232005
---

Neste exercício, a sua tarefa é posicionar um sol no canto superior direito do céu, usando aritmética e variáveis. A restrição principal é que a borda do sol deve estar sempre a uma **distância** fixa da borda da tela, seja qual for o tamanho do sol.

Já definimos quatro variáveis (_variables_ em inglês) no topo do arquivo:

- `canvasSize` (tamanho da tela): o tamanho da tela, que é `100`.
- `color` (cor): definida como `"yellow"`.
- `gap` (distância): a distância a que a borda do sol fica das bordas superior e direita da tela.
- `radius` (raio): o raio do sol.

### Um processo em dois passos

Para resolver este exercício, faça duas coisas

#### 1. Defina variáveis derivadas

Defina as variáveis `sunX` (x do sol) e `sunY` (y do sol), que usam `gap`, `radius` e `canvasSize` para colocar o centro do sol no canto superior direito.

#### 2. Desenhe o círculo

Desenhe um círculo usando `sunX`, `sunY`, `radius` e `color`.

## Flexibilidade

Por padrão, o `gap` está definido como 10 e o `radius` como 15. Resolva primeiro o exercício com esses valores, para poder usar o fundo para alinhar tudo. Quando o seu código estiver correto, você vai ver o círculo aparecer no lugar certo da página.

No entanto, para passar no exercício você não pode simplesmente “fixar” o valor no código (ou seja, escrevê-lo como um único número): `sunX` e `sunY` têm que ser cálculos que envolvem outras variáveis.

Depois de passar no exercício, clique em “Organizar código” e experimente alterar os valores de `gap` e `radius` no topo do arquivo. Rode o seu código de novo para ver o sol crescer ou se deslocar, mantendo-se sempre no canto.

Quando você terminar, pode clicar em “Painel”, no canto superior direito, para continuar como de costume.
