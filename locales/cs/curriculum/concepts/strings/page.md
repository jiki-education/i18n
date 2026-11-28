---
title: "Představujeme řetězce"
description: "Kusy textu v uvozovkách (písmeno, slovo, věta nebo celý odstavec), které Jiki zapisuje na papírek."
en_md5: 4947f6ac1b3eb8eb85d2dea9b82ffc40
---

Když chceš použít číslo, můžeš ho prostě napsat a Jiki bude vědět, co máš na mysli. Ale co když chceš použít písmeno, slovo nebo větu? Třeba u funkce `rectangle` (obdélník) nebo `circle` (kruh): co kdyby měla ještě jednu vstupní štěrbinu navíc, do které se zadává barva? Jak bychom tu barvu zapsali, abychom ji mohli do stroje vložit? Když napíšeme prostě slovo `green` (zelená) nebo `blue` (modrá), Jiki si bude myslet, že mluvíme o nějakém stroji na polici, a řekne: „Žádný stroj jménem ‚green‘ neexistuje. Nevím, co mám dělat.“

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="Jiki zmateně stojí vedle stroje na obdélníky a nad hlavou se mu vznášejí otazníky"
  width="446"
  height="400"
/>

Máme na to tedy pravidlo: kdykoli potřebujeme použít text, musíme ho dát do uvozovek, do dvojitých uvozovek. A když něco dáš do uvozovek takhle, Jiki vytáhne papírek a napíše na něj, co je v těch uvozovkách. A takovým papírkům říkáme řetězce (anglicky _strings_).

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="Jiki píše na papírek slovo green, a tím z něj vzniká řetězec"
  width="398"
  height="400"
/>

Řetězec může být jediné písmeno, slovo, věta, odstavec, klidně i celá kniha. Platí pravidlo: když je to text, dáme ho do uvozovek a vznikne z něj řetězec.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="Tabule s řetězci různé délky v uvozovkách: jediné písmeno, slovo, věta a několikařádková adresa"
  width="500"
  height="398"
/>

Takže když chceme modrý obdélník, napíšeme číslo pro jeho levou pozici, horní pozici, šířku a výšku. Ale jako pátý vstup uvedeme `"blue"` v uvozovkách.

```javascript
rectangle(10, 20, 30, 40, "blue")
```

Jiki by sundal stroj z police a do prvních čtyř štěrbin by dal mince. Pak by napsal blue na papírek, ten by strčil do páté štěrbiny a spustil stroj.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="Jiki zasouvá modrý papírek do páté štěrbiny stroje na obdélníky, v prvních čtyřech štěrbinách jsou mince 10, 20, 30 a 40"
  width="500"
  height="392"
/>

Řetězec je jedno z těch odborných slov, která lidem na začátku trochu nahánějí strach, ale ve skutečnosti prostě znamená text. Velmi rychle si na něj zvykneš. Není na tom nic kouzelného.
