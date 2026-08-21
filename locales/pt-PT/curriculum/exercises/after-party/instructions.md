---
title: "After Party"
description: "Consulta quantos acompanhantes uma celebridade pode trazer, usando duas listas alinhadas entre si."
en_md5: c31c0988af324530b986262f47d9a745
---

Estamos de volta a fazer de porteiro. Mas, desta vez, estamos a lidar com celebridades de primeira linha no After Party.

Quando estas pessoas aparecem na tua festa, esperam que as conheças só pelo primeiro nome. O Brad Pitt não vai perder tempo a dizer-te o apelido. Vai só dizer "Brad" e depois olha para ti como se fosses tu a pessoa esquisita.

Hoje à noite, tens duas listas na tua prancheta. A primeira é `names`, os nomes completos de todos os convidados. A segunda é `plusOnes`, quantos acompanhantes cada um desses convidados pode trazer consigo (os seus "acompanhantes" (_plus-ones_ em inglês)). As duas listas foram escritas em conjunto, entrada por entrada e pela mesma ordem, para ficarem alinhadas entre si. Por exemplo, a terceira entrada da lista `names` corresponde à mesma pessoa que a terceira entrada da lista `plusOnes`.

Escreve uma função chamada `plusOnesFor` (o número de acompanhantes de uma pessoa). A função tem três parâmetros de entrada: a lista `names`, a lista `plusOnes` e o **primeiro nome** de quem está à tua frente neste momento. Deves devolver o número de acompanhantes que essa pessoa pode trazer.

Mas tem cuidado. Está a formar-se uma fila, e estas pessoas não fazem fila em silêncio. "Brad" significa Brad Pitt, não Bradley Cooper. E um ou dois deles são tão famosos que já nem usam apelido.

Há convidados que, mesmo estando convidados, não podem trazer ninguém consigo, por isso `0` é uma resposta perfeitamente válida para um nome que está na lista. Alguém que não está de todo na lista é uma questão completamente diferente e, para essa pessoa, deves devolver a string `"Not on the list!"`, exatamente como está escrita.

### Métodos e propriedades de arrays

Tal como as strings, os arrays também têm métodos e propriedades. Neste exercício, podes querer usar a propriedade `.length`. Funciona exatamente da mesma forma que a versão para strings, só que agora diz-te quantos elementos existem no array, em vez de quantas letras existem na string.

Por exemplo:

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

Diverte-te!
