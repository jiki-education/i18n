---
title: "Lauflängenkodierung"
description: "Text komprimieren und dekomprimieren, indem du Folgen gleicher Zeichen zählst."
en_md5: a176be7e6ed782e9aa4b54a4575f751f
---

Lauflängenkodierung (_Run-length encoding_ auf Englisch) ist eine einfache Form der Komprimierung. Du ersetzt jede Folge gleicher Zeichen durch eine Zahl, auf die das einzelne Zeichen folgt. Zeichen, die nur einmal vorkommen, bleiben unverändert und bekommen keine Zahl davor.

Zum Beispiel wird `"AABBBCCCC"` zu `"2A3B4C"`, und `"XYZ"` (keine Wiederholungen) wird einfach zu `"XYZ"`.

Leerzeichen zählen wie jedes andere Zeichen mit, deshalb wird `"  hsqq qww  "` zu `"2 hs2q q2w2 "` kodiert.

### Zwei Funktionen

Schreibe zwei Funktionen:

- `encode` (kodieren) nimmt einen String entgegen und gibt seine lauflängenkodierte Form zurück.
- `decode` (dekodieren) nimmt einen kodierten String entgegen und gibt den ursprünglichen Text zurück.

Das Dekodieren kehrt den Vorgang um: Eine Zahl sagt dir, wie oft du das Zeichen wiederholen musst, das danach kommt. Denk daran, dass eine Folge länger als 9 sein kann. Eine Zahl kann also mehr als eine Ziffer haben (zum Beispiel steht `"12W"` für zwölf `W`).

### Das Gelernte in die Praxis umsetzen

Auch wenn es viele Wege gibt, diese Übung zu lösen, möchten wir, dass deine Lösung die Art von `for`-Schleife verwendet, die du im letzten Video gelernt hast. Schau unten bei den Konzepten nach, wenn du die Syntax noch einmal nachschauen möchtest, denn sie ist ziemlich hässlich!

Viel Spaß!
