---
title: "Animação"
description: "Enganar o olho para ver movimento, repintando o fundo e redesenhando cada fotograma numa posição ligeiramente nova."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Até agora, quando usámos o ciclo `repeat` para desenhar coisas, cada coisa nova que desenhámos acrescentou algo à imagem. Se desenhámos um tijolo novo numa parede, ele tapou um buraco. Se desenhámos 10 círculos, vemos 10 círculos no ecrã. É como uma pintura. Depois de pôres tinta na parede, ela não desaparece quando pintas algo novo ao lado. Fica lá. Mas e se quisermos que algo pareça estar em movimento?

Alguma vez viste um flip book? Eram muito populares quando eu era miúdo, agora nem tanto. Um flip book é um livrinho em que cada página tem um desenho ligeiramente diferente. Quando folheias as páginas rapidamente, os teus olhos veem os desenhos a mudar e o teu cérebro pensa que algo está em movimento. Na verdade, não está em movimento. São só muitos desenhos ligeiramente diferentes, uns a seguir aos outros. E é exatamente assim que a animação funciona em código. O truque é o mesmo. Antes de desenharmos uma cena nova, pintamos a tela toda com uma cor de fundo, um pouco como começar uma página nova no nosso flip book, e depois fazemos uma pequena alteração à cena para dar a sensação de movimento.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Um flip book com um boneco de palitos a correr, em que cada página é ligeiramente diferente para a figura parecer mover-se"
  width="500"
  height="274"
/>

Portanto, se pegarmos num bloco de código conhecido em que desenhamos círculos ao longo do ecrã, definimos uma variável `position` e temos um bloco `repeat` em que desenhamos um círculo e, em seguida, avançamos a `position` uma unidade para a direita. Se corrermos esse bloco `repeat` 100 vezes, vamos ver 100 círculos ao longo do ecrã.

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
  alt="Um rasto de 100 círculos azuis desenhados da esquerda para a direita ao longo do ecrã"
  width="500"
  height="197"
/>

Repara agora no que acontece se acrescentarmos apenas um retângulo simples antes de desenharmos o círculo de cada vez.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Em vez de um rasto de círculos, os nossos olhos são enganados e agora veem um único círculo que parece deslizar pelo ecrã.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Uma sequência de fotogramas, cada um uma tela branca nova com um único círculo azul, um passo mais à direita"
  width="500"
  height="187"
/>

Sempre que percorremos o ciclo, estamos a pintar um fundo totalmente novo, a tapar tudo o que lá estava antes e, em seguida, a desenhar o círculo no seu novo sítio.

Cada passagem pelo ciclo é como uma página nova no flip book.

E o mais importante aqui é perceber que não estamos a mover o círculo. O círculo não é um objeto que desliza pelo ecrã. É só um desenho. Em cada passagem pelo ciclo, pintamos por cima do desenho antigo e fazemos um desenho completamente novo, ligeiramente mais à direita. O teu olho junta tudo e vê movimento, mas, na realidade, são só muitos desenhos separados, uns a seguir aos outros.

Podes usar esta ideia para criar um pôr do sol. Fazes o sol mover-se, alteras o seu tamanho, alteras a sua cor. É tudo a mesma técnica. Define algumas variáveis, pinta um fundo novo e desenha tudo. Atualiza as variáveis e depois repete.
