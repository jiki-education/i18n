---
title: "Palavras do Letreiro"
description: "Separe o nome de um negócio nas palavras individuais que serão impressas."
en_md5: b2d0a5c31cfbb7036c1a860f59498ff8
---

Um tempo atrás, você criou um programa para ajudar um cliente com o negócio de letreiros dele. Agora ele voltou com uma nova necessidade. Ele passou a fazer letreiros maiores, em que cada palavra é impressa separadamente, e depois as palavras são montadas nas vitrines do negócio, no local.

Ele precisa que você faça a primeira etapa do programa: pegar o nome do negócio e separá-lo nas palavras, que ele poderá imprimir.

Escreva uma função chamada `signWords(businessName)` (`signWords` quer dizer "palavras do letreiro"; `businessName`, "nome do negócio") que recebe o nome do negócio e retorna um array com as palavras dele. Por exemplo, `signWords("Frank's Hotdogs")` deve retornar `["Frank's", "Hotdogs"]`.

Palavras são trechos separados por espaços. Mas fique de olho em um detalhe... Às vezes, sem querer, os clientes mandam o nome do negócio com vários espaços seguidos. Se isso acontecer, você precisa ignorá-los, então `"Frank's   Hotdogs"` também deve retornar `["Frank's", "Hotdogs"]`

### Push e Split

O segredo deste exercício é usar o método `push` para montar o array. Você também pode usar o método `split`, mas talvez ache mais fácil fazer a separação manualmente. Nenhuma das duas opções é certa ou errada. Se precisar relembrar como os métodos funcionam, veja abaixo.

Divirta-se!
