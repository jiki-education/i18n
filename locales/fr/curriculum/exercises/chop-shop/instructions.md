---
title: "Le salon express"
description: "Détermine si le coiffeur a le temps de prendre un dernier client."
en_md5: c68a8a4856c5249baa901c170035ea78
---

Tu tiens un petit salon de coiffure qui mise sur la rapidité plutôt que sur la qualité. Les clients ressortent parfois un peu ébouriffés, mais au moins ils ne passent pas des heures dans le fauteuil.

Tu proposes plusieurs prestations, de la simple mise en forme à la coupe complète, qui prennent plus ou moins de temps. Le salon fonctionne selon le principe du premier arrivé, premier servi : il n'y a pas de système de rendez-vous.

À l'approche de la fin de la journée, il te faut un moyen de savoir si tu as le temps de t'occuper des nouvelles personnes qui entrent dans le salon.

Écris une fonction appelée `canFitIn` (peut prendre en charge la personne) qui prend trois entrées :

- La première correspond aux coupes déjà dans la file d'attente (un tableau de _strings_)
- La deuxième est la coupe que la nouvelle personne souhaite (une _string_)
- La troisième est le nombre de minutes restantes dans la journée (un nombre)

Renvoie un booléen qui indique si tu peux t'occuper de la personne.

Les coupes que tu proposes sont :

- Mohawk : 20 minutes
- Slicked-Back Pixie : 15 minutes
- Bob : 25 minutes
- Shave and Polish : 15 minutes
- Afro Trim : 45 minutes
- Up-do : 30 minutes

### Tableaux imbriqués

C'est le premier exercice où tu manipules un tableau qui contient d'autres tableaux comme éléments. On appelle ça des « tableaux imbriqués ». Un tableau imbriqué est un tableau comme les autres, mais au lieu de contenir des _strings_ ou des nombres, il contient d'autres tableaux.

Regarde le tableau `cuts` (les coupes). Il contient d'autres tableaux, un pour chaque coupe de cheveux, et chacun de ces tableaux a deux éléments : un nom et une durée.

Le plus simple, ici, est de penser d'abord aux tableaux intérieurs (les paires composées d'un nom et d'une durée), puis d'imaginer qu'ils sont tous regroupés ensemble dans un autre tableau.

L'indexation fonctionne comme partout ailleurs, mais tu peux enchaîner les indices comme ceci...

```javascript
let cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
