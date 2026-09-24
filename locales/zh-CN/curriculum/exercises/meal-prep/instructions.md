---
title: "备餐"
description: "算出做这道菜还需要买哪些食材。"
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

你是那种喜欢每天去趟商店、买齐晚饭所需食材的人。这正好给了你一个不错的借口，出门走走，顺便和店老板聊上几句。

每天你先挑好一个菜谱，再看一眼冰箱里有什么，然后把需要买的东西记下来。

现在，你决定写个程序替你干这些麻烦事，让日子轻松一点！它会把你清单上的东西和冰箱里的东西做对比，然后输出差集。

你的任务是写一个函数，名字叫 `shoppingList(fridgeContents, recipeItems)`（购物清单）。它接收两个输入：冰箱里的东西，是一个字符串数组；以及菜谱里的食材，同样是一个字符串数组。它应该返回你需要买的东西，形式是一个字符串数组。

比如：

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### push 方法

要解出这道练习，你需要用`.push(element)`方法把数组一点点构建出来。你的代码里只能新建一个数组。如果不确定该怎么做，就再看一遍前面的视频。

你也可以用`includes`方法（下面有复习提示）。

玩得开心！
