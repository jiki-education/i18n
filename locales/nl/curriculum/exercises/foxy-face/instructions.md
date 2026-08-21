---
title: "Vossenkop"
description: "Bouw een geometrische vossenkop van kleurrijke driehoeken."
en_md5: 095833a5b2117c2d26500103216bf247
---

Deze opdracht laat je kennismaken met de functie `triangle` (driehoek). Je gebruikt hem met 7 invoerwaarden. De eerste 6 invoerwaarden zijn paren coördinaten voor de drie hoekpunten. De laatste invoerwaarde is de `color`:

- `x1`, `y1`: het eerste hoekpunt
- `x2`, `y2`: het tweede hoekpunt
- `x3`, `y3`: het derde hoekpunt
- `color` (kleur): de kleur van de driehoek (bijvoorbeeld `"orange"`)

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="Diagram van de functie triangle" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Een vossenkop tekenen

Het is de bedoeling dat je met driehoeken een geometrische vossenkop bouwt:

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="Vossenkop" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

De kop is horizontaal symmetrisch (de linkerkant is identiek aan de rechterkant). En hij bestaat in totaal uit 8 driehoeken:

- Twee `"white"` wangen
- Twee `"brown"` oren
- Twee `"orange"` gezichtshelften
- Een `"charcoal"` neus (twee driehoeken)

(Zorg dat je precies die kleuren gebruikt bij het tekenen van de driehoeken, en vergeet niet te controleren dat je ze als _strings_ (tekenreeksen) schrijft!)

We hebben de omtrekken van een paar onderdelen alvast voor je getekend om je op weg te helpen. Als je de volgorde uit de comments in de code aanhoudt, merk je dat het net wat makkelijker gaat.

En om het je nog makkelijker te maken zijn alle gebruikte getallen deelbaar door 5 (zo zijn `5`, `10`, `15`, enz. geldig, maar `1`, `2`, `3`, `4`, `6`, `7`, `8`, `9`, `11`, enz. niet). Dit patroon ga je in de volgende opdrachten nog vaak tegenkomen.

Nog één laatste ding. Je kunt met je muis over het vlak bewegen om coördinaten te vinden. Dat is ideaal voor de linkerkant, maar omdat de rechterkant symmetrisch is: kun je die oplossen zonder dat je hoeft te hoveren?

Veel succes!
