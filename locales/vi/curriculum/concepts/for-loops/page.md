---
title: "Hiểu về vòng lặp `for`"
description: "Một vòng lặp gồm ba phần (phần khởi tạo, điều kiện và phần tăng), cho bạn toàn quyền kiểm soát việc lặp."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Có thể bạn còn nhớ vòng lặp repeat thực ra không tồn tại trong JavaScript. Nó chỉ là một thứ thêm vào để cuộc sống của bạn dễ dàng hơn một chút trong lúc chúng ta mới bắt đầu.

Vậy chúng ta dùng gì thay vào đó? Chúng ta dùng một vòng lặp `for` bình thường, trông như thế này.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Bạn có thể thấy vì sao vào ngày đầu tiên, nhìn nó có thể hơi đáng sợ.

Nhưng giờ bạn đã có đủ kiến thức để thấy thoải mái với nó. Vậy chúng ta cùng chia nhỏ nó ra nhé.

Một vòng lặp `for` có ba thành phần: phần khởi tạo (tiếng Anh: _initializer_), điều kiện, và phần tăng (tiếng Anh: _increment_).

Phần khởi tạo, tức đoạn `let i = 0` này, chạy ở đầu cả vòng lặp. Nó chỉ chạy một lần, và ở đây nó tạo ra một cái hộp tên là `i` (biến đếm), đặt giá trị bằng 0. `i` chỉ là một chữ cái dùng để theo dõi một giá trị trong khi chúng ta lặp, và theo truyền thống thì người ta dùng `i` hoặc `x` cho việc này.

Đoạn tiếp theo, đứng trước điều kiện, chạy mỗi lần ngay trước mỗi lần lặp.

Nếu điều kiện đúng thì chúng ta chạy vòng lặp tiếp. Nếu không đúng thì chúng ta không chạy.

Và cuối cùng là phần tăng, chính là `i++`.

`i++` có nghĩa giống hệt `i = i + 1`. Đó chỉ là cách viết tắt, một cách để tăng `i` thêm một đơn vị mỗi lần.

Vậy trong ví dụ này, chúng ta đặt `i` bằng 0. Chúng ta kiểm tra xem `i` có nhỏ hơn 2 không, đúng là có, nên chúng ta chạy vòng lặp.

Rồi ở cuối, chúng ta tăng `i` thêm một, nên `i` thành 1. 0 cộng 1 bằng 1.

Rồi chúng ta lại đi tiếp. Chúng ta kiểm tra xem 1 có nhỏ hơn 2 không.

Đúng vậy, nên chúng ta chạy vòng lặp. Rồi ở cuối, chúng ta lại tăng `i`. Giờ nó là 2, 1 cộng 1 bằng 2.

```javascript
i = 0
i < 2 // đúng - chạy vòng lặp
...   // Chạy một lần lặp
i = i + 1 // 1

i < 2 // đúng - chạy vòng lặp
...   // Chạy một lần lặp
i = i + 1 // 2

i < 2 // sai - thoát khỏi vòng lặp
```

Rồi đến lần thứ ba. Lần này chúng ta kiểm tra xem 2 có nhỏ hơn 2 không, và không phải vậy, nên chúng ta không chạy vòng lặp nữa, và thực ra là chúng ta đã xong vòng lặp rồi. Chúng ta chỉ chuyển sang phần code bên dưới. Vậy là chúng ta đã chạy vòng lặp hai lần, và đó là điều hữu ích cần biết. Miễn là chúng ta bắt đầu từ 0 và có điều kiện `i < n`, thì số `n` chính là số lần vòng lặp sẽ chạy.

Vậy cái này giống như viết repeat 2.

Vậy nó không khó, nhưng nó rối rắm hơn nhiều so với việc chỉ viết repeat 2. Lợi thế của vòng lặp `for` là bạn có thể làm bất cứ điều gì trong ba ô đó. Bạn có thể bắt đầu từ một số khác, đếm tăng thêm nhiều hơn một, đếm ngược, hoặc dùng một điều kiện phụ thuộc vào một thứ khác chứ không phải một biến đếm đơn giản. Chính sự linh hoạt đó khiến vòng lặp `for` trở thành con ngựa thồ của JavaScript.
