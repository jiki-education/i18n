---
title: "Spotify-Daten"
description: "Verarbeite deine Hördaten von Spotify."
en_md5: 6e047c1f875bedfce76c5587295b6ac3
---

In dieser Übung verarbeitest du Daten aus einer nachgebauten Spotify-API.

Die API erfordert zwei Arten von Anfragen:

1. **Nutzeranfrage**: Ruf die Lieblingstitel eines Nutzers von `https://api.spotify.com/v1/users/{username}` ab. Das gibt ein Wörterbuch mit einer `items`-Liste zurück, wobei jedes Element ein `urls`-Wörterbuch mit einer `spotify_api`-URL hat.

2. **Künstleranfrage**: Ruf die Details des Künstlers über die URL aus der vorherigen Antwort ab. Das gibt ein Wörterbuch mit dem Schlüssel `name` zurück.

Erstelle eine Funktion namens `favoriteArtists` (Lieblingskünstler), die einen Nutzernamen entgegennimmt und einen Satz wie diesen zurückgibt:

```
"fred's most listened to artists are: Glee, NSYNC, Beethoven, and Limp Bizkit!"
```

Wenn die API einen Fehler zurückgibt, gib den Fehler mit dem Präfix `"Error: "` zurück.

Die Funktion `fetch(url, params)` (abrufen) ist vorgegeben. In dieser Übung sollte das zweite Argument immer ein leeres Wörterbuch `{}` sein.
