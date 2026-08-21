---
title: "Usar o operador `%` para obter restos"
description: "Usar o operador `%` para obter o que sobra depois de dividir, muitas vezes usado para verificar se um número é par ou ímpar."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Até agora, usamos a adição, a subtração, a multiplicação e a divisão quando fazemos contas. Agora vamos apresentar mais um: o operador de resto (_remainder_ em inglês).

O operador de resto é responsável por te dar o resto, de forma lógica, quando você divide dois números, e escrevemos ele com um sinal de porcentagem. Portanto, se escrevermos:

```javascript
10 % 4 // 2
```

estamos dizendo ou perguntando: “O que sobra quando dividimos 10 por 4?” E a resposta é dois. Imagine que você tem 10 balas ou castanhas e quer dividi-las igualmente entre quatro pessoas. Cada pessoa recebe duas e, no final, sobram duas. Essa parte que sobra é o resto. É isso que este sinal de porcentagem te dá.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Uma fila de dez balas sendo divididas igualmente entre quatro pessoas, com duas sobrando como resto"
  width="500"
  height="22"
/>

Uma das razões por que usamos isso com bastante frequência no código é podermos saber se algo se divide de forma exata ou não, e o padrão mais comum que você vai ver com isso é descobrir se temos um número par ou ímpar. Como você sabe, os números pares se dividem todos exatamente por dois. Nos números ímpares, sobra sempre um quando você os divide por dois.

Assim, se você pegar quatro, seis ou oito, se conseguir dividi-los por dois, não sobra nada, ao passo que cinco, sete e nove, se você os dividir por dois, sobra sempre um no final. Portanto, ao escrever `if something % 2 === 0`, estamos perguntando: “Será que isso é um número par?” E isso pode ser útil para um monte de coisas. Imagine criar listras de cores diferentes ou dividir uma fila ao meio, enviando cada pessoa por um de dois caminhos à medida que ela caminha na sua direção.

Uma coisa a ter em conta: você pode ouvir pessoas chamando este operador de resto de operador de módulo. Módulo e resto são basicamente a mesma coisa. Há pequenas diferenças com as quais você provavelmente nunca precisa se preocupar, então, por enquanto, vamos tratá-lo como o operador de resto, porque é muito mais simples.
