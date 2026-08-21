---
title: "Le chevalet"
description: "Trouve la position exacte d'une lettre sur le chevalet."
en_md5: 156e18323706fc278f7a887f421c01f3
---

Tu construis un robot qui joue au Scrabble automatiquement. Le robot dispose d'un chevalet de jetons de lettres, représenté par une _string_ (par exemple `"AERHBT"`). Quand le robot décide quelle lettre jouer, il doit savoir à quelle position déplacer sa main pour attraper le bon jeton.

Écris une fonction appelée `findTile` (trouve le jeton) qui prend le chevalet (une _string_ de lettres) et la lettre à trouver. Si le jeton est trouvé, renvoie `"Move to position X"`, où X est la position du premier jeton correspondant (en commençant à 1). Si le jeton n'est pas sur le chevalet, renvoie `"Error: Tile not on rack"`.

Pour construire la _string_ du résultat, tu devras convertir le numéro de la position en _string_, puis assembler les morceaux à l'aide de la concaténation (`+`) ou d'une _template string_.

Exemples :

- `findTile("ABCDE", "A")` renvoie `"Move to position 1"`
- `findTile("ABCDE", "C")` renvoie `"Move to position 3"`
- `findTile("BANANA", "A")` renvoie `"Move to position 2"` (le premier A)
- `findTile("ABCDE", "Z")` renvoie `"Error: Tile not on rack"`
