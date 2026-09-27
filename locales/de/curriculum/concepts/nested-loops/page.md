---
title: "Schleifen in Schleifen"
description: "Eine Schleife in eine andere stecken, sodass die innere Schleife bei jedem Schritt der äußeren Schleife vollständig durchläuft. Perfekt für Gitter."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Sagen wir, wir wollen eine Reihe Blumen. Dann können wir so etwas schreiben. Wir legen eine Position fest, wir pflanzen eine Blume, wir erhöhen die Position um 10, wir wiederholen, und am Ende haben wir eine schöne, ordentliche Reihe Blumen.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki an einer Tafel, darunter eine einzelne ordentliche Reihe gepflanzter Blumen"
  width="406"
  height="400"
/>

Aber was, wenn wir ein Gitter aus Blumen mit Reihen und Spalten wollen? Vielleicht vier Reihen mit fünf Blumen pro Reihe.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Ein vier mal fünf großes Gitter aus Blumen, und Jiki überlegt, wie er es zeichnen soll"
  width="383"
  height="400"
/>

Wir haben eine Schleife, die eine Reihe Blumen zeichnet. Wie kannst du damit vier Reihen zeichnen? Oder was könnten wir tun, um vier Reihen zu zeichnen?

Eine Möglichkeit wäre, diese Schleife einfach viermal zu kopieren und einzufügen und jedes Mal die obere Position zu ändern. Das würde funktionieren. Das wäre völlig in Ordnung. Aber es wiederholt sich, und es gibt einen besseren Weg. Wir wissen: Wenn sich Code wiederholt, können wir eine Schleife benutzen, um die Sache zu vereinfachen.

Hier können wir also eine Schleife in eine andere Schleife stecken. Eine Schleife für die Reihen und eine für die Blumen in der jeweiligen Reihe. Fangen wir damit an, eine `repeat`-Schleife um unseren vorhandenen Code zu legen, damit du ein Gefühl dafür bekommst. Und wir wiederholen erst einmal nur ein Mal. Wir sagen Jiki also, er soll alles innerhalb dieser äußeren geschweiften Klammern einmal tun. Das hat genau denselben Effekt, als hätten wir diese äußere Schleife gar nicht. Wir sagen Jiki, er soll etwas einmal wiederholen, und das ist dasselbe, wie ihm zu sagen, er soll es ohne `repeat` tun. Aber so funktioniert dieser Code. Er ist legitim, gültiger Code. Wir haben eine Schleife in einer anderen Schleife.

Was passiert also, wenn wir diese äußere Schleife auf zwei Wiederholungen umstellen? Dann führt Jiki das Ganze, also fünf Mal `plant` (pflanzen), zwei Mal aus. Er pflanzt 10 Blumen. Aber alle diese Blumen landen in derselben Reihe.

So wie wir die Position bei jeder Blume ein Stück von links nach rechts verschieben müssen, müssen wir nach jeder fertigen Reihe auch die vertikale Position verschieben. Wie machen wir das? Wir können eine äußere Variable für die obere Position anlegen, sie in unserer `plant`-Funktion verwenden und sie nach jeder Reihe um 10 erhöhen.

Denk einmal durch, welchen Wert sie jeweils hat. Die obere Position beginnt bei 10. Bei den ersten fünf Malen bleibt sie so. Die linke Position wächst. Und dann addieren wir noch einmal 10 dazu, zu dieser oberen Position, und wir pflanzen fünf weitere Blumen etwas tiefer. Wir setzen die linke Position wieder auf 10 zurück und erhöhen sie dann wieder bei jedem Durchlauf.

Und jetzt können wir sagen: Wiederhole das vier Mal, und wir bekommen vier Reihen mit je fünf Pflanzen.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Das fertige vier mal fünf große Gitter aus Blumen, und ein fröhlicher Jiki zeigt zwei Daumen nach oben"
  width="389"
  height="400"
/>

Das Wichtigste ist: Jiki erledigt die ganze Arbeit in der inneren Schleife (_inner loop_ auf Englisch), bevor er zur äußeren Schleife (_outer loop_ auf Englisch) zurückkommt. Er springt nicht ständig hin und her. Er schließt die innere Schleife ab und geht dann zum nächsten Schritt der äußeren Schleife über.

In diesem Fall kannst du dir die äußere Schleife als die Steuerung der Gruppen oder der Reihe vorstellen, und die innere Schleife als die Steuerung jedes Elements in dieser Gruppe oder jedes Elements in dieser Reihe. In unserem Beispiel erzeugt die äußere Schleife vier Reihen, und die innere Schleife setzt fünf Pflanzen, also fünf Elemente, in jede Gruppe.
