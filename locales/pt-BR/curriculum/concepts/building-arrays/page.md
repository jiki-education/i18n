---
title: "Construir arrays"
description: "Começar com um array vazio e usar `push` para adicionar elementos um de cada vez à medida que você percorre os dados."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Até agora, você tem trabalhado com arrays em que o valor é definido logo no início e fica fixo. Mas e se você quiser adicionar elementos a um array ao longo do tempo? Pois é, para isso, os arrays têm um método chamado `push` (adicionar ao fim).

O `push` tem uma entrada: aquilo que você quer adicionar ao fim do array. Neste caso, a gente quer adicionar a palavra `"Isaac"` ao fim de um array que já contém `"DJ"` e `"Bethany"`.

Para isso, o Jiki tira o array da caixa, prende `"Isaac"` ao fim da corrente e põe tudo de volta na caixa. Repare que, ao contrário do que acontecia antes com as strings, em que o Jiki criava uma string nova a cada vez, aqui ele está mesmo alterando o array.

Um padrão que você vai ver muitas vezes em programação é começar com um array vazio e construí-lo aos poucos. Imagine que a gente tem uma lista grande de nomes e quer percorrer ela. Sempre que encontrarmos um que seja mentor, adicionamos ele ao nosso array.

Este padrão de percorrer e adicionar é algo que você vai usar muitas vezes.
