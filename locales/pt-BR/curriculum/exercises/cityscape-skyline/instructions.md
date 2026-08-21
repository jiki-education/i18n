---
title: "Horizonte urbano"
description: "Construa todo um horizonte urbano de edifícios aleatórios."
en_md5: cb89a31566f55397d19e1375dbac44cc
---

No exercício do Arranha-céus, você criou um único arranha-céu com alturas diferentes. Desta vez, vamos levar isso mais longe e criar um horizonte de edifícios com alturas e larguras diferentes.

Você tem a função `numBuildings()` (número de edifícios), que te diz quantos edifícios você precisa criar nesse cenário. Depois você tem as funções `randomWidth()` (largura aleatória) e `randomNumFloors()` (número aleatório de andares). Você deve usá-las para determinar as larguras e o número de andares de cada edifício nesse cenário. Na primeira vez que você usá-las, elas te retornam os valores do primeiro edifício, e assim sucessivamente.

Os edifícios começam com um espaço de `1` coluna à esquerda e têm um espaço de `1` coluna entre eles.

Portanto, se você tivesse um cenário com `numBuildings()` retornando `2`, `randomWidth()` retornando `5` e depois `7`, e `randomNumFloors()` retornando `4` e depois `8`, você obteria esta disposição (em que `xxxxx` é o piso de concreto):

```
       WWWWWWW
       WGGGGGW
       WGGGGGW
       WGGGGGW
 WWWWW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGEGW WGGEGGW
xxxxxxxxxxxxxxxxxxxxxxx
```
