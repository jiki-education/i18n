---
title: "更新變數"
description: "在程式執行時改變變數裡的內容，讓你追蹤位置、次數、分數，以及其他會變動的值。"
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

到目前為止，我們建立變數時，都是把值放進盒子裡，之後再拿出來用。這對讓程式碼更清楚，以及減少我們原本可能得在腦中做的計算，都非常有幫助。不過，變數真正有價值的地方，在於它能在程式執行的過程中改變盒子裡的內容，也就是改變變數裡的值。所以即使我們重複執行同一段程式碼，它做的事也可能因為盒子裡的內容不同而改變。

假設我們想在花園裡種一朵花。我們有一個很方便的 `plant`（種植）函式，它只有一個輸入，就是我們想放這朵花的位置。所以如果想在距離邊緣 10 的地方種一朵花，我們會這樣寫：

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="花園裡種了一朵花，就在 Jiki 的白板旁邊"
  width="406"
  height="400"
/>

那如果想種八朵花呢？我們可以寫 `plant(10)`、`plant(20)`、`plant(30)` 等等，但這樣實在很煩人。

而我們已經學過一個能幫我們省掉這種煩人程式碼的東西。用迴圈！用 repeat 區塊！所以我們把 position 設成 10，然後用一個 repeat 區塊，在裡面呼叫 `plant`，也就是把 `plant` 函式用上八次。

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

你覺得會發生什麼事呢？

嗯，它會種八朵花，但每次都會種在同一個位置，這並不是我們想要的。

所以我們花點時間想想，Jiki 在這裡到底做了什麼。他做了一個貼著 position 標籤的盒子，把 10 放進去。然後他讓 `plant` 機器運轉八次。每一次，他都從 position 盒子裡拿出值。那個值永遠是 10，所以他每次投入的都是同一個 10。

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki 從架上拿下 position 盒子，把裡面那個 10 投入 plant 機器"
  width="400"
  height="400"
/>

所以我們需要的，是一個能每次往前移動一點的方法。種完一朵花之後，我們想告訴 Jiki 把 position 往前移 10，好準備種下一朵花。

那麼先不管程式碼，單就邏輯來說，這件事該怎麼做呢？如果我對你說：「第一朵花種在 10，下一朵種在 20，再下一朵種在 30。」你的腦袋怎麼知道下一朵該種在 40，再下一朵該種在 50？

你的腦袋做的事，就是記住目前的數字，把它加 10，然後在腦中更新那個數字。

我們在程式碼裡也能做一模一樣的事。要做到這點，我們會說：「把 position 盒子更新（英文：_Update_）成目前的 position 值加 10。」

當 Jiki 看到這行，他會從 position 盒子拿出目前的數字，加上 10，做這個加法，把它們加起來，然後把結果放回盒子裡，留給下一次用。

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki 從 position 盒子拿出 10，加上 10 變成 20，再把 20 放回盒子裡"
  width="427"
  height="400"
/>

所以如果我們把這段加進程式裡，變成：「把 position 的初始值設成 10」，然後種八次花，每次都種在 position 指的位置上，接著把 position 改成比原本大 10，我們的程式就能運作，種出八朵間隔開的花。

注意，我們更新變數時並沒有用 `let`（宣告變數）。這非常重要。當 Jiki 看到 `let`，他會建立一個新盒子。但在這裡，我們不想建立新盒子，我們想改變的是已經有的那個盒子裡的內容。

另外注意，我們只在迴圈外面建立一次盒子。這點要記得：在程式開頭建立一次盒子，之後每次迴圈執行時更新它。

我們可以更新盒子裡的內容，並用這個能力來追蹤會隨時間改變的東西。你之後會不斷用到這個模式：追蹤位置、計算某件事發生了幾次、記分數。每當你需要記住某個會隨著程式執行而改變的東西時，就是這樣做喔。
