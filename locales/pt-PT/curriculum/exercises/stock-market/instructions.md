---
title: "Mercado de ações"
description: "Acompanha o teu investimento enquanto o mercado de ações sobe e desce de forma aleatória."
en_md5: 233edb21475a3846a567f3bdda98ce84
---

No primeiro dia de janeiro deste ano, investiste no mercado de ações $10 ganhos com muito esforço. Decidiste mantê-lo em segredo da tua família e só lhes vais contar ao fim de 20 anos, quando (esperemos!) tiver ganho muito valor.

Há três coisas que tens de compreender sobre os mercados de ações:

1. São imprevisíveis. Podem subir ou descer todos os anos. Em média, tendem a subir cerca de 10%, mas a variação pode ser enorme.
2. À medida que crescem, o teu dinheiro cresce mais depressa do que o mercado de ações, graças aos juros compostos. Se investires $10 este ano e o mercado de ações duplicar de valor nos próximos 10 anos, terás $20. Se o valor voltar a duplicar nos 10 anos seguintes, terás $40 ($20 \* 2, e não $10 \* 2!)
3. Sempre que tens lucro, tens de o declarar ao fisco!

### Fluxo do exercício

Tens uma função chamada `marketGrowth(year)` (crescimento do mercado no ano) que devolve um número que indica quanto o mercado de ações cresceu nesse ano (por exemplo, `5` significa que cresceu `5%`). Portanto, se investires $10 e ele crescer 5%, passas a ter $10.50.

A tua tarefa é acompanhar quanto dinheiro tens em cada ano e declará-lo ao fisco usando a função `reportTax(year, balance)` (declarar o imposto (ano, saldo)). Depois, ao fim de 20 anos, anuncia à tua família o montante final com `announceToFamily(value)` (anunciar à família (valor)). O primeiro ano de `marketGrowth(...)` deve ser o ano atual.

Consulta as funções abaixo para mais detalhes e, se ficares preso, podes sempre consultar as pistas!
