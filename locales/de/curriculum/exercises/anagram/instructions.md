---
title: "Anagramm"
description: ""
en_md5: 9b9be5868da2ce5a39370ee35e739c8b
---

Auf einem Flohmarkt findest du eine wunderschöne Vintage-Schreibmaschine zu einem Schnäppchenpreis! Doch egal, welches Wort du tippst, die Buchstaben kommen in der falschen Reihenfolge heraus. Manchmal sind es tatsächlich die Buchstaben, die du geschrieben hast, manchmal gerät sie völlig durcheinander und gibt komplett falsche Buchstaben aus.

Zum Beispiel: Als du zum ersten Mal das Wort „stone“ getippt hast, gab sie „banana“ aus. Sehr ärgerlich. Beim zweiten Mal tipptest du „stone“, und sie gab „notes“ aus. Da wurde dir klar, dass das zwar immer noch extrem nervig ist, aber tatsächlich einen nützlichen Zweck haben könnte: Anagramme zu finden, also zwei Wörter, die dieselben Buchstaben enthalten (zum Beispiel „stone“ und „notes“).

### Deine Aufgabe

Du beschließt, ein kleines Programm zu schreiben, das alle Wörter nimmt, die die Schreibmaschine ausgibt, und zusammen mit dem Wort, das du getippt hast, eine Liste der Wörter liefert, die tatsächlich Anagramme sind.

Erstelle eine Funktion namens `findAnagrams(word, possibilities)` (Anagramme finden), die ein Zielwort (einen String) und eine Liste möglicher Anagramme entgegennimmt und zurückgibt, welche der Möglichkeiten tatsächlich Anagramme des Zielworts sind.

Ein Anagramm ist eine Umstellung von Buchstaben, die ein neues Wort ergibt. Zum Beispiel ist „owns“ ein Anagramm von „snow“. Wichtige Regeln:

- Ein Wort ist NICHT sein eigenes Anagramm (zum Beispiel ist „stop“ kein Anagramm von „stop“)
- Groß- und Kleinschreibung spielt keine Rolle (zum Beispiel ist „PoTS“ ein Anagramm von „sTOp“)
- Gib die Anagramme mit der ursprünglichen Groß- und Kleinschreibung zurück, so wie sie in der Liste der Möglichkeiten stehen
- Die Ergebnisse sollen alphabetisch sortiert sein

Beispiel: `findAnagrams('stone', ['stone', 'Seton', 'banana', 'tons', 'notes', 'tones'])` gibt ['Seton', 'notes', 'tones'] zurück.
