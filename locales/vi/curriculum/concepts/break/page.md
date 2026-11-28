---
title: "Từ khóa `break`"
description: "Dùng từ khóa `break` bên trong thân vòng lặp để thoát khỏi vòng lặp ngay lập tức và chuyển sang đoạn code phía sau."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Từ khóa `break` có thể dùng ở bất kỳ đâu trong thân của bất kỳ vòng lặp nào.

Phần nằm giữa hai dấu ngoặc nhọn chính là thân vòng lặp. Khi Jiki nhìn thấy từ khóa này, cậu ấy sẽ thoát khỏi vòng lặp ngay lập tức và chuyển sang đoạn code bên dưới vòng lặp.

Vậy nếu chúng ta có một yêu cầu là chạy vòng lặp này 50 lần, nhưng lại muốn dừng khi người dùng đã bắn năm lần, thì chúng ta có thể đặt một vòng lặp `for` ở trên cùng để đếm dần lên tới 50.

Nhưng sau đó, chúng ta có thể đặt một điều kiện ở giữa vòng lặp để kiểm tra xem người dùng đã bắn đủ năm lần chưa, và nếu rồi thì chúng ta `break` (thoát khỏi vòng lặp) để dừng nó lại.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // thoát khỏi vòng lặp
  }
}
```
