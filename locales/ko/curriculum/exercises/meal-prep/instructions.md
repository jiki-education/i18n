---
title: "식사 준비"
description: "레시피에 필요한 재료 중 어떤 것을 사야 하는지 알아내요."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

저녁에 쓸 재료를 사러 매일 가게에 잠깐 들르는 걸 좋아하는 편이에요. 산책도 할 겸, 동네 가게 주인과 이야기를 나눌 핑계도 되고요.

매일 레시피를 하나 고르고, 냉장고에 뭐가 있는지 확인한 다음, 사야 할 것들을 적어 둬요.

이제는 그 수고를 대신해 줄 프로그램을 직접 만들어서 삶을 조금 더 편하게 해 보기로 했어요! 이 프로그램은 목록에 있는 재료와 냉장고에 있는 재료를 비교해서, 차이만 알려 줘요.

여러분이 할 일은 `shoppingList(fridgeContents, recipeItems)`(장바구니 목록)라는 함수를 만드는 거예요. 이 함수는 입력을 두 개 받아요. 하나는 냉장고에 있는 것들을 담은 문자열 배열이고, 다른 하나는 레시피에 있는 재료들을 담은 문자열 배열이에요. 그리고 사야 할 것들을 문자열 배열로 반환해야 해요.

예를 들어:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### push 메서드

이 연습 문제를 풀려면 `.push(element)` 메서드로 배열을 하나씩 채워 나가야 해요. 코드에서는 새 배열을 하나만 만들 수 있어요. 무엇을 해야 할지 잘 모르겠다면 이전 영상을 다시 봐요.

`includes` 메서드도 사용해 보면 좋아요 (아래에 다시 정리해 두었어요).

즐겁게 해봐요!
