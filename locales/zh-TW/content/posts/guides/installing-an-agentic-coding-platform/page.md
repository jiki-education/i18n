---
title: "安裝代理式程式設計平台"
excerpt: "一步步教你安裝 OpenCode、登入並選擇 AI 模型，包含完全免費的選項。"
tags: ["agentic-coding", "installation"]
seo:
  description: "給初學者的 OpenCode 安裝指南：這是我們推薦的代理式程式設計平台，並介紹 Zen 的免費 AI 模型選項與低價的 Go 方案。"
  keywords:
    [
      "opencode",
      "安裝 opencode",
      "代理式程式設計",
      "AI 程式設計助理",
      "opencode zen",
      "opencode go",
      "免費 AI 程式設計",
      "vscode"]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## 簡介

代理式程式設計平台是一種能讓 AI 陪你一起寫程式的工具：它會讀取檔案、做出變更，並在你的電腦上執行指令。如果這句話對你來說很陌生，可以先讀我們的[什麼是代理式程式設計](/guides/what-is-agentic-coding)指南，準備好要安裝時再回到這裡。

這份指南會帶你一步步安裝 **OpenCode**、登入，並選擇 AI 模型。你只需要做一次，而且整個過程完全不用花錢。

## 我們為什麼推薦 OpenCode

市面上有幾款不錯的代理式程式設計工具，包括 Claude Code（Anthropic）與 Codex（OpenAI）。它們用起來大致相似，所以就算你之後換工具，學到的東西也不會白費。話雖如此，我們在學習階段還是推薦 **[OpenCode](https://opencode.ai)**，原因有三個：

- **可以免費使用。**它目前是這類工具中，唯一提供可靠、穩定又真正實用的免費方案，而且這個方案不太可能消失。
- **幾乎支援任何 AI 模型。**你可以先從免費模型開始，之後想探索再試更進階的模型，全程都不用換工具。
- **它在終端機裡執行**，這也是大多數專業開發者使用這類工具的方式，所以學到的是「真正」的做法。而且你可以在 VS Code 裡執行它，讓它就待在你的程式碼旁邊。

你有兩種方式可以使用 OpenCode，本指南會幫你把兩種都設定好：

- **單獨使用**，在任何終端機視窗裡。
- **內嵌在 VS Code 裡**，它會在程式碼旁的面板開啟，並能看到你正在編輯哪個檔案。這是我們推薦的方式：你可以看著代理程式做的變更即時出現在編輯器裡。（不知道 VS Code 是什麼？它是我們[推薦的程式碼編輯器](/guides/using-a-code-editor)。）

## 費用

OpenCode 本身完全免費。你唯一可以選擇付費的，是負責思考的 AI 模型。當你把 OpenCode 連上模型時，會看到 OpenCode 團隊提供的兩個選項：

- **Zen**提供幾款免費模型。它們之所以免費，是因為背後的公司正在推廣，這也代表可選的模型會隨時間輪換，而且你的對話內容可能被用來協助改進模型。用在學習練習上，這是很值得的取捨，但請不要把任何私密或個人的內容貼進去。
- **Go**則是訂閱制：**每月 10 美元**（首月 5 美元），就能充分使用一組強大許多的模型。你不需要一開始就買。先用 Zen 的免費模型，如果發現常碰到它們的上限，再升級就好。

## 我該選哪個模型？

如果你連「模型」是什麼都不太確定，我們的[代理式程式設計關鍵概念](/guides/key-agentic-coding-concepts)指南有完整的說明。簡單來說：模型就是真正的 AI「大腦」，不同模型在聰明程度、速度或價格上各有差異。

在 OpenCode 裡，你隨時可以輸入 `/models` 來切換模型。我們的建議是：

- **在免費方案裡**，試試看提供的免費模型，找出哪一個你最順手。這份清單會隨著促銷活動來來去去而變動，所以我們不會假裝知道你會看到什麼，但在撰寫本文時，**DeepSeek V4 Flash** 是很棒的免費選擇。
- **在 Go 方案裡**，以程式設計為主的模型（撰寫本文時有 Kimi K2.7 Code、GLM-5.2 以及 Qwen 3.7 系列）都很強大。挑一個來用，等你掌握基礎之後，再來煩惱要怎麼比較它們。

別為了這件事傷腦筋。在學習過程中會做到的練習，每一款提供的模型都綽綽有餘。

## 開始之前

你需要先準備好兩樣東西：

- **VS Code**，這樣你就能把 OpenCode 內嵌在編輯器裡使用。如果還沒安裝，請跟著我們的[安裝 VS Code](/guides/installing-vscode)指南做。
- **只有 Windows 才需要：WSL。**OpenCode 的終端機版本在 Linux 上執行得最好，而 WSL 能讓你的 Windows 電腦擁有一個真正的 Linux 終端機。請先跟著我們的[安裝 WSL](/guides/installing-wsl)指南做，包含最後的「從 VS Code 使用 WSL」一節。然後再回到這裡。在 macOS 和 Linux 上不需要額外安裝任何東西。

## 安裝 OpenCode

安裝 OpenCode 只需要在終端機裡輸入一行指令。如果你從沒用過終端機，這會是很不錯的第一次體驗：你輸入指令，電腦負責把事情做好。

### Windows

1. 打開 VS Code，將它連線到 WSL（Ctrl+Shift+P，然後選 **WSL: Connect to WSL**），再開啟終端機（Terminal 選單，然後選 **New Terminal**）。
2. 把下面這行指令複製貼到終端機，然後按 Enter：
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 安裝完成後，關掉終端機，開一個新的，輸入 `opencode --version` 然後按 Enter。如果它印出版本號，就完成了。

### macOS

1. 打開 **Terminal**（按 Cmd+Space，輸入「terminal」，然後按 Enter），或在 VS Code 裡開啟終端機（Terminal 選單，然後選 **New Terminal**）。
2. 把下面這行指令複製貼到終端機，然後按 Enter：
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 安裝完成後，關掉終端機，開一個新的，輸入 `opencode --version` 然後按 Enter。如果它印出版本號，就完成了。

### Linux

1. 打開你的終端機，或在 VS Code 裡開啟一個（Terminal 選單，然後選 **New Terminal**）。
2. 把下面這行指令複製貼到終端機，然後按 Enter：
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 安裝完成後，關掉終端機，開一個新的，輸入 `opencode --version` 然後按 Enter。如果它印出版本號，就完成了。

<!-- SCREENSHOT: 安裝指令碼完成後的終端機 -->

## 第一次啟動 OpenCode

現在打開 OpenCode，把它連到 Zen，讓它有一個可以對話的模型：

1. 在 VS Code 裡，打開一個裡面有程式碼的資料夾（你的任何一個練習專案都很適合），然後開啟終端機（Terminal 選單，然後選 **New Terminal**）。
2. 輸入 `opencode` 然後按 Enter。OpenCode 的介面會出現在終端機面板裡，就在你的程式碼旁邊。（第一次這麼做的時候，它也會安裝一個小小的 VS Code 擴充功能來連接兩者，讓 OpenCode 能看到你開著哪個檔案。）
3. 第一次執行時，會出現一個標題為「Connect a provider」的清單。（如果它沒有提示你，輸入 `/connect` 把它叫出來。）用方向鍵選擇 **OpenCode Zen (Recommended)**，然後按 Enter。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="OpenCode 的 Connect a provider 畫面，清單最上方醒目顯示 OpenCode Zen (Recommended)" />
  <figcaption>從供應商清單中選擇 OpenCode Zen。</figcaption>
</figure>

4. 接著它會要你提供 **API 金鑰**：一長串用來證明你身分的程式碼，有點像密碼。要取得金鑰，請在瀏覽器打開 <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a>，建立一個免費帳號。不需要填任何付款資料。把它給你的金鑰複製起來，貼到終端機，然後按 Enter。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode 要求輸入 API 金鑰，並指示前往 opencode.ai/zen 取得" />
  <figcaption>到 opencode.ai/zen 取得你的金鑰，然後貼到這裡。</figcaption>
</figure>

5. 最後，它會顯示模型清單，免費的會在右邊標示為**Free**。選一個免費模型（如前面所說，撰寫本文時 **DeepSeek V4 Flash Free** 是很棒的選擇）。你隨時可以輸入 `/models` 更換模型。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="OpenCode Zen 的模型清單，免費模型在右邊標示為 Free，並醒目顯示 DeepSeek V4 Flash Free" />
  <figcaption>免費模型標示在右邊。這裡我們選的是 DeepSeek V4 Flash Free。</figcaption>
</figure>

## 你的第一段對話

現在問它一個問題。輸入像這樣的一句話：

> 看看這個資料夾裡的檔案，然後說明它們各自的用途。

看看會發生什麼事。它會讀取檔案、思考，然後回報結果，而且在做任何變更之前都會先徵求你的同意。這種「讀取、行動、檢查」的循環，就是代理式程式設計的核心。

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode 逐一讀取專案裡的檔案、思考，然後說明每個最上層資料夾與檔案的用途" />
  <figcaption>OpenCode 讀取專案的檔案、思考，然後回報它發現的內容。</figcaption>
</figure>

同樣的做法在任何終端機裡都能用，不管有沒有 VS Code。打開終端機，切換到專案資料夾，輸入 `opencode`，就可以開始了。有些人很喜歡這樣工作。兩種方式都試試看，找出哪一種適合你。

就是這樣。你現在已經有一套可以運作、執行起來完全不花錢的代理式程式設計環境了。想了解背後實際運作的原理，以及詞元、上下文這類詞是什麼意思，請繼續閱讀[代理式程式設計關鍵概念](/guides/key-agentic-coding-concepts)。
