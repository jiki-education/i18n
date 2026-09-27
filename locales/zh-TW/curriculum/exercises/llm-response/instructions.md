---
title: "LLM 回應"
description: "解析並格式化 AI 聊天機器人的回應。"
en_md5: 85c1827a73310a9d2285972cc0b1cb33
---

建立一個叫做`askLlm`（詢問 LLM）的函式，它接受一個輸入，也就是你想問的問題。

使用`fetch`（抓取）(url, parameters) 函式，向 "https://myllm.com/api/v2/qanda" 這個 API 發出請求。參數應該是一個字典，裡面只放一組 "question" 的鍵值對。

先看看你拿回來的資料，再把它轉換成下面這個格式：

"The answer to 'Who won the 1966 Football Men's World Cup?' is 'England' (100% certainty in 0.5s)."

最後，回傳這個字串吧。

另外有幾點提醒喔：

- 你會收到多個可能的答案，請選出 LLM 最有把握的那一個。
- 小數 0.78 和百分比 78% 是一樣的。
- 123ms 和 0.123s 是一樣的（1 秒有 1000 毫秒）。
