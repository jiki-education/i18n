---
title: "Eigene Funktionen schreiben"
description: "Mit dem Schlüsselwort function baust du dir eigene Maschinen, die Jiki auf seine Regale stellt und die du jederzeit wiederverwenden kannst."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Bisher hast du Funktionen benutzt, die schon für dich gebaut wurden, Funktionen wie `circle`, `rectangle`, `moveRight` und `shoot`. Die wurden alle gebaut und auf Jikis Regale gestellt.

Aber jetzt ist es Zeit, dass du anfängst, deine eigenen Funktionen zu bauen.

Um dir zu zeigen, wie das geht, bauen wir eine neue Funktion für das Labyrinth namens `walk5` (fünf Schritte gehen).

Diese Funktion bewegt die Figur immer fünf Schritte nach vorne. Zugegeben, das ist nicht die nützlichste Funktion der Welt, aber sie ist schön einfach und gut zum Anfangen.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Die Figur auf dem Raster des Labyrinths, bereit, fünf Schritte nach vorne zu gehen"
  width="500"
  height="314"
/>

Wenn ich dich also bitten würde, Code zu schreiben, der die Figur fünf Schritte nach vorne bewegt, könntest du entweder fünfmal `move` (bewegen) schreiben oder eine `repeat`-Schleife benutzen. In diesem Beispiel machen wir es uns einfach und schreiben fünfmal hintereinander `move`.

```javascript
move()
move()
move()
move()
move()
```

Das ist also das, was in unserer Funktion stehen soll.

Jetzt füge darunter eine Zeile hinzu, mit der du Jiki sagst, dass er diese Funktion benutzen soll. Das hast du schon oft gesehen.

Und dann ist es unsere Aufgabe, diese ersten fünf Zeilen in eine Funktion zu packen, damit genau diese ersten fünf Zeilen ausgeführt werden, wenn Jiki `walk5` benutzt.

Um diese fünf Zeilen in eine Funktion zu verwandeln, diese fünf Bewegungen in eine Funktion, brauchen wir ein neues Schlüsselwort, nämlich das Schlüsselwort `function`.

Wenn wir das Schlüsselwort `function` benutzen, müssen wir zwei Dinge tun. Erstens: den Namen der Funktion angeben. In diesem Fall ist das `walk5`. Und zweitens: mit geschweiften Klammern den Code umschließen, der sagt: „Das sollst du innerhalb der Funktion tun.“ Das können wir zu unserem Code hinzufügen, und damit sagen wir Jiki, dass er eine Funktion namens `walk5` erstellen soll, und dass er diese fünf Zeilen Code ausführen soll, wenn `walk5` benutzt wird.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Wenn Jiki das Schlüsselwort `function` sieht, baut er eine neue Funktion, schreibt diese Befehle auf eine Tafel in ihrem Inneren und klebt ein Schild mit der Beschriftung `walk5` auf die Maschine. Danach stellt er die Funktion zu all den anderen auf die Regale.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki steht neben einer neuen Maschine mit einer Tafel darin, auf die die Befehle der Funktion geschrieben werden"
  width="500"
  height="396"
/>

Die Funktion, die du gebaut hast, ist nichts Besonderes im Vergleich zu den eingebauten Funktionen (_built-in_ auf Englisch). Sie stehen alle einfach nebeneinander auf seinen Regalen.

Und wenn du die Funktion benutzt, wenn du `walk5()` schreibst, holt Jiki einfach die Maschine vom Regal und benutzt sie genauso wie jede andere Funktion. Du kannst dir vorstellen, dass in jeder Maschine ein Mini-Jiki wohnt. Mini-Jiki trägt immer diesen coolen Hut. Und dieser Mini-Jiki arbeitet genau wie der normale Jiki draußen und befolgt die Befehle auf dieselbe Weise.

Eine wichtige Sache musst du hier verstehen: Wenn Jiki die Funktion erstellt, führt er den Code nicht wirklich aus. Er schreibt den Code nur auf, um ihn später zu benutzen.

Die Figur im Labyrinth bewegt sich an dieser Stelle nicht, wenn du das Schlüsselwort `function` schreibst.

Jiki hat die Maschine gebaut und auf die Regale gestellt. Erst wenn du ihm sagst, dass er die Maschine benutzen soll, indem du `walk5()` schreibst, passiert das auch wirklich.
