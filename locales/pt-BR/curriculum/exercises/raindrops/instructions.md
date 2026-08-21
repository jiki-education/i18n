---
title: "Sons de gotas de chuva"
description: "Transforme números em sons de gotas de chuva: Pling, Plang e Plong."
en_md5: 93b85e63b3d48e4e7f6d249592b367a1
---

O Raindrops é uma versão do clássico desafio FizzBuzz, usado em entrevistas de programação desde sempre.

A sua tarefa é converter um número nos sons de gotas de chuva correspondentes.

Para isso, a gente vê por quais números um número é divisível (por exemplo, o número 10 é divisível por 1, 2, 5 e 10. O número 12 é divisível por 1, 2, 3, 4, 6 e 12).

Se um número:

- for divisível por 3, acrescente "Pling" ao resultado.
- for divisível por 5, acrescente "Plang" ao resultado.
- for divisível por 7, acrescente "Plong" ao resultado.
- não for divisível por 3, 5 ou 7, o resultado deve ser o número como string.

Você precisa criar uma função chamada `raindrops(num)` (gotas de chuva) que recebe o número como entrada e retorna os sons de gotas de chuva correspondentes.

Construa a string resultante usando concatenação (`+`) ou uma _template string_ (_string de modelo_).

### Exemplos

- `raindrops(28)` retorna "Plong" porque 28 é divisível por 7, mas não por 3 ou 5.
- `raindrops(30)` retorna "PlingPlang" porque 30 é divisível por 3 e 5, mas não por 7.
- `raindrops(34)` retorna "34" porque 34 não é divisível por 3, 5 ou 7.
