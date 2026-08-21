---
title: "Animação"
description: "Enganar o olho para ver movimento, repintando o fundo e redesenhando cada quadro numa posição ligeiramente nova."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Até agora, quando usamos o laço `repeat` para desenhar coisas, cada coisa nova que desenhamos acrescentou algo à imagem. Se desenhamos um tijolo novo numa parede, ele tapou um buraco. Se desenhamos 10 círculos, vemos 10 círculos na tela. É como uma pintura. Depois de você colocar tinta na parede, ela não desaparece quando você pinta algo novo ao lado. Fica lá. Mas e se quisermos que algo pareça estar em movimento?

Você já viu um flip book alguma vez? Eram muito populares quando eu era criança, agora nem tanto. Um flip book é um livrinho em que cada página tem um desenho ligeiramente diferente. Quando você folheia as páginas rapidamente, os seus olhos veem os desenhos mudando e o seu cérebro pensa que algo está em movimento. Na verdade, não está em movimento. São só muitos desenhos ligeiramente diferentes, uns depois dos outros. E é exatamente assim que a animação funciona em código. O truque é o mesmo. Antes de desenharmos uma cena nova, pintamos a tela toda com uma cor de fundo, um pouco como começar uma página nova no nosso flip book, e depois fazemos uma pequena alteração na cena para dar a sensação de movimento.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Um flip book com um boneco de palitos correndo, em que cada página é ligeiramente diferente para a figura parecer que se move"
  width="500"
  height="274"
/>

Então, se pegarmos num bloco de código conhecido em que desenhamos círculos ao longo da tela, definimos uma variável `position` e temos um bloco `repeat` em que desenhamos um círculo e, em seguida, avançamos a `position` uma unidade para a direita. Se rodarmos esse bloco `repeat` 100 vezes, vamos ver 100 círculos ao longo da tela.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Um rastro de 100 círculos azuis desenhados da esquerda para a direita ao longo da tela"
  width="500"
  height="197"
/>

Repare agora no que acontece se acrescentarmos apenas um retângulo simples antes de desenharmos o círculo a cada vez.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Em vez de um rastro de círculos, os nossos olhos são enganados e agora veem um único círculo que parece deslizar pela tela.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Uma sequência de quadros, cada um uma tela branca nova com um único círculo azul, um passo mais à direita"
  width="500"
  height="187"
/>

Sempre que percorremos o laço, estamos pintando um fundo totalmente novo, tapando tudo o que estava lá antes e, em seguida, desenhando o círculo no lugar novo dele.

Cada passagem pelo laço é como uma página nova no flip book.

E o mais importante aqui é entender que não estamos movendo o círculo. O círculo não é um objeto que desliza pela tela. É só um desenho. Em cada passagem pelo laço, pintamos por cima do desenho antigo e fazemos um desenho completamente novo, ligeiramente mais à direita. O seu olho junta tudo e vê movimento, mas, na realidade, são só muitos desenhos separados, uns depois dos outros.

Você pode usar essa ideia para criar um pôr do sol. Você faz o sol se mover, muda o tamanho dele, muda a cor dele. É tudo a mesma técnica. Defina algumas variáveis, pinte um fundo novo e desenhe tudo. Atualize as variáveis e depois repita.
