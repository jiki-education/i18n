---
title: "Scénáře"
description: "Různé výchozí podmínky, ve kterých cvičení spouští kód, který napíšeš jen jednou, takže musí fungovat ve všech."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Každé cvičení má několik různých scénářů, tedy různých situací, které musí tvůj kód zvládnout.

Uvidíš je jako malá tlačítka hned nad výstupem každého cvičení. Každé tlačítko patří k jinému scénáři. Tvým úkolem je napsat kód, který funguje pro všechny, ne jen pro ten první. Řeknu to ještě jednou. Kód napíšeš jednou, ale ten samý kód se pak spustí pro každý z těch scénářů. Rozdíl je v tom, že každý scénář může být nastavený trochu jinak a funkce, které dostaneš, mohou vracet trochu jiné hodnoty podle toho, v jakém scénáři zrovna jsi.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Řada tlačítek scénářů hned nad výstupem cvičení, zvýrazněná kroužkem"
  width="500"
  height="318"
/>

Vezmi si třeba hru na golf. Možná budeš potřebovat měnit, jak daleko se míček dokutálí, podle návratové hodnoty (anglicky _return value_) funkce `getShotLength` (zjistí délku odpalu), která ti řekne, jak daleko golfista míček odpálil. Představ si, že hráč musí na telefonu přejet prstem a určit, jak daleko míček odpálil.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Výjev z golfové hry s golfistou, míčkem a praporkem v jamce napravo"
  width="412"
  height="400"
/>

Výsledek se k tobě dostane přes tuhle funkci. V jednom scénáři tedy můžeš zavolat funkci `getShotLength` a ta vrátí `23`, krátké přejetí prstem. V jiném vrátí `70`, dlouhé přejetí prstem. V dalším vrátí `45`. Tvůj kód musí dokutálet míček na správnou vzdálenost v každém scénáři, a to s jediným programem, jedinou sadou kódu. Pomocí funkce `getShotLength` zjistíš, jak daleko odpal doletěl, a pak míček dokutálíš na to místo.

```javascript
let distance = getShotLength()
```

Scénáře zajišťují, že tvůj kód opravdu funguje správně. Napsat kód, který funguje v jedné konkrétní situaci, je docela snadné. Napsat kód, který funguje ve spoustě různých situací, je mnohem těžší, a taky mnohem cennější. Když řešíš cvičení, začni prvním scénářem. Rozchoď ho. Pak přejdi k dalšímu scénáři a rozchoď i ten. Když ti kód na jiném scénáři přestane fungovat, zamysli se nad tím, čím se ten scénář liší a jak se mu kód musí přizpůsobit.
