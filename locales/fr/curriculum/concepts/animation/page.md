---
title: "Animation"
description: "Tromper l'œil pour qu'il voie du mouvement, en repeignant le fond et en redessinant chaque image à une position légèrement différente."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Jusqu'ici, quand on a utilisé une boucle `repeat` (répéter) pour dessiner, chaque nouvel élément dessiné venait s'ajouter à l'image. Si on a dessiné une nouvelle brique dans un mur, elle a comblé un trou. Si on a dessiné 10 cercles, on voit 10 cercles à l'écran. C'est comme une peinture : une fois la peinture posée sur le mur, elle ne disparaît pas quand on peint quelque chose de nouveau à côté. Elle reste là. Mais si on veut donner l'impression que quelque chose bouge ?

Tu as déjà vu un flip book ? C'était très populaire quand j'étais enfant, un peu moins aujourd'hui. Un flip book, c'est un petit livre où chaque page porte un dessin légèrement différent. Quand tu feuillettes les pages rapidement, tes yeux voient les dessins changer, et ton cerveau croit que quelque chose bouge. En réalité, rien ne bouge : ce sont juste plein de dessins légèrement différents, l'un après l'autre. Et c'est exactement comme ça que fonctionne l'animation en code. L'astuce est la même. Avant de dessiner une nouvelle scène, on repeint tout le canvas avec une couleur de fond, un peu comme si on commençait une nouvelle page de notre flip book, puis on apporte un petit changement à la scène pour donner une impression de mouvement.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Un flip book montrant un personnage en bâtons qui court, chaque page légèrement différente pour que le personnage semble bouger"
  width="500"
  height="274"
/>

Prenons donc un bloc de code familier où on dessine des cercles à travers l'écran : on définit une variable `position`, et on a un bloc `repeat` où on dessine un cercle puis on déplace la `position` d'une unité vers la droite. Si on exécute ce bloc `repeat` 100 fois, on va voir 100 cercles à travers l'écran.

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
  alt="Une traînée de 100 cercles bleus dessinés de gauche à droite à travers l'écran"
  width="500"
  height="197"
/>

Maintenant, regarde ce qui se passe si on ajoute simplement un rectangle tout simple avant de dessiner le cercle à chaque fois.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Au lieu d'une traînée de cercles, nos yeux se laissent maintenant tromper et voient un seul cercle qui semble glisser à travers l'écran.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Une séquence d'images, chacune un canvas blanc tout neuf avec un seul cercle bleu décalé d'un pas de plus vers la droite"
  width="500"
  height="187"
/>

À chaque passage dans la boucle, on peint un tout nouveau fond, qui recouvre tout ce qui était là avant, puis on dessine le cercle à son nouvel emplacement.

Chaque passage dans la boucle est comme une nouvelle page du flip book.

Et la chose essentielle à comprendre ici, c'est qu'on ne déplace pas le cercle. Le cercle n'est pas un objet qui glisse. C'est juste un dessin. À chaque passage dans la boucle, on peint par-dessus l'ancien dessin, et on en fait un tout nouveau, légèrement plus à droite. Ton œil assemble le tout et voit du mouvement, mais en réalité, ce ne sont que des dessins séparés, l'un après l'autre.

Tu peux utiliser cette idée pour créer un coucher de soleil. Tu fais bouger le soleil, tu changes sa taille, tu changes sa couleur. C'est toujours la même technique. On définit quelques variables, on peint un fond tout neuf, et on dessine tout. On met à jour les variables, et on recommence.
