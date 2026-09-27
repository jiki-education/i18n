---
title: "Gestreifter Stoff"
description: "Webe ein gestreiftes Muster, indem du die Farbe jedes Streifens richtig wählst."
en_md5: ba93b39f1883d50139d243a16e3c204f
---

Du entwirfst einen Algorithmus für eine Rolle gestreifter Stoff, die so aussehen soll:

<svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Zwanzig senkrechte Streifen: an beiden Enden violett, dazwischen grüne, blaue und gelbe Streifen" style="width: 200px; height: 200px; display: block; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;padding:4px;margin-top:-8px">
  <rect x="0" y="0" width="5" height="100" fill="#A020F0" />
  <rect x="5" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="10" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="15" y="0" width="5" height="100" fill="#008000" />
  <rect x="20" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="25" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="30" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="35" y="0" width="5" height="100" fill="#008000" />
  <rect x="40" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="45" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="50" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="55" y="0" width="5" height="100" fill="#008000" />
  <rect x="60" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="65" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="70" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="75" y="0" width="5" height="100" fill="#008000" />
  <rect x="80" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="85" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="90" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="95" y="0" width="5" height="100" fill="#A020F0" />
</svg>

Das Muster ist eine sich wiederholende Abfolge von `"yellow"`, `"blue"`, `"yellow"`, `"green"`. Der erste und der letzte Streifen sind `"purple"`.

Die Leinwand, auf der du entwirfst, ist `100` breit und `100` hoch. Du musst `20` Streifen zeichnen, die jeweils `5` breit sind.

### Übungsregeln

Du kannst diese Übung nicht lösen, indem du einfach 20 Rechteck-Anweisungen schreibst. Dein Code soll für jede Stoffgröße funktionieren. Tatsächlich darfst du die Funktion `rectangle(...)` (Rechteck) nur einmal in deinem Code verwenden!

Stattdessen brauchst du eine Schleife und den Rest-Operator (_remainder_ auf Englisch), den wir in der letzten Videolektion gesehen haben. Denk genau über die Reihenfolge der Anweisungen nach. Das ist der Schlüssel, um diese Übung zu schaffen.

Lass dir Zeit und hab Spaß!
