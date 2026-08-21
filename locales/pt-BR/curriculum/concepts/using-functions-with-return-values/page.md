---
title: "Funções que retornam coisas"
description: "Pegar um valor que sai da boca de saída de uma função e usá-lo no seu código."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Até agora, vimos funções que fazem algo no mundo. A função `circle` (círculo) desenha um círculo. A função `move` (mover) move o seu bonequinho. Mas algumas funções funcionam de forma diferente. Em vez de fazerem algo externo, elas te dão algo de volta que você pode usar no seu código. Quando uma função dá algo de volta ao Jiki para que ele use no código, dizemos que esta função está retornando (_returning_ em inglês) alguma coisa. A função retorna isso ao Jiki. Você pode pensar nestas máquinas como se tivessem uma boca de saída. Já temos as nossas fendas de entrada, onde colocamos coisas. Mas também podemos ter uma única fenda de saída ou uma boca por onde algo pode sair de volta. Quando o Jiki aperta o botão da máquina, a máquina zumbe e, no final, alguma coisa sai da boca. Pode ser um número. Pode ser uma string. É algo que o Jiki pode pegar e usar.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Uma máquina com uma boca de saída na lateral, pronta para retornar um valor ao Jiki"
  width="500"
  height="317"
/>

A maioria das funções, provavelmente 95% delas, retorna alguma coisa. Podem fazer umas contas para você e retornar o valor, ou podem unir algumas strings e te retornar a string resultante. Ou podem te retornar a hora atual sempre que você roda a máquina. Vamos ver este último caso. Vamos imaginar que temos uma função chamada `getCurrentTime` (obter a hora atual). Sempre que o Jiki põe a máquina para funcionar, uma folha de papel sai da boca de saída com a hora escrita nela, talvez 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="A máquina getCurrentTime com uma folha de papel com 14:35 escrito saindo da boca de saída"
  width="500"
  height="312"
/>

E depois podemos colocar esse valor de retorno numa caixa usando `let`:

```javascript
let time = getCurrentTime()
```

O Jiki põe a máquina para funcionar, obtém a hora atual da boca e a guarda numa caixa chamada `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="O Jiki colocando a folha com 14:35 da boca numa caixa com o rótulo time"
  width="372"
  height="400"
/>

Agora, é importante entender que a folha de papel que o Jiki coloca na caixa fica fixa nesse momento. Mesmo que a hora real mude enquanto o seu programa está rodando, a caixa continua tendo aquela folha de papel com 14:35 escrito nela. Depois que alguma coisa está na caixa, ela fica lá fixa. Não muda por magia. Se quisermos voltar a colocar a hora atual na caixa no futuro, precisamos usar novamente a função `getCurrentTime` para obtê-la.

A maioria das funções que retornam coisas também tem entradas. Por exemplo, podemos ter uma função `join` (juntar) que recebe duas strings como entradas e as retorna unidas por um espaço. Assim, se usarmos uma máquina `join` com `"Hello"` e `"World"` como valores de entrada, da boca sairá uma única string com `"Hello World"` escrito nela.

```javascript
join("Hello", "World"); // "Hello World"
```
