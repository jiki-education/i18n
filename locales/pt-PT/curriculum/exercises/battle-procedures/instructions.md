---
title: "Procedimentos de batalha"
description: "Extrai a tua lógica de disparo para uma função reutilizável."
en_md5: 3f2bb9c8622396d8ee591087d949c3de
---

No último nível, descobriste como mover um canhão de laser de um lado para o outro e abater alienígenas. Trouxemos a tua solução para poderes continuar.

O código anterior funcionava, mas a lógica de disparo estava misturada com tudo o resto. À medida que melhoras na programação, uma das coisas que te vai ajudar a ter sucesso é dividires o código em pequenas partes, com cada uma a fazer uma única coisa.

Neste exercício, tens de extrair a lógica de disparo para uma função própria chamada `shootIfAlienAbove` (dispara se houver um alienígena por cima). Esta função é responsável por verificar se existe um alienígena por cima do canhão de laser e, se existir, abatê-lo.

O resto da lógica do jogo (acompanhar a posição, mudar de direção nos limites, mover o laser) continua no ciclo, como antes.

Cria a tua função `shootIfAlienAbove` e usa-a dentro do ciclo, em conjunto com a lógica de movimento.
