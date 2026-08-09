---
title: "Les templates de strings"
description: "Utiliser des accents graves et des emplacements `${...}` pour insérer des valeurs directement dans une string au lieu d'assembler des morceaux avec `+`."
en_md5: 7fd0e09ac3b32db5f159f8e772872104
---

On peut utiliser ce qu'on appelle des _template literals_ (littéraux de gabarit) pour insérer des strings dans d'autres strings.

Ainsi, plutôt que d'ajouter des strings les unes aux autres, on peut avoir une string, un template, qui contient des emplacements prévus pour d'autres strings.

Pour ça, on utilise des accents graves (_backticks_ en anglais) à la place des guillemets.

L'accent grave, tu le connais sûrement des lettres comme « è » ou « à », mais tu n'as probablement jamais eu à le taper tout seul. Il va donc falloir trouver la bonne touche sur ton clavier.

On s'en sert pour créer un template qui peut contenir d'autres strings. Ensuite, pour insérer une string dans le template, on utilise une autre syntaxe un peu étrange, faite d'un dollar et d'accolades. Par exemple, pour obtenir le même résultat que le `"hello " + name` qu'on vient de voir avec la concaténation, on pourrait écrire :

```javascript
`hello ${name}` // "hello Jeremy" ou "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki tenant une boîte étiquetée name, la valeur qui vient se glisser dans le template"
  width="207"
  height="400"
/>

Et ça fait exactement la même chose qu'ajouter les strings les unes aux autres.

Mais quand plusieurs strings doivent venir s'assembler au même endroit, ça peut se révéler bien plus efficace.

Il te faudra un peu de temps pour t'habituer à cette syntaxe, mais elle n'a rien de vraiment compliqué.
