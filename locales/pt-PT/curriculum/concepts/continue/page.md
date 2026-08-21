---
title: "A palavra-chave `continue`"
description: "Usar a palavra-chave `continue` dentro de um ciclo para saltar o resto desta iteração e passar diretamente para a seguinte."
en_md5: 6cd21a2f25c493f61d000f865014709d
---

Às vezes, podemos querer saltar uma iteração específica de um ciclo em vez de sair dele. Imagina que só queremos fazer coisas com números ímpares.

Queremos poder dizer: se `i` (índice) for ímpar, não corras o ciclo desta vez.

Mas não queremos sair completamente do ciclo. Só queremos saltar esta única iteração e depois passar à seguinte.

E para isso, temos outra palavra-chave chamada `continue`.

Quando o Jiki vê `continue`, salta para o início do ciclo para a iteração seguinte. Assim, num ciclo for-of, se vir `continue`, passa ao item seguinte da lista.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Salta o resto do ciclo quando o item é "something"
  }
  // Resto do ciclo...
}
```

Num ciclo for, o Jiki faz o incremento `i++` e depois começa a iteração seguinte.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta o resto do ciclo quando o número é par
  }
  // Resto do ciclo...
}
```
