---
title: "Pangrama simples"
description: "Verifique se uma frase usa todas as letras do alfabeto."
en_md5: 50b09bb1fbd35081cb842c55fc40e313
---

Um pangrama é uma frase que usa **todas as letras do alfabeto pelo menos uma vez**. O pangrama inglês mais conhecido é "the quick brown fox jumps over the lazy dog"!

Os próximos três exercícios vão todos tratar de determinar se as frases são pangramas.

Neste primeiro exercício, você só precisa lidar com letras minúsculas. O valor de entrada vai conter apenas letras minúsculas e outros caracteres como espaços, números ou pontuação, mas nenhuma letra maiúscula.

A sua tarefa é escrever `isPangram(sentence)` (que verifica se uma frase é um pangrama), que recebe uma frase como entrada e retorna `true` se contiver todas as letras de "a" a "z" pelo menos uma vez, ou `false` se não contiver.

### Funções auxiliares

Para concluir o exercício, você não pode usar laços aninhados. Em vez disso, tal como no último exercício, a chave está em criar uma **função auxiliar** que `isPangram(...)` usa.

Esta função auxiliar vai te ajudar a determinar se uma string contém outra string. Recomendamos que você chame esta função de `includes` e que dê às entradas dela os nomes `haystack` (palheiro) e `needle` (agulha). A ideia é que queremos “encontrar a agulha no palheiro”, uma expressão inglesa antiga.

Se criar várias funções te parecer complicado demais, você pode resolver o exercício primeiro sem a função auxiliar, usando um laço aninhado, e depois pensar em como transformar isso numa função auxiliar.

Divirta-se!
