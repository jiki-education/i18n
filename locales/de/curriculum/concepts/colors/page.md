---
title: "Farben"
description: "Zwei Arten, jede Farbe anzugeben, die du willst. RGB mischt rotes, grünes und blaues Licht. HSL arbeitet mit Farbton, Sättigung und Helligkeit."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Wenn du jemals etwas Visuelles mit Code machst (und selbst wenn du Data Scientist werden willst und den ganzen Zeichenkram ein bisschen langweilig findest: Daten über Bilder zu vermitteln ist eine wichtige Fähigkeit), dann gibt es zwei verschiedene Arten, Farben auszudrücken. Du hast Farben bisher schon mit ihren Namen wie red oder yellow als letzten Eingabewert in deinen Zeichenfunktionen benutzt, und das war eine schöne Möglichkeit, schnell Farben zu verwenden, aber es ist ziemlich einschränkend. Es gibt nur eine Handvoll benannter Farben, die wir verwenden können. Jetzt schauen wir uns also zwei Arten an, jede Farbe auszudrücken, die du willst, und diese beiden heißen RGB und HSL.

Mit RGB können wir uns Farben als eine Mischung aus Rot, Grün und Blau vorstellen. Dafür steht RGB: Rot (_red (R)_ auf Englisch), Grün (_green (G)_ auf Englisch), Blau (_blue (B)_ auf Englisch). Wenn du dich daran erinnerst, wie du in der Schule Farben gemischt hast, ist es eine ähnliche Idee, nur dass wir statt Farbe Licht mischen.

In vielen Übungen gibt es eine Funktion namens `rgb`. Sie nimmt drei Zahlen als Eingabewerte, eine für Rot, eine für Grün, eine für Blau, und gibt eine Farbe zurück.

Die Zahlen, die du als Eingabewerte benutzen kannst, gehen von null bis `255`. Null bedeutet, ich will nichts von dieser Farbe, und `255` bedeutet, misch so viel von dieser Farbe wie möglich hinein. Wenn wir die `rgb`-Funktion also mit `255`, null und null als Eingabewerte aufrufen, sagen wir damit: Ich will das ganze Rot. Denk daran, dass `255` die größte Zahl ist, die du dort hineinschreiben kannst. Aber wir wollen kein Grün und kein Blau, also sind die beiden null. Wir bekommen also Rot heraus, und wir können dieses Rot in einer Variable speichern und dann in der `circle`-Funktion verwenden, genau wie wir es bisher mit den benannten Strings gemacht haben. Was ist, wenn wir die `rgb`-Funktion mit null, `255`, null aufrufen? Dann sagen wir: kein Rot, das ganze Grün, kein Blau. So bekommen wir einen grünen Kreis. Und wenn wir Gelb wollen? Gelb ist eine Mischung aus Rot und Grün. Wir können also sagen: Gib mir das ganze Rot, das ganze Grün und kein Blau, und das ergibt Gelb. Wir können auch kleinere Zahlen verwenden. Wenn wir also etwas Rot, kein Grün und viel Blau wollen, bekommen wir Lila. Und viel Rot, ein wenig Grün, etwas mehr Blau, das ergibt ein Rosa. Das war also RGB. Wir mischen Rot, Grün und Blau, um verschiedene Kombinationen zu bekommen.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Drei sich überlappende Kreise aus rotem, grünem und blauem Licht, die sich zu Gelb, Magenta, Cyan und Weiß mischen"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Jetzt schauen wir uns HSL an, das uns eine völlig andere Art gibt, über Farben nachzudenken. HSL steht für Farbton (_hue (H)_ auf Englisch), Sättigung (_saturation (S)_ auf Englisch) und Helligkeit (_lightness (L)_ auf Englisch). Und ähnlich wie bei RGB gibt es eine Funktion namens `hsl`, die drei Zahlen nimmt, eine für den Farbton, eine für die Sättigung und eine für die Helligkeit, und eine Farbe zurückgibt. Schauen wir uns also an, was diese drei Wörter bedeuten.

Der Farbton ist die Nuance (_shade_ auf Englisch) der Farbe, die du willst, und er geht von null bis 360. Stell dir vielleicht einen Regenbogen vor. So stelle ich mir das vor. Links haben wir Rot, dann Orange, Gelb, Grün, Blau, Lila, und tatsächlich geht es dann wieder bis zurück zu Rot. Wenn du null sagst, fängst du links an, und das ist Rot. Wenn du `120` sagst, willst du Grün. `230` ist Blau. Du kannst dir das auch als Farbkreis (_color wheel_ auf Englisch) vorstellen, und genau das ist die 360 eigentlich. Es ist die Anzahl der Grad im Kreis. Ich schaue die Zahlen, die ich will, auch immer einfach nach, mach dir also nicht zu viele Gedanken darum, dir das auswendig zu merken, aber es ist schön zu wissen, was dahintersteckt. Das war also der Farbton, also die Nuance. Als Nächstes haben wir die Sättigung, die angibt, wie lebendig die Farbe ist. Sie geht von null bis 100. Bei null bekommst du einfach Grau. Da ist überhaupt keine Farbe und kein Ton drin. Bei 100 bekommst du volle, lebendige, kräftige Farbe. Und dann haben wir die Helligkeit. Die Helligkeit sagt, wie hell die Farbe ist, und sie geht ebenfalls von null bis 100. Bei null bekommst du Schwarz. Egal, welchen Farbton du gewählt hast, du bekommst Schwarz. Da ist kein Licht drin. Und bei 100 bekommst du Weiß. Egal was sonst noch ist, es ist einfach voller Licht, also ist es Weiß. 50 liegt genau in der Mitte, das ist die normale Farbe. Du kannst dir das also als Schieberegler (_slider_ auf Englisch) vorstellen, mit dem du die Farbe heller oder dunkler machst.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Ein Regenbogen und ein Farbkreis, die den Farbton von 0 (Rot) über 120 (Grün) bis 240 (Blau) zeigen"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Sättigungsschieberegler von 0 (Grau) über 50 bis 100 (kräftiges Magenta)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Helligkeitsschieberegler von 0 (Schwarz) über 50 (volle Farbe) bis 100 (Weiß)"
  width="500"
  height="398"
/>

Wenn wir also einen normalen roten Kreis wollen, den wir mit RGB als 255, null, null geschrieben hätten, also das ganze Rot, kein Grün, kein Blau, dann verwenden wir hier null, 100, 50. Null für den roten Farbton, 100 für die Sättigung, also volle Farbe, und 50 für die Helligkeit, was einem normalen Helligkeitsniveau entspricht. Wenn wir daraus einen grünen Kreis machen wollen, können wir einfach den Farbton auf `120` ändern. Wenn wir ihn zu einem dunkleren Grün machen wollen, können wir die Helligkeit auf `25` senken.

Wenn wir daraus ein fahleres Grün machen wollen, können wir etwas von der Farbe, etwas von der Sättigung herausnehmen, sagen wir, sie auf `30` senken.

Wenn du ein leuchtendes, knalliges Pink willst: Ein Farbton von etwa 300 ist Pink, dann drehen wir die Sättigung auf 100 hoch, damit es richtig lebendig wird, und wir erhöhen auch die Helligkeit auf etwa 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Wir haben also zwei verschiedene Arten, Farbe auszudrücken, und sie sind in unterschiedlichen Situationen nützlich. RGB ist super, wenn du eine bestimmte Komponente anpassen willst, also wie viel Rot, wie viel Grün, wie viel Blau. HSL ist super, wenn du durch die Farben wandern willst. Wenn du einen Regenbogen willst, kannst du einfach den Farbton immer weiter erhöhen.
