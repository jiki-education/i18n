---
title: "Funções que devolvem coisas"
description: "Apanhar um valor que sai da calha de saída de uma função e usá-lo no teu código."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Até agora, vimos funções que fazem algo no mundo. A função `circle` (círculo) desenha um círculo. A função `move` (mover) move a tua personagem. Mas algumas funções funcionam de forma diferente. Em vez de fazerem algo externo, dão-te algo de volta que podes usar no teu código. Quando uma função dá algo de volta ao Jiki para que ele o use no código, dizemos que esta função está a devolver (_returning_ em inglês) alguma coisa. A função devolve-o ao Jiki. Podes pensar nestas máquinas como se tivessem uma calha de saída. Já temos as nossas fendas de entrada, onde colocamos coisas. Mas também podemos ter uma única fenda de saída ou uma calha por onde algo pode sair de volta. Quando o Jiki carrega no botão da máquina, a máquina zumbe e, no final, alguma coisa sai da calha. Pode ser um número. Pode ser uma string. É algo que o Jiki pode apanhar e usar.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Uma máquina com uma calha de saída na lateral, pronta para devolver um valor ao Jiki"
  width="500"
  height="317"
/>

A maioria das funções, provavelmente 95% delas, devolve alguma coisa. Podem fazer umas contas por ti e devolver o valor, ou podem unir algumas strings e devolver-te a string resultante. Ou podem devolver-te a hora atual sempre que corres a máquina. Vamos ver este último caso. Vamos imaginar que temos uma função chamada `getCurrentTime` (obter a hora atual). Sempre que o Jiki põe a máquina a funcionar, uma folha de papel sai da calha de saída com a hora escrita nela, talvez 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="A máquina getCurrentTime com uma folha de papel com 14:35 escrito a sair da calha de saída"
  width="500"
  height="312"
/>

E depois podemos colocar esse valor devolvido numa caixa usando `let`:

```javascript
let time = getCurrentTime()
```

O Jiki põe a máquina a funcionar, obtém a hora atual da calha e guarda-a numa caixa chamada `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="O Jiki a colocar a folha com 14:35 da calha numa caixa com o rótulo time"
  width="372"
  height="400"
/>

Agora, é importante perceber que a folha de papel que o Jiki coloca na caixa fica fixa nesse momento. Mesmo que a hora real mude enquanto o teu programa está a correr, a caixa continua a ter aquela folha de papel com 14:35 escrito nela. Depois de alguma coisa estar na caixa, fica lá fixa. Não muda por magia. Se quisermos voltar a colocar a hora atual na caixa no futuro, temos de usar novamente a função `getCurrentTime` para a obter.

A maioria das funções que devolvem coisas também tem parâmetros de entrada. Por exemplo, podemos ter uma função `join` (juntar) que recebe duas strings como parâmetros de entrada e as devolve unidas por um espaço. Assim, se usarmos uma máquina `join` com `"Hello"` e `"World"` como valores de entrada, da calha sairá uma única string com `"Hello World"` escrito nela.

```javascript
join("Hello", "World"); // "Hello World"
```
