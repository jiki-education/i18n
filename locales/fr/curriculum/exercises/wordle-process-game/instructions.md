---
title: "Wordle : traite une partie"
description: "Traite une partie complète de Wordle en coloriant chaque proposition rangée par rangée."
en_md5: 087a112241856ada8b0cfb4bc7da4798
---

Nous revoilà avec le jeu Wordle, et il est maintenant temps de traiter la partie entière, pas seulement une seule proposition !

Une fois cet exercice terminé, tu débloqueras un **défi Premium** dans lequel tu crées un bot qui joue vraiment toute la partie du début à la fin, en choisissant lui-même chaque proposition. C'est de loin le défi le plus avancé jusqu'ici !

### Cet exercice

Pour l'instant, tu dois créer une fonction appelée `processGame(target, guesses)` (traiter la partie) qui prend deux entrées : le mot secret à deviner et un tableau des propositions faites par le joueur.

Tu dois déterminer l'état de chaque rangée, puis appeler la fonction `colorRow(row, states)` (colorier une rangée selon les états donnés) avec le numéro de la rangée (`1-6`) et un tableau contenant l'état de chaque lettre.

Par exemple, si on appelait `processGame("crane", ["spoil", "trace", "crane"])`, on s'attendrait à ce que ton code utilise la fonction `colorRow` trois fois :

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

On a placé ton code de l'exercice précédent dans l'éditeur comme point de départ. Réfléchis à la façon de rendre ton code existant **plus générique** pour que tout fonctionne. Bonne chance !

### Bonus : une nouvelle règle

Il y a une règle du Wordle qu'on a passée sous silence jusqu'ici...

Si une lettre apparaît deux fois dans ta proposition mais une seule fois dans le mot secret :

- Si l'une des deux est à la bonne place, celle-ci devient verte et l'autre devient grise.
- Si les deux sont mal placées, la première devient jaune et la seconde devient grise.

La même idée s'applique à plus grande échelle : trois dans la proposition et deux dans le mot, cela signifie que deux sont coloriées et que la troisième devient grise.

Lance le deuxième scénario bonus et regarde la rangée `"SWISS"`. Le mot secret est `"swims"`, qui contient deux `"s"`, et les deux sont déjà verts : celui du début et celui de la fin. Mais ton code colorie aussi la quatrième case en jaune, ce qui indique au joueur qu'il reste _un autre_ `"s"` à trouver. Or il n'y en a pas. Cette quatrième case devrait être grise.

Tu dois résoudre partiellement le problème pour le premier scénario bonus (commence donc par celui-là !), puis le résoudre complètement pour le deuxième.

Cette tâche te donnera du fil à retordre ! **N'oublie pas que c'est un bonus, tu n'es pas obligé de le terminer !**
