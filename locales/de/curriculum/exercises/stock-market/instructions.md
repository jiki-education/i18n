---
title: "Aktienmarkt"
description: "Verfolge deine Investition, während der Aktienmarkt zufällig steigt und fällt."
en_md5: 233edb21475a3846a567f3bdda98ce84
---

Am 1. Januar dieses Jahres hast du hart verdiente $10 in den Aktienmarkt investiert. Du hast beschlossen, es vor deiner Familie geheim zu halten und es ihnen erst nach 20 Jahren zu erzählen, wenn es (hoffentlich!) ordentlich an Wert gewonnen hat.

Über Aktienmärkte musst du drei Dinge wissen:

1. Sie sind unvorhersehbar. Sie können jedes Jahr wachsen oder fallen. Im Durchschnitt wachsen sie um etwa 10 %, aber das kann stark schwanken.
2. Wenn sie wachsen, wächst dein Geld wegen des Zinseszinses schneller als der Aktienmarkt. Wenn du dieses Jahr $10 investierst und sich der Aktienmarkt in den nächsten 10 Jahren im Wert verdoppelt, hast du $20. Wenn er sich in den nächsten 10 Jahren noch einmal verdoppelt, hast du $40 ($20 \* 2, nicht $10 \* 2!).
3. Sobald du Gewinn machst, musst du es dem Finanzamt melden!

### Ablauf der Übung

Du hast eine Funktion namens `marketGrowth(year)` (Wachstum des Aktienmarkts in einem Jahr), die eine Zahl dafür zurückgibt, wie stark der Aktienmarkt in diesem Jahr gewachsen ist (zum Beispiel bedeutet `5`, dass er um `5%` gewachsen ist). Wenn du also $10 investierst und er um 5 % wächst, hast du jetzt $10.50.

Deine Aufgabe ist es, jedes Jahr zu verfolgen, wie viel Geld du hast, und es dem Finanzamt mit `reportTax(year, balance)` (Jahr und Kontostand an das Finanzamt melden) zu melden. Nach 20 Jahren verkündest du deiner Familie dann den Endbetrag mit `announceToFamily(value)` (Endbetrag an die Familie melden). Das erste Jahr, für das du `marketGrowth(...)` aufrufst, sollte das aktuelle Jahr sein.

Schau dir unten die Funktionen an, dort findest du mehr Details, und wenn du nicht weiterkommst, kannst du jederzeit in die Hinweise schauen!
