---
title: "Relationele zon"
description: "Plaats een zon waarbij alles uit variabelen wordt berekend."
en_md5: d8de4704a25f3733ddaaea16f0232005
---

In deze opdracht is het je taak om met rekenwerk en variabelen een zon in de rechterbovenhoek van de lucht te plaatsen. De belangrijkste voorwaarde is dat de rand van de zon altijd op een vaste **afstand** van de rand van het canvas blijft, hoe groot de zon ook is.

We hebben bovenaan het bestand al vier variabelen (_variables_ in het Engels) voor je klaargezet:

- `canvasSize` (de grootte van het canvas): de grootte van het canvas, namelijk `100`.
- `color` (de kleur): staat op `"yellow"`.
- `gap` (de tussenruimte): hoe ver de rand van de zon van de boven- en rechterrand van het canvas af zit.
- `radius` (de straal): de straal van de zon.

### Een proces in twee stappen

Om deze opdracht op te lossen, doe je twee dingen.

#### 1. Definieer afgeleide variabelen

Definieer de variabelen `sunX` (de x-positie van de zon) en `sunY` (de y-positie van de zon), die `gap`, `radius` en `canvasSize` gebruiken om het middelpunt van de zon in de rechterbovenhoek te zetten.

#### 2. Teken de cirkel

Teken een cirkel met `sunX`, `sunY`, `radius` en `color`.

## Flexibiliteit

Standaard staat `gap` op 10 en `radius` op 15. Los de opdracht eerst met die waarden op, zodat je de achtergrond kunt gebruiken om alles goed uit te lijnen. Als je code klopt, zie je de cirkel op de juiste plek op de pagina verschijnen.

Om de opdracht te halen mag je de waarde echter niet zomaar “hardcoden” (dus op één vast getal zetten): `sunX` en `sunY` moeten berekeningen zijn waarin andere variabelen voorkomen.

Heb je de opdracht gehaald, klik dan op “Ruim mijn code op” en probeer bovenaan het bestand de waarden van `gap` en `radius` te veranderen. Voer je code opnieuw uit en je ziet de zon groeien of verschuiven, terwijl hij netjes in de hoek blijft.

Ben je klaar, dan kun je rechtsboven op “Dashboard” klikken om gewoon verder te gaan.
