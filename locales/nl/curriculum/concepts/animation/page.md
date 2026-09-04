---
title: "Animatie"
description: "Het oog laten denken dat er iets beweegt door de achtergrond opnieuw te schilderen en elk frame op een net iets andere plek opnieuw te tekenen."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Tot nu toe hebben we een `repeat`-lus (herhalen) gebruikt om dingen te tekenen, en elk nieuw ding dat we tekenden voegde iets toe aan de afbeelding. Tekenden we een nieuwe steen in een muur, dan vulde die een gat op. Tekenden we 10 cirkels, dan zagen we 10 cirkels op het scherm. Het is net een schilderij. Zodra je verf op de muur hebt gezet, verdwijnt die niet als je er iets nieuws naast schildert. Die blijft zitten. Maar wat als we iets willen laten bewegen?

Heb je weleens een flipboek gezien? Toen ik klein was, waren ze heel populair, nu wat minder. Een flipboek is een klein boekje waarin elke bladzijde een net iets andere tekening heeft. Als je snel door de bladzijden bladert, zien je ogen de tekeningen veranderen en denken je hersenen dat er iets beweegt. Er beweegt in werkelijkheid niets. Het zijn gewoon heel veel net iets verschillende plaatjes, achter elkaar. En zo werkt animatie in code precies. De truc is dezelfde. Voordat we een nieuwe scène tekenen, schilderen we het hele canvas over met een achtergrondkleur, een beetje zoals je aan een nieuwe bladzijde in je flipboek begint, en daarna veranderen we de scène een klein beetje, zodat het op beweging lijkt.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Een flipboek met een rennend stokfiguurtje, elke bladzijde net iets anders zodat het figuurtje lijkt te bewegen"
  width="500"
  height="274"
/>

Neem een bekend stuk code waarin we cirkels over het scherm tekenen: we zetten een variabele `position` (positie), en we hebben een `repeat`-blok waarin we een cirkel tekenen en daarna `position` één stap naar rechts verschuiven. Als we dat `repeat`-blok 100 keer uitvoeren, zien we 100 cirkels over het scherm.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Een spoor van 100 blauwe cirkels, van links naar rechts over het scherm getekend"
  width="500"
  height="197"
/>

Kijk nu eens wat er gebeurt als we gewoon één simpele rechthoek toevoegen, elke keer voordat we de cirkel tekenen.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

In plaats van een spoor van cirkels laten onze ogen zich nu foppen: we zien één cirkel die over het scherm lijkt te glijden.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Een serie frames, elk een schoon wit canvas met één blauwe cirkel, telkens een stap verder naar rechts"
  width="500"
  height="187"
/>

Elke keer dat we door de lus gaan, schilderen we een compleet nieuwe achtergrond, waarmee we alles bedekken wat er eerder stond, en daarna tekenen we de cirkel op zijn nieuwe plek.

Elke ronde door de lus is als een nieuwe bladzijde in het flipboek.

En het belangrijkste om hier te begrijpen is dat we de cirkel niet verplaatsen. De cirkel is geen object dat voorbijglijdt. Het is gewoon een tekening. Elke ronde door de lus schilderen we over de oude tekening heen en maken we een gloednieuwe, net iets verder naar rechts. Je oog voegt het allemaal samen en ziet beweging, maar in werkelijkheid zijn het gewoon heel veel losse tekeningen, achter elkaar.

Dit idee kun je gebruiken om een zonsondergang te maken. Je laat de zon bewegen, verandert de grootte, verandert de kleur. Het is allemaal dezelfde techniek. Zet een paar variabelen, schilder een schone achtergrond en teken alles. Werk de variabelen bij, en herhaal dat.
