---
title: "Tecido às riscas"
description: "Tece um padrão às riscas escolhendo corretamente a cor de cada risca."
en_md5: ba93b39f1883d50139d243a16e3c204f
---

Estás a desenhar um algoritmo para criar um rolo de tecido às riscas, que deve ter este aspeto:

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

O padrão é uma sequência repetida de `"yellow"`, `"blue"`, `"yellow"`, `"green"`. A primeira e a última risca são `"purple"`.

A tela em que estás a desenhar tem `100` de largura e `100` de altura. Precisas de desenhar `20` riscas, cada uma com `5` de largura.

### Regras do exercício

Não podes resolver este exercício a escrever apenas 20 instruções para desenhar retângulos. O teu código deve adaptar-se a qualquer tamanho de tecido. Na verdade, só podes usar a função `rectangle(...)` (retângulo) uma vez no teu código!

Em vez disso, precisas de fazer um ciclo e de usar o operador de resto (_remainder_ e _operator_ em inglês) que vimos na última videoaula. Pensa com atenção na ordem das instruções: é essa a chave para conseguires resolver este exercício.

Leva o tempo que precisares e diverte-te!
