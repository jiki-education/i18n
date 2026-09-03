---
title: "Wordle: Processe uma Partida"
description: "Processe uma partida completa de Wordle, colorindo cada tentativa linha a linha."
en_md5: d825747e1df06c1d9bcdc0900a0615f4
---

Voltamos ao jogo Wordle, e agora é hora de processar a partida inteira, não só uma única tentativa!

Quando você completar este exercício, vai desbloquear um **Desafio Premium** em que você cria um bot para jogar a partida inteira do começo ao fim, fazendo as próprias tentativas pelo caminho. É de longe o desafio mais avançado até agora!

### Este exercício

Por enquanto, você precisa criar uma função chamada `processGame(target, guesses)` (processar o jogo) que recebe duas entradas: a palavra secreta que é o alvo e um array com as tentativas que o jogador fez.

Você deve descobrir o estado de cada linha e depois chamar a função `colorRow(row, states)` (colorir a linha) com o número da linha (`1-6`) e um array de estados, um para cada letra.

Por exemplo, se chamássemos `processGame("crane", ["spoil", "trace", "crane"])`, esperaríamos que o seu código usasse a função `colorRow` três vezes:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

Colocamos o seu código do exercício anterior no editor como ponto de partida. Pense em como você pode deixar o código que já existe **mais genérico** para dar conta disso. Boa sorte!

### Bônus: uma regra nova

Tem uma regra do Wordle que deixamos de lado até agora...

Se uma letra aparece duas vezes na sua tentativa, mas só uma vez na palavra-alvo:

- Se uma delas estiver no lugar certo, essa fica verde e a outra fica cinza.
- Se as duas estiverem nos lugares errados, a primeira fica amarela e a segunda fica cinza.

A mesma ideia vale em escala maior: três na tentativa e duas na palavra significa que duas são coloridas e a terceira fica cinza.

Rode o segundo cenário bônus e olhe a linha `"swiss"`. A palavra-alvo é `"swims"`, que tem dois `"s"`, e os dois já estão verdes: o do começo e o do final. Mas o seu código também pinta o quarto quadrado de amarelo, o que diz ao jogador que ainda existe _outro_ `"s"` para encontrar. Não existe. Esse quarto quadrado deveria ficar cinza.

Você precisa resolver o problema parcialmente para o primeiro cenário bônus (então comece por ele!) e depois resolvê-lo por completo para o segundo.

Esta tarefa é um desafio! **Lembre-se: é um bônus, você não precisa completá-lo!**
