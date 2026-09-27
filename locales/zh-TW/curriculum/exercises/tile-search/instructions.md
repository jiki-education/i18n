---
title: "字母牌搜尋"
description: "在牌架的字母牌中搜尋指定的字母。"
en_md5: bbbc77ef2c270fd4228d6a20e690a095
---

你正在打造一個 Scrabble 機器人。在機器人試著打出一個單字之前，得先確認自己的牌架上有沒有某個特定的字母牌。

牌架用一串字母來表示（例如`"SCRAB"`）。

寫一個叫做`contains`（包含）的函式，它接受兩個輸入：

- `haystack`（稻草堆）：要搜尋的字母牌牌架，以字串表示
- `needle`（針）：要搜尋的字母

如果這個字母在牌架裡，就回傳`true`；如果不在，就回傳`false`。

範例：

- `contains("SCRAB", "A")`會回傳`true`
- `contains("SCRAB", "Z")`會回傳`false`
- `contains("", "A")`會回傳`false`
