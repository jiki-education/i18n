---
title: "Le crible d'Ératosthène"
description: "Trouve tous les nombres premiers grâce à un algorithme antique."
en_md5: 43c2efd77e136b19a94b33b03e876d67
---

Tu as acheté une grosse boîte de pièces d'ordinateur assorties dans un vide-grenier, et tu as commencé à les assembler pour construire des ordinateurs sur mesure.

Tu veux tester les performances de différentes combinaisons de pièces, et tu décides de créer ton propre programme de mesure de performances pour comparer tes ordinateurs. Tu choisis le célèbre « crible d'Ératosthène », un algorithme de l'Antiquité, mais qui devrait pousser tes machines dans leurs derniers retranchements.

Un nombre premier est un nombre plus grand que 1 qui n'est divisible que par 1 et par lui-même. Par exemple, 2, 3, 5, 7, 11 et 13 sont des nombres premiers. À l'inverse, 6 n'est pas un nombre premier : il n'est pas seulement divisible par 1 et par lui-même, mais aussi par 2 et par 3.

Pour utiliser le crible d'Ératosthène, commence par écrire tous les nombres de 2 jusqu'au nombre donné inclus. Ensuite, suis ces étapes :

1. Trouve le prochain nombre non marqué (en sautant les nombres marqués). C'est un nombre premier.
2. Marque tous les multiples de ce nombre premier comme non premiers.

Répète ces étapes jusqu'à avoir parcouru tous les nombres. À la fin, tous les nombres non marqués sont premiers.

Remarque : le crible d'Ératosthène marque les multiples de chaque nombre premier par addition (en ajoutant le nombre premier à répétition) ou par multiplication (en calculant directement ses multiples), plutôt qu'en testant la divisibilité de chaque nombre.

Crée une fonction appelée `sieve` (crible) qui prend un nombre en entrée et renvoie un tableau de tous les nombres premiers inférieurs ou égaux à ce nombre.
