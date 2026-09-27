---
title: "屬性"
description: "關於某個值的一些固定不變的事實，用點存取，後面不加括號，例如用 `.length` 查出一個字串有幾個字母。"
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

到目前為止，我們想到字串或數字的時候，都把它們當成相當固定不變的東西。

它們的確是這樣，不過它們同時也內建了很多 Jiki 可以運用的功能。

接下來我們要看的有兩種能力：屬性和方法。

屬性就是關於某個東西的事實，我們可以請 Jiki 告訴我們。舉例來說，字串有一個叫做`length`（長度）的屬性，Jiki 可以用它告訴我們一個字串有多長。

所以我們不必自己寫一個迴圈，把每個字母逐一數過，來算出字串有多長，只要請 Jiki 告訴我們就好。

而要這麼做，我們會用到一種新的語法：點。

舉例來說，如果有一個字串`"Jeremy"`，我們想知道它的長度，可以這樣寫：

```javascript
"Jeremy".length // 6
```

Jiki 建立字串時，會把字母數一數，然後在角落寫下一個數字，記著總共有多少個。

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki 數著字串 Jeremy 的字母，並把數字寫在角落"
  width="359"
  height="400"
/>

而當我們使用`length`屬性時，Jiki 就會去查看那個數字是多少。以`"Jeremy".length`這個例子來說，Jiki 建立字串`"Jeremy"`時，會把字母數一數，在角落寫下數字 6，之後我們寫`"Jeremy".length`，他就會去查看那個數字。所以你可以把屬性想成是關於那個東西的一些事實喔。
