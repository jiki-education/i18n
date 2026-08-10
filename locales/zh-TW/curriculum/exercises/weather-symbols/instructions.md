---
title: "天氣符號"
description: "根據描述陣列繪製六天的天氣預報。"
en_md5: 18bc1bf16ffc94d81bfa81a93faa9a7f
---

有人請你製作一份六天的天氣預報。不過，你的老闆沒有給你傳統的天氣資料，而是根據他的感覺給你天氣描述（例如 "Snowboarding time! 🏂" 或 "Miserable 😩"）。

你收到了一個包含六個天氣描述的陣列（英文：_Array_），每天一個，而你的工作是將每一天的天氣畫進各自的盒子裡。

天氣預報會顯示為六個盒子的網格，從星期一到星期六，每天一個。這些描述會依序排列：第一個（盒子`0`）是星期一的天氣，第二個（盒子`1`）是星期二的天氣，以此類推直到星期六（盒子`5`）。（你的老闆星期天不出門，所以他不在乎天氣，我們也就永遠無法報告星期天的天氣……）

## 繪製一天

我們提供了一個`draw`（繪製）函式來幫你完成所有的繪圖工作。你的工作是找出要放進去的正確元素。

```js
draw(box, day, elements)
```

- `box`是要畫進去的盒子（`0`到`5`）。
- `day`是用來標示盒子的星期幾，例如`"Monday"`。
- `elements`是一個要顯示的天氣符號陣列（詳情請見下方）。

星期幾的順序依序為`"Monday"`、`"Tuesday"`、`"Wednesday"`、`"Thursday"`、`"Friday"`和`"Saturday"`。

所以如果第一天是`"Exciting 🤩"`，你會寫：

```js
draw(0, "Monday", ["cloud", "snow"])
```

## 每個描述的意義

每個描述都對應到一個特定的符號陣列：

- `"Sunny ☀️"`: `["sun"]`
- `"Dull 😴"`: `["cloud"]`
- `"Miserable 😩"`: `["cloud", "rain"]`
- `"Hopeful 🤞"`: `["sun", "cloud"]`
- `"Rainbow territory! 🌈"`: `["sun", "cloud", "rain"]`
- `"Exciting 🤩"`: `["cloud", "snow"]`
- `"Snowboarding time! 🏂"`: `["sun", "cloud", "snow"]`

## 你的任務

一次一天，依序處理`days`陣列吧。對於每一個描述，將它轉換成正確的符號陣列，並將它`draw`進那一天的盒子裡，標上對應的星期幾。
