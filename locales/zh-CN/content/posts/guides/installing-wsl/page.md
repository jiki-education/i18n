---
title: "安装 Windows Subsystem for Linux（WSL）"
excerpt: "一步一步教你安装 Windows Subsystem for Linux，让你在 Windows 上拥有一个真正的开发环境。"
tags: ["installation"]
seo:
  description: "面向初学者的 WSL（Windows Subsystem for Linux）安装指南，适用于 Windows 10 和 11，步骤清晰，并附有常见问题的解决办法。"
  keywords:
    [
      "wsl",
      "安装 wsl",
      "windows subsystem for linux",
      "windows 上的 ubuntu",
      "windows 开发环境",
      "学习编程"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## 简介

WSL（**Windows Subsystem for Linux**，即适用于 Linux 的 Windows 子系统）是 Microsoft 开发的一项 Windows 功能，可以在你的 Windows 电脑里运行一套真正的 Linux 系统。你需要它，因为大多数编程工具都是先在 Linux 和 macOS 上构建出来的（在它们上面也运行得最好），而 Windows 上的开发者正是通过 WSL 才能用上这些工具。这也是 Microsoft 自己推荐的 Windows 开发方式。安装大约需要 15 分钟，其中大部分时间都在等待，而且只需要装一次。

## 开始之前

你需要准备：

- **Windows 10（版本 2004 或更高）或 Windows 11。**近几年出厂的 Windows 电脑都可以。
- 对这台电脑的**管理员权限**。如果这是家里的共用电脑，可能需要请当初设置它的人来输入密码。

## 安装 WSL

1. 点击**开始**按钮，输入“powershell”。你会看到**Windows PowerShell**出现。
2. 不要直接打开它。右键点击它，选择**以管理员身份运行**。Windows 会问你是否允许它进行更改：点击**是**。
3. 在弹出的蓝色窗口中，输入下面的内容，然后按回车键：
   ```
   wsl --install
   ```
4. Windows 会下载并配置好所有东西，其中包括一个叫 **Ubuntu** 的 Linux 系统（最流行的 Linux 版本）。这可能需要几分钟。
5. 当它提示你时，**重启电脑**。

<!-- SCREENSHOT: PowerShell running wsl --install -->

## 设置 Ubuntu

重启之后，会自动打开一个终端窗口，用来完成 Ubuntu 的设置。（如果没有自动打开，就点击开始，输入“ubuntu”，然后打开它。）

它会要求你为 Linux 系统创建一个**用户名**和**密码**：

1. 输入用户名（小写字母，不含空格），然后按回车键。
2. 输入密码并按回车键，然后再次输入以确认。

有一点会让所有人措手不及：**输入密码时，屏幕上什么都不会显示**。没有圆点，没有星号，什么都没有。这是 Linux 的安全机制，不是出故障了。你输入的内容其实已经被记录下来了，所以照常输入密码，然后按回车键就行。

别忘记这个密码。以后安装东西时偶尔会用到它。

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## 检查是否安装成功

关掉所有窗口，然后点击**开始**，输入“ubuntu”，再打开它。你应该会看到一个窗口，提示符以`$`结尾，正等着你输入。恭喜：这就是一个真正的 Linux 终端，你现在拥有和专业人士一样的开发环境了。

试着输入`ls`，然后按回车键。它会列出当前文件夹里的文件（现在还不会有多少）。

## 在 VS Code 中使用 WSL

如果你已经[安装了 VS Code](/guides/installing-vscode)，它就能连接到 WSL，让你的编辑器和 Linux 终端配合工作：

1. 打开 VS Code。
2. 打开扩展面板（左侧的四个方块图标，或按 Ctrl+Shift+X），搜索 **WSL**，然后安装由 Microsoft 开发的扩展。
3. 按 Ctrl+Shift+P，输入“WSL”，选择 **WSL: Connect to WSL**。VS Code 会重新打开，并连接到 Ubuntu。

从现在开始，你在 VS Code 里打开的任何终端（终端菜单，然后新建终端）都是 Linux 终端。这也是我们在后面所有指南中推荐的配置。

## 如果出了问题

最常见的问题是出现提到**虚拟化**（或“VT-x”“AMD-V”“虚拟机平台”）的错误。WSL 依赖一项硬件功能，而它在有些电脑上是关闭的。要打开它，就得修改电脑 BIOS 里的设置，具体做法因厂商而异。你可以用你的笔记本型号加上“enable virtualisation”去搜索操作方法，也可以到<a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">我们的论坛</a>提问，我们会帮你解决。

其他问题可以查看 Microsoft 的<a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">官方 WSL 安装指南</a>，里面有疑难解答部分。当然，论坛也一直开着，随时欢迎你来提问。
