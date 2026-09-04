---
title: "Relationele sneeuwpop"
description: "Bouw je sneeuwpop opnieuw, zodat alle maten worden afgeleid van één variabele."
en_md5: 1753f8d873e9a5b58885cc1daee5ea5d
---

In deze opdracht bouwen we opnieuw een sneeuwpop, maar net als in de vorige opdracht doen we dat zo dat alles met rekenkundige bewerkingen kan worden afgeleid van één enkele variabele `size` (grootte).

Afhankelijk van de `size` die je kiest, moet de sneeuwpop groeien.

<img
  src="/static/images/exercise-assets/relational-snowman/sizes.webp"
  alt="Sneeuwpop in de groottes 1 tot en met 5"
  style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>

### Hoe het werkt

- De linkerbovenhoek van het tekenvlak is `0,0`. De rechterbenedenhoek is `100,100`.
- Je hebt een vooraf geschreven variabele `snowmanX` (de x-positie van de sneeuwpop) voor het midden van de tekening, en een variabele `size` die je kunt veranderen van `1` tot `5` om de sneeuwpop te laten groeien.
- Alle andere variabelen moet je afleiden met rekenkundige expressies.
- De straal van het hoofd is `size * 2`, de straal van het lijf is `size * 3` en de straal van de onderste bol is `size * 4`.
- De cirkels moeten elkaar raken: het lijf zit direct boven de onderste bol, en het hoofd zit direct boven het lijf. (Onze sneeuwpop staat wat wankeler dan in de vorige opdrachten: elke sneeuwbal ligt precies op de bal eronder, zonder dat ze in elkaar overlopen. Het moet wel een heel ijzige dag zijn!)
- De onderkant van de onderste cirkel zit op `size` afstand van de onderrand.
- Je moet de middelpunten van alle drie de sneeuwballen berekenen.

### Variabelen

Je taak is om deze variabelen in te stellen op basis van de instructies hierboven.

- `headRadius` (straal van het hoofd): leid af van `size`
- `bodyRadius` (straal van het lijf): leid af van `size`
- `baseRadius` (straal van de onderste bol): leid af van `size`
- `baseY` (y-positie van de onderste bol): leid af van `size` en `baseRadius` (de onderste bol staat op de grond)
- `bodyY` (y-positie van het lijf): leid af van `baseY`, `baseRadius` en `bodyRadius`
- `headY` (y-positie van het hoofd): leid af van `bodyY`, `bodyRadius` en `headRadius`

### Speel met de grootte

Je kunt de grootte veranderen van `1` tot `5`, en dan moet de sneeuwpop groeien. Vergeet niet om op “Code uitvoeren” te klikken nadat je die hebt aangepast.
