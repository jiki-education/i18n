---
title: "Les propriétés"
description: "Des informations fixes sur une valeur, accessibles avec un point et sans parenthèses, comme `.length` pour savoir combien de lettres contient une string."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Jusqu'ici, quand on a parlé des _strings_ ou des nombres, on les a plutôt vus comme des choses figées.

Et même si c'est vrai, ces valeurs embarquent aussi plein de fonctionnalités que Jiki peut utiliser.

On va découvrir deux types de capacités : les propriétés et les méthodes.

Les propriétés sont des informations qu'on peut demander à Jiki à propos d'une valeur. Par exemple, les _strings_ ont une propriété appelée `length` (longueur), que Jiki peut utiliser pour nous dire la longueur d'une _string_.

Ainsi, au lieu de devoir parcourir toutes les lettres pour calculer la taille d'une _string_, on peut simplement demander la réponse à Jiki.

Et pour ça, on utilise une nouvelle forme de syntaxe : un point.

Par exemple, si on a la _string_ `"Jeremy"` et qu'on veut connaître sa longueur, on peut écrire :

```javascript
"Jeremy".length // 6
```

Quand Jiki crée une _string_, il compte les lettres et, mine de rien, écrit dans un coin combien il y en a.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki compte les lettres de la _string_ Jeremy et écrit le nombre dans un coin"
  width="359"
  height="400"
/>

Ensuite, quand on utilise la propriété `length`, Jiki va simplement vérifier quel était ce nombre. Dans notre exemple `"Jeremy".length`, quand Jiki crée la _string_ `"Jeremy"`, il compte les lettres et écrit le nombre six dans un coin ; puis, quand on écrit `"Jeremy".length`, il va le vérifier. Tu peux donc voir les propriétés comme des informations à propos de la valeur en question.
