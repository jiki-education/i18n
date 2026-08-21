---
title: "Atualizar dicionários"
description: "Use `dict[key] = value` para atualizar entradas existentes ou adicionar novas, e o método `has` para verificar chaves."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Você já sabe criar um dicionário e obter valores a partir dele. Mas o que acontece se os dados mudam? A certa altura, vou ficar mais velho. Não vou ter `42`, vou ter `43`.

Como a gente atualiza o dicionário? Bem, usamos uma forma muito parecida com a que usamos para encontrar alguma coisa. Você sabe que encontramos alguma coisa usando colchetes (`[]`) para obter o valor. Bem, também podemos usar colchetes seguidos de um sinal de igual para atualizar o dicionário. O Jiki vai até a caixa `person` e tira a página do bloco de notas de espiral. Encontra a chave `"age"` e, em seguida, apaga o `42` que estava lá e escreve `43` no lugar dele. Depois, a página do bloco de notas volta para a caixa. Isso altera o próprio dicionário.

```javascript
person["age"] = 43
```

O Jiki não está criando um dicionário novo, está alterando o bloco de notas que já estava na caixa.

E se você quiser acrescentar informação que não existia antes? Bem, você pode fazer exatamente a mesma coisa.

Se você indicar uma chave que não existe, o Jiki simplesmente adiciona uma nova chave no fim com esse valor.

Portanto, neste caso, ele abre o bloco de notas, procura `"country"`, vê que não está lá e acrescenta uma linha nova no fim: `"country"` à esquerda e `"England"` à direita.

```javascript
person["country"] = "England"
```

Portanto, a sintaxe é exatamente a mesma usada para alterar um valor. O Jiki cuida dos dois casos automaticamente. Se a chave existir, ele atualiza ela. Se não existir, ele adiciona ela. Você não precisa fazer nada de especial.

E, assim como você pode começar com um array vazio e acrescentar coisas, também pode começar com um dicionário vazio e adicionar chaves uma a uma. Mais uma vez, é um padrão muito comum. Você vai ver isso muitas vezes.

Um uso comum dos dicionários é manter a contagem de coisas. Você pode definir as chaves como as coisas que queremos contar e os valores como as contagens respectivas.

Imagine, por exemplo, que você está observando aves e quer registrar quantas aves de cada tipo já viu. Sempre que você vê uma ave, define a contagem dela como um. Depois, sempre que a vê outra vez, obtém o valor atual e soma um. Para esse padrão funcionar, precisamos de uma forma de verificar se o dicionário já tem essa chave. Se tiver, somamos um; se não tiver, precisamos começar com o valor um.

E, para isso, temos um método nos dicionários: o método `has` (tem).

Você indica a chave que te interessa e o Jiki verifica se o dicionário tem essa chave ou não. Depois, retorna true ou false, conforme o caso.

```javascript
person.has("age") // true
```

Juntando tudo, o padrão de contagem tem este aspecto:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
