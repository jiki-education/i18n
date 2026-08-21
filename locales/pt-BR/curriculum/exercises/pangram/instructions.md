---
title: "Pangrama"
description: "Verifique se uma frase contém todas as letras do alfabeto, não importa se maiúsculas ou minúsculas."
en_md5: 2f0271add2facf8e75ecb8afde53682e
---

Você chegou à parte 2 da série Pangrama. Lembre-se de que um pangrama é uma frase que usa todas as letras do alfabeto pelo menos uma vez.

Este exercício é uma versão mais complexa do exercício Pangrama anterior que você resolveu, porque ele também usa letras maiúsculas. Isso acrescenta uma complexidade surpreendente.

Crie uma função chamada `isPangram` (é um pangrama) que recebe uma frase como uma string e retorna um boolean que indica se ela é ou não um pangrama.

A gente deu para você o seu código anterior como ponto de partida.

### Funções auxiliares

Além da sua função auxiliar existente (aquela que sugerimos que você chamasse de `includes`), recomendamos que você crie duas novas funções auxiliares para te ajudar a resolver este exercício. As funções têm nomes convencionais, que recomendamos que você use:

1. `indexOf(haystack, needle)`: Uma função que calcula **onde** a agulha está no palheiro. Assim, em vez de retornar `true`/`false` como a função `includes`, ela retorna o **índice** da agulha. Por exemplo, `indexOf("Jeremy", "r")` retornaria `2` (lembre-se de que a gente conta a partir de 0).
2. `toLowerCase(someString)`: Uma função que recebe uma string e a retorna convertida para minúsculas. Por exemplo, `toLowerCase("JeReMy")` retornaria `"jeremy"`.

Divirta-se!
