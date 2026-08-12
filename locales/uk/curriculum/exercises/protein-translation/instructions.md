---
title: "Трансляція білка"
description: "Трансляція послідовностей РНК у білки."
en_md5: 79fb3a8d74a161a935842d20f7c835e7
---

РНК можна розбити на послідовності з трьох нуклеотидів, які називаються кодонами, а потім транслювати в білок. Наприклад:

1. РНК: "AUGUUUUCU"
2. Кодони: "AUG", "UUU", "UCU"
3. Білок: "Methionine", "Phenylalanine", "Serine"

Існують також три термінальні кодони (STOP-кодони: UAA, UAG, UGA). Якщо трапляється будь-який із них, трансляція повністю припиняється, і білок завершено.

Напишіть функцію `translateRna` (транслювати РНК), яка приймає послідовність РНК і повертає масив амінокислот.

Відповідність кодонів:

- AUG -> Methionine
- UUU, UUC -> Phenylalanine
- UUA, UUG -> Leucine
- UCU, UCC, UCA, UCG -> Serine
- UAU, UAC -> Tyrosine
- UGU, UGC -> Cysteine
- UGG -> Tryptophan
- UAA, UAG, UGA -> STOP
