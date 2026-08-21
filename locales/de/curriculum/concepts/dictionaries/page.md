---
title: "Wörterbücher"
description: "Eine Seite aus einem Spiralblock, auf der jeder Eintrag links einen Schlüssel und rechts seinen Wert hat. So bekommst du beschriftete Daten statt einer Liste."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Arrays sind unsere erste Wahl, wenn wir eine Liste von irgendetwas haben: eine Liste von Mentoren, eine Liste von Punktzahlen, eine Liste von Zutaten. Für jede Liste willst du ein Array benutzen.

Aber es gibt noch eine andere Datenstruktur (_data structure_ auf Englisch), die ebenfalls sehr verbreitet ist, wenn du etwas brauchst, das ein bisschen komplexer ist als eine Liste.

Stell dir vor, wir wollen ein paar Informationen über mich speichern: meinen Namen, mein Alter, meinen Geburtsort. Du könntest dafür ein Array benutzen, aber dann ist nicht wirklich klar, was da eigentlich vor sich geht.

Ist England mein Geburtsort oder mein Wohnort? Ist 42 mein Alter oder etwas anderes?

Und wenn ich das benutzen will, muss ich mir merken, dass die erste Position für den Namen steht, die zweite für das Alter und die dritte für den Geburtsort. Das ist alles ein bisschen unübersichtlich. Und es ist unübersichtlich, weil das hier eigentlich keine Liste von Dingen ist. Es ist komplexer als das. Und genau da kommen Wörterbücher (_dictionaries_ auf Englisch) ins Spiel. Ein Wörterbuch ist eine neue Art von Datenstruktur. Es ist deine fünfte: Du kennst schon Strings, Zahlen, boolesche Werte, Arrays, und jetzt kommen Wörterbücher dazu.

Ich möchte, dass du dir ein Wörterbuch wie eine Seite aus einem Spiralblock vorstellst.

Auf der linken Seite stehen die Überschriften, die Wörter `"name"`, `"age"`, `"birthplace"`, und die nennen wir Schlüssel (_keys_ auf Englisch).

Und auf der rechten Seite, neben jeder Überschrift, stehen die eigentlichen Daten, `"Jeremy"`, `42`, `"England"`, und die nennen wir Werte (_values_ auf Englisch).

Genau wie ein Array ist ein Wörterbuch ein einziges Ding. Es ist eine Seite aus einem Notizblock. Und genau wie ein Array kann Jiki es in eine Variable stecken, in eine Box, oder als Eingabewert für eine Funktion benutzen, oder er kann ein Wörterbuch aus der Ausgaberutsche holen. So sieht ein Wörterbuch im Code aus: Wir benutzen geschweifte Klammern, um Anfang und Ende zu markieren, und innen drin stehen Paare, links ein Schlüssel, dann ein Doppelpunkt und rechts der Wert. Zwischen den Paaren steht jeweils ein Komma. Jiki sieht das also und holt seinen Spiralblock heraus. Er schreibt `name`, `"Jeremy"`, `age`, `42` und so weiter für jedes Paar auf.

Und wenn er fertig ist, reißt er die Seite ab und legt sie in eine Box mit der Aufschrift `person` (Person).

Ein paar Regeln solltest du kennen. Schlüssel sind immer Strings. Sie müssen in Anführungszeichen stehen, und jeder Schlüssel muss einzigartig sein. Du kannst nicht zwei Schlüssel namens `name` im selben Wörterbuch haben.

Die Werte dürfen gleich sein, wenn du willst, aber die Schlüssel müssen sich unterscheiden.

Und die Werte können alles Mögliche sein: Strings, Zahlen, boolesche Werte, Arrays oder sogar andere Wörterbücher.

Du kannst auch ein leeres Wörterbuch haben, genau wie wir ein leeres Array hatten. Damit können wir anfangen und später darauf aufbauen.

Jetzt hast du also ein Wörterbuch, aber wie bekommst du etwas wieder heraus?

Wir benutzen dieselbe Syntax mit eckigen Klammern wie bei Arrays und Strings, aber statt einer Positionsnummer setzen wir einen Schlüssel ein. Wenn wir also den Namen einer Person aus einem Wörterbuch holen wollen, schreiben wir:

```javascript
person["name"] // "Jeremy"
```

Das sagt Jiki, dass er im Wörterbuch `person` nachsehen, den Schlüssel `"name"` finden und dessen Wert herausholen soll. Jiki geht zur Box `person`, nimmt die Seite aus dem Notizblock heraus, geht alle Schlüssel durch, bis er `"name"` findet, liest dann den Wert ab, `"Jeremy"`, und legt ihn in eine neue Box namens `name`.

Eckige Klammern bedeuten immer dasselbe: Du greifst in etwas hinein und holst etwas heraus. Bei Arrays und Strings benutzt du eine Zahl, um zu sagen, von welcher Position du etwas holen willst. Bei Wörterbüchern benutzt du einen String als Schlüssel.

Es ist dieselbe Idee, nur mit leicht anderer Syntax.
