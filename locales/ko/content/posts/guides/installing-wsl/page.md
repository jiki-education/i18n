---
title: "Linux용 Windows 하위 시스템(WSL) 설치하기"
excerpt: "Windows에서 제대로 된 개발 환경을 사용할 수 있게 해주는 Linux용 Windows 하위 시스템(WSL) 설치 방법을 단계별로 안내합니다."
tags: ["installation"]
seo:
  description: "Windows 10 및 11에서 WSL(Linux용 Windows 하위 시스템)을 설치하는 방법을 초보자도 쉽게 따라할 수 있도록 단계별로 설명하고, 자주 발생하는 문제의 해결 방법도 함께 안내합니다."
  keywords:
    [
      "wsl",
      "install wsl",
      "windows subsystem for linux",
      "ubuntu on windows",
      "windows development environment",
      "코딩 배우기"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## 소개

WSL은 Microsoft가 만든 Windows 기능으로, Windows 안에서 실제 Linux 시스템을 실행해 줘요. 대부분의 프로그래밍 도구는 Linux와 macOS에서 먼저 만들어지고 가장 잘 작동하기 때문에, Windows에서 개발하려면 WSL이 필요해요. Microsoft 자체도 Windows에서 개발할 때 이 방법을 권장하고 있어요. 설치하는 데는 15분 정도 걸리는데, 대부분 기다리는 시간이고, 한 번만 하면 돼요.

## 시작하기 전에

필요한 것:

- **Windows 10(버전 2004 이상) 또는 Windows 11.** 최근 몇 년 안에 나온 Windows 컴퓨터라면 괜찮아요.
- 컴퓨터에 **관리자 권한**이 필요해요. 가족이 함께 쓰는 컴퓨터라면, 처음 설정한 사람이 비밀번호를 입력해 줘야 할 수도 있어요.

## WSL 설치하기

1. **시작** 버튼을 클릭하고 'powershell'이라고 입력하세요. **Windows PowerShell**이 나타나요.
2. 그냥 열지 말고, 마우스 오른쪽 버튼으로 클릭한 다음 **관리자 권한으로 실행**을 선택하세요. Windows에서 변경을 허용할지 묻는 창이 나오면 **예**를 클릭하세요.
3. 나타나는 파란색 창에 다음 명령을 입력하고 Enter 키를 누르세요:
   ```
   wsl --install
   ```
4. Windows가 Ubuntu(가장 널리 사용하는 Linux 버전)를 포함한 모든 것을 다운로드하고 설정해요. 몇 분 정도 걸려요.
5. 컴퓨터를 **다시 시작**하라는 메시지가 나오면 다시 시작하세요.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Ubuntu 설정하기

재시작 후에 Ubuntu 설정을 완료하기 위해 터미널 창이 자동으로 열려요. (만약 열리지 않으면 시작을 클릭하고 'ubuntu'라고 입력한 다음 열어 주세요.)

Linux 시스템에서 사용할 **사용자 이름**과 **비밀번호**를 만들라고 물어볼 거예요:

1. 사용자 이름(소문자, 공백 없음)을 입력하고 Enter를 누르세요.
2. 비밀번호를 입력하고 Enter를 누르고, 확인을 위해 한 번 더 입력하세요.

여기서 모두가 한 번쯤 당황하는 부분이 있어요: **비밀번호를 입력할 때 화면에 아무것도 나타나지 않아요.** 점도, 별표도, 아무것도요. 이건 Linux 보안 기능이지, 오류가 아니에요. 입력한 키가 제대로 등록되고 있으니, 그냥 비밀번호를 입력하고 Enter를 누르세요.

이 비밀번호를 잊지 마세요. 나중에 프로그램을 설치할 때 가끔 필요할 거예요.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## 제대로 작동하는지 확인하기

모든 창을 닫고 **시작**을 클릭한 다음 'ubuntu'라고 입력하고 열어 보세요. `$`로 끝나는 프롬프트가 입력을 기다리고 있는 창이 보이면 성공이에요. 축하합니다! 바로 진짜 Linux 터미널이고, 이제 전문가와 똑같은 개발 환경을 갖추게 된 거예요.

`ls`를 입력하고 Enter를 눌러 보세요. 현재 폴더에 있는 파일 목록이 나올 거예요. (아직 파일이 많지는 않을 거예요.)

## VS Code에서 WSL 사용하기

[VS Code를 설치했다면](/guides/installing-vscode), WSL에 연결해서 에디터와 Linux 터미널이 함께 작동하게 할 수 있어요:

1. VS Code를 열어요.
2. 확장 패널을 열고(왼쪽의 네 개 사각형 아이콘 또는 Ctrl+Shift+X), **WSL**을 검색해서 Microsoft에서 만든 확장을 설치하세요.
3. Ctrl+Shift+P를 누르고 'WSL'을 입력한 다음 **WSL: WSL에 연결**을 선택하세요. VS Code가 다시 열리면서 Ubuntu에 연결돼요.

이제부터 VS Code 안에서 여는 터미널(터미널 메뉴 → 새 터미널)은 모두 Linux 터미널이에요. 저희가 다른 가이드에서도 권장하는 설정이에요.

## 문제가 생겼을 때

가장 흔한 문제는 **가상화**(또는 'VT-x', 'AMD-V', '가상 머신 플랫폼') 관련 오류가 나오는 거예요. WSL은 하드웨어 기능에 의존하는데, 일부 컴퓨터에서는 이 기능이 꺼져 있어요. 이 기능을 켜려면 컴퓨터의 BIOS 설정을 바꿔야 하는데, 제조사마다 방법이 달라요. 노트북 모델명과 '가상화 활성화'를 함께 검색해서 안내를 찾아 보거나, <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">포럼</a>에 물어보면 도와드릴게요.

그 외에 문제가 생기면 Microsoft의 <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">공식 WSL 설치 가이드</a>에 문제 해결 섹션이 있고, 언제든 포럼을 이용하셔도 돼요.
