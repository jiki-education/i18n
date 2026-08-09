---
title: "安装一个代理编码平台"
excerpt: "逐步指导如何安装 OpenCode、登录并选择 AI 模型，包括完全免费的选项。"
tags: ["agentic-coding", "installation"]
seo:
  description: "一份面向初学者的指南，介绍如何安装我们推荐的代理编码平台 OpenCode，以及通过 Zen 和低价 Go 计划使用免费 AI 模型的选项。"
  keywords:
    [
      "opencode",
      "安装 opencode",
      "代理编码",
      "ai 编码助手",
      "opencode zen",
      "opencode go",
      "免费 ai 编码",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## 引言

代理编码平台是一种工具，它可以让 AI 与你一起处理代码：读取文件、进行修改并在你的计算机上运行命令。如果你第一次听说这个词，可以先阅读我们的指南《[什么是代理编码](/guides/what-is-agentic-coding)》，然后再回来安装。

本指南将带你完成 **OpenCode** 的安装、登录和选择 AI 模型。整个过程你只需做一次，而且可以完全免费完成。

## 我们为什么推荐 OpenCode

目前有一些不错的代理编码工具，比如 Claude Code（Anthropic）和 Codex（OpenAI）。它们的使用方式大致相似，所以你学到的知识即使以后切换到其他工具也不会浪费。尽管如此，在学习阶段，我们推荐 **[OpenCode](https://opencode.ai)**，原因有三：

- **你可以免费使用。** 它是目前同类工具中唯一拥有可靠、稳定且真正可用的免费版，而且这个免费版不太可能消失。
- **它与几乎所有 AI 模型兼容。** 你可以从免费模型开始，以后如果想探索更高级的模型，也可以随时尝试，无需更换工具。
- **它在终端中运行，** 这是大多数专业开发者使用这类工具的方式，因此你在学习的就是“真实”的用法。而且你可以在 VS Code 中运行它，让它紧挨着你的代码。

你可以用两种方式使用 OpenCode，本指南两种都会帮你配置：

- **独立使用，** 在任何终端窗口中。
- **嵌入 VS Code，** 在旁边的面板中打开，并且能看到你正在编辑的文件。我们推荐这种方式：你可以实时看到代理所做的更改出现在编辑器中。（不知道 VS Code 是什么？它是我们[推荐的代码编辑器](/guides/using-a-code-editor)。）

## 费用如何

OpenCode 本身是免费的。你可能需要付费的是背后进行“思考”的 AI 模型。当你将 OpenCode 连接到一个模型时，你会看到 OpenCode 团队提供的两个选项：

- **Zen** 提供了一些免费的模型。它们之所以免费，是因为背后的公司在推广这些模型，这意味着可选的模型会随时间轮换，而且你的对话可能被用来帮助改进这些模型。对于学习练习来说，这完全可以接受，但不要在其中输入任何隐私或个人内容。
- **Go** 是一个订阅计划：**每月 10 美元**（首月 5 美元），可以充足地使用一套强大得多的模型。你第一天并不需要它。先从 Zen 的免费模型开始，如果发现达到了限制再考虑升级。

## 我应该选择哪个模型？

如果你还不确定“模型”到底是什么，我们的指南《[代理编码关键概念](/guides/key-agentic-coding-concepts)》有详细的解释。简单来说：模型就是实际的 AI“大脑”，不同的模型在智能、速度、成本上有所不同。

在 OpenCode 中，你可以随时通过输入 `/models` 来切换模型。我们的建议：

- **如果使用免费版，** 可以试试提供的免费模型，看看哪个用起来顺手。随着促销活动变化，列表也会改变，所以我们无法预知你会看到什么，但在本文撰写时，**DeepSeek V4 Flash** 是一个很好的免费选择。
- **如果使用 Go 计划，** 那些专注于编码的模型（截至撰写时，如 Kimi K2.7 Code、GLM-5.2 以及 Qwen 3.7 系列）都很强大。选一个就行，等掌握了基础知识后再去比较它们的区别。

不必为此纠结。对于你在学习过程中要做的练习，所有提供的模型都绰绰有余。

## 准备工作

你需要准备好两样东西：

- **VS Code**，这样才能在编辑器中嵌入使用 OpenCode。如果你还没有安装，请按照我们的指南《[安装 VS Code](/guides/installing-vscode)》操作。
- **仅限 Windows：WSL。** OpenCode 的终端版本在 Linux 中运行效果最佳，而 WSL 可以为你的 Windows 电脑提供一个真正的 Linux 终端。请先按照我们的指南《[安装 WSL](/guides/installing-wsl)》操作，包括最后的“从 VS Code 使用 WSL”部分。然后再回到这里。在 macOS 和 Linux 上，不需要额外安装其他东西。

## 安装 OpenCode

安装 OpenCode 只需要在终端中执行一条命令。如果你从未用过终端，这将是一次不错的初体验：输入一条指令，计算机就会完成工作。

### Windows

1. 打开 VS Code，连接到 WSL（按 Ctrl+Shift+P，然后选择 **WSL: Connect to WSL**），并打开一个终端（点击“终端”菜单，然后选择 **新终端**）。
2. 将以下命令复制粘贴到终端中，按 Enter：
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 完成后，关闭终端，打开一个新终端，输入 `opencode --version` 并按 Enter。如果显示版本号，就说明安装成功了。

### macOS

1. 打开 **终端**（按 Cmd+空格，输入“终端”并按 Enter），或者在 VS Code 中打开终端（“终端”菜单 → **新终端**）。
2. 将以下命令复制粘贴到终端中，按 Enter：
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 完成后，关闭终端，打开一个新终端，输入 `opencode --version` 并按 Enter。如果显示版本号，就说明安装成功了。

### Linux

1. 打开你的终端，或者在 VS Code 中打开终端（“终端”菜单 → **新终端**）。
2. 将以下命令复制粘贴到终端中，按 Enter：
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 完成后，关闭终端，打开一个新终端，输入 `opencode --version` 并按 Enter。如果显示版本号，就说明安装成功了。

<!-- SCREENSHOT: terminal after the install script has completed -->

## 首次启动 OpenCode

现在，打开 OpenCode 并将其连接到 Zen，这样它就有模型可以对话了：

1. 在 VS Code 中打开一个包含代码的文件夹（任何你练习的项目都可以），然后打开一个终端（“终端”菜单 → **新终端**）。
2. 输入 `opencode` 并按 Enter。OpenCode 界面将出现在终端面板中，紧挨着你的代码。（第一次执行时，它还会安装一个小的 VS Code 扩展，将两者连接起来，这样 OpenCode 就能看到你打开的是哪个文件。）
3. 首次运行时，会显示一个标题为“Connect a provider”的列表。（如果没有提示，输入 `/connect` 调出该列表。）使用方向键选择 **OpenCode Zen (Recommended)**，然后按 Enter。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="OpenCode 的“连接提供商”界面，列表顶部高亮显示 OpenCode Zen（推荐）" />
  <figcaption>从提供商列表中选择 OpenCode Zen。</figcaption>
</figure>

4. 然后它会要求你输入 **API 密钥**：一个用于证明你身份的较长的代码，有点像密码。要获取密钥，请在浏览器中打开 <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a>，创建一个免费帐户。无需提供任何付款信息。复制它给你的密钥，粘贴到终端中，然后按 Enter。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode 要求输入 API 密钥，并提示前往 opencode.ai/zen 获取" />
  <figcaption>从 opencode.ai/zen 获取密钥，并粘贴到这里。</figcaption>
</figure>

5. 最后，它会显示模型列表，免费模型在右侧标有 **Free**。选择一个免费模型（正如前面提到的，截至撰写时，**DeepSeek V4 Flash Free** 是一个绝佳选择）。你想换模型时，随时可以输入 `/models`。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="OpenCode Zen 的模型列表，免费模型在右侧标有 Free，高亮显示 DeepSeek V4 Flash Free" />
  <figcaption>免费模型在右侧标明。这里我们选择 DeepSeek V4 Flash Free。</figcaption>
</figure>

## 你的第一次对话

现在，跟它说点什么吧。输入类似这样的消息：

> 查看这个文件夹里的文件，并解释它们的作用。

看看会发生什么。它会读取文件、思考并反馈报告，而且在进行任何更改之前会请求你的许可。这种读取、执行和检查的循环，正是代理编码的核心。

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode 逐个读取项目中的文件，思考，然后解释每一个顶层文件夹和文件的作用" />
  <figcaption>OpenCode 读取项目文件，思考，并报告它发现的内容。</figcaption>
</figure>

同样的用法也适用于任何终端，无论是否在 VS Code 中。打开一个终端，进入项目文件夹，输入 `opencode`，就行了。有些人喜欢这种方式。两种都试试，看看哪种适合你。

就是这样。你现在已经拥有了一个可以免费运行的代理编码工作环境。如果想了解背后到底发生了什么，以及 token、上下文等术语的含义，请继续阅读《[代理编码关键概念](/guides/key-agentic-coding-concepts)》。
