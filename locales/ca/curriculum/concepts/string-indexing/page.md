---
title: "Indexació de cordes"
description: "Fer servir claudàtors i un número de posició per extreure una sola lletra d'una corda. Recorda que les posicions comencen a zero."
en_md5: cd31e0366b3090b358494667003f54c9
---

Imagina que tens el meu nom, Jeremy, i vols treure'n la inicial, la J. Com ho faríem?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="El Jiki pensant com extreure una sola lletra d'una corda"
  width="361"
  height="353"
/>

Doncs bé, pots pensar en una corda com una sèrie de lletres. Així, `"Jeremy"` té sis lletres, J-E-R-E-M-Y, i cadascuna té una posició. `"J"` és a la primera posició i `"y"` és a l'última.

Ara bé, en JavaScript i en la majoria de llenguatges de programació, aquestes posicions comencen a zero. Així, la primera lletra, `"J"`, és a la posició 0, i després tenim `"e"`, a la posició 1, `"r"` a la 2, `"e"` a la 3, `"m"` a la 4 i `"y"` a la 5.

Això de començar per zero és bastant estrany i, sincerament, la vida seria més fàcil si comencéssim a comptar des de l'u, com al món normal. Però no ho fem. En la majoria de llenguatges de programació comptem a partir de zero, així que només cal que t'ho aprenguis.

Així que, si volem obtenir la lletra d'una posició concreta, podem fer servir claudàtors amb el número a dins.

Si escrivim `"Jeremy"[0]`, estem dient: dona'm la primera lletra de la paraula `"Jeremy"`.

Si escrivim `"Jeremy"[1]`, estem dient: dona'm la segona lletra.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

I també ho podem fer amb variables. Si creem una variable anomenada `name` (nom) i li donem com a valor la corda `"Jeremy"`, aleshores podem fer `name[0]` i obtindrem `"J"` una altra vegada.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Una cosa que cal deixar clara: el que obtens de `name[0]` és només una altra corda. És un altre tros de paper amb una J a sobre. No té res d'especial. És una corda igual que `"Jeremy"` és una corda.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="El Jiki sostenint un tros de paper nou amb només la lletra J a sobre"
  width="500"
  height="289"
/>

Simplement, hi ha una sola lletra en lloc de sis.

I fer això no afecta gens la corda original. No és que estiguem arrencant la J ni res per l'estil. Només busquem quina de les lletres volem i després creem una corda nova amb aquesta lletra a dins.
