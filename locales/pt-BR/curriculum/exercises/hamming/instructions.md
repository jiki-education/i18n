---
title: "Hamming"
description: "Conte as diferenças entre duas cadeias de DNA."
en_md5: 629f74899d402283c34d3bfbb17777b8
---

Este é um exercício clássico do Exercism sobre biologia molecular!

O seu corpo é feito de células que contêm DNA. Essas células se desgastam com frequência e precisam ser substituídas, o que elas conseguem fazer se dividindo em células-filhas. Na verdade, o corpo humano médio passa por cerca de 10.000 trilhões de divisões celulares ao longo da vida!

Quando as células se dividem, o DNA delas também se replica. Às vezes, durante esse processo, acontecem erros e partes isoladas de DNA são codificadas com a informação errada. Se a gente comparar duas cadeias de DNA e contar as diferenças entre elas, consegue ver quantos erros aconteceram. Isso é conhecido como a “distância de Hamming”.

A distância de Hamming é útil em muitas áreas da ciência, não só na biologia, então é uma expressão que vale a pena conhecer!

A sua tarefa é calcular a distância de Hamming entre duas cadeias de DNA. O DNA usa as letras C, A, G e T. Duas cadeias podem ter este aspecto:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Elas têm 7 diferenças, então a distância de Hamming é 7.

Crie uma função chamada `hammingDistance` (distância de Hamming) que tem duas entradas: as duas cadeias de DNA como strings. Ela deve retornar a distância como um número.

As duas cadeias de DNA têm sempre o mesmo comprimento.
