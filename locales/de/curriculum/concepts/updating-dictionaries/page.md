---
title: "Wörterbücher aktualisieren"
description: "Mit `dict[key] = value` vorhandene Einträge aktualisieren oder neue hinzufügen, dazu die `has`-Methode zum Prüfen von Schlüsseln."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Du weißt, wie du ein Wörterbuch erstellst und Werte daraus herausbekommst. Aber was passiert, wenn sich die Daten ändern? Irgendwann werde ich älter. Dann bin ich nicht mehr `42`, sondern `43`.

Wie aktualisieren wir das Wörterbuch? Nun, wir gehen fast genauso vor wie beim Suchen. Du weißt, dass wir etwas mit eckigen Klammern finden, um den Wert herauszuholen. Genauso können wir eckige Klammern zusammen mit einem Gleichheitszeichen verwenden, um das Wörterbuch zu aktualisieren. Jiki geht zur Box von person, holt die Notizbuchseite heraus, findet den Schlüssel `"age"`, radiert die `42` aus, die dort stand, schreibt `43` an ihre Stelle, und dann wandert die Seite aus dem Notizbuch zurück in die Box. Das verändert das Wörterbuch selbst.

```javascript
person["age"] = 43
```

Jiki erstellt kein neues Wörterbuch, sondern verändert das Notizbuch, das schon in der Box lag.

Und wenn du eine Information hinzufügen willst, die vorher nicht da war? Nun, du machst genau dasselbe.

Wenn du einen Schlüssel angibst, den es nicht gibt, fügt Jiki unten einfach einen neuen Schlüssel mit diesem Wert hinzu.

In diesem Fall öffnet er also das Notizbuch, sucht nach `"country"`, sieht, dass es nicht da ist, und schreibt unten eine neue Zeile hin: links `"country"`, rechts `"England"`.

```javascript
person["country"] = "England"
```

Also genau dieselbe Syntax wie beim Ändern eines Werts. Jiki kümmert sich automatisch um beides. Wenn der Schlüssel existiert, aktualisiert er ihn. Wenn nicht, fügt er ihn hinzu. Du musst nichts Besonderes tun.

Und so wie du mit einem leeren Array starten und Dinge hineinschieben kannst, kannst du mit einem leeren Wörterbuch starten und Schlüssel einen nach dem anderen hinzufügen. Auch das ist ein sehr verbreitetes Muster. Du wirst es ständig sehen.

Wörterbücher benutzt man häufig, um Dinge zu zählen. Du kannst als Schlüssel die Dinge angeben, die wir zählen wollen, und als Werte ihre Anzahl. Stell dir also vor, du beobachtest Vögel und willst festhalten, wie viele du von jeder Vogelart gesehen hast. Jedes Mal, wenn du einen Vogel siehst, setzt du seinen Zähler auf eins. Und jedes weitere Mal, wenn du ihn siehst, holst du seinen aktuellen Wert und erhöhst ihn um eins. Damit dieses Muster funktioniert, brauchen wir eine Möglichkeit zu prüfen, ob das Wörterbuch diesen Schlüssel schon hat. Wenn ja, addieren wir eins dazu; wenn nicht, starten wir bei eins.

Und dafür haben Wörterbücher eine Methode: die `has`-Methode (hat).

Du gibst einen Schlüssel an, der dich interessiert, und Jiki prüft, ob das Wörterbuch diesen Schlüssel hat oder nicht, und gibt dann entsprechend wahr oder falsch zurück.

```javascript
person.has("age") // true
```

Wenn wir das zusammenfügen, sieht das Zählmuster so aus:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
