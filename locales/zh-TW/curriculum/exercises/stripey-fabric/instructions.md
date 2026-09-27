---
title: "條紋布料"
description: "正確選出每一條條紋的顏色，織出條紋圖案。"
en_md5: ba93b39f1883d50139d243a16e3c204f
---

你正在設計一個演算法，要織出一捲條紋布料，成果看起來像這樣：

<svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="二十條垂直條紋：兩端是紫色，中間是綠色、藍色和黃色條紋" style="width: 200px; height: 200px; display: block; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;padding:4px;margin-top:-8px">
  <rect x="0" y="0" width="5" height="100" fill="#A020F0" />
  <rect x="5" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="10" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="15" y="0" width="5" height="100" fill="#008000" />
  <rect x="20" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="25" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="30" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="35" y="0" width="5" height="100" fill="#008000" />
  <rect x="40" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="45" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="50" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="55" y="0" width="5" height="100" fill="#008000" />
  <rect x="60" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="65" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="70" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="75" y="0" width="5" height="100" fill="#008000" />
  <rect x="80" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="85" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="90" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="95" y="0" width="5" height="100" fill="#A020F0" />
</svg>

這個圖案是由`"yellow"`、`"blue"`、`"yellow"`、`"green"`不斷重複組成的序列。第一條和最後一條條紋是`"purple"`。

你設計用的畫布寬`100`、高`100`。你需要畫出`20`條條紋，每條寬`5`。

### 練習規則

這個練習沒辦法只靠寫 20 個長方形敘述就解決。你的程式碼要能套用到任何大小的布料。其實，你在程式碼裡只能使用一次`rectangle(...)`（長方形）函式！

相反地，你需要改用迴圈，並使用我們在上一部教學影片看過的餘數（英文：_remainder_）運算子（英文：_operator_）。仔細思考這些敘述的順序，這是解開這個練習的關鍵。

慢慢來，玩得開心喔！
