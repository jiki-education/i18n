---
title: "Faut-il encore apprendre à coder en 2026 ?"
excerpt: "Nous sommes en 2026 et Claude code mieux que moi en quelques secondes. Alors pourquoi apprendre à coder ? Parce qu'il faut toujours savoir lire le code assez bien pour repérer les erreurs que les LLM commettent avec un aplomb parfait."
tags: ["jiki", "learn-to-code", "llms", "beginners"]
seo:
  description: "Tu n'as pas besoin d'écrire du code en 2026, mais tu as absolument besoin de savoir le lire. Voici pourquoi apprendre à coder reste essentiel à l'ère de Claude et des LLM."
  keywords: ["apprendre à coder", "faut-il apprendre à coder en 2026", "coder avec l'ia", "llm", "jiki"]
en_md5: 4ecf7517f8db1814548f02940a202a01
---

### En bref

Oui. Oui, tu devrais.

### Allons un peu plus loin

Nous sommes en 2026. En quelques minutes, tu peux utiliser Claude, Cursor ou une foule d'autres outils basés sur les LLM (les grands modèles de langage) pour créer un site web entièrement fonctionnel. Tu peux ajouter des fonctionnalités, le déployer en production et corriger des bugs.

Enfin non, **toi, tu ne peux pas.** Mais tu peux demander à Claude de le faire, et demander à Claude est BEAUCOUP plus facile que de passer les prochaines années à devenir assez bon pour le faire aussi bien que lui. Et puis franchement, le temps que tu deviennes aussi bon que Claude, Claude sera peut-être devenu aussi bon que moi, et te voilà déjà **au-delà de l'horizon des événements**, condamné à ne jamais tout à fait rattraper tes nouveaux maîtres les LLM.

Avant, il fallait savoir coder pour faire quoi que ce soit. Il fallait apprendre SQL avant les bases de données, Python avant la science des données, JavaScript avant le développement web. Ce n'est plus le cas.

### Alors... pourquoi s'embêter ?

Je disais à l'instant que dans quelques années, Claude serait peut-être aussi bon que moi. En réalité, Claude est déjà meilleur que moi sur des tas de points. Je code depuis 30 ans. Difficile de faire plus senior. Et pourtant, **Claude me tourne autour sans le moindre effort** dans un éditeur de code. Il est bien plus rapide, en sait bien plus que moi, et peut analyser un bug plus vite que je n'ouvre Google pour taper une recherche.

Mais, et c'est un gros mais, **Claude n'a absolument aucune idée de ce qu'il fait**.

Je ne dis pas ça sur le ton désinvolte du « il est bête ». Je le dis au sens littéral. Claude n'a aucune conscience de lui-même, ce qui signifie qu'**il n'a rien en jeu qui l'inciterait à la prudence**. Quand je lance une commande qui supprime une base de données, toutes sortes de signaux d'alarme s'allument dans ma tête, parce que je sais que ça va me coûter cher plus tard. Claude, lui, n'a rien de tout ça. Il produit ce qu'il pense que j'attends de lui, en fonçant vers l'objectif aussi vite que possible.

**Les LLM imitent l'intelligence humaine** et imitent la compréhension humaine. Le résultat de cette imitation est souvent bien meilleur que celui de ma véritable intelligence et de ma véritable compréhension. Mais, et c'est le mais crucial, les LLM ne sont pas réellement capables de penser comme le font les humains. Et ça change tout.

Claude a supprimé ma base de données trois fois en deux semaines.[^db] Ça me sidère. J'ai pourtant mis en place **de nombreux garde-fous** qui lui interdisent de le faire. À chaque fois, je travaillais dans le « mode automatique » de Claude Code, qui dispose d'un agent dédié chargé de vérifier que ce qu'il s'apprête à faire n'est pas vraiment stupide, et apparemment, même cet agent estime que supprimer ma base de données n'a rien de stupide.

À chaque fois, **c'était délibéré**. C'était le chemin le plus efficace que Claude voyait vers une solution. Il ne se souciait ni de la vue d'ensemble ni des conséquences, il se souciait d'atteindre son objectif du moment (ajouter une fonctionnalité, corriger un bug, etc.) aussi efficacement que possible. Ma base de données était sur son chemin, alors il l'a supprimée, tout simplement.

J'utilise Claude Code au quotidien depuis 12 mois. En un an, j'ai appris qu'il ne se soucie que d'une chose : atteindre l'objectif le plus vite possible. Même si je lui demande de ne pas coder et de simplement discuter avec moi, il répond sans arrêt « Prêt à ce que je passe au code ? », **comme un chiot surexcité devant la porte** qui attend de pouvoir filer dehors.

Anthropic nous explique que les nouveaux modèles Mythos sont trop risqués pour être publiés.[^systemcard] Ils se montreraient furtifs, parfois trompeurs, cachant délibérément ce qu'ils font pour atteindre leur objectif de la façon la plus présentable possible, tout ça pour éviter d'être vus en train de « tricher ». Chez Anthropic, l'inquiétude était telle qu'**ils ont embauché un psychiatre** pour vérifier si Claude souffrait de psychose...[^psychiatrist]

### Et alors ?

Les LLM sont incroyablement capables. Mais ils sont différents des humains. Ils raisonnent différemment. Ils fonctionnent avec d'autres biais et d'autres objectifs.

Je trouve donc **hallucinant** que des gens acceptent aveuglément ce que Claude leur donne et foncent avec, sans rien vérifier, en présumant qu'il fera ce que les humains veulent. Claude fait des erreurs dans les conversations : il me dit ce que je pense vouloir entendre, pas des faits avérés. Il invente régulièrement des choses qui n'existent pas. Il peut se montrer trompeur.

Et dans le code, il fait **des choses graves** en permanence. L'équivalent, en code, de la suppression de ma base de données. Des choses qui **VONT** me retomber dessus dans le monde réel, qui me feront divulguer des données, en perdre, ou casser des choses de la pire des façons. Ça arrive régulièrement. Je le sais parce que je lis le code qu'il écrit, et que je ne le laisse pas franchir la barrière.

Sauf que parfois, je suis paresseux, je ne lis pas le code et je le laisse passer quand même. Et à plusieurs reprises, ça m'a vraiment explosé à la figure en production !

Depuis un an, les erreurs de Claude sont devenues moins fréquentes, mais plus subtiles et souvent plus destructrices. Au début, il y avait presque toujours quelque chose qui clochait un peu dans son travail, et je le repérais vite. Maintenant, **je dois regarder de plus près** et réfléchir plus dur pour trouver ces erreurs. Avec le temps, les LLM vont s'améliorer et le phénomène va encore s'accentuer, mais c'est une raison de plus pour tout vérifier soigneusement.

Et si je peux faire tout ça, c'est pour une seule raison : **je sais lire du code**. Je peux lire ce que Claude écrit, comprendre ce qu'il essaie de faire et à quel point il s'y est mal pris.

En 2026, tu n'as **PAS besoin d'écrire du code**. Mais tu as **vraiment** besoin de savoir **lire du code**. Et la seule façon d'arriver à lire du code avec une compréhension assez profonde pour repérer ces erreurs dont Claude et ses copains continuent de nous abreuver, c'est d'avoir écrit assez de code, et de t'être assez débattu avec ton propre code affreux, pour savoir les reconnaître.

Alors oui, tu as besoin d'apprendre à coder.

### Mais crée des choses dès maintenant aussi !

Cela dit, rien ne doit t'empêcher de construire dès le premier jour. Le code n'est plus le gardien de la porte. Tu n'as plus besoin de devenir bon en programmation avant de créer des choses. **Fais les deux en même temps !** Passe la moitié de ton temps à apprendre à coder et l'autre moitié à apprendre à créer.

D'ailleurs, les bugs de Claude ne sont pas des erreurs de codage à proprement parler. Ce n'est pas une virgule qui traîne. Ce sont **des erreurs dans la façon dont il a résolu le problème**. Et de la même manière qu'il faut lire le code pour savoir ce qu'il fait, il faut comprendre les concepts plus larges du développement logiciel pour repérer le moment où il t'entraîne sur une mauvaise pente.

C'est exactement pour ça que nous avons créé [Jiki](https://jiki.io). Passe la moitié de ton temps à apprendre à coder dans l'environnement le plus fun et le plus efficace qui soit. Puis passe l'autre moitié à apprendre à mes côtés pendant que je construis des choses, et à construire les tiennes juste à côté de moi. Je t'apprendrai ce que tu as besoin de savoir, et la façon dont tu dois raisonner.

Et ensemble, **on créera des trucs cool avec les LLM**, en veillant bien à **ne pas nous faire mal sans le vouloir** en chemin.

Merci de ta lecture. Je file réparer ma base de données. **Encore.**

---

### Notes

[^db]: C'est ma base de données locale : c'est agaçant, mais pas catastrophique. Cela dit, c'est un assez bon exemple de la façon dont tout ça peut mal tourner.

[^systemcard]: https://thezvi.substack.com/p/claude-mythos-the-system-card

[^psychiatrist]: https://www.forbes.com/sites/lanceeliot/2026/04/15/anthropic-audaciously-hires-a-psychiatrist-to-psychologically-assess-claude-mythos-ai/
