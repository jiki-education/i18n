---
title: "Pausenbox"
description: "Pack so viele Dinge wie möglich in eine Pausenbox mit begrenztem Fassungsvermögen."
en_md5: 0b9c26e60261ec4da42ae367a9102359
---

Als Kind packte ich jeden Tag für die Schule meine Pausenbox. Meine Mutter legte mir die Dinge bereit (ordentlich vom größten zum kleinsten sortiert), und ich versuchte, so viel wie möglich in die Pausenbox zu packen. Aber natürlich passte nur begrenzt viel hinein. Was nicht hineinpasste, musste ich in meinen Rucksack packen und den ganzen Tag mit mir herumtragen, statt es im Schließfach zu lassen.

In dieser Übung geht es darum, einen Algorithmus zu schreiben, der herausfindet, was in die Pausenbox passt und was in meinen Rucksack muss.

Deine Aufgabe ist es, eine Funktion namens `packLunch(items, capacity)` (Pausenbox einpacken) zu schreiben. Sie bekommt zwei Eingabewerte: das Array der Dinge (größtes zuerst) und die Größe der Pausenbox `capacity` (Fassungsvermögen), also eine Zahl.

Das Array der Dinge ist ein verschachteltes Array: Jedes Ding ist selbst ein Array mit zwei Elementen, dem Namen des Dings und seiner Größe. Die Dinge sind immer vom größten zum kleinsten sortiert. Das Array der Dinge könnte zum Beispiel so aussehen:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Die Pausenbox hat ein maximales Fassungsvermögen. Du musst herausfinden, welche Dinge in die Pausenbox passen. Pack so viele Dinge hinein wie nur möglich. Alles andere kommt in den Rucksack.

Deine Funktion soll ein Array mit zwei Elementen zurückgeben. Das erste Element ist ein Array mit den Dingen für die Pausenbox, das zweite enthält die Dinge für den Rucksack. Beide Arrays sollen vom kleinsten zum größten sortiert sein.

Für das Array oben mit einem Fassungsvermögen von 20 soll deine Funktion zum Beispiel das hier zurückgeben:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Hilfreiche Methoden

Wie bei allen Übungen in diesem Abschnitt baust du deine Arrays am besten mit der Methode `.push(element)` auf.

Außerdem gibt es eine neue Methode namens `[...].toReversed()`. Sie erstellt eine Kopie eines Arrays, in der alle Elemente umgekehrt angeordnet sind. Zum Beispiel:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Du musst sie nicht verwenden, aber sie könnte nützlich sein.

Viel Spaß!
