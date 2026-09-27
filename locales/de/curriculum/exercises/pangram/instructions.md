---
title: "Pangramm"
description: "Prüfe, ob ein Satz jeden Buchstaben des Alphabets enthält, unabhängig von der Groß- und Kleinschreibung."
en_md5: 2f0271add2facf8e75ecb8afde53682e
---

Willkommen zum zweiten Teil der Pangramm-Reihe. Zur Erinnerung: Ein Pangramm ist ein Satz, der jeden Buchstaben des Alphabets mindestens einmal enthält.

Diese Übung ist eine komplexere Version der vorherigen Pangramm-Übung, die du gelöst hast, denn hier kommen auch Großbuchstaben dazu. Das macht die Sache überraschend kompliziert.

Erstelle eine Funktion namens `isPangram` (ist ein Pangramm), die einen Satz als String entgegennimmt und einen booleschen Wert zurückgibt, der angibt, ob es sich um ein Pangramm handelt oder nicht.

Deinen bisherigen Code haben wir dir als Ausgangspunkt vorgegeben.

### Hilfsfunktionen

Zusätzlich zu deiner bestehenden Hilfsfunktion (die du, wie vorgeschlagen, `includes` genannt hast), empfehlen wir dir, zwei neue Hilfsfunktionen zu erstellen, die dir beim Lösen helfen. Diese Funktionen haben Standardnamen, an die du dich am besten hältst:

1. `indexOf(haystack, needle)`: Eine Funktion, die berechnet, **wo** die Nadel im Heuhaufen steckt. Statt also wie `includes` `true`/`false` zurückzugeben, liefert sie den **Index** der Nadel. Zum Beispiel würde `indexOf("Jeremy", "r")` den Wert `2` zurückgeben (denk daran, wir zählen ab 0).
2. `toLowerCase(someString)`: Eine Funktion, die einen String entgegennimmt und ihn in Kleinbuchstaben umgewandelt zurückgibt. Zum Beispiel würde `toLowerCase("JeReMy")` den Wert `"jeremy"` zurückgeben.

Viel Spaß!
