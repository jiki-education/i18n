---
title: "Hiểu về vòng lặp `while`"
description: "Một vòng lặp cứ chạy mãi chừng nào điều kiện nào đó vẫn còn đúng."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

Vòng lặp tiếp theo bạn cần biết là vòng lặp `while` (trong khi).

Nó có nghĩa là: "Chừng nào một điều kiện còn đúng, hãy chạy vòng lặp." Giả sử trong Space Invaders có một luật quy định bạn chỉ được bắn năm lần. Thế là ở đây chúng ta có một vòng lặp kiểu: chừng nào số lần bắn còn nhỏ hơn năm, thì vòng lặp cứ chạy và người chơi vẫn chơi được.

```javascript
while (numShots < 5) {
  // bắn người ngoài hành tinh
  numShots++
}
```

Mỗi lần có người bắn, chúng ta tăng `numShots` thêm một, và cuối cùng sẽ chạm mốc năm, thế là vòng lặp thoát ra.

Giờ thì có một vấn đề này: với vòng lặp `while`, bạn rất dễ tạo ra những lỗi khiến vòng lặp không bao giờ kết thúc. Người ta gọi đó là vòng lặp vô hạn (tiếng Anh: _infinite loop_), và đây là một trong những lỗi phổ biến nhất trong các chương trình.

Khi máy tính của bạn chậm đi, quạt bắt đầu quay, mọi thứ ồn ào, thì thường là do ai đó đã để lại một vòng lặp vô hạn không bao giờ kết thúc trong code của họ.
