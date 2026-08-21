---
title: Pinguim
description: Complete o desenho simétrico de um pinguim.
en_md5: bff370c28fd178d8c0ac9f65e3384e81
---

Neste exercício, desenhamos elipses pela primeira vez e pensamos um pouco mais sobre a simetria que mencionamos no exercício Foxy Face.

Este exercício usa elipses. As elipses são como círculos esticados. Continuamos indicando o ponto central, mas em vez de um único raio usamos dois: o raio horizontal e o raio vertical. Se o raio vertical for maior do que o horizontal, a elipse fica alta e estreita. E se o raio horizontal for maior do que o vertical, a elipse fica baixa e achatada. Se você definir os dois raios com o mesmo valor, volta a ter um círculo!

A função `ellipse` (elipse) recebe 5 entradas: a posição do centro (`centerX` e `centerY`, o centro em X e em Y), o raio horizontal (`radiusX`, o raio em X), o raio vertical (`radiusY`, o raio em Y) e a cor:

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="Diagrama da função ellipse" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### O pinguim

A sua tarefa é desenhar o lado direito do pinguim, e tentar fazer isso **SEM** passar o mouse sobre as coordenadas nem tentar adivinhá-las. O desenho final deve ficar assim:

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="Pinguim" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Já desenhamos metade da imagem para você. Ao ler o código que está lá, você deve conseguir descobrir os detalhes restantes para tornar o desenho simétrico. Lembre-se: o canto superior esquerdo da tela é `0,0`. O canto inferior direito é `100,100`. O pinguim está sentado no meio. Para o nariz, você deve **alterar** as coordenadas do ponto do meio do triângulo. Não adicione um triângulo novo.

**Comece clicando em _“Executar Código”_** para ver como fica a imagem inicial. Divirta-se!
