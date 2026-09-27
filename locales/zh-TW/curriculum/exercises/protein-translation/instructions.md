---
title: "蛋白質轉譯"
description: "把 RNA 序列轉譯成蛋白質。"
en_md5: 79fb3a8d74a161a935842d20f7c835e7
---

RNA 可以拆成由三個核苷酸組成的序列，這些序列稱為密碼子，然後再轉譯成蛋白質。例如：

1. RNA："AUGUUUUCU"
2. 密碼子："AUG"、"UUU"、"UCU"
3. 蛋白質："Methionine"、"Phenylalanine"、"Serine"

另外還有三個終止密碼子（STOP 密碼子：UAA、UAG、UGA）。只要遇到其中任何一個，整個轉譯就會結束，蛋白質也在此終止。

你的任務是寫一個函式 `translateRna`（轉譯 RNA），它接收一段 RNA 序列，並回傳胺基酸的陣列。

密碼子對照表：

- AUG -> Methionine
- UUU, UUC -> Phenylalanine
- UUA, UUG -> Leucine
- UCU, UCC, UCA, UCG -> Serine
- UAU, UAC -> Tyrosine
- UGU, UGC -> Cysteine
- UGG -> Tryptophan
- UAA, UAG, UGA -> STOP
