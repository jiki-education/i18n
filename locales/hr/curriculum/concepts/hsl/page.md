---
title: "HSL boje"
description: "Kako sastaviti boje od nijanse (tona, 0–360), zasićenja (koliko je boja živa, 0–100) i osvijetljenosti (koliko je boja svijetla, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL nam daje posve drukčiji način razmišljanja o bojama nego RGB. HSL je kratica za nijansu (_hue (H)_ na engleskom), zasićenje (_saturation (S)_ na engleskom) i osvijetljenost (_lightness (L)_ na engleskom). Postoji funkcija `hsl` koja prima tri broja, jedan za nijansu, jedan za zasićenje i jedan za osvijetljenost, a vraća boju. Pogledajmo što znače te tri riječi.

```javascript
hsl(hue, saturation, lightness)
```

Nijansa je ton boje koji želiš i ide od nule do 360. Zamisli dugu. Ja o tome razmišljam ovako. S lijeve strane imamo crvenu, pa narančastu, žutu, zelenu, plavu, ljubičastu i, zapravo, vraćamo se sve do crvene. Ako kažeš nula, počinješ s lijeve strane, a to je crvena. Ako kažeš `120`, tražiš zelenu. `230` je plava. Možeš to zamisliti i kao krug boja, što 360 zapravo i jest. To je broj stupnjeva u krugu. Ja uvijek samo pogledam brojeve koji mi trebaju, pa ne brini previše oko toga da ih zapamtiš, ali lijepo je znati o čemu se radi. Dakle, to je nijansa, odnosno ton. Zatim imamo zasićenje, koje govori koliko je boja živa. Ide od nule do 100. Na nuli dobiješ samo sivu. U njoj nema nikakve boje ni tona. Na 100 dobiješ punu, živu, jarku boju. A onda imamo osvijetljenost. Osvijetljenost govori koliko je boja svijetla i ide također od nule do 100. Na nuli dobiješ crnu. Bez obzira na to koju si nijansu odabrao, dobiješ crnu. U njoj nema svjetla. A na 100 dobiješ bijelu. Bez obzira na sve ostalo, puna je svjetla, pa je bijela. 50 je točno u sredini, normalna boja. Možeš to zamisliti kao klizač kojim boju činiš svjetlijom ili tamnijom.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Krug boja i duga koji pokazuju da je 0 crvena, 120 zelena, a 240 plava"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Klizač zasićenja od 0 (siva) preko 50 do 100 (puna živa boja)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Klizač osvijetljenosti od 0 (crna) preko 50 do 100 (bijela)"
  width="500"
  height="398"
/>

Ako želimo normalan crveni krug, koji bismo s RGB-om zapisali kao 255, nula, nula, sva crvena, nimalo zelene, nimalo plave, ovdje bismo upotrijebili nula, 100, 50. Nula za crvenu nijansu, 100 za zasićenje, puna boja, i 50 za svjetlinu, što je normalna razina svjetline. Ako od tog kruga želimo zeleni krug, dovoljno je nijansu promijeniti u `120`. Ako želimo tamniju zelenu, možemo smanjiti osvijetljenost na `25`.

```javascript
hsl(0, 100, 50) // crvena
hsl(120, 100, 50) // zelena
hsl(120, 100, 25) // tamnozelena
```

Ako želimo blažu zelenu, možemo iz nje uzeti malo boje, malo zasićenja, recimo spustiti ga na `30`.

Ako želiš jarku, vruću ružičastu, nijansa od oko 300 je ružičasta, a zatim zasićenje podignemo na 100 da bude stvarno živa, i pojačamo osvijetljenost na oko 60.

HSL je izvrstan kad želiš kružiti kroz boje. Ako želiš dugu, samo stalno povećavaj nijansu.
