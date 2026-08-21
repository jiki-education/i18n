---
title: "A palavra-chave `break`"
description: "Usar a palavra-chave `break` dentro do corpo de um laço para sair imediatamente do laço e passar ao código que vem a seguir."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Você pode usar a palavra-chave `break` em qualquer parte do corpo de qualquer laço.

A parte entre as chaves é o corpo. E quando o Jiki vê a palavra-chave, ele sai imediatamente do laço e passa para o código que vem a seguir ao laço.

Portanto, se tivermos uma restrição que diz para rodar este laço 50 vezes, mas quisermos parar se o usuário disparar cinco vezes, podemos ter um laço `for` no início que conta até 50.

Mas depois podemos ter uma condição no meio do laço que verifica se o usuário já disparou cinco vezes e, se tiver disparado, usamos `break` (sair do laço) para parar o laço.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // sai do laço
  }
}
```
