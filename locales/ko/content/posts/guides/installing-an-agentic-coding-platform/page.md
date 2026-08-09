---
title: "에이전틱 코딩 플랫폼 설치하기"
excerpt: "OpenCode를 설치하고 로그인한 후 AI 모델을 선택하는 과정을 단계별로 안내합니다. 비용이 전혀 들지 않는 옵션도 포함되어 있어요."
tags: ["agentic-coding", "installation"]
seo:
  description: "초보자도 따라 할 수 있는 OpenCode 설치 가이드입니다. 저희가 추천하는 에이전틱 코딩 플랫폼으로, Zen을 통한 무료 AI 모델 옵션과 저렴한 Go 요금제도 소개해요."
  keywords:
    [
      "OpenCode 설치",
      "에이전틱 코딩",
      "AI 코딩 어시스턴트",
      "OpenCode Zen",
      "OpenCode Go",
      "무료 AI 코딩",
      "VS Code"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## 시작하며

에이전틱 코딩 플랫폼은 AI가 여러분과 함께 코드 작업을 할 수 있게 도와주는 도구예요. 파일을 읽고, 수정하고, 컴퓨터에서 명령을 실행할 수 있어요. 이 설명이 낯설다면 먼저 [에이전틱 코딩이란 무엇인가](/guides/what-is-agentic-coding) 가이드를 읽고, 설치할 준비가 되면 다시 여기로 돌아와요.

이 가이드는 **OpenCode**를 설치하고, 로그인한 후 AI 모델을 선택하는 과정을 차근차근 알려드려요. 이 작업은 한 번만 하면 되고, 전 과정을 한 푼도 들이지 않고 진행할 수 있어요.

## 왜 OpenCode를 추천하나요

에이전틱 코딩 도구는 Claude Code(Anthropic), Codex(OpenAI) 등 여러 좋은 것들이 있어요. 사용법이 대체로 비슷하기 때문에 나중에 다른 도구로 바꾸더라도 지금 배우는 지식이 헛되지 않아요. 그래도 학습 중에는 **[OpenCode](https://opencode.ai)**를 권해 드려요. 이유는 세 가지예요.

- **무료로 사용할 수 있어요.** 현재 이런 종류의 도구 중에서 안정적이고 제대로 쓸 수 있는 무료 플랜을 제공하는 것은 OpenCode가 유일하고, 이 무료 플랜이 갑자기 사라질 가능성도 낮아요.
- **거의 모든 AI 모델과 함께 쓸 수 있어요.** 무료 모델로 시작했다가 나중에 더 고급 모델을 사용해 보고 싶어도 도구를 바꾸지 않고 그대로 쓸 수 있어요.
- **터미널에서 실행하기 때문에** 대부분의 전문 개발자들이 실제로 쓰는 방식 그대로 배울 수 있어요. 게다가 VS Code 안에서 실행하면 코드 바로 옆에 떠 있어서 더 편리해요.

OpenCode는 두 가지 방식으로 쓸 수 있고, 이 가이드에서는 둘 다 설정하는 방법을 알려드려요.

- **터미널 창에서 단독으로 실행하기.**
- **VS Code 안에 내장해서** 코드 옆 패널에 열고, 작업 중인 파일을 인식하게 하는 방식이에요. 이 방법을 추천해요. 에이전트가 변경한 내용이 에디터에 바로 표시되는 걸 보면서 작업할 수 있어요. (VS Code가 뭔지 모르겠다면, 저희가 추천하는 [코드 편집기 가이드](/guides/using-a-code-editor)를 참고하세요.)

## 비용은 얼마나 드나요

OpenCode 자체는 무료예요. 돈이 드는 부분은 생각을 실제로 수행하는 AI 모델이에요. OpenCode를 모델에 연결하면 OpenCode 팀에서 제공하는 두 가지 옵션이 보여요.

- **Zen**에서는 몇 가지 모델을 무료로 제공해요. 이 모델들은 배후의 회사들이 홍보 차원에서 무료로 제공하는 것이기 때문에, 제공 목록이 바뀔 수 있고, 대화 내용이 모델 개선에 활용될 수 있어요. 학습 연습용으로는 충분한 조건이지만, 사적이거나 개인적인 내용은 절대 붙여넣지 마세요.
- **Go**는 구독제로, **월 10달러**(첫 달은 5달러)에 훨씬 더 강력한 모델들을 넉넉하게 쓸 수 있어요. 처음부터 필요하지는 않아요. Zen의 무료 모델로 시작하고, 한계를 느끼면 업그레이드하세요.

## 어떤 모델을 골라야 할까요

모델이 무엇인지 잘 모르겠다면, [핵심 에이전틱 코딩 개념](/guides/key-agentic-coding-concepts) 가이드에서 자세히 설명해 드려요. 간단히 말하면, 모델은 실제 AI의 ‘두뇌’ 역할을 하며, 모델마다 똑똑한 정도와 속도, 비용이 달라요.

OpenCode 안에서는 언제든 `/models`를 입력해 모델을 바꿀 수 있어요. 저희 추천은 이렇습니다.

- **무료 플랜**에서는 제공되는 무료 모델을 이것저것 써 보면서 손에 맞는 걸 찾아보세요. 프로모션에 따라 목록이 바뀌기 때문에 지금 여러분 앞에 어떤 목록이 뜰지 장담할 수 없지만, 글을 쓰는 현 시점에서 **DeepSeek V4 Flash**는 훌륭한 무료 선택지예요.
- **Go 요금제**에서는 코딩에 특화된 모델들(글을 쓰는 시점 기준으로 Kimi K2.7 Code, GLM-5.2, Qwen 3.7 제품군)이 모두 강력해요. 하나를 고르고, 기초를 익힌 다음에야 비교를 걱정하세요.

너무 고민하지 마세요. 학습 중에 하게 될 연습 문제 수준에서는 제공되는 어떤 모델로도 충분해요.

## 시작하기 전에

다음 두 가지가 준비되어 있어야 해요.

- **VS Code**가 있어야 편집기 안에서 OpenCode를 내장해서 쓸 수 있어요. 아직 설치하지 않았다면 [VS Code 설치 가이드](/guides/installing-vscode)를 따라 해 주세요.
- **Windows에서만: WSL**이 필요해요. OpenCode의 터미널 버전은 Linux에서 가장 잘 동작하기 때문에, WSL을 쓰면 Windows에서도 제대로 된 Linux 터미널을 쓸 수 있어요. [WSL 설치 가이드](/guides/installing-wsl)를 먼저 따라 하되, 마지막 부분의 "Using WSL from VS Code" 섹션까지 마친 후 다시 이곳으로 돌아와요. macOS와 Linux에서는 추가로 설치할 것이 없어요.

## OpenCode 설치하기

OpenCode 설치는 터미널에서 단 한 줄의 명령어로 끝나요. 터미널을 한 번도 써 본 적이 없다면 좋은 첫 경험이 될 거예요. 명령을 입력하면 컴퓨터가 알아서 처리해 줍니다.

### Windows

1. VS Code를 열고, WSL에 연결한 뒤(Ctrl+Shift+P를 누르고 **WSL: Connect to WSL** 선택), 터미널을 엽니다(터미널 메뉴 > 새 터미널).
2. 다음 명령어를 복사해 터미널에 붙여넣고 Enter 키를 누르세요.
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 설치가 끝나면 터미널을 닫고, 새 터미널을 열어 `opencode --version`을 입력하고 Enter 키를 눌러요. 버전 번호가 출력되면 준비 완료예요.

### macOS

1. **터미널**을 엽니다 (Cmd+Space를 누르고 '터미널'이라고 입력한 후 Enter 키를 누르세요). 또는 VS Code 안에서 터미널을 열어도 됩니다(터미널 메뉴 > 새 터미널).
2. 다음 명령어를 복사해 터미널에 붙여넣고 Enter 키를 누르세요.
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 설치가 끝나면 터미널을 닫고, 새 터미널을 열어 `opencode --version`을 입력하고 Enter 키를 눌러요. 버전 번호가 출력되면 준비 완료예요.

### Linux

1. 터미널을 열거나, VS Code 안에서 터미널을 엽니다(터미널 메뉴 > 새 터미널).
2. 다음 명령어를 복사해 터미널에 붙여넣고 Enter 키를 누르세요.
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. 설치가 끝나면 터미널을 닫고, 새 터미널을 열어 `opencode --version`을 입력하고 Enter 키를 눌러요. 버전 번호가 출력되면 준비 완료예요.

<!-- SCREENSHOT: terminal after the install script has completed -->

## OpenCode 처음 실행하기

이제 OpenCode를 열고 Zen에 연결해서 대화할 모델을 확보하세요.

1. VS Code에서 코드가 들어 있는 폴더를 하나 열고(연습 중인 프로젝트 아무거나 좋아요), 터미널을 엽니다(터미널 메뉴 > 새 터미널).
2. `opencode`라고 입력하고 Enter 키를 누르세요. 터미널 패널에 OpenCode 인터페이스가 나타나 코드 바로 옆에 표시돼요. (처음 실행하면 OpenCode가 현재 열려 있는 파일을 알 수 있도록 VS Code와 연결해 주는 작은 확장 프로그램도 함께 설치됩니다.)
3. 처음 실행하면 'Connect a provider'라는 제목의 목록이 나타날 거예요. (목록이 뜨지 않으면 `/connect`를 입력해 수동으로 불러오세요.) 화살표 키로 **OpenCode Zen (Recommended)**를 선택하고 Enter 키를 누르세요.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="OpenCode의 Connect a provider 화면, OpenCode Zen (Recommended)가 목록 상단에 강조 표시되어 있습니다" />
  <figcaption>제공자 목록에서 OpenCode Zen을 선택하세요.</figcaption>
</figure>

4. 그러면 **API 키**를 요구할 거예요. API 키는 여러분의 신원을 증명하는 긴 코드로, 비밀번호와 비슷한 역할을 해요. 브라우저에서 <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a>에 접속해 무료 계정을 만드세요. 결제 정보는 필요 없어요. 발급받은 키를 복사해 터미널에 붙여넣고 Enter 키를 누르세요.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode에서 API 키를 요구하는 화면, opencode.ai/zen으로 가서 키를 받으라는 안내가 표시되어 있습니다" />
  <figcaption>opencode.ai/zen에서 키를 받아 여기에 붙여넣으세요.</figcaption>
</figure>

5. 마지막으로 모델 목록이 표시되는데, 무료 모델은 오른쪽에 **Free**라고 표시돼요. 그중 하나를 고르세요(앞서 말씀드렸듯이 글을 쓰는 시점에서는 **DeepSeek V4 Flash Free**가 아주 좋은 선택이에요). 언제든 `/models`를 입력하면 모델을 바꿀 수 있어요.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="OpenCode Zen의 모델 목록, 오른쪽에 Free 표시가 있고 DeepSeek V4 Flash Free가 강조 표시되어 있습니다" />
  <figcaption>오른쪽에 무료 모델이 표시되어 있어요. 여기서는 DeepSeek V4 Flash Free를 선택 중입니다.</figcaption>
</figure>

## 첫 대화 시작하기

이제 뭐든 물어보세요. 다음과 같은 메시지를 입력해 봐요.

> Look at the files in this folder and explain what they do.

어떤 일이 일어나는지 지켜보세요. 파일을 읽고, 생각한 뒤 결과를 보고해 주고, 무언가를 바꾸기 전에는 반드시 허락을 구할 거예요. 이렇게 읽고, 행동하고, 확인하는 반복 과정이 에이전틱 코딩의 핵심이에요.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode가 프로젝트 파일을 하나씩 읽고 생각한 뒤, 각 최상위 폴더와 파일의 역할을 설명하는 화면" />
  <figcaption>OpenCode가 프로젝트 파일을 읽고 생각한 후 찾은 내용을 보고합니다.</figcaption>
</figure>

이 모든 과정은 VS Code 없이 터미널에서도 똑같이 동작해요. 터미널을 열고 프로젝트 폴더로 이동한 다음 `opencode`를 입력하면 바로 시작할 수 있어요. 이 방식을 선호하는 사람도 많으니, 둘 다 써 보고 편한 쪽을 선택하세요.

이게 전부예요. 이제 비용을 전혀 들이지 않고 작동하는 에이전틱 코딩 환경이 갖춰졌어요. 내부에서 실제로 어떤 일이 일어나는지, 토큰이나 컨텍스트 같은 용어가 무엇을 의미하는지 알고 싶다면 [핵심 에이전틱 코딩 개념](/guides/key-agentic-coding-concepts) 가이드로 이어서 읽어 보세요.
