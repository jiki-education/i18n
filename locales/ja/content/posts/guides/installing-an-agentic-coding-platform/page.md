---
title: "エージェンティックコーディングプラットフォームのインストール方法"
excerpt: "OpenCodeのインストール、サインイン、AIモデルの選択までをステップバイステップで説明します。完全無料で使える選択肢もあります。"
tags: ["agentic-coding", "installation"]
seo:
  description: "OpenCodeをインストールするための初心者向けガイド。Zenによる無料のAIモデルと低価格のGoプランも紹介します。"
  keywords:
    [
      "opencode",
      "opencode インストール",
      "エージェンティックコーディング",
      "AIコーディングアシスタント",
      "opencode zen",
      "opencode go",
      "無料 AI コーディング",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## はじめに

エージェンティックコーディングプラットフォームとは、AIが皆さんと一緒にコードを操作できるツールです。ファイルを読んだり、変更を加えたり、皆さんのコンピュータ上でコマンドを実行したりします。もしこの説明を初めて聞いたのなら、まずは[エージェンティックコーディングとは何か](/guides/what-is-agentic-coding)のガイドをお読みください。準備ができたらここへ戻ってきてください。

このガイドでは、**OpenCode**のインストール、サインイン、AIモデルの選択までを順を追って説明します。このセットアップは一度だけ行えばよく、すべて無料で完了できます。

## 私たちがOpenCodeをおすすめする理由

エージェンティックコーディングツールにはいくつか良いものがあります。Claude Code（Anthropic社）やCodex（OpenAI社）などです。どれも使い方は似ているので、後で乗り換えても学んだことが無駄になることはありません。とはいえ、学習中は**[OpenCode](https://opencode.ai)**をおすすめします。理由は3つです。

- **無料で使えます。** 信頼性が高く、安定しており、本当に使える無料ティアを備えているのは、現在この種のツールではOpenCodeだけです。しかも、その無料ティアが突然なくなる可能性は低いです。
- **ほぼすべてのAIモデルに対応しています。** 最初は無料モデルを使い、慣れてきたらもっと高性能なモデルを試すことも、ツールを変えずにできます。
- **ターミナル上で動きます。** 多くのプロの開発者がこれらのツールを使うときと同じ方法なので、「本物の」やり方を学べます。しかも、VS Codeの中で動かせるので、コードのすぐ隣に表示されます。

OpenCodeは次の2つの方法で使えます。このガイドではその両方に対応できるようにセットアップします。

- **単独で使う** — 任意のターミナルウィンドウで。
- **VS Codeに組み込んで使う** — コードの隣のパネルにOpenCodeが表示され、今作業しているファイルを認識できます。こちらがおすすめです。エージェントが変更を加える様子をエディタ上でリアルタイムに見られます。（VS Codeが何かわからない？　それは私たちの[おすすめのコードエディタ](/guides/using-a-code-editor)です。）

## 料金について

OpenCode自体は無料です。有料になるのは、思考を実行するAIモデルを選んだ場合です。OpenCodeをモデルに接続すると、OpenCodeチームから2つの選択肢が表示されます。

- **Zen** — いくつかのモデルを無料で利用できます。これらのモデルが無料なのは、提供元の企業がプロモーションのために提供しているからで、そのためラインナップは時期によって変わります。また、皆さんの会話がモデルの改善に利用される場合があります。学習用の演習ではこれで十分です。ただし、プライベートな情報や個人情報は入力しないでください。
- **Go** — サブスクリプションです。**月額10ドル**（初月は5ドル）で、はるかに強力なモデルセットを十分に使えます。初日から必要になるわけではありません。Zenの無料モデルから始めて、制限を感じるようになったらアップグレードしましょう。

## どのモデルを選べばいい？

「モデル」が何かよくわからなければ、[エージェンティックコーディングの重要概念](/guides/key-agentic-coding-concepts)のガイドで詳しく説明しています。簡単に言うと、モデルとは実際のAIの「脳」であり、モデルによって賢さや速さ、料金が異なります。

OpenCodeの中では、いつでも`/models`と入力してモデルを切り替えられます。私たちからのアドバイスです。

- **無料ティアの場合** — 提供されている無料モデルを試して、自分に合うものを見つけてください。プロモーションの入れ替わりでラインナップは変わるので、今どのモデルが表示されるかは断言できませんが、この記事を書いている時点では**DeepSeek V4 Flash Free**が非常におすすめです。
- **Goプランの場合** — コーディングに特化したモデル（記事執筆時点では、Kimi K2.7 Code、GLM-5.2、Qwen 3.7ファミリー）はどれも優れています。ひとつ選んで、基本を覚えるまでは比較に頭を悩ませないでください。

あまり深く考えすぎないでください。学習中に取り組む演習であれば、どのモデルでも十分すぎるほど対応できます。

## 始める前に

以下の2つが必要です。

- **VS Code**は、OpenCodeをエディタに組み込んで使うために必要です。まだインストールしていなければ、[VS Codeのインストール](/guides/installing-vscode)のガイドに従ってください。
- **Windowsの場合のみ：WSL**。OpenCodeのターミナル版はLinux上で最も快適に動作します。WSLを使うと、Windowsマシンに本格的なLinuxターミナル環境を用意できます。まず[WSLのインストール](/guides/installing-wsl)のガイドを、最後の「VS CodeからWSLを使う」セクションまで含めて実行してください。それが終わったらここに戻ってきてください。macOSとLinuxでは追加のインストールは不要です。

## OpenCodeのインストール

OpenCodeのインストールはターミナルでの1つのコマンドで完了します。ターミナルを使ったことがない方にとっては、良い最初の体験になるでしょう。命令を入力すると、コンピュータが作業を実行します。

### Windows

1. VS Codeを開き、WSLに接続します（Ctrl+Shift+Pを押し、**WSL: Connect to WSL**を選択）。そしてターミナルを開きます（ターミナルメニューから**新しいターミナル**）。
2. 以下のコマンドをコピーしてターミナルに貼り付け、Enterキーを押します。
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 完了したら、ターミナルを閉じて新しいターミナルを開き、`opencode --version`と入力してEnterを押します。バージョン番号が表示されれば完了です。

### macOS

1. **ターミナル**を開きます（Cmd+Spaceを押して「terminal」と入力しEnter）。もしくはVS Code内でターミナルを開きます（ターミナルメニューから**新しいターミナル**）。
2. 以下のコマンドをコピーしてターミナルに貼り付け、Enterキーを押します。
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 完了したら、ターミナルを閉じて新しいものを開き、`opencode --version`と入力してEnterを押します。バージョン番号が表示されれば完了です。

### Linux

1. ターミナルを開くか、VS Code内でターミナルを開きます（ターミナルメニューから**新しいターミナル**）。
2. 以下のコマンドをコピーしてターミナルに貼り付け、Enterキーを押します。
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 完了したら、ターミナルを閉じて新しいものを開き、`opencode --version`と入力してEnterを押します。バージョン番号が表示されれば完了です。

<!-- SCREENSHOT: terminal after the install script has completed -->

## 初めてのOpenCodeの起動

ではOpenCodeを開き、Zenに接続してモデルと会話できるようにしましょう。

1. VS Codeで、コードの入ったフォルダを開きます（学習用のプロジェクトがあればそれで構いません）。そしてターミナルを開きます（ターミナルメニューから**新しいターミナル**）。
2. `opencode`と入力してEnterキーを押します。OpenCodeのインターフェースがターミナルパネルに現れ、コードのすぐ隣に表示されます。（初回は、VS Codeとの連携を可能にする小さな拡張機能がインストールされるため、OpenCodeが今開いているファイルを認識できるようになります。）
3. 初回起動時には、「Connect a provider」というリストが表示されます。（表示されない場合は、`/connect`と入力して表示させてください。）矢印キーで**OpenCode Zen (Recommended)**を選び、Enterキーを押します。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="OpenCodeのプロバイダー接続画面。OpenCode Zen (Recommended)がリストの先頭にハイライト表示されている" />
  <figcaption>プロバイダーリストからOpenCode Zenを選びます。</figcaption>
</figure>

4. 次に**APIキー**の入力を求められます。これは、あなたが誰であるかを証明する長いコードで、パスワードのようなものです。APIキーを入手するには、ブラウザで<a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a>を開き、無料アカウントを作成します。支払い情報は不要です。表示されたキーをコピーし、ターミナルに貼り付けてEnterキーを押します。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="APIキーの入力を求めているOpenCode。opencode.ai/zenにアクセスしてキーを取得するよう指示されている" />
  <figcaption>opencode.ai/zenでキーを取得し、ここに貼り付けます。</figcaption>
</figure>

5. 最後にモデルの一覧が表示されます。無料のモデルには右側に**Free**と表示されています。その中から1つ選びます。（先に述べたように、この記事執筆時点では**DeepSeek V4 Flash Free**が優れた選択肢です。）`/models`と入力すればいつでもモデルを変更できます。

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="OpenCode Zenのモデル一覧。無料モデルには右側にFreeと表示され、DeepSeek V4 Flash Freeがハイライトされている" />
  <figcaption>無料モデルには右側にFreeと表示されています。ここではDeepSeek V4 Flash Freeを選んでいます。</figcaption>
</figure>

## 最初の会話

それでは、何か質問してみましょう。次のようなメッセージを入力してみてください。

> このフォルダにあるファイルを調べて、それぞれ何をしているか説明して。

何が起こるか見てみましょう。ファイルを読み込み、考え、結果を報告してくれます。また、何かを変更する前には必ずあなたの許可を求めます。読んで→行動して→確認する、というこの流れこそがエージェンティックコーディングの核心です。

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCodeがプロジェクト内のファイルを1つずつ読み込み、考えた上で、各トップレベルフォルダとファイルの役割を説明している" />
  <figcaption>OpenCodeはプロジェクトのファイルを読み込み、考え、見つけた内容を報告します。</figcaption>
</figure>

同じことが、VS Codeの有無にかかわらず、どんなターミナルでもできます。ターミナルを開き、プロジェクトのフォルダに移動し、`opencode`と入力すれば、すぐに始められます。そちらの方が好きだという人もいます。両方試して、自分に合う方法を見つけてください。

以上です。これで、お金をかけずに使えるエージェンティックコーディング環境が整いました。内部で実際に何が起きているのか、またトークンやコンテキストといった言葉の意味を知りたい方は、[エージェンティックコーディングの重要概念](/guides/key-agentic-coding-concepts)に進んでください。
