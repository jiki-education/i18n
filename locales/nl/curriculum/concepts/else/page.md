---
title: "Het sleutelwoord `else`"
description: "Een `else`-clausule toevoegen na een `if`, zodat een ander blok code wordt uitgevoerd als de voorwaarde onwaar blijkt te zijn."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Met if-statements kun je voorwaarden controleren en code alleen uitvoeren als iets waar is. Laten we nu de vaste partner van if introduceren: `else`.

Bij een if-statement voert Jiki het codeblok uit als de voorwaarde waar is, en slaat hij dat codeblok over als de voorwaarde onwaar is. Maar wat als je wilt dat Jiki het ene doet als de voorwaarde waar is, en iets anders als die onwaar is? Daar is else voor. We kunnen een else-clausule (_else clause_ in het Engels) zetten na de sluitende accolade van de if, en Jiki voert die uit als de voorwaarde van de if onwaar is. Terug naar het voorbeeld van de uitsmijter bij de club: we hebben nu de keuze om de deur open te doen of om iemand weg te sturen, wat waarschijnlijk beter is dan iemand volledig negeren, zoals we eerder deden. Zie het als een splitsing in de weg. Jiki komt bij die splitsing, hij controleert de voorwaarde, en dan kan hij de ene kant op als die waar is, of de andere kant als die onwaar is. Maar hij gaat nooit allebei de kanten op.

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
  alt="Een splitsing in de weg bij de deur van de club: doe de deur open als de voorwaarde waar is, stuur de persoon weg als die onwaar is"
  width="500"
  height="332"
/>

Maar wat als je meer dan twee mogelijkheden hebt? Stel dat onze uitsmijter kaartjes verkoopt. Onder de dertien krijg je een kinderkaartje. Tussen dertien en twintig krijg je een tienerkaartje. Twintig of ouder, dan is het een kaartje voor volwassenen. Je hebt nu dus drie verschillende uitkomsten. Hiervoor kunnen we nog een if-statement toevoegen na de else. We kunnen dus zeggen: “Als dit, doe dan dit. Anders, als dit, doe dat. Anders, doe dit andere.” In dit voorbeeld ziet Jiki dus de if en controleert hij de eerste voorwaarde. Is zestien kleiner dan dertien? Nee. Dus gaat hij door naar de else if. Is zestien kleiner dan twintig? Ja, dat is waar. Dus voert hij dat blok uit en geeft hij een tienerkaartje. Maar dan is hij klaar. Hij controleert verder niets meer. Hij kijkt helemaal niet naar die laatste else. Zodra Jiki een voorwaarde vindt die waar is, voert hij dat blok uit en slaat hij alles daaronder over.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Dit is het belangrijkste om te begrijpen. Er wordt altijd maar één blok uitgevoerd. Jiki werkt de voorwaarden van boven naar beneden af, vindt de eerste die waar is, voert dat blok uit en gaat verder.

Nu is er één ding dat je echt goed moet begrijpen, want hier gaan mensen vaak de fout in. Er is een subtiel maar heel belangrijk verschil tussen twee losse if-statements schrijven en else if gebruiken. Stel dat we een programma maken dat afhankelijk van iemands score een gewone prijs of een bonusprijs uitdeelt. Kijk eens naar deze twee mogelijkheden. De ene gebruikt else if en de andere gebruikt twee losse `if`-statements. Wat gebeurt er anders?

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

In het eerste geval, met de else if, controleren we of de score hoog is en geven we de prijs, en daarna voeren we de else if niet uit. Iemand met een score boven de honderd krijgt dus alleen de bonusprijs.

Maar in het tweede voorbeeld zijn de twee ifs helemaal onafhankelijk van elkaar. Allebei worden ze uitgevoerd en allebei zijn ze waar. Deze persoon krijgt dus twee prijzen. In het eerste geval één prijs. In het tweede geval twee prijzen. Neem even de tijd om zeker te weten dat je dat echt begrijpt.

Het is ook interessant om op te merken dat allebei de versies goed kunnen zijn, afhankelijk van hoe het spel is ontworpen. Misschien krijgt de deelnemer een gewone prijs én een bonusprijs, of misschien wordt de prijs gewoon opgewaardeerd naar de bonusprijs. Geen van beide stukken code is goed of fout. Ze zijn gewoon nuttig in verschillende situaties. Maar je moet wel weten welke van de twee je wilt gebruiken.
