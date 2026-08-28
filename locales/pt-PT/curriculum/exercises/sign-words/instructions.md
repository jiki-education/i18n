---
title: "Palavras do letreiro"
description: "Divide o nome de uma empresa nas palavras individuais a imprimir."
en_md5: 2f780499eb5dd8f51479d4142bc16acc
---

Há algum tempo, criaste um programa para ajudar um cliente com o negócio de letreiros. O cliente voltou agora com um novo requisito. Está a fazer letreiros maiores: imprime cada palavra com antecedência e depois monta as palavras nas montras da empresa no próprio local.

O cliente precisa que cries a primeira etapa do programa: pegar no nome da empresa e dividi-lo em palavras que podem imprimir.

Escreve uma função chamada `signWords(businessName)` (palavras do letreiro) que recebe o nome da empresa e devolve um array com as palavras que o compõem. Por exemplo, `signWords("Frank's Hotdogs")` deve devolver `["Frank's", "Hotdogs"]`.

As palavras são as partes separadas por espaços. Mas há um pormenor a ter em conta... Por vezes, os clientes enviam o nome da empresa com vários espaços seguidos, sem querer. Se isso acontecer, deves ignorá-los, para que <code>"Frank's&nbsp;&nbsp;&nbsp;Hotdogs"</code> devolva na mesma `["Frank's", "Hotdogs"]`.

### Push e Split

A chave deste exercício é usar o método `push` para construir o array. Também podes usar o método `split`, mas talvez aches mais fácil fazer a divisão manualmente. Nenhuma das duas está certa ou errada. Se precisares de recordar como os métodos funcionam, vê abaixo.

Diverte-te!
