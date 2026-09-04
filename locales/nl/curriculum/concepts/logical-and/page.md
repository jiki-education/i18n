---
title: "De `&&`-operator (en)"
description: "Twee voorwaarden combineren met `&&`, zodat de hele voorwaarde alleen waar is als beide delen waar zijn."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Als ik je zou vragen om de deur alleen open te doen voor iemand die ouder is dan 20, zou je waarschijnlijk wel weten wat je moet doen. Maar wat als je moet controleren of iemand ouder is dan 20 _en_ de juiste outfit draagt? Dan moet je dus twee verschillende voorwaarden tegelijk controleren. Hoe zou je dat aanpakken?

Misschien zou je een genest (_nested_ in het Engels) if-statement kunnen gebruiken, een beetje zoals de geneste lussen die we eerder hadden. Je zou dan kunnen zeggen: als `age` groter is dan `20`, dan gaan we dit codeblok in, en daarin komt nog een if voor `outfit` is gelijk aan `"disco"`, met nog een accolade en een nieuw codeblok. Dat zou werken, maar het wordt al snel een rommeltje, zeker als je veel voorwaarden wilt hebben.

Gelukkig is er een makkelijkere manier: je kunt voorwaarden maken die uit meerdere delen bestaan. In plaats van maar één ding te controleren in de voorwaarde, kunnen we er twee, drie of nog meer controleren. Daarvoor gebruiken we het sleutelwoord `and`. Helaas is het and-sleutelwoord in JavaScript niet echt het woord and, zoals in sommige andere talen wel het geval is. In plaats daarvan schrijf je twee ampersands naast elkaar. Dat zul je gewoon moeten onthouden. Het is vervelend, maar het is nu eenmaal zo, en je went er snel aan.

We kunnen dit dus gebruiken om een ingewikkeldere voorwaarde te maken. We kunnen zeggen: als `age` groter is dan `20` en de `outfit` is `"disco"`, dan gaan we verder. Als `age` kleiner is dan `20` of de `outfit` niet `"disco"` is, dan is het hele statement, de hele voorwaarde, onwaar. Als je ooit logica hebt gestudeerd, misschien wat met elektronica hebt gedaan of wat gevorderdere wiskunde hebt gehad, dan zal dit heel natuurlijk aanvoelen. Zo niet, dan pik je het snel op.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Er is één ding waar mensen bij zowel and als or over struikelen, en dat is dat elke kant van de en/of (_and/or_ in het Engels) een volledige vergelijking moet zijn. Dus zelfs als je aan beide kanten dezelfde variabele vergelijkt, moet je die herhalen. Je kunt niet schrijven `if age is greater than 13 and less than 20`. Je moet schrijven `if age is greater than 13 and age is less than 20`. Beide kanten moeten volledige vergelijkingen zijn.

```javascript
if (age > 13 && age < 20)
```
