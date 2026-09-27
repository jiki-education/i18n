---
title: "Skyline"
description: "Baue eine ganze Skyline aus zufälligen Gebäuden."
en_md5: cb89a31566f55397d19e1375dbac44cc
---

In der Übung „Wolkenkratzer“ hast du einen einzelnen Wolkenkratzer mit unterschiedlicher Höhe gebaut. Diesmal gehen wir noch einen Schritt weiter und bauen eine Skyline aus Gebäuden mit unterschiedlichen Höhen und unterschiedlichen Breiten.

Du hast eine Funktion `numBuildings()` (Anzahl der Gebäude), die dir sagt, wie viele Gebäude du für dieses Szenario bauen musst. Du hast außerdem die Funktionen `randomWidth()` (zufällige Breite) und `randomNumFloors()` (zufällige Anzahl an Stockwerken). Mit ihnen bestimmst du die Breite und die Anzahl der Stockwerke jedes Gebäudes in diesem Szenario. Beim ersten Aufruf bekommst du die Werte für das erste Gebäude, beim zweiten die für das zweite, und so weiter.

Links neben den Gebäuden bleibt eine Lücke von `1` Spalte, und zwischen den Gebäuden liegt ebenfalls eine Lücke von `1` Spalte.

Wenn du also ein Szenario hast, in dem `numBuildings()` `2` zurückgibt, `randomWidth()` zuerst `5` und dann `7` und `randomNumFloors()` zuerst `4` und dann `8`, dann ergibt das dieses Layout (wobei `xxxxx` für den Betonboden steht):

```
       WWWWWWW
       WGGGGGW
       WGGGGGW
       WGGGGGW
 WWWWW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGEGW WGGEGGW
xxxxxxxxxxxxxxxxxxxxxxx
```
