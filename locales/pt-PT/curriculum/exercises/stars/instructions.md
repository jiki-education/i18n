---
title: "Estrelas"
description: "Constrói e desenha uma pirâmide de estrelas."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

Neste exercício, vais construir um gerador de padrões visuais que desenha linhas de estrelas.

A tua tarefa é criar uma função chamada `layoutStars` (organizar as estrelas) que recebe um parâmetro de entrada, `numRows`, que indica quantas linhas são necessárias, e depois desenha as várias linhas de estrelas.

A função deve:

1. Construir um array de strings: uma string por linha. Começar por baixo, pela linha mais comprida. Por exemplo, quando `numRows` é `3`, o array seria `["***", "**", "*"]`.
2. Usar a função `drawStars(rows)` e passar-lhe as tuas linhas; a função desenha as estrelas.

Se `numRows` for 0, o array deve estar vazio (`[]`) e nada é desenhado.

Se quiseres ver tudo em ação, podes correr `drawStars(["***", "**", "*"])` para veres as estrelas a serem desenhadas.

### O método push

Tal como no exercício anterior, vais precisar de construir o teu array com o método `.push(element)`. Neste exercício, só podes criar um novo array (`let something = []`) no teu código.

Diverte-te!
