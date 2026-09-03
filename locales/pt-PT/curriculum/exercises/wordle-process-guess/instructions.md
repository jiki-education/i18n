---
title: "Wordle: Processar a Tentativa"
description: "Verifica uma tentativa no Wordle e descobre quais letras estão corretas."
en_md5: d9a619535c9794108b46091447b14f6d
---

Bem-vindo ao Wordle, o jogo que se tornou viral durante os confinamentos da covid-19!

O jogo funciona assim:

- Há uma palavra secreta que estás a tentar adivinhar.
- Tens 6 tentativas para acertar.
- Para cada tentativa há 5 caixas, uma para cada letra:
  - Se uma letra estiver correta, a caixa fica verde.
  - Se uma letra estiver na palavra secreta, mas no sítio errado, a caixa fica amarela.
  - Se uma letra não estiver na palavra secreta, a caixa fica cinzenta.

Ao longo de alguns exercícios, vais implementar o jogo Wordle completo, mas **neste exercício** só vais pôr a primeira linha a funcionar.

Para isso, tens de criar uma função chamada `processGuess(target, guess)` (processa a tentativa). As palavras que recebes na função aparecem sempre em minúsculas.

A função deve determinar o estado de cada letra da tentativa e, em seguida, chamar a função `colorRow(1, states)` (colore a linha) com um array de estados para cada letra: `"correct"`, `"present"` ou `"absent"`.

Por exemplo, `processGuess("hello", "holes")` deve usar `colorRow` com:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Verifica se percebeste isto antes de continuar!

Além disso, se fores fã do Wordle, podes reparar que as regras acima estão **ligeiramente simplificadas** em relação ao jogo oficial. Neste exercício, segue estas regras simplificadas; vamos apresentar o conjunto completo no próximo exercício do Wordle!

### Métodos

Tal como nos dois últimos exercícios, podes construir o array de estados com o método `push`, que adiciona um elemento no fim de um array. Por exemplo, `states.push("correct")` adiciona `"correct"` no fim do array `states`.

Também tens o método `includes` se quiseres verificar se uma string contém outra string.

Boa sorte!
