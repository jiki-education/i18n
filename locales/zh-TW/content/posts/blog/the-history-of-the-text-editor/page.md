---
title: "文字編輯器的迷人歷史"
excerpt: "從在紙卡上打洞，到會幫你寫程式的編輯器。這是樸實文字編輯器的故事，也是 Vi 與 Emacs 之間那場比今天大多數人都還年長的對決。"
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "文字編輯器的歷史，從打孔卡片和行編輯器，一路到 Vi、Emacs、VS Code 與 AI 時代。看從一個想法到程式真的跑起來，中間的距離如何不斷縮短。"
  keywords: ["文字編輯器的歷史", "vi 與 emacs 對決", "文字編輯器歷史", "程式碼編輯器歷史"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## 前言

我從 30 年前開始寫程式以來，幾乎每天都在用文字編輯器。我試過很多不同的編輯器，也三不五時對「哪一款最好」這件事變得有點像在傳教。

在那整段時間裡，對一個新手開發者來說，最早要通過的成年禮之一，就是安裝並學會使用文字編輯器。但隨著 AI 代理式開發改變了「當一個開發者」的意義，文字編輯器稱霸的時代或許正要走向終點。

所以我覺得，來看看文字編輯器的故事應該會很有意思。從在紙板上打洞、然後等上好幾個小時，到在印表機上一次編輯一行，再到 Vi 與 Emacs 之間那場比今天大多數人都還年長的對決。

這就是樸實文字編輯器的故事。

## 編輯器出現之前：紙卡上的洞（1950 到 1960 年代）

很難想像寫程式卻沒有螢幕可以看自己的程式碼，但這一切就是從那裡開始的。

1950 到 1960 年代，螢幕還沒被發明出來，程式是實際打孔在紙卡（或紙帶）上的，一行程式碼一張卡。所謂「編輯」，就是重打一張卡，或是在整疊卡片裡把卡片抽換進出。

如果我的程式要跑超過幾秒鐘，我就會對這種慢吞吞的回饋循環非常不耐煩，但在那個年代，回饋是以小時為單位來計算的。你得把自己那疊卡片交給操作員，他再把工作排進待執行的佇列裡。幾個小時、甚至幾天之後，你才會拿回一份印出來的結果。我想，那時候根本沒有「打錯字」這種事吧……！

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="1950 年代的一位打孔員，正把資料打在卡片上" />
  <figcaption>1950 年代的一位打孔員。照片由美國人口普查局提供，來自 <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>，公有領域。</figcaption>
</figure>

## 電腦開始回話了（1960 年代）

有兩項發明把編輯從那個緩慢的批次世界裡拉出來，帶進互動的領域。

第一項是**電傳打字機**。電傳打字機取代了事先打好的一疊疊卡片這個概念。改成你在鍵盤上打字，按鍵會即時送到機器，機器再把回覆直接印在一捲紙上。當時還是沒有螢幕，但這是第一次，你和電腦之間有了即時、你來我往的通道，而不是一疊紙板。

第二項是**分時系統**。沒有分時系統，一部電腦一次只能連接一個人，速度也受限於這個人打字和處理回覆的快慢，結果就是大量時間都浪費在等操作的人動作上。分時系統解決了這個問題，讓機器能同時在不同使用者之間快速切換。多個人可以連上同一部機器，切換速度快到讓每個人都產生一種錯覺：整部電腦都是自己一個人的。

把這兩項放在一起，你就能跟機器好好對話了。而一旦能對話，你就能坐在那裡開始編輯自己的程式碼，一次一行，不必再重打卡片、然後祈禱。這正是第一批真正的編輯器讓你做到的事。

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Teletype Model 33 ASR 終端機，它把輸出印在紙上，而不是螢幕上"/>
  <figcaption>Teletype Model 33 ASR。照片由 ComputerGeek7066 提供，來自 <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>，CC BY-SA 4.0。</figcaption>
</figure>

## 行編輯器：ed、QED 與 TECO（1962 到 1971）

1960 年代又帶來一次巨大的思維轉變。你的程式不再是你隨身帶著的實體物品（裝在盒子裡的一疊卡片），而是變成一個有名稱、住在電腦自己磁碟上的檔案。想改程式，不必再印出一張新卡片，你現在真的可以編輯自己的程式了。

不過我們還是沒有螢幕。你執行的每件事，都會有一份印在紙上的副本。那份印出來的東西，就是所謂的「硬拷貝」，是你給電腦的指令所留下的永久紀錄。

這是我們第一次擁有類似現代編輯器的東西，但它們還是很不一樣，因為它們是**以行為單位**的。你一次只處理一行，而且它們靠指令操作。你會下指令（其中有些指令，用過 vim 的人會覺得非常眼熟），這些指令就會做出修改。舉例來說，編輯一首詩來修正一個錯字，可能長這樣：

```
輸入          輸出              作用
------------  ----------------  ----------------------------------------
ed poem       45                開啟檔案 "poem"；ed 印出它的大小
1,$p                            印出所有行，ed 接著回覆：
              Roses are red
              Violets are blu   錯字在這裡！
              Sugar is sweet
2             Violets are blu   跳到第 2 行，ed 印出這一行
s/blu/blue/                     在這一行把 blu 改成 blue
p             Violets are blue  印出目前這一行（現在已經修好）
w             46                寫入／儲存，ed 印出新的大小
q                               離開
```

在那個年代寫程式的少數人，大概會跟你提到那個時期三款值得一提的編輯器：

- **TECO**：1962 年由 MIT 的 Dan Murphy 開發，最初是用來編輯打孔紙帶的。它出了名的難懂，本身又兼任一種程式語言（這點後面會很重要）。
- **QED**：1965／66 年由柏克萊的 Butler Lampson 和 L. Peter Deutsch 開發，是最早的行編輯器之一。兩年後，Ken Thompson 重寫了它，並為它加上**正規表達式**（一種用來比對文字模式的程式語言），這是正規表達式第一次出現在編輯器裡。
- **ed**：1970 年代初由貝爾實驗室的 Ken Thompson 推出，把 QED 的想法精簡成一個極簡的編輯器，跟著第一版 Unix 一起出貨。`ed`至今仍安裝在每一台 Mac 和 Linux 機器上，它的指令語言是 `grep`、`sed`和 Vi 的`:`指令的直系祖先（如果你想學，這些在 [Exercism 學習路徑](http://exercism.org/tracks)上都有！）。

TECO 也是公認最早的軟體彩蛋的所在地（彩蛋是一種藏起來的功能，今天的很多遊戲裡都找得到）。在後來的 TECO 版本中，輸入`make love`會得到一句調皮的回覆：`not war?`。這個彩蛋大約在 1967 年由史丹佛 AI 實驗室偷偷放進去，比彩蛋在電玩裡流行起來早了將近十年。你可以[安裝 TECO](https://github.com/blakemcbride/TECOC) 親自試試看喔！

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="黑底綠字的終端機畫面，顯示指令 make love，以及 TECO 回覆的 Not war?" />
  <figcaption>TECO 的 <code>make love</code>／<code>not war?</code> 彩蛋，在現代 TECO 版本中重現。</figcaption>
</figure>

## 看見整頁：Bravo 與 WYSIWYG（1974）

與此同時，在**Xerox PARC**，這個故事的另一條支線正要展開。

1974 年，Butler Lampson 和 Charles Simonyi 推出了**Bravo**，這是第一個**WYSIWYG**編輯器（即「what you see is what you get」，所見即所得）。它在點陣螢幕上顯示帶有真實字型的格式化文字，並用**滑鼠**來選取文字（其實滑鼠的專利要早得多，不過那是另一個故事了！）。

它有點像 Vim，有兩種模式：「命令模式」，按鍵會*真的*做出動作；以及「插入模式」，按鍵會把字打到畫面上。

這其實是我們這個故事的關鍵轉折點。一方面，Simonyi 後來把這些想法帶到微軟，在那裡做出了 Word，為我們帶來了文書處理器。另一方面，螢幕、滑鼠和模式編輯則直接餵養了後續的程式碼編輯器。

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="一部 Xerox Alto 電腦，上面執行著第一個 WYSIWYG 編輯器 Bravo" />
  <figcaption>Xerox Alto。照片來自 <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>，CC BY-SA 2.5。</figcaption>
</figure>

## 經典對決：Vi 與 Emacs（1976 年起）

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="GNU Emacs 編輯程式碼的畫面截圖" />
  <figcaption>GNU Emacs。截圖由 tecosaur 提供，來自 <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>，CC BY-SA 4.0。</figcaption>
</figure>

- 故事的核心：在**1976**年，美國東西兩岸同時誕生了兩款至今仍主宰嚴肅程式開發的編輯器，而它們的哲學正好相反。
- **Emacs**（MIT：Richard Stallman，以及 David Moon 和 Guy Steele）：最初是一組**TECO 巨集**（「Editor MACroS」）。
- Emacs 的核心主張：編輯器應該讓使用者可以無止境地**程式化與擴充**。它與其說是文字編輯器，不如說是一個你剛好拿來編輯文字的 Lisp 環境。
- Stallman 在 1984 年把它重做成**GNU Emacs**，它後來成為自由軟體運動的旗艦。
- **Vi**（柏克萊：Bill Joy，當時還是研究生，後來成為 Sun 的共同創辦人）：建立在 ed 的行編輯核心之上的全螢幕**視覺**模式。

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Vim 編輯程式碼的畫面截圖" />
  <figcaption>Vim，Vi 最受歡迎的現代後代。截圖由 Carolinedmoreschi 提供，來自 <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>，CC BY-SA 4.0。</figcaption>
</figure>

- Vi 是在極端嚴苛的限制下設計出來的：它必須能在**300 波特數據機**上使用，那時每一個送到螢幕上的字元都要斤斤計較。
- 正是這種匱乏造就了 Vi 的天才之處：**模式編輯**，按鍵成為一套精簡的指令語言，用來移動和改造文字。
- **Vim**（「Vi IMproved」，1991 年）加入了多層次復原、語法高亮和外掛。**Neovim**之後又把它進一步現代化。
- 兩大陣營之間的**「編輯器大戰」**是軟體界最古老的對決，而它其實是一場哲學分歧：Emacs（極大化、可程式化、什麼都能做的環境）對上 Vi（極簡、模式化、效率高到不留情面）。
- 將近 50 年後，兩者仍然每天都有人用，這對任何軟體來說都是很不可思議的事呢。

## 給我們一般人的編輯器：BBEdit、TextMate、Sublime（1992 到 2008）

- 隨著圖形作業系統成熟，出現了一類新的編輯器，給那些想要原生圖形介面、而不是終端機的開發者使用。
- **BBEdit**（1992 年，Mac）：歷史悠久的「它不爛」編輯器。
- **TextMate**（2004 年，Mac）：在**Ruby on Rails**熱潮期間影響力極大。它的「bundle」和程式碼片段系統，以及用來做語法高亮的文法格式，成了實質上的標準，VS Code 至今仍在使用。
- **Sublime Text**（2008 年）：快速、跨平台、極簡。它推出了一些後來被大家照抄的東西，像是迷你地圖、多重游標，以及模糊比對的指令面板。
- Sublime 證明了，在「終端機編輯器」和「重量級 IDE」之間，存在著一塊巨大的市場。

## 網頁技術時代：Atom 與 VS Code（2014 到 2015）

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="VSCodium 的畫面截圖，它是 VS Code 的開源版本" />
  <figcaption>VSCodium，VS Code 的完全開源版本（外觀與微軟的發行版一模一樣，但採用 MIT 授權，所以可以放在這裡）。截圖來自 <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>，MIT。</figcaption>
</figure>

- **Atom**（GitHub，2014 年）：「21 世紀可以改造的文字編輯器」，用網頁技術（HTML、JS、Node）打造，靠的是後來變成**Electron**的那套技術。它像 Emacs 一樣可以改造，但很慢。GitHub 在 2022 年 12 月讓它退役。
- **VS Code**（微軟，2015 年）：同樣以 Electron 為基礎，但更快，而且該有的都有（自動完成、除錯、Git 內建）。它決定性地勝出，如今稱霸一方。
- VS Code 最重要的結構性想法，是**語言伺服器協定**（LSP）。
- 在 LSP 出現之前，每個編輯器都得從頭重新實作對每一種語言的「理解」（自動完成、跳到定義、錯誤檢查）。
- 有了 LSP，一種語言只要提供一個「伺服器」，任何編輯器都能跟它對話。這把語言的智慧從編輯器裡解耦出來，如今已是業界標準。

## AI 時代：陪你一起寫的編輯器（2021 年起）

- 最新的一章，把編輯器從一個讓你操作文字的工具，變成一位**合作者**。
- **GitHub Copilot**（2021 年）：行內的 AI 自動完成，後來透過它自己的語言伺服器開放出來，讓任何編輯器都能接上。
- **Cursor**和**Windsurf**：VS Code 的分支版本，把編輯循環重新圍繞 AI 打造（跨檔案編輯、對話、代理），同時保留 VS Code 的外掛。
- **Zed**（Rust，2024 年開源）：從零打造、用 GPU 加速的編輯器，為速度、協作和 AI 而生。
- **AI 代理工具**（例如 Claude Code）：在這裡，「編輯器」越來越會自己驅動自己，人類負責審閱和指揮，而不是打字。
- 有意思的是，LSP 又被重新利用了，這次是要讓 AI 代理得到精確的程式碼理解，而不是靠文字搜尋亂猜。

## 一個時代的終結？（今天）

- 這個故事的每一個時代，都在壓縮「有個想法」到「看到它跑起來」之間的距離：批次卡片（好幾個小時），到行編輯器（一次一行），到全螢幕編輯器（整個檔案），到 IDE 的智慧（編輯器看得懂你的程式碼），到 AI（編輯器陪你一起寫）。
- 然而，1976 年那兩款編輯器，Vi 和 Emacs，至今仍在。那些根本的想法（模式化的效率、可程式化的擴充性）比每一波硬體浪潮都活得更久。
- 50 年來，學會自己的編輯器是一種成年禮。這一點可能正在改變。
- [Jiki 連結／結語待補]
- 謝謝你讀到這裡
