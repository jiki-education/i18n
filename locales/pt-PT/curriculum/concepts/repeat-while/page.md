---
title: "Usar o `repeat` sem número"
description: "Deixar os parênteses de um ciclo repeat vazios, para o Jiki continuar até outra coisa lhe dizer para parar."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Até agora, quando usaste o ciclo repeat, indicaste sempre um número que diz quantas vezes repetir. Repete cinco vezes, 10 vezes, 40 vezes. Às vezes, também usaste uma variável para isso. Mas disseste sempre ao Jiki exatamente quantas vezes repetir o ciclo. No entanto, às vezes não sabemos com antecedência quantas vezes repetir. Pensa no labirinto. Lá atrás, no início deste curso, resolveste o labirinto ao escreveres os movimentos específicos. Podias ver o labirinto, contar os passos e escrever o número certo de movimentos.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Um labirinto onde a personagem consegue ver o caminho, contar os passos e escrever exatamente os movimentos certos"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Mas e se eu te dissesse: «Escreve-me algum código que consiga resolver qualquer labirinto que eu te der»? Esse labirinto pode precisar de 10 passos, ou 50, ou 200. Não fazes a mínima ideia com antecedência.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Vários labirintos diferentes, de várias formas e tamanhos, com o Jiki a tentar perceber como resolver qualquer um deles"
  width="402"
  height="400"
/>

Então, precisas de uma forma de dizer ao Jiki para simplesmente continuar. Continua a verificar para que lado podes ir, continua a tomar decisões, continua a avançar, uma e outra vez, até terminares.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="O Jiki a correr numa passadeira, a continuar, uma e outra vez"
  width="428"
  height="400"
/>

E a forma de fazer isso é mesmo simples. Basta não dares um número à palavra-chave `repeat`. Basta deixares os parênteses vazios. Se fizeres isto, o Jiki vai simplesmente continuar até outra coisa lhe dizer para parar. Mais tarde, vamos ver o que são essas outras coisas. Mas, para já, ele vai simplesmente continuar até o exercício terminar, ou até ele decidir que já anda nisto há imenso tempo, que quer uma pausa e que já chega.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="O Jiki caído de cansaço sobre a passadeira, depois de andar imenso tempo, pronto a desistir e a fazer uma pausa"
  width="500"
  height="378"
/>
