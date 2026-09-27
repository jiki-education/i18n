---
title: "字串串接"
description: "用`+`把字串加起來，將固定的文字和變數黏合成一個更長的字串。"
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

你已經知道字串是什麼了。它們就是寫著文字的紙片。

到目前為止，你用過的每個字串，都是自己直接打出來的。那如果你想根據變數或條件來組出一個字串，該怎麼辦呢？我們要怎麼做？

有兩種方式。

第一種叫做字串串接（英文：_string concatenation_），這是一個聽起來文謅謅、又有點讓人困惑的說法，其實就是把兩個字串加在一起。

想像你有兩個詞，`"hello"`（你好）和`"world"`（世界），而你想建立一個包含`"hello world"`的字串。

你可以直接把`"hello world"`寫成一個字串，但也可以寫成`"hello " + "world"`，兩者得到的會是同一個字串。

當然，在這個情況下，這樣做並沒有什麼用。但如果我們有一個變數，裡面放著某個人的名字，而我們想向他打招呼呢？

所以，想像我們有一個叫做`name`（名字）的變數，有時候裡面裝著`"Jeremy"`（Jeremy 這個名字），有時候裝著`"Jiki"`（Jiki 這個名字）。我們想用這個變數說出`"hello Jeremy"`或`"hello Jiki"`。

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki 抱著一個標著 name 的盒子，裡面可以裝不同的值"
  width="207"
  height="400"
/>

嗯，用串接這個概念就可以做到：

```javascript
"hello " + name // "hello Jeremy" 或 "hello Jiki"
```

這樣一來，`name`盒子裡裝的是什麼，就會決定我們得到的是`"hello Jeremy"`、`"hello Jiki"`，還是對其他任何人的問候。
