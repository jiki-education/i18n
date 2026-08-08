---
title: "Hamming"
description: "Compte les différences entre deux brins d'ADN."
---

C'est un exercice classique d'Exercism sur la biologie moléculaire !

Ton corps est composé de cellules qui contiennent de l'ADN. Ces cellules s'usent régulièrement et doivent être remplacées, ce qu'elles font en se divisant en cellules filles. En fait, un corps humain connaît en moyenne environ 10 millions de milliards de divisions cellulaires au cours d'une vie !

Quand les cellules se divisent, leur ADN se réplique aussi. Pendant ce processus, il arrive que des erreurs se produisent et que certains morceaux d'ADN soient encodés avec une information incorrecte. Si on compare deux brins d'ADN et qu'on compte les différences entre eux, on peut voir combien d'erreurs se sont produites. C'est ce qu'on appelle la « distance de Hamming ».

La distance de Hamming est utile dans de nombreux domaines scientifiques, pas seulement en biologie, alors c'est une expression bonne à connaître !

Ta tâche consiste à calculer la distance de Hamming entre deux brins d'ADN. L'ADN utilise les lettres C, A, G et T. Deux brins peuvent ressembler à ceci :

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Ils présentent 7 différences, la distance de Hamming est donc de 7.

Crée une fonction appelée `hammingDistance` (distance de Hamming) qui prend deux entrées : les deux brins d'ADN sous forme de strings. Elle doit renvoyer un nombre correspondant à la distance.

Les deux brins d'ADN auront toujours la même longueur.
