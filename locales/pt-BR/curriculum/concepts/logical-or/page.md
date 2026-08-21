---
title: "O operador `||` (ou)"
description: "Combinar duas condições com `||` para que toda a condição seja verdadeira quando pelo menos uma das partes for verdadeira."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

Também podemos usar `or`. Mas, mais uma vez, infelizmente não existe uma palavra-chave bonitinha que signifique ou em JavaScript. Em vez disso, temos que usar essas duas barras (_bars_ em inglês) uma do lado da outra para significar ou. Parece estranho, mas na verdade não é. Você vai se acostumar.

Então, podemos dizer que, se alguém tiver mais de 20 anos ou estiver vestido para a balada, então pode entrar. Ou seja, vamos ter uma festa divertida com crianças vestidas para a balada e adultos mal vestidos, o que parece razoável.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki recebendo, na porta de uma festa, uma mistura de crianças vestidas para a balada e adultos vestidos de forma casual"
  width="327"
  height="400"
/>

Tem uma coisa que costuma confundir as pessoas, tanto no caso do e como no caso do ou: cada lado do e/ou tem que ser uma comparação completa. Então, mesmo que você esteja comparando a mesma variável dos dois lados, você tem que repetir ela. Você não pode escrever `if age is less than 13 or greater than 20`. Você tem que escrever `if age is less than 13 or age is greater than 20`. Você tem que garantir que os dois lados sejam comparações completas.

```javascript
if (age < 13 || age > 20)
```

Você tem que entender quando as duas condições importam e quando basta uma delas ser verdadeira.
