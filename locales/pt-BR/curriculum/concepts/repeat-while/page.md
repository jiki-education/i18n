---
title: "Usar o `repeat` sem número"
description: "Deixar os parênteses de um laço repeat vazios, para o Jiki continuar até outra coisa dizer a ele para parar."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Até agora, quando você usou o laço repeat, você sempre indicou um número que diz quantas vezes repetir. Repita cinco vezes, 10 vezes, 40 vezes. Às vezes, você também usou uma variável para isso. Mas você sempre disse ao Jiki exatamente quantas vezes repetir o laço. No entanto, às vezes não sabemos com antecedência quantas vezes repetir. Pense no labirinto. Lá atrás, no início deste curso, você resolveu o labirinto escrevendo os movimentos específicos. Você podia ver o labirinto, contar os passos e escrever o número certo de movimentos.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Um labirinto onde o bonequinho consegue ver o caminho, contar os passos e escrever exatamente os movimentos certos"
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

Mas e se eu te dissesse: “Escreva um código para mim que consiga resolver qualquer labirinto que eu te der”? Esse labirinto pode precisar de 10 passos, ou 50, ou 200. Você não faz a mínima ideia com antecedência.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Vários labirintos diferentes, de várias formas e tamanhos, com o Jiki tentando entender como resolver qualquer um deles"
  width="402"
  height="400"
/>

Então, você precisa de uma forma de dizer ao Jiki para simplesmente continuar. Continue verificando para que lado você pode ir, continue tomando decisões, continue avançando, uma e outra vez, até terminar.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="O Jiki correndo numa esteira, continuando, uma e outra vez"
  width="428"
  height="400"
/>

E a forma de fazer isso é bem simples. Basta não dar um número à palavra-chave `repeat`. Basta deixar os parênteses vazios. Se você fizer isso, o Jiki vai simplesmente continuar até outra coisa dizer a ele para parar. Mais tarde, vamos ver o que são essas outras coisas. Mas, por enquanto, ele vai simplesmente continuar até o exercício terminar, ou até ele decidir que já está nisso há muito tempo, que quer uma pausa e que já chega.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="O Jiki caído de cansaço sobre a esteira, depois de andar muito tempo, pronto para desistir e fazer uma pausa"
  width="500"
  height="378"
/>
