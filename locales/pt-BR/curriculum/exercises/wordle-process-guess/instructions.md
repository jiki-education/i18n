---
title: "Wordle: Processe a Tentativa"
description: "Verifique uma tentativa no Wordle e descubra quais letras estão corretas."
en_md5: 2db4a680ca0788813ac1c48445bfca73
---

Conheça o Wordle, o jogo que viralizou durante os lockdowns da Covid-19!

O jogo funciona assim:

- Existe uma palavra secreta que o usuário está tentando adivinhar.
- O usuário tem 6 tentativas para acertar.
- Para cada tentativa há 5 quadradinhos, um para cada letra:
  - Se uma letra estiver correta, o quadradinho fica verde.
  - Se uma letra estiver na palavra secreta, mas no lugar errado, o quadradinho fica amarelo.
  - Se uma letra não estiver na palavra secreta, o quadradinho fica cinza.

Daqui a alguns exercícios, você vai implementar o jogo Wordle completo, mas **neste exercício**, você só vai fazer as coisas funcionarem na primeira linha.

Para isso, você precisa criar uma função chamada `processGuess(target, guess)` (processar a tentativa: `target` é a palavra secreta e `guess` é a tentativa do jogador). Ela deve descobrir o estado de cada letra da tentativa e depois chamar a função `colorRow(1, states)` (colorir a linha) com um array de estados para cada letra: `"correct"`, `"present"` ou `"absent"`.

Por exemplo, `processGuess("Hello", "Holes")` deve usar `colorRow` com:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Certifique-se de que você entendeu isso antes de continuar!

### Métodos

Como nos últimos exercícios, você pode montar o array de estados usando o método `push`, que adiciona um elemento ao final de um array. Por exemplo, `states.push("correct")` adiciona `"correct"` ao final do array `states`.

Você também tem o método `includes`, caso queira verificar se uma string contém outra string.

Boa sorte!
