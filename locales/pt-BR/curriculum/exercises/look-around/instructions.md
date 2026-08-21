---
title: "Olhe à sua volta"
description: "Crie as funções que verificam o que está à sua volta no labirinto."
en_md5: 9ca44b407519cf6b3d5fa9f3f0e3b3d3
---

Da última vez, você adicionou uma nova função para te ajudar a percorrer o labirinto: `turnAround()` (dar a volta). Deixamos o seu código à esquerda para você continuar a trabalhar nele.

Desta vez, removemos três das funções nas quais você estava se apoiando. A sua tarefa neste exercício é implementá-las você mesmo.

### As funções que você precisa escrever

As três funções que você precisa criar são `canTurnLeft()` (pode virar à esquerda), `canTurnRight()` (pode virar à direita) e `canMove()` (pode avançar).

Nenhuma das funções recebe entradas. Todas devem retornar um Boolean que indica se é possível se mover nessa direção.

Para te ajudar, adicionamos uma nova função `look(direction)` (olhar numa direção). Esta função recebe uma entrada, uma direção que pode ser `"left"`, `"right"` ou `"ahead"`. Ela retorna um destes valores:

- `"start"` (Onde você começa)
- `"target"` (Onde você está tentando chegar)
- `"empty"` (O caminho está livre!)
- `"fire"` (Cuidado!)
- `"poop"` (Eca!)
- `"wall"` (Ai!)

### Notas para te ajudar

Aqui estão três notas para te ajudar.

1. Uma boa prática num exercício como este é **começar criando as funções** de que o código precisa para rodar (ou seja, `canTurnLeft()`, `canTurnRight()` e `canMove()`). Defina um valor padrão razoável para o que cada uma retorna (neste caso, `true` ou `false`). Depois, você pode implementar a lógica de cada função e ir progredindo a cada passo, em vez de ficar recebendo constantemente um erro dizendo que uma função não existe até você ter escrito o programa todo.
2. **Você não deve precisar alterar nenhuma parte do seu código existente** neste exercício. Em vez disso, adicione as três funções no topo do código.
3. Você pode escrever **mais funções** do que apenas as pedidas, se isso te ajudar.
