---
title: "`else if`-Ketten verwenden"
description: "Mehrere Bedingungen der Reihe nach mit verketteten `else if`-Zweigen prüfen, wobei nur der erste Block ausgeführt wird, dessen Bedingung wahr ist."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Du hast gesehen, wie `if` und `else` dir zwei Wege geben: Mach das eine, wenn eine Bedingung wahr ist, und das andere, wenn sie falsch ist. Aber was, wenn es mehr als zwei Möglichkeiten gibt?

Stell dir vor, unser Türsteher verkauft jetzt Tickets. Unter dreizehn bekommst du ein Kinderticket. Zwischen dreizehn und zwanzig bekommst du ein Teenager-Ticket. Ab zwanzig gibt es ein Erwachsenenticket. Es gibt jetzt also drei verschiedene Ergebnisse. Dafür können wir nach dem else eine weitere if-Anweisung hinzufügen. Wir sagen also: „Wenn das, dann mach dies. Sonst, wenn das, mach das. Sonst mach dieses andere Ding.“ In diesem Beispiel sieht Jiki das if und prüft die erste Bedingung. Ist sechzehn kleiner als dreizehn? Nein. Also geht er weiter zum else if. Ist sechzehn kleiner als zwanzig? Ja, das ist wahr. Also führt er diesen Block aus und gibt ein Teenager-Ticket heraus. Und damit ist er fertig. Er prüft nichts weiter. Das letzte else schaut er sich gar nicht mehr an. Sobald Jiki eine Bedingung findet, die wahr ist, führt er diesen Block aus und überspringt alles, was darunter kommt.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Drei Tickets mit den Aufschriften CHILD, TEEN und ADULT, eines für jedes Ergebnis der Altersprüfung"
  width="500"
  height="142"
/>

Das ist der entscheidende Punkt. Es wird immer nur ein einziger Block ausgeführt. Jiki arbeitet sich die Kette hinunter, findet die erste wahre Bedingung, führt diesen Block aus und macht weiter.

Jetzt kommt etwas, das du wirklich verstehen solltest, weil viele genau hier stolpern. Es gibt einen feinen, aber sehr wichtigen Unterschied zwischen zwei getrennten if-Anweisungen und einem else if. Stell dir vor, wir schreiben ein Programm, das je nach Punktzahl entweder einen normalen Preis oder einen Bonuspreis vergibt. Schau dir diese beiden Möglichkeiten an. Die eine verwendet else if, die andere zwei getrennte `if`-Anweisungen. Was passiert jeweils anders?

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

Im ersten Fall, mit dem else if, prüfen wir auf die hohe Punktzahl und vergeben den Bonuspreis, und das else if wird danach nicht mehr ausgeführt. Wer also über hundert Punkte hat, bekommt einfach nur den Bonuspreis.

Im zweiten Beispiel sind die beiden ifs völlig unabhängig voneinander. Beide werden ausgeführt, und beide sind wahr. Diese Person bekommt hier also zwei Preise. Im ersten Fall ein Preis. Im zweiten Fall zwei Preise. Nimm dir einen Moment Zeit, um sicherzugehen, dass du das wirklich verstanden hast.

Interessant ist auch: Je nachdem, wie das Spiel gedacht ist, kann beides richtig sein. Vielleicht bekommt die Person einen normalen Preis und dazu einen Bonuspreis, oder sie wird einfach auf den Bonuspreis hochgestuft. Keiner der beiden Codeausschnitte ist richtig oder falsch. Sie sind nur in unterschiedlichen Situationen nützlich. Du musst aber wissen, welchen davon du gerade verwenden willst.
