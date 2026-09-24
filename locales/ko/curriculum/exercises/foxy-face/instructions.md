---
title: "여우 얼굴"
description: "다채로운 삼각형으로 기하학적인 여우 얼굴을 만들어 보세요."
en_md5: ace60854184185ffc1ec1e82e45af4bf
---

이 연습 문제에서는 `triangle`(삼각형) 함수를 소개할게요. 이 함수는 7개의 입력을 받아요. 처음 6개는 세 모서리의 좌표 쌍이에요. 마지막 입력은 `color`예요.

- `x1`(x 좌표), `y1`(y 좌표): 첫 번째 모서리 점
- `x2`(x 좌표), `y2`(y 좌표): 두 번째 모서리 점
- `x3`(x 좌표), `y3`(y 좌표): 세 번째 모서리 점
- `color`(색): 삼각형의 색 (예: `"orange"`)

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="삼각형 함수 다이어그램" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### 여우 얼굴 그리기

여러분이 해야 할 일은 삼각형을 사용해서 기하학적인 여우 얼굴을 만드는 것이에요.

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="여우 얼굴" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

얼굴은 좌우 대칭이에요(왼쪽과 오른쪽이 똑같아요). 그리고 총 8개의 삼각형으로 이루어져 있어요.

- `"white"` 볼 두 개
- `"brown"` 귀 두 개
- `"orange"` 얼굴 반쪽 두 개
- `"charcoal"` 코 (삼각형 두 개)

(삼각형을 그릴 때 이 색상을 사용하고, 반드시 문자열(영어: _strings_)로 작성하는지 확인하세요!)

### 올바른 좌표 구하기

시작하는 데 도움이 되도록 몇몇 부분의 윤곽선을 미리 그려 두었어요. **주석에 적힌 순서대로** 따라 하면 좀 더 쉽게 느껴질 거예요.

이전 연습 문제에서처럼 **그리기 공간에 마우스를 올리면** 좌표를 확인할 수 있고, **사용되는 모든 숫자는 5로 나누어 떨어져요** (예를 들어 `5`, `10`, `15` 등이 유효해요).

행운을 빌어요!
