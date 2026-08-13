---
title: "Pourquoi cette fonctionnalité n'est-elle pas implémentée ?"
excerpt: "Découvre pourquoi certaines fonctionnalités du langage sont exclues de Jiki et comment cela t'aide à apprendre plus efficacement."
tags: ["exercises"]
seo:
  description: "Comprendre pourquoi Jiki exclut certaines fonctionnalités de JavaScript et de Python pour aider les débutants à apprendre"
  keywords: ["jiki", "javascript", "python", "fonctionnalités exclues", "pièges involontaires", "apprentissage"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Tu as essayé d'exécuter ton code et tu as reçu un message disant que quelque chose n'est pas disponible dans cette version du langage ? Lis la suite pour comprendre ce qui se passe !

Si le message dit « Cette fonctionnalité n'est pas encore disponible pour toi », c'est une situation différente : lis plutôt **[Quand cette fonctionnalité va-t-elle se débloquer ?](/articles/when-will-this-feature-unlock)**.

## Introduction

Tu as utilisé un mot-clé ou un concept que notre version du langage ne prend pas en charge. Pas de panique : ce n'est pas un bug !

Les versions de JavaScript et de Python que tu utilises dans Jiki ont été **spécialement conçues par nos soins** pour t'aider à apprendre. On a soigneusement retiré certaines fonctionnalités pour t'éviter de tomber par accident sur des aspects complexes ou déroutants du langage avant d'y être prêt.

## Pourquoi exclure des fonctionnalités ?

Les langages de programmation sont conçus pour les **professionnels**. Ils contiennent des fonctionnalités avancées qui aident les développeurs expérimentés à travailler plus vite, ainsi qu'un héritage historique : des fonctionnalités qui auraient sans doute dû disparaître il y a des années, mais qui restent en place pour que les anciens systèmes continuent de fonctionner.

Quand on apprend, ces fonctionnalités créent de la confusion. En les retirant, Jiki te permet de te concentrer sur l'essentiel : **apprendre à penser comme un programmeur**.

### Les pièges involontaires

Certaines fonctionnalités sont ce qu'on appelle des **« pièges involontaires »**, de quoi se tirer une balle dans le pied sans le vouloir. Il s'agit de fonctionnalités :

- **réellement problématiques**, que même les professionnels ont intérêt à éviter
- **pleines de cas limites déroutants**, qui détournent l'attention des concepts essentiels
- **héritées du passé**, qui n'existent que pour assurer la rétrocompatibilité

Ces pièges sont définitivement exclus de Jiki, parce qu'ils ne valent tout simplement pas la confusion qu'ils provoquent.

### Les fonctionnalités avancées

D'autres fonctionnalités sont exclues parce qu'elles sont **trop avancées** pour l'étape où tu en es dans ton apprentissage. Ce ne sont pas de mauvaises fonctionnalités ; elles ne te sont simplement pas utiles pendant que tu apprends les fondamentaux.

Au fil de ta progression dans Jiki, certaines de ces fonctionnalités vont se débloquer. Mais pour l'instant, concentre-toi sur la maîtrise des bases.

## Dans le détail

Tu n'as pas besoin de lire cette partie, sauf si tu veux vraiment savoir ce qui se passe sous le capot et comprendre les décisions qu'on a prises.

### JavaScript

| Fonctionnalité                                             | Pourquoi elle est exclue                                                                                          |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `var`                                                      | Utilise `let` ou `const` à la place. `var` a des règles de portée déroutantes qui provoquent des bugs, même chez les développeurs expérimentés. |
| `with`                                                     | Obsolète et déroutant. Produit du code ambigu, difficile à comprendre.                                            |
| `debugger`                                                 | Outil de développement, inutile pour apprendre.                                                                   |
| `void`                                                     | Rarement utile et déroutant pour les débutants.                                                                   |
| `yield`                                                    | Fonctionnalité avancée liée aux générateurs. Tu découvriras les générateurs plus tard dans ton parcours.          |
| `delete`                                                   | Peut provoquer des comportements déroutants avec les tableaux et les objets.                                      |
| `import` / `export`                                        | Fonctionnalités du système de modules. Jiki gère les modules différemment pour garder les choses simples.         |
| Opérateurs bit à bit (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Très rarement nécessaires et déroutants quand on apprend. Ils servent à la manipulation des bits à bas niveau.  |

### Python

| Fonctionnalité | Pourquoi elle est exclue                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `global`   | Modifier des variables globales depuis l'intérieur des fonctions mène à du code déroutant. Apprends plutôt à passer les valeurs en paramètres. |
| `nonlocal` | Fonctionnalité avancée de portée pour les fonctions imbriquées. Inutile quand on apprend les fondamentaux.              |
| `assert`   | Outil de débogage qui peut être désactivé en production. Apprends plutôt à gérer les erreurs correctement.              |

## Et si j'ai besoin d'une fonctionnalité ?

Chaque exercice de Jiki a été conçu pour être résolu avec les fonctionnalités qui t'ont été enseignées jusque-là. Si tu te heurtes à une limite, il existe en général une meilleure façon de résoudre ton problème avec les fonctionnalités disponibles. Cela fait partie de l'apprentissage : apprendre à composer avec des contraintes.

Si tu penses vraiment qu'une fonctionnalité devrait être disponible à ton niveau, dis-le-nous ! On affine en permanence ce qui est inclus en fonction des retours.
