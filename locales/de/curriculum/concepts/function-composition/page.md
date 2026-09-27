---
title: "Mehrere Funktionen zusammen verwenden"
description: "Ein Problem in kleine Funktionen mit einer einzigen Verantwortlichkeit aufteilen, die sich gegenseitig aufrufen, damit jeder Teil einfach und wiederverwendbar bleibt."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Bisher hat jede Funktion, die du geschrieben hast, so ziemlich auf eigenen Beinen gestanden und die ganze Logik enthalten, die sie zum Arbeiten braucht.

Jetzt schauen wir uns an, wie wir Funktionen aufteilen, sodass wir kleinere Funktionen haben, die zusammenarbeiten, statt großer Funktionen, in denen jede Menge los ist.

Als grobe Regel gilt beim Programmieren: Jede Funktion soll so wenig wie möglich tun. Man sagt dann, eine Funktion hat eine einzige Verantwortlichkeit (_single responsibility_ auf Englisch). Jede Funktion sollte nur eine Sache tun und für die verschiedenen Teile davon andere Funktionen verwenden.

Schauen wir uns also ein Beispiel an.

Stell dir vor, wir haben eine Funktion, deren Aufgabe es ist, einen String zurückzugeben, der einen Namen beschreibt.

Eine einfache Version sieht so aus. Wir haben eine Zählschleife, so etwas hast du schon geschrieben, und dann ein String-Template, das das Ergebnis zusammensetzt.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Das funktioniert, aber die Funktion macht zwei Dinge. Sie macht eine ziemlich allgemeine Sache, das Zählen, und eine sehr spezifische, nämlich den String in einem bestimmten Format aufzubauen.

Viel schöner wäre es, das auf zwei Funktionen aufzuteilen: eine, die fürs Zählen zuständig ist, und eine, die einen Namen in diesem bestimmten Format beschreibt.

```javascript
// Zählt nur Buchstaben
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Formatiert den Text nur schön
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Und diese allgemeine Zählfunktion können wir dann für diese String-Formatierung wiederverwenden, aber auch überall sonst, wo wir sie brauchen. Immer wenn wir Buchstaben in einem String zählen müssen, ist sie völlig losgelöst von allem, was mit der Ausgabe zu tun hat.

Du kannst beide Funktionen einzeln lesen und sofort verstehen, was jede von ihnen tut.

Je komplexer deine Funktionen werden und je mehr du davon hast, desto mehr entscheidet diese Technik darüber, ob du übersichtlichen, lesbaren Code hast oder nur völlige Verwirrung und Chaos.

Eine Sache ist es wert, hier noch einmal erwähnt zu werden: Alles, was du innerhalb einer Funktion erstellst, können andere Funktionen nicht erreichen, es sei denn, du gibst es bewusst zurück.

Wenn du also versuchst, aus `describeName` (Namen beschreiben) heraus auf die Variable `count` (zählen) zuzugreifen, geht das nicht, weil sie zur anderen Funktion gehört.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki denkt nach, mit einer Glühbirne über dem Kopf, darüber, wie Variablen für jede Funktion privat bleiben"
  width="361"
  height="353"
/>

In JavaScript können wir ganz oben über allem Variablen anlegen, die zwischen Funktionen geteilt werden, aber ich empfehle dir wirklich, das nicht zu tun, es sei denn, es gibt einen richtig guten Grund.

Je mehr du jede Funktion eigenständig hältst, und das Fachwort dafür ist rein (_pure_ auf Englisch), reine Funktionen, desto sauberer wird dein Code und desto weniger Bugs wirst du erzeugen und haben.
