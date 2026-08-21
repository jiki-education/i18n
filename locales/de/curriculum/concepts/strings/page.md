---
title: "Strings kennenlernen"
description: "Textstücke in Anführungszeichen (ein Buchstabe, ein Wort, ein Satz oder ein ganzer Absatz), die Jiki auf Papier schreibt."
en_md5: 4947f6ac1b3eb8eb85d2dea9b82ffc40
---

Wenn du eine Zahl verwenden willst, kannst du sie einfach hinschreiben, und Jiki weiß, was du meinst. Aber was, wenn du einen Buchstaben, ein Wort oder einen Satz verwenden willst? Was wäre zum Beispiel, wenn die Funktion `rectangle` (Rechteck) oder die Funktion `circle` (Kreis) einen zusätzlichen Eingabewert hätte, mit dem du die Farbe festlegst? Wie würden wir die Farbe aufschreiben, um sie in die Maschine zu stecken? Wenn wir einfach das Wort `green` (grün) oder `blue` (blau) hinschreiben, denkt Jiki, wir meinen eine Maschine in den Regalen, und er sagt: „Es gibt keine Maschine namens green. Ich weiß nicht, was ich tun soll.“

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="Jiki steht verwirrt neben der rectangle-Maschine, mit Fragezeichen über dem Kopf"
  width="446"
  height="400"
/>

Deshalb haben wir eine Regel: Immer wenn wir Text verwenden wollen, setzen wir ihn in Anführungszeichen, und zwar in doppelte Anführungszeichen. Und wenn du etwas so in Anführungszeichen setzt, holt Jiki einen Zettel heraus und schreibt darauf, was auch immer du zwischen die Anführungszeichen geschrieben hast. Diese Zettel nennen wir _Strings_ (Zeichenketten).

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="Jiki schreibt das Wort green auf einen Zettel, der zu einem String wird"
  width="398"
  height="400"
/>

Strings können einzelne Buchstaben sein, Wörter, Sätze, Absätze, sogar ganze Bücher. Die Regel lautet: Wenn es Text ist, setzen wir ihn in Anführungszeichen, und er wird zu einem String.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="Eine Tafel mit Strings unterschiedlicher Länge in Anführungszeichen: ein einzelner Buchstabe, ein Wort, ein Satz und eine mehrzeilige Adresse"
  width="500"
  height="398"
/>

Wenn wir also ein blaues Rechteck haben wollen, schreiben wir die Zahl für seine linke Position, seine obere Position, seine Breite und seine Höhe. Für den fünften Eingabewert schreiben wir aber `"blue"` in Anführungszeichen.

```javascript
rectangle(10, 20, 30, 40, "blue")
```

Jiki holt die Maschine vom Regal und wirft ein paar Münzen in die ersten vier Trichter. Dann schreibt er blue auf einen Zettel, wirft den Zettel in den fünften Trichter und lässt die Maschine laufen.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="Jiki wirft den Zettel mit blue in den fünften Trichter der rectangle-Maschine, mit den Münzen 10, 20, 30, 40 in den ersten vier Trichtern"
  width="500"
  height="392"
/>

„String“ ist eines dieser Fachwörter, die am Anfang etwas einschüchternd wirken. Dabei bedeutet es einfach nur Text. Du gewöhnst dich sehr schnell daran, da ist nichts Magisches dran.
