---
title: "Preparação de refeições"
description: "Descobre que ingredientes precisas de comprar para a tua receita."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

És o tipo de pessoa que gosta de dar um salto às lojas todos os dias para comprar os ingredientes de que precisas para o jantar. É uma boa desculpa para esticar as pernas e conversar com o lojista lá da zona.

Todos os dias escolhes uma receita, verificas o que há no frigorífico e apontas o que precisas de comprar.

Agora decidiste tornar a tua vida um pouco mais fácil: vais escrever um programa que faz o trabalho pesado por ti! Ele verifica o que está na tua lista, compara com o que está no frigorífico e devolve a diferença.

O teu trabalho é escrever uma função chamada `shoppingList(fridgeContents, recipeItems)` (lista de compras). Recebe dois parâmetros de entrada: o conteúdo do teu frigorífico como um array de strings, e os itens da receita, também como um array de strings. Deve devolver as coisas que precisas de comprar, como um array de strings.

Por exemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### O método push

Para resolveres o exercício, precisas de construir o teu array com o método `.push(element)`. Só podes criar um array novo no teu código. Vê o vídeo anterior outra vez se não tiveres a certeza do que fazer.

Também podes querer usar o método `includes` (vê abaixo para recordar).

Diverte-te!
