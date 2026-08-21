---
title: "Números aleatórios"
description: "Usar `Math.randomInt` com um mínimo e um máximo para obter um número diferente de cada vez que a função é executada."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Muitas vezes, em programação, queremos usar uma função e receber de volta um número aleatório (_random number_ em inglês) diferente de cada vez.

Isto é útil de muitas maneiras e em muitos sítios, mas sobretudo em criptografia, onde fazemos muitas coisas, como criar códigos para partilhar entre máquinas. Esses códigos têm de ser aleatórios para não poderem ser pirateados.

Para ajudar nisto, tens uma função disponível chamada `Math.randomInt` (`Math` significa matemática; `randomInt` significa inteiro aleatório). Talvez repares que há um ponto no meio do nome. À medida que ganhas acesso a mais funções, podemos organizá-las em grupos diferentes para manter tudo arrumado, e a parte `Math` (abreviatura de matemática) é o nome de um grupo a que esta função pertence. Diz ao Jiki em que secção das prateleiras deve procurar, neste caso, a secção `Math`. O ponto significa apenas ir a esta secção e encontrar a função. Não te preocupes muito com isto para já. As instruções dos exercícios dizem-te sempre que funções estão disponíveis e como usá-las. O importante é perceberes que, quando o Jiki usa esta função, ela devolve-lhe um número diferente de cada vez que a executa, com uma restrição. A função tem dois parâmetros de entrada. O primeiro é o número mais pequeno que a máquina pode devolver, e o segundo é o maior número que a máquina pode devolver. Portanto, se usares a função `Math.randomInt` com `10` e `13`, recebes sempre `10`, `11`, `12` ou `13` de volta. Mas recebes um número diferente de cada vez.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki a subir uma escada até à secção Math das prateleiras do seu armazém"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="A máquina Math.randomInt com dois funis de entrada no topo"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="A máquina Math.randomInt com 10 e 13 nos funis de entrada, a produzir 10, 11, 12 ou 13"
  width="488"
  height="400"
/>

Então, imagina que queres desenhar um círculo numa posição aleatória na tela. Podes usar `Math.randomInt` para obteres valores diferentes para `left` e `top` aleatoriamente de cada vez, mas com limites de, digamos, `10` e `90`, para que os valores nunca se sobreponham nem saiam da tela. Sempre que executas este código, o círculo é desenhado num sítio ligeiramente diferente.
