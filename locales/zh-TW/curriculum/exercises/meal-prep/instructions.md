---
title: "備餐"
description: "算出你的食譜需要買哪些食材。"
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

你是那種喜歡每天順道跑一趟商店，把晚餐要用的食材買齊的人。這也剛好給你一個好藉口，出門活動活動筋骨，順便和附近店家的老闆聊上幾句。

每天你都會挑一個食譜，接著看看冰箱裡有什麼，然後記下還需要買哪些東西。

現在，你決定讓生活輕鬆一點，寫個程式來幫你做這些苦差事！它會拿你清單上的內容和冰箱裡的內容比對，然後輸出兩者的差別。

你的任務是寫一個叫做`shoppingList(fridgeContents, recipeItems)`（購物清單）的函式。它接受兩個輸入：冰箱裡的內容，是一個字串陣列；食譜裡的食材，也是一個字串陣列。它應該回傳你需要買的東西，同樣是一個字串陣列。

例如：

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### push 方法

要解出這道練習，你需要用`.push(element)`方法把你的陣列一步步建立起來。程式碼裡只能建立一個新的陣列。如果不確定該怎麼做，可以再看一次上一支影片。

你也可以用`includes`方法（下方有提醒）。

祝你玩得開心！
