---
title: "After Party"
description: "Consulte quantos acompanhantes uma celebridade pode levar, usando dois arrays alinhados entre si."
en_md5: 622d23b4488d6bc76957579a7a5e8993
---

Estamos de volta fazendo o papel de segurança. Mas, desta vez, estamos lidando com celebridades de primeira linha no After Party.

Quando essas pessoas aparecem na sua festa, elas esperam que você as conheça só pelo primeiro nome. O Brad Pitt não vai perder tempo dizendo o sobrenome para você. Ele vai só dizer “Brad” e depois olhar para você como se a pessoa estranha fosse você.

Hoje à noite, você tem duas listas na sua prancheta. A primeira é `names`, os nomes completos de todos os convidados. A segunda é `plusOnes`, quantos acompanhantes cada um desses convidados pode levar junto (os “acompanhantes” deles (_plus-ones_ em inglês)). As duas listas foram escritas juntas, entrada por entrada e na mesma ordem, para ficarem alinhadas entre si. Por exemplo, a terceira entrada do array `names` corresponde à mesma pessoa que a terceira entrada do array `plusOnes`.

Escreva uma função chamada `plusOnesFor` (o número de acompanhantes de uma pessoa). A função tem três entradas: o array `names`, o array `plusOnes` e o **primeiro nome** de quem está na sua frente neste momento. Você deve retornar o número de acompanhantes que essa pessoa pode levar.

Mas tome cuidado. Está se formando uma fila, e essas pessoas não esperam na fila caladas. “Brad” significa Brad Pitt, não Bradley Cooper. E um ou dois deles são tão famosos que nem usam mais sobrenome.

Há convidados que, mesmo tendo sido convidados, não podem levar ninguém junto, então `0` é uma resposta perfeitamente válida para um nome que está na lista. Alguém que não está na lista de jeito nenhum é uma questão completamente diferente e, para essa pessoa, você deve retornar a string `"Not on the list!"`, exatamente como está escrita.

### Métodos e propriedades de arrays

Assim como as strings, os arrays também têm métodos e propriedades. Neste exercício, você pode querer usar a propriedade `.length`. Ela funciona exatamente da mesma forma que a versão para strings, só que agora ela te diz quantos elementos existem no array, em vez de quantas letras existem na string.

Por exemplo:

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

Divirta-se!
