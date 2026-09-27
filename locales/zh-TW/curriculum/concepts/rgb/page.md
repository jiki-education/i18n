---
title: "RGB 顏色"
description: "混合紅、綠、藍三色光，從 0 到 255，就能在螢幕上調出你想要的任何顏色。"
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB 讓我們可以把顏色想成紅、綠、藍的混合。這就是 RGB 三個字母代表的意思：紅（英文：_red (R)_）、綠（英文：_green (G)_）、藍（英文：_blue (B)_）。如果你還記得在學校混顏料的經驗，道理其實很像，只是我們混的不是顏料，而是光。

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="三個互相重疊的紅、綠、藍光圓圈，混合出黃、洋紅、青與白"
  width="500"
  height="390"
/>

在很多練習裡，你會用到一個叫做`rgb(red, green, blue)`的函式，它會接受三個數字當作輸入，分別代表紅、綠、藍，然後回傳一個顏色。

你能當作輸入的數字範圍是從 0 到`255`。0 代表這個顏色我一點都不要，`255`代表盡可能把這個顏色加到最多。所以如果我們用`rgb`函式，輸入`255`、0、0，意思就是我要全部的紅。記住，`255`是這裡能放進去的最大數字。但我們完全不要綠，也不要藍，所以這兩個都是 0。這樣我們就會得到紅色，可以把這個紅色存進變數裡，然後像我們之前用那些有名字的字串一樣，把它用在`circle`函式裡。那如果`rgb`函式輸入 0、`255`、0 呢？這樣就是不要紅、全部綠、不要藍，所以會得到一個綠色的圓。那如果我們想要黃色呢？黃色是紅加綠的混合，所以我們可以說：給我全部的紅、全部的綠，不要藍，這樣就會得到黃色。我們也可以用更小一點的數字。如果想要一點紅、不要綠、很多藍，就會得到紫色。而很多紅、一點綠、再多一點藍，就會得到粉紅色。這就是 RGB。我們混合紅、綠、藍，得到各種不同的組合。

```javascript
rgb(255, 0, 0) // 紅色
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="一個由 rgb(255, 0, 0) 產生的紅色圓形，全紅，沒有綠也沒有藍"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // 黃色
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="一個由 rgb(255, 255, 0) 產生的黃色圓形，全紅加全綠，沒有藍"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // 粉紅色
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="一個由 rgb(230, 50, 170) 產生的粉紅色圓形，大量的紅、一點綠和一些藍"
  width="436"
  height="400"
/>

當你想調整某一個特定成分，也就是紅多少、綠多少、藍多少時，RGB 就非常好用。
