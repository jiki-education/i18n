---
title: "字串索引"
description: "用方括號加上位置編號，從字串裡取出單一字母。記得，位置是從 0 開始算的。"
en_md5: cd31e0366b3090b358494667003f54c9
---

想像一下，你手上有我的名字 Jeremy，而你想從裡面取出開頭的那個字母 J。那我們該怎麼做呢？

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki 正在思考要怎麼從字串裡取出單一字母"
  width="361"
  height="353"
/>

你可以把字串想成是一連串的字母。所以 `"Jeremy"`有六個字母，J-E-R-E-M-Y，每個字母都有一個位置。`"J"`在第一個位置，`"y"`在最後一個位置。

在 JavaScript 和大多數程式語言裡，這些位置是從 0 開始算的。所以第一個字母 `"J"`在位置 0，接下來 `"e"`在位置 1，`"r"`在位置 2，`"e"`在位置 3，`"m"`在位置 4，`"y"`在位置 5。

這種從 0 開始算的做法其實滿奇怪的。老實說，如果像正常世界那樣從 1 開始數，日子會好過得多。但我們不是這樣。大多數程式語言都改成從 0 開始數，所以你只能把這個規則記下來。

所以如果想取得某個特定位置上的字母，我們可以用方括號，把數字寫在裡面。

當我們寫 `"Jeremy"[0]`，意思就是「給我 `"Jeremy"` 這個字的第一個字母」。

寫 `"Jeremy"[1]`，就是「給我第二個字母」。

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

變數也一樣可以這樣做。如果我們建立一個叫 `name`（名字）的變數，把它的值設成字串 `"Jeremy"`，那我們就能寫 `name[0]`，又會拿到 `"J"`。

```javascript
let name = "Jeremy"
name[0] // "J"
```

有一點要說清楚：你從 `name[0]`拿到的，只是另一個字串。它是另一張紙，上面寫著 J。它沒什麼特別的喔，就跟 `"Jeremy"`一樣，是個字串。

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki 拿著一張全新的紙，上面只寫著字母 J"
  width="500"
  height="289"
/>

只是這張紙上剛好只有一個字母，而不是六個。

而且這樣做完全不會影響原本的字串。我們不是把 J 撕下來之類的。我們只是找出想要的那個字母，再用它做一個新的字串。
