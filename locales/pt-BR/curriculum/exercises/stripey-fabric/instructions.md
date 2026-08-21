---
title: "Tecido listrado"
description: "Teça um padrão listrado escolhendo corretamente a cor de cada listra."
en_md5: ba93b39f1883d50139d243a16e3c204f
---

Você está desenhando um algoritmo para criar um rolo de tecido listrado, que deve ter este aspecto:

<svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Twenty vertical stripes: purple at each end, with green, blue and yellow stripes in between" style="width: 200px; height: 200px; display: block; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;padding:4px;margin-top:-8px">
  <rect x="0" y="0" width="5" height="100" fill="#A020F0" />
  <rect x="5" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="10" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="15" y="0" width="5" height="100" fill="#008000" />
  <rect x="20" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="25" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="30" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="35" y="0" width="5" height="100" fill="#008000" />
  <rect x="40" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="45" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="50" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="55" y="0" width="5" height="100" fill="#008000" />
  <rect x="60" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="65" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="70" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="75" y="0" width="5" height="100" fill="#008000" />
  <rect x="80" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="85" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="90" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="95" y="0" width="5" height="100" fill="#A020F0" />
</svg>

O padrão é uma sequência repetida de `"yellow"`, `"blue"`, `"yellow"`, `"green"`. A primeira e a última listra são `"purple"`.

A tela em que você está desenhando tem `100` de largura e `100` de altura. Você precisa desenhar `20` listras, cada uma com `5` de largura.

### Regras do exercício

Você não pode resolver este exercício escrevendo apenas 20 instruções para desenhar retângulos. O seu código deve se adaptar a qualquer tamanho de tecido. Na verdade, você só pode usar a função `rectangle(...)` (retângulo) uma vez no seu código!

Em vez disso, você precisa fazer um laço e usar o operador de resto (_remainder_ e _operator_ em inglês) que vimos na última videoaula. Pense com atenção na ordem das instruções: é essa a chave para conseguir resolver este exercício.

Leve o tempo que precisar e divirta-se!
