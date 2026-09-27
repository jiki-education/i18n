---
title: "After Party"
description: "Finde heraus, wie viele Gäste eine Berühmtheit mitbringen darf, mithilfe von zwei Arrays, die zueinander passen."
en_md5: 622d23b4488d6bc76957579a7a5e8993
---

Wir spielen wieder die Rolle eines Türstehers. Diesmal haben wir es aber mit A-Promis auf der After Party zu tun.

Wenn diese Leute auf deiner Party auftauchen, erwarten sie, dass du sie allein an ihrem Vornamen erkennst. Brad Pitt wird sich nicht die Mühe machen, dir seinen Nachnamen zu verraten. Er sagt einfach „Brad“ und schaut dich dann an, als wärst du derjenige, der sich seltsam benimmt.

Heute stehen zwei Listen auf deinem Klemmbrett. Die erste ist `names`, die vollständigen Namen aller Eingeladenen. Die zweite ist `plusOnes`, wie viele zusätzliche Personen jeder dieser Gäste mitbringen darf (seine „Plus-Ones“, also die zusätzlichen Gäste, die jemand mitbringen darf). Die beiden Listen wurden Eintrag für Eintrag zusammen geschrieben, in derselben Reihenfolge, also passen sie zueinander. Der dritte Eintrag des Arrays `names` gehört zum Beispiel zu derselben Person wie der dritte Eintrag des Arrays `plusOnes`.

Schreibe eine Funktion namens `plusOnesFor`. Die Funktion hat drei Eingabewerte: das Array `names`, das Array `plusOnes` und den **Vornamen** der Person, die gerade vor dir steht. Du sollst die Anzahl der zusätzlichen Gäste zurückgeben, die diese Person mitbringen darf.

Sei aber vorsichtig. Es bildet sich eine Schlange, und diese Leute stehen nicht geduldig an. „Brad“ bedeutet Brad Pitt, nicht Bradley Cooper. Und ein oder zwei von ihnen sind berühmt genug, dass sie ihren Nachnamen ganz weggelassen haben.

Manche Gäste sind eingeladen, dürfen aber niemanden mitbringen, also ist `0` eine völlig gute Antwort für einen Namen, der auf der Liste steht. Jemand, der gar nicht auf der Liste steht, ist eine ganz andere Sache, und für ihn sollst du die Zeichenkette `"Not on the list!"` zurückgeben, genau so, wie sie geschrieben steht.

### Array-Methoden und -Eigenschaften

Genau wie Strings haben auch Arrays Methoden und Eigenschaften. In dieser Übung kannst du zum Beispiel die Eigenschaft `.length` verwenden. Sie funktioniert genauso wie die Version für Strings, nur sagt sie dir jetzt, wie viele Elemente im Array sind, statt wie viele Buchstaben im String. Zum Beispiel:

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

Viel Spaß!
