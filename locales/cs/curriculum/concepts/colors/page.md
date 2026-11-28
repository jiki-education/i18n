---
title: "Barvy"
description: "Dva způsoby, jak určit jakoukoli barvu, kterou chceš. RGB míchá červené, zelené a modré světlo. HSL používá odstín, sytost a světlost."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Pokud budeš s kódem někdy dělat něco vizuálního (a i když chceš být datový vědec a všechny ty kreslicí věci ti přijdou trochu nudné, sdělovat data pomocí obrázků je klíčová dovednost), existují dva různé způsoby, jak vyjádřit barvy. Barvy podle názvů, jako je červená nebo žlutá, už používáš jako poslední vstup ve svých kreslicích funkcích. Byl to fajn způsob, jak barvu rychle použít, ale dost to omezuje. Pojmenovaných barev, které můžeme použít, je jen hrstka. Tak se teď podíváme na dva způsoby, jak vyjádřit jakoukoli barvu, kterou chceš. Jmenují se RGB a HSL.

RGB nám umožňuje myslet na barvy jako na směs červené, zelené a modré. To znamená zkratka RGB: červená (anglicky _red (R)_), zelená (anglicky _green (G)_), modrá (anglicky _blue (B)_). Pokud si pamatuješ míchání barev ze školy, je to podobná myšlenka, akorát místo barvy mícháme světlo.

V mnoha cvičeních budeš mít funkci `rgb`. Ta bere tři čísla jako vstupy, jedno pro červenou, jedno pro zelenou a jedno pro modrou, a vrací barvu.

Čísla, která můžeš použít jako vstupy, jdou od nuly do `255`. Nula znamená „tuhle barvu vůbec nechci“ a `255` znamená „namíchej jí co nejvíc“. Když tedy funkci `rgb` zavoláme s `255`, nulou a nulou, říkáme tím: chci všechnu červenou. Pamatuj, že `255` je největší číslo, které tam můžeš dát. Ale zelenou ani modrou nechceme, takže obě jsou nulové. Dostaneme červenou a tu si můžeme uložit do proměnné a pak ji použít ve funkci `circle`, stejně jako jsme to už dělali s pojmenovanými řetězci. A co když funkci `rgb` zavoláme s nulou, `255` a nulou? Teď říkáme: žádnou červenou, všechnu zelenou, žádnou modrou. Dostaneme zelený kruh. A co když chceme žlutou? Žlutá je směs červené a zelené. Můžeme tedy říct: dej mi všechnu červenou, všechnu zelenou a žádnou modrou, a vyjde žlutá. Můžeme ale používat i menší čísla. Když chceme trochu červené, žádnou zelenou a hodně modré, dostaneme fialovou. A hodně červené, málo zelené, o něco víc modré, to nám dá růžovou. Takže to je RGB. Mícháme červenou, zelenou a modrou a vznikají různé kombinace.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Tři překrývající se kruhy červeného, zeleného a modrého světla, jejichž smícháním vzniká žlutá, purpurová, tyrkysová a bílá"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Teď se podívejme na HSL, což je úplně jiný způsob, jak o barvách přemýšlet. HSL znamená odstín (anglicky _hue (H)_), sytost (anglicky _saturation (S)_) a světlost (anglicky _lightness (L)_). Podobně jako u RGB máš funkci `hsl`, která bere tři čísla: jedno pro odstín, jedno pro sytost a jedno pro světlost, a vrací barvu. Pojďme si tedy rozebrat, co ta tři slova znamenají.

Odstín je tón (anglicky _shade_) barvy, kterou chceš, a jde od nuly až do 360. Zkus si představit duhu. Já si to takhle představuju. Nalevo máme červenou, pak oranžovou, žlutou, zelenou, modrou, fialovou a vlastně se dostaneme až zpátky k červené. Když tedy řekneš nula, začínáš nalevo a to je červená. Když řekneš `120`, chceš zelenou. `230` je modrá. Můžeš si to představit i jako barevné kolo (anglicky _color wheel_), což je vlastně to, co těch 360 znamená. Je to počet stupňů v kruhu. Já si čísla, která chci, vždycky jen vyhledám, tak si s tím nedělej moc starosti a nezkoušej se to učit nazpaměť, ale je fajn vědět, jak to funguje. Takže to je odstín, tedy ten tón. Dál máme sytost, což je to, jak je barva živá. Jde od nuly do 100. Při nule dostaneš jen šedou. Není v ní vůbec žádná barva ani tón. Při 100 dostaneš plnou, živou, zářivou barvu. A pak tu máme světlost. Světlost je to, jak je barva světlá, a ta jde také od nuly do 100. Při nule dostaneš černou. Ať si zvolíš jakýkoli odstín, dostaneš černou. Není v ní žádné světlo. A při 100 dostaneš bílou. Ať je cokoli jiného, je prostě plná světla, takže je bílá. 50 je přesně uprostřed, normální barva. Můžeš si to představit jako posuvník (anglicky _slider_), kterým barvu zesvětlíš nebo ztmavíš.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Duha a barevné kolo, které ukazují odstín od 0 (červená) přes 120 (zelená) po 240 (modrá)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Posuvník sytosti od 0 (šedá) přes 50 po 100 (zářivá purpurová)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Posuvník světlosti od 0 (černá) přes 50 (plná barva) po 100 (bílá)"
  width="500"
  height="398"
/>

Když tedy chceme normální červený kruh, který bychom v RGB zapsali jako 255, nula, nula (všechna červená, žádná zelená, žádná modrá), tady použijeme nulu, 100 a 50. Nulu pro červený odstín, 100 pro sytost, tedy plnou barvu, a 50 pro světlost, což je normální úroveň. Když z něj chceme zelený kruh, stačí změnit odstín na `120`. Když ho chceme v tmavší zelené, snížíme světlost na `25`.

Když ho chceme vybledlejší, můžeme ubrat trochu barvy, trochu sytosti, třeba ji stáhnout na `30`.

Když chceš zářivou, sytou růžovou, odstín kolem 300 odpovídá růžové, pak zvedneme sytost na 100, aby byla opravdu živá, a zvýšíme i světlost, asi na 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Máme tedy dva různé způsoby, jak vyjádřit barvu, a každý se hodí v jiné situaci. RGB se hodí, když chceš upravit jednu konkrétní složku: kolik červené, kolik zelené, kolik modré. HSL se hodí, když chceš procházet barvami. Když chceš duhu, stačí pořád zvyšovat odstín.
