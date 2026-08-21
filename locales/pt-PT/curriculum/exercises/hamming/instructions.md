---
title: "Hamming"
description: "Conta as diferenças entre duas cadeias de ADN."
en_md5: 629f74899d402283c34d3bfbb17777b8
---

Este é um exercício clássico do Exercism sobre biologia molecular!

O teu corpo é composto por células que contêm ADN. Essas células desgastam-se regularmente e precisam de ser substituídas, o que conseguem ao dividir-se em células-filhas. Na verdade, o corpo humano médio passa por cerca de 10 000 biliões de divisões celulares ao longo da vida!

Quando as células se dividem, o seu ADN também se replica. Por vezes, durante este processo, acontecem erros e partes isoladas de ADN são codificadas com a informação errada. Se compararmos duas cadeias de ADN e contarmos as diferenças entre elas, conseguimos ver quantos erros ocorreram. Isto é conhecido como a «distância de Hamming».

A distância de Hamming é útil em muitas áreas da ciência, não apenas na biologia, por isso, é uma expressão que vale a pena conhecer!

A tua tarefa é calcular a distância de Hamming entre duas cadeias de ADN. O ADN usa as letras C, A, G e T. Duas cadeias podem ter este aspeto:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Têm 7 diferenças, pelo que a distância de Hamming é 7.

Cria uma função chamada `hammingDistance` (distância de Hamming) que tem dois parâmetros de entrada: as duas cadeias de ADN como strings. Deve devolver a distância como um número.

As duas cadeias de ADN têm sempre o mesmo comprimento.
