---
title: "Schilderwörter"
description: "Zerlege einen Firmennamen in die einzelnen Wörter, die gedruckt werden sollen."
en_md5: b2d0a5c31cfbb7036c1a860f59498ff8
---

Vor einiger Zeit hast du ein Programm geschrieben, das einem Kunden beim Herstellen von Schildern geholfen hat. Inzwischen ist er zurück und hat eine neue Anforderung. Er stellt jetzt größere Schilder her. Dafür druckt er jedes Wort vorab und setzt die Wörter dann vor Ort an den Fenstern der Firma zusammen.

Er braucht dich für den ersten Schritt des Programms: den Namen der Firma zu nehmen und ihn in Wörter zu zerlegen, die er drucken kann.

Schreibe eine Funktion namens `signWords(businessName)` (die Wörter eines Firmennamens), die den Namen der Firma entgegennimmt und ein Array mit den Wörtern darin zurückgibt. Zum Beispiel sollte `signWords("Frank's Hotdogs")` den Wert `["Frank's", "Hotdogs"]` zurückgeben.

Wörter sind das, was durch Leerzeichen voneinander getrennt ist. Aber eins solltest du beachten: Manchmal schicken Kunden ihren Firmennamen versehentlich mit mehreren aufeinanderfolgenden Leerzeichen. Falls das passiert, musst du die zusätzlichen Leerzeichen ignorieren, sodass `"Frank's   Hotdogs"` trotzdem `["Frank's", "Hotdogs"]` zurückgibt.

### Push und Split

Der Schlüssel zu dieser Übung ist die `push`-Methode, mit der du das Array aufbaust. Du kannst auch die `split`-Methode verwenden, aber vielleicht fällt es dir leichter, das Zerlegen selbst von Hand zu machen. Weder das eine noch das andere ist richtig oder falsch. Wenn du noch einmal nachlesen möchtest, wie die Methoden funktionieren, schau unten nach.

Viel Spaß!
