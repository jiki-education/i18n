---
title: "Arrays aufbauen"
description: "Fang mit einem leeren Array an und füge mit `push` Element für Element hinzu, während du die Daten durchläufst."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Bisher hast du mit Arrays gearbeitet, deren Werte am Anfang festgelegt und danach nicht mehr verändert wurden. Aber was ist, wenn du einem Array nach und nach etwas hinzufügen willst? Dafür haben Arrays eine Methode namens `push` (anhängen).

Push hat einen Eingabewert: das, was du ans Ende des Arrays anhängen willst. In diesem Fall wollen wir also das Wort `"Isaac"` ans Ende eines Arrays anhängen, das bereits `"DJ"` und `"Bethany"` enthält.

Um das zu machen, holt Jiki das Array aus der Box, hängt `"Isaac"` ans Ende der Kette und legt das Ganze wieder zurück in die Box. Beachte: Anders als vorher bei Strings, wo Jiki jedes Mal einen neuen String erzeugt hat, verändert er hier tatsächlich das Array.

Ein Muster, das dir beim Programmieren oft begegnen wird, ist: mit einem leeren Array anzufangen und es dann nach und nach aufzubauen. Stell dir vor, wir haben eine große Liste mit Namen und wollen sie der Reihe nach durchgehen. Jedes Mal, wenn wir jemanden finden, der ein Mentor ist, fügen wir ihn unserem Array hinzu.

Dieses Muster, in einer Schleife etwas hinzuzufügen, wirst du noch oft brauchen.
