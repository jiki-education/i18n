---
title: "Wordle: Resolvedor"
description: "Crie um resolvedor que joga uma partida inteira de Wordle sozinho."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

No último exercício de Wordle, você processou uma partida em que os palpites já chegavam prontos. Desta vez, você está do outro lado: é você quem descobre os palpites.

Seu trabalho é criar uma nova função chamada `solveWordle()`, em que você continua dando palpites até chegar à palavra correta. Você precisa resolver a partida da forma mais eficiente possível (usando o menor número de palavras que conseguir).

Você tem uma nova função `commonWords()` (palavras comuns), que retorna um array com as mais de 100 palavras que você pode usar na partida. São essas as palavras que você deve percorrer. Comece sempre lendo a primeira palavra desse array e dando esse palpite; depois vá avançando: encontre a próxima palavra válida possível, dê o palpite com ela, e assim por diante.

Você tem uma função `guess(word)` (dar um palpite com uma palavra), que retorna um array com `"correct"`, `"present"` ou `"absent"` para cada letra.

O segredo deste exercício é pensar em como lembrar as palavras anteriores e os resultados das chamadas de `guess`, e usar esse conhecimento para encontrar, a cada passo, o caminho mais eficiente até a vitória.

### Um exemplo

1. Você lê a primeira palavra do array, que é `"which"`
2. Você usa `guess("which")`, que retorna `["correct", "present", "absent", "absent", "absent"]`.
3. Você escolhe a próxima palavra do array de palavras comuns que começa com `"w"` e tem um `"h"` na terceira, quarta ou quinta posição.
4. Volte ao passo (2)...

Boa sorte e divirta-se!
