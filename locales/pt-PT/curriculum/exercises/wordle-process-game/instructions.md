---
title: "Wordle: Processa uma Partida"
description: "Processa uma partida completa de Wordle e colore cada tentativa linha a linha."
en_md5: d825747e1df06c1d9bcdc0900a0615f4
---

Estamos de volta ao Wordle e agora chegou a altura de processar a partida completa, não apenas uma única tentativa!

Assim que terminares este exercício, desbloqueias um **Desafio Premium** em que crias um bot que joga a partida completa do início ao fim e faz as suas próprias tentativas à medida que avança. É de longe o desafio mais avançado até agora!

### Este exercício

Para já, tens de criar uma função chamada `processGame(target, guesses)` (processa a partida) que recebe dois parâmetros de entrada: a palavra-alvo secreta e um array com as tentativas que o jogador fez.

Deves calcular o estado de cada linha e depois chamar a função `colorRow(row, states)` (colore a linha) com o número da linha (`1-6`) e um array de estados, um para cada letra.

Por exemplo, se chamarmos `processGame("crane", ["spoil", "trace", "crane"])`, o teu código deve usar a função `colorRow` três vezes:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

Colocámos no editor o teu código do exercício anterior como ponto de partida. Pensa em como podes tornar o código que já tens mais genérico para que isto funcione. Boa sorte!

### Bónus: uma regra nova

Há uma regra do Wordle que deixámos de parte até agora...

Se uma letra aparecer duas vezes na tua tentativa, mas apenas uma vez na palavra-alvo:

- Se uma delas estiver no sítio certo, essa fica verde e a outra fica cinzenta.
- Se ambas estiverem no sítio errado, a primeira fica amarela e a segunda fica cinzenta.

A mesma ideia aplica-se a mais letras: com três letras na tentativa e duas na palavra, duas recebem cor e a terceira fica cinzenta.

Executa o segundo cenário bónus e repara na linha `"swiss"`. A palavra-alvo é `"swims"`, que tem duas letras `"s"` e ambas já estão verdes: a do início e a do fim. Mas o teu código também colore o quarto quadrado de amarelo, o que diz ao jogador que ainda há outra letra `"s"` por encontrar. Não há. Esse quarto quadrado devia ficar cinzento.

Tens de resolver parcialmente o problema no primeiro cenário bónus (por isso, começa por aí!) e, no segundo, tens de o resolver totalmente.

Esta tarefa é um desafio! **Lembra-te: é um bónus, não tens de o fazer!**
