---
title: "Percorra e Dispare"
description: "Percorra o Space Invaders e abata os extraterrestres."
en_md5: a238bdc121bdfe425015d2e9e6b872d5
---

Estamos de volta ao Space Invaders. Da última vez, você só precisou se mover da esquerda para a direita para abater todos os extraterrestres. Mas desta vez você também precisa fazer o laser ir e voltar entre a esquerda e a direita, fazendo várias passagens para abater os extraterrestres.

Você pode mover o laser para a esquerda e para a direita usando as funções `moveLeft()` (mover para a esquerda) e `moveRight()` (mover para a direita). Você pode experimentar para ver até onde consegue se mover para a esquerda e para a direita. Se você ultrapassar o limite da tela, perde.

Como antes, quando você se move, tem que verificar se há um extraterrestre em cima de você com a função `isAlienAbove()` (existe um extraterrestre acima) e, se houver, abatê-lo com `shoot()` (disparar). Se você disparar quando não há nenhum extraterrestre, perde o jogo: desperdiçar munição não é permitido!

O canhão de laser superaquece com facilidade. Você tem que se mover entre os disparos para mantê-lo frio.

As ondas ficam mais intensas à medida que você avança. Na onda final, os extraterrestres reaparecem, então não tem como você saber com antecedência de quantos disparos vai precisar: o seu laço tem que continuar rodando até todos os extraterrestres desaparecerem.

Neste exercício, há uma regra: para passar no cenário final, você não pode usar um laço repeat com um valor de entrada (ou seja, você **pode** usar `repeat() { ... }`, mas **não pode** usar `repeat(10) { ... }`).

Quando todos os extraterrestres forem abatidos, você ganha! Boa sorte!
