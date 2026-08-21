---
title: "Inverter uma string"
description: "Vira um pedaço de texto ao contrário."
en_md5: 9d47faf87b2864284ed64ce1300073ea
---

Inverter strings (lê-las da direita para a esquerda e não da esquerda para a direita) é uma tarefa surpreendentemente comum em programação.

Por exemplo, em bioinformática, inverter a sequência de strings de ADN ou ARN é muitas vezes importante para várias análises, como encontrar cadeias complementares ou identificar sequências palindrómicas.

A tua tarefa é criar uma função chamada `reverse` (inverter), que recebe uma string como parâmetro de entrada e devolve a versão invertida.

Exemplos:

- Transforma "stressed" em "desserts"
- Transforma "strops" em "sports"
- Transforma "racecar" em "racecar" (um palíndromo)

### Aqueles dois últimos cenários...

Os dois últimos cenários parecem estranhos, não te parece? O que se passa?

Acontece que muitos emojis são formados por outros emojis ligados entre si com espaços invisíveis (de largura zero).

O emoji da família (👩‍👩‍👧‍👦) é formado por duas mulheres e duas crianças. Quando o invertes, consegues ver os carateres individuais (👦‍👧‍👩‍👩).

O outro é um arco-íris e uma bandeira (🌈‍️🏳). Quando invertes a ordem para obter primeiro a bandeira e depois o arco-íris, transforma-se numa bandeira arco-íris (🏳️‍🌈️)!

Se construíres o resultado um caráter de cada vez, estes casos devem funcionar sem problemas. Se, em vez disso, tentares um truque mais esperto, podes reparar que os emojis se desfazem.
