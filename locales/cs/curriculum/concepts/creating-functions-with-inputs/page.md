---
title: "Přidání vstupů do funkcí"
description: "Přidání vstupních štěrbin do vlastních funkcí, aby podle hodnot, které do nich vložíš, dělaly různé věci."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Funkce, které už máš, dělají pokaždé úplně to samé. `turnAround` (otoč se) se vždycky dvakrát otočí doleva. `shootIfAlienAbove` (vystřel, pokud je nahoře mimozemšťan) vždycky zkontroluje okolí a vystřelí.

Ale vzpomeň na funkce, se kterými se v kurzu potkáváš: každá dělá různé věci podle toho, co do ní vložíš. Funkce Rectangle bere jako vstupy levou a horní souřadnici, šířku a výšku, a pak podle toho, co jí řekneš, nakreslí jiný obdélník.

Teď přidáme vstupní štěrbiny i do tvých vlastních funkcí.

K něčemu takovému potřebuješ vědět dvě věci. První je, jak to vypadá, co vlastně napsat, a druhá, co se při tom doopravdy děje.

Ta první věc je celkem přímočará. Prostě přidáš obyčejné kulaté závorky a do nich názvy vstupů, které chceš.

Představ si tedy, že vytváříme funkci, která má vystřelit mnohokrát. Říkejme jí `shootMany` (vystřel mnohokrát).

Vypadalo by to takhle:

```javascript
function shootMany(numShots) {
  // ...
}
```

Když tuhle funkci chceš použít, zavoláš ji s počtem výstřelů, který chceš:

```javascript
shootMany(5)
shootMany(2)
```

A teď to podstatné. Když se kód spustí, malý Jiki s čepicí uvnitř funkce vezme to, co do vstupu vložíš, ať je to `5`, nebo `2`, dá to do krabice s názvem `numShots` (počet výstřelů) a tuhle krabici pak postaví na police uvnitř funkce, kde ji v kódu funkce použiješ.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Malý Jiki uvnitř stroje shootMany ukládá vstup do krabice s označením numShots"
  width="500"
  height="376"
/>

Řeknu to ještě jednou.

Když funkci použijeme zápisem `shootMany(5)`, Jiki venku sežene `5` a vloží ji do vstupní štěrbiny funkce `shootMany`. Uvnitř stroje malý Jiki tu `5` vytáhne a dá ji do krabice s názvem `numShots`, protože tak je ta vstupní štěrbina pojmenovaná, a pak tuhle krabici postaví na police uvnitř funkce ve stroji.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Malý Jiki staví krabici numShots na police uvnitř stroje shootMany"
  width="500"
  height="302"
/>

A uvnitř funkce pak můžeš krabici `numShots` používat stejně jako jakoukoli jinou krabici. Na názvu `numShots` není nic kouzelného. Klidně jsme ji mohli pojmenovat jinak. Je to jen pokyn pro malého Jikiho, aby uvnitř funkce vždycky vytvořil krabici s tímhle štítkem a dal do ní to, co se do štěrbiny vloží.

A jakmile je v té krabici hodnota, můžeš s ní dělat všechno, co s krabicemi normálně děláš. Krabici `numShots` můžeš použít třeba v cyklu `repeat`, aby funkce vystřelila správný početkrát. Vstupů ale můžeš mít klidně víc. Stačí je oddělit čárkami. Takže když máme funkci `drawStar` (nakresli hvězdu), která kreslí hvězdu podle pozice levého horního rohu, napíšeš ji takhle:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Stroj drawStar se dvěma vstupními štěrbinami, do kterých se vkládají dvě různé hodnoty"
  width="453"
  height="400"
/>

A když se pak funkce zavolá, malý Jiki prostě uloží hodnoty, které se do vstupů vloží, do krabic s názvem `left` (levý) a `top` (horní), a pak je postaví na police uvnitř funkce.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Malý Jiki ukládá dva vstupy do krabic s označením left a top na police uvnitř stroje drawStar"
  width="431"
  height="400"
/>
