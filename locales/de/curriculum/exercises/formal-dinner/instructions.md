---
title: "Festliches Abendessen"
description: "Schlag im Sitzplan nach, an welchem Tisch ein Gast sitzt."
en_md5: 96fcee7c5e2237298b1a8e288278cf04
---

Du bist wieder in deinem Nebenjob als Türsteher. Es ist der Abend nach der „After Party“, und schon wieder steht eine Feier an. Diesmal ist es ein festliches Abendessen, also bist du heute Abend weniger „kräftiger Mann an der Tür“ und eher „Person mit Klemmbrett und schicker Weste“.

Hier ist definitiv nicht der Ort, an dem du **nur** deinen Vornamen nennst. Genau genommen nennst du hier deinen Vornamen überhaupt nicht. Hier wird jeder mit einer Anrede (_honorific_ auf Englisch) und seinem Nachnamen angesprochen, also Miss, Mr, Dr und so weiter.

Die Organisatoren haben dir den Sitzplan als zwei getrennte Arrays gegeben. Eines enthält die vollständigen Namen der Gäste. Das andere enthält den Namen des Tisches, an dem jeder Gast sitzt (benannt nach Bäumen und Blumen). Wie bei der „After Party“ laufen die beiden Arrays parallel: Der Gast an Position 3 im ersten Array sitzt am Tisch an Position 3 im zweiten Array.

Wenn also Mr Pitt hereinschwebt, musst du herausfinden, dass er der „Brad Pitt“ auf deiner Liste ist, und ihm dann sagen, an welchem Tisch er sitzt.

Schreib eine Funktion namens `tableFor` (schlägt den Tisch nach, an dem ein Gast sitzt). Die Funktion hat drei Eingabewerte:

- Der erste ist das Array mit den vollständigen Namen der Gäste, als Strings
- Der zweite ist das Array mit den Tischnamen, in derselben Reihenfolge wie die Gäste
- Der dritte ist der ankommende Gast, formatiert als Anrede gefolgt von seinem Nachnamen (z. B. „Mr Pitt“)

Gib den Namen des Tisches zurück, an dem der Gast sitzt. Steht er gar nicht auf dem Sitzplan, gib stattdessen den String `"No table found"` zurück (hier schummelt sich keiner rein!).

Die Anrede ist immer genau ein Wort, und alles danach ist der Nachname des Gastes. Die meisten Nachnamen bestehen aus einem Wort, aber ein paar vornehme Nachnamen bestehen aus zwei Wörtern.

Sei aber vorsichtig. Viele Nachnamen sehen anderen zum Verwechseln ähnlich.

### Methoden und Eigenschaften von Strings und Arrays

Zusätzlich zur Eigenschaft `.length`, die du in der letzten Übung kennengelernt hast, gibt es vier Methoden, die dir nützlich sein könnten. Es gibt viele Möglichkeiten, diese Übung zu lösen, aber mit ihnen kommst du zur kürzestmöglichen Lösung.

`"...".split(substring)` zerlegt einen String mithilfe eines anderen Strings. Zum Beispiel:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` erfasst einen Teil eines Arrays, beginnend bei Index `start` und bis zum Ende des Arrays. Die erfassten Elemente werden in ein NEUES Array kopiert, das dir zurückgegeben wird. Damit fallen die ersten `start` Elemente weg. Zum Beispiel:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` fügt die Elemente eines Arrays mit dem angegebenen String zusammen. Zum Beispiel:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` sagt dir, ob ein String mit einem anderen String endet. Zum Beispiel:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
