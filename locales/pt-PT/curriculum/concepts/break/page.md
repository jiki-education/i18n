---
title: "A palavra-chave `break`"
description: "Usar a palavra-chave `break` dentro do corpo de um ciclo para sair imediatamente do ciclo e passar ao código que vem a seguir."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Podes usar a palavra-chave `break` em qualquer parte do corpo de qualquer ciclo.

A parte entre as chavetas é o corpo. E quando o Jiki vê a palavra-chave, sai imediatamente do ciclo e passa para o código que vem a seguir ao ciclo.

Portanto, se tivermos uma restrição que diz para correr este ciclo 50 vezes, mas quisermos parar se o utilizador disparar cinco vezes, podemos ter um ciclo `for` no início que conta até 50.

Mas depois podemos ter uma condição a meio do ciclo que verifica se o utilizador já disparou cinco vezes e, se tiver, usamos `break` (sair do ciclo) para parar o ciclo.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // sai do ciclo
  }
}
```
