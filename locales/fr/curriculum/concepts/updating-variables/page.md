---
title: "Mettre à jour les variables"
description: "Changer ce que contient une variable pendant que ton programme tourne, pour suivre des positions, des compteurs, des scores et d'autres valeurs qui évoluent."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Jusqu'ici, quand on a créé des variables, on a mis des valeurs dans des boîtes pour les ressortir plus tard. C'est très utile pour rendre le code plus clair et pour nous épargner une partie du calcul mental qu'on aurait dû faire autrement. Mais la vraie force des variables vient de la possibilité de changer ce qu'il y a dans une boîte, ce qu'il y a dans la variable, tout au long d'un programme. Ainsi, même si on exécute plusieurs fois le même bout de code, ce qu'il fait peut changer selon ce que contiennent les boîtes.

Imaginons qu'on veuille planter une fleur dans un jardin. On dispose d'une fonction bien pratique, `plant` (planter), qui prend une seule entrée : la position où l'on veut placer la fleur. Donc si on veut placer une fleur à 10 du bord, on l'écrit comme ceci :

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Une fleur plantée dans un jardin, à côté du tableau blanc de Jiki"
  width="406"
  height="400"
/>

Et si on veut planter huit fleurs ? Eh bien, on pourrait écrire `plant(10)`, `plant(20)`, `plant(30)`, et ainsi de suite, mais c'est assez fastidieux.

Et on a déjà appris quelque chose qui aide justement à remplacer ce genre de code fastidieux. Une boucle ! Un bloc `repeat` ! Alors, mettons la position à 10, puis écrivons un bloc `repeat` dans lequel on appelle `plant`, on utilise la fonction `plant`, huit fois.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

À ton avis, que va-t-il se passer ?

Eh bien, huit fleurs vont être plantées, mais toutes au même endroit, ce qui n'est pas vraiment ce qu'on veut. Prenons un instant pour réfléchir à ce que Jiki fait ici. Il fabrique une boîte avec l'étiquette `position`. Il y met 10. Ensuite, il fait tourner la machine `plant` huit fois. À chaque fois, il sort la valeur de la boîte `position`. C'est toujours 10, et c'est ce même 10 qu'il met dans la machine à chaque fois.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki qui prend la boîte position sur l'étagère et met sa valeur, 10, dans la machine plant"
  width="400"
  height="400"
/>

Ce qu'il nous faut, c'est un moyen de nous décaler un peu à chaque fois. Après avoir planté une fleur, on veut dire à Jiki d'avancer la position de 10, pour pouvoir planter la fleur suivante.

Oublions le code une seconde : à quoi ça ressemble, logiquement, de faire ça ? Si je te dis « Plante la première fleur à 10, la suivante à 20, puis la suivante à 30 », comment ton cerveau sait-il que la prochaine doit être plantée à 40, et celle d'après à 50 ?

Ce que ton cerveau fait, c'est garder en tête le nombre actuel, lui ajouter 10, puis mettre à jour ce nombre dans ta tête.

Et on peut faire exactement la même chose en code. Pour cela, on dit : « Mets à jour (_update_ en anglais) la boîte `position` pour qu'elle contienne la valeur actuelle de la position plus 10. »

Quand Jiki voit ça, il sort le nombre actuel de la boîte `position`, lui ajoute 10, fait le calcul, l'addition des deux, puis remet le résultat dans la boîte pour la fois suivante.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki qui sort 10 de la boîte position, ajoute 10 pour obtenir 20, et remet 20 dans la boîte"
  width="427"
  height="400"
/>

Donc si on ajoute cette ligne à notre programme, de façon à dire « Mets la valeur initiale de la position à 10 », puis, huit fois de suite, « Plante une fleur à la position, puis augmente la position de 10 », notre code fonctionne, et on obtient huit fleurs bien espacées.

Remarque qu'il n'y a pas de `let` (laisser) quand on met à jour la variable. C'est très important. Quand Jiki voit `let`, il fabrique une nouvelle boîte. Mais ici, on ne veut pas créer une nouvelle boîte. On veut changer ce qu'il y a dans la boîte qu'on a déjà.

Note aussi qu'on ne crée la boîte qu'une seule fois, en dehors de la boucle. C'est important à retenir : crée la boîte une fois au début, puis mets-la à jour à chaque tour de boucle.

On peut mettre à jour ce que contiennent les boîtes, et on peut se servir de ce pouvoir pour suivre quelque chose qui change au fil du temps. Tu vas utiliser ce schéma en permanence : suivre une position, compter combien de fois quelque chose s'est produit, tenir un score. Chaque fois que tu auras besoin de retenir quelque chose qui change pendant que ton programme tourne, c'est comme ça que tu feras.
