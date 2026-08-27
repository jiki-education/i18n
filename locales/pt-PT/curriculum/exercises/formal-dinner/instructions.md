---
title: "Jantar Formal"
description: "Descobre em que mesa está sentado um convidado a partir do mapa de lugares."
en_md5: 96fcee7c5e2237298b1a8e288278cf04
---

Estás de volta ao teu biscate como porteiro. É a noite a seguir à After Party, e há mais uma festa. Desta vez é um jantar formal, por isso esta noite és menos "homem musculado à porta" e mais "pessoa com uma prancheta e um colete bonito".

Definitivamente, não é o sítio para usar só o teu nome próprio. Na verdade, não é mesmo o sítio para usar o teu nome próprio. Aqui, toda a gente usa um título (_honorific_ em inglês), como Miss, Mr, Dr, etc., e o apelido.

Os organizadores entregaram-te o mapa de lugares em dois arrays separados. Uma contém os nomes completos dos convidados. A outra contém o nome da mesa onde cada convidado está sentado (mesas com nomes de árvores e flores). Tal como na After Party, os dois arrays estão alinhados: o convidado na posição 3 do primeiro array está sentado na mesa da posição 3 do segundo array.

Por isso, quando o Mr Pitt entra, tens de descobrir que se trata do "Brad Pitt" da tua lista e depois dizer-lhe em que mesa está sentado.

Escreve uma função chamada `tableFor` (que devolve a mesa onde um convidado está sentado). A função tem três parâmetros de entrada:

- O primeiro é o array dos nomes completos dos convidados, como strings
- O segundo é o array dos nomes das mesas, pela mesma ordem dos convidados
- O terceiro é o convidado que chega, formatado como um título seguido do apelido (por exemplo, "Mr Pitt")

Devolve o nome da mesa onde o convidado está sentado. Se o convidado não estiver no mapa de lugares, devolve a string `"No table found"` (aqui não há espertos!).

O título é sempre exatamente uma palavra, e tudo o que vem a seguir é o apelido do convidado. A maioria dos apelidos tem uma palavra, mas alguns apelidos pomposos têm duas.

No entanto, tem cuidado. Muitos apelidos parecem-se muito com outros apelidos.

### Métodos e propriedades de strings e arrays

Além da propriedade `.length` que aprendeste no último exercício, há quatro métodos que te podem ser úteis. Há muitas formas de resolver este exercício, mas estes métodos levam-te à solução mais curta possível.

`"...".split(substring)` divide uma string usando outra string. Por exemplo:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` captura uma parte de um array, começando no índice `start` e continuando até ao fim do array. Os elementos capturados são copiados para um NOVO array, que te é devolvido. Na prática, isto descarta os primeiros `start` elementos. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` junta os elementos de um array com a string fornecida. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` diz-te se uma string termina com outra string. Por exemplo:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
