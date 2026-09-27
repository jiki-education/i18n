---
title: "Einfaches Pangram"
description: "Prüfe, ob ein Satz jeden Buchstaben des Alphabets verwendet."
en_md5: 50b09bb1fbd35081cb842c55fc40e313
---

Ein Pangram ist ein Satz, der **jeden Buchstaben des Alphabets mindestens einmal** verwendet. Das bekannteste englische Pangram ist „the quick brown fox jumps over the lazy dog“!

In den nächsten drei Übungen geht es darum, herauszufinden, ob Sätze Pangramme sind.

In dieser ersten Übung musst du dich nur um Kleinbuchstaben kümmern. Die Eingabe enthält nur Kleinbuchstaben und andere Zeichen wie Leerzeichen, Zahlen oder Satzzeichen, aber keine Großbuchstaben.

Deine Aufgabe ist es, `isPangram(sentence)` (prüft, ob ein Satz ein Pangram ist) zu schreiben. Die Funktion nimmt einen Satz als Eingabe und gibt `true` zurück, wenn dieser jeden Buchstaben von „a“ bis „z“ mindestens einmal enthält. Andernfalls gibt sie `false` zurück.

### Hilfsfunktionen

Um die Übung zu bestehen, darfst du in dieser Übung keine verschachtelten Schleifen verwenden. Stattdessen ist, wie in der letzten Übung, eine **Hilfsfunktion** der Schlüssel, die `isPangram(...)` verwendet.

Diese Hilfsfunktion hilft dir herauszufinden, ob ein String einen anderen String enthält. Wir empfehlen dir, diese Funktion `includes` zu nennen und ihre Eingabewerte `haystack` (Heuhaufen) und `needle` (Nadel) zu nennen. Die Idee dahinter ist, dass wir „die Nadel im Heuhaufen finden“ wollen, eine alte englische Redewendung.

Wenn es dir zu viel erscheint, mehrere Funktionen zu erstellen, kannst du die Übung vielleicht zuerst ohne die Hilfsfunktion mit einer verschachtelten Schleife lösen und dir danach überlegen, wie du das in eine Hilfsfunktion aufteilst.

Viel Spaß!
