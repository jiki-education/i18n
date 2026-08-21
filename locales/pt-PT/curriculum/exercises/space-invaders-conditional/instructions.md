---
title: "Space Invaders: Condicional"
description: "Só dispara quando tiveres um alienígena na tua mira."
en_md5: 4a603e339af722e912ab2ff9b25cc287
---

Os alienígenas mudaram de formação! Agora estão dispostos em duas linhas, mas nem todas as colunas têm um alienígena.

Tens três funções:

- `move()` move o teu canhão laser uma posição para a direita
- `shoot()` dispara o laser para cima
- `isAlienAbove()` (verifica se há um alienígena por cima) devolve `true` se houver um alienígena por cima de ti, ou `false` se não houver

Tens de atravessar o ecrã enquanto verificas cada posição. Se houver um alienígena por cima de ti, dispara! Se não, segue em frente.

**Não dispares quando não houver nenhum alienígena por cima de ti, ou perdes!**
