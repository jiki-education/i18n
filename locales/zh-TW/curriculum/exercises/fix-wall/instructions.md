---
title: "修補牆壁"
description: "用矩形填補破牆上的缺口。"
en_md5: ba2f5a5d726cef8cb80841c6e16132c6
---

歡迎來到你的第一個繪圖練習。在這個練習中，你將使用`rectangle`（矩形）函式（英文：_function_）來繪製矩形。

要繪製矩形，我們需要知道矩形的頂部與左側位置，以及它的寬度和高度。當我們使用`rectangle`函式時，可以將這些值指定為輸入（英文：_inputs_）：

- `left`（左側）：矩形的左側位置
- `top`（頂部）：矩形的頂部位置
- `width`（寬度）：矩形有多寬
- `height`（高度）：矩形有多高

<img src="/static/images/exercise-assets/fix-wall/intro-rectangle.webp" alt="修補牆壁" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

你永遠都會在一個寬度為 100、高度為 100 的畫布上繪圖。因此，畫布的左上角是`0,0`，而右下角是`100,100`。**你可以將滑鼠游標懸停在畫布上**，來檢查東西應該放在哪裡。

### 修補牆壁

你的任務是使用三個矩形來填補牆上的破洞。

為了讓這件事變得更簡單，頂部、左側、高度和寬度的數值都可以被 10 整除喔。
