---
title: "Horizonte urbano"
description: "Constrói todo um horizonte urbano de edifícios aleatórios."
en_md5: cb89a31566f55397d19e1375dbac44cc
---

No exercício do Arranha-céus, criaste um único arranha-céus com alturas diferentes. Desta vez, vamos levar isto mais longe e criar um horizonte de edifícios com alturas e larguras diferentes.

Tens a função `numBuildings()` (número de edifícios), que te diz quantos edifícios precisas de criar nesse cenário. Depois tens as funções `randomWidth()` (largura aleatória) e `randomNumFloors()` (número aleatório de andares). Deves usá-las para determinar as larguras e o número de andares de cada edifício nesse cenário. Na primeira vez que as usares, elas devolvem-te os valores do primeiro edifício, e assim sucessivamente.

Os edifícios começam com um espaço de `1` coluna à esquerda e têm um espaço de `1` coluna entre eles.

Portanto, se tivesses um cenário com `numBuildings()` a devolver `2`, `randomWidth()` a devolver `5` e depois `7`, e `randomNumFloors()` a devolver `4` e depois `8`, obterias esta disposição (em que `xxxxx` é o piso de betão):

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
