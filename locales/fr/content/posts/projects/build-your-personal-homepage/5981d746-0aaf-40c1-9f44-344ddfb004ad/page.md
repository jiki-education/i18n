---
title: "Épisode 1 : les bases du codage agentique"
excerpt: "On lance ce projet avec une plongée en profondeur dans le codage agentique. Ce que sont les LLM et les agents, comment fonctionnent les modèles et l'effort, comment s'installer gratuitement avec OpenCode, et la construction de ta toute première page web."
summary:
  from: "On part du principe que tu ne connais rien au web ni au codage agentique."
  to: "Tu comprends la boucle du codage agentique et tu écris ta première page perso, toute simple, dans le navigateur."
  keyConcepts: ["Codage agentique", "Modèles et effort", "Tokens et contexte", "Bases du HTML"]
seo:
  description: "Découvre ce qu'est le codage agentique, comment fonctionnent les LLM, les modèles et les tokens, et crée ta première page web avec OpenCode."
  keywords: ["codage agentique", "llm", "html", "débutant"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Introduction

Bienvenue dans le premier épisode de cette nouvelle série, qui s'intéresse à la façon d'utiliser les agents et les LLM pour construire des choses à notre époque, où le code a tellement changé. On a animé beaucoup de sessions comme celle-ci au fil des années pour Exercism, mais c'est la première session en direct officielle « Learn to Build » pour Jiki.

Laisse-moi t'expliquer ce que va être cette série, ce qu'on couvre aujourd'hui précisément, ce qu'on va couvrir tout au long de la série, et à qui elle s'adresse. Je vais commencer par cette dernière question.

## À qui ça s'adresse

Ça s'adresse en réalité à deux groupes de personnes. Celles qui débutent totalement en programmation, qui découvrent tout cet univers et veulent simplement se lancer et comprendre par où commencer pour apprendre. Mais aussi celles qui sont bien plus expérimentées, peut-être même des développeurs chevronnés, qui ne se sont pas encore vraiment mises aux changements apportés par le codage agentique et qui veulent comprendre ce qui se passe, voir des choses en action, en discuter, et se construire une vraie compréhension de tout ça. Tu peux donc te situer n'importe où sur ce spectre, de ton tout premier jour de code (tu as peut-être décidé de te mettre au code ce matin, tu as trouvé Jiki et te voilà) jusqu'au profil très expérimenté.

Dans cette série en particulier (il va y en avoir plusieurs), je vais partir du principe que tu ne sais rien. Donc si tu es un développeur chevronné, il y aura beaucoup de choses que je vais dire et que tu connais déjà par cœur, ce qui risque de te sembler un peu ennuyeux. Si c'est ton premier jour, il ne devrait rien y avoir que je suppose acquis de ta part. Certaines choses te passeront peut-être au-dessus de la tête, mais je traite cette session comme si elle était faite pour toi. Et si tu n'as jamais pratiqué ce nouveau type de codage alors que tu es plus expérimenté, ça te sera quand même utile.

Je vais te montrer un peu ce que signifie coder de cette façon. Je vais te montrer deux ou trois exemples de choses que je dois régler tout de suite dans Jiki, et les corriger, en guise de préambule. Ensuite on va discuter de certains des termes qu'on emploie et de la manière dont tout ça s'articule. Et puis on va tout simplement fabriquer quelque chose. On va créer une nouvelle page d'accueil.

C'est quelque chose que je veux encourager tout le monde à faire. Construis-toi un nouveau site web. Ça peut être ta page perso. Ça peut être autre chose. Fais-toi simplement un CV en code, peu importe. Après cette session, mets en pratique ce que tu as vu ici et fais des essais.

Je vais utiliser Claude et des choses un peu plus avancées, mais je vais aussi te montrer comment faire tout ça si tu n'as pas d'argent à y consacrer. Si tu veux travailler avec des agents gratuitement, c'est aussi ce qu'on va regarder.

### Que faut-il avoir préparé à l'avance ?

Absolument rien. Tu arrives, c'est tout. Je vais t'expliquer les choses, et je vais ensuite publier une série de guides qui accompagnent cette session. Des guides sur l'installation d'OpenCode, qu'on va regarder ensemble, des guides sur les différents termes liés aux LLM et sur leur fonctionnement, et un guide sur l'utilisation de GitHub, dont on va parler également. Tu pourras passer quelques jours à rattraper tout ça et à les parcourir.

Si tu as une question à laquelle je ne réponds pas dans cet épisode, tu peux toujours aller sur le forum, [forum.jiki.io](https://forum.jiki.io), et la poser là-bas. J'y suis. D'autres développeurs expérimentés et d'autres personnes qui suivent la série y sont aussi et peuvent répondre aux questions.

## Repérer les erreurs que font les LLM

Je vais passer sur le forum de Jiki, sur quelque chose que j'ai remarqué un peu plus tôt. Ce sont différents sujets liés à la traduction, et tu vas remarquer que la plupart ont un drapeau à côté du pays. Un drapeau néerlandais, un drapeau allemand. On a une dinde à côté du turc. Sûrement un peu raciste. Il va probablement falloir régler ça dans un instant. Mais celui que j'ai vu, c'est l'indonésien. Tout ça a été fait par Claude, ce choix d'emoji. Et là, il a manifestement inventé un emoji, ou récupéré un emoji qui ne fonctionne pas.

![Le forum de Jiki affichant les sujets de traduction. Le turc a un emoji dinde au lieu d'un drapeau, et l'indonésien affiche un emoji :garuda: cassé.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

C'est là-dessus que je veux qu'on démarre, parce que c'est du réel. J'ai vu ça deux minutes avant de passer en direct. C'est le genre de chose que tu vas voir souvent en travaillant avec ces LLM et ces agents. Ils inventent des choses. Ils croient qu'il y a un emoji ici, sauf qu'il ne fonctionne pas sur ce site. Ils sont censés mettre un drapeau pour la Turquie, mais à la place ils mettent une dinde.

Ce sont des erreurs qui nous sautent aux yeux, à nous les humains. On les voit immédiatement. Elles crèvent l'écran. On rigole tout seul dans notre coin. Ce qui est inquiétant, ce sont les décisions du même ordre que le LLM prend ici. Et c'est le modèle le plus puissant. C'est Fable. C'est le modèle tellement intelligent et dangereux que le gouvernement américain l'a interdit. Et pourtant, il met une dinde à la place du drapeau turc, sans forcément savoir que ça pourrait agacer quelqu'un. Ceci dit, il a peut-être simplement un grand sens de l'humour. Va savoir.

Ça, ce sont les choses visibles, les choses évidentes. Imagine combien d'autres petites erreurs, ou disons plutôt de mauvaises décisions, ces LLM prennent en coulisses. Au fil de l'année qui vient, ou des nombreuses années où on fera ces directs, les LLM vont s'améliorer. Mais ce que je veux que tu saches tout de suite, et que tu intègres vraiment, c'est que ce ne sont pas des sortes de dieux du code à qui tu peux confier n'importe quoi en étant sûr qu'ils feront tout correctement. Ils font des erreurs en permanence. Certaines sont évidentes et drôles, d'autres non. Si tu veux être un développeur moderne, une grande partie de ton travail consiste à chercher ces erreurs. Et par là, je ne veux pas dire chercher les moments où ils mettent une dinde à la place du drapeau turc. Je veux dire chercher les erreurs conceptuelles qu'ils commettent, les idées, les choses qu'ils proposent et qui, tout simplement, ne sonnent pas juste et n'ont pas vraiment de sens.

### Que veut dire i18n ?

Ça veut dire internationalisation. 18, c'est le nombre de lettres entre le i et le n. C'est un raccourci.

## Le codage agentique en résumé

Regardons à quoi ressemble le fait de faire un peu de codage agentique. Reprenons ce glossaire pour l'indonésien avec l'emoji cassé. Je vais en faire une capture d'écran, revenir dans mon terminal, et aller dans Claude Code. On va parler dans un moment de la manière d'installer tout ça. Ça peut sembler un peu intimidant, tout noir et vert pour l'instant, mais on y viendra.

Ce que je veux te montrer, c'est ceci. Je peux glisser l'image dedans et écrire « corrige l'emoji incorrect ». Et là il va partir, réfléchir et faire tout un tas de choses. On peut regarder une partie de ce qu'il fait. Il lance des commandes. Il essaie de comprendre ce qui se passe. Pourquoi ce drapeau est-il faux ? Que signifie ce drapeau ? Comment est-ce arrivé ? Le voilà maintenant qui commence à lire des scripts. Voici le script de création de la catégorie de langue sur le forum, celui qu'il a exécuté quand il a créé cette catégorie. Il parcourt maintenant l'historique de tout ce qu'il a fait, et il essaie de déterminer quand ça a dérapé, comment et pourquoi. Il lit différents fichiers. Il lance différentes commandes. Tu vois ce compteur qui augmente, il en est à sa quatrième commande, et ainsi de suite.

![Claude Code dans le terminal en train de traiter « Corrige l'emoji incorrect », cherchant des motifs, lisant des fichiers et lançant des commandes shell.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

Et puis il annonce qu'il a trouvé. Le bon emoji devrait être le drapeau de l'Indonésie, pas `:garuda:`. Il repart, lance quelque chose qui met la catégorie à jour. Et si on revient sur le forum maintenant et qu'on ouvre ça, tu vois qu'il l'a corrigé. On a désormais un drapeau indonésien.

![Le sujet Glossaire pour l'indonésien sur le forum, affichant maintenant le bon drapeau indonésien.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Voilà donc le codage agentique en résumé. On a dit « fais cette seule chose ». Il est parti. Il a lancé ces différentes commandes. Il a lu des documents. Il fait tout ce travail très compliqué en arrière-plan, avec du bash à l'air compliqué qui serait très pénible à écrire. Sauf si tu es mainteneur d'Exercism, auquel cas c'est très facile. Mais pour nous, simples mortels, c'est peut-être un peu compliqué à écrire. Il a fouillé pour essayer de comprendre quand ça avait dérapé. Il a lu l'historique des fichiers. Il a trouvé l'entrée indonésienne et des traces de journalisation. Il a lu les règles que je lui ai données, trouvé des variables qui lui permettent d'aller mettre le forum à jour, compris ce qui n'allait pas, discuté très brièvement avec moi, puis il est allé mettre la chose à jour.

C'est comme ça que j'ai construit Jiki. C'est comme ça que travaillent beaucoup de développeurs modernes, et je dirais probablement la majorité des développeurs en activité aujourd'hui. On trouve un problème comme celui-là. On le repère. Il arrive peut-être via un ticket créé par quelqu'un d'autre. Et ensuite on le confie à quelque chose comme Claude, ou à l'un des nombreux autres modèles qui existent, et on y viendra dans un moment. Ils déroulent ce processus complexe en plusieurs étapes, puis ils corrigent le bug.

Alors, ce bug est évidemment très simple. Il tient sur une page. Il y a un emoji incorrect. Il devrait y avoir tel emoji, et il y en a un autre. Donc il peut le corriger assez vite. Mais là où toute cette façon de travailler fonctionne vraiment bien, c'est quand on ne cherche pas juste à corriger un petit détail. On construit une nouvelle fonctionnalité, ou on débogue quelque chose de vraiment compliqué. Ça veut dire lire des centaines de fichiers, puis devoir écrire dans certains d'entre eux.

## Être raisonnable sur les coûts

Avant de passer à un autre exemple, laisse-moi te montrer une chose. Je peux taper `usage` ici, et cette commande nous montre ce qui se passe sous le capot. Tu peux voir que ça a pris 52 secondes du début à la fin pour Claude, et que ça a coûté 37 cents. Alors, je suis sur Claude Max, ce qui veut dire que j'ai un très gros quota sur les différents modèles. Ces 37 cents ne me sont donc pas facturés. C'est simplement inclus dans mon abonnement mensuel.

![L'écran d'utilisation de Claude Code affichant un coût total de 0,38 dollar et 52 secondes de temps d'API pour la correction de l'emoji.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

Mais c'est quelque chose dont je veux que tu prennes conscience tout de suite, au moment où on commence à en parler. Ce processus, comprendre tout ça et le résoudre, a coûté 37 cents. Si j'avais voulu, j'aurais tout simplement pu aller sur le forum et modifier le sujet moi-même. J'aurais pu sélectionner l'emoji, taper « Indonésie » et cliquer sur le drapeau. Ça ne m'aurait pas coûté 37 cents. Si tu imagines chacune des choses que je fais en tant que développeur, sur le nombre d'heures par jour qu'on passe à coder, on a sans doute intérêt à être un minimum raisonnable sur ce à quoi on emploie cette intelligence surpuissante et sur ce qu'on peut simplement faire à la main.

C'est particulièrement vrai pour celles et ceux qui ne paient pas d'abonnement Claude Max et qui n'ont pas beaucoup d'argent. Je vais te montrer comment faire tout ça gratuitement. Mais quand tu es sur une offre gratuite, tu auras un quota d'utilisation limité. C'est un quota assez généreux. Il te suffit largement. Mais je veux que tu prennes l'habitude de ne pas gaspiller ce quota sur des choses que tu peux faire à la main. C'est bien mieux pour toi d'enquêter par toi-même, de comprendre ce qui se passe, d'apprendre un peu au passage, puis de corriger la chose. C'est la meilleure façon d'apprendre. Si tu commences à balancer ça sur tout et n'importe quoi, on va avoir des ennuis.

Laisse-moi te montrer autre chose. Ceci t'indique ton utilisation mensuelle. Voici mon mois dernier. Comme je le disais, je suis sur cette formule Claude Max, donc je paie simplement un forfait de 200 dollars par mois. Mais si je n'étais pas sur Claude Max, si je payais directement à la consommation, ça m'aurait coûté 35 000 dollars ce mois-ci. Ça représente trois milliards de tokens utilisés en un mois. On va parler dans une minute de ce que sont les tokens. Mais tu peux très vite faire grimper la facture.

![Un tableau, dans le terminal, de l'utilisation quotidienne de tokens par modèle, avec des milliards de tokens consommés sur Fable, Opus, Sonnet et Haiku.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### Et Ollama et les autres modèles locaux ?

Ça fonctionne. Si tu as un ordinateur assez puissant pour faire tourner des modèles en local, un bon MacBook ou une bonne machine Windows avec un bon GPU, tu peux faire tourner des modèles sur ton ordinateur plutôt que d'envoyer des données à Claude et de recevoir sa réponse. En revanche, ce sera beaucoup, beaucoup plus lent. Ce qu'on vient de regarder, qui a pris 52 secondes, va prendre 5 minutes, voire une demi-heure. Même sur une machine dernier cri, on parle de 10, 20 ou 30 fois plus lent qu'avec Claude ou un équivalent.

### N'est-il pas parfois moins cher d'embaucher un développeur junior que de payer un LLM ?

Comme j'ai un abonnement Claude Max, à 200 dollars par mois, mon coût total pour utiliser tout ça est de 200 dollars par mois. Un développeur junior va coûter dix fois plus. Mais en plus, j'ai tendance à faire tourner six ou sept Claude en même temps. Donc si ce Claude vaut un développeur junior, j'ai six ou sept de ces juniors qui tournent dans différents onglets en même temps, sur des tâches différentes. Il n'existe tout simplement plus une économie où demander à quelqu'un d'écrire ce code à la main ait le moindre sens.

Mais là où tu peux tirer ton épingle du jeu, là où toi, en tant que junior, tu peux devenir précieux, c'est que si tu sais faire tourner six ou sept Claude à la fois, et leur confier des tâches plus simples, plus élémentaires, alors tu vas apporter énormément de valeur à une entreprise. Ma capacité totale en tant que développeur, c'est probablement d'en faire tourner cinq ou six en même temps, et je passe encore beaucoup de temps à réfléchir et à lire. Tout le monde va plafonner à ce niveau-là si le travail est fait correctement, c'est-à-dire en réfléchissant à ce qui se passe. Donc si tu veux entrer dans la tech aujourd'hui, c'est en apprenant à piloter ces Claude, ces autres modèles, ces LLM, ces agents, à leur écrire des prompts, à leur donner les moyens d'agir et à relire leur travail de façon intelligente et efficace, que tu apporteras de la valeur.

## Amorcer une nouvelle langue

Voilà donc notre point de départ. Tu en sais désormais un peu plus sur le fonctionnement de tout ça. Je vais en lancer un autre pendant qu'on discute. Une des choses que j'ai construites, c'est une commande d'amorçage de langue, pour traduire Jiki dans différentes langues. J'ai déjà amorcé le portugais du Brésil sur le forum, mais je veux amorcer le portugais européen. Je vais simplement cliquer sur « exécuter », et ensuite on ira jeter un œil.

Ce que ça fait, c'est partir créer des informations, un guide, un glossaire et d'autres choses qui nous serviront à traduire le site en portugais. Tu peux voir la version turque sur le forum. C'est le glossaire qui a été produit et créé, avec tous les termes qu'on traduit en turc.

Cet agent part maintenant faire beaucoup de travail pour que ce soit correct. Il va lancer d'autres agents. On a un agent principal qui pilote tout ça. Il va envoyer d'autres agents chercher les bons termes pour le portugais. Il va leur faire consulter la documentation de Mozilla et celle de Microsoft pour trouver quels termes sont employés. Il ira sans doute voir Duolingo et quelques autres sites. Et ensuite il viendra me faire un rapport avec tout un tas d'informations sur ce qu'il a trouvé, et me poser des questions.

Pendant qu'il fait ça, je veux qu'on regarde un peu la commande que je viens de lancer, Bootstrap Language. C'est ce que Claude est en train de faire. Ce sont les instructions que Claude suit. On a un petit bloc en haut, qui n'est qu'une information destinée à Claude sur la façon d'exécuter tout ça. Et ensuite, tout le reste, ce sont des informations que toi ou moi pourrions lire et qui expliquent ce qui se passe.

On dit à Claude d'amorcer une nouvelle langue. On lui dit qu'il doit rechercher comment cette langue s'écrit, faire valider les décisions que je suis seul à pouvoir prendre, consulter ces guides, et se servir du hongrois comme base, tout simplement parce que c'est la langue sur laquelle on a travaillé en premier. Aron, qui est développeur front end chez nous, est hongrois. Et ensuite on a toute une série de phases qu'il traverse. Des vérifications qu'il effectue. Tu peux voir qu'on lui dit d'abord de vérifier si cette langue existe déjà. Si c'est le cas, il doit s'arrêter et le signaler. Et tu vois que la première chose qu'il fait, c'est dire « je vais commencer par vérifier si la langue existe ». Ça passe, elle n'existe pas, il continue.

Il a ensuite des fichiers qu'il va lire. Il lit ce fichier de règles, ce fichier sur la voix, quelques autres informations, et il charge tout ça dans sa mémoire, si l'on peut dire. On va parler dans un moment de ce que ça veut vraiment dire. Il a donc maintenant toutes ces informations à disposition, tous ces longs documents que j'ai écrits, avec les règles, la manière de s'exprimer avec la bonne voix, et tout le reste.

Et ensuite il fait cette recherche. Il a différentes règles que je lui ai données. Éviter la contamination par du contenu généré par des LLM. Je ne veux pas qu'il aille lire une masse de contenu que d'autres LLM ont déjà écrit. Je veux qu'il regarde essentiellement des choses antérieures à 2022, en vérifiant les dates de ce contenu avant de l'utiliser. Il vérifie en croisant plusieurs sources. Je lui dis d'être méfiant, d'être à l'aise avec l'incertitude, puis de chercher différentes choses. Quelles métaphores les gens emploient-ils ? Quel est le niveau de formalité et de registre ? Et ensuite il va mettre tout ça en forme et venir discuter avec moi, en s'arrêtant là. Il va m'expliquer ce qu'il a trouvé, me poser des questions, me proposer des termes clés. Et une fois que je les valide, une fois qu'on en a discuté, il va partir écrire un glossaire et un guide, les assembler, puis créer le message sur le forum. Il a la possibilité d'aller sur le forum de Jiki et de créer ce message, et il créera ensuite le message du glossaire. Ce sont deux messages distincts.

Voilà donc la commande que j'ai construite et qu'il peut aller suivre. Et on le voit en arrière-plan qui travaille dur. Le voilà justement qui rapporte ses conclusions de recherche. Voici la façon dont il faudrait s'adresser aux apprenants : on devrait utiliser le « tu » informel, qui est la manière chaleureuse et ordinaire de s'adresser à eux, et pas l'autre ton, plus formel. Et ensuite il me demande de trancher quelques points. Est-ce que ça me va ? Faut-il utiliser les mêmes conventions qu'au Brésil ? Il me donne quelques termes qu'il a choisis. Et à ce stade, je peux parcourir tout ça et dire d'accord, toutes ces décisions me conviennent, tes valeurs par défaut me conviennent. Et il repartira alors continuer.

![Claude présentant sa synthèse de recherche pour le portugais européen, avec ses sources et la décision d'utiliser le « tu » informel.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### Les commandes et les skills, c'est la même chose ?

Oui, c'est la même chose. Toutes les entreprises qui font des LLM ont des noms différents pour toutes ces choses.

## Les agents et les modèles

Je veux qu'on s'arrête une seconde pour réfléchir à ce qui vient de se passer, parce que c'est vraiment la clé pour comprendre la différence entre ouvrir l'application Claude ou ChatGPT et discuter avec, et faire du codage agentique comme ici.

Quand tu parles à Claude dans une interface, tu poses une question, et tu as en gros un seul agent en face de toi, qui part peut-être vérifier quelque chose puis revient et poursuit sa rédaction. C'est vraiment une conversation entre toi et une seule personne, un seul agent. Quand tu travailles selon ce modèle de codage agentique, ce qui se passe sous le capot, c'est qu'on lance quantité d'agents pour faire différentes choses. On aura des agents qui font de la recherche, des agents qui planifient, des agents qui construisent. Et on peut construire nos propres agents. Des agents qui testent les choses d'une certaine manière, des agents qui vérifient que les choses respectent certains standards. Et souvent, l'agent auquel on parle est celui qui pilote tous les autres.

Ces agents peuvent utiliser des modèles différents. C'est donc le bon moment pour parler des modèles. Tu as sans aucun doute beaucoup entendu ce terme. Tu as probablement une bonne idée de ce que sont les modèles, mais je vais l'expliquer rapidement.

Différentes entreprises, comme OpenAI ou Anthropic, ont différents modèles, et les modèles sont le mécanisme sous-jacent qui fait tourner un LLM. C'est quelque chose qui a été entraîné sur une certaine quantité de données pour fonctionner à une certaine vitesse. Les modèles de pointe, comme on les appelle, sont les tout meilleurs modèles. Dans le cas d'Anthropic, il s'agit actuellement de Fable, ou Mythos. Ils sont plus lents, ils sont chers, mais ils sont très puissants. Tout à l'autre bout, il y a Haiku, un modèle bien plus rapide. Il coûte quelque chose comme 50 fois moins cher, il est bien plus rapide, mais il raisonne moins bien. Et puis tu as Sonnet et tu as Opus. Tu as donc ces quatre modèles, et tous les différents fournisseurs proposent ce genre de gamme. Certains, très haut de gamme, sont hyper intelligents. D'autres sont bien moins intelligents mais bien plus rapides.

Pour une tâche simple, disons celle qu'on vient de regarder, du type « pourquoi ce drapeau est-il faux », il n'y aura aucune différence de performance entre Haiku et Fable. Mais si tu utilises Fable pour le faire, tu dépenseras 50 fois plus d'argent. Une des choses dont on veut donc toujours avoir conscience, c'est quel modèle convient à la tâche. Ça garde les choses vraiment rapides, ça maintient le niveau de qualité au bon endroit par rapport à ce dont on a réellement besoin, et ça limite nos coûts, ce qui compte aussi.

Quand tu fais tourner un agent qui lance lui-même plusieurs autres agents, ceux-ci prennent constamment cette décision eux aussi. S'ils lancent des agents pour des choses simples, ils utiliseront des modèles d'entrée de gamme. S'ils lancent des agents pour des choses très complexes, ils lanceront Fable.

## L'effort

On a aussi la notion d'effort. L'effort, c'est la quantité d'effort qu'un modèle veut bien fournir. Alors, qu'est-ce que ça veut dire ? Ces modèles fonctionnent en se parlant à eux-mêmes. Ils ont une longue conversation continue avec eux-mêmes. Tu l'auras vu si tu utilises Claude ou ChatGPT, où tu peux afficher le raisonnement et voir le modèle se répondre à lui-même. Ce qu'ils font, c'est raisonner, en formulant ce qu'ils pensent être la situation puis en construisant par-dessus.

Quand on parle d'effort dans le monde de Claude, et dans d'autres outils aussi, on lui demande combien de temps il doit passer à se parler à lui-même avant de revenir avec une réponse. Un effort faible veut dire ne te parle pas vraiment à toi-même, donne-nous simplement la première chose qui te vient. Un effort élevé veut dire parle-toi beaucoup à toi-même. Et ce qui est bien avec l'effort élevé, c'est que Claude va en pratique dire la première chose qui lui vient à l'esprit (l'analogie est mauvaise, mais disons la première chose qu'il trouve), puis il va raisonner de nouveau là-dessus pour voir si c'est pertinent ou non. Ensuite il ajoutera une troisième couche, puis il raisonnera sur l'ensemble pour voir si c'est pertinent ou non. Et ensuite il ajoutera une quatrième chose. Il continuera à raisonner sur ce qu'il dit jusqu'à arriver à un point qui le satisfait, ou qui le convainc. Alors qu'avec un effort faible, il te répondra immédiatement. Et ça peut être faux, comme ça peut ne pas l'être. Il n'a exercé aucune vérification sur sa propre réflexion.

On a donc ces deux axes. On a la qualité du modèle : Fable, Opus, Sonnet, Haiku. Et on a la quantité d'effort que ce modèle va fournir : faible, moyen, élevé, très élevé. Et on peut continuer comme ça. Souvent, les fournisseurs facturent davantage à mesure qu'on monte.

Dans Claude Code, on peut changer de modèle simplement en tapant `/model`, et on peut alors choisir entre Opus, Fable, Sonnet ou Haiku. Et on peut choisir l'effort : faible, moyen, élevé ou maximum, avec quelques options « max » à paillettes, et le mode ultracode, où on a de superbes animations dans lesquelles des gens ont mis énormément d'énergie.

J'ai tendance à rester sur Opus en effort moyen comme modèle standard pour la plupart des choses. Pour l'essentiel de ce que je fais, je veux quelque chose comme Opus, capable de réfléchir aux problèmes, et je trouve que l'effort moyen est le bon équilibre. Mais j'y suis vraiment attentif, et quand je démarre une tâche je réfléchis au modèle que je veux. Est-ce simple ou est-ce difficile ? Combien d'effort faut-il mettre dans tout ce processus ?

### Comment savoir quel modèle convient le mieux à une tâche ?

Tu vas simplement l'apprendre avec le temps. Une règle empirique facile consiste à te demander à quel point c'est difficile pour toi. Est-ce vraiment facile ? Est-ce comme changer un drapeau dans un message de forum ? Alors c'est vraiment facile. Haiku peut le faire avec un effort faible. Est-ce que tu lui demandes quelque chose qui te semble d'une complexité vertigineuse ? Alors prends un meilleur modèle ou mets plus d'effort.

Fable est formidable pour les tâches de longue haleine. Pour te donner un exemple, j'avais hier une session ouverte où j'ai pris toutes les vidéos qu'on a (je parlerai à un moment de la façon dont je les ai créées) et j'en ai extrait tout l'anglais. Tout l'anglais écrit à l'écran, je l'ai extrait des vidéos et transformé en calque, pour pouvoir ensuite le remplacer par une autre langue et réexporter les vidéos avec cette autre langue à l'écran.

J'ai confié ça à Fable. J'ai lancé la tâche. Je lui ai fait créer un agent Fable par vidéo, donc j'avais 32 Fable qui tournaient. Chacun d'eux a parcouru chaque bout de vidéo pour y trouver du texte. Ils ont pris des captures d'écran, puis modifié les images en en retirant le texte. Ensuite ils ont déterminé la police dans laquelle le texte avait été écrit, sa taille, sa graisse, l'espacement des lettres, l'interlignage, le crénage, tout ce genre de choses pour les polices variables. Ils ont ensuite réécrit ce texte à l'écran au bon endroit, puis ils ont pris des captures d'écran à répétition et les ont comparées jusqu'à ce que les deux images soient identiques au pixel près. J'avais un Fable qui a tout planifié, fait les recherches, examiné le sujet, écrit un peu de documentation, et ensuite j'avais un Sonnet en chef d'orchestre qui allait simplement lancer d'autres Fable pour faire tous ces travaux. Ça a pris environ trois heures. Ça a coûté à peu près 400 dollars. Là encore, c'était dans mon abonnement Max, mais ça aurait coûté environ 400 dollars sinon. Et ça a permis, pour l'essentiel, d'amener toutes les vidéos à un état où elles sont prêtes.

Dans ce genre de situation, je savais que c'était une tâche assez complexe. J'avais déjà essayé avec Opus et Opus n'y arrivait pas. C'était trop complexe pour Opus, donc je savais qu'il fallait Fable.

### Les modèles de pointe, c'est comme les smartphones haut de gamme ?

Oui, exactement. Ils sont plus intelligents, ils sont meilleurs, mais ils sont aussi plus chers et généralement plus lents. Et il faut garder en tête que le modèle de pointe d'aujourd'hui est le modèle bon marché de l'année prochaine. C'est déjà vrai. Haiku équivaut au modèle de pointe de l'an dernier. Haiku est donc déjà suffisamment bon pour faire beaucoup de code, alors même que c'est le modèle bon marché à l'autre bout de la gamme. Tu n'as besoin de ce modèle coûteux que si tu fais vraiment quelque chose qui était impossible avec le modèle précédent, comme Opus. Tu ne veux vraiment sortir ce modèle de pointe que dans des situations bien précises.

### Quand on est expert, n'est-ce pas frustrant de payer pour coder au lieu de le faire soi-même ?

Je paie 200 dollars par mois. Même si c'est une somme non négligeable, c'est peu au regard de la productivité supplémentaire que ça crée. Je pense en arriver maintenant à un point où je suis au moins une fois et demie plus productif. Ma production vaut une fois et demie ce qu'elle était. Je ne sais pas quel serait mon salaire sur le marché, parce que je n'ai jamais eu d'emploi, mais j'imagine que ça me fait économiser une fortune si c'est ça la mesure. Donc 200 dollars, c'est peu cher payé. Si je devais débourser 2 000 dollars par mois pour ça, ça ne vaudrait probablement pas le coup pour moi.

Est-ce que c'est hyper frustrant une grande partie du temps ? Oui. Mais ce que j'ai réalisé, c'est que ça me fait simplement monter d'un niveau d'abstraction. Avant, il y avait beaucoup de code que j'aurais dû écrire et qui, pour moi, était vraiment ennuyeux. Ça peut être très intéressant pour un junior ou un développeur intermédiaire, mais pour moi c'était mortellement ennuyeux. Aujourd'hui je n'ai plus à le faire, et je n'ai pas besoin d'avoir un junior ou un intermédiaire à encadrer. Je peux faire faire ça très facilement sans avoir d'autres personnes à gérer, ce qui veut dire que je reste libre d'être productif autrement. Le bénéfice net en vaut donc la peine pour moi.

Mais je pense que pour beaucoup de développeurs, c'est nettement moins fun, nettement moins agréable qu'avant. C'est aussi tout simplement la réalité du monde. On n'a pas le choix. Certaines personnes ont peut-être le luxe, dans leur travail, de ne pas s'y mettre. Si tu avances de 10 ans, je ne crois pas que beaucoup de gens aient encore ce luxe. Donc si tu veux pérenniser ta carrière, ou prendre de l'avance dans le secteur, devenir bon à ce jeu-là est, je crois, la clé.

## Les permissions et le mode automatique

Revenons à la tâche de traduction, qui est maintenant terminée. On a désormais des fichiers qui ont été commités. Si on retourne sur le forum, on va voir s'il y a un nouveau message. Ah, tiens, c'est intéressant. La publication sur le forum public a été bloquée, parce que j'avais mis ça en mode automatique.

Le fonctionnement, c'est qu'il essaie de faire des choses, et qu'un autre LLM surveille ce qu'il fait et vérifie si ces choses ressemblent à ce que j'ai explicitement demandé. Dès qu'il publie des données sur d'autres sites, ou qu'il fait quoi que ce soit de ce genre, il faut que je dise explicitement que je suis d'accord. Et comme je l'avais laissé en mode automatique, à mouliner tout seul, il ne m'a pas demandé si j'étais d'accord. Donc il a bloqué. Il demande « veux-tu que je crée ce message sur le forum ? », je dis oui, et il va maintenant le faire pour de bon. C'est une des choses qui sont arrivées ces deux ou trois derniers mois. On a désormais une sorte de LLM superviseur qui laisse davantage de choses se faire automatiquement, tout en essayant de bloquer les choses risquées ou dangereuses.

Donc maintenant, si j'actualise, voilà. On a le glossaire. Ce sont tous les termes qu'il a trouvés et lus. C'est tout ce qu'il a assemblé. Et on a maintenant un message.

![Le message final Glossaire pour le portugais européen sur le forum de Jiki, avec les traductions terme par terme et les notes.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp) Si tu parles portugais, la version européenne, tu peux venir ici et commencer à me dire tout ce qui ne va pas, et on pourra alors commencer à améliorer le glossaire et à le travailler. Pour celles et ceux qui parlent d'autres langues, on a des glossaires dans d'autres versions, en italien, en turc, et ainsi de suite. Tu sais maintenant comment ils ont été fabriqués. Tu peux aller le faire toi aussi.

## Claude Code, Codex et OpenCode

Voilà pour ma vue d'ensemble du fonctionnement de tout ça. Maintenant, ce que je veux te montrer, c'est comment installer tout ça chez toi.

Il existe beaucoup d'agents et d'outils différents que tu peux utiliser. Soyons donc bien clairs sur le vocabulaire. Claude Code, la fenêtre dans laquelle tu viens de me voir travailler, est un outil de codage agentique, peut-être même une plateforme de codage agentique. Il tourne sur ton ordinateur. Normalement il tourne dans le terminal, c'est comme ça que je l'ai installé. On peut aussi le faire tourner dans un éditeur de code, ce qu'on va voir dans une minute. Et c'est le portail entre toi et les modèles. Je t'ai montré que je peux basculer entre Opus, Sonnet et Haiku, et que je peux changer de niveau d'effort.

Tout ça se passe sur ton ordinateur local. C'est sur ton ordinateur local que tu écris. Il envoie des données à Anthropic, à l'un de leurs modèles. Ce qu'ils renvoient n'est pas juste un peu de texte qui s'affiche à l'écran. Ils renvoient tout un ensemble d'instructions que Claude Code peut interpréter pour agir. Ils disent va exécuter ce script sur l'ordinateur de la personne. Va regarder dans ce dossier sur l'ordinateur de la personne. Va interroger ce site web et fais telle chose. Toutes ces instructions viennent de Claude.

On n'est donc pas en train d'avoir une conversation avec Opus, avec Sonnet ou avec Haiku. On met du texte en entrée. Ce texte est empaqueté avec plein d'autres choses. Il est empaqueté avec du code de notre dépôt, du code qu'on a écrit ou qui a été mis là. Il est empaqueté avec tout l'historique de la conversation, les objectifs qu'on cherche à atteindre, nos préférences sur la façon dont on aime travailler. Tout ça est empaqueté, puis envoyé à Anthropic. Leurs modèles lisent tout ça, puis renvoient des instructions et un peu de texte. Tout ça est traité, et ensuite cette boucle se produit, cette boucle agentique, où il fait quelque chose, il retourne vers Claude, Claude revient et dit d'accord, maintenant fais ceci. Tout ça se passe loin de nous. Et à la fin, il nous dit : voilà, c'est terminé. On n'a pas pu envoyer le message sur le forum à cause de ceci. Veux-tu continuer ? Il y a toute une énorme boucle qui se déroule en coulisses.

On a donc deux décisions à prendre. La première, c'est quels modèles on veut utiliser. Veut-on utiliser Anthropic, OpenAI ou d'autres modèles en arrière-plan ? Et la deuxième, c'est avec quel outil on veut interagir. Si j'utilise Claude Code, j'interagis toujours avec l'un des modèles d'Anthropic. Si j'utilise Codex, la version d'OpenAI, j'interagis toujours avec l'un des modèles d'OpenAI, un des modèles GPT.

Ce que je vais te recommander d'utiliser, c'est encore autre chose, qui s'appelle OpenCode. OpenCode est une version open source, si tu veux, de Claude Code, une version open source de Codex. C'est le harnais, l'outil installé sur ton ordinateur, qui fait tourner toute cette boucle et qui gère tout. Mais il peut parler à n'importe quel modèle. Il peut parler à Anthropic, à Opus ou à Sonnet. Il peut parler à GPT-5 et à tout le reste. Mais il peut aussi parler à beaucoup de modèles gratuits. OpenCode lui-même est gratuit, et il propose toute une série de modèles gratuits que tu peux utiliser également.

On accède à OpenCode simplement en étant dans un terminal et en tapant `opencode`, une fois qu'on l'a installé. Et on peut choisir parmi beaucoup de modèles. On peut choisir Gemini, celui de Google. On peut choisir Opus, dont on vient de parler, ou Fable. On peut choisir Grok, si tu veux soutenir Elon Musk. Les GPT. DeepSeek, un modèle qui nous vient de Chine et qui a fait grand bruit. Qwen, très bon pour le code. Et toutes ces options tout en haut, qui sont les gratuites. Donc si tu n'as pas beaucoup d'argent, ou si tu veux simplement essayer, ou si ton travail ne paie pas d'abonnement, tu peux avoir OpenCode gratuitement et choisir ensuite un de ces modèles gratuits.

J'ai un guide que je vais publier et qui explique comment installer OpenCode, comment s'installer gratuitement, et lesquels de ces modèles tu peux utiliser. Je recommande DeepSeek V4 Flash (gratuit) pour le moment, mais je ne les ai pas beaucoup essayés, donc tu peux les tester toi-même et voir ce qui te convient.

Une réserve : ces modèles gratuits ne sont pas des modèles de pointe. Cela dit, Big Pickle est un modèle secret, donc c'est peut-être un modèle de pointe, on ne sait pas. Mais les autres n'en sont pas. Ce ne sont pas les tout meilleurs modèles. Ils se rapprochent plutôt de Haiku ou de Sonnet, des modèles d'un niveau inférieur. Mais pour là où tu en es, je pense que c'est une très bonne chose. Parce que les pas que tu veux faire sont de tout petits pas de bébé, et tu ne veux pas d'une superintelligence qui fasse tout à ta place. Tu veux quelqu'un avec qui travailler et discuter, avec qui avancer petit pas par petit pas, à qui demander comment les choses fonctionnent et auprès de qui apprendre.

## Les tokens et le contexte

Laisse-moi te montrer OpenCode dans le dépôt du traducteur. Il ne sait rien de mon dépôt. Mais je peux écrire quelque chose comme « combien de langues avons-nous pour le moment ? » et il va partir chercher. Voilà à quoi ressemble OpenCode. On a une zone de dialogue à gauche. On a la zone où on écrit, en bas à gauche. Quand ça tourne, on a une zone à droite. On peut faire Ctrl+P pour accéder à différentes commandes et à des choses avec lesquelles jouer. Tu peux voir que c'est très rapide. Il a réfléchi quelques millisecondes, lu des choses, trouvé la réponse, et il est revenu avec 14 langues. Si tu surlignes quelque chose, ça le copie dans ton presse-papiers, ce qui est pratique.

![OpenCode dans le terminal répondant à « Combien de langues avons-nous pour le moment ? », avec un panneau de contexte à droite affichant 10 054 tokens utilisés.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Tu peux voir que c'est gratuit, donc on n'a rien dépensé. Mais je veux que tu prêtes un peu attention aux chiffres sur la droite. Je ne vais pas expliquer en profondeur comment fonctionnent les LLM, parce que c'est un puits sans fond où ça ne vaut pas le coup de descendre. Mais l'unité fondamentale d'un LLM, c'est le token. Tu peux voir un token comme une syllabe. « How » fait probablement un token. « Language » en fait probablement trois : lang-u-age, quelque chose comme ça. « DeepSeek » sans doute deux. « V4 » sans doute deux.

Chaque fois que tu écris quelque chose, il prend ce que tu as écrit, plus tout ce dont il a besoin pour trouver la réponse, et envoie tout ça au modèle. Le modèle lit, renvoie sa réponse, pose sans doute une question de clarification, et ça fait quelques allers-retours. Ça consomme des tokens. On a demandé « combien de langues avons-nous pour le moment ? ». Ça fait peut-être 11 tokens, peut-être 15 avec les espaces. Le temps qu'il finisse de lire, de réunir tout ce dont il avait besoin, d'envoyer tout ça et de faire quelques allers-retours, il avait consommé 10 000 tokens. Ça revient donc à avoir envoyé une dissertation de 3 000 mots à un modèle et à en avoir reçu un petit quelque chose en retour.

Si on pose une question plus large, comme « quel est le processus pour ajouter une nouvelle langue ? », il repart lire davantage de fichiers, et tu peux voir les tokens grimper au fil de sa lecture. Ça a ajouté 6 000 tokens de plus pour répondre à la question, et il a maintenant utilisé 10 % de notre contexte. Le contexte de ce modèle, c'est-à-dire la quantité maximale de tokens qu'il peut avoir dans une seule conversation, est d'environ 170 000 tokens.

Quand tu travailles là-dessus, tu dois garder un œil là-dessus. Plus tu consommes de tokens, plus toute la conversation ralentit, parce que tout ce contexte est transmis au modèle à chaque fois. Si je demande une chose de plus, toutes ces informations sont renvoyées au modèle. Toute la conversation précédente, toutes les réponses précédentes. Tout est renvoyé à chaque étape de la conversation.

Un des autres inconvénients des modèles gratuits, c'est qu'ils permettent en général un volume de conversation plus faible. Opus, c'est 1 million de tokens par conversation. Là, on sera plus proche de 150 000 ou 170 000. Tu as donc intérêt à démarrer sans arrêt de nouvelles conversations. Si tu écris `/new`, ça t'ouvre une nouvelle conversation. Ça remet tes tokens à zéro, mais du coup ton modèle ne sait plus rien de ce qui vient de se passer. Tu as donc intérêt à prendre l'habitude d'avoir de petites conversations sur des sujets différents.

### Est-ce qu'Aron et Nicole travaillent aussi comme ça sur Jiki ?

Oui. Aron l'utilise presque exclusivement pour tout le travail front end qu'il fait. Nicole fait pareil pour le montage vidéo. Toutes nos vidéos sont écrites en code. On ne fabrique pas les vidéos dans un logiciel de montage. On les fabrique en code, et ensuite elle travaille avec Claude pour construire toutes les vidéos en code à partir de là.

### Les modèles gratuits tournent-ils dans le cloud ?

Oui, les modèles gratuits tournent tous dans le cloud. Ils seraient extrêmement lents sur vos machines.

### Est-ce que tu recommandes Mistral ?

Je ne connais pas vraiment les modèles en dehors d'Anthropic. Je travaille personnellement avec Claude, au quotidien. Je ne l'ai jamais utilisé, donc je ne sais pas. Personnellement j'utiliserais simplement Claude, mais probablement uniquement avec un abonnement où je ne paie pas au token.

## Créer ta première page web

Cette première moitié était une plongée en profondeur dans ce que sont les LLM, ce qu'est le codage agentique, la boucle moderne que nous, développeurs, utilisons. C'est vraiment ce avec quoi j'espère que tu vas te sentir à l'aise au fil des prochains mois et de l'année qui vient. Assez à l'aise pour fabriquer tout ce qui te passe par la tête. Mais avant d'aller plus loin, je veux vraiment insister sur cette idée : l'important, c'est que tu comprennes ce qui se passe sous le capot.

Je suis conscient de t'avoir donné beaucoup d'informations dans cette première moitié. Dans la seconde, on va donc s'occuper de créer une page d'accueil pour toi. Je pensais aujourd'hui qu'on irait plus loin, mais je crois qu'on va garder ça pour la prochaine session. Lors de la prochaine session, on regardera je pense le déploiement de tout ça, et on verra comment le pousser sur GitHub. J'ai aussi une offre exclusive pour toutes les personnes qui font Jiki : un domaine .tech gratuit, et bientôt tu pourras aussi avoir un domaine .online ou .space gratuit. Tu pourras ainsi créer un site web pour toi avec ce domaine. J'en reparlerai plus longuement à la prochaine session. Mais aujourd'hui, on continue à regarder la création de ta première page web, en réfléchissant un peu à ce que ça implique.

## VS Code

On a un peu parlé du codage agentique dans un terminal, où on écrit simplement ses instructions à Claude ou aux modèles et outils qu'on utilise. La méthode à l'ancienne pour faire tout ça, c'était de travailler dans un éditeur de code, un éditeur de texte. Il y a eu beaucoup d'éditeurs de texte au fil de l'histoire, mais celui que la plupart d'entre nous ont fini par utiliser aujourd'hui s'appelle VS Code. Si tu n'as jamais utilisé d'éditeur de texte, d'éditeur de code, je te recommande d'installer VS Code. Dans les guides que je publie en parallèle de cette session, il y a un guide sur l'installation et l'utilisation de VS Code.

Ce que tu as vu tout à l'heure, quand tu m'as vu parcourir des fichiers, c'était VS Code. Ce n'est qu'un cadre, une sorte de toile, où tu peux modifier des fichiers texte, avec une petite étagère sur le côté qui liste tous tes fichiers.

Ce qu'on va donc faire, c'est construire une page d'accueil. Je vais commencer par créer un dossier. On monte dans Fichier, Ouvrir le dossier, et on va simplement créer un dossier. Je vais le mettre sur mon bureau : « ma nouvelle page perso ». Je vais t'encourager à t'installer dans VS Code comme espace principal. Crée-toi donc un dossier. Si tu suis en direct, tu peux le faire maintenant. Si VS Code n'est pas installé chez toi, tu peux mettre en pause, aller lire le guide d'installation de VS Code, puis revenir.

On peut ouvrir ce dossier, et on voit qu'il demande si on fait confiance aux auteurs. Comme c'est nous les auteurs, on peut se faire confiance. Et tu vois qu'on a un peu d'espace, et c'est ici que les fichiers vont apparaître sur le côté. Tu as un terminal en bas, et on peut tout simplement ouvrir OpenCode dans ce terminal. On peut donc utiliser OpenCode en bas et consulter les fichiers en haut. Comme je veux un grand écran, je vais les garder séparés pour l'instant, avec OpenCode d'un côté et tous les fichiers de l'autre, histoire qu'on voie bien ce qui se passe.

Allons dans le nouveau dossier qu'on vient de créer et ouvrons OpenCode dedans. Quelqu'un a suggéré d'essayer un autre modèle, Big Pickle. Je n'ai jamais utilisé Big Pickle. Essayons et voyons ce que ça donne. On ne fait rien de complexe du tout ici.

## Ce qu'est une page web

Je veux parler un peu ici de ce qu'est une page web et de la façon dont elle fonctionne. Dans les temps qui viennent, on va faire beaucoup de JavaScript, de CSS, des choses compliquées. Aujourd'hui on fait juste le plus élémentaire. Si tu connais un peu les sites web, ça va sans doute te sembler très basique. Si tu n'y connais rien, j'espère que ce sera une bonne introduction à ce qui vient ensuite.

Parlons un peu de ce qu'est une page web standard, toute simple. Pour ça, on peut utiliser mon site perso existant. Il est plutôt direct. C'est juste du texte sur une page. Tu peux aller sur n'importe quel site, faire un clic droit et choisir Afficher le code source de la page, et tu verras quelque chose comme ceci, tout un fatras. C'est du HTML.

![Le code source du site personnel de Jeremy, montrant le doctype, les balises head, les balises meta et le titre.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

Le HTML est célèbre pour ce signe inférieur au début et ce signe supérieur à la fin de chaque élément. Voici ce qu'on appelle une balise head. On a ensuite un peu de CSS. Le CSS, c'est le style. On en parlera dans une minute. Et puis on a tout le contenu de la page. Voici l'en-tête. Tu peux voir l'en-tête ici, en violet. Il contient une image. `img` veut dire image, avec un lien vers une image. Il y a du texte, une biographie de moi, puis encore du texte découpé en paragraphes. `p` veut dire paragraphe. Encore quelques informations, quelques titres. Voici un titre de niveau deux, voici un titre de niveau un. Et voici du JavaScript, ici en bas, qui te semblera vaguement familier si tu as fait Coding Fundamentals.

Quand on a fait le bootcamp l'an dernier et qu'on a fait les fondamentaux du développement web, on a passé beaucoup de temps à examiner ce HTML en profondeur, et le CSS en profondeur. En s'assurant que tu comprenais toutes les différentes balises et leur fonctionnement. Et aussi en comprenant le CSS et comment on peut s'en servir pour styliser les choses.

C'est un bon exemple de la façon dont les choses se sont, je trouve, inversées. Je pense désormais que ce qu'on veut faire, c'est simplement fabriquer des choses, puis regarder ce qu'on a fabriqué et comprendre à quoi ça ressemble. Donc plutôt que ce que j'aurais recommandé avant, et ce qu'il aurait fallu faire avant, c'est-à-dire commencer par tout écrire à la main, ce que je recommande maintenant, c'est de simplement demander à notre LLM de nous fabriquer une structure vraiment très basique qu'on pourra utiliser.

## index.html

L'autre chose à savoir, c'est qu'il existe une convention très ancienne selon laquelle un fichier appelé `index.html` est la première page d'un site web. Si tu vas sur ihid.info/index.html, c'est en gros ce que tu vois, la page d'accueil. La règle, c'est que si tu ne mets rien après le domaine, le serveur regarde s'il existe un fichier appelé index.html, et si oui, il en affiche simplement le contenu. Ce fichier index.html est très particulier. Il ne fait rien de magique en réalité. C'est juste un standard. Mais beaucoup de sites l'utilisent traditionnellement pour ça.

Donc si tu as OpenCode ouvert, tu peux écrire :

> Crée un index.html avec la structure la plus minimale possible pour une page, avec un en-tête contenant mon nom, Jeremy Walker, et une ligne de bio, la voici.

On a un choix à faire ici. On pourrait, si on le voulait, dire « va me créer un site web complet », et il le ferait. Mais deux choses se produiraient. D'abord, ce ne serait pas un site qu'on veut. Au fil des sessions, on va réfléchir à ce que sont ces sites, et je vais d'ailleurs te lancer le défi d'aller réfléchir à un site. On en parlera dans une minute. Mais aussi, ça te donnerait tellement de choses d'un coup que tu n'apprendrais rien. Alors qu'en faisant ces petits pas, c'est comme ça que tu vas apprendre comment les choses fonctionnent.

On envoie donc ça, et voilà ce qu'il a écrit. On peut maintenant aller dans VS Code et ouvrir le fichier. C'est mon workflow quand je fais ce genre de choses. J'ai tout mon site ici, avec peut-être des milliers de fichiers différents, et je fais travailler mon agent sur les fichiers. Et ensuite, si j'ai besoin de vérifier quelque chose, de voir ce qu'il fait, de modifier des choses, je l'ouvre simplement de ce côté et je regarde.

Et l'autre chose qu'on peut faire maintenant qu'on a ce fichier, c'est l'ouvrir dans Chrome. Si tu fais un clic droit sur le fichier et que tu choisis Ouvrir avec Chrome, tu vois maintenant qu'on a une page qu'on vient de créer. Alors, félicitations ! Tu t'es construit une page d'accueil. Ce n'est pas une page très excitante ni très réussie, mais c'est une page d'accueil.

![La page d'accueil minimale ouverte dans Chrome. Un titre indiquant Jeremy Walker et une ligne de bio, sans aucun style.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Comprendre ce qu'il a produit

Je veux qu'on prenne une minute, et c'est l'état d'esprit dans lequel je veux que tu sois en permanence, pour regarder ce qui se passe ici. La façon dont je veux t'encourager à le faire, maintenant que tu as créé ça, c'est d'écrire :

> Explique-moi ce que fait chaque partie.

Tu peux utiliser cette boucle non seulement pour lui faire faire des choses, mais aussi pour comprendre, pour construire ta connaissance du fonctionnement des choses. Ça ne devrait pas être une question très compliquée pour lui, d'une part parce qu'il vient de l'écrire, et d'autre part parce que c'est très simple. Et il explique. Voilà.

La première ligne, la balise doctype, indique au navigateur que ceci est un document HTML5. Alors, que se passe-t-il vraiment ici ? Qu'est-ce que ce HTML ? Eh bien, ce navigateur est Chrome (d'autres navigateurs existent). Il sait lire un fichier HTML et l'afficher à l'écran d'une façon que tu peux voir. Le HTML est une spécification. Ça veut dire hypertext markup language, le langage de balisage hypertexte. Ça ressemble à ceci, avec plein de balises et de bouts d'information, et Chrome, ou n'importe quel autre navigateur, sait lire ces balises et les afficher à l'écran.

Oublie la partie du haut pour l'instant. Regarde simplement plus bas, le body. Il affiche un titre et il affiche du texte de paragraphe. Ce `h1` veut dire titre de niveau un. Et tu vois que, parce que c'est un titre de niveau un, Chrome sait qu'il faut l'afficher un peu plus gros et un peu plus gras. Alors que ce `p` est un paragraphe. Chrome sait qu'il faut l'afficher un peu plus petit.

On pourrait, si on le voulait, mettre d'autres balises ici. Voici une liste non ordonnée, `ul`, et à l'intérieur on aurait des éléments de liste, `li`. Une des choses qui me sont arrivées depuis que j'utilise Claude, c'est que je ne sais plus très bien taper au clavier. Bref, on peut assembler différentes balises, et ça nous donne des puces.

Voilà donc l'anatomie, la charpente, d'une page web. Toutes les pages web sont pareilles. Si on va sur jiki.io et qu'on affiche le code source de la page, tu vois que c'est exactement la même chose. Il y a plein et plein de ces balises. On voit que c'est identique. On vient justement d'utiliser une liste non ordonnée, un élément de liste, un lien avec du texte et une icône à côté. Voilà ce qu'est le HTML. Chaque fois que tu fabriques un site web, d'aujourd'hui jusqu'à la fin des temps, tu produis toujours du HTML à destination d'un navigateur.

Finissons de lire ce qu'il nous a si gentiment préparé. Qu'est-ce qu'on a ensuite ? On a le doctype, qui dit que ceci est un document HTML. Ensuite on dit d'accord, voici le début de notre document HTML, et la langue de ce document est l'anglais.

On a ensuite deux parties. On a le head, et on a le body.

La première chose dans le head, c'est quels caractères on utilise, et on utilise ce jeu de caractères appelé UTF-8. Chacun de ceux-ci est un caractère. On dit qu'on peut utiliser n'importe quel caractère latin, romain, comme ceux-ci, ou qu'on peut aussi utiliser des emojis ici. Si on attrape un emoji, on peut le mettre directement dans ce document, puis actualiser, et on a un emoji sur la page. C'est ce que ça veut dire. Ça dit voici tous les caractères que tu utilises couramment. C'est notre jeu de caractères standard.

On a aussi un viewport. Pas besoin de s'en préoccuper pour l'instant.

Et on a un titre. Le titre, c'est Jeremy Walker. Ce titre est celui qui apparaît en haut de l'onglet. Une des choses auxquelles tu vas beaucoup penser en codant, c'est aux titres que tu veux voir apparaître là, pour que les gens qui ont plusieurs onglets ouverts trouvent ce qu'ils cherchent. On peut aussi changer des choses comme la favicon. Tu vois qu'on ne l'a pas encore fait, donc on n'a pas d'icône ici.

Cette section head, c'est tout ce qui n'apparaît pas à l'écran. Tout ce que les moteurs de recherche pourraient regarder, et d'autres choses de ce genre, vit dans le head. Et ensuite le body, c'est tout ce qui se trouve dans l'espace carré en dessous. Et là, c'est très littéralement un titre, un paragraphe et une liste.

Voilà donc ce que l'explication nous dit. La balise `html` est l'élément racine. Le head, ce sont les métadonnées. Métadonnées veut simplement dire des données à propos de la page, pas des choses que tu vois. Le charset est l'encodage des caractères qui permet à tes emojis et à certains caractères d'autres langues de s'afficher. On ne veut pas se préoccuper du viewport. Et ensuite le body, c'est le reste, ce qu'on vient de regarder.

Pour celles et ceux qui écrivent du HTML depuis des années, désolé que ce soit aussi basique pour vous, mais vous aussi vous l'avez appris de zéro un jour.

## Ajouter du vrai contenu

Tu peux maintenant utiliser ton agent pour ajouter du HTML. Prenons un peu plus de texte. Si tu as un profil LinkedIn, tu peux aller y récupérer du texte. D'ailleurs, faisons exactement ça. Allons sur mon LinkedIn et récupérons quelques informations. Et on peut les donner à notre LLM. On peut écrire :

> Voici des informations tirées de mon LinkedIn. Structure-les de façon cohérente sous l'en-tête de la page.

On lui donne ce texte, et il va partir nous le structurer. Là encore, il y a deux ans, il aurait fallu écrire les balises à la main, écrire tout ça. À la place, on a maintenant la possibilité de lui donner simplement du texte et de lui faire mettre une structure cohérente autour. Alors attention, on ne lui demande pas ici de le styliser, ni de lui donner une apparence particulière. On lui demande juste de mettre une structure autour, du HTML autour. Voyons ce que Big Pickle donne là-dessus.

Il a réfléchi un petit moment. Il prépare maintenant la modification. Et il a ajouté le code. Voilà. On a maintenant un joli titre de niveau deux « Expérience », et on a les autres informations. Si on retourne dans Chrome et qu'on actualise, on voit maintenant qu'on a un code minimal mais joliment structuré.

![La page d'accueil dans Chrome, affichant maintenant une section Expérience avec des entrées structurées pour chaque poste.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## Tes devoirs

La prochaine chose à laquelle réfléchir, c'est à quoi on veut que notre page perso ressemble. C'est une question sur laquelle je veux que tu passes du temps. Je vais beaucoup t'encourager, tout au long de ce cours, à prendre un stylo et un carnet, à t'installer dans un endroit calme, le plus loin possible d'un écran, et simplement à réfléchir.

On va construire une page d'accueil pour nous-mêmes. Cette page doit contenir plusieurs choses. Elle doit présenter un aperçu de nous-mêmes et de nos centres d'intérêt. Elle doit avoir une page qui est notre CV. Elle va avoir une page sur notre portfolio, tous les projets qu'on fabrique, et ensuite elle va renvoyer vers d'autres pages consacrées à ces projets. On va donc construire, au fil du temps, un grand site multipage. On fera l'essentiel lors de la deuxième session. Aujourd'hui on fait seulement cette page de présentation. Mais je veux que tu réfléchisses, stylo et papier en main, et que tu esquisses ce que tu aimerais que les différentes pages soient.

Et réfléchis un peu à un style. Regarde les pages d'autres personnes. Va voir d'autres membres de la communauté Exercism. Si je regarde Erik Schierboom, qui a travaillé chez nous, il a une page d'accueil principale très simple, et une page « à propos » plutôt élégante, avec une petite touche sympa en bas. Il y a des informations sur ses logiciels, les endroits où il a donné des conférences, puis quelques liens. Ça peut t'inspirer. Ou regarde SleeplessByte. Tu te souviens peut-être de DJ si tu étais sur les bootcamps, ou parmi les mentors. Voici la page de DJ. Va donc trouver des gens qui t'intéressent et inspire-toi de ce qu'ils ont fait. Réfléchis visuellement au type de style que tu aimes. Et on parlera un peu de la création d'images et de la façon dont tu peux utiliser la tech pour en fabriquer.

Explore les idées de différentes personnes. J'ai toujours eu un faible pour les ambiances très minimalistes. Et pour ce projet, je vais moi aussi prendre les prochains jours pour réfléchir à ce à quoi je veux que ma nouvelle page d'accueil ressemble, parce que je vais me fabriquer cette page perso. Je vais réfléchir à son découpage. Je veux une section pour ma photographie. Je veux une section où mettre mes podcasts, mes vidéos et les choses que j'ai créées. Je veux un peu de bio, et je veux un CV. Je vais donc prendre le temps de réfléchir à tout ça.

Tes devoirs pour cette semaine, c'est d'aller réfléchir à ça, de le concevoir, puis de commencer à structurer ces pages. Tu peux créer plusieurs pages. On peut créer une autre page, appelons-la mon CV, et on peut copier-coller notre contenu dedans, supprimer les parties dont on n'a pas besoin, et changer le titre en « CV de Jeremy ». On a maintenant notre page index, mais on peut aussi aller sur resume.html et avoir cette autre page.

Donc, cette semaine :

- Réfléchis aux différentes pages que tu vas vouloir, et aux différents contenus que tu vas y mettre.
- Installe VS Code.
- Installe OpenCode et configure un modèle.
- Avec OpenCode, assemble quelques-unes de ces pages.

Ne te préoccupe pas encore du style. Je ne veux pas vraiment que tu t'y lances. Tu peux jouer si tu en as envie, j'encouragerai toujours la curiosité, mais j'aimerais t'enseigner ce que je pense être les meilleures façons de faire ça dans le monde d'aujourd'hui. Surtout, ne commence pas à utiliser des frameworks JavaScript ni quoi que ce soit d'autre. Reste sur du HTML minimal, et ensuite on va empiler les couches session après session, jusqu'à ce que ça devienne de plus en plus puissant et de plus en plus complexe. De cette façon, tu vas comprendre comment tout se passe.

Si ça t'intéresse, va faire quelques recherches sur le HTML. Découvre quelles sont les différentes balises et ce qu'elles veulent dire. Faire des recherches, de nos jours, ça peut être aussi simple que de demander :

> Donne-moi les 20 balises les plus courantes.

Puis :

> Explique-moi à quoi sert chacune d'elles.

C'est comme ça que je fais mes recherches.

On fera la prochaine session dans quelques jours. D'ici là, j'espère que tu arriveras avec OpenCode installé, VS Code installé, et une série de pages. La prochaine fois, on va commencer à relier ces pages entre elles, ajouter une navigation, ajouter un peu de style, et on va aussi déployer tout ça sur GitHub, et peut-être même te trouver un domaine personnalisé, pour que tu aies ton propre site perso sur un domaine, gratuitement. Tu peux aussi t'inscrire sur GitHub cette semaine, sur github.com. Je vais publier des guides pour VS Code, OpenCode et GitHub, et tu pourras les suivre.

Voilà la fin de cette première session. Merci d'avoir suivi. J'espère que ça t'a intéressé. J'espère que tu as apprécié. Si tu as des questions sur ce qu'on a couvert, viens sur le forum. J'y serai, et j'ai hâte de répondre aux questions et de les explorer. Je n'ai pas forcément toutes les réponses. J'adore apprendre moi aussi. Alors pose toutes les questions qui t'intéressent. Et j'ai hâte de te retrouver à la prochaine session.
