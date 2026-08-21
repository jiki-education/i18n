---
title: "Dados de D&D"
description: "Lance os dados e golpeie um goblin numa aventura de D&D."
en_md5: 627f6cce99fe83ecae4e1b53051201b9
---

Você está criando um bot que consegue jogar Dungeons and Dragons (DnD). Se você não conhece DnD, a premissa básica é que você encontra um monte de cenários e lança dados para descobrir o que acontece. Há muitos dados diferentes, com diferentes números de lados (não só o dado de seis lados com o qual você talvez esteja acostumado!)

Um dos cenários que você precisa resolver é o encontro com um goblin. Para atacar o goblin, você precisa:

- Gerar uma **pontuação de ataque** lançando um dado de 20 lados.
- Gerar uma **pontuação de dano base** lançando um dado de 12 lados.
- Gerar uma **pontuação de dano bônus** lançando um dado de 10 lados.
- Somar o dano base e o dano bônus para obter o seu **dano total**.
- Golpear o goblin com o seu lançamento de ataque e o dano total.

Sempre que você lança um dado, você precisa anunciar o número que saiu às outras pessoas com quem você está jogando. Se você tentar golpear sem anunciar os números, elas podem achar que você está trapaceando!

Você tem três funções que pode usar:

- `roll(sides)` (lançar; _sides_ são os lados) lança um dado com o número de lados indicado. Esta função retorna (_returns_ em inglês) o resultado.
- `announce(value)` (anunciar; _value_ é o valor) anuncia o lançamento de um dado.
- `strike(attack, damage)` (golpear; _attack_ é o ataque e _damage_ o dano) golpeia o goblin com o seu lançamento de ataque e o dano total.

**Importante:** Sempre que você chama `roll()`, o Jiki lança um dado e obtém um número diferente. Não espere que lançar o mesmo dado duas vezes dê o mesmo número a cada vez.
