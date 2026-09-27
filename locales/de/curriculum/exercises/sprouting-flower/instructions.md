---
title: "Sprießende Blume"
description: "Nutze Beziehungen zwischen Variablen, um eine Blume animiert aus dem Boden wachsen zu lassen."
en_md5: acd8f364af4cfdc8f76ced2b17539bbb
---

Deine Aufgabe ist es, eine Blume zu bauen, die über `60` Iterationen wächst.

Die Animation sollte ungefähr so aussehen.

<img src="/static/images/exercise-assets/sprouting-flower/frames.webp" alt="Einzelbilder, die zeigen, wie eine Blume über 60 Iterationen aus dem Boden wächst" style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Der Schlüssel zu dieser Übung ist es, Beziehungen zwischen den verschiedenen Elementen aufzubauen. Das ist eine wichtige Fähigkeit beim Programmieren.

**Bevor du die Anleitung weiterliest**, nimm dir ein paar Minuten Zeit und überleg dir konzeptionell, wie du das hinbekommst. Schreib auf ein Blatt Papier, welche Schritte du vermutlich brauchst.

**Wenn du eine Lösung hast**, mit der du zufrieden bist (oder aufgegeben hast), **scrolle nach unten**, um die Anleitung zu sehen.

---

## So löst du die Aufgabe

Der wichtigste Baustein ist der Mittelpunkt der Blume. Alles andere lässt sich von diesem Mittelpunkt aus berechnen. Bei jeder Iteration der Schleife sollte sich der Mittelpunkt um `1` nach oben bewegen (bevor gezeichnet wird).

Hier sind noch ein paar Dinge, die du wissen musst:

- Oben links auf der Zeichenfläche ist `0,0`. Unten rechts ist `100,100`.
- Der Radius der Blume beginnt bei `0`. Er sollte bei jeder Iteration um `0.4` zunehmen (bevor gezeichnet wird).
- Der Radius des Stempels (das gelbe Stück in der Mitte der Blume) beginnt bei `0`. Er sollte bei jeder Iteration um `0.1` zunehmen (bevor gezeichnet wird).
- Der Stiel sollte am Mittelpunkt der Blume beginnen und bis zum Boden reichen.
- Die Breite des Stiels beträgt 10 % der Höhe des Stiels, also `stemHeight / 10` (Höhe des Stiels geteilt durch 10).
- Alles ist auf der horizontalen Achse zentriert.
- Die Blätter liegen auf jeder Seite bündig am Stiel an.
- Die Blätter sitzen auf halber Höhe des Stiels.
- Der `radiusX` (Radius in x-Richtung) der Blätter beträgt 50 % des Radius der Blume.
- Der `radiusY` (Radius in y-Richtung) der Blätter beträgt 20 % des Radius der Blume.
- Die Blüte kann je nach Geschmack `"red"` oder `"pink"` sein. Der Stempel (die Mitte der Blume) sollte `"yellow"` sein. Das Gras sollte `"green"` sein. Der Hintergrund sollte `"skyblue"` sein.

Es ist **entscheidend**, dass du immer nur an einer Sache gleichzeitig arbeitest:

- Zeichne zuerst die pinke Blume und bring sie dazu, sich nach oben zu bewegen.
- Dann lass sie wachsen.
- Ergänze die kleinere gelbe Mitte.
- Ergänze den Stiel.
- Ergänze das linke Blatt.
- Ergänze das rechte Blatt.

Mit dem Schieberegler kannst du durch den Code scrollen und herausfinden, wo etwas schiefgeht.

### Diese Übung hat es in sich

Diese Übung ist eine echte Herausforderung. Lass dir Zeit. Wenn du wirklich nicht weiterkommst, frag nach Hilfe. Und denk daran, uns viele Informationen zu geben: was nicht funktioniert und warum du glaubst, dass es daran liegt.

Nutze den Schieberegler (die Wiedergabeleiste unten links), um die Werte deiner Variablen zu prüfen, wenn dir nicht klar ist, was gerade passiert. Klick auf den kleinen Umschaltknopf, um Informationen zu jeder Zeile zu sehen.

Denk daran: Am meisten lernst du, wenn es schwer wird. Jedes Mal, wenn du etwas falsch machst und dann eine Lösung findest, wirst du immer mehr zum Programmierer. Irgendwann fühlt es sich leicht an. Bleib einfach dran.
