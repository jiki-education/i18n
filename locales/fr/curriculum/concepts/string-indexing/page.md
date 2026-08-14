---
title: "L'indexation des strings"
description: "Utiliser des crochets et un numéro de position pour extraire une seule lettre d'une string. N'oublie pas que les positions commencent à zéro."
en_md5: cd31e0366b3090b358494667003f54c9
---

Imagine que tu as mon prénom, Jeremy, et que tu veux en extraire mon initiale, le J. Comment est-ce qu'on pourrait s'y prendre ?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki réfléchissant à comment extraire une seule lettre d'une string"
  width="361"
  height="353"
/>

Eh bien, tu peux voir une string comme une suite de lettres. `"Jeremy"` a donc six lettres, J-E-R-E-M-Y, et chacune a une position. `"J"` est en première position, `"y"` en dernière position.

En JavaScript, comme dans la plupart des langages de programmation, ces positions commencent à zéro. La première lettre `"J"` est donc à la position zéro, puis vient `"e"`, à la position un, `"r"` à deux, `"e"` à trois, `"m"` à quatre, et `"y"` à cinq.

Bon, cette histoire de commencer à zéro est assez bizarre, et honnêtement, la vie serait plus simple si on comptait à partir de un, comme dans le monde normal. Mais non. Dans la plupart des langages de programmation, on compte à partir de zéro, donc il faut juste t'y faire.

Donc, si on veut récupérer la lettre à une position précise, on utilise des crochets (`[]`) avec le nombre à l'intérieur.

Si on écrit `"Jeremy"[0]`, on demande la première lettre du mot `"Jeremy"`.

Si on écrit `"Jeremy"[1]`, on demande la deuxième lettre.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Et ça marche aussi avec les variables. Si on crée une variable appelée `name` (nom) et qu'on lui affecte la string `"Jeremy"`, on peut ensuite écrire `name[0]`, et on obtient `"J"` à nouveau.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Une chose à bien comprendre : ce que `name[0]` te renvoie est simplement une autre string. C'est un autre bout de papier avec un `"J"` écrit dessus. Il n'a rien de spécial. C'est une string, exactement comme `"Jeremy"` est une string.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki tenant un nouveau bout de papier avec juste la lettre J dessus"
  width="500"
  height="289"
/>

C'est juste qu'il n'y a qu'une seule lettre dessus, au lieu de six.

Et en faisant ça, on ne modifie absolument pas la string d'origine. On n'est pas en train de lui "arracher" le `"J"`, ou un truc dans le genre. On se contente de trouver les lettres qu'on veut, puis on crée une nouvelle string avec.
