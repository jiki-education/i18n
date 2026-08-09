---
title: "Recherche de jeton"
description: "Cherche une lettre précise parmi les jetons d'un chevalet."
en_md5: bbbc77ef2c270fd4228d6a20e690a095
---

Tu construis un bot qui joue au Scrabble. Avant de tenter de poser un mot, le bot doit vérifier s'il possède le jeton d'une lettre précise sur son chevalet.

Le chevalet est représenté par une string de lettres (par exemple `"SCRAB"`).

Écris une fonction appelée `contains` (contient) qui prend deux entrées :

- `haystack` (botte de foin) : le chevalet de jetons, sous forme de string
- `needle` (aiguille) : la lettre à chercher

Renvoie `true` si la lettre se trouve sur le chevalet, ou `false` sinon.

Exemples :

- `contains("SCRAB", "A")` renvoie `true`
- `contains("SCRAB", "Z")` renvoie `false`
- `contains("", "A")` renvoie `false`
