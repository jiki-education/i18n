---
title: "Verificador de Tacadas"
description: "Descubra se uma tacada de golfe ficou perto o suficiente do buraco para entrar."
en_md5: 0585e8c489eca5a11da4df955e647456
---

Bem-vindo de volta ao campo de golfe. Até agora você só fez a bola rolar na horizontal. Quando ela chegava ao buraco, ficava só por cima dele. Agora vamos animar de verdade a descida da bola até o fundo do buraco.

A primeira mudança é que a função `moveTo` (mover para) agora tem entradas para `x` (coordenada horizontal) e `y` (coordenada vertical). Assim como antes, você tem que rolar a bola um passo de cada vez, e não pular simplesmente para o fim. Mas desta vez, se o golfista conseguir colocar a bola no buraco, você também tem que animar essa parte final e fazer a bola descer para dentro do buraco depois de ela ter chegado ao lugar certo.

Por fim, **se a bola tiver caído no buraco**, quando ela já tiver rolado até o fundo, é hora de comemorar, então dispare fogos de artifício usando a função `fireFireworks()` (disparar fogos de artifício).

Algumas coisas que você deve saber:

1. A bola começa no tee em `x = 28`, `y = 75` e rola um passo de cada vez.
2. Uma tacada é bem-sucedida se o comprimento da tacada for `58`, `59`, `60`, `61` ou `62`.
3. Você tem que rolar a bola `9` unidades para baixo.

Neste exercício, tente pensar com atenção em cada passo e avance um passo de cada vez. Boa sorte!
