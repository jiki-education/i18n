---
title: "L'opérateur `!` (pas)"
description: "Utiliser `!` pour inverser un booléen : vrai devient faux et faux devient vrai, pratique pour basculer une valeur ou inverser une vérification."
en_md5: 7cffbd1fa13317b3d6e6a71415413041
---

Jusqu'ici, quand on a comparé des choses pour voir si elles étaient égales, on a utilisé trois signes égal. Mais parfois, on veut vérifier que des choses ne sont pas égales, et pour ça, on utilise un point d'exclamation suivi de deux signes égal. Et de manière générale, en programmation, un point d'exclamation (ou _bang_ comme disent, je crois, nos amis américains) signifie « pas ». Alors imagine que tu travailles dans un magasin et que la direction a décidé d'interdire l'entrée aux tenues disco.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Un videur à l'entrée d'un magasin qui vérifie les tenues d'une file de personnes"
  width="451"
  height="400"
/>

On peut dire : « Si la tenue n'est pas disco, ouvre la porte. » L'instruction `if` fonctionne exactement de la même façon.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Simplement, la condition renvoie vrai si les choses sont différentes, et elle renvoie faux si elles sont identiques. On pourrait donc écrire la même chose en disant : « Si la tenue est disco, ne fais rien. Sinon, ouvre la porte. » Mais en général, il est plus simple et plus clair d'utiliser l'opérateur (_operator_ en anglais) `not` (pas) pour dire vraiment ce que tu veux dire.

Encore une chose à ce sujet. Parfois, tu vas avoir une variable qui vaut vrai et que tu veux faire passer à faux, ou quelque chose qui vaut faux et que tu veux faire passer à vrai, et on peut s'en servir pour garder une trace de quelque chose. Imagine par exemple quelque chose qui rebondit de gauche à droite, avec une variable appelée `movingRight` (« se déplace vers la droite »), qui vaut vrai quand il faut aller vers la droite. Mais quand tu atteins le bord droit, tu veux la faire basculer (_toggle_ en anglais) à faux.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Un terrain façon Pong avec des raquettes et une balle qui rebondit d'un côté à l'autre, illustrant le basculement d'une variable movingRight"
  width="500"
  height="352"
/>

On pourrait donc faire ça en disant : « Si `movingRight` est égal à vrai, `movingRight` devient faux. Sinon, `movingRight` devient vrai. » C'est une façon de faire basculer la variable. Jiki va donc regarder `movingRight` pour voir si elle vaut vrai ou faux, puis il va déterminer l'opposé et remettre cette valeur dans la boîte.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Mais il existe une façon plus élégante de faire ça : utiliser ce même point d'exclamation, ce même _bang_ :

```javascript
movingRight = !movingRight
```

Et ça l'inverse. `!movingRight` signifie l'opposé de sa valeur précédente.

Donc si `movingRight` valait vrai, maintenant elle vaut faux. Si elle valait faux, maintenant elle vaut vrai. Jiki prend ce qui se trouve actuellement dans la boîte,

et ce _bang_ lui dit d'en chercher l'opposé. L'opposé de vrai, c'est faux. L'opposé de faux, c'est vrai, et il remet ensuite cette valeur dans la boîte. C'est exactement la même chose que la longue instruction if/else de tout à l'heure, mais c'est simplement beaucoup plus net et plus concis à écrire.
