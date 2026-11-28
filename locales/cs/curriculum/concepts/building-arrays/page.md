---
title: "Sestavování polí"
description: "Začni s prázdným polem a přidávej prvky pomocí `push` jeden po druhém, zatímco procházíš data."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Dosud jsme pracovali s poli, jejichž hodnota byla daná hned na začátku a neměnila se. Ale co když chceš přidávat do pole prvky postupně? Na to mají pole metodu `push` (přidat na konec).

`push` má jeden vstup: věc, kterou chceš připnout na konec pole. Tady chceme na konec pole, které už obsahuje `"DJ"` a `"Bethany"`, připnout slovo `"Isaac"`.

Aby to Jiki udělal, vytáhne pole z krabice, připne `"Isaac"` na konec řetězu a pak celé vrátí zpátky do krabice. Všimni si, že na rozdíl od řetězců, kde Jiki pokaždé vytvářel nový řetězec, tady pole skutečně mění.

Jeden vzorec, se kterým se v programování setkáš hodně často, je začít s prázdným polem a postupně ho naplňovat. Představ si, že máme velké pole jmen a chceme jím projít. Kdykoli narazíme na jméno někoho, kdo je mentor, přidáme ho do pole.

Tenhle vzorec, kdy procházíš data a přidáváš, budeš používat pořád.
