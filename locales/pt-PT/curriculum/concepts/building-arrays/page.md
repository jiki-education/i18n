---
title: "Construir arrays"
description: "Começar com um array vazio e usar `push` para adicionar elementos um de cada vez à medida que percorres os dados."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Até agora, tens trabalhado com arrays em que o valor é definido logo no início e fica fixo. Mas e se quiseres adicionar elementos a um array ao longo do tempo? Pois bem, para isso, os arrays têm um método chamado `push` (adicionar ao fim).

O `push` tem um parâmetro de entrada: aquilo que queres adicionar ao fim do array. Neste caso, queremos adicionar a palavra `"Isaac"` ao fim de um array que já contém `"DJ"` e `"Bethany"`.

Para isso, o Jiki tira o array da caixa, prende `"Isaac"` ao fim da corrente e volta a pôr tudo na caixa. Repara que, ao contrário do que acontecia antes com as strings, em que o Jiki criava uma string nova de cada vez, aqui ele está mesmo a alterar o array.

Um padrão que vais ver muitas vezes em programação é começar com um array vazio e construí-lo aos poucos. Imagina que temos uma lista grande de nomes e queremos percorrê-la. Sempre que encontrarmos um que seja mentor, adicionamo-lo ao nosso array.

Este padrão de percorrer e adicionar é algo que vais usar muitas vezes.
