---
title: "Schachbrettmuster"
description: "Zeichne ein Schachbrettmuster in beliebiger Größe und richte es für ein Spiel ein, wobei du jede Position aus der Brettgröße ableitest."
en_md5: 1669c45c882ce94e16651bfc2d77a172
---

In diesem Projekt zeichnest du ein Schachbrettmuster und stellst die Spielsteine darauf auf, bereit für eine Partie Dame (auch als Checkers bekannt).

Dein Code muss für **jede Brettgröße** funktionieren. Wir haben dir drei Beispielbretter zum Ausprobieren gegeben. Ein Rätsel nutzt das klassische 8x8-Brett, ein anderes ein kleineres 6x6-Brett und ein weiteres ein größeres 10x10-Brett. Mit `getBoardSize()` (Brettgröße ermitteln) findest du heraus, wie viele Felder breit und hoch das Brett diesmal ist (die Bretter sind immer quadratisch).

<div style="display: flex; gap: 8px; margin: 12px 0;">
  <img src="/static/images/exercise-assets/checkerboard/board-6.svg" alt="6x6-Schachbrettmuster" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-8.svg" alt="8x8-Schachbrettmuster" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-10.svg" alt="10x10-Schachbrettmuster" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
</div>

### Das Brett

Wie üblich ist die Leinwand immer `100` breit und `100` hoch. Befolge diese zwei Regeln:

- Das Brett hat an seinem Rand einen Rahmen der Breite `2` in der Farbe `"black"`.
- Die Felder wechseln sich zwischen `"dark brown"` und `"white"` ab und teilen sich den Platz innerhalb des Rahmens sauber auf. Das Feld unten links ist immer dark brown, nicht white.

### Die Spielsteine

- Jeder Spielstein sitzt in der Mitte eines Feldes.
- Die Spielsteine sind gerippte Kreise mit einem äußeren Rand und einer inneren Farbe:
  - Der ganze Spielstein ist 80 % so breit wie das Feld.
  - Der innere Kreis ist 75 % so breit wie der ganze Spielstein.
- Die Reihen am **oberen** Rand des Bretts bekommen Spielsteine in `"charcoal"`, jeweils mit einem Rand in `"black"`.
- Die Reihen am **unteren** Rand bekommen Spielsteine in `"white"`, jeweils mit einem Rand in `"grey"`.
- Spielsteine sitzen immer nur auf den **dunklen** Feldern.
- Die **zwei mittleren Reihen** bleiben immer leer. Alle anderen Reihen sind mit Spielsteinen besetzt.

## Denk in Verhältnissen

Der Kern dieser Übung ist, die Größen und Positionen **niemals fest zu verdrahten**. Ermittle aus der Brettgröße eine einzige Zellengröße und baue daraus jedes Feld und jeden Spielstein auf. Wenn du das richtig machst, zeichnet genau derselbe Code ein kleines 6x6-Brett und ein größeres 10x10-Brett, ohne dass du eine einzige Zahl änderst.
