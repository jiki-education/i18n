---
title: "Löse das Labyrinth mit Code"
description: "Schreib Code, der jedes Labyrinth von selbst durchquert."
en_md5: d3f3c0d2727632fe7872d07e1c2cd99a
---

In der ersten Labyrinth-Übung hast du deine Figur noch per Hand durch das Labyrinth bewegt. Jetzt bist du bereit, jedes Labyrinth mit Code zu lösen!

Damit das klappt, bekommst du drei neue Funktionen:

- `canTurnLeft()` (kann nach links drehen): gibt `true` zurück, wenn links neben der Figur keine Wand ist.
- `canTurnRight()` (kann nach rechts drehen): gibt `true` zurück, wenn rechts neben der Figur keine Wand ist.
- `canMove()` (kann sich bewegen): gibt `true` zurück, wenn vor der Figur keine Wand ist.

Wenn wir diese drei Funktionen mit `move()` (bewegen), `turnLeft()` (nach links drehen) und `turnRight()` (nach rechts drehen) kombinieren, die du schon kennst, kannst du einen Algorithmus schreiben, der **jedes** Labyrinth löst. „Algorithmus“ ist nur ein vornehmes Wort für „eine Art und Weise, etwas zu tun“. Er ist wie eine Formel oder ein Rezept.

Weiter unten in der Anleitung verrate ich dir den Algorithmus, mit dem du das Labyrinth lösen kannst. Aber ich möchte, dass du es zuerst selbst herausfindest, als kleines Logikrätsel. Wenn du weißt, ob du nach links oder rechts drehen oder vorwärts gehen kannst: Wie löst du dann jedes Labyrinth, das ich dir gebe?

Sobald du es herausgefunden hast oder aufgegeben hast, scrolle nach unten. Dort findest du die Antwort und erfährst, was du in Code schreiben musst.

<hr style="border-top: 1px solid var(--color-gray-200); margin:40px 0"/>

### Der Algorithmus

Okay, das war viel verlangt. Vermutlich hattest du ein paar Ideen, aber noch nicht die ganze Lösung. Hier sind die Schritte, die du befolgen musst:

- Wenn du nach links drehen kannst, dreh nach links und geh vorwärts.
- Sonst, wenn du vorwärts gehen kannst, geh vorwärts.
- Sonst, wenn du nach rechts drehen kannst, dreh nach rechts und geh vorwärts.
- Sonst dreh dich um.

Wenn du das so machst, kannst du jedes Labyrinth lösen!

Schreib diese Anweisungen in Code. Viel Spaß!
