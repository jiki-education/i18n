---
title: "為函式加上輸入"
description: "為你自己的函式加上投入口，讓它們能根據傳入的值做不同的事。"
en_md5: f70d737888fcbda3306196ff069eb2f1
---

到目前為止，你寫的函式每一次都做一模一樣的事。`turnAround`（轉身）總是向左轉兩次。`shootIfAlienAbove`（上方有外星人就射擊）總是先檢查、再射擊。

但想想你在這門課程裡一路用過的那些函式，它們會根據輸入做不同的事。Rectangle 會把 left、top、width、height 當成輸入，然後根據你告訴它的內容，畫出不同的長方形。

現在，我們也要替自己的函式加上投入口喔。

要做到這件事，你需要知道兩件事。第一是它實際上長什麼樣子、你需要寫些什麼，第二是實際上發生了什麼事。

第一件事很簡單。你只要加上一對普通的括號，然後寫上你想要的輸入名稱就好。

所以，想像我們要建立一個應該射擊很多次的函式，就叫它`shootMany`（射擊多次）吧。

我們會這樣寫：

```javascript
function shootMany(numShots) {
  // ...
}
```

當你想使用這個函式時，就用你想要的射擊次數來呼叫它：

```javascript
shootMany(5)
shootMany(2)
```

接下來是關鍵的地方。當程式執行時，不管你放進那個輸入的是`5`還是`2`，函式裡那個戴著帽子的迷你 Jiki 都會把那個輸入放進一個叫做`numShots`（射擊次數）的盒子，然後把盒子放到函式裡的架子上，讓你在函式的程式碼裡使用。

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="迷你 Jiki 在 shootMany 機器裡，把輸入放進標著 numShots 的盒子"
  width="500"
  height="376"
/>

我再說一次。

當我們寫`shootMany(5)`來使用這個函式時，外面的 Jiki 會去拿一個`5`，把它放進`shootMany`的投入口。在機器裡面，迷你 Jiki 會把那個`5`拿出來，放進一個叫做`numShots`的盒子，因為那正是你替這個投入口取的名字；接著他會把這個盒子放到機器裡、函式內的架子上。

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="迷你 Jiki 把 numShots 盒子放到 shootMany 機器裡的架子上"
  width="500"
  height="302"
/>

然後在函式裡面，你就可以像使用任何其他盒子一樣，直接使用`numShots`盒子。`numShots`這個名字沒有任何神奇的地方。我們想叫它什麼都可以。它只是給迷你 Jiki 的一道指令：每次都要在函式裡建立一個貼著那個標籤的盒子，並且把傳進那個投入口的東西放進那個盒子裡。

一旦盒子裡有了值，你就能做任何平常對盒子做的事。你可以把`numShots`盒子用在`repeat` 迴圈裡，射擊正確的次數。你也可以有不只一個輸入，只要用逗號把它們隔開就好。所以，如果我們有一個叫做`drawStar`（畫星星）的函式，它會根據左上角的位置畫出一顆星星，我們就會這樣寫：

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="有兩個投入口的 drawStar 機器，接收兩個各自獨立的值"
  width="453"
  height="400"
/>

然後當函式被呼叫時，迷你 Jiki 就會把傳進輸入的值存進叫做`left`（左邊）和`top`（上方）的盒子裡，再把這些盒子放到函式裡的架子上。

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="迷你 Jiki 把兩個輸入存進標著 left 和 top 的盒子，放到 drawStar 機器裡的架子上"
  width="431"
  height="400"
/>
