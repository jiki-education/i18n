---
title: "Wordle: Löser"
description: "Baue einen Löser, der ein ganzes Wordle-Spiel von selbst spielt."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

In der letzten Wordle-Übung hast du ein Spiel verarbeitet, bei dem dir die Rateversuche vorgegeben wurden. Diesmal sitzt du auf der anderen Seite und bist derjenige, der die Rateversuche tatsächlich selbst herausfindet.

Deine Aufgabe ist es, eine neue Funktion namens `solveWordle()` zu erstellen, in der du so lange Wörter rätst, bis du das richtige Wort gefunden hast. Du musst das Spiel so effizient wie möglich lösen, also mit so wenigen Wörtern wie möglich.

Du hast eine neue Funktion `commonWords()` (häufige Wörter), die ein Array aus über 100 Wörtern zurückgibt, die du im Spiel verwenden kannst. Diese Wörter solltest du alle durchgehen. Du fängst immer damit an, das erste Wort aus diesem Array zu lesen und zu raten. Dann gehst du weiter, suchst das nächste mögliche gültige Wort und rätst es als Nächstes, und so weiter.

Du hast eine Funktion `guess(word)` (ein Wort raten), die für jeden Buchstaben ein Array aus `"correct"`, `"present"` und `"absent"` zurückgibt.

Der Schlüssel zu dieser Übung ist, dir zu überlegen, wie du dir die vorherigen Wörter und die Ergebnisse von `guess` merkst, und dann mit diesem Wissen immer den effizientesten Weg zum Sieg zu finden.

### Ein Beispiel

1. Du liest das erste Wort aus dem Array, das `"which"` lautet.
2. Du rufst `guess("which")` auf, was `["correct", "present", "absent", "absent", "absent"]` zurückgibt.
3. Du wählst das nächste Wort im Array der häufigen Wörter, das mit `"w"` beginnt und an der dritten, vierten oder fünften Stelle ein `"h"` hat.
4. Weiter bei (2) ...

Viel Glück und viel Spaß!
