---
title: "Semáforos Relativos"
description: "Reconstrói o teu semáforo para que tudo redimensione em conjunto."
en_md5: d54633094a8d14f73b298fe4827504c4
---

Estás de volta aos semáforos! Desta vez, vamos seguir o padrão dos dois últimos exercícios e construir os semáforos para que, quando mudamos o raio, sejam redimensionados corretamente. Para isso, temos uma série de variáveis que podemos definir em função de `center` (centro) e/ou de `radius` (raio).

<img src="/static/images/exercise-assets/relational-traffic-lights/target.webp" alt="Semáforo pretendido" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Como funciona

- O canto superior esquerdo da área de desenho é `0,0`. O canto inferior direito é `100,100`.
- As variáveis de cor e `center` já estão definidas para ti. O `radius` está predefinido como 10, mas podes experimentar alterá-lo.
- Tens de determinar todas as variáveis de posição e de tamanho como uma combinação de `radius` e/ou `center`.
- A caixa é um retângulo que rodeia as três luzes com um espaçamento. O espaçamento é igual ao raio.
- As três luzes estão espaçadas uniformemente na vertical dentro da caixa, e a caixa está no centro da imagem. (Ou seja, o centro do círculo amarelo é o centro da imagem).

### Variáveis a determinar

Todas estas variáveis devem usar `radius` ou `center` (por exemplo, uma fórmula como `radius * 7` ou `center - (radius * 2)`).

- `redY` (o centro vertical da luz vermelha), `yellowY` (o centro vertical da luz amarela) e `greenY` (o centro vertical da luz verde): os centros verticais de cada luz.
- `housingX` (a coordenada horizontal do canto superior esquerdo da caixa) e `housingY` (a coordenada vertical do canto superior esquerdo da caixa): o canto superior esquerdo do retângulo da caixa.
- `housingWidth` (a largura da caixa) e `housingHeight` (a altura da caixa): o tamanho do retângulo da caixa.

### Testar o redimensionamento

Enquanto trabalhas, podes alterar o raio de `2` a `12` para veres se tudo é redimensionado corretamente. Se o teu código estiver correto, deves ver tudo a redimensionar-se de forma harmoniosa em torno do centro da imagem!
