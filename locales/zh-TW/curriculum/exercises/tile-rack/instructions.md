---
title: "字母牌架"
description: "找出字母在字母牌架上的確切位置。"
en_md5: 156e18323706fc278f7a887f421c01f3
---

你正在打造一個自動化的 Scrabble 機器人。機器人有一個字母牌架，架上的字母牌用字串表示（例如`"AERHBT"`）。當機器人決定要出哪個字母時，需要知道要把手移到哪個位置（英文：_position_），才能拿起那張字母牌。

寫一個名為 `findTile`（找出字母牌）的函式，它接收字母牌架（一個字母組成的字串）和要尋找的字母。如果找到這張牌，就回傳`"Move to position X"`，其中 X 是第一張符合的字母牌的位置（從 1 開始算）。如果牌架上沒有這張牌，就回傳`"Error: Tile not on rack"`。

要組出結果字串，你需要把位置數字轉成字串，再用串接（`+`）或樣板字串把各部分組合起來。

來看看幾個例子吧：

- `findTile("ABCDE", "A")`回傳`"Move to position 1"`
- `findTile("ABCDE", "C")`回傳`"Move to position 3"`
- `findTile("BANANA", "A")`回傳`"Move to position 2"`（第一個 A）
- `findTile("ABCDE", "Z")`回傳`"Error: Tile not on rack"`
