---
title: "Korištenje `repeat` bez broja"
description: "Ostavljanje zagrada petlje `repeat` praznima kako bi Jiki nastavio ići dok mu nešto drugo ne kaže da stane."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Do sada, kad god koristiš petlju `repeat`, uvijek navedeš broj koji kaže koliko puta ponoviti. Ponovi pet puta, 10 puta, 40 puta. Ponekad to radiš i pomoću varijable. Ali Jikiju uvijek kažeš točno koliko puta treba ponoviti petlju. No ponekad unaprijed ne znamo koliko puta treba ponoviti. Sjeti se labirinta. Na samom početku ovog tečaja labirint rješavaš tako da ispišeš konkretne poteze. Vidiš labirint, prebrojiš korake i ispišeš točan broj poteza.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Labirint u kojem lik vidi put, prebroji korake i ispiše točno prave poteze"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Ali što ako ti kažem: „Napiši mi kôd koji može riješiti bilo koji labirint koji ti dam"? Taj labirint možda traži 10 koraka, ili 50, ili 200. Unaprijed nemaš pojma.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Nekoliko različitih labirinta raznih oblika i veličina, a Jiki razmišlja kako riješiti bilo koji od njih"
  width="402"
  height="400"
/>

Treba ti način da Jikiju jednostavno kažeš da samo nastavi dalje. Provjeravaj kamo možeš ići, donosi odluke, idi naprijed, iznova i iznova dok ne završiš.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki trči na pokretnoj traci i samo nastavlja iznova i iznova"
  width="428"
  height="400"
/>

A način za to je stvarno jednostavan. Samo nemoj ključnoj riječi `repeat` dati broj. Samo ostavi te zagrade praznima. Ako to napraviš, Jiki će samo nastaviti dalje dok mu nešto drugo ne kaže da stane. Kasnije ćemo vidjeti koje su to druge stvari. Ali za sada će samo nastaviti dalje dok vježba ne bude gotova, ili dok ne odluči da ide već cijelu vječnost, da mu treba stanka i da mu je dosta.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki se iscrpljen srušio na pokretnu traku nakon što je išao cijelu vječnost, spreman odustati i uzeti stanku"
  width="500"
  height="378"
/>
