---
title: "Animation"
description: "Wie man das Auge austrickst, Bewegung zu sehen, indem man den Hintergrund übermalt und jedes Einzelbild in einer leicht veränderten Position neu zeichnet."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Wenn wir bisher mit der `repeat`-Schleife (wiederholen) Dinge gezeichnet haben, hat jedes neue Ding etwas zum Bild hinzugefügt. Wenn wir einen neuen Ziegelstein in eine Mauer gezeichnet haben, hat er eine Lücke gefüllt. Wenn wir 10 Kreise gezeichnet haben, sehen wir 10 Kreise auf dem Bildschirm. Das ist wie bei einem Gemälde. Sobald du Farbe auf die Wand bringst, verschwindet sie nicht, wenn du daneben etwas Neues malst. Sie bleibt da. Aber was, wenn wir etwas so aussehen lassen wollen, als würde es sich bewegen?

Hast du schon mal ein Daumenkino gesehen? Als ich ein Kind war, waren die total beliebt, heute sind sie es weniger. Ein Daumenkino ist ein kleines Buch, in dem jede Seite eine etwas andere Zeichnung zeigt. Wenn du die Seiten schnell durchblätterst, sehen deine Augen, wie sich die Zeichnungen ändern, und dein Gehirn denkt, da würde sich etwas bewegen. Dabei bewegt sich gar nichts. Es sind einfach viele leicht unterschiedliche Bilder, eines nach dem anderen. Und genau so funktioniert Animation im Code. Der Trick ist derselbe. Bevor wir eine neue Szene zeichnen, übermalen wir die ganze Leinwand mit einer Hintergrundfarbe, ein bisschen so, als würden wir im Daumenkino eine frische Seite aufschlagen. Dann ändern wir die Szene ein klein wenig, sodass sie wie Bewegung aussieht.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Ein Daumenkino mit einem laufenden Strichmännchen, jede Seite etwas anders, sodass sich die Figur zu bewegen scheint"
  width="500"
  height="274"
/>

Nehmen wir also einen vertrauten Codeblock, in dem wir Kreise über den Bildschirm zeichnen. Wir legen eine Variable `position` an, und wir haben einen `repeat`-Block, in dem wir einen Kreis zeichnen und dann `position` um eins nach rechts verschieben. Wenn wir diesen `repeat`-Block 100-mal ausführen, sehen wir 100 Kreise über den Bildschirm verteilt.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Eine Spur aus 100 blauen Kreisen, von links nach rechts über den Bildschirm gezeichnet"
  width="500"
  height="197"
/>

Schau mal, was passiert, wenn wir jedes Mal vor dem Kreis ein einfaches Rechteck zeichnen.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Statt einer Spur aus Kreisen werden unsere Augen jetzt so ausgetrickst, dass sie einen einzigen Kreis sehen, der über den Bildschirm zu gleiten scheint.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Eine Folge von Einzelbildern, jedes mit einer frischen weißen Leinwand und einem einzelnen blauen Kreis, der jeweils einen Schritt weiter rechts steht"
  width="500"
  height="187"
/>

Jedes Mal, wenn wir durch die Schleife gehen, malen wir einen ganz neuen Hintergrund, überdecken alles, was vorher da war, und zeichnen dann den Kreis an seiner neuen Stelle.

Jeder Durchlauf durch die Schleife ist wie eine neue Seite im Daumenkino.

Und das Wichtigste dabei: Wir bewegen den Kreis nicht. Der Kreis ist kein Objekt, das über den Bildschirm gleitet. Er ist nur eine Zeichnung. Bei jedem Durchlauf übermalen wir die alte Zeichnung und malen eine ganz neue, ein Stück weiter rechts. Dein Auge setzt alles zusammen und sieht eine Bewegung, aber in Wirklichkeit sind es einfach viele einzelne Zeichnungen, eine nach der anderen.

Mit dieser Idee kannst du einen Sonnenuntergang gestalten. Du lässt die Sonne wandern, änderst ihre Größe, änderst ihre Farbe. Es ist immer dieselbe Technik. Lege ein paar Variablen fest, male einen frischen Hintergrund und zeichne alles. Aktualisiere die Variablen und wiederhole das Ganze.
