---
title: "Estrelas"
description: "Construa e desenhe uma pirâmide de estrelas."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

Neste exercício, você vai construir um gerador de padrões visuais que desenha fileiras de estrelas.

Seu trabalho é criar uma função chamada `layoutStars` (dispor as estrelas), que recebe uma entrada, `numRows`, que especifica quantas fileiras são necessárias, e então desenha as várias fileiras de estrelas.

A função deve:

1. Construir um array de strings: uma string por fileira. Comece de baixo, com a fileira mais longa primeiro. Por exemplo, quando `numRows` for `3`, esse array seria `["***", "**", "*"]`.
2. Usar a função `drawStars(rows)`, passando as suas fileiras, e ela vai desenhar as estrelas.

Se `numRows` for 0, o array deve ficar vazio (`[]`) e nada é desenhado.

Se quiser ver tudo em ação, você pode rodar `drawStars(["***", "**", "*"])` para ver as estrelas sendo desenhadas.

### O método push

Como no exercício anterior, você vai precisar montar o seu array usando o método `.push(element)`. Neste exercício, você só pode criar um array novo (`let something = []`) no seu código.

Divirta-se!
