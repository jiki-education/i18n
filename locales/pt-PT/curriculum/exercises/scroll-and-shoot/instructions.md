---
title: "Percorre e Dispara"
description: "Percorre o Space Invaders e abate os extraterrestres."
en_md5: a238bdc121bdfe425015d2e9e6b872d5
---

Estamos de volta ao Space Invaders. Da última vez, só precisaste de te mover da esquerda para a direita para abateres todos os extraterrestres. Mas desta vez também precisas de fazer o laser ir e voltar entre a esquerda e a direita, fazendo várias passagens para abateres os extraterrestres.

Podes mover o laser para a esquerda e para a direita usando as funções `moveLeft()` (mover para a esquerda) e `moveRight()` (mover para a direita). Podes experimentar para ver até onde consegues mover-te para a esquerda e para a direita. Se ultrapassares o limite do ecrã, perdes.

Como antes, quando te moves, tens de verificar se há um extraterrestre por cima de ti com a função `isAlienAbove()` (existe um extraterrestre por cima) e, se houver, abatê-lo com `shoot()` (disparar). Se disparares quando não há nenhum extraterrestre, perdes o jogo: desperdiçar munição não é permitido!

O canhão de laser sobreaquece com facilidade. Tens de te mover entre disparos para o manteres frio.

As vagas ficam mais intensas à medida que avanças. Na vaga final, os extraterrestres reaparecem, por isso não há forma de saberes com antecedência quantos disparos vais precisar: o teu ciclo tem de continuar a correr até todos os extraterrestres desaparecerem.

Neste exercício, há uma regra: para passares o cenário final, não podes usar um ciclo repeat com um valor de entrada (ou seja, **podes** usar `repeat() { ... }`, mas **não podes** usar `repeat(10) { ... }`).

Quando todos os extraterrestres forem abatidos, ganhas! Boa sorte!
