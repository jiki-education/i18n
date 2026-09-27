---
title: "將多個函式組合起來使用"
description: "把問題拆成多個各司其職的小函式，讓它們互相呼叫，這樣每一部分都能保持簡單、可以重複使用。"
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

到目前為止，你寫過的每個函式幾乎都是自己站穩腳步，把運作所需的邏輯全都包在裡面。

接下來我們要來看看怎麼把函式拆開，變成幾個互相合作的小函式，而不是一個塞滿各種東西的大函式。

寫程式有個通則：每個函式都應該做最少的事。我們說這樣的函式具有單一職責（英文：_single responsibility_）。每個函式只該做一件事，不同的子部分就交給其他函式去做。

我們來看個例子吧。

想像我們有一個函式，它的工作是回傳一個描述名字的字串。

最簡單的版本大概長這樣。裡面有一個計數迴圈，這你已經寫過了，接著再用字串模板把結果拼起來。

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

這樣寫沒問題，但它同時做了兩件事：一件是很通用的計數，另一件則很特定，就是用某種格式把字串組出來。

把這段拆成兩個函式會好得多：一個負責計數，一個負責用這種特定格式描述名字。

```javascript
// 只負責數有幾個字母
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// 只負責把文字排得好看
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

這樣一來，我們就能把這個通用的計數函式重複用在字串格式化上，也能用在任何需要的地方。不管什麼時候需要數字串裡有幾個字母，它都跟列印輸出這件事完全無關。

這兩個函式各自單獨讀，都能馬上懂它們在做什麼。

當你的函式越來越複雜、數量越來越多，這個技巧就是工整好讀的程式碼和一團混亂之間的差別。

這裡有一件事值得再提一次喔：你在函式裡建立的任何東西，除非你刻意回傳它，否則其他函式是取用不到的。

所以如果你想在 `describeName`（描述名字）裡面引用 `count`（計數）這個變數，是行不通的，因為它屬於另一個函式。

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki 頭上亮著一顆燈泡，正想著變數為什麼只留在各自的函式裡"
  width="361"
  height="353"
/>

在 JavaScript 裡，我們可以在最上面、所有東西之前建立變數，讓每個函式共用，但我真的建議你不要這麼做，除非有非常好的理由。

你越能讓每個函式保持獨立，也就是所謂的純函式（英文：_pure functions_），你的程式碼就會越乾淨，你會製造和留下的 bug 也越少。
