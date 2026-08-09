---
title: "Données Spotify"
description: "Analyse tes données d'écoute Spotify."
en_md5: 6e047c1f875bedfce76c5587295b6ac3
---

Dans cet exercice, tu vas analyser des données provenant d'une fausse API Spotify.

L'API demande deux types de requêtes :

1. **Requête utilisateur** : récupère les titres préférés d'un utilisateur depuis `https://api.spotify.com/v1/users/{username}`. Elle renvoie un dictionnaire avec un tableau `items`, où chaque élément contient un dictionnaire `urls` avec une URL `spotify_api`.

2. **Requête artiste** : récupère les informations d'un artiste depuis l'URL de la réponse précédente. Elle renvoie un dictionnaire avec une clé `name`.

Crée une fonction appelée `favoriteArtists` (artistes préférés) qui prend un nom d'utilisateur et renvoie une phrase comme :

```
"fred's most listened to artists are: Glee, NSYNC, Beethoven, and Limp Bizkit!"
```

En cas d'erreur de l'API, renvoie l'erreur précédée de `"Error: "`.

La fonction `fetch(url, params)` (récupérer des données) t'est fournie. Pour cet exercice, params doit toujours être un dictionnaire vide `{}`.
