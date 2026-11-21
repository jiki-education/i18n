---
title: "Vädersymboler"
description: "Rita en väderprognos för sex dagar utifrån en lista med beskrivningar."
en_md5: 18bc1bf16ffc94d81bfa81a93faa9a7f
---

Du har fått uppdraget att bygga en väderprognos för sex dagar. Men i stället för traditionella väderdata ger chefen dig beskrivningar av vädret utifrån hur han känner inför det (till exempel ”Snowboarding time! 🏂” eller ”Miserable 😩”).

Du får en array med sex väderbeskrivningar, en för varje dag, och din uppgift är att rita varje dags väder i en egen låda.

Prognosen visas som ett rutnät med sex lådor, en för varje veckodag från måndag till lördag. Beskrivningarna ligger i ordning: den första (låda `0`) är måndagens väder, den andra (låda `1`) är tisdagens, och så vidare fram till lördagen (låda `5`). (Din chef lämnar aldrig huset på söndagar, så han bryr sig inte om vädret, och därför kan vi aldrig rapportera det ...)

## Så ritar du en dag

Vi har gett dig funktionen `draw` (rita) som sköter allt bildarbete åt dig. Din uppgift är att lista ut vilka element som ska in i den.

```js
draw(box, day, elements)
```

- `box` är lådan du ska rita i (`0` till `5`).
- `day` är veckodagen som lådan ska märkas med, till exempel `"Monday"`.
- `elements` är en array med vädersymboler som ska visas (se nedan för detaljer).

Veckodagarna är, i ordning, `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"` och `"Saturday"`.

Så om den första dagen är `"Exciting 🤩"` skriver du:

```js
draw(0, "Monday", ["cloud", "snow"])
```

## Vad varje beskrivning betyder

Varje beskrivning motsvarar en bestämd array med symboler:

- `"Sunny ☀️"`: `["sun"]`
- `"Dull 😴"`: `["cloud"]`
- `"Miserable 😩"`: `["cloud", "rain"]`
- `"Hopeful 🤞"`: `["sun", "cloud"]`
- `"Rainbow territory! 🌈"`: `["sun", "cloud", "rain"]`
- `"Exciting 🤩"`: `["cloud", "snow"]`
- `"Snowboarding time! 🏂"`: `["sun", "cloud", "snow"]`

## Din uppgift

Gå igenom arrayen `days` en dag i taget. För varje beskrivning gör du om den till rätt array med symboler och anropar `draw` för att rita den i den dagens låda, märkt med rätt veckodag.
