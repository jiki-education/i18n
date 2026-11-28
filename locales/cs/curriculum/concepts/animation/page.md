---
title: "Animace"
description: "Jak oklamat oko, aby vidělo pohyb: přemalujeme pozadí a každý snímek překreslíme o kousek jinde."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Dosud platilo, že když jsme kreslili pomocí cyklu `repeat` (opakuj), každá nová věc, kterou jsme nakreslili, k obrázku něco přidala. Když nakreslíme novou cihlu do zdi, vyplní mezeru. Když nakreslíme 10 kruhů, vidíme na obrazovce 10 kruhů. Je to jako malování. Jakmile jednou dáš barvu na zeď, nezmizí, když vedle namaluješ něco nového. Zůstane tam. Ale co když chceme, aby něco vypadalo, že se to hýbe?

Už jsi někdy viděl prolínací knížku? Byly hodně populární, když jsem byl malý, dnes už méně. Prolínací knížka je malá knížečka, kde je na každé stránce o kousek jiný obrázek. Když stránkami rychle listuješ, oči vidí, že se obrázky mění, a mozek má dojem, že se něco hýbe. Ve skutečnosti se nic nehýbe. Je to jen spousta trochu odlišných obrázků, jeden za druhým. A přesně tak funguje animace v kódu. Trik je pořád stejný. Než nakreslíme novou scénu, přetřeme celé plátno barvou pozadí, trochu jako když v prolínací knížce začneme na čisté stránce, a pak scénu nepatrně změníme, aby to vypadalo jako pohyb.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Prolínací knížka s panáčkem, který běží; každá stránka je o kousek jiná, takže se zdá, že se panáček hýbe"
  width="500"
  height="274"
/>

Takže vezměme si známý kus kódu, kde kreslíme kruhy po obrazovce: nastavíme proměnnou `position` (pozice) a máme blok `repeat`, ve kterém nakreslíme kruh a pak posuneme `position` o jedna doprava. Když ten blok `repeat` spustíme stokrát, uvidíme na obrazovce 100 kruhů.

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
  alt="Stopa 100 modrých kruhů nakreslených zleva doprava po obrazovce"
  width="500"
  height="197"
/>

A teď se podívejme, co se stane, když pokaždé před nakreslením kruhu přidáme jeden obyčejný obdélník.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Místo stopy kruhů teď naše oči oklameme, takže vidí jediný kruh, který zdánlivě klouže po obrazovce.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Série snímků, na každém je čistě bílé plátno s jediným modrým kruhem o krok dál doprava"
  width="500"
  height="187"
/>

Pokaždé, když projdeme cyklem, namalujeme celé nové pozadí, přikryjeme všechno, co tam bylo předtím, a pak nakreslíme kruh na jeho nové místo.

Každý průchod cyklem je jako nová stránka v prolínací knížce.

A to nejdůležitější je, že kruh neposouváme. Kruh není objekt, který by se posouval po obrazovce. Je to jen kresba. Pokaždé, když projdeme cyklem, přemalujeme starou kresbu a uděláme úplně novou, o kousek doprava. Tvoje oko si to složí dohromady a vidí pohyb, ale ve skutečnosti je to jen spousta samostatných kreseb, jedna za druhou.

Tenhle nápad můžeš použít třeba na západ slunce. Necháš slunce pohybovat, měníš jeho velikost i barvu. Pořád je to stejná technika. Nastav pár proměnných, namaluj čisté pozadí a nakresli všechno. Aktualizuj proměnné a pak to zopakuj.
