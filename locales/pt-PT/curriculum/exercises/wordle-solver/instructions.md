---
title: "Wordle: Resolvedor"
description: "Cria um resolvedor que joga uma partida completa de Wordle sozinho."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

No último exercício do Wordle, processaste um jogo em que os palpites já vinham dados. Desta vez, estás do outro lado e és tu que tens de descobrir os palpites.

A tua tarefa é criar uma nova função chamada `solveWordle()`, em que continuas a adivinhar palavras até acertares na palavra correta. Tens de resolver o jogo da forma mais eficiente possível (usando o menor número de palavras possível).

Tens uma nova função `commonWords()` (palavras comuns), que devolve um array com mais de 100 palavras que podes usar no jogo. São estas as palavras que deves percorrer. Deves começar sempre por ler a primeira palavra desse array e adivinhá-la; depois continua a percorrer a lista, encontra a próxima palavra possível e válida e adivinha-a, e assim por diante.

Tens uma função `guess(word)` (adivinhar a palavra) que devolve um array com `"correct"`, `"present"`, `"absent"` para cada letra.

O segredo deste exercício é pensares numa forma de memorizar as palavras anteriores e os resultados das chamadas a `guess`. Usa esse conhecimento para encontrares sempre o caminho mais eficiente até à vitória.

### Um exemplo

1. Lês a primeira palavra do array, que é `"which"`
2. Usas `guess("which")`, que devolve `["correct", "present", "absent", "absent", "absent"]`.
3. Escolhes, no array de palavras comuns, a palavra seguinte que começa por `"w"` e tem um `"h"` na terceira, quarta ou quinta posição.
4. Volta ao ponto (2)...

Boa sorte e diverte-te!
