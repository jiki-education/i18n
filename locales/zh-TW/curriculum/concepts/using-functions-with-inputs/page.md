---
title: "函式的輸入"
description: "把值放進函式的投入口，改變它每次執行時的行為。"
en_md5: 0bd82377f2407de5fe030511752d5503
---

機器，也就是函式，最強大的特點之一，就是很多機器都讓你把一些資訊放進去。而當你執行它們時，這些資訊會改變它們的行為。

到目前為止，我們看過的機器都長得有點像盒子，例如`move`（移動）這台。

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="move 機器，一個沒有投入口的普通盒子"
  width="322"
  height="400"
/>

但有些機器有投入口，像`walk`（走）這台機器。`walk`機器就跟`move`機器一模一樣。它會讓角色（英文：_character_）往前走，只是 Jiki 可以用投入口指定你的角色要走幾步。所以與其連續用三次`move`函式，`move`、`move`、`move`，現在你只要用`walk`函式，告訴 Jiki 把數字 3 放進機器裡就好。

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="walk 機器，上方有一個投入口，用來放要走幾步的數字"
  width="481"
  height="400"
/>

在程式碼裡要這麼做，我們一樣先寫上函式的名稱，在這個例子裡就是`walk`，一樣寫上左括號。但在寫右括號之前，我們要先說清楚輸入（英文：_input_）是什麼。所以在這個例子裡，我們要的輸入是 3，意思是往前走三步：

```javascript
walk(3)
```

當 Jiki 看到這一行，他會拿起數字 3，你可以把這個數字想成一個小硬幣，然後他會先把硬幣放進機器的投入口，再轉動手把，把機器啟動。

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki 把數字 3 像硬幣一樣投進 walk 機器的投入口，然後轉動手把"
  width="421"
  height="400"
/>

對於會畫矩形和圓形的函式，你要告訴 Jiki 放進好幾個不同的數字，例如距離左邊多遠、距離頂端多遠、矩形的寬度、矩形的高度。

在 Jiki 的世界裡，這些就是不同的投入口，每個數字各有一個。

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="rectangle 機器有 left、top、width、height 的投入口，circle 機器有 cx、cy、radius 的投入口"
  width="396"
  height="400"
/>

所以在程式碼裡，我們就依序寫下每個數字，中間用逗號隔開。函式名稱、括號、每個輸入各寫一個數字，全部用逗號隔開，最後寫上右括號：

```javascript
rectangle(10, 20, 30, 40)
```

如果你用函式時輸入的數量不對，就會出現錯誤。比如說，如果你想放一個輸入到沒有投入口的機器裡，Jiki 會跟你說不行。如果你用的機器有投入口，但你沒告訴 Jiki 要放什麼進去，他也會停下來跟你抱怨。如果你有點叛逆，不妨試試看，看看會發生什麼事吧。隨著東西越來越複雜，你會犯很多這樣的錯。儘量不要為了這個緊張或難過。我們都是從犯錯中學習的。說真的，這是我們的大腦真正把東西內化最快的方式。而且每個人都會犯這些錯。我們全都是從零開始的，所以不要緊張喔。

還有一件事值得一提：有時候在練習裡，你會看到以兩條斜線`//`開頭的行。這些叫做註解（英文：_comments_）。它們是只寫給你自己看的私人筆記，Jiki 會完全忽略。所以如果 Jiki 看到以這兩條斜線開頭的行，他就會直接跳過那一行，接著執行下一行。這些註解讓你可以在程式裡寫筆記給自己。它們真的很方便喔，可以提醒你東西是怎麼運作的。很多時候，註解也會先幫你寫好，這樣你開始做一個練習時，它們可能會提示你該在哪裡寫程式碼，或是怎麼解題。不過也歡迎你自己加註解。

在練習說明的下方，你會看到關於你可以使用哪些函式的資訊，包括你必須放進去的輸入究竟是什麼。
