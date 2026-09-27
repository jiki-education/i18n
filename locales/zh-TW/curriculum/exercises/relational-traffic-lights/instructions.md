---
title: "相對紅綠燈"
description: "重新打造你的紅綠燈，讓所有元素一起縮放。"
en_md5: d54633094a8d14f73b298fe4827504c4
---

你又回來玩紅綠燈了！這次我們會沿用前兩個練習的做法，把紅綠燈打造成在改變 radius 時也能正確縮放。為了做到這點，我們有一系列變數，可以設定成相對於`center`、相對於`radius`，或同時相對於兩者。

<img src="/static/images/exercise-assets/relational-traffic-lights/target.webp" alt="目標紅綠燈" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 運作方式

- 畫布的左上角是`0,0`，右下角是`100,100`。
- 顏色變數和`center`都已經幫你固定好了。`radius`預設為 10，但你可以自己改改看喔。
- 你需要把所有位置和尺寸的變數，用`radius`和`center`的某種組合推導出來。
- 外殼是一個長方形，把三個燈都包在裡面，並留有內距。內距和 radius 一樣。
- 三個燈在外殼裡垂直等距排列，外殼則位在圖片的正中央。（所以黃色圓圈的圓心就是圖片的正中央。）

### 需要推導的變數

這些變數都應該用到`radius`或`center`（例如`radius * 7`或`center - (radius * 2)`這樣的算式）

- `redY`、`yellowY`、`greenY`：每個燈的垂直中心
- `housingX`、`housingY`：外殼長方形的左上角
- `housingWidth`、`housingHeight`：外殼長方形的尺寸

### 測試縮放反應

一邊做的時候，你可以把 radius 從`2`調到`12`，看看所有東西是不是都能正確縮放。如果程式碼寫對了，就會看到所有東西都繞著圖片正中央漂亮地縮放！
