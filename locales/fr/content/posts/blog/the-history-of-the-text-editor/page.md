---
title: "La fascinante histoire de l'éditeur de texte"
excerpt: "Des trous perforés dans du carton aux éditeurs qui écrivent du code à ta place. L'histoire du modeste éditeur de texte, et la rivalité entre Vi et Emacs, plus ancienne que la plupart des personnes en vie aujourd'hui."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "L'histoire de l'éditeur de texte, des cartes perforées et des éditeurs de lignes à Vi, Emacs, VS Code et l'ère de l'IA. Comment l'écart entre une idée et du code qui s'exécute n'a cessé de se réduire."
  keywords: ["histoire des éditeurs de texte", "vi vs emacs", "histoire de l'éditeur de texte", "histoire des éditeurs de code"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Introduction

Depuis que j'ai commencé à coder il y a 30 ans, j'utilise un éditeur de texte presque tous les jours. J'en ai essayé beaucoup, et il m'est arrivé de défendre le mien avec une ferveur quasi religieuse.

Pendant toute cette période, l'un des premiers rites de passage d'un nouveau développeur a été d'installer un éditeur de texte et d'apprendre à s'en servir. Mais à mesure que le codage agentique change ce que signifie être développeur, l'ère de la domination de l'éditeur de texte touche peut-être à sa fin.

Alors je me suis dit qu'il serait intéressant de se pencher sur l'histoire de l'éditeur de texte. Des trous perforés dans du carton et des heures d'attente, à l'édition ligne par ligne sur une imprimante, jusqu'à une rivalité entre Vi et Emacs plus ancienne que la plupart des personnes en vie aujourd'hui.

Voici l'histoire du modeste éditeur de texte.

## Avant l'éditeur : des trous dans du carton (années 1950-1960)

Difficile d'imaginer programmer sans écran pour voir son code, et pourtant c'est là que tout commence.

Dans les années 1950 et 1960, l'écran n'avait pas encore été inventé : les programmes étaient perforés physiquement sur des cartes en carton (ou sur du ruban de papier), une ligne de code par carte. « Éditer » son code, cela voulait dire re-perforer une carte, ou échanger physiquement des cartes dans le paquet.

Si mon code met plus de quelques secondes à s'exécuter, la lenteur de la boucle de retour me frustre énormément ; à cette époque, pourtant, le retour se mesurait en heures. Tu remettais ton paquet de cartes à un opérateur, qui le plaçait dans une file de tâches à exécuter. Tu récupérais une impression des heures, voire des jours, plus tard. J'imagine que la « faute de frappe » ne pardonnait vraiment pas à l'époque... !

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="Une opératrice de perforatrice dans les années 1950, en train de perforer des données sur des cartes" />
  <figcaption>Une opératrice de perforatrice dans les années 1950. Photo du U.S. Census Bureau via <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>, domaine public.</figcaption>
</figure>

## L'ordinateur commence à répondre (années 1960)

Deux inventions ont tiré l'édition de ce monde lent du traitement par lots vers quelque chose d'interactif.

La première, c'est le **télétype**. Le télétype a remplacé le principe des lots de cartes préperforées : tu tapais sur un clavier, tes frappes étaient envoyées à la machine en temps réel, et elle imprimait ses réponses directement sur un rouleau de papier. Il n'y avait toujours pas d'écran, mais pour la première fois, tu disposais d'un canal de dialogue en direct avec l'ordinateur, au lieu d'une pile de carton.

La seconde, c'est le **temps partagé**. Sans temps partagé, un ordinateur restait connecté à une seule personne à la fois, limité à la vitesse à laquelle elle pouvait taper et lire les réponses, ce qui gaspillait un temps fou à attendre que l'opérateur humain agisse. Le temps partagé a réglé le problème en permettant à la machine de passer d'une personne à l'autre : plusieurs personnes pouvaient être connectées à une même machine, qui basculait si vite entre elles que chacune avait l'illusion d'avoir l'ordinateur pour elle toute seule.

Combine les deux, et te voilà en pleine conversation avec la machine. Et une fois qu'on peut converser, on peut se mettre à modifier son code sur place, une ligne à la fois, au lieu de re-perforer des cartes en croisant les doigts. C'est exactement ce que les premiers vrais éditeurs ont permis de faire.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Un terminal Teletype Model 33 ASR, qui imprimait la sortie sur du papier plutôt que sur un écran"/>
  <figcaption>Teletype Model 33 ASR. Photo de ComputerGeek7066 via <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

## Les éditeurs de lignes : ed, QED et TECO (1962-1971)

Les années 1960 ont apporté un autre changement de paradigme majeur. Ton programme a cessé d'être un objet physique que tu transportais (un paquet de cartes dans une boîte) pour devenir un fichier nommé, stocké sur le disque de l'ordinateur. Plutôt que d'imprimer une nouvelle carte pour changer ton programme, tu pouvais désormais réellement l'éditer.

Nous n'avions toujours pas d'écrans, cela dit. À la place, tout ce que tu exécutais était recopié sur une feuille de papier. Cette impression, c'est ce qu'on appelle une « copie papier » : une trace permanente des instructions données à l'ordinateur.

C'était la première fois que nous avions quelque chose qui ressemble aux éditeurs modernes, mais ils restaient assez déroutants, car ils étaient **orientés ligne**. Tu travaillais une ligne à la fois, à coups de commandes. Tu saisissais des commandes (dont certaines sembleront très familières à ceux d'entre nous qui ont utilisé vim), et ces commandes appliquaient des modifications. Par exemple, corriger une coquille dans un poème pouvait ressembler à ceci :

```
saisie        sortie            ce que ça fait
------------  ----------------  ----------------------------------------
ed poem       45                ouvre le fichier "poem" ; ed affiche sa taille
1,$p                            affiche toutes les lignes - ed répond :
              Roses are red
              Violets are blu   la coquille !
              Sugar is sweet
2             Violets are blu   saute à la ligne 2 ; ed l'affiche
s/blu/blue/                     sur cette ligne, remplace blu par blue
p             Violets are blue  affiche la ligne actuelle (corrigée)
w             46                écrit/enregistre ; ed affiche la nouvelle taille
q                               quitte
```

Les rares personnes qui codaient à cette époque te citeraient sans doute trois éditeurs notables de la période :

- **TECO**, créé en 1962 par Dan Murphy au MIT, servait à l'origine à éditer du ruban de papier perforé. Il était célèbre pour son côté cryptique, et faisait aussi office de langage de programmation (ce détail comptera plus tard)
- **QED**, créé en 1965-66 par Butler Lampson et L. Peter Deutsch à Berkeley, a été l'un des premiers éditeurs de lignes. Deux ans plus tard, Ken Thompson l'a réécrit et lui a ajouté les **expressions régulières** (un type de langage de programmation qui sert à rechercher des motifs dans du texte) : c'était la première fois qu'elles apparaissaient dans un éditeur.
- **ed**, publié au début des années 1970 par Ken Thompson aux Bell Labs, a réduit les idées de QED à un éditeur minimal, livré avec le premier Unix. `ed` est encore installé aujourd'hui sur toutes les machines Mac et Linux, et son langage de commandes est l'ancêtre direct de `grep`, de `sed` et des commandes `:` de Vi (chacun a d'ailleurs sa [voie sur Exercism](http://exercism.org/tracks) si tu veux les apprendre !)

TECO abrite aussi ce que l'on considère généralement comme le plus ancien « easter egg » logiciel connu (une fonctionnalité cachée, comme on en trouve dans beaucoup de jeux aujourd'hui). Dans une version ultérieure de TECO, taper `make love` te valait la réponse malicieuse `not war?`. La blague a été glissée vers 1967 au laboratoire d'IA de Stanford, environ dix ans avant que les easter eggs ne deviennent une tradition du jeu vidéo. Tu peux [installer TECO](https://github.com/blakemcbride/TECOC) et essayer par toi-même !

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="Un terminal vert sur noir montrant la commande make love, à laquelle TECO répond Not war?" />
  <figcaption>L'easter egg <code>make love</code> / <code>not war?</code> de TECO, reproduit dans une version moderne de TECO.</figcaption>
</figure>

## Voir la page entière : Bravo et le WYSIWYG (1974)

Pendant ce temps, au **Xerox PARC**, une autre branche de l'histoire prenait naissance.

En 1974, Butler Lampson et Charles Simonyi publient **Bravo**, le premier éditeur **WYSIWYG** (« _what you see is what you get_ », c'est-à-dire « ce que tu vois est ce que tu obtiens »). Il affichait du texte mis en forme, avec de vraies polices, sur un écran bitmap, et utilisait la **souris** pour sélectionner le texte (la souris avait en réalité été brevetée bien plus tôt, mais c'est une histoire pour une autre fois !).

Un peu comme Vim, il avait deux modes : un « mode commande », où appuyer sur les touches _faisait_ des choses, et un « mode insertion », où appuyer sur les touches écrivait à l'écran.

C'est en fait un tournant clé de notre histoire. D'un côté, Simonyi a ensuite emporté ces idées chez Microsoft, où il a construit Word et nous a donné les traitements de texte. De l'autre, l'écran, la souris et l'édition modale ont alimenté directement les éditeurs de code qui ont suivi.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="Un ordinateur Xerox Alto, sur lequel tournait Bravo, le premier éditeur WYSIWYG" />
  <figcaption>Xerox Alto. Photo via <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>, CC BY-SA 2.5.</figcaption>
</figure>

## La grande rivalité : Vi et Emacs (à partir de 1976)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="Une capture d'écran de GNU Emacs en train d'éditer du code" />
  <figcaption>GNU Emacs. Capture d'écran de tecosaur via <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Le cœur de l'histoire : en **1976**, sur deux côtes opposées des États-Unis, naissent, à partir de philosophies opposées, les deux éditeurs qui dominent encore la programmation sérieuse
- **Emacs** (MIT : Richard Stallman, avec David Moon et Guy Steele) : a commencé comme un ensemble de **macros pour TECO** (« Editor MACroS »)
- La grande idée d'Emacs : un éditeur doit être infiniment **programmable et extensible** par la personne qui l'utilise. C'est moins un éditeur de texte qu'un environnement Lisp dans lequel il se trouve qu'on édite du texte
- Stallman l'a reconstruit sous le nom de **GNU Emacs** en 1984, et il est devenu un porte-drapeau du mouvement du logiciel libre
- **Vi** (Berkeley : Bill Joy, alors étudiant en thèse, plus tard cofondateur de Sun) : un mode **visuel** plein écran, construit au-dessus du cœur d'édition de lignes d'ed

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Une capture d'écran de Vim en train d'éditer du code" />
  <figcaption>Vim, le descendant moderne le plus populaire de Vi. Capture d'écran de Carolinedmoreschi via <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Vi a été conçu sous des contraintes brutales : il devait rester utilisable via un **modem à 300 bauds**, où chaque caractère envoyé à l'écran comptait
- Cette rareté a produit le génie de Vi : l'**édition modale**, où les frappes forment un langage de commandes compact pour se déplacer dans le texte et le transformer
- **Vim** (« Vi IMproved », 1991) a ajouté l'annulation multi-niveaux, la coloration syntaxique et les plugins. **Neovim** l'a ensuite modernisé encore davantage
- La « **guerre des éditeurs** » entre les deux camps est la plus vieille rivalité du logiciel, et c'est au fond un désaccord philosophique : Emacs (environnement maximal, programmable, à tout faire) contre Vi (minimal, modal, d'une efficacité implacable)
- Les deux sont encore utilisés quotidiennement près de 50 ans plus tard, ce qui est stupéfiant pour n'importe quel logiciel

## Des éditeurs pour tous les autres : BBEdit, TextMate, Sublime (1992-2008)

- À mesure que les systèmes d'exploitation graphiques mûrissaient, une nouvelle catégorie d'éditeurs est apparue pour les développeurs qui voulaient une interface graphique native, pas un terminal
- **BBEdit** (1992, Mac) : l'éditeur vétéran, fidèle à son slogan « it doesn't suck » (« il ne craint pas »)
- **TextMate** (2004, Mac) : extrêmement influent pendant le boom de **Ruby on Rails**. Son système de « bundles » et d'extraits de code, et son format de grammaires pour la coloration syntaxique, sont devenus un standard de fait que VS Code utilise encore aujourd'hui
- **Sublime Text** (2008) : rapide, multiplateforme, minimal. Il a introduit des idées que tout le monde a copiées, comme la minimap, les curseurs multiples et une palette de commandes à recherche floue
- Sublime a prouvé qu'il existait un marché énorme entre « éditeur dans le terminal » et « IDE (environnement de développement intégré) poids lourd »

## L'ère des technologies web : Atom et VS Code (2014-2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="Une capture d'écran de VSCodium, la version open source de VS Code" />
  <figcaption>VSCodium, la version entièrement open source de VS Code (visuellement identique à la version de Microsoft, mais sous licence MIT, ce qui permet de la montrer ici). Capture d'écran via <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014) : « un éditeur de texte hackable pour le 21e siècle », construit avec les technologies du web (HTML, JS, Node) via ce qui allait devenir **Electron**. Hackable comme Emacs, mais lent. GitHub l'a retiré en décembre 2022
- **VS Code** (Microsoft, 2015) : lui aussi basé sur Electron, mais plus rapide et équipé de série (autocomplétion, débogage, Git intégré). Il a gagné de façon décisive et domine aujourd'hui
- L'idée structurelle la plus importante de VS Code a été le **Language Server Protocol (LSP)**, un protocole de « serveur de langage »
- Avant LSP, chaque éditeur devait réimplémenter de zéro la « compréhension » de chaque langage (autocomplétion, aller à la définition, détection d'erreurs)
- Avec LSP, un langage fournit un unique « serveur » auquel n'importe quel éditeur peut parler. Cela a découplé l'intelligence du langage de l'éditeur, et c'est aujourd'hui un standard de l'industrie

## L'ère de l'IA : des éditeurs qui écrivent avec toi (à partir de 2021)

- Le chapitre le plus récent fait passer l'éditeur du statut d'outil avec lequel tu manipules du texte à celui de **collaborateur**
- **GitHub Copilot** (2021) : autocomplétion par IA (intelligence artificielle) directement dans l'éditeur, plus tard exposée via son propre serveur de langage pour que n'importe quel éditeur puisse s'y brancher
- **Cursor** et **Windsurf** : des forks de VS Code qui reconstruisent la boucle d'édition autour de l'IA (modifications multi-fichiers, chat, agents) tout en conservant les extensions de VS Code
- **Zed** (écrit en Rust, passé en open source en 2024) : un éditeur repensé de zéro, accéléré par le GPU, construit pour la vitesse, la collaboration et l'IA
- **Les outils agentiques** (comme Claude Code) : l'« éditeur » se pilote de plus en plus lui-même, et l'humain relit et dirige au lieu de taper
- Fait intéressant, LSP est en train d'être réutilisé une fois de plus, cette fois pour donner aux agents d'IA une intelligence précise du code, au lieu de suppositions à base de recherche de texte

## La fin d'une époque ? (aujourd'hui)

- Chaque époque de cette histoire a comprimé l'écart entre avoir une idée et la voir s'exécuter : les cartes en lots (des heures), puis les éditeurs de lignes (une ligne à la fois), puis les éditeurs plein écran (le fichier entier), puis l'intelligence des IDE (l'éditeur comprend ton code), puis l'IA (l'éditeur écrit avec toi)
- Et pourtant, les deux éditeurs de 1976, Vi et Emacs, sont toujours là. Leurs idées fondamentales (l'efficacité modale, l'extensibilité programmable) ont survécu à toutes les vagues de matériel
- Pendant 50 ans, apprendre son éditeur a été un rite de passage. C'est peut-être en train de changer
- [Jiki tie-in / closing thought to go here]
- Merci de ta lecture
