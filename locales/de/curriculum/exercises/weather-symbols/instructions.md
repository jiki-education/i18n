---
title: "Wettersymbole"
description: "Zeichne eine Wettervorhersage für sechs Tage aus einer Liste von Beschreibungen."
en_md5: 18bc1bf16ffc94d81bfa81a93faa9a7f
---

Du sollst eine Wettervorhersage für sechs Tage erstellen. Statt klassischer Wetterdaten bekommst du von deinem Chef allerdings Beschreibungen, die davon abhängen, wie er sich bei dem Wetter fühlt (z. B. "Snowboarding time! 🏂" oder "Miserable 😩").

Du bekommst ein Array mit sechs Wetterbeschreibungen, eine pro Tag. Deine Aufgabe ist es, das Wetter jedes Tages in seine eigene Box zu zeichnen.

Die Vorhersage wird als Raster aus sechs Boxen angezeigt, eine für jeden Wochentag von Montag bis Samstag. Die Beschreibungen sind der Reihe nach zugeordnet: die erste (Box `0`) ist das Wetter am Montag, die zweite (Box `1`) das am Dienstag, und so weiter bis Samstag (Box `5`). (Dein Chef verlässt sonntags nie das Haus, deshalb kümmert ihn das Wetter dann nicht, und wir können es nie melden ...)

## Einen Tag zeichnen

Wir haben dir eine Funktion `draw` (zeichnen) gegeben, die die ganze Zeichenarbeit für dich übernimmt. Deine Aufgabe ist es, die richtigen Elemente herauszufinden, die hineingehören.

```js
draw(box, day, elements)
```

- `box` ist die Box, in die gezeichnet wird (`0` bis `5`).
- `day` ist der Wochentag, mit dem die Box beschriftet wird, zum Beispiel `"Monday"`.
- `elements` ist ein Array von Wettersymbolen, die angezeigt werden (Details siehe unten).

Die Wochentage sind, der Reihe nach, `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"` und `"Saturday"`.

Wenn der erste Tag also `"Exciting 🤩"` ist, schreibst du:

```js
draw(0, "Monday", ["cloud", "snow"])
```

## Was die einzelnen Beschreibungen bedeuten

Jede Beschreibung entspricht einem bestimmten Array von Symbolen:

- `"Sunny ☀️"`: `["sun"]`
- `"Dull 😴"`: `["cloud"]`
- `"Miserable 😩"`: `["cloud", "rain"]`
- `"Hopeful 🤞"`: `["sun", "cloud"]`
- `"Rainbow territory! 🌈"`: `["sun", "cloud", "rain"]`
- `"Exciting 🤩"`: `["cloud", "snow"]`
- `"Snowboarding time! 🏂"`: `["sun", "cloud", "snow"]`

## Deine Aufgabe

Arbeite die Liste `days` Tag für Tag durch. Wandle jede Beschreibung in die richtige Liste von Symbolen um und zeichne sie mit `draw` in die Box des jeweiligen Tages, beschriftet mit dem passenden Wochentag.
