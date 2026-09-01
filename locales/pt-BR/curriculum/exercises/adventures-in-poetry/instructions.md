---
title: "Aventuras na Poesia"
description: "Percorra um caminho coletando as palavras de um poema, ignorando tudo o que não for uma delas."
en_md5: 9163e96662902baf726f464c9b58785f
---

Você está criando um jogo de poesia robótica chamado "Aventuras na Poesia". Como primeiro passo, você precisa programar o robô para que, enquanto anda, ele colete palavras e depois recite o poema no final.

Cada casa contém uma destas quatro coisas:

1. Nada (`""`)
2. Uma **palavra** do poema.
3. Cenário, como uma folha ou uma borboleta (um emoji).
4. Uma bandeira quadriculada, que diz ao robô para parar.

Para ajudar, você tem algumas funções. Primeiro, você tem a função `move()`, que diz ao robô poeta para avançar até a próxima casa e retorna o que estava nela. Você tem a função `isEmoji(thing)`, que retorna um boolean dizendo se a string que você passar é um emoji. E, por fim, você tem a função `recite(poem)`, que você precisa usar com o poema final.

Seu trabalho é percorrer o caminho, montar o poema e depois recitá-lo.

## As regras

- As **palavras** entram no poema, com um **espaço entre cada uma**.
- O **cenário** não faz parte do poema e deve ser ignorado.
- Um **apóstrofo** fica sozinho em uma casa e junta as palavras dos dois lados dele. `heart`, depois `'`, depois `s` vira `heart's`.
- Uma **vírgula** também fica sozinha em uma casa. Ela gruda na palavra anterior, mas ainda há um espaço depois dela.
- O poeta para de andar quando chega à **bandeira quadriculada**, ou assim que tiver coletado **sete palavras**. O que acontecer primeiro.
- Sempre que o poeta parar, e não importa como tenha parado, ele recita o que coletou. Você só pode chamar `recite()` **uma vez**.

## Restrições

Há muitas formas de resolver este exercício, mas queremos que você use as palavras-chave `continue` e `break` que aprendeu há pouco, então existem algumas regras:

1. Sua solução deve usar tanto `continue` quanto `break`.
2. Você não pode usar `&&` nem `!` na sua solução.
3. Você não pode escrever funções auxiliares.
4. Você só pode usar dois níveis de indentação:

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

Isso significa que a solução que você vai encontrar é bem "achatada".

Boa sorte e divirta-se!
