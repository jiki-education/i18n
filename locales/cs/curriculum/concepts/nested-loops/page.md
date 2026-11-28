---
title: "Cykly v cyklech"
description: "Vložení jednoho cyklu do druhého tak, aby se vnitřní cyklus pro každý krok vnějšího cyklu provedl celý. Ideální na mřížky."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Řekněme, že chceme řadu květin. Můžeme napsat něco takového. Nastavíme pozici, zasadíme květinu, zvýšíme pozici o 10, zopakujeme to a máme pěknou rovnou řadu květin.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki u tabule a pod ní jedna rovná řada zasazených květin"
  width="406"
  height="400"
/>

Ale co když chceme mřížku květin s řádky a sloupci? Třeba čtyři řádky a v každém pět květin.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Mřížka květin čtyři krát pět, nad kterou Jiki přemýšlí, jak ji nakreslit"
  width="383"
  height="400"
/>

Máme cyklus, který nakreslí jednu řadu květin. Jak ho použít na čtyři řady? Nebo co bychom mohli udělat, abychom nakreslili čtyři řady?

Jedna možnost je ten cyklus prostě čtyřikrát zkopírovat a v každé kopii změnit horní pozici. Fungovalo by to. Bylo by to v pořádku. Ale je to samé opakování a jde to lépe. Víme, že když se kód opakuje, můžeme si to zjednodušit cyklem.

Tady tedy můžeme použít jeden cyklus uvnitř druhého. Jeden cyklus na řádky a jeden na květiny v tom řádku. Začněme tedy tím, že kolem našeho stávajícího kódu přidáme ještě jeden cyklus repeat, ať získáš cit pro to, jak to funguje. A zopakujeme to jen jednou. Říkáme tím Jikimu, aby všechno uvnitř těchto vnějších složených závorek udělal jednou. Má to tedy přesně stejný efekt, jako kdyby tam vnější cyklus vůbec nebyl. Říkáme Jikimu, aby něco zopakoval jednou, což je stejné, jako když mu řekneme, aby to udělal bez cyklu repeat. Ale takhle ten kód funguje. Je to platný, správný kód. Máme jeden cyklus uvnitř druhého.

Takže co se stane, když ten vnější cyklus změníme tak, aby se opakoval dvakrát? Teď Jiki dvakrát provede celou tu část, kde se pětkrát zavolá `plant` (zasadit). Zasadí 10 květin. Ale všechny ty květiny budou v jedné řadě.

Stejně jako potřebujeme při každém kroku posunout pozici zleva doprava, musíme po nakreslení každé celé řady posunout i svislou pozici. Jak na to? Můžeme přidat vnější proměnnou pro horní pozici, použít ji ve funkci `plant` a po každé řadě ji zvýšit o 10.

Zamysli se nad tím, jaká hodnota je v každém okamžiku. Horní pozice začíná na 10. Při prvních pěti zasazeních zůstává stejná. Levá pozice roste. Pak k horní pozici přičteme dalších 10 a zasadíme o kousek níž pět dalších květin. Levou pozici zase vrátíme na 10 a při každém dalším zasazení ji znovu zvětšujeme.

A teď můžeme říct, aby se to zopakovalo čtyřikrát, a máme čtyři řady po pěti květinách.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Hotová mřížka květin čtyři krát pět a spokojený Jiki se dvěma zdviženými palci"
  width="389"
  height="400"
/>

To klíčové, co je potřeba pochopit: Jiki nejdřív dokončí všechnu práci ve vnitřním cyklu (anglicky _inner loop_) a teprve pak se vrátí k vnějšímu cyklu (anglicky _outer loop_). Nepřeskakuje tam a zpátky. Vnitřní cyklus dokončí a pak přejde k dalšímu kroku vnějšího cyklu.

V téhle situaci si můžeš vnější cyklus představit jako toho, kdo řídí skupiny neboli řádky, a vnitřní cyklus jako toho, kdo řídí jednotlivé položky v každé skupině neboli v každém řádku. V našem příkladu tedy vnější cyklus vytvoří čtyři řádky a vnitřní cyklus do každé skupiny umístí pět květin, pět položek.
