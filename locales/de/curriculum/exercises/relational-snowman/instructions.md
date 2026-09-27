---
title: "Relationaler Schneemann"
description: "Baue deinen Schneemann so um, dass sich alle Größen aus einer einzigen Variable ableiten lassen."
en_md5: 1753f8d873e9a5b58885cc1daee5ea5d
---

In dieser Übung bauen wir wieder einen Schneemann. Wie in der letzten Übung machen wir es so, dass sich alles aus einer einzigen Variable `size` (Größe) durch Rechnen ableiten lässt.

Je nachdem, welche `size` du wählst, soll der Schneemann wachsen.

<img
  src="/static/images/exercise-assets/relational-snowman/sizes.webp"
  alt="Schneemann in den Größen 1 bis 5"
  style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>

### So funktioniert es

- Die obere linke Ecke der Zeichenfläche ist `0,0`. Die untere rechte Ecke ist `100,100`.
- Du hast eine schon vorgegebene Variable `snowmanX` (x-Koordinate des Schneemanns) für die Mitte des Bildes und eine Variable `size`, die du von `1` bis `5` ändern kannst, um den Schneemann wachsen zu lassen.
- Alle anderen Variablen musst du mit arithmetischen Ausdrücken ableiten.
- Der Radius des Kopfes ist `size * 2`, der Radius des Körpers ist `size * 3` und der Radius der Basis ist `size * 4`.
- Die Kreise sollen sich berühren: Der Körper sitzt direkt über der Basis und der Kopf sitzt direkt über dem Körper. (Unser Schneemann ist etwas wackeliger als in den vorherigen Übungen: Jeder Schneeball sitzt genau auf dem darunterliegenden, ohne dass sie ineinander verschmelzen. Es muss ein sehr eisiger Tag sein!)
- Der unterste Punkt des Basiskreises liegt `size` vom unteren Rand der Zeichenfläche entfernt.
- Du musst die Mittelpunkte aller drei Schneebälle berechnen.

### Variablen

Deine Aufgabe ist es, diese Variablen wie oben beschrieben zu setzen.

- `headRadius` (Radius des Kopfes): von `size` ableiten
- `bodyRadius` (Radius des Körpers): von `size` ableiten
- `baseRadius` (Radius der Basis): von `size` ableiten
- `baseY` (y-Koordinate der Basis): von `size` und `baseRadius` ableiten (die Basis steht auf dem Boden)
- `bodyY` (y-Koordinate des Körpers): von `baseY`, `baseRadius` und `bodyRadius` ableiten
- `headY` (y-Koordinate des Kopfes): von `bodyY`, `bodyRadius` und `headRadius` ableiten

### Mit der Größe spielen

Du kannst die Größe von `1` bis `5` ändern, und der Schneemann wächst dann. Denk daran, nach der Änderung auf „Run code“ zu klicken.
