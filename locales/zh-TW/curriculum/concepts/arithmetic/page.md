---
title: "算術"
description: "把變數和數學結合起來，讓值能透過加法、減法、乘法和除法彼此關聯、互相依存。"
en_md5: 7ce54754a3ca29896609a01a51b12377
---

到目前為止，我們建立變數時都只用了一些簡單的值：像是`50`這樣的數字，或是`"yellow"`這樣的字串。變數真正強大的地方，在於我們能把它們彼此組合使用。這樣一來，我們就能說長方形的左邊應該距離畫布邊緣一定的距離。

在程式設計裡，我們可以使用一般的基本數學運算，像是加、減、乘、除，也能把已經設定好的變數放進這些運算裡。

我們先假設要在畫布上畫一個長方形，而且它距離左邊和右邊各 10，距離上方和下方各 20。這樣它就會落在畫布的正中央，寬度比高度稍微大一點。

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="一個藍色長方形置於畫布中央，距離左右兩邊各 10、距離上下兩邊各 20"
  width="399"
  height="400"
/>

當我們要畫一個長方形時，需要知道它的`left`（左邊）、`top`（上方）、`width`（寬度）和`height`（高度），以及它的顏色。所以我們可以先把它寫出來。

接下來，我們得實際算出它的`left`、`top`、`width`和`height`應該是多少。那就來設定吧。`left`是 10。`top`是 20。`width`呢，嗯，`width`就是畫布的大小，也就是 100，減掉左邊的 10 和右邊的 10，所以是 80。而`height`就是畫布的高度，同樣是 100，減掉上方的 20 和下方的 20，所以是 60。

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

這樣我們就能設定這些變數了：`left`是 10、`top`是 20、`width`是 80、`height`是 60。但要是我們現在想讓長方形往內縮一些、變小一些，會怎樣呢？如果我們想讓它距離左右各 20、距離上下各 30 呢？我們就得全部重新算一遍。`width`現在是 100 減 20 減 20，`height`是 100 減 30 減 30，而這肯定比我想要做的還費工，還得算更多數學。所以我們可以改叫電腦幫我們算。

我們可以把`width`設成 100 減`left`再減`left`，把`height`設成 100 減`top`再減`top`，因為上下留的距離是一樣的。或者寫成 100 減`left`乘以 2，或是 100 減`top`乘以 2。

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

現在只要改變`left`或`top`，`width`和`height`也會跟著改變。所以這些東西開始互相產生關聯了。那畫布呢？它現在是 100。但如果我們的畫布變成寬 200、高 200 呢？嗯，我們或許應該設一個叫`canvasSize`（畫布大小）的變數，把它設成 100。現在，`width`就是`canvasSize`減`left`乘以 2，`height`就是`canvasSize`減`top`乘以 2。

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

我們來想想，當我們寫下 let `height`等於`canvasSize`減`top`乘以 2 時，Jiki 在做什麼。嗯，他會先把寫著`top`的那個盒子從架子上拿下來，發現裡面是 30，接著掏出他的口袋型計算機，算出 30 乘 2，然後在腦中記下 60。

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki 從架子上拿下寫著 top 的盒子，算出 30 乘以 2 等於 60"
  width="377"
  height="400"
/>

接著他從架子上拿下寫著`canvasSize`的那個盒子，發現裡面是 100，並算出 100 減 60 等於 40。現在他知道，我們其實是在說 let `height`等於 40。於是他聽從 let 的指示，拿一個新盒子，在上面寫下`height`，然後把 40 放進去。之後當他用到`height`時，就是把 40 再拿出來用。

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki 拿一個新盒子，在上面寫下 height，然後把 40 放進去"
  width="462"
  height="400"
/>

等你在練習裡讓一切都運作起來之後，玩玩看，改變這些變數的值，看看會發生什麼事。觀察它們怎麼變大、怎麼變小。慢慢來，想想這些東西之間的關係。
