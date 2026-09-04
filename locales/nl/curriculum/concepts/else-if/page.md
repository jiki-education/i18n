---
title: "Werken met `else if`-ketens"
description: "Meerdere `else if`-clausules aan elkaar koppelen om verschillende voorwaarden op volgorde te controleren, waarbij alleen het eerste blok wordt uitgevoerd waarvan de voorwaarde waar is."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Je hebt gezien hoe `if` en `else` je twee paden geven: doe het ene als een voorwaarde waar is, en doe het andere als die onwaar is. Maar wat als je meer dan twee mogelijkheden hebt?

Stel je voor dat onze uitsmijter kaartjes verkoopt. Ben je jonger dan dertien, dan krijg je een kinderkaartje. Tussen dertien en twintig krijg je een tienerkaartje. Ben je twintig of ouder, dan krijg je een kaartje voor volwassenen. Je hebt nu dus drie verschillende uitkomsten. Hiervoor kunnen we nog een if-statement toevoegen na de else. We kunnen dus zeggen: “Als dit, doe dan dit. Anders, als dit, doe dan dat. Anders, doe dit andere.” In dit voorbeeld ziet Jiki de if en controleert hij de eerste voorwaarde. Is zestien kleiner dan dertien? Nee. Dus gaat hij door naar de else if. Is zestien kleiner dan twintig? Ja, dat is waar. Dus voert hij dat blok uit en geeft hij een tienerkaartje. Maar daarna is hij klaar. Hij controleert verder niets meer. Hij kijkt helemaal niet naar die laatste else. Zodra Jiki een voorwaarde vindt die waar is, voert hij dat blok uit en slaat hij alles daaronder over.

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
  alt="Drie kaartjes met de labels CHILD, TEEN en ADULT, één voor elke uitkomst van de leeftijdscontrole"
  width="500"
  height="142"
/>

Dit is het belangrijkste om te begrijpen. Er wordt altijd maar één blok uitgevoerd. Jiki werkt deze keten van boven naar beneden af, vindt de eerste voorwaarde die waar is, voert dat blok uit en gaat verder.

Nu is er nog één ding dat je echt goed moet begrijpen, want hier gaan mensen vaak de mist in. Er is een subtiel maar heel belangrijk verschil tussen twee losse if-statements schrijven en else if gebruiken. Stel je voor dat we een programma maken dat iemand een gewone prijs of een bonusprijs geeft, afhankelijk van zijn score. Kijk eens naar deze twee mogelijkheden. De ene gebruikt else if en de andere gebruikt twee losse `if`-statements. Wat gebeurt er anders?

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

In het eerste geval, met de else if, controleren we op een hoge score en geven we de bonusprijs, en daarna voeren we de else if niet meer uit. Iemand met een score boven de honderd krijgt dus alleen de bonusprijs.

Maar in het tweede voorbeeld staan de twee ifs helemaal los van elkaar. Allebei worden ze uitgevoerd en allebei zijn ze waar. Deze persoon krijgt dus twee prijzen. In het eerste geval één prijs. In het tweede geval twee prijzen. Neem even de tijd om er zeker van te zijn dat je dit echt begrijpt.

Het is trouwens goed om te weten dat allebei correct kunnen zijn, afhankelijk van hoe het spel is ontworpen. Misschien krijgt de deelnemer een gewone prijs én een bonusprijs, of misschien wordt de gewone prijs gewoon opgewaardeerd naar de bonusprijs. Geen van beide stukjes code is goed of fout. Ze zijn gewoon nuttig in verschillende situaties. Maar je moet wel weten welke van de twee je wilt gebruiken.
