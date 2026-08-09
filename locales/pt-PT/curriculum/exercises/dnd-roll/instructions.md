---
title: "Dados de D&D"
description: "Lança os dados e golpeia um goblin numa aventura de D&D."
en_md5: 627f6cce99fe83ecae4e1b53051201b9
---

Estás a criar um bot que consegue jogar Dungeons and Dragons (DnD). Se não conheces DnD, a premissa básica é que encontras imensos cenários e lanças dados para descobrir o que acontece. Há muitos dados diferentes, com diferentes números de lados (não só o dado de seis lados a que talvez estejas habituado!)

Um dos cenários que tens de resolver é o encontro com um goblin. Para atacares o goblin, precisas de:

- Gerar uma **pontuação de ataque** lançando um dado de 20 lados.
- Gerar uma **pontuação de dano base** lançando um dado de 12 lados.
- Gerar uma **pontuação de dano bónus** lançando um dado de 10 lados.
- Somar o dano base e o dano bónus para obteres o teu **dano total**.
- Golpear o goblin com o teu lançamento de ataque e o dano total.

Sempre que lanças um dado, tens de anunciar o número que saiu às outras pessoas com quem estás a jogar. Se tentares golpear sem anunciar os números, podem pensar que estás a fazer batota!

Tens três funções que podes usar:

- `roll(sides)` (lançar; _sides_ são os lados) lança um dado com o número de lados indicado. Esta função devolve (_returns_ em inglês) o resultado.
- `announce(value)` (anunciar; _value_ é o valor) anuncia o lançamento de um dado.
- `strike(attack, damage)` (golpear; _attack_ é o ataque e _damage_ o dano) golpeia o goblin com o teu lançamento de ataque e o dano total.

**Importante:** Sempre que chamas `roll()`, o Jiki lança um dado e obtém um número diferente. Não esperes que lançar o mesmo dado duas vezes dê o mesmo número de cada vez.
