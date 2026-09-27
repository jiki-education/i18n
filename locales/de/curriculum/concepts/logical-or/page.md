---
title: "Der `||`-Operator (Oder)"
description: "Zwei Bedingungen mit `||` kombinieren, sodass die ganze Bedingung wahr ist, wenn mindestens einer der Teile wahr ist."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

Wir können auch `or` verwenden, und auch hier gibt es in JavaScript leider kein schönes or-Schlüsselwort. Stattdessen müssen wir diese zwei Striche (_bars_ auf Englisch) nebeneinander setzen, um „oder" auszudrücken. Das sieht seltsam aus, ist es aber nicht. Du gewöhnst dich daran.

Wir können also sagen: Wenn jemand über 20 ist oder Disco-Klamotten trägt, dann darf er reinkommen. Dann haben wir eine lustige Party mit Kindern in Discoklamotten und schlecht angezogenen Erwachsenen. Das klingt doch vernünftig.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki begrüßt an der Tür zu einer Party eine Mischung aus Kindern in Discoklamotten und lässig gekleideten Erwachsenen"
  width="327"
  height="400"
/>

Es gibt eine Sache, die bei and und or viele zum Stolpern bringt: Jede Seite von and/or muss ein vollständiger Vergleich sein. Selbst wenn du auf beiden Seiten dieselbe Variable vergleichst, musst du sie wiederholen. Du kannst nicht `if age is less than 13 or greater than 20` schreiben. Du musst `if age is less than 13 or age is greater than 20` schreiben. Beide Seiten müssen vollständige Vergleiche sein.

```javascript
if (age < 13 || age > 20)
```

Du musst dir überlegen, wann es auf beide Bedingungen ankommt und wann nur eine von ihnen wahr sein muss.
