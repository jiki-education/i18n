---
title: "雪人"
description: "用三个圆绘制一个雪人"
en_md5: 6fec2ba8f8e20c68c2168c199fa0cf8d
---

这个练习向你介绍 `circle` 函数，我们会用到 3 个输入（英文：input）：

- `centerX`（圆心的水平坐标）：圆心的水平（x）坐标
- `centerY`（圆心的垂直坐标）：圆心的垂直（y）坐标
- `radius`（半径）：圆的大小

这张图应该会让事情更清楚：

<img src="/static/images/exercise-assets/snowman-basic/intro-circle.webp" alt="雪人" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 绘制雪人

你的任务是绘制三个白色圆形来构建一个雪人。这个雪人有：

- 底部一个大大的 **底座** 圆
- 中间一个中等的 **身体** 圆
- 顶部一个小小的 **头** 圆

三个圆形都应该水平居中于画布。可以参考目标图片来操作。

和之前一样，你在一张宽 100、高 100 的画布上绘制。所以画布的左上角是 `0,0`，右下角是 `100,100`。

### 算出正确的坐标

你可以 **把鼠标悬停在绘图区域上** 来查看坐标。

本练习中，**用到的所有数字都能被 5 整除**（例如 `5`、`10`、`15` 等都可以，而 `1`、`2`、`3`、`4` 等就不行）。
