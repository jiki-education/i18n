---
title: "Akronym"
description: "Verwandle eine Phrase in ihr Akronym und ignoriere dabei die Satzzeichen."
en_md5: e8b8820be81476a13cb6a66781f95cc9
---

Einfache Akronyme aus drei Buchstaben hast du schon gelöst, zum Beispiel `Portable Network Graphics` in `PNG`.

Bei dieser Übung gehen wir aber einen Schritt weiter und kümmern uns um alle Akronyme, nicht nur um die aus drei Buchstaben. Und das ist deutlich kniffliger...

Deine Aufgabe ist es, eine Funktion namens `acronym(phrase)` zu schreiben, die eine Phrase entgegennimmt und ihr Akronym zurückgibt.

## Die Regeln

Ein neues Wort beginnt nach einem **Leerzeichen** oder einem **Bindestrich** (`-`). Andere Zeichen (Kommas, Apostrophe, Unterstriche, Ausrufezeichen usw.) gelten **nicht** als Trennzeichen und werden nie Teil des Akronyms. Nur Buchstaben zählen.

| Phrase                    | Akronym |
| ------------------------- | ------- |
| As Soon As Possible       | ASAP    |
| Liquid-crystal display    | LCD     |
| Thank George It's Friday! | TGIF    |

## Achtung

Wir haben dir keine der fortgeschritteneren JavaScript-Methoden gegeben, die du später im Kurs siehst (nichts, was einen Buchstaben magisch in einen Großbuchstaben verwandelt oder dir sagt, ob ein Zeichen überhaupt ein Buchstabe ist). Du musst all diese Hilfsfunktionen selbst bauen, bevor du das Ganze zusammensetzen kannst.

Das hier ist kniffliger, als es klingt. Viel Spaß!
