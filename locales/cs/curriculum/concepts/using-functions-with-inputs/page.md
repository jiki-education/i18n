---
title: "Vstupy funkcí"
description: "Vkládání hodnot do vstupních štěrbin funkce, díky kterým se při každém spuštění chová jinak."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Na strojích, tedy na funkcích, je jedna věc obzvlášť silná: do mnoha z nich můžeš vložit nějakou informaci, a ta pak změní, co stroj dělá, když ho spustíš.

Zatím jsme viděli stroje, které vypadají trochu jako krabice, třeba stroj `move` (posuň se).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Stroj move, obyčejná krabice bez vstupních štěrbin"
  width="322"
  height="400"
/>

Některé stroje ale mají štěrbiny, jako tenhle stroj `walk` (jdi). Stroj `walk` je stejný jako stroj `move`. Posouvá postavičku (anglicky _character_) dopředu, jenže Jiki může přes štěrbinu určit, kolik kroků má postavička udělat. Takže místo tří volání funkce `move` za sebou, `move`, `move`, `move`, teď stačí použít funkci `walk` a říct Jikimu, aby do stroje vložil číslo tři.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Stroj walk se vstupní štěrbinou nahoře pro počet kroků"
  width="481"
  height="400"
/>

V kódu na to pořád napíšeme název funkce, v tomhle případě `walk`, a otevřeme závorku. Jenže pak před zavírací závorku napíšeme, jaký má být vstup (anglicky _input_). Tady chceme, aby vstupem byla trojka, tedy `walk` tři kroky dopředu:

```javascript
walk(3)
```

Když to Jiki uvidí, vezme číslo tři, které si můžeš představit jako malou minci, a vloží ho do vstupní štěrbiny stroje. Teprve pak zatočí klikou a stroj spustí.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki vhazuje číslo 3 jako minci do štěrbiny stroje walk a pak zatočí klikou"
  width="421"
  height="400"
/>

U funkcí, které kreslí obdélníky a kruhy, musíš Jikimu říct, aby vložil několik různých čísel: jak daleko od levého okraje to má být, jak daleko od horního okraje, jak široký má být obdélník a jak vysoký.

V Jikiho světě to jsou prostě různé štěrbiny, jedna pro každé z těch čísel.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Stroj na obdélníky se štěrbinami pro left, top, width a height a stroj na kruhy se štěrbinami pro cx, cy a radius"
  width="396"
  height="400"
/>

V kódu tedy napíšeme každé číslo a mezi ně čárku. Název funkce, závorka, číslo pro každý vstup, všechno oddělené čárkami, a pak závorku zavřeme:

```javascript
rectangle(10, 20, 30, 40)
```

Když použiješ funkci se špatným počtem vstupů, dostaneš chybu. Třeba když se pokusíš vložit jeden vstup do stroje, který štěrbinu nemá, Jiki ti řekne, že to nejde. A když naopak použiješ stroj, který vstupní štěrbinu má, ale neřekneš Jikimu, co do ní má vložit, taky se zastaví a začne si stěžovat. Jestli se v tobě ozve trocha vzdoru, klidně to zkus a uvidíš, co se stane. Takových chyb uděláš ještě hodně, až bude všechno složitější. Zkus se tím nerozčilovat a nebrat si to osobně. Všichni se učíme z chyb. Je to doslova nejrychlejší cesta, jak si mozek věci opravdu zafixuje. A tyhle chyby dělá každý. Všichni jsme začínali na nule, takže žádný stres.

Ještě stojí za zmínku jedna věc: ve cvičeních někdy narazíš na řádky, které začínají dvěma lomítky, `//`. Říká se jim komentáře (anglicky _comments_). Jsou to soukromé poznámky jen pro tebe, které Jiki úplně ignoruje. Když tedy Jiki uvidí řádek začínající těmito dvěma lomítky, prostě ho přeskočí a půjde na řádek, který následuje. Komentáře jsou způsob, jak si psát vlastní poznámky. Hodí se, když si chceš připomenout, jak co funguje. Často jsou komentáře napsané i za tebe, takže když začneš cvičení, můžou ti poradit, kam napsat kód nebo jak něco vyřešit. Klidně si ale přidávej vlastní komentáře.

Dole v zadání cvičení najdeš informace o funkcích, které můžeš použít, a přesně to, jaké vstupy do nich máš vložit.
