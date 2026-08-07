---
title: Pinguim
description: Completa o desenho simétrico de um pinguim.
en_md5: bff370c28fd178d8c0ac9f65e3384e81
---

Neste exercício, desenhamos elipses pela primeira vez e pensamos um pouco mais sobre a simetria que referimos no exercício Foxy Face.

Este exercício usa elipses. As elipses são como círculos esticados. Continuamos a indicar o ponto central, mas em vez de um único raio usamos dois: o raio horizontal e o raio vertical. Se o raio vertical for maior do que o horizontal, a elipse fica alta e estreita. E se o raio horizontal for maior do que o vertical, a elipse fica baixa e achatada. Se definires os dois raios com o mesmo valor, voltas a ter um círculo!

A função `ellipse` (elipse) recebe 5 parâmetros de entrada: a posição do centro (`centerX` e `centerY`, o centro em X e em Y), o raio horizontal (`radiusX`, o raio em X), o raio vertical (`radiusY`, o raio em Y) e a cor:

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="Diagrama da função ellipse" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### O pinguim

A tua tarefa é desenhar o lado direito do pinguim, e tentar fazê-lo **SEM** passar o rato sobre as coordenadas nem tentar adivinhá-las. O desenho final deve ficar assim:

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="Pinguim" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Já desenhámos metade da imagem por ti. Ao leres o código que lá está, deves conseguir descobrir os restantes pormenores para tornares o desenho simétrico. Lembra-te: o canto superior esquerdo da tela de desenho é `0,0`. O canto inferior direito é `100,100`. O pinguim está sentado no meio. Para o nariz, deves **alterar** as coordenadas do ponto do meio do triângulo. Não adiciones um triângulo novo.

**Começa por clicar em _«Executar Código»_** para veres como fica a imagem inicial. Diverte-te!
