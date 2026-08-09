---
title: "La concaténation de strings"
description: "Additionner des strings avec `+` pour coller du texte fixe et des variables en une seule string plus longue."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Tu sais déjà ce que sont les strings : des bouts de papier avec du texte écrit dessus.

Jusqu'ici, toutes les strings que tu as utilisées, tu les as tapées directement. Mais que se passe-t-il si on veut construire une string à partir de variables ou de conditions ? Comment faire ?

Il existe deux façons de s'y prendre.

La première s'appelle la concaténation de strings (_string concatenation_ en anglais), une façon savante et un peu déroutante de dire qu'on additionne deux strings.

Imagine que tu as deux mots, `"hello"` (bonjour) et `"world"` (monde), et que tu veux créer une string qui contient `"hello world"`.

Tu pourrais simplement écrire `"hello world"` en une seule string, mais tu pourrais aussi écrire `"hello " + "world"`, ce qui te donnerait exactement la même string.

Bon, évidemment, ce n'est pas très utile dans ce cas précis. Mais imaginons qu'on ait une variable contenant le nom de quelqu'un et qu'on veuille lui dire bonjour ?

Imagine donc qu'on a une variable appelée `name` (nom), qui contient parfois `"Jeremy"` (le prénom Jeremy) et parfois `"Jiki"` (le nom Jiki). On veut dire `"hello Jeremy"` ou `"hello Jiki"` en utilisant cette variable.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki tenant une boîte étiquetée name, qui peut contenir différentes valeurs"
  width="207"
  height="400"
/>

Eh bien, on peut y arriver grâce à cette fameuse concaténation :

```javascript
"hello " + name // "hello Jeremy" ou "hello Jiki"
```

Cela nous donnera `"hello Jeremy"`, `"hello Jiki"`, ou un bonjour à n'importe qui d'autre, selon ce qui se trouve dans la boîte `name`.
