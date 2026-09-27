---
title: "Hamming"
description: "Zähle die Unterschiede zwischen zwei DNA-Strängen."
en_md5: 629f74899d402283c34d3bfbb17777b8
---

Das ist eine klassische Exercism-Übung über Molekularbiologie!

Dein Körper besteht aus Zellen, die DNA enthalten. Diese Zellen nutzen sich regelmäßig ab und müssen ersetzt werden, und das schaffen sie, indem sie sich in Tochterzellen teilen. Tatsächlich erlebt der durchschnittliche menschliche Körper im Laufe seines Lebens rund 10 Billiarden Zellteilungen!

Wenn sich Zellen teilen, vervielfältigt sich auch ihre DNA. Manchmal passieren bei diesem Vorgang Fehler, und einzelne DNA-Stücke werden mit der falschen Information kodiert. Wenn wir zwei DNA-Stränge vergleichen und die Unterschiede zwischen ihnen zählen, können wir sehen, wie viele Fehler aufgetreten sind. Das nennt man die „Hamming-Distanz“.

Die Hamming-Distanz ist in vielen Bereichen der Wissenschaft nützlich, nicht nur in der Biologie. Es lohnt sich also, diesen Begriff zu kennen!

Deine Aufgabe ist es, die Hamming-Distanz zwischen zwei DNA-Strängen zu berechnen. DNA verwendet die Buchstaben C, A, G und T. Zwei Stränge könnten so aussehen:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Sie haben 7 Unterschiede, die Hamming-Distanz ist also 7.

Erstelle eine Funktion namens `hammingDistance` (Hamming-Distanz), die zwei Eingabewerte hat: die beiden DNA-Stränge als Strings. Sie sollte als Distanz eine Zahl zurückgeben.

Beide DNA-Stränge sind immer gleich lang.
