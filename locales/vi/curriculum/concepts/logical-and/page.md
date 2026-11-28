---
title: "Toán tử `&&` (And)"
description: "Kết hợp hai điều kiện bằng `&&` để cả điều kiện chỉ đúng khi cả hai phần đều đúng."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Nếu mình nhờ bạn mở cửa chỉ khi người đó trên 20 tuổi, chắc bạn biết ngay phải làm gì. Nhưng nếu bạn cần kiểm tra xem người đó có trên 20 tuổi _và_ đang mặc đúng bộ trang phục không thì sao? Tức là bạn phải kiểm tra hai điều kiện khác nhau cùng một lúc. Bạn sẽ làm thế nào?

Có thể bạn sẽ viết một câu lệnh `if` lồng nhau (tiếng Anh: _nested_), kiểu giống như những vòng lặp lồng nhau hồi trước. Bạn nói nếu `age` lớn hơn `20` thì chúng ta bước vào khối lệnh này, rồi thêm một `if` nữa kiểm tra `outfit` bằng `"disco"`, rồi thêm một dấu ngoặc nhọn và một khối lệnh mới. Cách đó vẫn chạy được, nhưng khá rối, nhất là khi bạn muốn có thật nhiều điều kiện.

May thay, có một cách dễ hơn: điều kiện có thể có nhiều phần. Thay vì chỉ kiểm tra một thứ trong điều kiện, chúng ta có thể kiểm tra hai, ba hoặc nhiều thứ hơn. Và để làm được vậy, chúng ta cần dùng từ khóa `and`. Đáng buồn là trong JavaScript, từ khóa and thật ra không phải là chữ and như ở một số ngôn ngữ khác. Thay vào đó, bạn phải viết hai dấu & (tiếng Anh: _ampersand_) cạnh nhau. Bạn đành phải nhớ điều này thôi. Hơi khó chịu, nhưng nó là như vậy, rồi bạn sẽ quen.

Vậy là chúng ta có thể dùng nó để tạo ra một điều kiện phức tạp hơn. Chúng ta nói nếu `age` lớn hơn `20` và `outfit` là `"disco"` thì mình đi tiếp. Còn nếu `age` nhỏ hơn `20` hoặc `outfit` không phải `"disco"` thì cả câu lệnh, cả điều kiện đều là sai. Nếu bạn từng học về logic, từng làm mấy mạch điện tử hay học toán cao hơn một chút thì điều này sẽ rất tự nhiên với bạn. Còn nếu chưa thì bạn sẽ nắm được nhanh thôi.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Có một điều khiến người ta hay vấp khi dùng cả and lẫn or, đó là mỗi bên của and/or (tức là và/hoặc) đều phải là một phép so sánh hoàn chỉnh. Vì vậy, kể cả khi so sánh cùng một biến ở hai bên, bạn vẫn phải viết lại biến đó. Bạn không thể viết `if age is greater than 13 and less than 20`. Bạn phải viết `if age is greater than 13 and age is less than 20`. Hai bên đều phải là những phép so sánh hoàn chỉnh.

```javascript
if (age > 13 && age < 20)
```
