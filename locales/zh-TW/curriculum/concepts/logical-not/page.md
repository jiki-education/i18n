---
title: "`!`（否定）運算子"
description: "用`!`把布林值翻轉過來：true 會變成 false、false 會變成 true，很適合用來切換狀態或反轉判斷。"
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

到目前為止，我們比較兩個東西是否相等時，用的都是三個等號。不過有時候，我們想檢查的是兩邊不相等，這時候就要用一個驚嘆號加上兩個等號。而一般來說，在程式設計裡，一個驚嘆號，或者我美國朋友說的 _bang_（驚嘆號），意思就是「否定」。所以想像一下，你在商店裡工作，管理層決定不准任何迪斯可打扮的人進門。

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="商店門口的保鏢正在檢查排隊人群的服裝"
  width="451"
  height="400"
/>

我們可以說：「如果服裝不是迪斯可，就開門。」而 if 敘述的運作方式也完全一樣。

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

差別只在於：兩邊不一樣時，條件就回傳 true；兩邊一樣時，就回傳 false。所以我們也可以寫成：「如果服裝是迪斯可，就什麼都不做。否則就開門。」不過一般來說，用`not`運算子（英文：_operator_）會更簡單、更俐落，也更能精確表達你真正的意思。

還有一件事跟這個有關。有時候你手上的變數是 true，你想把它翻成 false；有時候某個東西是 false，你想把它翻成 true，我們就可以靠這個來追蹤某個狀態。想像有個東西在左右兩邊來回彈跳，我們有一個變數叫`movingRight`（向右移動），當它該往右移動時，這個變數就是 true。但當它碰到右邊邊界，你想把它切換（英文：_toggle_）成 false 的時候呢？

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="一個 Pong 風格的球場，有球拍和一顆左右來回彈跳的球，示範如何切換 movingRight 變數"
  width="500"
  height="352"
/>

我們可以這樣寫：「如果`movingRight`等於 true，`movingRight`就變成 false；否則，`movingRight`就變成 true。」這是切換這個變數的一種方法。Jiki 會先看看`movingRight`是 true 還是 false，然後算出相反的值，再把它放回盒子裡。

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

不過有更俐落的做法，就是用同一個驚嘆號，也就是 bang：

```javascript
movingRight = !movingRight
```

這樣就把它翻過來了。`!movingRight`的意思是它先前值的相反。

所以如果`movingRight`原本是 true，現在就變成 false；如果原本是 false，現在就變成 true。Jiki 會取出盒子裡目前的值，而那個驚嘆號告訴他要找出相反值。true 的相反是 false，false 的相反是 true，然後他再把它放回盒子裡。這跟前面那串比較長的 if/else 敘述完全一樣，只是寫起來俐落、簡潔得多。
