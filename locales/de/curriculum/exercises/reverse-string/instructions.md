---
title: "String umdrehen"
description: "Dreh ein Stück Text um, sodass es rückwärts gelesen wird."
en_md5: 9d47faf87b2864284ed64ce1300073ea
---

Einen String umzudrehen (ihn also von rechts nach links zu lesen statt von links nach rechts) ist eine überraschend häufige Aufgabe in der Programmierung.

Zum Beispiel ist es in der Bioinformatik oft wichtig, die Sequenz von DNA- oder RNA-Strings umzudrehen, etwa für verschiedene Analysen, zum Beispiel um komplementäre Stränge zu finden oder palindromische Sequenzen zu erkennen.

Deine Aufgabe ist es, eine Funktion namens `reverse` (umdrehen) zu erstellen, die einen String als Eingabewert nimmt und die umgedrehte Version davon zurückgibt.

Beispiele:

- Verwandle „stressed“ in „desserts“
- Verwandle „strops“ in „sports“
- Verwandle „racecar“ in „racecar“ (ein Palindrom)

### Die letzten beiden Szenarien …

Die letzten beiden Szenarien sehen seltsam aus, oder? Was ist da los?

Es stellt sich heraus, dass viele Emojis eigentlich aus anderen Emojis bestehen, die mit versteckten (Zero-Width-)Leerzeichen zusammengefügt sind.

Das Familien-Emoji (👩‍👩‍👧‍👦) besteht aus zwei Frauen und zwei Kindern. Wenn man es umdreht, sieht man die einzelnen Zeichen (👦‍👧‍👩‍👩).

Das andere ist ein Regenbogen und eine Flagge (🌈‍️🏳). Wenn du die Reihenfolge umdrehst, sodass erst die Flagge und dann der Regenbogen kommt, wird daraus eine Regenbogenflagge (🏳️‍🌈️)!

Wenn du dein Ergebnis Zeichen für Zeichen aufbaust, sollte das einfach funktionieren. Wenn du stattdessen zu einem schlaueren Trick greifst, kann es passieren, dass die Emojis auseinanderfallen.
