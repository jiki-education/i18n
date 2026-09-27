---
title: "企鵝"
description: "完成一幅對稱的企鵝圖。"
en_md5: 5a0659ec6a7911fcebe11756dae664f7
---

在這個練習裡，我們第一次畫橢圓，也會再想一想之前在 Foxy Face 提過的對稱。

這個練習會用到橢圓。橢圓就像是拉長的圓形。我們一樣要指定圓心，不過不是只給一個半徑，而是給兩個：水平半徑和垂直半徑。如果垂直半徑比水平半徑大，橢圓看起來就會高高的；反過來，如果水平半徑比垂直半徑大，橢圓看起來就會扁扁的。如果把兩個半徑設成一樣，那就又變成一個圓了！

`ellipse`（橢圓）函式接受 5 個輸入：圓心位置（`centerX`、`centerY`）、水平半徑（`radiusX`）、垂直半徑（`radiusY`），以及顏色：

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="橢圓函式示意圖" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 企鵝

我們已經幫你畫好了圖的一半。你的任務是把企鵝右半邊畫出來。完成後的圖應該長這樣：

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="企鵝" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 算出正確的座標

和之前的練習不同，這次的目標是**不要**靠把滑鼠移到座標上查看，也不要憑猜測，而是自己解出來。

只要讀懂已經寫好的程式碼，你就能推算出其他細節，讓圖形左右對稱。記住，畫布的左上角是 `0,0`，右下角是 `100,100`，而企鵝就坐在正中間。

鼻子的部分，請**修改**三角形中間的座標，不要新增一個三角形。

**先按下「Run Code」**，看看起始的圖形長什麼樣子。祝你玩得開心！
