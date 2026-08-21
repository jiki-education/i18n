---
title: "Conjectura de Collatz"
description: "Explore um famoso enigma matemático com sua própria função."
en_md5: e4f7ab61c163cdb7c2eb2b6541a2cedc
---

Uma noite, você encontrou por acaso um caderno antigo cheio de rabiscos enigmáticos, como se alguém andasse obcecado perseguindo uma ideia. Numa das páginas, se destacava uma única pergunta: **Será que todos os números conseguem chegar ao 1?** Estava ligada a algo chamado **Conjectura de Collatz**, um enigma que tem intrigado pensadores durante décadas.

As regras são enganadoramente simples:

1. Escolha um número.
2. Se for par, divida-o por 2.
3. Se for ímpar, multiplique-o por 3 e depois some 1.
4. Repita com o resultado, continuando indefinidamente.

Por exemplo, se você começar com 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

Contando a partir do segundo número (6), foram necessários 9 passos para chegar ao 1.

Crie uma função chamada `collatzSteps` (passos de Collatz) que recebe uma entrada, um número. Retorne **quantos passos** são necessários para chegar ao 1 a partir de qualquer número, seguindo as regras da Conjectura de Collatz.
