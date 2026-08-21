---
title: "Space Invaders: Condicional"
description: "Só dispare quando tiver um alienígena na sua mira."
en_md5: 4a603e339af722e912ab2ff9b25cc287
---

Os alienígenas mudaram de formação! Agora estão dispostos em duas linhas, mas nem todas as colunas têm um alienígena.

Você tem três funções:

- `move()` move o seu canhão laser uma posição para a direita
- `shoot()` dispara o laser para cima
- `isAlienAbove()` (verifica se há um alienígena acima) retorna `true` se tiver um alienígena acima de você, ou `false` se não tiver

Você tem que atravessar a tela verificando cada posição. Se tiver um alienígena acima de você, dispare! Se não, siga em frente.

**Não dispare quando não tiver nenhum alienígena acima de você, ou você perde!**
