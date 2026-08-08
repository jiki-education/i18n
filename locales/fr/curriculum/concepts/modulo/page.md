---
title: "Le reste"
description: "Utiliser l'opérateur `%` pour obtenir ce qu'il reste après une division, souvent pour vérifier si un nombre est pair ou impair."
en_md5: fe49222bd3f3a019dd9f74a960c5dede
---

Jusqu'ici, on a utilisé l'addition, la soustraction, la multiplication et la division pour faire de l'arithmétique. On va maintenant en découvrir un de plus : l'opérateur de reste (_remainder_ en anglais).

Comme son nom l'indique, cet opérateur te donne le reste quand tu divises deux nombres, et on l'écrit avec un signe pourcentage. Donc si on écrit :

```javascript
10 % 4 // 2
```

on demande en fait : « Qu'est-ce qu'il reste quand on divise 10 par 4 ? » Et la réponse est deux. Imagine que tu as 10 bonbons ou 10 noix, et que tu veux les partager équitablement entre quatre personnes. Chaque personne en reçoit deux, et il en reste deux à la fin. Et ce qui reste à la fin, c'est justement le reste. C'est ce que ce signe pourcentage te donne.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Une rangée de dix bonbons partagés équitablement entre quatre personnes, avec deux bonbons en trop qui forment le reste"
  width="500"
  height="22"
/>

Si on l'utilise si souvent en code, c'est notamment parce qu'il permet de savoir si quelque chose se divise équitablement ou non, et le cas le plus courant consiste à déterminer si un nombre est pair ou impair. Les nombres pairs, comme tu le sais, se divisent tous exactement par deux. Les nombres impairs, eux, laissent tous un reste de un quand on les divise par deux.

Prends quatre, six ou huit : si tu les divises par deux, il ne reste rien, alors qu'avec cinq, sept ou neuf, il reste toujours un à la fin. Donc en écrivant `if something % 2 === 0`, on demande : « Est-ce que ce quelque chose est un nombre pair ? » Et ça peut servir dans des tonnes de situations. Imagine que tu crées des rayures de couleurs différentes, ou que tu partages une file d'attente en deux, en envoyant chaque personne d'un côté ou de l'autre à mesure qu'elle avance vers toi.

Une chose à noter : tu entendras peut-être des gens appeler cet opérateur de reste l'opérateur modulo. Modulo et reste sont pratiquement identiques. Il existe quelques petites différences dont tu n'auras probablement jamais à te soucier, alors pour l'instant, on parlera de l'opérateur de reste, c'est tout simplement plus facile.
