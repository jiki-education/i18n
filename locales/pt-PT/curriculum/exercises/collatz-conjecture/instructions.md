---
title: "Conjetura de Collatz"
description: "Explora um famoso enigma matemático com a tua própria função."
en_md5: e4f7ab61c163cdb7c2eb2b6541a2cedc
---

Uma noite, encontraste por acaso um caderno antigo cheio de rabiscos enigmáticos, como se alguém andasse obcecado a perseguir uma ideia. Numa das páginas, destacava-se uma única pergunta: **Será que todos os números conseguem chegar ao 1?** Estava ligada a algo chamado **Conjetura de Collatz**, um enigma que tem intrigado pensadores durante décadas.

As regras são enganadoramente simples:

1. Escolhe um número.
2. Se for par, divide-o por 2.
3. Se for ímpar, multiplica-o por 3 e depois soma 1.
4. Repete com o resultado, continuando indefinidamente.

Por exemplo, se começares com 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

A contar do segundo número (6), foram precisos 9 passos para chegar ao 1.

Cria uma função chamada `collatzSteps` (passos de Collatz) que recebe um parâmetro de entrada, um número. Devolve **quantos passos** são precisos para chegar ao 1 a partir de qualquer número, seguindo as regras da Conjetura de Collatz.
