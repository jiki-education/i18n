---
title: "關聯式雪人"
description: "重建你的雪人，讓所有尺寸都從同一個變數推算出來。"
en_md5: 1753f8d873e9a5b58885cc1daee5ea5d
---

這個練習裡，我們又要做一個雪人了。和上一個練習很像，這次我們要讓所有東西都能用算術，從同一個`size`（尺寸）變數推算出來。

隨著你選的`size`不同，雪人會跟著長大。

<img
  src="/static/images/exercise-assets/relational-snowman/sizes.webp"
  alt="尺寸 1 到 5 的雪人"
  style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>

### 運作方式

- 繪圖畫布的左上角是`0,0`，右下角是`100,100`。
- 你有一個已經寫好的變數`snowmanX`（雪人中心的 X 座標），用來表示畫面正中央；另外還有一個`size`變數，你可以把它從`1`改到`5`，讓雪人長大。
- 其他所有變數，你都要用算術運算式推算出來。
- 頭部的半徑是`size * 2`，身體的半徑是`size * 3`，底部的半徑是`size * 4`。
- 這些圓要彼此相接：身體在底部的正上方，頭在身體的正上方。（這次的雪人比之前幾個練習更搖搖欲墜：每顆雪球都剛好疊在下面那顆上，不會彼此融化黏在一起。今天一定冷到結冰！）
- 底部圓的下緣距離畫面底部`size`。
- 你要算出這三顆雪球的圓心。

### 變數

你的任務是依照上面的說明，設定好這些變數。

- `headRadius`（頭部半徑）：由`size`推算
- `bodyRadius`（身體半徑）：由`size`推算
- `baseRadius`（底部半徑）：由`size`推算
- `baseY`（底部的 Y 座標）：由`size`和`baseRadius`推算（底部坐在地面上）
- `bodyY`（身體的 Y 座標）：由`baseY`、`baseRadius`和`bodyRadius`推算
- `headY`（頭部的 Y 座標）：由`bodyY`、`bodyRadius`和`headRadius`推算

### 玩玩看`size`

你可以把`size`從`1`改到`5`，雪人就會跟著長大。記得改完之後按下「執行程式碼」。
