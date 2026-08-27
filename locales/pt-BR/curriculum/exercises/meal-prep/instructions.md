---
title: "Preparo de Refeições"
description: "Descubra quais ingredientes você precisa comprar para a sua receita."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Você é o tipo de pessoa que gosta de dar um pulinho no mercado todo dia para comprar os ingredientes do jantar. É uma boa desculpa para esticar as pernas e bater um papo com o dono da vendinha do bairro.

Todo dia você escolhe uma receita, confere o que tem na geladeira e anota o que precisa comprar.

Agora você decidiu facilitar a sua vida escrevendo um programa que faz o trabalho pesado por você! Ele confere o que está na sua lista, compara com o que tem na geladeira e mostra a diferença.

Seu trabalho é escrever uma função chamada `shoppingList(fridgeContents, recipeItems)` (lista de compras). Ela recebe duas entradas: o conteúdo da sua geladeira, como um array de strings, e os itens da receita, também como um array de strings. Ela deve retornar as coisas que você precisa comprar, como um array de strings.

Por exemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### O método push

Para resolver o exercício, você precisa montar seu array usando o método `.push(element)`. Você só pode criar um array novo no seu código. Assista de novo ao vídeo anterior se não tiver certeza do que fazer.

Você também pode querer usar o método `includes` (veja abaixo para relembrar).

Divirta-se!
