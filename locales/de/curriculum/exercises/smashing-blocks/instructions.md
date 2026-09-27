---
title: "Blöcke zerschlagen"
description: ""
en_md5: 6f11a08a4114c6d9762319de1814293a
---

In der vorherigen Übung hast du den Ball im Spielfeld herumspringen lassen. Jetzt ist es Zeit, ein paar Blöcke hinzuzufügen!

Du hast eine neue Klasse `Block`. Wenn du mit `new Block(left, top)` eine Instanz erstellst, legst du ihre `left`- und `top`-Position fest. Alle Blöcke sind `16` breit.

Der Block hat die Eigenschaften `top` (oben), `left` (links), `width` (Breite) und `height` (Höhe), die du lesen kannst. Außerdem hat er eine Eigenschaft `smashed` (zerschlagen), die du lesen und schreiben kannst.

Du hast zwei Aufgaben:

1. Erstelle 5 Blöcke. Bei allen soll `top` `31` sein. Beim ersten soll `left` `8` sein, und danach sollen sie gleichmäßig über das Spielfeld verteilt sein (mit einem Abstand von `1` zwischen ihnen).

2. Kümmere dich darum, was passiert, wenn der Ball auf einen Block trifft. Dann setzt du die Eigenschaft `smashed` des Blocks auf `true` (dadurch verschwindet er) und kehrst die Richtung des Balls um. Sobald alle Blöcke zerschlagen sind, bewegst du den Ball nicht mehr.

In dieser Übung trifft der Ball immer nur auf die Unterseite eines Blocks, was die Kollisionslogik vereinfacht.
