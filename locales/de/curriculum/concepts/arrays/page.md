---
title: "Arrays"
description: "Eine geordnete Kette aus Elementen (Strings, Zahlen, boolesche Werte oder alles andere), die als ein einziger Wert zusammengehalten wird, den Jiki weiterreichen kann."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Du hast bisher Zahlen und Strings und boolesche Werte benutzt, „boolesch“ ist das vornehme Wort für wahr und falsch, und wir nennen diese verschiedenen Dinge Datentypen (_data types_ auf Englisch). Jetzt kommt unser erster zusammengesetzter Datentyp (_compound data type_ auf Englisch) dazu.

Das ist ein Datentyp, der mehrere Dinge enthalten kann, nicht nur eines, und dieser Datentyp heißt Array.

Wenn du das Wort Array hörst, stell dir eine echte Kette vor, die viele Dinge zusammenhält.

Diese Dinge können alles Mögliche sein: Strings, Zahlen, boolesche Werte, sogar andere Arrays, sogar Dinge, die du noch gar nicht kennengelernt hast. Aber darüber machen wir uns jetzt keine Gedanken.

Alles in dieser Kette hat eine Reihenfolge, nämlich die Reihenfolge, in der die Dinge aneinandergekettet sind.

Ein Array enthält also viele Dinge, aber es ist ein einziges festes Element, ein einziges Ding: ein Array mit vielen Elementen darin.

Jiki kann dieses Array, diese Kette, nehmen und in eine Box legen, genauso wie er einen String oder eine Zahl in eine Box legen kann.

Er kann es in den Trichter einer Maschine werfen. Er kann es aus einer Ausgaberutsche ziehen. Dieses Array ist ein einziges Ding, und Jiki arbeitet damit genauso wie mit Strings, Zahlen und allem anderen, das du bisher gesehen hast.

In Code sieht ein Array übrigens auch ein bisschen wie eine Kette aus. Es hat an jedem Ende eine eckige Klammer, und dazwischen stehen viele Elemente, die aneinandergekettet und durch Kommas getrennt sind.

Wenn wir zum Beispiel ein Array mit den Namen einiger unserer Mentoren erstellen wollen, können wir eine Box namens `mentors` (Mentoren) anlegen und diese Kette hineinlegen.

Wir schreiben `let mentors =`, genau wie bei jeder anderen Box, dann eine öffnende eckige Klammer, viele Elemente, also die Namen, durch Kommas getrennt, und dann eine schließende eckige Klammer. Wenn Jiki das sieht, holt er vier Zettel, einen für jeden Namen, nimmt eine neue Kette, kettet alle zusammen und legt diese Kette dann in die Box `mentors`.

Du kannst alles in ein Array legen: Strings, Zahlen, boolesche Werte, sogar eine Mischung aus verschiedenen Dingen.

Das hier sind alles Beispiele für völlig gültige Arrays.

Du kannst auch ein leeres Array erstellen. Das ist einfach eine Kette ohne Elemente. Sie ist trotzdem ein echtes Ding. Sie hat immer noch ihre beiden Enden. Sie ist immer noch eine Kette. Sie hat nur keine Dinge darin. Aber du kannst dieses leere Array trotzdem in eine Box legen, später wieder herausholen und benutzen.

Du kannst ein Array also mit der Syntax aus eckigen Klammern erstellen. Aber wie benutzen wir Arrays eigentlich? Wie schauen wir hinein und holen Dinge heraus? Genauso, wie wir Buchstaben aus einem String geholt haben: mit eckigen Klammern und einer Zahl darin.

Gehen wir zurück zu unserer Liste von Mentoren. Wenn wir das erste Element herausholen wollen, schreiben wir `mentors[0]`. Denk daran, dass wir in JavaScript ab null zählen.

Wir können auch durch ein Array iterieren, genauso wie wir vorher durch Strings iteriert sind, mit `for-of`.

Arrays funktionieren dabei genau gleich. Der einzige Unterschied ist, dass wir diesmal keinen Buchstaben herausbekommen, sondern das jeweilige Element des Arrays. In diesem Beispiel den Namen des Mentors.

Beim ersten Mal bedanken wir uns also bei `"DJ"`. Beim zweiten Mal bei `"Becky"`, und so weiter.

Wir können bei Arrays auch die Eigenschaft `length` benutzen, genau wie wir es bei Strings gelernt haben. Wenn in der Box `mentors` ein Array mit vier Strings liegt und wir `mentors.length` schreiben, bekommen wir vier zurück.

Und auch `includes` funktioniert bei Arrays genau gleich. Wir können `mentors.includes("DJ")` schreiben, und es gibt `true` zurück. Schreiben wir aber `mentors.includes("Frank")`, gibt es `false` zurück.

Alles funktioniert genau wie bei Strings. Wir arbeiten nur mit den Elementen eines Arrays statt mit den Buchstaben eines Strings.
