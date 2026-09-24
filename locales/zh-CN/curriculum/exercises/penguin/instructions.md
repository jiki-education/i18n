---
title: "企鹅"
description: "绘制出一只对称的企鹅。"
en_md5: 5a0659ec6a7911fcebe11756dae664f7
---

在这个练习中，我们将首次绘制椭圆，同时也进一步思考在《狐狸脸》中提到的对称性。

这个练习用到了椭圆。椭圆就像被拉伸的圆。我们仍然需要指定中心点，但不是用一个半径，而是用两个：水平半径和垂直半径。如果垂直半径大于水平半径，椭圆会显得高。如果水平半径大于垂直半径，椭圆会显得矮胖。如果你让两个半径相等，就又得到圆形了！

`ellipse`（椭圆）函数接收 5 个输入：`centerX`和`centerY`（中心点的坐标）、`radiusX`（水平半径）、`radiusY`（垂直半径），以及颜色：

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="椭圆函数示意图" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 企鹅

我们已经为你画好了图像的一半。你的任务是画出企鹅的右侧。最终完成的画作应该像这样：

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="企鹅" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 推算出正确的坐标

与之前的练习不同，这道题的目标是在**不**悬停查看坐标、也**不**靠猜测的情况下解出来。

通过阅读已有的代码，你应该能推算出其他细节，让画面变得对称。记住，画布的左上角是`0,0`，右下角是`100,100`。企鹅位于正中间。

至于鼻子，你应该**修改**三角形的中间坐标，而不是新增一个三角形。

**先按下“运行代码”**，看看起始图像是什么样子。玩得开心！
