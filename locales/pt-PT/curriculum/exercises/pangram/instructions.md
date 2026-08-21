---
title: "Pangrama"
description: "Verifica se uma frase contém todas as letras do alfabeto, independentemente de maiúsculas e minúsculas."
en_md5: 2f0271add2facf8e75ecb8afde53682e
---

Chegaste à parte 2 da série Pangrama. Lembra-te de que um pangrama é uma frase que usa todas as letras do alfabeto pelo menos uma vez.

Este exercício é uma versão mais complexa do exercício Pangrama anterior que resolveste, porque também usa letras maiúsculas. Isso acrescenta uma complexidade surpreendente.

Cria uma função chamada `isPangram` (é um pangrama) que recebe uma frase como uma string e devolve um boolean que indica se é ou não um pangrama.

Demos-te o teu código anterior como ponto de partida.

### Funções auxiliares

Além da tua função auxiliar existente (a que te sugerimos que chamasses `includes`), recomendamos-te que cries duas novas funções auxiliares para te ajudar a resolver este exercício. As funções têm nomes convencionais, que te recomendamos que uses:

1. `indexOf(haystack, needle)`: Uma função que calcula **onde** está a agulha no palheiro. Assim, em vez de devolver `true`/`false` como a função `includes`, devolve o **índice** da agulha. Por exemplo, `indexOf("Jeremy", "r")` devolveria `2` (lembra-te de que contamos a partir de 0).
2. `toLowerCase(someString)`: Uma função que recebe uma string e a devolve convertida para minúsculas. Por exemplo, `toLowerCase("JeReMy")` devolveria `"jeremy"`.

Diverte-te!
