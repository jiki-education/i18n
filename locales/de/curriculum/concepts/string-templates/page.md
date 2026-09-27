---
title: "String-Templates"
description: "Mit Backticks und Platzhaltern wie `${...}` Werte direkt in einen String einsetzen, statt Teile mit `+` zusammenzufügen."
en_md5: 7fd0e09ac3b32db5f159f8e772872104
---

Wir können etwas namens String-Templates verwenden, um Strings in andere Strings einzufügen.

Statt Strings zusammenzusetzen, können wir also einen String oder ein Template haben, in dem Platz für andere Strings ist.

Dazu verwenden wir Backticks statt Anführungszeichen.

Backticks sind, wie der Name schon sagt, nach hinten geneigte Striche. Vielleicht hast du sie aber noch nie benutzt, deshalb musst du die richtige Taste auf deiner Tastatur erst finden.

Wir benutzen sie, um ein Template zu erstellen, das andere Strings enthalten kann. Und um dann einen String in das Template einzusetzen, benutzen wir eine weitere seltsame Syntax aus Dollarzeichen und geschweiften Klammern. Um zum Beispiel dasselbe zu erreichen wie mit `"hello " + name`, was wir eben bei der Verkettung gesehen haben, könnten wir schreiben:

```javascript
`hello ${name}` // "hello Jeremy" or "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki hält eine Box mit der Aufschrift name, den Wert, der in das Template eingesetzt wird"
  width="207"
  height="400"
/>

Und damit erreichst du genau dasselbe wie beim Zusammensetzen der Strings.

Aber wenn mehrere Strings an einer Stelle zusammenkommen müssen, kann das viel effizienter sein.

Es dauert ein bisschen, bis du dich an genau diese Syntax gewöhnt hast, aber daran ist wirklich nichts Kompliziertes.
