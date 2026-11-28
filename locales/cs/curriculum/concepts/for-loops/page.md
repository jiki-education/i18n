---
title: "Jak fungují cykly `for`"
description: "Cyklus se třemi částmi (počáteční hodnota, podmínka a zvýšení), který ti dá plnou kontrolu nad každým průchodem."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Možná si pamatuješ, že cyklus repeat v JavaScriptu vlastně vůbec neexistuje. Je to jen něco, co jsme přidali, aby ti byl život ze začátku o něco snazší.

Tak co se používá místo něj? Používáme normální cyklus `for`, a ten vypadá takhle.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Chápeš, proč z toho mohl být první den trochu strach.

Ale teď už máš všechny znalosti, které potřebuješ. Pojďme si to rozebrat.

Cyklus for má tři části: počáteční hodnotu (anglicky _initializer_), podmínku a zvýšení (anglicky _increment_).

Počáteční hodnota, ta část `let i = 0`, se provede na začátku celého cyklu. Provede se jen jednou, a tady vytvoří krabici s názvem `i` (písmeno, které sleduje hodnotu) nastavenou na nulu. `i` je jen písmeno, kterým při cyklu sledujeme hodnotu, a tradičně se na to používá `i` nebo `x`.

Ta další část před podmínkou se provede při každém průchodu cyklem.

Pokud podmínka platí, cyklus znovu spustíme.

Pokud ne, nespustíme.

A nakonec je tu zvýšení, tedy `i++`.

`i++` znamená totéž jako `i = i + 1`. Je to jen zkratka, způsob, jak `i` pokaždé zvýšit o jedna.

V tomhle příkladu tedy nastavíme `i` na nulu. Zkontrolujeme, jestli je `i` menší než dvě, což je, a tak cyklus spustíme.

A pak na konci zvýšíme `i` o jedna, takže z `i` je jedna. Nula plus jedna je jedna.

A jdeme znovu. Zkontrolujeme, jestli je jedna menší než dvě.

Je, takže cyklus spustíme. A pak na konci znovu zvýšíme `i`. Teď je to dvě, jedna plus jedna jsou dvě.

```javascript
i = 0
i < 2 // pravda - spusť cyklus
...   // Provedeme průchod
i = i + 1 // 1

i < 2 // pravda - spusť cyklus
...   // Provedeme průchod
i = i + 1 // 2

i < 2 // nepravda - ukonči cyklus
```

A pak jdeme potřetí. Tentokrát zkontrolujeme, jestli je dvě menší než dvě, a není, takže cyklus nespustíme, a vlastně už je cyklus u konce. Prostě pokračujeme kódem, který je níž. Cyklus se tedy provedl dvakrát, a to se hodí vědět. Když začneme na nule a máme podmínku `i < n`, tak číslo `n` určuje, kolikrát se cyklus provede.

Takže je to totéž, jako napsat repeat two. Není to těžké, ale je to mnohem komplikovanější než prostě napsat repeat two. Výhoda cyklu for je, že do těch tří políček můžeš dát cokoli. Můžeš začít na jiném čísle, počítat po víc než jedné, počítat dolů nebo použít podmínku, která závisí na něčem jiném než na obyčejném počítadle. Právě tahle flexibilita dělá z cyklů for pracovního koně JavaScriptu.
