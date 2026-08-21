---
title: "Pangrama simples"
description: "Verifica se uma frase usa todas as letras do alfabeto."
en_md5: 50b09bb1fbd35081cb842c55fc40e313
---

Um pangrama é uma frase que usa **todas as letras do alfabeto pelo menos uma vez**. O pangrama inglês mais conhecido é "the quick brown fox jumps over the lazy dog"!

Os próximos três exercícios vão todos tratar de determinar se as frases são pangramas.

Neste primeiro exercício, só precisas de lidar com letras minúsculas. O valor de entrada vai conter apenas letras minúsculas e outros carateres como espaços, números ou pontuação, mas nenhuma letra maiúscula.

A tua tarefa é escrever `isPangram(sentence)` (que verifica se uma frase é um pangrama), que recebe uma frase como parâmetro de entrada e devolve `true` se contiver todas as letras de "a" a "z" pelo menos uma vez, ou `false` se não contiver.

### Funções auxiliares

Para concluíres o exercício, não podes usar ciclos aninhados. Em vez disso, tal como no último exercício, a chave está em criar uma **função auxiliar** que `isPangram(...)` usa.

Esta função auxiliar vai ajudar-te a determinar se uma string contém outra string. Recomendamos que chames `includes` a esta função e que dês aos seus parâmetros de entrada os nomes `haystack` (palheiro) e `needle` (agulha). A ideia é que queremos «encontrar a agulha no palheiro», uma expressão inglesa antiga.

Se criar várias funções te parecer demasiado complicado, podes resolver o exercício primeiro sem a função auxiliar, usando um ciclo aninhado, e depois pensar em como transformar isso numa função auxiliar.

Diverte-te!
