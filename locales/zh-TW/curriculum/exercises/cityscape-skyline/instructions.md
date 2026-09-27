---
title: "天際線"
description: "用隨機的建築物打造一整座城市的天際線。"
en_md5: cb89a31566f55397d19e1375dbac44cc
---

在摩天大樓練習中，你打造了一棟高度不一的摩天大樓。這次我們要更進一步，做出一整座天際線，由高度和寬度都不同的建築物組成。

你有一個函式`numBuildings()`（建築物數量），它會告訴你這個情境需要蓋幾棟建築物。另外還有`randomWidth()`（隨機寬度）和`randomNumFloors()`（隨機樓層數）兩個函式。你要用它們來決定這個情境中每棟建築物的寬度和樓層數。第一次呼叫這些函式時，它們會回傳第一棟建築物的值，依此類推。

建築物左邊一開始會空出`1`欄的間距，彼此之間也空出`1`欄的間距。

所以如果有一個情境，`numBuildings()`回傳`2`，`randomWidth()`依序回傳`5`和`7`，`randomNumFloors()`依序回傳`4`和`8`，你就會得到這樣的排列（其中`xxxxx`是混凝土地板）：

```
       WWWWWWW
       WGGGGGW
       WGGGGGW
       WGGGGGW
 WWWWW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGGGW WGGGGGW
 WGEGW WGGEGGW
xxxxxxxxxxxxxxxxxxxxxxx
```
