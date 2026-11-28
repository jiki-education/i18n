---
title: "Boje"
description: "Dva načina da zadaš bilo koju boju. RGB miješa crveno, zeleno i plavo svjetlo. HSL koristi nijansu, zasićenje i osvijetljenost."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Ako ikad s kôdom radiš nešto vizualno (a čak i ako se želiš baviti podacima i misliš da je sve to crtanje pomalo dosadno, prikazivanje podataka vizualnim putem ključna je vještina), boje možeš izraziti na dva različita načina. Boje već zadaješ njihovim imenima na engleskom, poput red ili yellow, i to kao posljednji ulaz u funkcije za crtanje. To je bio brz i zgodan način da upotrijebiš boju, ali je prilično ograničen. Postoji samo nekoliko imenovanih boja koje možemo koristiti. Zato ćemo sad pogledati dva načina da izraziš bilo koju boju, a zovu se RGB i HSL.

RGB nam dopušta da o bojama razmišljamo kao o mješavini crvene, zelene i plave. To je ono što znači kratica RGB: crvena (_red (R)_ na engleskom), zelena (_green (G)_ na engleskom) i plava (_blue (B)_ na engleskom). Ako se sjećaš iz škole kako se miješala boja, ideja je slična, samo što ovdje umjesto boje miješamo svjetlo.

U mnogim vježbama imat ćeš funkciju koja se zove `rgb`. Prima tri broja kao ulaz: jedan za crvenu, jedan za zelenu i jedan za plavu, a vraća boju.

Brojevi koje možeš zadati kao ulaz idu od nule do `255`. Nula znači da te boje ne želimo ni malo, a `255` da je pomiješamo najviše što ide. Ako dakle `rgb` pozovemo s `255`, nula i nula, kažemo da želimo svu crvenu. Sjeti se da je `255` najveći broj koji ondje možeš staviti. Zeleno i plavo ne želimo ni malo, pa su oba nula. Na izlazu dobijemo crvenu, spremimo ju u varijablu i onda upotrijebimo u funkciji `circle`, baš kao što smo već radili s imenovanim stringovima. A što ako `rgb` pozovemo s nula, `255`, nula? Sad kažemo: bez crvene, sva zelena, bez plave. Dobijemo zeleni krug. A što ako želimo žutu? Žuta je mješavina crvene i zelene. Kažemo dakle: svu crvenu, svu zelenu i ništa plave, i to će nam dati žutu. Možemo koristiti i manje brojeve. Ako želimo malo crvene, ništa zelene i puno plave, dobit ćemo ljubičastu. Puno crvene, malo zelene i još malo više plave daje ružičastu. To je dakle RGB: miješamo crvenu, zelenu i plavu i dobivamo različite kombinacije.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Tri kruga crvene, zelene i plave svjetlosti koji se preklapaju i miješaju u žutu, magentu, cijan i bijelu"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Pogledajmo sad HSL, koji nam daje posve drugačiji način razmišljanja o bojama. A što znači kratica HSL? Nijansa (_hue (H)_ na engleskom), zasićenje (_saturation (S)_ na engleskom) i osvijetljenost (_lightness (L)_ na engleskom). Slično kao kod RGB-a, imaš funkciju koja se zove `hsl`. Prima tri broja: jedan za nijansu, jedan za zasićenje i jedan za osvijetljenost, a vraća boju. Pogledajmo pobliže što znače te tri riječi.

Nijansa je ton (_shade_ na engleskom) boje koji želiš, i kreće se od nule do 360. Možda zamisli dugu. Ja o tome razmišljam ovako. Lijevo imamo crvenu, pa narančastu, žutu, zelenu, plavu, ljubičastu i zapravo se vraćamo sve do crvene. Ako kažeš nula, počinješ lijevo, i to je crvena. Ako kažeš `120`, tražiš zelenu. `230` je plava. O tome možeš razmišljati i kao o krugu boja (_color wheel_ na engleskom), a to je ono što 360 zapravo jest: broj stupnjeva u krugu. Ja uvijek samo pogledam brojeve koji mi trebaju, pa ne brini previše oko toga da ih zapamtiš, ali lijepo je znati što se događa. To je dakle nijansa, odnosno ton. Sljedeće je zasićenje, koje govori koliko je boja živa. Ide od nule do 100. Na nuli dobiješ samo sivu. U njoj nema nikakve boje, nikakvog tona. Na 100 dobiješ punu, jarku boju. A onda imamo osvijetljenost. Osvijetljenost govori koliko svjetla ima u boji, a ide također od nule do 100. Na nuli dobiješ crnu. Koju god nijansu odabereš, dobiješ crnu. U njoj nema svjetla. Na 100 dobiješ bijelu. Bez obzira na sve ostalo, puna je svjetla, pa je bijela. 50 je točno u sredini, normalna boja. Možeš o tome razmišljati kao o klizaču (_slider_ na engleskom) kojim boju činiš svjetlijom ili tamnijom.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Duga i krug boja koji pokazuje nijansu od 0 (crvena) preko 120 (zelena) do 240 (plava)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Klizač zasićenja od 0 (siva) preko 50 do 100 (jarka magenta)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Klizač osvijetljenosti od 0 (crna) preko 50 (puna boja) do 100 (bijela)"
  width="500"
  height="398"
/>

Ako dakle želimo običan crveni krug, koji bismo s RGB-om zapisali kao 255, nula, nula (svu crvenu, ništa zelene, ništa plave), ovdje ćemo upotrijebiti nula, 100, 50. Nula za crvenu nijansu, 100 za zasićenje, punu boju, i 50 za osvijetljenost, što je uobičajena razina svjetline. Ako od toga želimo zeleni krug, dovoljno je promijeniti nijansu na `120`. Ako želimo tamniju zelenu, smanjit ćemo osvijetljenost na `25`.

Ako želimo mutniju zelenu, možemo iz nje izvući malo boje, malo zasićenja, recimo spustiti ga na `30`.

Ako želiš jarku, vatrenu ružičastu: nijansa oko 300 je ružičasta, pa zasićenje podignemo na 100 da bude stvarno živa, a pojačamo i osvijetljenost, na oko 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Tako imamo dva različita načina da izrazimo boju, i korisna su u različitim situacijama. RGB je odličan kad želiš podesiti jednu konkretnu komponentu: koliko crvene, koliko zelene, koliko plave. HSL je odličan kad želiš proći kroz niz boja. Ako želiš dugu, samo stalno povećavaj nijansu.
