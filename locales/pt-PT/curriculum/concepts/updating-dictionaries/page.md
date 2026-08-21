---
title: "Atualizar dicionários"
description: "Usa `dict[key] = value` para atualizar entradas existentes ou adicionar novas, e o método `has` para verificar chaves."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Já sabes criar um dicionário e obter valores a partir dele. Mas o que acontece se os dados mudam? A certa altura, vou ficar mais velho. Não vou ter `42`, vou ter `43`.

Como é que atualizamos o dicionário? Bem, usamos uma forma muito parecida com a que usamos para encontrar alguma coisa. Sabes que encontramos alguma coisa usando parênteses retos (`[]`) para obter o valor. Bem, também podemos usar parênteses retos seguidos de um sinal de igual para atualizar o dicionário. O Jiki vai à caixa `person` e tira a página do bloco de notas de espiral. Encontra a chave `"age"` e, em seguida, apaga o `42` que lá estava e escreve `43` no lugar dele. Depois, a página do bloco de notas volta para a caixa. Isto altera o próprio dicionário.

```javascript
person["age"] = 43
```

O Jiki não está a criar um dicionário novo, está a alterar o bloco de notas que já estava na caixa.

E se quiseres acrescentar informação que não existia antes? Bem, podes fazer exatamente a mesma coisa.

Se indicares uma chave que não existe, o Jiki simplesmente adiciona uma nova chave no fundo com esse valor.

Portanto, neste caso, ele abre o bloco de notas, procura `"country"`, vê que não está lá e acrescenta uma linha nova no fundo: `"country"` à esquerda e `"England"` à direita.

```javascript
person["country"] = "England"
```

Portanto, a sintaxe é exatamente a mesma usada para alterar um valor. O Jiki trata de ambos os casos automaticamente. Se a chave existir, atualiza-a. Se não existir, adiciona-a. Não precisas de fazer nada de especial.

E, tal como podes começar com um array vazio e acrescentar coisas, também podes começar com um dicionário vazio e adicionar chaves uma a uma. Mais uma vez, é um padrão muito comum. Vais vê-lo muitas vezes.

Uma utilização comum dos dicionários é manter a contagem de coisas. Podes definir as chaves como as coisas que queremos contar e os valores como as respetivas contagens.

Imagina, por exemplo, que estás a observar aves e queres registar quantas aves de cada tipo já viste. Sempre que vês uma ave, defines a contagem dela como um. Depois, sempre que a vês outra vez, obténs o valor atual e somas um. Para este padrão funcionar, precisamos de uma forma de verificar se o dicionário já tem essa chave. Se tiver, somamos um; se não tiver, temos de começar com o valor um.

E, para isso, temos um método nos dicionários: o método `has` (tem).

Indicas a chave que te interessa e o Jiki verifica se o dicionário tem essa chave ou não. Depois, devolve true ou false, conforme o caso.

```javascript
person.has("age") // true
```

Juntando tudo, o padrão de contagem tem este aspeto:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
