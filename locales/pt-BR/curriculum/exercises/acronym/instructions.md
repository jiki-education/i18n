---
title: "Sigla"
description: "Transforme uma frase na sigla dela, ignorando a pontuação pelo caminho."
en_md5: e8b8820be81476a13cb6a66781f95cc9
---

Você já resolveu siglas simples de três letras, como transformar `Portable Network Graphics` em `PNG`.

No entanto, neste exercício vamos mais longe e lidamos com todas as siglas, não apenas com as que têm três letras. E este é bem mais difícil...

Sua tarefa é escrever uma função chamada `acronym(phrase)` que recebe uma frase e retorna a respectiva sigla.

## As regras

Uma palavra nova começa depois de um **espaço** ou de um **hífen** (`-`). Os outros caracteres (vírgulas, apóstrofos, sublinhados, pontos de exclamação, etc.) **não** são considerados separadores e nunca fazem parte da sigla. Só as letras contam.

| Frase                    | Sigla |
| ------------------------- | ------- |
| As Soon As Possible       | ASAP    |
| Liquid-crystal display    | LCD     |
| Thank George It's Friday! | TGIF    |

## Atenção

Não te demos nenhum dos métodos mais avançados de JavaScript que você vai ver mais à frente no curso (nada que transforme magicamente uma letra em maiúscula nem que te diga sequer se um caractere é uma letra). Você vai precisar criar todas essas funções auxiliares antes de conseguir montar tudo.

Este é mais complicado do que parece. Divirta-se!
