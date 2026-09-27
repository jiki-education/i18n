---
title: "`||`（或）運算子"
description: "用 `||` 結合兩個條件，只要其中至少一個部分為 true，整個條件就為 true。"
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

我們也可以用 or，不過很遺憾，JavaScript 裡同樣沒有 or 這個關鍵字。我們得改用兩條並排的直線（英文：_bars_）來表示 or。看起來很奇怪，其實一點也不。你很快就會習慣了喔。

所以我們可以說，只要一個人超過 20 歲，或者穿著迪斯可裝扮，就可以進來。這樣一來，我們就會有一場有趣的派對，裡面有穿著迪斯可裝扮的小孩，還有穿得很隨便的大人，聽起來滿合理的。

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki 在派對門口迎接穿著迪斯可裝扮的小孩和穿著隨性的大人"
  width="327"
  height="400"
/>

不管是 and 還是 or，都有一個地方很容易讓人搞混，那就是 and/or 的每一邊都必須是完整的比較。所以就算兩邊比較的是同一個變數，你還是得把它再寫一次。你不能寫`if age is less than 13 or greater than 20`，必須寫成`if age is less than 13 or age is greater than 20`。兩邊都必須是完整的比較才行。

```javascript
if (age < 13 || age > 20)
```

你要想一想，什麼時候兩個條件都重要，什麼時候只要其中一個為 true 就好。
