---
title: "Eigenschaften"
description: "Statische Fakten über einen Wert, auf die du mit der Punktnotation und ohne Klammern zugreifst, zum Beispiel `.length`, um herauszufinden, wie viele Buchstaben ein String hat."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Bisher haben wir Strings oder Zahlen immer für ziemlich statische Dinge gehalten.

Und das sind sie auch, aber in ihnen steckt noch jede Menge Funktionalität, die Jiki nutzen kann.

Wir schauen uns zwei Arten von Fähigkeiten an: Eigenschaften und Methoden.

Eigenschaften sind Fakten, die uns Jiki über Dinge sagen kann. Strings haben zum Beispiel eine Eigenschaft namens `length` (Länge), mit der Jiki uns sagen kann, wie lang ein String ist.

Statt also alle Buchstaben in einer Schleife zu durchlaufen, um herauszufinden, wie groß ein String ist, können wir Jiki einfach fragen.

Und dafür benutzen wir eine neue Art von Syntax: einen Punkt.

Wenn wir zum Beispiel den String `"Jeremy"` haben und seine Länge wissen wollen, schreiben wir:

```javascript
"Jeremy".length // 6
```

Wenn Jiki einen String erstellt, zählt er die Buchstaben und schreibt die Anzahl sozusagen einfach in die Ecke.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki zählt die Buchstaben des Strings Jeremy und schreibt die Zahl in die Ecke"
  width="359"
  height="400"
/>

Und wenn wir dann die Eigenschaft `length` benutzen, geht Jiki nachschauen, was diese Zahl war. In unserem Beispiel `"Jeremy".length` zählt Jiki beim Erstellen des Strings `"Jeremy"` die Buchstaben, schreibt eine Sechs in die Ecke, und wenn wir dann `"Jeremy".length` schreiben, geht er nachschauen. Eigenschaften kannst du dir also wie Fakten über dieses Ding vorstellen.
