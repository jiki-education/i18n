---
title: "Olha à tua volta"
description: "Cria as funções que verificam o que está à tua volta no labirinto."
en_md5: 9ca44b407519cf6b3d5fa9f3f0e3b3d3
---

Da última vez, adicionaste uma nova função para te ajudar a percorrer o labirinto: `turnAround()` (dar a volta). Temos o teu código à esquerda para continuares a trabalhar nele.

Desta vez, removemos três das funções em que te estavas a apoiar. A tua tarefa neste exercício é implementá-las tu.

### As funções que tens de escrever

As três funções que tens de criar são `canTurnLeft()` (pode virar à esquerda), `canTurnRight()` (pode virar à direita) e `canMove()` (pode avançar).

Nenhuma das funções recebe parâmetros de entrada. Todas devem devolver um Boolean que indica se é possível moveres-te nessa direção.

Para te ajudar, adicionámos uma nova função `look(direction)` (olhar numa direção). Esta função recebe um parâmetro de entrada, uma direção que pode ser `"left"`, `"right"` ou `"ahead"`. Devolve um destes valores:

- `"start"` (Onde começas)
- `"target"` (Onde estás a tentar chegar)
- `"empty"` (O caminho está livre!)
- `"fire"` (Cuidado!)
- `"poop"` (Eca!)
- `"wall"` (Ai!)

### Notas para te ajudar

Aqui tens três notas para te ajudar.

1. Uma boa prática num exercício como este é **começar por criar as funções** de que o código precisa para correr (ou seja, `canTurnLeft()`, `canTurnRight()` e `canMove()`). Define um valor predefinido razoável para o que cada uma devolve (neste caso, `true` ou `false`). Depois, podes implementar a lógica de cada função e ir progredindo a cada passo, em vez de estares constantemente a receber um erro a dizer que uma função não existe até teres escrito o programa todo.
2. **Não deves precisar de alterar nenhuma parte do teu código existente** neste exercício. Em vez disso, adiciona as três funções no topo do código.
3. Podes escrever **mais funções** do que apenas as pedidas, se isso te ajudar.
