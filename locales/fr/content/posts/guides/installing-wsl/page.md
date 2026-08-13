---
title: "Installer le Sous-système Windows pour Linux (WSL)"
excerpt: "Des instructions pas à pas pour installer le Sous-système Windows pour Linux, qui te donne un véritable environnement de développement sous Windows."
tags: ["installation"]
seo:
  description: "Un guide pour débutants pour installer WSL (Windows Subsystem for Linux) sur Windows 10 et 11, avec des instructions claires, étape par étape, et des solutions aux problèmes les plus courants."
  keywords:
    [
      "wsl",
      "installer wsl",
      "sous-système windows pour linux",
      "ubuntu sur windows",
      "environnement de développement windows",
      "apprendre à coder"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Introduction

WSL (le **Sous-système Windows pour Linux**) est une fonctionnalité de Windows, créée par Microsoft, qui fait tourner un vrai système Linux à l'intérieur de ta machine Windows. Tu en as besoin parce que la plupart des outils de programmation sont d'abord conçus pour Linux et macOS (et y fonctionnent le mieux), et WSL est le moyen qui permet aux développeurs sous Windows d'accéder à tout cela. C'est d'ailleurs la méthode que Microsoft lui-même recommande pour développer sous Windows. L'installation prend environ quinze minutes, dont l'essentiel est de l'attente, et tu n'as besoin de le faire qu'une seule fois.

## Avant de commencer

Il te faut :

- **Windows 10 (version 2004 ou plus récente) ou Windows 11.** N'importe quelle machine Windows de ces dernières années fera l'affaire.
- **Un accès administrateur** à l'ordinateur. Si c'est un ordinateur familial, tu auras peut-être besoin que la personne qui l'a configuré tape son mot de passe.

## Installer WSL

1. Clique sur le bouton **Démarrer** et tape « powershell ». Tu verras apparaître **Windows PowerShell**.
2. Ne l'ouvre pas directement. Fais plutôt un clic droit dessus et choisis **Exécuter en tant qu'administrateur**. Windows te demandera si tu veux l'autoriser à apporter des modifications : clique sur **Oui**.
3. Dans la fenêtre bleue qui apparaît, tape la commande suivante puis appuie sur Entrée :
   ```
   wsl --install
   ```
4. Windows va tout télécharger et tout mettre en place, y compris un système Linux appelé **Ubuntu** (la version de Linux la plus populaire). Cela peut prendre quelques minutes.
5. Quand il te le demande, **redémarre ton ordinateur**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Configurer Ubuntu

Après le redémarrage, une fenêtre de terminal s'ouvrira automatiquement pour terminer la configuration d'Ubuntu. (Si ce n'est pas le cas, clique sur Démarrer, tape « ubuntu » et ouvre-le.)

Il te demandera de créer un **nom d'utilisateur** et un **mot de passe** pour ton système Linux :

1. Tape un nom d'utilisateur (en minuscules, sans espaces) et appuie sur Entrée.
2. Tape un mot de passe et appuie sur Entrée, puis tape-le une seconde fois pour le confirmer.

Un détail piège tout le monde ici : **quand tu tapes le mot de passe, rien ne s'affiche à l'écran**. Pas de points, pas d'étoiles, rien. C'est une mesure de sécurité de Linux, pas une panne. Ta saisie est bien prise en compte, alors tape simplement le mot de passe et appuie sur Entrée.

N'oublie pas ce mot de passe. Tu en auras besoin de temps en temps pour installer des choses.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Vérifier que tout fonctionne

Ferme tout, puis clique sur **Démarrer**, tape « ubuntu » et ouvre-le. Tu devrais voir une fenêtre avec une invite qui se termine par `$` et qui attend que tu tapes quelque chose. Félicitations : c'est un vrai terminal Linux, et tu disposes maintenant du même environnement de développement que les professionnels.

Essaie de taper `ls` puis d'appuyer sur Entrée. Cette commande liste les fichiers de ton dossier actuel (il n'y en aura pas encore beaucoup).

## Utiliser WSL depuis VS Code

Si tu as [installé VS Code](/guides/installing-vscode), il peut se connecter à WSL pour que ton éditeur et ton terminal Linux travaillent ensemble :

1. Ouvre VS Code.
2. Ouvre le panneau des extensions (l'icône avec les quatre carrés à gauche, ou Ctrl+Shift+X), cherche **WSL** et installe l'extension créée par Microsoft.
3. Appuie sur Ctrl+Shift+P, tape « WSL » et choisis **WSL: Connect to WSL**. VS Code se rouvrira, connecté à Ubuntu.

À partir de maintenant, tout terminal que tu ouvres dans VS Code (menu Terminal, puis New Terminal) est un terminal Linux. C'est la configuration qu'on recommande pour la suite de nos guides.

## En cas de problème

Le problème le plus courant est une erreur qui mentionne la **virtualisation** (ou « VT-x », « AMD-V », ou « virtual machine platform »). WSL repose sur une fonctionnalité matérielle qui est désactivée sur certains ordinateurs. Pour l'activer, il faut modifier un réglage dans le BIOS de ton ordinateur, et la marche à suivre varie selon le fabricant. Cherche le nom du modèle de ton ordinateur portable suivi de « enable virtualisation » pour trouver les instructions, ou demande de l'aide sur <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">notre forum</a> et on te dépannera.

Pour tout le reste, le <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">guide officiel d'installation de WSL</a> de Microsoft comporte une section de dépannage, et là encore, le forum est toujours là pour toi.
