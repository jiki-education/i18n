---
title: "凱撒密碼"
description: "用古羅馬的密碼術加密一則秘密訊息。"
en_md5: 029bbd7050127405f5e67a3a20353139
---

凱撒密碼是最早、最簡單的加密技術之一。凱撒曾用它把秘密訊息傳給他的將軍們。

這個密碼的運作方式，就是把訊息裡的每個字母，在字母表上位移固定的位置數。例如，當位移是 3 的時候，「a」會變成「d」，「b」會變成「e」，依此類推。如果位移超過「z」，就會繞回字母表的開頭。

空格要保持為空格（不位移）。

建立一個叫做`encode(message, shift)`（編碼）的函式，它接受一則小寫訊息和一個位移量，並回傳編碼後的訊息。

例如：

- `encode("abc", 1)`回傳`"bcd"`
- `encode("xyz", 3)`回傳`"abc"`（繞回開頭）
- `encode("hello world", 5)`回傳`"mjqqt btwqi"`

提示：你會想把這個問題拆成幾個比較小的輔助函式！

### 隨機小知識

我曾經在葡萄牙的布拉加主持一場科技研討會。就在我要上台前五分鐘，主辦單位走了過來，有點不好意思地問我，願不願意在當天的一開始打扮成凱撒，來慶祝布拉加的羅馬文化遺產。結果，我到底有沒有成功……？

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy 扮成凱撒的樣子"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
