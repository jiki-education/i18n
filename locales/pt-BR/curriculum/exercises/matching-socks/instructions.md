---
title: "Combinando Meias"
description: "Encontre pares de meias espalhados em dois cestos de roupa."
en_md5: c58a4ca0800c19322e7e9a98b4634aad
---

Poucas coisas na vida irritam tanto quanto uma meia sem par que você não encontra de jeito nenhum. Então, um dia, você finalmente decide colocar ordem nessas meias!

Você pega todas as roupas limpas das gavetas e coloca em um cesto. Depois, sai procurando embaixo de cada móvel e atrás de cada almofada qualquer outra peça de roupa largada por aí, e coloca tudo em um segundo cesto, o das peças sujas.

Agora você tem dois cestos e quer verificar, meia por meia, se cada uma tem um par ou não.

Escreva uma função chamada `matchingSocks` (meias que combinam). Ela recebe duas entradas, o cesto de roupa limpa e o cesto de roupa suja, ambas como arrays de strings. Retorne um array com todos os pares de meias.

Por exemplo:

- Se o cesto de roupa limpa contém: `["left blue sock", "green sweater"]`
- E o cesto de roupa suja contém: `["blue shorts", "right blue sock", "left green sock"]`
- Você deve retornar `["blue socks"]`

As descrições seguem estas regras:

- Elas estão sempre em letras minúsculas.
- Elas sempre têm uma ou mais palavras separadas por espaços.
- Para as coisas que podem formar pares, elas sempre começam com `"left "` ou `"right "`

### Métodos

Este exercício tem vários métodos de string e de array que você pode usar para facilitar a sua vida. Confira todas as descrições abaixo para ver o que está na sua caixa de ferramentas para este Desafio.

### Bônus

Há muitas maneiras de resolver este exercício. Mas existe uma solução bem elegante com 29 linhas de código, então definimos essa como a meta. Dá para conseguir menos, mas o código tende a ficar menos legível conforme isso acontece, então achamos que por volta de 29 é o melhor nível.

Divirta-se!
