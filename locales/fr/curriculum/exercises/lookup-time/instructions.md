---
title: "Trouve l'heure"
description: "Trouve l'heure actuelle d'une ville."
en_md5: 8353eee229bee19f27557a7f56933a6a
---

Crée une fonction appelée `getTime` (obtenir l'heure) qui prend une ville comme entrée, utilise la fonction `fetch` (récupérer) pour obtenir l'heure dans cette ville, puis la renvoie au sein d'une _string_.

L'URL de l'API est "https://timeapi.io/api/time/current/city".
Les paramètres de `fetch` doivent contenir une seule `key` (clé) "city", dont la valeur est la _string_ passée à `getTime`.

Tu dois transformer la réponse en une _string_ au format suivant : "The time on this Sunday in Amsterdam is 00:28"

Si la réponse contient une clé "error", renvoie le message d'erreur à la place.
