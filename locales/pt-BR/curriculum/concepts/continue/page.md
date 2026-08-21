---
title: "A palavra-chave `continue`"
description: "Usar a palavra-chave `continue` dentro de um laço para pular o resto desta iteração e passar direto para a seguinte."
en_md5: 6cd21a2f25c493f61d000f865014709d
---

Às vezes, a gente pode querer pular uma iteração específica de um laço em vez de sair dele. Imagine que a gente só quer fazer coisas com números ímpares.

A gente quer poder dizer: se `i` (índice) for ímpar, não rode o laço desta vez.

Mas a gente não quer sair completamente do laço. Só quer pular esta única iteração e depois passar à seguinte.

E para isso, a gente tem outra palavra-chave chamada `continue`.

Quando o Jiki vê `continue`, ele pula para o início do laço para a iteração seguinte. Assim, num laço for-of, se ele vir `continue`, passa ao item seguinte da lista.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Salta o resto do ciclo quando o item é "something"
  }
  // Resto do ciclo...
}
```

Num laço for, o Jiki faz o incremento `i++` e depois começa a iteração seguinte.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta o resto do ciclo quando o número é par
  }
  // Resto do ciclo...
}
```
