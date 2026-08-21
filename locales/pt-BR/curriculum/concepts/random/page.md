---
title: "Números aleatórios"
description: "Usar `Math.randomInt` com um mínimo e um máximo para obter um número diferente de cada vez que a função é executada."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Muitas vezes, em programação, queremos usar uma função e receber de volta um número aleatório (_random number_ em inglês) diferente de cada vez.

Isso é útil de muitas maneiras e em muitos lugares, mas sobretudo em criptografia, onde fazemos muitas coisas, como criar códigos para compartilhar entre máquinas. Esses códigos têm que ser aleatórios para não poderem ser hackeados.

Para ajudar nisso, você tem uma função disponível chamada `Math.randomInt` (`Math` significa matemática; `randomInt` significa inteiro aleatório). Talvez você repare que há um ponto no meio do nome. À medida que você ganha acesso a mais funções, podemos organizá-las em grupos diferentes para manter tudo organizado, e a parte `Math` (abreviatura de matemática) é o nome de um grupo a que esta função pertence. Ele diz ao Jiki em que seção das prateleiras deve procurar, neste caso, a seção `Math`. O ponto significa apenas ir a esta seção e encontrar a função. Não se preocupe muito com isso por enquanto. As instruções dos exercícios sempre te dizem que funções estão disponíveis e como usá-las. O importante é você entender que, quando o Jiki usa esta função, ela retorna para ele um número diferente de cada vez que ele a executa, com uma restrição. A função tem duas entradas. A primeira é o menor número que a máquina pode retornar, e a segunda é o maior número que a máquina pode retornar. Portanto, se você usar a função `Math.randomInt` com `10` e `13`, você sempre recebe `10`, `11`, `12` ou `13` de volta. Mas você recebe um número diferente de cada vez.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki subindo uma escada até a seção Math das prateleiras do seu galpão"
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
  alt="A máquina Math.randomInt com 10 e 13 nos funis de entrada, produzindo 10, 11, 12 ou 13"
  width="488"
  height="400"
/>

Então, imagine que você quer desenhar um círculo numa posição aleatória na tela. Você pode usar `Math.randomInt` para obter valores diferentes para `left` e `top` aleatoriamente de cada vez, mas com limites de, digamos, `10` e `90`, para que os valores nunca se sobreponham nem saiam da tela. Sempre que você executa este código, o círculo é desenhado num lugar ligeiramente diferente.
