---
title: "Codage par plages"
description: "Compresse et décompresse du texte en comptant les plages de caractères répétés."
en_md5: a176be7e6ed782e9aa4b54a4575f751f
---

Le codage par plages (_run-length encoding_ en anglais) est une forme simple de compression. Les plages d'un même caractère qui se répète sont remplacées par un nombre suivi de ce caractère, écrit une seule fois. Les caractères qui n'apparaissent qu'une fois restent tels quels, sans nombre devant eux.

Par exemple, `"AABBBCCCC"` s'encode en `"2A3B4C"`, et `"XYZ"` (aucune répétition) s'encode simplement en `"XYZ"`.

Les espaces comptent comme des caractères à part entière : `"  hsqq qww  "` s'encode donc en `"2 hs2q q2w2 "`.

### Deux fonctions

Écris deux fonctions :

- `encode` (encoder) prend une string et renvoie sa version encodée par plages.
- `decode` (décoder) prend une string encodée et renvoie le texte d'origine.

Le décodage inverse le processus : un nombre t'indique combien de fois répéter le caractère qui le suit. Garde en tête qu'une plage peut dépasser 9 caractères, et qu'un nombre peut donc avoir plusieurs chiffres (par exemple, `"12W"` signifie douze `W`).

### Mets en pratique ce que tu as appris.

Il existe de nombreuses façons de résoudre cet exercice, mais la solution qu'on attend de toi utilise le type de boucle `for` que tu as vu dans la dernière vidéo. Jette un œil aux concepts en bas de page si tu as besoin de te rafraîchir la mémoire sur la syntaxe, qui est assez moche !

Amuse-toi bien !
