---
title: "Sons de gotas de chuva"
description: "Transforma números em sons de gotas de chuva: Pling, Plang e Plong."
en_md5: 93b85e63b3d48e4e7f6d249592b367a1
---

O Raindrops é uma versão do clássico desafio FizzBuzz, usado em entrevistas de programação desde sempre.

A tua tarefa é converter um número nos sons de gotas de chuva correspondentes.

Para isso, vemos por quais números é que um número é divisível (por exemplo, o número 10 é divisível por 1, 2, 5 e 10. O número 12 é divisível por 1, 2, 3, 4, 6 e 12).

Se um número:

- for divisível por 3, acrescenta "Pling" ao resultado.
- for divisível por 5, acrescenta "Plang" ao resultado.
- for divisível por 7, acrescenta "Plong" ao resultado.
- não for divisível por 3, 5 ou 7, o resultado deve ser o número como string.

Precisas de criar uma função chamada `raindrops(num)` (gotas de chuva) que recebe o número como parâmetro de entrada e devolve os sons de gotas de chuva correspondentes.

Constrói a string resultante usando concatenação (`+`) ou uma _template string_ (_cadeia de caracteres de modelo_).

### Exemplos

- `raindrops(28)` devolve "Plong" porque 28 é divisível por 7, mas não por 3 ou 5.
- `raindrops(30)` devolve "PlingPlang" porque 30 é divisível por 3 e 5, mas não por 7.
- `raindrops(34)` devolve "34" porque 34 não é divisível por 3, 5 ou 7.
