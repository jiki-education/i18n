---
title: "VS Codeのインストール"
excerpt: "Windows、macOS、LinuxにVisual Studio Codeをインストールする手順をステップバイステップで説明します。"
tags: ["editors", "installation"]
seo:
  description: "Windows、macOS、LinuxにVisual Studio Code（VS Code）をインストールするための初心者向けガイドです。各OSごとにわかりやすい手順を紹介します。"
  keywords: ["install vscode", "visual studio code", "vs code download", "windows", "macos", "linux", "code editor"]
en_md5: 188bcdb3716903b03032489e4454aaf9
---

## はじめに

Visual Studio Code（VS Code）は、Microsoftが提供する無料のコードエディターで、Windows、macOS、Linuxで動作します。プログラミングを学ぶ方におすすめのエディターです。コードエディターが何か、なぜ必要なのかよくわからない場合は、先に[コードエディターを使う](/guides/using-a-code-editor)ガイドをお読みください。

このガイドでは、各OSにVS Codeをインストールする手順を説明します。下からご利用のシステムを探し、手順に従ってください。一度だけ行えば完了です。

## Windows

1. Webブラウザーで[code.visualstudio.com](https://code.visualstudio.com)を開いてください。
2. **Download for Windows** ボタンをクリックしてください。公式インストーラー（`.exe`ファイル）がダウンロードされます。
3. ダウンロードが完了したら、ファイルを開いてインストーラーを実行してください。
4. ライセンス契約に同意し、**Next** をクリックしてデフォルトのオプションをそのまま進めてください。後で便利なので、右クリックメニューにVS Codeを追加するチェックボックスはオンにしておくことをおすすめします。
5. **Install** をクリックし、次に **Finish** をクリックしてください。準備が完了するとVS Codeが起動します。

## macOS

1. Webブラウザーで[code.visualstudio.com](https://code.visualstudio.com)を開いてください。
2. **Download for macOS** ボタンをクリックしてください。アプリを含む`.zip`ファイルがダウンロードされます。
3. **ダウンロード** フォルダーを開き、ダウンロードしたファイルをダブルクリックして解凍してください。**Visual Studio Code** という名前のアプリが現れます。
4. **Visual Studio Code** を **アプリケーション** フォルダーにドラッグしてください。
5. **アプリケーション** フォルダーを開き、**Visual Studio Code** をダブルクリックして起動してください。macOSから「開いてもよろしいですか？」と確認されたら、**開く** をクリックしてください。

## Linux

LinuxでVS Codeをインストールする最も確実な方法は、Microsoftが配布しているディストリビューション向けの公式パッケージをダウンロードすることです。

1. Webブラウザーで[code.visualstudio.com](https://code.visualstudio.com)を開いてください。
2. **Download for Linux** をクリックし、ご利用のディストリビューションに合ったパッケージを選んでください。
   - DebianやUbuntuベースのシステムでは **.deb** パッケージを選んでください。
   - Fedora、Red Hat、openSUSEベースのシステムでは **.rpm** パッケージを選んでください。
3. ダウンロードしたパッケージをシステムのソフトウェアインストーラーで開き、**インストール** をクリックするか、ターミナルからインストールしてください。
   - DebianやUbuntuの場合、ダウンロードしたフォルダーで `sudo apt install ./<file>.deb` を実行します。
   - FedoraやRed Hatの場合、ダウンロードしたフォルダーで `sudo dnf install ./<file>.rpm` を実行します。
4. インストールが完了したら、アプリケーションメニューからVS Codeを開くか、ターミナルで `code` と入力して起動します。

## VS Codeを開く

どの方法でインストールした場合でも、コードを書きたくなったらいつでもVS Codeを開けます。WindowsとmacOSでは他のアプリケーションと同じ場所に表示され、Linuxではアプリケーションメニューに追加されます。

以上です。これで正式なコードエディターがインストールされ、コードを書き始める準備が整いました。
