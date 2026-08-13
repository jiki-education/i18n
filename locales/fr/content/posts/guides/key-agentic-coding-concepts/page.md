---
title: "Les concepts clés de la programmation agentique"
excerpt: "Les modèles, les tokens, la fenêtre de contexte et les autres notions à comprendre pour bien utiliser les agents de codage IA."
tags: ["agentic-coding"]
seo:
  description: "Les concepts fondamentaux de la programmation agentique expliqués aux débutants : ce que sont les modèles d'IA et les tokens, comment fonctionne la fenêtre de contexte, et pourquoi les agents se trompent parfois."
  keywords: ["concepts de programmation agentique", "llm", "tokens", "fenêtre de contexte", "modèles d'ia", "prompts", "hallucinations"]
en_md5: d963e01d7934f4003d436029d1808fc8
---

## Introduction

À ce stade, on part du principe que tu as installé OpenCode ou un outil équivalent. Si ce n'est pas le cas, suis d'abord notre guide sur [l'installation d'une plateforme de programmation agentique](/guides/installing-an-agentic-coding-platform).

Tu peux utiliser un outil de programmation agentique sans comprendre comment il fonctionne, comme on peut conduire une voiture sans savoir à quoi sert l'embrayage. Mais un peu de compréhension fait une grande différence : elle explique pourquoi l'outil semble parfois brillant et parfois déroutant, pourquoi certaines choses coûtent de l'argent, et comment obtenir de bien meilleurs résultats. Voici les notions qui valent la peine d'être connues.

## Les modèles

Le **modèle** (ou LLM, pour « large language model », c'est-à-dire grand modèle de langage) est la véritable IA. Les outils comme OpenCode et Claude Code ne sont pas intelligents en eux-mêmes. Ils sont l'interface : ils rassemblent ta demande et ton code, envoient le tout à un modèle, puis agissent en fonction de ce qui revient. Le modèle, c'est le « cerveau ».

Il existe de nombreux modèles, créés par différentes entreprises, et ils se distinguent sur trois points qui comptent pour toi :

- **La capacité.** Les modèles plus gros et plus récents comprennent mieux les problèmes mal dégrossis et écrivent du code plus correct. Les tout meilleurs (souvent appelés modèles « frontière ») sont nettement plus intelligents que les autres.
- **La vitesse.** Les modèles plus petits répondent plus vite. Pour les questions simples, un modèle rapide est souvent plus agréable à utiliser.
- **Le coût.** Les meilleurs modèles peuvent coûter cinquante fois plus cher à faire tourner que des modèles tout à fait corrects. C'est pour cela que les offres gratuites reposent sur des modèles plus petits ou promotionnels.

Il n'existe pas de « meilleur modèle » définitif : le classement est rebattu en quelques mois, ce qui est une des raisons pour lesquelles on recommande un outil qui te laisse changer de modèle librement (dans OpenCode, tape `/models`).

## Les tokens

Les modèles ne lisent ni des lettres ni des mots. Ils lisent des **tokens** : de petits morceaux de texte, qui représentent en moyenne à peu près les trois quarts d'un mot. « Understanding » tient en un seul token. « Misunderstanding » peut en prendre trois. Tout ce que tu envoies à un modèle est découpé en tokens, et tout ce qu'il écrit revient token par token. C'est pour cela que les réponses apparaissent comme un flux de mots plutôt que d'un seul bloc.

Les tokens comptent pour une grande raison : **c'est eux que tu paies**. Le prix des modèles s'exprime par million de tokens, à la fois pour ce que le modèle lit (l'« entrée ») et pour ce qu'il écrit (la « sortie »). Quand un agent lit cinq fichiers de ton code, cela peut représenter des dizaines de milliers de tokens en entrée. C'est pour cela que les offres gratuites ont des limites, et qu'un agent qui travaille sur un gros projet coûte plus cher qu'un agent qui répond à une question rapide.

## La fenêtre de contexte

Un modèle n'a pas de mémoire. À chaque message que tu envoies, l'outil renvoie _l'intégralité de la conversation_, plus tous les fichiers que l'agent a lus, encore et encore. La **fenêtre de contexte** du modèle est la quantité maximale qu'on peut lui envoyer en une seule fois : sa mémoire de travail, mesurée en tokens.

Deux conséquences pratiques en découlent :

- **Les longues sessions se dégradent.** À mesure que la conversation s'allonge, le contexte se remplit de vieux détours et de contenus de fichiers périmés. Les modèles deviennent mesurablement moins attentifs quand leur contexte est saturé. Quand un agent se met à faire des erreurs bêtes tard dans une longue session, ce n'est souvent pas qu'il est devenu idiot, c'est qu'il se noie.
- **Repartir de zéro ne coûte rien.** Ouvrir une nouvelle session avec une demande claire et bien formulée vaut souvent mieux que s'obstiner dans une session encombrée. Ne t'attache pas à ton historique de conversation.

## Les prompts

Ton **prompt**, c'est tout ce que tu écris au modèle. La compétence la plus rentable de la programmation agentique, c'est d'écrire de bons prompts. La différence entre « répare mon code » et « les tests de ce dossier échouent avec ce message d'erreur, et je m'attendais à ce que la fonction renvoie 5, pas 3 », c'est la différence entre un agent qui devine et un agent qui sait.

Un bon prompt dit trois choses : ce que tu cherches à obtenir, ce qui se passe réellement, et ce que tu as déjà essayé. Exactement ce que tu attendrais d'un collègue qui demande de l'aide.

## La boucle agentique

Ce qui distingue un agent d'un chatbot, c'est la **boucle**. Quand tu confies une tâche à un agent, il ne se contente pas de répondre : il travaille.

1. Il décide de ce qu'il a besoin de savoir, et utilise des **outils** (lire des fichiers, chercher, lancer des commandes) pour le découvrir.
2. Il fait une modification.
3. Il vérifie son propre travail, en général en exécutant ton code ou tes tests.
4. Si quelque chose a échoué, il retourne à l'étape 1 avec les nouvelles informations.

Observer cette boucle est vraiment instructif : c'est un assez bon modèle de la façon dont les programmeurs expérimentés travaillent réellement. Enquêter, changer une chose, vérifier, recommencer. Ton rôle pendant la boucle, c'est la supervision. L'outil te demandera la permission avant toute action importante, et tu devrais lire ce qu'il propose plutôt que de tout approuver par réflexe.

## Les hallucinations, ou : le modèle se trompe parfois avec aplomb

Les modèles ne savent pas les choses comme toi. Ils génèrent la réponse la plus plausible en apparence, et parfois la réponse la plus plausible en apparence est tout simplement fausse : une fonction qui n'existe pas, un réglage qui n'a jamais existé, une explication qui semble imparable mais qui est en réalité incorrecte. C'est ce qu'on appelle une **hallucination**, et cela ne disparaît jamais complètement, même chez les meilleurs modèles.

La défense est la même que celle des professionnels : **ne jamais faire confiance, toujours vérifier**. Exécute le code. Lis la modification avant de l'accepter. Si une explication compte, demande au modèle de te montrer la ligne de code sur laquelle elle repose. Les agents y sont bien moins sujets que les chatbots, précisément parce que leur boucle consiste à exécuter des choses et à observer de vrais résultats, mais l'habitude de vérifier est à prendre dès le premier jour.

## La confidentialité

Une dernière chose à savoir, surtout sur les offres gratuites : les modèles gratuits le sont en général parce que les entreprises qui les proposent collectent les conversations pour améliorer leurs modèles. Pour des exercices d'apprentissage, c'est un échange tout à fait acceptable. Mais considère tout ce que tu envoies à un modèle gratuit comme potentiellement public : pas de mots de passe, pas d'informations personnelles, et plus tard dans ta carrière, pas de code privé d'entreprise sans avoir vérifié les règles.

## Voilà les fondations

Les modèles sont le « cerveau », les tokens la monnaie, le contexte la mémoire, les prompts le volant, et la boucle ce qui en fait un agent. Tout le reste, tu l'apprendras en mettant les mains dans le cambouis, et c'est exactement ce qu'on te suggère d'aller faire. Si tu n'as pas encore installé d'outil, notre [guide d'installation](/guides/installing-an-agentic-coding-platform) t'y amène en dix minutes. Regarde ensuite la première session de [Frontend Basics](/build/frontend-basics/setting-up-the-project) dans Learn to Build pour voir tout cela en action.
