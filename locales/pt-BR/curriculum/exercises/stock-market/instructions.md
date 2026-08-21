---
title: "Mercado de ações"
description: "Acompanhe o seu investimento enquanto o mercado de ações sobe e desce de forma aleatória."
en_md5: 233edb21475a3846a567f3bdda98ce84
---

No primeiro dia de janeiro deste ano, você investiu no mercado de ações $10 ganhos com muito esforço. Você decidiu manter isso em segredo da sua família e só vai contar para eles ao fim de 20 anos, quando (tomara!) tiver ganho muito valor.

Há três coisas que você precisa entender sobre os mercados de ações:

1. Eles são imprevisíveis. Podem subir ou descer todos os anos. Em média, tendem a subir cerca de 10%, mas a variação pode ser enorme.
2. À medida que eles crescem, o seu dinheiro cresce mais rápido do que o mercado de ações, graças aos juros compostos. Se você investir $10 este ano e o mercado de ações dobrar de valor nos próximos 10 anos, você vai ter $20. Se o valor dobrar de novo nos 10 anos seguintes, você vai ter $40 ($20 \* 2, e não $10 \* 2!)
3. Sempre que você tem lucro, você precisa declarar isso ao fisco!

### Fluxo do exercício

Você tem uma função chamada `marketGrowth(year)` (crescimento do mercado no ano) que retorna um número que indica quanto o mercado de ações cresceu nesse ano (por exemplo, `5` significa que ele cresceu `5%`). Então, se você investir $10 e ele crescer 5%, você passa a ter $10.50.

A sua tarefa é acompanhar quanto dinheiro você tem em cada ano e declarar isso ao fisco usando a função `reportTax(year, balance)` (declarar o imposto (ano, saldo)). Depois, ao fim de 20 anos, anuncie para a sua família o montante final com `announceToFamily(value)` (anunciar à família (valor)). O primeiro ano de `marketGrowth(...)` deve ser o ano atual.

Consulte as funções abaixo para mais detalhes e, se você ficar travado, sempre pode consultar as dicas!
