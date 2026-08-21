---
title: "Usar o operador `%` para obter restos"
description: "Usar o operador `%` para obter o que sobra depois de dividir, muitas vezes usado para verificar se um número é par ou ímpar."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Até agora, usámos a adição, a subtração, a multiplicação e a divisão quando fazemos contas. Agora vamos apresentar mais um: o operador de resto (_remainder_ em inglês).

O operador de resto é responsável por te dar o resto, de forma lógica, quando divides dois números, e escrevemo-lo com um sinal de percentagem. Portanto, se escrevermos:

```javascript
10 % 4 // 2
```

estamos a dizer ou a perguntar: «O que sobra quando dividimos 10 por 4?» E a resposta é dois. Imagina que tens 10 rebuçados ou frutos secos e queres partilhá-los igualmente por quatro pessoas. Cada pessoa recebe dois e, no final, sobram dois. Essa parte que sobra é o resto. É isso que este sinal de percentagem te dá.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Uma fila de dez rebuçados a serem partilhados igualmente por quatro pessoas, com dois a sobrar como resto"
  width="500"
  height="22"
/>

Uma das razões por que usamos isto com bastante frequência no código é podermos saber se algo se divide de forma exata ou não, e o padrão mais comum que vais ver com isto é descobrir se temos um número par ou ímpar. Como sabes, os números pares dividem-se todos exatamente por dois. Nos números ímpares, sobra sempre um quando os divides por dois.

Assim, se pegares em quatro, seis ou oito, se os conseguires dividir por dois, não sobra nada, ao passo que cinco, sete e nove, se os dividires por dois, sobra sempre um no final. Portanto, ao escrever `if something % 2 === 0`, estamos a perguntar: «Será que isto é um número par?» E isso pode ser útil para imensas coisas. Imagina criar riscas de cores diferentes ou dividir uma fila ao meio, enviando cada pessoa por um de dois caminhos à medida que caminha na tua direção.

Uma coisa a ter em conta: podes ouvir pessoas a chamarem operador de módulo a este operador de resto. Módulo e resto são basicamente a mesma coisa. Há pequenas diferenças com as quais provavelmente nunca precisas de te preocupar, por isso, para já, vamos tratá-lo como o operador de resto, porque é muito mais simples.
