---
title: "字串"
description: "用引號包起來的文字（一個字母、一個單字、一個句子，或是一整段文章），Jiki 會把它寫在紙上。"
en_md5: 89b04f3849f9388a46734924f35c913c
---

當你想要使用數字時，你真的只需要把那個數字寫下來，Jiki 就會知道你的意思了。但是，如果你想要使用的是一個字母、一個單字，或是一個句子呢？舉例來說，在使用`rectangle`（矩形）函式或是`circle`（圓形）函式時，如果你有一個額外的輸入用來指定顏色，那該怎麼辦呢？我們要怎麼寫下顏色，才能把它放進機器裡呢？如果我們只寫下`green`（綠色）或是`blue`（藍色）這幾個字，Jiki 會以為我們指的是架子上的某台機器，然後他就會說：「這裡沒有叫做 green 的機器喔，我不知道該怎麼辦。」

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="Jiki 站在矩形機器旁感到困惑，頭上冒出問號"
  width="446"
  height="400"
/>

所以我們有一個規則，那就是每當我們需要使用文字時，我們必須把它放在引號裡面，也就是雙引號裡面。當你像這樣把東西放在引號裡時，Jiki 就會拿出一張紙，把你放在引號裡面的內容寫在那張紙上，而我們把這些紙稱為字串（英文：*strings*）。

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="Jiki 在一張紙上寫下 green 這個字，這張紙就變成了一個字串"
  width="398"
  height="400"
/>

字串可以是單一的字母、單字、句子、段落，甚至是一整本書。規則就是：如果是文字，我們就把它放在引號裡，然後它就會變成一個字串。

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="白板上展示了引號內不同長度的字串：一個字母、一個單字、一個句子，以及多行的地址"
  width="500"
  height="398"
/>

所以，如果我們想要一個藍色的矩形，我們會寫下它左邊位置、上方位置、寬度以及高度的數字。但是對於第五個輸入，我們要寫下加上引號的`"blue"`。

```javascript
rectangle(10, 20, 30, 40, "blue")
```

Jiki 會從架子上把機器拿下來，把一些硬幣放進前四個投入口。接著，他會在一張紙上寫下 blue，然後把那張紙放進第五個投入口，最後執行這台機器。

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="Jiki 將藍色的紙放進矩形機器的第五個投入口，而前四個投入口裡放著硬幣 10、20、30、40"
  width="500"
  height="392"
/>

字串是那種一開始會讓人覺得有點嚇人的技術名詞之一，但它其實就只是文字的意思。你很快就會習慣它的，這並沒有什麼神奇的地方喔。
