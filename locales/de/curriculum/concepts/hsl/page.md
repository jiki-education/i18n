---
title: "HSL-Farben"
description: "So baust du Farben aus Farbton (die Farbnuance, 0–360), Sättigung (wie kräftig, 0–100) und Helligkeit (wie hell, 0–100) auf."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL ist eine völlig andere Art, über Farben nachzudenken als RGB. HSL steht für Farbton (_hue (H)_ auf Englisch), Sättigung (_saturation (S)_ auf Englisch) und Helligkeit (_lightness (L)_ auf Englisch). Es gibt eine Funktion namens `hsl`, die drei Zahlen entgegennimmt, eine für den Farbton, eine für die Sättigung und eine für die Helligkeit, und die dir eine Farbe zurückgibt. Schauen wir uns also an, was diese drei Wörter bedeuten.

```javascript
hsl(hue, saturation, lightness)
```

Der Farbton ist die Farbnuance, die du haben möchtest, und er geht von null bis 360. Stell dir vielleicht einen Regenbogen vor. So stelle ich mir das vor. Links haben wir Rot, dann kommen Orange, Gelb, Grün, Blau, Violett, und tatsächlich landen wir am Ende wieder bei Rot. Wenn du also null sagst, startest du links, und das ist Rot. Wenn du `120` sagst, möchtest du Grün. `230` ist Blau. Du kannst dir das auch als Farbkreis vorstellen, und genau das ist die 360. Es ist die Anzahl der Grad im Kreis. Ich schaue die Zahlen, die ich möchte, auch immer nur nach. Mach dir also keine allzu großen Gedanken darüber, das auswendig zu lernen. Aber es ist schön zu wissen, was dahintersteckt. Das war also der Farbton, die Farbnuance. Als Nächstes kommt die Sättigung, sie sagt, wie kräftig die Farbe ist. Sie geht von null bis 100. Bei null bekommst du nur Grau. Da ist überhaupt keine Farbe und kein Ton drin. Bei 100 bekommst du volle, kräftige, leuchtende Farbe. Und dann gibt es noch die Helligkeit. Die Helligkeit sagt, wie hell die Farbe ist, und sie geht ebenfalls von null bis 100. Bei null bekommst du Schwarz. Egal, welchen Farbton du gewählt hast, du bekommst Schwarz. Da ist kein Licht drin. Und bei 100 bekommst du Weiß. Egal, was sonst noch ist, es ist einfach voller Licht, also Weiß. 50 liegt genau in der Mitte, die normale Farbe. Du kannst dir das also als Regler vorstellen, mit dem du die Farbe heller oder dunkler machst.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Ein Farbkreis und ein Regenbogen, die zeigen: 0 ist Rot, 120 ist Grün und 240 ist Blau"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Ein Sättigungsregler von 0 (Grau) über 50 bis 100 (volle, kräftige Farbe)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Ein Helligkeitsregler von 0 (Schwarz) über 50 bis 100 (Weiß)"
  width="500"
  height="398"
/>

Wenn wir also einen normalen roten Kreis wollen, den wir mit RGB als 255, null, null geschrieben hätten, alles Rot, kein Grün, kein Blau, dann würden wir hier null, 100, 50 verwenden. Null für den roten Farbton, 100 für die Sättigung, volle Farbe, und 50 für die Helligkeit, also eine normale Helligkeit. Wenn wir daraus einen grünen Kreis machen wollen, ändern wir einfach den Farbton auf `120`. Wenn wir daraus ein dunkleres Grün machen wollen, können wir die Helligkeit auf `25` reduzieren.

```javascript
hsl(0, 100, 50) // rot
hsl(120, 100, 50) // grün
hsl(120, 100, 25) // dunkelgrün
```

Wenn wir daraus ein stumpferes Grün machen wollen, können wir etwas Farbe herausnehmen, etwas Sättigung, sagen wir, wir drehen sie auf `30` herunter.

Wenn du ein leuchtendes, knalliges Pink möchtest: Ein Farbton von etwa 300 ist Pink. Dann drehen wir die Sättigung auf 100 hoch, damit es richtig kräftig wird, und erhöhen zusätzlich die Helligkeit auf etwa 60.

HSL ist großartig, wenn du durch Farben wechseln möchtest. Wenn du einen Regenbogen willst, musst du einfach den Farbton immer weiter erhöhen.
