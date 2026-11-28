---
title: "Barvy HSL"
description: "Jak se skládají barvy z odstínu (tón, 0–360), sytosti (jak je barva živá, 0–100) a světlosti (jak je světlá, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL nám dává úplně jiný způsob, jak přemýšlet o barvách než RGB. HSL znamená odstín (anglicky _hue (H)_), sytost (anglicky _saturation (S)_) a světlost (anglicky _lightness (L)_). Máš funkci `hsl`, která bere tři čísla, jedno pro odstín, jedno pro sytost a jedno pro světlost, a vrátí ti barvu. Pojďme si tedy rozebrat, co ta tři slova znamenají.

```javascript
hsl(hue, saturation, lightness)
```

Odstín je barevný tón, který chceš, a jde od nuly až do 360. Představ si třeba duhu. Takhle o tom přemýšlím já. Vlevo máme červenou, pak oranžovou, žlutou, zelenou, modrou, fialovou a vlastně se dostaneme až zpátky k červené. Když tedy řekneš nula, začínáš vlevo, a to je červená. Když řekneš `120`, žádáš zelenou. `230` je modrá. Můžeš si to představit i jako barevné kolo, a to těch 360 vlastně je. Je to počet stupňů v kruhu. Já si čísla, která chci, vždycky jen vyhledám, takže si s memorováním nedělej těžkou hlavu, ale je fajn vědět, jak to funguje. Takže to je odstín, čili ten tón. Dál je tu sytost, která říká, jak je barva živá. Jde od nuly do 100. Při nule dostaneš jen šedou. Není v ní vůbec žádná barva ani tón. Při 100 dostaneš plnou, živou, zářivou barvu. A pak je tu světlost. Světlost říká, jak je barva světlá, a ta jde taky od nuly do 100. Při nule dostaneš černou. Ať zvolíš jakýkoli odstín, dostaneš černou. Není v ní žádné světlo. A při 100 dostaneš bílou. Ať je cokoli jiného, je prostě plná světla, takže je bílá. 50 je přesně uprostřed, to je normální barva. Můžeš si to představit jako posuvník, kterým barvu zesvětlíš nebo ztmavíš.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Barevné kolo odstínů a duha, kde 0 je červená, 120 zelená a 240 modrá"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Posuvník sytosti od 0 (šedá) přes 50 až po 100 (plná živá barva)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Posuvník světlosti od 0 (černá) přes 50 až po 100 (bílá)"
  width="500"
  height="398"
/>

Když tedy chceme normální červený kruh, který bychom v RGB zapsali jako 255, nula, nula (všechna červená, žádná zelená, žádná modrá), tady použijeme nula, 100, 50. Nula pro červený odstín, 100 pro sytost, tedy plná barva, a 50 pro světlost, což je normální míra světlosti. Když z toho chceme udělat zelený kruh, stačí změnit odstín na `120`. Když z něj chceme tmavší zelenou, snížíme světlost na `25`.

```javascript
hsl(0, 100, 50) // červená
hsl(120, 100, 50) // zelená
hsl(120, 100, 25) // tmavě zelená
```

Když ho chceme udělat méně výrazný, ubereme mu trochu barvy, trochu sytosti, třeba na `30`.

Když chceš jasnou, výraznou růžovou, odstín kolem 300 je růžová, pak zvýšíme sytost na 100, aby byla opravdu živá, a přidáme i na světlosti, asi na 60.

HSL se hodí, když chceš procházet barvy dokola. Když chceš duhu, stačí pořád zvyšovat odstín.
