---
title: "安裝 Windows Subsystem for Linux（WSL）"
excerpt: "一步步帶你安裝 Windows Subsystem for Linux，讓你在 Windows 上擁有完整的開發環境。"
tags: ["installation"]
seo:
  description: "專為初學者寫的 WSL（Windows Subsystem for Linux）安裝指南，適用於 Windows 10 與 11，提供清楚的逐步操作說明，以及常見問題的解決方法。"
  keywords:
    [
      "wsl",
      "安裝 wsl",
      "windows subsystem for linux",
      "在 windows 上使用 ubuntu",
      "windows 開發環境",
      "學習程式設計",
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Introduction

WSL（**Windows Subsystem for Linux**）是 Microsoft 打造的一項 Windows 功能，能在你的 Windows 電腦裡執行真正的 Linux 系統。你需要它，是因為大多數程式開發工具都是先在 Linux 和 macOS 上推出（也運作得最好），而 WSL 正是 Windows 開發者使用這些工具的方式。這也是 Microsoft 自己推薦的 Windows 開發方式。安裝過程大約 15 分鐘，大部分時間都在等待，而且只需要安裝一次。

## 開始之前

你需要：

- **Windows 10（版本 2004 或更新）或 Windows 11。** 這幾年出廠的 Windows 電腦都沒問題。
- 這台電腦的**系統管理員權限**。如果這是家人共用的電腦，你可能需要請當初設定的人幫你輸入密碼。

## 安裝 WSL

1. 點擊**開始**按鈕，輸入「powershell」。你會看到**Windows PowerShell**出現。
2. 不要直接打開它。請按右鍵，然後選擇**以系統管理員身分執行**。Windows 會詢問你是否允許它變更設定：點擊**是**。
3. 在出現的藍色視窗中，輸入以下指令並按下 Enter：
   ```
   wsl --install
   ```
4. Windows 會下載並設定好所有東西，包括一套叫做**Ubuntu**的 Linux 系統（最受歡迎的 Linux 版本）。這可能需要幾分鐘。
5. 當它請你重新啟動時，**重新啟動你的電腦**。

<!-- SCREENSHOT: PowerShell running wsl --install -->

## 設定 Ubuntu

重新啟動後，會自動開啟一個終端機視窗，完成 Ubuntu 的設定。（如果沒有自動開啟，請點擊開始，輸入「ubuntu」並開啟它。）

它會請你為 Linux 系統建立一組**使用者名稱**和**密碼**：

1. 輸入使用者名稱（小寫、不含空格），然後按下 Enter。
2. 輸入密碼並按下 Enter，然後再輸入一次確認。

這裡有個地方常讓大家卡住：**輸入密碼時，螢幕上什麼都不會顯示**。沒有圓點、沒有星號，什麼都沒有。這是 Linux 的安全機制，不是故障。你打的字其實都有被記錄下來，所以直接輸入密碼並按下 Enter 就好。

別忘了這組密碼喔。之後安裝東西時，偶爾會用到它。

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## 確認一切正常

把所有視窗都關掉，然後點擊**開始**，輸入「ubuntu」並開啟它。你應該會看到一個視窗，提示字元以`$`結尾，等著你輸入。恭喜！這是真正的 Linux 終端機，你現在擁有和專業開發者一樣的開發環境了。

試著輸入`ls`並按下 Enter。它會列出你目前資料夾裡的檔案（現在應該還不多）。

## 在 VS Code 中使用 WSL

如果你已經[安裝好 VS Code](/guides/installing-vscode)，它就能連線到 WSL，讓你的編輯器和 Linux 終端機一起運作：

1. 開啟 VS Code。
2. 開啟擴充功能面板（左側的四個方形圖示，或按 Ctrl+Shift+X），搜尋**WSL**，然後安裝 Microsoft 製作的擴充功能。
3. 按下 Ctrl+Shift+P，輸入「WSL」，然後選擇**WSL: Connect to WSL**。VS Code 會重新開啟，並連線到 Ubuntu。

從現在開始，你在 VS Code 裡開啟的任何終端機（「終端機」選單，然後選「新增終端機」）都是 Linux 終端機。這也是我們在後續所有指南中推薦的設定方式。

## 如果出了問題

最常見的問題是出現提到**虛擬化**的錯誤（或是提到「VT-x」、「AMD-V」或「虛擬機器平台」）。WSL 依賴一項硬體功能，而這項功能在某些電腦上是關閉的。要開啟它，就得變更電腦 BIOS 裡的設定，而每個廠商的做法都不一樣。你可以搜尋你的筆電型號加上「enable virtualisation」來找操作說明，或是到 <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">我們的論壇</a>發問，我們會協助你。

至於其他問題，Microsoft 的<a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">官方 WSL 安裝指南</a>有疑難排解章節；當然，論壇也隨時歡迎你。
