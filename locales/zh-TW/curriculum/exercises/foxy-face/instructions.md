---
title: "狐狸臉"
description: "用彩色的三角形拼出一張幾何狐狸臉。"
en_md5: 095833a5b2117c2d26500103216bf247
---

這個練習會向你介紹 `` `triangle` ``（三角形）函式。你需要提供 7 個輸入給它。前 6 個輸入是三個頂點的座標對，最後一個輸入則是 `color`：

- `` `x1` ``（X 座標 1）、`` `y1` ``（Y 座標 1）：第一個頂點
- `` `x2` ``（X 座標 2）、`` `y2` ``（Y 座標 2）：第二個頂點
- `` `x3` ``（X 座標 3）、`` `y3` ``（Y 座標 3）：第三個頂點
- `` `color` ``（顏色）：三角形的顏色（例如 `"orange"`）

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="三角形函式圖解" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 畫一張狐狸臉

你的任務是使用三角形來拼出一張幾何狐狸臉：

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="狐狸臉" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

這張臉是水平對稱的（左半邊和右半邊完全相同）。它總共有 8 個三角形：

- 兩個 `"white"` 的臉頰
- 兩個 `"brown"` 的耳朵
- 兩半 `"orange"` 的臉
- 一個 `"charcoal"` 的鼻子（兩個三角形）

（畫三角形時，請務必使用這些顏色，並記得檢查你是否將它們寫成了字串（英文：_strings_）喔！）

我們已經幫你畫好了一些部分的輪廓，讓你更容易上手。如果你跟著註解裡的順序來畫，過程會輕鬆很多喔。

另外，為了讓你更輕鬆，這裡用到的所有數字都可以被 5 整除（例如 `5`、`10`、`15` 等是正確的，而 `1`、`2`、`3`、`4`、`6`、`7`、`8`、`9`、`11` 等則不是）。在接下來的練習裡，你會很常看到這種模式喔。

最後還有一件事。你可以把滑鼠游標停在畫布上來尋找座標。這招對畫左半邊很有用，但既然右半邊是對稱的，你能不靠游標提示就解出右半邊的座標嗎？

祝你好運！
