---
title: "Eingabewerte zu Funktionen hinzufügen"
description: "Deinen eigenen Funktionen Trichter hinzufügen, damit sie je nach den übergebenen Werten unterschiedliche Dinge tun."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Die Funktionen, die du bisher gebaut hast, machen jedes Mal genau dasselbe. `turnAround` (sich umdrehen) dreht immer zweimal nach links. `shootIfAlienAbove` (schießen, wenn ein Alien darüber ist) prüft immer und schießt.

Aber denk an die Funktionen, die du im Kurs schon benutzt hast, und daran, wie sie je nach Eingabewerten unterschiedliche Dinge tun. `Rectangle` nimmt left, top, width und height als Eingabewerte und zeichnet dann ein anderes Rechteck, je nachdem, was du ihm sagst.

Jetzt fügen wir auch deinen eigenen Funktionen Trichter hinzu.

Dafür musst du zwei Dinge wissen. Erstens, wie das aussieht, was du schreiben musst. Und zweitens, was dabei tatsächlich passiert.

Der erste Teil ist ganz einfach. Du setzt einfach zwei runde Klammern und schreibst die Namen der Eingabewerte hinein, die du haben willst.

Stell dir vor, wir bauen eine Funktion, die viele Male schießen soll. Nennen wir sie `shootMany` (viele Schüsse abgeben).

So würden wir sie schreiben:

```javascript
function shootMany(numShots) {
  // ...
}
```

Wenn du diese Funktion benutzen willst, rufst du sie mit der Anzahl der Schüsse auf, die du haben willst:

```javascript
shootMany(5)
shootMany(2)
```

Und jetzt kommt der entscheidende Teil. Wenn der Code läuft, nimmt Mini-Jiki, der mit dem Hut in der Funktion sitzt, den Wert, den du in den Trichter wirfst, egal ob `5` oder `2`, und steckt ihn in eine Box namens `numShots` (Anzahl der Schüsse). Dann stellt er diese Box in die Regale in der Funktion, damit du sie im Code der Funktion benutzen kannst.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki in der shootMany-Maschine legt den Eingabewert in eine Box mit der Aufschrift numShots"
  width="500"
  height="376"
/>

Ich sage das noch einmal.

Wenn wir `shootMany(5)` schreiben, um die Funktion zu benutzen, holt Jiki, der draußen steht, eine `5` und wirft sie in den Trichter von `shootMany`. In der Maschine nimmt Mini-Jiki diese `5` heraus und legt sie in eine Box namens `numShots`, denn das ist der Name, den du diesem Trichter gegeben hast. Dann stellt er diese Box in die Regale in der Funktion, die in der Maschine steckt.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki stellt die Box numShots in die Regale in der shootMany-Maschine"
  width="500"
  height="302"
/>

Und dann kannst du innerhalb der Funktion die Box `numShots` genauso benutzen wie jede andere Box. An dem Namen `numShots` ist nichts Magisches. Wir hätten sie nennen können, wie wir wollten. Er ist im Grunde nur ein Befehl an Mini-Jiki, in der Funktion immer eine Box mit dieser Aufschrift anzulegen und alles, was in diesen Trichter geworfen wird, in diese Box zu stecken.

Und sobald ein Wert in dieser Box liegt, kannst du mit ihr alles machen, was du sonst auch mit Boxen machst. Du könntest die Box `numShots` in einer repeat-Schleife benutzen, um die richtige Anzahl an Schüssen abzugeben. Und du kannst auch mehr als einen Eingabewert haben. Trenne sie einfach mit Kommas. Wenn wir also eine Funktion namens `drawStar` (einen Stern zeichnen) haben, die einen Stern anhand ihrer oberen linken Position zeichnet, dann schreibst du sie so:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Die drawStar-Maschine mit zwei Trichtern, die zwei verschiedene Werte aufnimmt"
  width="453"
  height="400"
/>

Und wenn die Funktion dann aufgerufen wird, packt Mini-Jiki die Werte, die in die Trichter geworfen werden, einfach in Boxen namens `left` (links) und `top` (oben) und räumt sie dann in die Regale in der Funktion.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki legt die beiden Eingabewerte in Boxen mit der Aufschrift left und top in die Regale in der drawStar-Maschine"
  width="431"
  height="400"
/>
