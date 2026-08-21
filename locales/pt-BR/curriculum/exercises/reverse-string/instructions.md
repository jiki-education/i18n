---
title: "Inverter uma string"
description: "Vire um pedaço de texto ao contrário."
en_md5: 9d47faf87b2864284ed64ce1300073ea
---

Inverter strings (ler elas da direita para a esquerda e não da esquerda para a direita) é uma tarefa surpreendentemente comum em programação.

Por exemplo, em bioinformática, inverter a sequência de strings de DNA ou RNA é muitas vezes importante para várias análises, como encontrar cadeias complementares ou identificar sequências palindrômicas.

A sua tarefa é criar uma função chamada `reverse` (inverter), que recebe uma string como entrada e retorna a versão invertida.

Exemplos:

- Transforma "stressed" em "desserts"
- Transforma "strops" em "sports"
- Transforma "racecar" em "racecar" (um palíndromo)

### Aqueles dois últimos cenários...

Os dois últimos cenários parecem estranhos, não acha? O que está acontecendo?

Acontece que muitos emojis são formados por outros emojis ligados entre si com espaços invisíveis (de largura zero).

O emoji da família (👩‍👩‍👧‍👦) é formado por duas mulheres e duas crianças. Quando você o inverte, consegue ver os caracteres individuais (👦‍👧‍👩‍👩).

O outro é um arco-íris e uma bandeira (🌈‍️🏳). Quando você inverte a ordem para obter primeiro a bandeira e depois o arco-íris, ele se transforma numa bandeira arco-íris (🏳️‍🌈️)!

Se você construir o resultado um caractere de cada vez, estes casos devem funcionar sem problemas. Se, em vez disso, tentar um truque mais esperto, você pode reparar que os emojis se desfazem.
