---
title: "會回傳東西的函式"
description: "接住從函式出料口彈出來的值，並在你的程式中使用它。"
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

到目前為止，我們看過的函式，都是在真實世界裡做事的。`circle`（畫圓圈）函式會畫出一個圓圈，`move`（移動）函式會讓你的角色移動。但有些函式的運作方式不一樣。它們不是在外面做事，而是把某個東西交還給你，讓你在程式裡使用。當函式把東西交還給 Jiki，讓 Jiki 在程式中使用時，我們就會說這個函式正在「回傳」東西（英文：_returning_）。它會把東西回傳給 Jiki。你可以把這些機器想成有一條出料口。我們已經有可以把東西放進去的投入口，不過機器也可以有一個出料口，讓東西從那裡跑回來。當 Jiki 按下機器上的按鈕，機器就會嗡嗡地運轉起來，最後會有東西從出料口彈出來。那可能是一個數字，也可能是一個字串。總之，是 Jiki 可以接住、也可以使用的東西。

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="一台側邊有出料口的機器，準備好要把值送回給 Jiki"
  width="500"
  height="317"
/>

大部分的函式，大概 95% 都會回傳東西。它們可能幫你算點數學，再把值回傳；也可能把幾個字串黏在一起，然後把接好的字串交給你。又或者，每次你啟動那台機器，它就把目前的時間交還給你。我們來看看最後這個吧。假設我們有一個叫做`getCurrentTime`（取得目前時間）的函式。每次 Jiki 啟動這台機器，就會有一張紙從出料口滑出來，上面寫著時間，也許是 14:35。

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="getCurrentTime 機器，一張寫著 14:35 的紙正從出料口滑出來"
  width="500"
  height="312"
/>

然後我們可以用`let`把回傳值放進盒子裡：

```javascript
let time = getCurrentTime()
```

Jiki 會啟動機器，從出料口拿到目前的時間，然後把它存進一個叫做`time`的盒子裡。

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki 把從出料口拿到的 14:35 那張紙放進標著 time 的盒子裡"
  width="372"
  height="400"
/>

這裡有一點很重要：Jiki 放進盒子裡的那張紙，在放進去的那一刻就固定住了。就算程式執行時真正的時間改變了，盒子裡放的還是那張寫著 14:35 的紙。東西一旦放進盒子，它就是固定在那裡的，不會神奇地自己改變。如果之後我們想再把目前的時間放進盒子，就得再用一次`getCurrentTime`函式去取得。

大部分會回傳東西的函式也有輸入。舉例來說，我們可能有一個`join`（串接）函式，它接受兩個字串作為輸入，然後把它們用一個空格接在一起回傳。所以如果我們用一台`join`機器，把`"Hello"`和`"World"`當作輸入，出料口就會跑出一個字串，上面寫著`"Hello World"`。

```javascript
join("Hello", "World"); // "Hello World"
```
