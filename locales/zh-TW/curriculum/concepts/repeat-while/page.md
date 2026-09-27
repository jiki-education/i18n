---
title: "使用`repeat`但不指定次數"
description: "把 repeat 迴圈的括號留空，讓 Jiki 一直做下去，直到有其他東西叫他停下來。"
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

到目前為止，你每次使用 repeat 迴圈時，都會指定一個數字，說明要重複幾次。重複 5 次、10 次、40 次。有時候你也會用變數來做這件事。但你一直都明確告訴 Jiki 迴圈要重複幾次。不過，有時候我們事先並不知道要重複幾次。想想迷宮。在這門課程一開始的時候，你是靠寫出明確的移動指令來解開迷宮的。你可以看見整座迷宮，數一數要走幾步，然後寫出正確數量的移動指令。

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="一座迷宮，角色可以看到路徑、數出要走幾步，並寫出完全正確的移動指令"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

但如果我說：「寫一段能解開我給你的任何迷宮的程式碼」呢？那個迷宮可能需要走 10 步，也可能是 50 步或 200 步。你事先根本不會知道。

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="好幾座形狀和大小都不同的迷宮，Jiki 正在苦惱要怎麼解開每一個"
  width="402"
  height="400"
/>

所以，你需要一個方法，直接叫 Jiki 一直做下去。不斷查看自己能往哪裡走、不斷做決定、不斷往前移動，一次又一次，直到完成為止。

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki 在跑步機上跑著，就這樣一次又一次地持續下去"
  width="428"
  height="400"
/>

做法真的很簡單喔。只要不給`repeat`關鍵字數字就好。把那兩個括號留空。只要你這麼做，Jiki 就會一直做下去，直到有其他東西叫他停下來。之後我們會再看看那些「其他東西」是什麼。但目前為止，他就會一直做下去，直到練習結束，或者直到他覺得自己已經做了超級久、想休息一下，決定夠了為止。

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki 跑了很久之後氣力放盡地癱在跑步機上，準備放棄、好好休息一下"
  width="500"
  height="378"
/>
