---
title: "文本编辑器的精彩发展史"
excerpt: "从在纸板上打孔，到能帮你写代码的编辑器。谦逊的文本编辑器背后的故事，以及比当今大多数活人都年长的 Vi 与 Emacs 之争。"
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "文本编辑器的历史，从打孔卡和行编辑器，到 Vi、Emacs、VS Code 以及 AI 时代。想法和运行代码之间的差距是如何不断缩小的。"
  keywords: ["文本编辑器历史", "vi vs emacs", "文本编辑器历史", "代码编辑器历史"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## 引言

从我 30 年前开始写代码起，几乎每天都在用文本编辑器。我试过很多种，偶尔也会对哪个最好变得有点执拗。

在这整个时期，新开发者的第一个成长仪式之一，就是安装并学会使用一款文本编辑器。但随着智能体编程（agentic coding）正在改变开发者的含义，文本编辑器一家独大的时代或许正在走向终结。

所以，我觉得看看文本编辑器的故事会很有意思。从在纸板上打孔、苦等几小时，到在打印机上一次编辑一行，再到比当今大多数活人都年长的 Vi 与 Emacs 之争。

这就是谦逊的文本编辑器的故事。

## 编辑器之前：纸板上的孔洞（20 世纪 50—60 年代）

没有屏幕看着代码编程，这很难想象，但这就是起点。

在 20 世纪 50 年代和 60 年代，屏幕还没发明出来，程序是被实实在在地打在纸板卡（或纸带）上的，每张卡一行代码。“编辑”就意味着重新打一张卡，或者把卡片从一叠里抽出来、插进去。

要是我的代码跑上几秒还不出来，我就会对慢悠悠的反馈循环感到非常沮丧，但在那个年代，反馈是以小时计算的。你得把一沓卡片交给操作员，操作员再把它放进等待运行的任务队列里。几小时，甚至几天之后，你才能拿到打印出来的结果。我想，那时候大概真没“错别字”这回事儿吧……！

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="20 世纪 50 年代的一位键盘打孔操作员，正在往卡片上打孔录入数据" />
  <figcaption>20 世纪 50 年代的一位键盘打孔操作员。照片由美国人口普查局提供，来自 <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>，公有领域。</figcaption>
</figure>

## 计算机开始有了回应（20 世纪 60 年代）

有两项发明把编辑工作从那个缓慢的批处理世界拖了出来，变成了交互式的。

第一项是**电传打字机（teletype）**。电传打字机取代了预先打好孔的成批卡片这一概念。取而代之的是，你在键盘上打字。你每次击键都会实时发送给机器，机器则会把回复直接打印在一卷纸上。仍然没有屏幕，但这是第一次，你与计算机之间有了一个实时的、你来我往的通道，而不是一堆纸板。

第二项是**分时系统（time-sharing）**。没有分时系统，计算机一次还是只能连一个人，速度受限于那个人打字和处理回复的快慢。这导致大量时间浪费在等待人类操作员行动上。分时系统解决了这个问题，它让机器能在不同的人之间快速切换。多个人可以同时连接到一台机器，机器切换得如此之快，以至于每个人都产生了一种整台计算机都归自己使用的错觉。

把这两样加在一起，你就能与机器进行真正的对话了。而一旦能进行对话，你就可以坐在那儿一行一行地编辑代码，而不用重新打孔、暗自祈祷了。第一批真正的编辑器就是干这个的。

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="一台 Teletype Model 33 ASR 终端，其输出打印在纸上而非屏幕上"/>
  <figcaption>Teletype Model 33 ASR。照片由 ComputerGeek7066 提供，来自 <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>，CC BY-SA 4.0。</figcaption>
</figure>

## 行编辑器：ed、QED 与 TECO（1962—1971）

20 世纪 60 年代带来了另一个巨大的范式转变。你的程序不再是你随身携带的实物（一盒卡片），而是变成了一个驻留在计算机自己磁盘上的命名文件。要修改程序，不用再打一张新卡，而是可以真正地编辑你的程序了。

不过，我们仍然没有屏幕。你所执行的一切，以及输出，都会打印在一张纸上。这份打印稿就是所谓的“硬拷贝”——它是你给计算机下达指令的永久记录。

这是我们第一次有了类似现代编辑器的东西，但它们依然相当陌生，因为它们是**面向行**的。你一次只能工作于一行，而且是基于命令的。你会发出命令（其中一些用过的 vim 的人会觉得很眼熟），这些命令会做出修改。比如，编辑一首诗来修一个错字，看起来大概是这样：

```
输入           输出            它做了什么
------------  ----------------  ----------------------------------------
ed poem       45                打开文件“poem”；ed 打印出它的大小
1,$p                            打印所有行——ed 随后回复：
              Roses are red
              Violets are blu   发现错字！
              Sugar is sweet
2             Violets are blu   跳转到第 2 行；ed 打印出该行
s/blu/blue/                    在这行上，把 blu 改成 blue
p             Violets are blue  打印当前行（现已修正）
w             46                写入/保存；ed 打印新的大小
q                               退出
```

那个年代为数不多的编程者，大概会告诉你这一时期三个值得注意的编辑器：

- **TECO** 由 MIT 的 Dan Murphy 于 1962 年创建，最初用于编辑穿孔纸带。它以晦涩难懂著称，同时又能作为一种编程语言使用（这一点后面会很重要）。
- **QED** 于 1965/66 年由伯克利的 Butler Lampson 和 L. Peter Deutsch 创建，是最早的行编辑器之一。两年后，Ken Thompson 重写了它，并加入了**正则表达式**（一种用于匹配文本模式的编程语言），这是正则表达式首次出现在编辑器中。
- **ed** 于 20 世纪 70 年代早期由贝尔实验室的 Ken Thompson 发布，它将 QED 的理念精简成一个最小化的编辑器，随第一版 Unix 一同发布。`ed` 至今仍安装在每一台 Mac 和 Linux 机器上，它的命令语言是 `grep`、`sed` 以及 Vi 的 `:` 命令的直接祖先（所有这些都有 [Exercism 学习路线](http://exercism.org/tracks)，如果你想学的话！）。

TECO 还是公认最早的软件彩蛋（一种隐藏特性，如今在许多游戏中都能见到）的诞生地。在 TECO 的某个后期版本中，输入 `make love` 会得到一个俏皮的回复 `not war?`。这个彩蛋大约在 1967 年被悄悄塞进斯坦福 AI 实验室，比彩蛋在电子游戏中流行起来早了大约十年。你可以[安装 TECO](https://github.com/blakemcbride/TECOC) 亲自试试！

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="一个黑底绿字的终端，显示 make love 命令，TECO 回答 Not war?" />
  <figcaption>TECO 的 <code>make love</code> / <code>not war?</code> 彩蛋，在一个现代 TECO 构建中重现。</figcaption>
</figure>

## 看到整个页面：Bravo 与 WYSIWYG（1974 年）

与此同时，在**施乐 PARC**，故事的另一条分支开始了。

1974 年，Butler Lampson 和 Charles Simonyi 发布了 **Bravo**，这是第一款**所见即所得**编辑器（WYSIWYG）。它在位图屏幕上用真实的字体显示格式化文本，并使用**鼠标**来选择文字（鼠标的专利其实要早得多，但那是另一个故事了！）。

和 Vim 有点类似，它有两种模式——“命令模式”，按下按键会执行操作；以及“插入模式”，按下按键就会在屏幕上打字。

这实际上是故事中的一个关键分岔点。一方面，Simonyi 后来把这些想法带到了微软，在那里打造了 Word，给了我们文字处理器。另一方面，屏幕、鼠标以及模态编辑，则直接滋养了后来的代码编辑器。

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="一台 Xerox Alto 计算机，它运行了第一款所见即所得编辑器 Bravo" />
  <figcaption>Xerox Alto。照片来自 <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>，CC BY-SA 2.5。</figcaption>
</figure>

## 伟大的对决：Vi 与 Emacs（1976 年起）

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="GNU Emacs 编辑代码的截图" />
  <figcaption>GNU Emacs。截图由 tecosaur 提供，来自 <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>，CC BY-SA 4.0。</figcaption>
</figure>

- 故事的核心：**1976 年**，在东西海岸，两款至今仍主导严肃编程的编辑器诞生了，它们源自截然相反的哲学。
- **Emacs**（MIT：Richard Stallman，以及 David Moon 和 Guy Steele）：起初是作为**TECO 的一组宏**（“Editor MACroS”）而诞生的。
- Emacs 的核心理念：编辑器应该能被用户**无休止地编程和扩展**。与其说它是一个文本编辑器，不如说它是一个碰巧能编辑文本的 Lisp 环境。
- Stallman 在 1984 年将其重写为 **GNU Emacs**，它成为了自由软件运动的一面旗帜。
- **Vi**（伯克利：Bill Joy，当时是一名研究生，后来是 Sun 的联合创始人）：一个构建在 ed 行编辑核心之上的全屏**可视化**模式。

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Vim 编辑代码的截图" />
  <figcaption>Vim，Vi 最流行的现代后继者。截图由 Carolinedmoreschi 提供，来自 <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>，CC BY-SA 4.0。</figcaption>
</figure>

- Vi 的设计受限于严苛的条件：它必须能在**300 波特的调制解调器**上使用，发送到屏幕上的每个字符都有代价。
- 这种稀缺性造就了 Vi 的天才之处：**模态编辑**，击键动作变成了一套紧凑的命令语言，用于移动和转换文本。
- **Vim**（“Vi IMproved”，1991 年）增加了多级撤销、语法高亮和插件。**Neovim** 后来又对其做了进一步的现代化改造。
- 两大阵营之间的**“编辑器之战”**是软件界最古老的较量，这实际上是一场哲学上的分裂：Emacs（极致、可编程、无所不包的环境）对 Vi（极简、模态、极致高效）。
- 近 50 年后，两者仍在日常使用，这对任何软件来说都令人惊叹。

## 给我们其余人用的编辑器：BBEdit、TextMate、Sublime（1992—2008）

- 随着图形化操作系统的成熟，一类新的编辑器出现了，它们面向那些想要原生 GUI 而非终端的开发者。
- **BBEdit**（1992 年，Mac）：经久不衰的“不垃圾”编辑器。
- **TextMate**（2004 年，Mac）：在 **Ruby on Rails** 热潮中影响力巨大。它的“bundle”和代码片段系统，以及用于语法高亮的语法格式，成为了事实上的标准，VS Code 至今仍在使用。
- **Sublime Text**（2008 年）：快速、跨平台、极简。它引入了后来被所有人模仿的特性，比如迷你地图、多光标和模糊命令面板。
- Sublime 证明了在“终端编辑器”和“重量级 IDE”之间，存在着一个巨大的市场。

## Web 技术时代：Atom 与 VS Code（2014—2015）

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="VSCodium 的截图，它是 VS Code 的开源构建版本" />
  <figcaption>VSCodium，VS Code 的完全开源构建版（视觉上与微软发布的版本相同，但采用 MIT 许可证，因此可以在此展示）。截图来自 <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>，MIT。</figcaption>
</figure>

- **Atom**（GitHub，2014 年）：“面向 21 世纪的可编辑文本编辑器”，采用 Web 技术（HTML、JS、Node）通过后来被称为 **Electron** 的框架构建。像 Emacs 一样可自由编辑，但速度较慢。GitHub 于 2022 年 12 月将其退役。
- **VS Code**（微软，2015 年）：同样基于 Electron，但速度更快，且开箱即用（自动补全、调试、内置 Git）。它最终胜出，如今已占据主导地位。
- VS Code 最重要的结构性理念是**语言服务器协议（LSP）**。
- 在 LSP 出现之前，每个编辑器都必须从头开始重新实现对每种语言的“理解”（自动补全、转到定义、错误检查）。
- 有了 LSP，一门语言只需提供一个“服务器”，任何编辑器都可以与之对话。它将语言智能与编辑器解耦，如今已成为一项行业标准。

## AI 时代：与你一同书写的编辑器（2021 年起）

- 最新的篇章将编辑器从一件你用来操控文本的工具，变成了一位**协作者**。
- **GitHub Copilot**（2021 年）：内联 AI 自动补全，后来通过自己的语言服务器暴露出来，让任何编辑器都能接入。
- **Cursor** 和 **Windsurf**：VS Code 的分支，它们在保留 VS Code 扩展的同时，围绕 AI 重建了编辑循环（多文件编辑、聊天、智能体）。
- **Zed**（Rust 编写，2024 年开源）：一款从零开始构建、GPU 加速的编辑器，专为速度、协作和 AI 而生。
- **智能体工具**（如 Claude Code）：在这里，“编辑器”越来越多地自主运行，而人类则负责审查和指挥，而不是亲自键入。
- 有趣的是，LSP 正在被赋予新的用途，这次是让 AI 智能体获得精确的代码智能，而不是依赖文本搜索猜测。

## 一个时代的终结？（今日）

- 这个故事中的每个时代都在缩短“有个想法”和“看到它运行”之间的间隔：从批处理卡片（数小时），到行编辑器（一次一行），到全屏编辑器（整个文件），到 IDE 智能（编辑器理解你的代码），再到 AI（编辑器与你一同书写）。
- 然而，那两款 1976 年的编辑器，Vi 和 Emacs，依然健在。那些基本理念（模态的高效、可编程的可扩展性）比每一波硬件浪潮都更长久。
- 50 年来，学会使用你的编辑器是一种成长仪式。这一点或许正在改变。
- [Jiki 相关/结语待补]
- 感谢阅读
