---
title: "Le salon express"
description: "Détermine si le coiffeur a le temps de prendre un dernier client."
en_md5: d34f103d63edca4ab6b29fd4f8d5c176
---

Tu tiens un petit salon de coiffure qui mise sur la rapidité plutôt que sur la qualité. Les clients ressortent parfois un peu ébouriffés, mais au moins ils ne passent pas des heures dans le fauteuil.

Tu proposes plusieurs prestations, de la simple mise en forme à la coupe complète, qui prennent plus ou moins de temps. Le salon fonctionne selon le principe du premier arrivé, premier servi : il n'y a pas de système de rendez-vous.

À l'approche de la fin de la journée, il te faut un moyen de savoir si tu as le temps de t'occuper des nouvelles personnes qui entrent dans le salon.

Écris une fonction appelée `canFitIn` (peut caser la personne) qui prend trois entrées :

- La première correspond aux coupes déjà dans la file d'attente (un tableau de strings)
- La deuxième est la coupe que la nouvelle personne souhaite (une string)
- La troisième est le nombre de minutes restantes dans la journée (un nombre)

Renvoie un booléen qui indique si tu peux caser la personne.

Les coupes que tu proposes sont :

- Mohawk : 20 minutes
- Slicked-Back Pixie : 15 minutes
- Bob : 25 minutes
- Shave and Polish : 15 minutes
- Afro Trim : 45 minutes
- Up-do : 30 minutes
