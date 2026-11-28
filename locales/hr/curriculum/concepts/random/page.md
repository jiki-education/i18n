---
title: "Slučajni brojevi"
description: "Kako pomoću `Math.randomInt` s najmanjim i najvećim brojem dobiti drugi broj svaki put kad se funkcija izvrši."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

U programiranju često želimo upotrijebiti funkciju koja će nam svaki put vratiti drugi slučajni broj (_random number_ na engleskom).

To je korisno na razne načine i na raznim mjestima, ali posebno u kriptografiji, gdje se mnogo bavimo stvaranjem kodova koje dijelimo među računalima. Ti kodovi moraju biti slučajni kako ih nitko ne bi mogao provaliti.

Za to imaš na raspolaganju funkciju `Math.randomInt` (slučajni cijeli broj). Možda ćeš primijetiti da je u sredini točka. Kad dobiješ pristup većem broju funkcija, možemo ih organizirati u različite grupe da sve ostane pregledno, a dio `Math` (matematika) naziv je grupe kojoj ta funkcija pripada. On govori Jikiju na kojem dijelu police da traži, u ovom slučaju na dijelu `Math`. Točka jednostavno znači: idi na taj dio i pronađi funkciju. Ne brini previše o tome za sada. Upute u vježbama uvijek će ti reći koje su funkcije dostupne i kako ih koristiti. Važno je razumjeti da će mu ta funkcija, kad je Jiki pozove, svaki put vratiti drugi broj, ali uz jedno ograničenje. Funkcija ima dva ulaza. Prvi je najmanji broj koji stroj smije vratiti, a drugi najveći broj koji stroj smije vratiti. Pa ako funkciju `Math.randomInt` pozoveš s `10` i `13`, uvijek ćeš natrag dobiti `10`, `11`, `12` ili `13`. Ali svaki put drugi.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki se penje ljestvama do dijela Math na policama svog skladišta"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Stroj Math.randomInt s dva ulazna lijevka na vrhu"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Stroj Math.randomInt s brojevima 10 i 13 u svojim ulaznim lijevcima, koji daje 10, 11, 12 ili 13"
  width="488"
  height="400"
/>

Zamislimo da želiš nacrtati krug na slučajnoj poziciji na platnu. Možeš upotrijebiti `Math.randomInt` da svaki put dobiješ različite slučajne vrijednosti za `left` i `top`, ali s granicama, recimo, `10` i `90`, kako se ne bi preklopili ni izašli izvan platna. Svaki put kad pokreneš ovaj kôd, krug će biti nacrtan na malo drugom mjestu.
