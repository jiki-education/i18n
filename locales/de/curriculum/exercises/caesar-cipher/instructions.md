---
title: "Caesar-Verschlüsselung"
description: "Verschlüssle eine geheime Nachricht mit einem uralten römischen Verschlüsselungsverfahren."
en_md5: 029bbd7050127405f5e67a3a20353139
---

Die Caesar-Verschlüsselung ist eine der ältesten und einfachsten Verschlüsselungstechniken. Julius Caesar nutzte sie, um geheime Nachrichten an seine Generäle zu schicken.

Die Verschlüsselung funktioniert so: Jeder Buchstabe der Nachricht wird um eine feste Anzahl von Positionen im Alphabet verschoben. Zum Beispiel wird bei einer Verschiebung von 3 aus „a" ein „d", aus „b" ein „e" und so weiter. Wenn die Verschiebung über „z" hinausgeht, beginnt sie wieder bei „a".

Leerzeichen bleiben Leerzeichen (sie werden nicht verschoben).

Schreibe eine Funktion namens `encode(message, shift)` (verschlüsseln), die eine Nachricht in Kleinbuchstaben und einen Verschiebungswert entgegennimmt und die verschlüsselte Nachricht zurückgibt.

Zum Beispiel:

- `encode("abc", 1)` gibt `"bcd"` zurück
- `encode("xyz", 3)` gibt `"abc"` zurück (beginnt wieder bei „a")
- `encode("hello world", 5)` gibt `"mjqqt btwqi"` zurück

Tipp: Am besten zerlegst du dieses Problem in kleinere Hilfsfunktionen!

### Fun Fact

Ich habe einmal eine Tech-Konferenz in Braga in Portugal moderiert. Fünf Minuten bevor ich auf die Bühne gehen sollte, kamen die Organisatoren auf mich zu. Etwas verlegen fragten sie, ob es mir etwas ausmachen würde, mich für den ersten Teil des Tages als Julius Caesar zu verkleiden, um Bragas römisches Erbe zu feiern. Ob ich das wohl hinbekommen habe ...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy als Caesar verkleidet"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
