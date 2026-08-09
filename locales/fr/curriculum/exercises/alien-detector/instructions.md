---
title: "Détecteur d'aliens"
description: "Déplace ton laser de gauche à droite et tire sur les aliens."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

Dans le précédent exercice Space Invaders, tu déplaçais ton laser d'un côté à l'autre pour abattre tous les aliens. Tout cela était en grande partie possible grâce à la fonction `isAlienAbove()` (« y a-t-il un alien au-dessus ? »). Dans cet exercice, on l'a retirée, mais tu dois quand même abattre tous les aliens !

Tu pars d'une page blanche. N'hésite pas à réutiliser ton code de l'<a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">exercice Space Invaders précédent</a> comme point de départ.

Cet exercice est conçu pour être un vrai défi ! Prends ton temps.

### Ta mission

Abats tous les aliens. Comme tu ne peux plus demander à l'exercice s'il y a un alien au-dessus de toi, tu dois garder la trace des aliens que tu as abattus et de ceux qui sont encore là.

### Découvre `getStartingAliensInRow(idx)` (« récupère les aliens présents au départ dans une rangée »)

Tu disposes d'une nouvelle fonction, `getStartingAliensInRow(idx)`. Elle prend une entrée : l'indice de la rangée, en partant du bas. Il y a au maximum trois rangées, donc la valeur d'entrée peut être `0`, `1` ou `2`.

La fonction renvoie un tableau de 11 booléens. Chaque booléen indique s'il y a un alien à cette position au **début** de l'exercice. Ainsi, `[true, false, false, ...]` signifierait qu'avant que tu ne fasses quoi que ce soit, il y a un alien à la première position, mais pas aux deux suivantes (et ainsi de suite).

Cette fonction renvoie uniquement les positions **initiales** des aliens. Elle ne se met **pas** à jour au fur et à mesure que tu les abats !

### Remarques

- Chaque fois que tu te déplaces vers la gauche ou vers la droite, tu avances ou tu recules d'une position. Ces positions correspondent aux emplacements où les aliens peuvent se trouver.
- Les aliens ne réapparaissent pas dans cet exercice.
