---
title: "Der `!`-Operator (Nicht)"
description: "Mit `!` drehst du einen booleschen Wert um: aus wahr wird falsch und aus falsch wird wahr. Nützlich, um Prüfungen umzuschalten oder umzukehren."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Bisher haben wir drei Gleichheitszeichen benutzt, wenn wir Dinge verglichen haben, um zu sehen, ob sie gleich sind. Manchmal wollen wir aber prüfen, ob Dinge nicht gleich sind, und dafür schreiben wir ein Ausrufezeichen, gefolgt von zwei Gleichheitszeichen. Und allgemein bedeutet in der Programmierung ein Ausrufezeichen, oder _Bang_, wie unsere amerikanischen Freunde es wohl nennen, „nicht“. Stell dir also vor, du arbeitest in einem Laden, und die Geschäftsleitung hat beschlossen, dass keine Disco-Outfits erlaubt sind.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Ein Türsteher an der Tür eines Ladens, der die Outfits einer Schlange wartender Leute prüft"
  width="451"
  height="400"
/>

Wir können also sagen: „Wenn das Outfit nicht disco ist, öffne die Tür.“ Die if-Anweisung funktioniert genau gleich.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Es ist nur so, dass die Bedingung wahr zurückgibt, wenn die Dinge unterschiedlich sind, und falsch, wenn sie gleich sind. Wir könnten dasselbe also auch so schreiben: „Wenn das Outfit disco ist, mach nichts. Sonst öffne die Tür.“ Aber meistens ist es einfacher und sauberer, den `not`-Operator zu benutzen, um wirklich zu wissen und zu sagen, was du meinst.

Noch eine Sache dazu. Manchmal hast du eine Variable, die wahr ist, und du willst sie auf falsch umdrehen, oder du hast etwas, das falsch ist, und du willst es auf wahr umdrehen. Damit können wir etwas im Auge behalten. Stell dir also vor, wir haben etwas, das von links nach rechts springt, und wir haben eine Variable namens `movingRight` (bewegt sich nach rechts), die wahr ist, wenn du dich nach rechts bewegen sollst. Aber wenn du sie auf falsch umschalten (_toggle_ auf Englisch) willst, wenn du den rechten Rand erreichst.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Ein Spielfeld im Pong-Stil mit Schlägern und einem Ball, der von einer Seite zur anderen springt und das Umschalten der Variable movingRight zeigt"
  width="500"
  height="352"
/>

Wir könnten das also so machen: „Wenn `movingRight` gleich wahr ist, setze `movingRight` auf falsch. Sonst setze `movingRight` auf wahr.“ Das ist eine Möglichkeit, die Variable umzuschalten. Jiki schaut sich `movingRight` an, um zu sehen, ob sie wahr oder falsch ist. Dann ermittelt er das Gegenteil und legt diesen Wert zurück in die Box.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Aber es gibt einen schlaueren Weg: dasselbe Ausrufezeichen oder _Bang_:

```javascript
movingRight = !movingRight
```

Und das dreht sie um. `!movingRight` bedeutet das Gegenteil von dem, was sie vorher war.

Wenn `movingRight` also wahr war, ist sie jetzt falsch. War sie falsch, ist sie jetzt wahr. Jiki holt sich, was gerade in der Box ist, und das _Bang_ sagt ihm, dass er das Gegenteil nehmen soll. Das Gegenteil von wahr ist also falsch. Das Gegenteil von falsch ist wahr, und dann legt er den Wert zurück in die Box. Das ist genau dasselbe wie bei der längeren if/else-Anweisung, nur viel ordentlicher und prägnanter geschrieben.
