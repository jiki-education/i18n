---
title: "Zeit nachschlagen"
description: "Schlage die aktuelle Zeit für eine Stadt nach."
en_md5: 8353eee229bee19f27557a7f56933a6a
---

Erstelle eine Funktion namens `getTime` (die Zeit holen), die eine Stadt als Eingabewert entgegennimmt, mit der Funktion `fetch` (abrufen) die Zeit in dieser Stadt abruft und sie dann als Teil eines Strings zurückgibt.

Die URL der API ist „https://timeapi.io/api/time/current/city“.
Die Parameter für `fetch` sollten einen `key` (Schlüssel) namens „city“ enthalten, der auf den String gesetzt ist, der an `getTime` übergeben wird.

Du solltest die Antwort in einen String umwandeln, der so formatiert ist: „The time on this Sunday in Amsterdam is 00:28“

Wenn die Antwort einen Schlüssel „error“ enthält, gib stattdessen die Fehlermeldung zurück.
