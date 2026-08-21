---
title: "Procedimentos de batalha"
description: "Extraia sua lógica de disparo para uma função reutilizável."
en_md5: 3f2bb9c8622396d8ee591087d949c3de
---

No último nível, você descobriu como mover um canhão laser de um lado para o outro e abater alienígenas. Trouxemos a sua solução para você poder continuar.

O código anterior funcionava, mas a lógica de disparo estava misturada com todo o resto. À medida que você melhora na programação, uma das coisas que vai te ajudar a ter sucesso é dividir o código em pequenas partes, com cada uma fazendo uma única coisa.

Neste exercício, você precisa extrair a lógica de disparo para uma função própria chamada `shootIfAlienAbove` (dispara se houver um alienígena acima). Esta função é responsável por verificar se existe um alienígena acima do canhão laser e, se existir, abatê-lo.

O resto da lógica do jogo (acompanhar a posição, mudar de direção nos limites, mover o laser) continua no laço, como antes.

Crie sua função `shootIfAlienAbove` e use-a dentro do laço, junto com a lógica de movimento.
