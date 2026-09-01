---
title: "Aventuras na poesia"
description: "Percorre um caminho a recolher as palavras de um poema, ignorando tudo o que não é uma palavra."
en_md5: 9163e96662902baf726f464c9b58785f
---

Estás a criar um jogo robótico de poesia chamado «Aventuras na poesia». Como primeiro passo, tens de programar o robô para que, à medida que avança, recolha as palavras e, no fim, recite o poema.

Cada quadrado contém uma destas quatro coisas:

1. Nada (`""`)
2. Uma **palavra** do poema.
3. **Cenário**, como uma folha ou uma borboleta (um emoji).
4. Uma **bandeira axadrezada**, que diz ao robô para parar.

Para te ajudar, tens algumas funções. Primeiro, tens a função `move()`, que diz ao robô poético para avançar para o quadrado seguinte e devolve o que estava nesse quadrado. Tens a função `isEmoji(thing)`, que devolve um Boolean a indicar-te se a string que lhe passas é um emoji. E, por fim, tens a função `recite(poem)`, que deves usar com o poema final.

A tua tarefa é percorrer o caminho, construir o poema e, no fim, recitá-lo.

## As regras

- As **palavras** entram no poema, com um **espaço entre cada uma**.
- O **cenário** não faz parte do poema e deve ser ignorado.
- Um **apóstrofo** fica num quadrado só para ele e liga as palavras de cada lado. `heart`, depois `'` e depois `s`, dá `heart's`.
- Uma **vírgula** também fica num quadrado só para ela. Cola-se à palavra anterior, mas continua a haver um espaço depois dela.
- O poeta deixa de andar quando chega à **bandeira axadrezada** ou assim que tiver recolhido **sete palavras**. O que acontecer primeiro.
- Sempre que o poeta para, e independentemente de como parou, recita aquilo que recolheu. Só podes chamar `recite()` **uma vez**.

## Restrições

Há muitas formas de resolver este exercício, mas queremos que uses as palavras-chave `continue` e `break` que aprendeste recentemente, por isso há algumas regras:

1. A tua solução tem de usar `continue` e `break`.
2. Não podes usar `&&` nem `!` na tua solução.
3. Não podes escrever funções auxiliares.
4. Só podes ter dois níveis de indentação:

```javascript

// Permitido - 2 níveis de indentação
repeat() {
  if(...) {
    //...
  }
}

// Não permitido - 3 níveis de indentação
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Ou seja, a solução a que vais chegar é bastante «plana».

Boa sorte e diverte-te!
