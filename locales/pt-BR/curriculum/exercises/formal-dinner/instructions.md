---
title: "Jantar Formal"
description: "Descubra em que mesa está sentado um convidado a partir do mapa de lugares."
en_md5: 96fcee7c5e2237298b1a8e288278cf04
---

Você está de volta ao seu bico como segurança. É a noite depois da After Party, e tem mais uma festa. Desta vez é um jantar formal, então hoje à noite você é menos "homem musculoso na porta" e mais "pessoa com uma prancheta e um colete bonito".

Definitivamente, não é o lugar para usar só o seu primeiro nome. Na verdade, não é mesmo o lugar para usar o seu primeiro nome. Aqui, todo mundo usa um título (_honorific_ em inglês), como Miss, Mr, Dr, etc., e o sobrenome.

Os organizadores te entregaram o mapa de lugares em dois arrays separados. Uma contém os nomes completos dos convidados. A outra contém o nome da mesa onde cada convidado está sentado (mesas com nomes de árvores e flores). Assim como na After Party, os dois arrays estão alinhados: o convidado na posição 3 do primeiro array está sentado na mesa da posição 3 do segundo array.

Então, quando o Mr Pitt entra, você precisa descobrir que se trata do "Brad Pitt" da sua lista e depois dizer para ele em que mesa está sentado.

Escreva uma função chamada `tableFor` (que retorna a mesa onde um convidado está sentado). A função tem três entradas:

- A primeira é o array dos nomes completos dos convidados, como strings
- A segunda é o array dos nomes das mesas, na mesma ordem dos convidados
- A terceira é o convidado que chega, formatado como um título seguido do sobrenome (por exemplo, "Mr Pitt")

Retorne o nome da mesa onde o convidado está sentado. Se o convidado não estiver no mapa de lugares, retorne a string `"No table found"` (aqui não tem espertinhos!).

O título é sempre exatamente uma palavra, e tudo o que vem depois é o sobrenome do convidado. A maioria dos sobrenomes tem uma palavra, mas alguns sobrenomes pomposos têm duas.

No entanto, tome cuidado. Muitos sobrenomes se parecem muito com outros sobrenomes.

### Métodos e propriedades de strings e arrays

Além da propriedade `.length` que você aprendeu no último exercício, há quatro métodos que podem te ser úteis. Há muitas formas de resolver este exercício, mas estes métodos te levam à solução mais curta possível.

`"...".split(substring)` divide uma string usando outra string. Por exemplo:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` captura uma parte de um array, começando no índice `start` e continuando até o fim do array. Os elementos capturados são copiados para um NOVO array, que é retornado para você. Na prática, isso descarta os primeiros `start` elementos. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` junta os elementos de um array com a string fornecida. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` te diz se uma string termina com outra string. Por exemplo:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
