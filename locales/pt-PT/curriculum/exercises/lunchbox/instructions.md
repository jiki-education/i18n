---
title: "Lancheira"
description: "Arruma o maior número possível de itens numa lancheira com capacidade limitada."
en_md5: af9957974ff71f16820079737f887b0e
---

Quando andava na escola, arrumava a lancheira todos os dias. A minha mãe deixava-me os itens à minha frente (arrumados do maior para o menor) e eu tentava pôr o máximo possível na lancheira, mas, claro, só cabia nela uma certa quantidade. O que não coubesse na lancheira, tinha de o pôr na mochila e de andar com ele o dia inteiro, em vez de o deixar no cacifo.

Neste exercício, o teu trabalho é criar um algoritmo que determine o que eu consigo pôr na lancheira e o que tenho de pôr na mochila.

O teu trabalho é escrever uma função chamada `packLunch(items, capacity)` (arrumar a lancheira). A função recebe dois parâmetros de entrada: o array de itens (do maior para o menor) e o tamanho da lancheira `capacity` (capacidade), um número.

O array de itens é um array aninhado: cada item também é um array com dois elementos, o nome do item e o tamanho do item. Os itens vão sempre do maior para o menor. Por exemplo, o array de itens pode ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

A lancheira tem uma capacidade máxima. Tens de descobrir que itens podem ir para a lancheira. Arruma o máximo de itens que conseguires. Tudo o resto deve ir para a mochila.

A tua função deve devolver um array que contém dois elementos. O primeiro elemento é um array com os itens para a lancheira, e o segundo é o array com os itens para a mochila. Os dois arrays devem estar ordenados do menor para o maior.

Por exemplo, para o array acima, com uma capacidade de 20, espera-se que devolvas o seguinte:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos úteis

Tal como em todos os exercícios desta seção, vais querer usar o método `.push(element)` para construir os teus arrays.

Também tens um novo método chamado `[...].toReversed()`, que cria uma cópia de um array com todos os itens pela ordem inversa. Por exemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Não tens de o usar, mas pode dar jeito.

Diverte-te!
