---
title: "Spotify 資料"
description: "解析你在 Spotify 的收聽資料。"
en_md5: 6e047c1f875bedfce76c5587295b6ac3
---

在這個練習中，你要解析來自模擬 Spotify API 的資料。

這個 API 需要 2 種請求：

1. **使用者請求**：從`https://api.spotify.com/v1/users/{username}`取得使用者最喜歡的曲目。這會回傳一個字典，裡面有一個`items`陣列，每個項目都有一個`urls`字典，其中包含一個`spotify_api`網址。

2. **歌手請求**：從上一個回應中的網址取得歌手的詳細資料。這會回傳一個字典，裡面有一個`name`鍵。

建立一個叫做`favoriteArtists`（最喜歡的歌手）的函式，它接受一個使用者名稱，並回傳像這樣的句子：

```
"fred's most listened to artists are: Glee, NSYNC, Beethoven, and Limp Bizkit!"
```

如果 API 發生錯誤，就在錯誤訊息前面加上`"Error: "`再回傳。

這個練習已經提供了`fetch(url, params)`（取得資料）這個函式。這裡的 params 一律要是空字典`{}`。
