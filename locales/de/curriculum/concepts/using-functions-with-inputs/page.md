---
title: "Eingabewerte von Funktionen"
description: "Wie du Werte in die Trichter einer Funktion steckst, damit sie jedes Mal etwas anderes macht, wenn du sie startest."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Eines der mächtigsten Dinge an Maschinen, also an Funktionen, ist, dass du bei vielen etwas hineinstecken kannst. Wenn du sie startest, verändert das, was sie tun.

Bisher haben wir Maschinen gesehen, die ein bisschen wie Boxen aussehen, zum Beispiel die `move`-Maschine (bewegen).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Die move-Maschine, eine schlichte Box ohne Trichter"
  width="322"
  height="400"
/>

Aber manche Maschinen haben Trichter, wie diese `walk`-Maschine (gehen). Die `walk`-Maschine ist genau wie die `move`-Maschine. Sie bewegt die Figur (_character_ auf Englisch) nach vorn, nur dass Jiki den Trichter benutzen kann, um anzugeben, wie viele Schritte deine Figur nach vorn gehen soll. Statt also dreimal hintereinander die `move`-Funktion zu benutzen, `move`, `move`, `move`, kannst du jetzt einfach die `walk`-Funktion nehmen und Jiki sagen, er soll die Zahl drei in die Maschine stecken.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Die walk-Maschine mit einem Trichter oben für die Anzahl der Schritte"
  width="481"
  height="400"
/>

Im Code schreiben wir weiterhin den Namen der Funktion, hier `walk`, und wir setzen weiterhin die öffnende runde Klammer. Doch dann, vor der schließenden Klammer, sagen wir, was der Eingabewert (_input_ auf Englisch) sein soll. In diesem Fall soll der Eingabewert drei sein, also `walk` drei Schritte nach vorn:

```javascript
walk(3)
```

Wenn Jiki das sieht, holt er sich die Zahl drei, und du kannst dir diese Zahl wie eine kleine Münze vorstellen, und er steckt sie in den Trichter der Maschine, bevor er die Kurbel dreht, um sie zu starten.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki lässt die Zahl 3 wie eine Münze in den Trichter der walk-Maschine fallen und dreht dann die Kurbel"
  width="421"
  height="400"
/>

Bei Funktionen, die Rechtecke und Kreise zeichnen, musst du Jiki sagen, dass er mehrere verschiedene Zahlen hineinstecken soll: zum Beispiel wie weit es vom linken Rand entfernt sein soll, wie weit vom oberen Rand, wie breit ein Rechteck ist und wie hoch.

In Jikis Welt sind das einfach verschiedene Trichter, einer für jede dieser Zahlen.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Die Rechteckmaschine mit Trichtern für left, top, width und height und die Kreismaschine mit Trichtern für cx, cy und radius"
  width="396"
  height="400"
/>

Im Code schreiben wir also einfach jede Zahl hin und setzen ein Komma dazwischen. Der Name der Funktion, eine öffnende Klammer, eine Zahl für jeden Eingabewert, alles mit Kommas getrennt, und dann schließen wir die Klammern:

```javascript
rectangle(10, 20, 30, 40)
```

Wenn du eine Funktion mit der falschen Anzahl von Eingabewerten benutzt, bekommst du eine Fehlermeldung. Wenn du zum Beispiel einen Eingabewert in eine Maschine stecken willst, die gar keinen Trichter hat, sagt Jiki dir, dass das nicht geht. Und wenn du eine Maschine mit einem Trichter benutzt, aber Jiki nicht sagst, was er hineinstecken soll, dann hält er auch an und beschwert sich. Probier es aus, wenn du dich ein bisschen rebellisch fühlst, und schau, was passiert. Solche Fehler wirst du noch viele machen, wenn die Dinge komplizierter werden. Lass dich davon nicht stressen oder ärgern. Wir alle lernen, indem wir Fehler machen. Es ist buchstäblich der schnellste Weg, wie unser Gehirn Dinge wirklich verinnerlicht. Und jeder macht diese Fehler. Wir haben alle bei null angefangen, also mach dir keinen Stress.

Noch eine Sache, die erwähnenswert ist: In Übungen siehst du manchmal Zeilen, die mit zwei Schrägstrichen beginnen, `//`. Die heißen Kommentare (_comments_ auf Englisch). Das sind private Notizen nur für dich, die Jiki völlig ignoriert. Wenn Jiki also eine Zeile sieht, die mit diesen zwei Schrägstrichen beginnt, überspringt er sie einfach und macht mit der nächsten Zeile weiter. Mit Kommentaren kannst du deine eigenen Notizen schreiben. Sie sind wirklich nützlich, um dir ins Gedächtnis zu rufen, wie etwas funktioniert. Oft sind Kommentare auch schon für dich geschrieben: Wenn du eine Übung startest, schlagen sie dir vielleicht vor, wo du Code schreiben solltest oder wie du etwas lösen kannst. Aber du kannst gerne auch eigene Kommentare hinzufügen.

Unten in den Anweisungen einer Übung findest du Informationen zu den Funktionen, die du benutzen kannst, und genau, welche Eingabewerte du hineinstecken musst.
