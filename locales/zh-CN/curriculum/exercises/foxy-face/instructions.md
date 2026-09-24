---
title: "狐狸脸"
description: "用彩色三角形构建几何风格的狐狸脸。"
en_md5: ace60854184185ffc1ec1e82e45af4bf
---

本练习向你介绍`triangle`（三角形）函数。你需要为它提供 7 个输入。前 6 个输入是三个角点的坐标对，最后一个输入是`color`：

- `x1`（第一个角点的 x 坐标）、`y1`（第一个角点的 y 坐标）：第一个角点
- `x2`（第二个角点的 x 坐标）、`y2`（第二个角点的 y 坐标）：第二个角点
- `x3`（第三个角点的 x 坐标）、`y3`（第三个角点的 y 坐标）：第三个角点
- `color`（颜色）：三角形的颜色（例如`"orange"`）

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="三角形函数示意图" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 绘制狐狸脸

你的任务是使用三角形来构建一个几何风格的狐狸脸：

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="狐狸脸" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

这张脸左右对称（左侧和右侧完全一样），总共由 8 个三角形组成：

- 两片`"white"`面颊
- 两只`"brown"`耳朵
- 两个`"orange"`的半边脸
- 一个`"charcoal"`鼻子（由两个三角形组成）

（绘制三角形时，请务必使用这些颜色，并且记住要把它们写成字符串（英文：string）！）

### 算出正确的坐标

我们已经为你画出了某些部分的轮廓，帮助你入门。如果你**按照注释中给出的顺序**来画，就会发现事情会稍微轻松一些。

和之前的练习一样，你可以**把鼠标悬停在画布上**来找到坐标，而且**用到的所有数字都能被 5 整除**（例如`5`、`10`、`15`等都是有效的）。

祝你好运！
