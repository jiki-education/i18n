---
title: "讓函式回傳值"
description: "使用`return`關鍵字，讓你自己寫的函式有一個出料口，能把值交回給呼叫的一方。"
en_md5: 51d31f709a7051c29b499a31ad68555e
---

你現在已經知道怎麼建立有輸入和沒有輸入的函式了。只要再學最後一件事，你就是寫函式的專家了喔！那就是怎麼讓你的函式有出料口。

你已經用過很多會回傳東西的函式了。`isAlienAbove`（判斷上方有沒有外星人）會回傳 true 或 false。`Math.randomInt(1, 10)`（Math 是數學，randomInt 是隨機整數）會回傳一個隨機數字。

當 Jiki 使用那些函式時，就會有東西從出料口彈出來，他就可以拿去用。

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki 從機器的出料口接住彈出來的值"
  width="500"
  height="312"
/>

所以要做到這件事，我們需要另一個新的關鍵字，那就是`return`關鍵字。

`return`關鍵字會告訴 Mini Jiki 把某個東西從出料口推出去。

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="機器裡的 Mini Jiki 把 42 這個值從出料口推出去"
  width="500"
  height="335"
/>

那我們來做一個函式，把它叫做`meaningOfLife`（生命的意義）。這個函式的任務永遠只有一個，就是回傳數字`42`。它沒有任何輸入。我們會這樣寫：

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="meaningOfLife 機器把數字 42 從出料口送出去"
  width="500"
  height="323"
/>

現在，只要我們在程式碼裡用到`meaningOfLife()`，就會拿回數字`42`，可以像其他任何值一樣拿來用。我們可以用`let`把它放進盒子裡，可以把它當成輸入傳給另一個函式，也可以在`if`敘述裡比較它。

會回傳值的函式也可以接受輸入。你可能會寫一個`ageBracket(age)`（年齡層）函式，當`age`小於 18 時回傳`"Sorry, too young"`，否則回傳`"Welcome"`。不管是誰呼叫它，拿到的就是函式當時回傳的那個字串。

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="年齡值被投進機器的投入口，讓它決定要回傳什麼"
  width="487"
  height="400"
/>

程式設計的核心運作方式就是這樣。我們做出很多這樣的小積木，再把它們拼湊成完整的程式。
