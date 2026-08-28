---
title: "Lancheira"
description: "Coloque o máximo de itens possível em uma lancheira de tamanho limitado."
en_md5: 0b9c26e60261ec4da42ae367a9102359
---

Quando era criança, eu arrumava minha lancheira todos os dias para a escola. Minha mãe deixava os itens separados para mim (organizados do maior para o menor) e eu tentava encaixar o máximo possível na lancheira, mas é claro que só cabia uma certa quantidade. Tudo o que não cabia, eu tinha que colocar na mochila e carregar comigo o dia inteiro, em vez de deixar no meu armário.

Neste exercício, seu trabalho é criar um algoritmo que descubra o que cabe na lancheira e o que eu preciso colocar na mochila.

Sua tarefa é escrever uma função chamada `packLunch(items, capacity)` (empacotar o lanche) que recebe duas entradas: o array de itens (do maior para o menor) e o tamanho da lancheira, `capacity` (capacidade), que é um número.

O array de itens é um array aninhado: cada item também é um array com dois elementos, o nome do item e o tamanho dele. Os itens vêm sempre do maior para o menor. Por exemplo, o array de itens pode ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

A lancheira tem uma capacidade máxima. Você precisa descobrir quais itens podem ir na lancheira. Coloque o máximo de itens que conseguir. Todo o resto deve ir para a mochila.

Sua função deve retornar um array com dois elementos. O primeiro elemento é um array com os itens da lancheira, e o segundo, com os itens da mochila. Os dois arrays devem estar ordenados do menor para o maior.

Por exemplo, para o array acima, com uma capacidade de 20, o esperado seria:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos para ajudar

Como em todos os exercícios desta seção, você vai querer usar o método `.push(element)` para montar seus arrays.

Você também tem um método novo chamado `[...].toReversed()`, que cria uma cópia de um array com todos os itens na ordem inversa. Por exemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Você não precisa usá-lo, mas ele pode ser útil.

Divirta-se!
