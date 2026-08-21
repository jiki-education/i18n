---
title: "Verificador de Tacadas"
description: "Descobre se uma tacada de golfe ficou suficientemente perto do buraco para entrar."
en_md5: 0585e8c489eca5a11da4df955e647456
---

Bem-vindo de volta ao campo de golfe. Até agora só fizeste rolar a bola na horizontal. Quando chegava ao buraco, ficava apenas por cima dele. Agora vamos mesmo animar a descida da bola até ao fundo do buraco.

A primeira mudança é que a função `moveTo` (mover para) agora tem parâmetros de entrada para `x` (coordenada horizontal) e `y` (coordenada vertical). Tal como antes, tens de rolar a bola um passo de cada vez, e não saltar simplesmente para o fim. Mas desta vez, se o golfista conseguir meter a bola no buraco, também tens de animar essa parte final e fazer a bola descer para dentro do buraco depois de esta ter chegado ao sítio certo.

Por fim, **se a bola tiver caído no buraco**, quando já tiver rolado até ao fundo, está na altura de festejar, por isso dispara fogo de artifício usando a função `fireFireworks()` (disparar fogos de artifício).

Algumas coisas que deves saber:

1. A bola começa no tee em `x = 28`, `y = 75` e rola um passo de cada vez.
2. Uma tacada é bem-sucedida se o comprimento da tacada for `58`, `59`, `60`, `61` ou `62`.
3. Tens de rolar a bola `9` unidades para baixo.

Neste exercício, tenta pensar com atenção em cada passo e avança um passo de cada vez. Boa sorte!
