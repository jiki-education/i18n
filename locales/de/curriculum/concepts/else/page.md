---
title: "Das Schlüsselwort `else`"
description: "Einen `else`-Zweig nach einem `if` ergänzen, damit ein anderer Codeblock läuft, wenn sich die Bedingung als falsch herausstellt."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

If-Anweisungen lassen dich Bedingungen prüfen und Code nur dann ausführen, wenn etwas wahr ist. Jetzt lernst du den Komplizen von if kennen: `else`.

Bei einer if-Anweisung (_if statement_ auf Englisch) führt Jiki den Block aus, wenn die Bedingung wahr ist, und überspringt ihn, wenn sie falsch ist. Aber was, wenn Jiki eine Sache tun soll, wenn die Bedingung wahr ist, und eine andere, wenn sie falsch ist? Genau dafür gibt es else. Wir können einen else-Zweig (_else clause_ auf Englisch) nach der schließenden geschweiften Klammer des if setzen, und Jiki führt ihn aus, wenn die Bedingung des if falsch ist. Zurück zum Beispiel mit dem Türsteher im Club: Jetzt können wir die Tür öffnen oder jemanden abweisen. Das ist wohl besser, als die Person einfach komplett zu ignorieren wie vorher. Stell es dir wie eine Weggabelung vor. Jiki erreicht die Gabelung, prüft die Bedingung, und dann geht er in die eine Richtung, wenn sie wahr ist, oder in die andere, wenn sie falsch ist. Aber er geht nie beide Wege.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Eine Weggabelung an der Clubtür: Die Tür wird geöffnet, wenn die Bedingung wahr ist, die Person wird abgewiesen, wenn sie falsch ist"
  width="500"
  height="332"
/>

Aber was, wenn es mehr als zwei Möglichkeiten gibt? Stell dir vor, unser Türsteher verkauft Tickets. Unter dreizehn bekommst du ein Kinderticket. Zwischen dreizehn und zwanzig bekommst du ein Jugendticket. Ab zwanzig gibt es ein Erwachsenenticket. Jetzt gibt es also drei verschiedene Ergebnisse. Dafür können wir nach dem else eine weitere if-Anweisung einfügen. Wir sagen also: „Wenn das, dann tu dies. Sonst, wenn das, dann tu das. Sonst tu diese andere Sache.“ In diesem Beispiel sieht Jiki das if und prüft die erste Bedingung. Ist sechzehn kleiner als dreizehn? Nein. Also geht er weiter zum else if. Ist sechzehn kleiner als zwanzig? Ja, das ist wahr. Also führt er diesen Block aus und gibt ein Jugendticket heraus. Aber damit ist er fertig. Er prüft nichts weiter. Das letzte else schaut er sich gar nicht mehr an. Sobald Jiki eine Bedingung findet, die wahr ist, führt er diesen Block aus und überspringt alles, was darunter kommt.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Das ist der entscheidende Punkt. Es läuft immer nur ein einziger Block. Jiki arbeitet sich von oben nach unten durch, findet die erste wahre Bedingung, führt diesen Block aus und macht weiter.

Und jetzt kommt eine Sache, die du wirklich verstehen musst, weil viele darüber stolpern. Es gibt einen feinen, aber sehr wichtigen Unterschied zwischen zwei getrennten if-Anweisungen und else if. Stell dir vor, wir schreiben ein Programm, das je nach Punktzahl entweder einen normalen Preis oder einen Bonuspreis vergibt. Schau dir diese beiden Möglichkeiten an. Die eine verwendet else if, die andere zwei getrennte `if`-Anweisungen. Was passiert hier unterschiedlich?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

Im ersten Fall, mit dem else if, prüfen wir auf die hohe Punktzahl und vergeben den Preis, und danach läuft das else if nicht mehr. Wer also mehr als hundert Punkte hat, bekommt nur den Bonuspreis.

Im zweiten Beispiel sind die beiden ifs aber völlig unabhängig voneinander. Beide laufen, und beide sind wahr. Die Person bekommt hier also zwei Preise. Im ersten Fall ein Preis, im zweiten Fall zwei Preise. Nimm dir kurz einen Moment, um sicherzugehen, dass du das wirklich verstanden hast.

Interessant ist auch: Je nachdem, wie das Spiel gedacht ist, kann beides richtig sein. Vielleicht bekommt die Person einen normalen Preis und dazu einen Bonuspreis, oder vielleicht wird sie einfach auf den Bonuspreis hochgestuft. Keiner der beiden Codeschnipsel ist richtig oder falsch. Sie sind einfach in unterschiedlichen Situationen nützlich. Aber du musst wissen, welchen von beiden du verwenden willst.
