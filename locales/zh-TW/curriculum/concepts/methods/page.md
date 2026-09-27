---
title: "方法"
description: '屬於某個值、並用點記法呼叫的函式，例如 `"Jeremy".includes("e")` 或 `"Jeremy".toUpperCase()`。'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

到目前為止，講到字串或數字，我們都把它們想成相當靜態的東西。

它們確實是這樣沒錯，但本身也內建了很多 Jiki 可以使用的功能。

接下來，我們會陸續認識這些功能，也就是它們具備的種種能力，而這些能力會讓你的日子輕鬆很多。

我們要看的能力有兩種：屬性（英文：_properties_）和方法（英文：_methods_）。

方法就是屬於字串的函式。

所以，與其自己寫一個函式、把字串當成輸入放進去，我們可以直接在字串上使用方法。

舉例來說，還記得你寫過一個函式，用來檢查字串裡有沒有某個特定字母嗎？其實字串本身就有一個叫`includes`（包含）的方法可以做這件事，而且我們用的就是你之前在屬性上看過的那種點記法。

它和屬性的差別在於，我們寫這些東西的時候，會像函式那樣加上括號和輸入。

所以我們可以這樣寫：

```javascript
"Jeremy".includes("e") // true
```

結果會回傳`true`，因為`"Jeremy"`裡面有一個`"e"`。

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki 在紙上寫下 Jeremy 這個字串"
  width="359"
  height="400"
/>

方法和屬性不一樣，因為它們不是靜態的事實，而是真正的函式。你可以把它們想成一種函式，裡面內建了一個盒子，而盒子裡裝著字串。

它們怎麼運作，現在其實不太重要，你還要好一陣子才會自己打造它們。你只需要知道，要用方法就是先寫一個點，再接上平常的函式語法。

關於字串，有一件事要記得：這些方法不會改變字串裡的任何內容。舉例來說，有一個`toUpperCase`（轉成大寫）方法，它會回傳所有字母都變成大寫的字串。但它並不會改變原本的字串，原本的字串裡還是只有開頭 J 大寫的`"Jeremy"`。Jiki 其實是建立了一個全新的、全部大寫的字串。

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
