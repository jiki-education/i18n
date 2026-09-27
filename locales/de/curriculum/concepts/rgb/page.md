---
title: "RGB-Farben"
description: "Rotes, grünes und blaues Licht von 0 bis 255 mischen und so jede Farbe auf dem Bildschirm erzeugen, die du willst."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

Mit RGB können wir uns Farben als eine Mischung aus Rot, Grün und Blau vorstellen. Dafür steht RGB: Rot (_red (R)_ auf Englisch), Grün (_green (G)_ auf Englisch) und Blau (_blue (B)_ auf Englisch). Wenn du dich daran erinnerst, wie du in der Schule Farben gemischt hast: Die Idee ist ähnlich, nur mischen wir statt Farbe Licht.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Drei überlappende Kreise aus rotem, grünem und blauem Licht, die sich zu Gelb, Magenta, Cyan und Weiß mischen"
  width="500"
  height="390"
/>

In vielen Übungen gibt es eine Funktion namens `rgb(red, green, blue)`. Sie nimmt drei Zahlen als Eingabewerte entgegen, eine für Rot, eine für Grün und eine für Blau, und gibt eine Farbe zurück.

Die Zahlen, die du als Eingabewerte verwenden kannst, reichen von null bis `255`. Null bedeutet: Ich will nichts von dieser Farbe. Und `255` bedeutet: Mische so viel von dieser Farbe dazu wie möglich. Wenn wir die Funktion `rgb` also mit `255`, null und null als Eingabewerte aufrufen, sagen wir damit: Ich will das ganze Rot. Denk daran, dass `255` die größte Zahl ist, die du dort hineingeben kannst. Grün und Blau wollen wir aber nicht, also sind beide null. Wir bekommen also Rot heraus, und dieses Rot können wir in einer Variablen speichern und dann in der Funktion `circle` verwenden, genau wie wir es mit den benannten Strings schon gemacht haben. Und was, wenn wir die Funktion `rgb` mit null, `255` und null aufrufen? Jetzt sagen wir: kein Rot, das ganze Grün, kein Blau. So bekommen wir einen grünen Kreis. Was ist, wenn wir Gelb wollen? Gelb ist eine Mischung aus Rot und Grün. Dann können wir sagen: Gib mir das ganze Rot, das ganze Grün und kein Blau. Das ergibt Gelb. Wir können auch kleinere Zahlen verwenden. Wenn wir etwas Rot, kein Grün und viel Blau wollen, bekommen wir Lila. Und viel Rot, ein wenig Grün und etwas mehr Blau ergibt Rosa. Das ist also RGB. Wir mischen Rot, Grün und Blau und bekommen so verschiedene Kombinationen.

```javascript
rgb(255, 0, 0) // rot
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Ein roter Kreis, erzeugt von rgb(255, 0, 0): alles Rot, kein Grün und kein Blau"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // gelb
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Ein gelber Kreis, erzeugt von rgb(255, 255, 0): alles Rot und alles Grün, kein Blau"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // rosa
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Ein rosa Kreis, erzeugt von rgb(230, 50, 170): viel Rot, ein wenig Grün und etwas Blau"
  width="436"
  height="400"
/>

RGB ist großartig, wenn du eine einzelne Komponente anpassen willst: wie viel Rot, wie viel Grün, wie viel Blau.
