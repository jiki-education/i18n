---
title: "VS Code 설치하기"
excerpt: "Windows, macOS, Linux에 Visual Studio Code를 설치하는 단계별 안내입니다."
tags: ["editors", "installation"]
seo:
  description: "Windows, macOS, Linux에서 Visual Studio Code(VS Code)를 설치하는 초보자 친화적인 가이드로, 각 시스템에 대한 명확한 단계별 안내를 제공합니다."
  keywords: ["vscode 설치", "visual studio code", "VS Code 다운로드", "windows", "macos", "linux", "코드 편집기"]
en_md5: 188bcdb3716903b03032489e4454aaf9
---

## 시작하며

Visual Studio Code(VS Code)는 Microsoft가 만든 무료 코드 편집기로, Windows, macOS, Linux에서 모두 사용할 수 있어요. 코딩을 배우는 동안 가장 추천하는 편집기예요. 코드 편집기가 무엇인지, 왜 필요한지 잘 모르겠다면 [코드 편집기 사용하기](/guides/using-a-code-editor) 가이드를 먼저 읽어보세요.

이 가이드는 각 운영체제에 VS Code를 설치하는 과정을 안내해요. 아래에서 자신의 시스템을 찾아 단계를 따라 해보세요. 한 번만 설치하면 돼요.

## Windows

1. 웹 브라우저에서 [code.visualstudio.com](https://code.visualstudio.com)을 열어요.
2. **Windows용 다운로드** 버튼을 클릭해요. 그러면 공식 설치 파일(`.exe`)이 다운로드돼요.
3. 다운로드가 완료되면 파일을 열어 설치 프로그램을 실행해요.
4. 사용권 계약에 동의하고, 기본 설정을 그대로 유지하면서 **다음**을 계속 클릭해요. 마우스 오른쪽 클릭 메뉴에 VS Code를 추가하는 체크박스를 체크된 상태로 두는 것을 추천해요. 나중에 편리하게 쓸 수 있어요.
5. **설치**를 클릭하고, 그다음 **마침**을 클릭해요. 설치가 끝나면 VS Code가 열려요.

## macOS

1. 웹 브라우저에서 [code.visualstudio.com](https://code.visualstudio.com)을 열어요.
2. **macOS용 다운로드** 버튼을 클릭해요. 앱이 들어 있는 `.zip` 파일이 다운로드돼요.
3. **다운로드** 폴더를 열고 다운로드된 파일을 더블 클릭해서 압축을 풀어요. 그러면 **Visual Studio Code**라는 앱이 나타나요.
4. **Visual Studio Code**를 **응용 프로그램** 폴더로 드래그해서 넣어요.
5. **응용 프로그램** 폴더를 열고 **Visual Studio Code**를 더블 클릭해서 실행해요. macOS에서 정말로 열겠냐고 물으면 **열기**를 클릭해요.

## Linux

Linux에서 VS Code를 설치하는 가장 확실한 방법은 Microsoft에서 배포판에 맞는 공식 패키지를 다운로드하는 거예요.

1. 웹 브라우저에서 [code.visualstudio.com](https://code.visualstudio.com)을 열어요.
2. **Linux용 다운로드**를 클릭하고, 자신의 배포판에 맞는 패키지를 선택해요.
   - Debian, Ubuntu 기반 시스템에서는 **.deb** 패키지를 선택해요.
   - Fedora, Red Hat, openSUSE 기반 시스템에서는 **.rpm** 패키지를 선택해요.
3. 다운로드한 패키지를 시스템의 소프트웨어 설치 프로그램으로 열고 **설치**를 클릭하거나, 터미널에서 다음 명령으로 설치해요.
   - Debian이나 Ubuntu에서는 다운로드한 폴더에서 `sudo apt install ./<file>.deb`를 실행해요.
   - Fedora나 Red Hat에서는 다운로드한 폴더에서 `sudo dnf install ./<file>.rpm`를 실행해요.
4. 설치가 완료되면 애플리케이션 메뉴에서 VS Code를 열거나, 터미널에서 `code`를 실행해요.

## VS Code 열기

어떤 방법으로 설치했든 이제 코드를 작성하고 싶을 때마다 VS Code를 열 수 있어요. Windows와 macOS에서는 다른 애플리케이션과 나란히 표시되고, Linux에서는 애플리케이션 메뉴에서 찾을 수 있어요.

이제 끝이에요. 이제 제대로 된 코드 편집기가 설치되었으니 코드 작성을 시작할 준비가 되었어요.
