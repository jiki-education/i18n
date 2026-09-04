---
title: "Dictionaries"
description: "Een pagina uit een spiraalblok waarop elke regel links een sleutel heeft en rechts de bijbehorende waarde, zodat je gelabelde gegevens hebt in plaats van een lijst."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Arrays zijn onze eerste keus als we een lijst van iets hebben: een lijst met mentoren, een lijst met scores, een lijst met ingrediënten, welke lijst dan ook, daarvoor gebruik je een array.

Maar er is nog een andere datastructuur (_data structure_ in het Engels) die ook heel gangbaar is, voor als je iets wilt dat wat complexer is dan een lijst.

Stel dat we wat informatie over mij willen opslaan: mijn naam, mijn leeftijd, waar ik geboren ben. Je zou daar een array voor kunnen gebruiken, maar dan is het niet echt duidelijk wat er aan de hand is.

Is Engeland waar ik geboren ben of waar ik woon? Is 42 mijn leeftijd of iets anders?

En als ik dit wil gebruiken, moet ik onthouden dat de eerste positie voor de naam is, de tweede voor de leeftijd en de derde voor de geboorteplaats. Het is allemaal een beetje rommelig, en het is rommelig omdat dit eigenlijk geen lijst van dingen is. Het is complexer dan dat. En daar komen _dictionaries_ (woordenboeken) om de hoek kijken. Een dictionary is een nieuw soort datastructuur. Het is je vijfde. Je hebt strings, getallen, booleans, arrays en nu dictionaries.

En ik wil dat je een dictionary ziet als een blaadje uit een spiraalblok.

Aan de linkerkant staan de kopjes, de woorden `"name"`, `"age"`, `"birthplace"`, en die noemen we sleutels (_keys_ in het Engels).

En aan de rechterkant, naast elk kopje, staan de eigenlijke gegevens, `"Jeremy"`, `42`, `"England"`, en die noemen we waarden (_values_ in het Engels).

Net als een array is een dictionary één ding. Het is één pagina uit een notitieblok. En net als bij arrays kan Jiki hem in een variabele stoppen, in een doos, of als invoer voor een functie gebruiken, of hij kan een dictionary uit de resultaatglijbaan halen. Zo ziet een dictionary er in code uit. We gebruiken accolades om het begin en het einde aan te geven, en daarbinnen staan paren: een sleutel links, een dubbele punt, en dan de waarde rechts. En tussen elk paar staat een komma. Jiki ziet dit dus en pakt zijn spiraalblok erbij. Hij schrijft `name`, `"Jeremy"`, `age`, `42`, enzovoort voor elk paar.

En als hij klaar is, scheurt hij het blaadje eraf en stopt het in een doos met het label `person` (persoon).

Er zijn een paar regels om te kennen. Sleutels zijn altijd strings. Ze moeten aanhalingstekens om zich heen hebben, en elke sleutel moet uniek zijn. Je kunt niet twee sleutels met de naam `name` in dezelfde dictionary hebben.

De waarden mogen hetzelfde zijn als je wilt, maar de sleutels moeten verschillen.

En de waarden kunnen van alles zijn. Het kunnen strings, getallen, booleans, arrays of zelfs andere dictionaries zijn.

Je kunt ook een lege dictionary hebben, net zoals we een lege array hadden, en daar kunnen we mee beginnen en er later op voortbouwen.

Je hebt nu dus een dictionary, maar hoe haal je er iets uit?

We gebruiken dezelfde syntax met vierkante haakjes (`[]`) als bij arrays en strings, maar in plaats van een positienummer zetten we er een sleutel in. Als we dus iemands naam uit een dictionary willen halen, schrijven we:

```javascript
person["name"] // "Jeremy"
```

En dat zegt tegen Jiki dat hij in de dictionary `person` moet kijken, de sleutel `"name"` moet vinden en de waarde ervan eruit moet halen. Jiki gaat naar de doos `person`, haalt de pagina uit het notitieblok, loopt alle sleutels langs tot hij `"name"` vindt, leest dan de waarde af, `"Jeremy"`, en stopt die in een nieuwe doos met de naam `name`.

Vierkante haakjes betekenen altijd hetzelfde. Je reikt ergens in en haalt er iets uit. Bij arrays en strings gebruik je een getal om aan te geven van welke positie je iets wilt pakken. Bij dictionaries gebruik je een string voor de sleutel.

Het is hetzelfde idee, alleen met een iets andere syntax.
