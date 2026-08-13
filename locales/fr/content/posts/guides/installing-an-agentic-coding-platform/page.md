---
title: "Installer une plateforme de programmation agentique"
excerpt: "Des instructions pas à pas pour installer OpenCode, te connecter et choisir un modèle d'IA, avec des options qui ne coûtent absolument rien."
tags: ["agentic-coding", "installation"]
seo:
  description: "Un guide accessible aux débutants pour installer OpenCode, la plateforme de programmation agentique qu'on recommande, avec des modèles d'IA gratuits via Zen et la formule Go à petit prix."
  keywords:
    [
      "opencode",
      "installer opencode",
      "programmation agentique",
      "assistant IA pour coder",
      "opencode zen",
      "opencode go",
      "coder gratuitement avec l'IA",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Introduction

Une plateforme de programmation agentique est un outil qui permet à une IA de travailler sur du code avec toi : lire des fichiers, faire des modifications et exécuter des commandes sur ton ordinateur. Si cette phrase est toute nouvelle pour toi, commence par notre guide sur [ce qu'est la programmation agentique](/guides/what-is-agentic-coding) et reviens ici quand tu seras prêt à en installer une.

Ce guide t'accompagne pas à pas pour installer **OpenCode**, te connecter et choisir un modèle d'IA. Tu n'as besoin de le faire qu'une seule fois, et tu peux tout faire sans dépenser le moindre centime.

## Pourquoi on recommande OpenCode

Il existe plusieurs bons outils de programmation agentique, dont Claude Code (Anthropic) et Codex (OpenAI). Ils s'utilisent tous à peu près de la même façon, donc rien de ce que tu apprends n'est perdu si tu changes d'outil plus tard. Cela dit, on recommande **[OpenCode](https://opencode.ai)** pendant ton apprentissage, pour trois raisons :

- **Tu peux l'utiliser gratuitement.** C'est actuellement le seul outil de ce genre à proposer une offre gratuite fiable, stable et vraiment utilisable, et cette offre a peu de chances de disparaître.
- **Il fonctionne avec presque tous les modèles d'IA.** Tu peux commencer avec les modèles gratuits et en essayer de plus avancés plus tard si tu as envie d'explorer, tout ça sans changer d'outil.
- **Il s'exécute dans le terminal**, ce qui est la façon dont la plupart des développeurs professionnels utilisent ces outils : tu apprends donc la « vraie » méthode. Et tu peux le lancer dans VS Code pour qu'il se place juste à côté de ton code.

Tu peux utiliser OpenCode de deux façons, et ce guide te prépare aux deux :

- **Seul**, dans n'importe quelle fenêtre de terminal.
- **Intégré à VS Code**, où il s'ouvre dans un panneau à côté de ton code et peut voir quel fichier tu es en train de modifier. C'est ce qu'on recommande : tu vois les modifications de l'agent apparaître dans ton éditeur au fur et à mesure qu'il les fait. (Aucune idée de ce qu'est VS Code ? C'est notre [éditeur de code recommandé](/guides/using-a-code-editor).)

## Ce que ça coûte

OpenCode lui-même ne coûte rien. Ce que tu peux choisir de payer, c'est le modèle d'IA qui fait la réflexion. Quand tu connectes OpenCode à un modèle, tu verras deux options proposées par l'équipe d'OpenCode :

- **Zen** propose une poignée de modèles sans rien payer. Ils sont gratuits parce que les entreprises qui les développent en font la promotion, ce qui veut dire que la sélection change au fil du temps, et que tes conversations peuvent être utilisées pour améliorer les modèles. C'est un compromis tout à fait acceptable pour des exercices d'apprentissage, mais n'y colle jamais rien de privé ou de personnel.
- **Go** est un abonnement : **10 $ par mois** (avec le premier mois à 5 $) pour un accès généreux à un ensemble de modèles bien plus puissants. Tu n'en as pas besoin dès le premier jour. Commence avec les modèles gratuits de Zen, et passe à Go si tu finis par atteindre leurs limites.

## Quel modèle choisir ?

Si tu ne sais pas trop ce qu'est un « modèle », notre guide sur [les concepts clés de la programmation agentique](/guides/key-agentic-coding-concepts) l'explique en détail. En version courte : le modèle est le véritable « cerveau » de l'IA, et certains modèles sont plus intelligents, plus rapides ou moins chers que d'autres.

Dans OpenCode, tu peux changer de modèle à tout moment en tapant `/models`. Notre conseil :

- **Avec l'offre gratuite**, essaie les modèles gratuits proposés et vois lesquels te conviennent. La liste change au gré des promotions, donc on ne va pas prétendre savoir ce que tu verras, mais au moment où on écrit ces lignes, **DeepSeek V4 Flash** est un excellent choix gratuit.
- **Avec la formule Go**, les modèles spécialisés dans le code (au moment où on écrit ces lignes, Kimi K2.7 Code, GLM-5.2 et la famille Qwen 3.7) sont tous solides. Choisis-en un, et ne te préoccupe de les comparer qu'une fois les bases acquises.

Ne te prends pas la tête avec ça. Pour les exercices que tu feras pendant ton apprentissage, tous les modèles proposés sont largement à la hauteur.

## Avant de commencer

Il te faut deux choses en place :

- **VS Code**, pour pouvoir utiliser OpenCode intégré à ton éditeur. Si tu ne l'as pas encore installé, suis notre guide sur [l'installation de VS Code](/guides/installing-vscode).
- **Sous Windows uniquement : WSL.** La version terminal d'OpenCode fonctionne mieux sous Linux, et WSL donne à ta machine Windows un vrai terminal Linux. Suis d'abord notre guide sur [l'installation de WSL](/guides/installing-wsl), y compris la section « Utiliser WSL depuis VS Code » à la fin. Puis reviens ici. Sous macOS et Linux, il n'y a rien de plus à installer.

## Installer OpenCode

Installer OpenCode tient en une seule commande dans le terminal. Si tu n'as jamais utilisé de terminal, c'est un joli premier aperçu : tu tapes une instruction, et l'ordinateur fait le travail.

### Windows

1. Ouvre VS Code, connecte-le à WSL (Ctrl+Shift+P, puis **WSL: Connect to WSL**) et ouvre un terminal (menu Terminal, puis **New Terminal**).
2. Copie-colle cette commande dans le terminal et appuie sur Entrée :
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quand elle se termine, ferme le terminal, ouvres-en un nouveau et tape `opencode --version`, puis appuie sur Entrée. Si un numéro de version s'affiche, c'est bon.

### macOS

1. Ouvre **Terminal** (appuie sur Cmd+Space, tape « terminal » et appuie sur Entrée), ou ouvre un terminal dans VS Code (menu Terminal, puis **New Terminal**).
2. Copie-colle cette commande dans le terminal et appuie sur Entrée :
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quand elle se termine, ferme le terminal, ouvres-en un nouveau et tape `opencode --version`, puis appuie sur Entrée. Si un numéro de version s'affiche, c'est bon.

### Linux

1. Ouvre ton terminal, ou ouvres-en un dans VS Code (menu Terminal, puis **New Terminal**).
2. Copie-colle cette commande dans le terminal et appuie sur Entrée :
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quand elle se termine, ferme le terminal, ouvres-en un nouveau et tape `opencode --version`, puis appuie sur Entrée. Si un numéro de version s'affiche, c'est bon.

<!-- SCREENSHOT: terminal after the install script has completed -->

## Démarrer OpenCode pour la première fois

Maintenant, ouvre OpenCode et connecte-le à Zen pour qu'il ait un modèle à qui parler :

1. Dans VS Code, ouvre un dossier qui contient du code (n'importe lequel de tes projets d'entraînement fera parfaitement l'affaire) et ouvre un terminal (menu Terminal, puis **New Terminal**).
2. Tape `opencode` et appuie sur Entrée. L'interface d'OpenCode apparaît dans le panneau du terminal, juste à côté de ton code. (La première fois, elle installe aussi une petite extension VS Code qui relie les deux, pour qu'OpenCode puisse voir quel fichier tu as ouvert.)
3. Au premier lancement, une liste intitulée « Connect a provider » apparaît. (Si elle ne s'affiche pas, tape `/connect` pour la faire apparaître.) Utilise les flèches du clavier pour choisir **OpenCode Zen (Recommended)** et appuie sur Entrée.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="L'écran « Connect a provider » d'OpenCode, avec OpenCode Zen (Recommended) en surbrillance en haut de la liste" />
  <figcaption>Choisis OpenCode Zen dans la liste des fournisseurs.</figcaption>
</figure>

4. Il te demande ensuite une **clé API** : un long code qui prouve qui tu es, un peu comme un mot de passe. Pour en obtenir une, ouvre <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> dans ton navigateur et crée un compte gratuit. Aucune coordonnée bancaire n'est demandée. Copie la clé qu'il te donne, colle-la dans le terminal et appuie sur Entrée.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode demande une clé API, avec les instructions pour aller sur opencode.ai/zen en obtenir une" />
  <figcaption>Récupère ta clé sur opencode.ai/zen et colle-la ici.</figcaption>
</figure>

5. Enfin, il t'affiche la liste des modèles, avec les gratuits marqués **Free** sur la droite. Choisis-en un (comme on le disait plus haut, au moment où on écrit ces lignes, **DeepSeek V4 Flash Free** est un excellent choix). Tu peux changer de modèle quand tu veux en tapant `/models`.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="La liste des modèles d'OpenCode Zen, avec les modèles gratuits marqués Free sur la droite et DeepSeek V4 Flash Free en surbrillance" />
  <figcaption>Les modèles gratuits sont marqués sur la droite. Ici, on choisit DeepSeek V4 Flash Free.</figcaption>
</figure>

## Ta première conversation

Maintenant, pose-lui une question. Tape un message comme :

> Regarde les fichiers de ce dossier et explique-moi ce qu'ils font.

Observe ce qui se passe. Il lit des fichiers, réfléchit et te fait un compte rendu, et il te demande la permission avant de modifier quoi que ce soit. Cette boucle (lire, agir, vérifier) est le cœur de la programmation agentique.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode lit un à un les fichiers d'un projet, réfléchit, puis explique le rôle de chaque dossier et fichier à la racine" />
  <figcaption>OpenCode lit les fichiers du projet, réfléchit et fait un compte rendu de ce qu'il trouve.</figcaption>
</figure>

La même chose fonctionne dans n'importe quel terminal, avec ou sans VS Code. Ouvre un terminal, place-toi dans un dossier de projet, tape `opencode`, et c'est parti. Certaines personnes adorent travailler comme ça. Essaie les deux et vois ce qui te convient.

Et voilà. Tu as maintenant une installation de programmation agentique opérationnelle qui ne coûte rien à faire tourner. Pour comprendre ce qui se passe réellement sous le capot, et ce que veulent dire des mots comme tokens et contexte, poursuis avec [les concepts clés de la programmation agentique](/guides/key-agentic-coding-concepts).
