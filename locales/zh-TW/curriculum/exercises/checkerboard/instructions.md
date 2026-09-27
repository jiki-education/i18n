---
title: "棋盤"
description: "畫出任意大小的棋盤、擺好棋子準備開局，所有位置都由棋盤大小推算出來。"
en_md5: 1669c45c882ce94e16651bfc2d77a172
---

這個專案裡，你要畫出一個棋盤，並在上面擺好棋子，準備來一盤西洋跳棋（又稱 checkers）。

你的程式碼要能應付**任何大小的棋盤**。我們準備了三種範例棋盤讓你試試看：其中一題用經典的 8x8 棋盤，一題用比較小的 6x6，另一題用比較大的 10x10。你可以用`getBoardSize()`（取得棋盤大小）查出這次的棋盤寬和高各有幾格（棋盤一定是正方形）。

<div style="display: flex; gap: 8px; margin: 12px 0;">
  <img src="/static/images/exercise-assets/checkerboard/board-6.svg" alt="6x6 棋盤" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-8.svg" alt="8x8 棋盤" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-10.svg" alt="10x10 棋盤" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
</div>

### 棋盤

一如往常，畫布的寬度和高度都固定是`100`。請遵守這兩條規則：

- 棋盤的四周有一圈`"black"`的邊框，寬度是`2`。
- 格子要`"dark brown"`和`"white"`交錯排列，整齊地平分邊框內的空間。左下角的格子一定是 dark brown，而不是 white。

### 棋子

- 每顆棋子都位在格子的正中央。
- 棋子是帶有環狀紋路的圓形，有外層邊框和內層顏色：
  - 整顆棋子的寬度是格子的 80%。
  - 內圈的寬度是整顆棋子的 75%。
- 棋盤**上方**的幾列放`"charcoal"`的棋子（每顆都有`"black"`的邊）。
- 棋盤**下方**的幾列放`"white"`的棋子（每顆都有`"grey"`的邊）。
- 棋子只會放在**深色**的格子上。
- **中間兩列**一定是空的，其他每一列都擺了棋子。

## 用相對關係思考

這個練習的核心，就是**絕對不要寫死**尺寸和位置。先從棋盤大小算出單一「格子」的大小，再依這個尺寸畫出每個格子和每顆棋子。只要做對了，同一份程式碼連一個數字都不用改，就能畫出小的 6x6 棋盤，也能畫出大的 10x10 棋盤。
