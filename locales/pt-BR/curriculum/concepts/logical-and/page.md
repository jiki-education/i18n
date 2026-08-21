---
title: "O operador `&&` (e)"
description: "Combinar duas condições com `&&` para que toda a condição só seja verdadeira quando ambas as partes forem verdadeiras."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Se eu te pedisse para abrir a porta só se alguém tivesse mais de 20 anos, você provavelmente saberia o que fazer. Mas e se você precisasse verificar se alguém tem mais de 20 anos _e_ está usando a roupa certa? Então, você precisa verificar duas condições diferentes ao mesmo tempo. Como você faria isso?

Talvez você pudesse usar uma condicional aninhada (_nested_ em inglês), tal como já tínhamos laços aninhados antes. Ou seja, você podia dizer: se `age` for maior do que `20`, entramos neste bloco de código; e depois, outro if para verificar se `outfit` é igual a `"disco"`, e outra chave e um novo bloco de código. Isso funcionaria, mas fica bastante confuso, sobretudo quando você quer ter muitas condicionais.

Felizmente, há uma forma mais fácil: podemos ter condições com várias partes. Em vez de verificarmos apenas uma coisa na condição, podemos verificar duas, três ou mais coisas. E, para isso, precisamos usar a palavra-chave `and`. Ora, infelizmente, em JavaScript, a palavra-chave `and` não é, na verdade, a palavra _and_, como acontece em outras linguagens. Em vez disso, você precisa ter dois e comerciais (_ampersands_ em inglês), um depois do outro. Você vai ter que se lembrar disso. É chato, mas é o que é, e você vai se acostumar.

Então, podemos usar isso para criar uma condição mais complexa. Podemos dizer que, se `age` for maior do que `20` e a variável `outfit` for `"disco"`, então continuamos. Se `age` for menor do que `20` ou a variável `outfit` não for `"disco"`, então toda a afirmação, toda a condição, é falsa. Se você já estudou lógica, talvez tenha feito alguma eletrônica ou alguma matemática mais avançada, e isso vai te parecer muito natural. Se não, você vai entender rapidamente.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Há uma coisa que costuma confundir as pessoas, tanto com o _e_ como com o _ou_: cada lado do e/ou (_and/or_ em inglês) tem que ser uma comparação completa. Então, mesmo que você esteja comparando a mesma variável dos dois lados, você precisa repeti-la. Você não pode escrever `if age is greater than 13 and less than 20`. Você tem que escrever `if age is greater than 13 and age is less than 20`. Ambos os lados têm que ser comparações completas.

```javascript
if (age > 13 && age < 20)
```
