---
title: "String-Verkettung"
description: "Strings mit `+` zusammenfügen, um festen Text und Variablen zu einem längeren String zusammenzukleben."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Du weißt schon, was Strings sind. Es sind Zettel mit Text darauf.

Bisher hast du jeden String direkt hingeschrieben. Was aber, wenn du einen String aus Variablen oder Bedingungen zusammenbauen willst? Wie machen wir das?

Es gibt zwei Wege.

Der erste heißt String-Verkettung (_string concatenation_ auf Englisch), was eine vornehme und etwas verwirrende Art ist, zwei Strings zusammenzufügen.

Stell dir vor, du hast zwei Wörter, `"hello"` und `"world"` (Welt), und du willst einen String erzeugen, der `"hello world"` enthält.

Du könntest `"hello world"` einfach als einen String hinschreiben, aber du könntest auch `"hello " + "world"` schreiben, und das würde denselben String ergeben.

Offensichtlich ist das in diesem Fall nicht besonders nützlich. Aber was, wenn wir eine Variable mit dem Namen von jemandem hätten und dieser Person Hallo sagen wollten?

Stellen wir uns also vor, wir haben eine Variable namens `name`, und sie enthält manchmal `"Jeremy"` (der Name Jeremy) und manchmal `"Jiki"` (der Name Jiki). Wir wollen mit dieser Variable `"hello Jeremy"` oder `"hello Jiki"` sagen.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki hält eine Box mit der Aufschrift name, die verschiedene Werte enthalten kann"
  width="207"
  height="400"
/>

Das erreichen wir mit diesem Konzept der Verkettung:

```javascript
"hello " + name // "hello Jeremy" oder "hello Jiki"
```

Das gibt uns entweder `"hello Jeremy"` oder `"hello Jiki"` oder hallo an jede andere Person, je nachdem, was in der `name`-Box steckt.
