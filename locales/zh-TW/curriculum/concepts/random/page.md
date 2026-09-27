---
title: "隨機數字"
description: "使用`Math.randomInt`並傳入最小值與最大值，讓函式每次執行時都回傳不同的數字。"
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

寫程式時，我們常常會希望某個函式每次都能回傳不同的隨機數字（英文：_random number_）。

這種東西在各種地方、各種情況下都很有用，尤其在密碼學裡更是如此。在密碼學中，我們常會做很多像「產生機器之間互相傳遞的密碼」這樣的事，而這些密碼必須是隨機的，才不會被破解。

為了幫上忙，你有一個現成的函式叫做`Math.randomInt`（Math 代表數學，randomInt 代表隨機整數）。你可能會注意到，它的中間有一個點。當你能用的函式越來越多，我們可以把這些函式分成不同的群組，讓一切保持井然有序，而`Math`（數學的縮寫）就是這個函式所屬群組的名稱。它會告訴 Jiki 該去看架子的哪一區，在這裡就是`Math`區。那個點只是表示：走到這一區，找到那個函式。現在先不用太在意這件事。練習的指示都會告訴你有哪些函式可以用，以及怎麼使用它們。真正要理解的重點是：當 Jiki 使用這個函式時，他每次執行都會拿到不同的數字，但有一個限制。這個函式有兩個輸入。第一個是這台機器可以回傳的最小數字，第二個是這台機器可以回傳的最大數字。所以如果你用`Math.randomInt`函式，傳入`10`和`13`，拿回來的永遠會是`10`、`11`、`12`或`13`。但你每次拿到的都會不一樣。

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki 爬著梯子，往他倉庫架子的 Math 區域上去"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Math.randomInt 機器，上方有兩個輸入漏斗"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Math.randomInt 機器，輸入漏斗裡放著 10 和 13，產出 10、11、12 或 13"
  width="488"
  height="400"
/>

那我們來想像一下吧：你想在畫布上的隨機位置畫一個圓。你可以用`Math.randomInt`，每次隨機取得不同的`left`和`top`值，但把範圍限制在比如說`10`和`90`之間，這樣它就不會超出畫布。每次執行這段程式碼，圓都會畫在稍微不同的位置。
