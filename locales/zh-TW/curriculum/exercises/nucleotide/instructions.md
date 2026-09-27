---
title: "核苷酸"
description: "計算某個核苷酸在 DNA 鏈中出現的次數。"
en_md5: 7ab4068481d406fdfb6f598fabd042c1
---

DNA 是由其他化學物質組成的一條長鏈，其中最重要的是四種核苷酸：腺嘌呤、胞嘧啶、鳥嘌呤和胸腺嘧啶。一條 DNA 鏈可以包含數十億個這四種核苷酸，而且它們出現的順序很重要喔！我們用字串來表示 DNA 序列，例如「ATTACG」。'A' 代表腺嘌呤，'C' 代表胞嘧啶，'G' 代表鳥嘌呤，'T' 代表胸腺嘧啶。

建立一個名為 `countNucleotide`（計算核苷酸）的函式，它接收一條 DNA 鏈和一個核苷酸字元，並回傳該核苷酸在鏈中出現的次數。

如果核苷酸字元無效（不是 A、C、G、T 其中之一），回傳 `-1`。
如果鏈中含有任何無效的字元，也回傳 `-1`。

例如：

- `countNucleotide("GATTACA", "A")`回傳`3`
- `countNucleotide("GATTACA", "T")`回傳`2`
- `countNucleotide("GATTACA", "X")`回傳`-1`

有需要的話，你可以使用 `"...".includes(someString)`。
