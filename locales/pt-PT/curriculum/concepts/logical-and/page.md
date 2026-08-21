---
title: "O operador `&&` (e)"
description: "Combinar duas condições com `&&` para que toda a condição só seja verdadeira quando ambas as partes forem verdadeiras."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Se eu te pedisse para abrires a porta só se alguém tivesse mais de 20 anos, provavelmente saberias o que fazer. Mas e se precisasses de verificar se alguém tem mais de 20 anos _e_ está a usar a roupa certa? Portanto, precisas de verificar duas condições diferentes ao mesmo tempo. Como farias isso?

Talvez pudesses usar uma condicional aninhada (_nested_ em inglês), tal como já tínhamos ciclos aninhados antes. Ou seja, podias dizer: se `age` for maior do que `20`, entramos neste bloco de código; e depois, outro if para verificar se `outfit` é igual a `"disco"`, e outra chaveta e um novo bloco de código. Isso funcionaria, mas fica bastante confuso, sobretudo quando queres ter muitas condicionais.

Felizmente, há uma forma mais fácil: podemos ter condições com várias partes. Em vez de verificarmos apenas uma coisa na condição, podemos verificar duas, três ou mais coisas. E, para isso, precisamos de usar a palavra-chave `and`. Ora, infelizmente, em JavaScript, a palavra-chave `and` não é, na verdade, a palavra _and_, como acontece noutras linguagens. Em vez disso, tens de ter dois e comerciais (_ampersands_ em inglês), um a seguir ao outro. Vais ter de te lembrar disto. É chato, mas é o que é, e vais habituar-te.

Então, podemos usar isto para criar uma condição mais complexa. Podemos dizer que, se `age` for maior do que `20` e a variável `outfit` for `"disco"`, então continuamos. Se `age` for menor do que `20` ou a variável `outfit` não for `"disco"`, então toda a afirmação, toda a condição, é falsa. Se já estudaste lógica, talvez tenhas feito alguma eletrónica ou alguma matemática mais avançada, e isto vai parecer-te muito natural. Se não, vais perceber rapidamente.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Há uma coisa que costuma baralhar as pessoas, tanto com o _e_ como com o _ou_: cada lado do e/ou (_and/or_ em inglês) tem de ser uma comparação completa. Por isso, mesmo que estejas a comparar a mesma variável dos dois lados, tens de repeti-la. Não podes escrever `if age is greater than 13 and less than 20`. Tens de escrever `if age is greater than 13 and age is less than 20`. Ambos os lados têm de ser comparações completas.

```javascript
if (age > 13 && age < 20)
```
