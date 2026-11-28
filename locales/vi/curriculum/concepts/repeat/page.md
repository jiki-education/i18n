---
title: "Vòng lặp `repeat`"
description: "Dùng từ khóa `repeat` để bảo Jiki chạy đoạn code bên trong cặp dấu ngoặc nhọn một số lần nhất định."
en_md5: f37a63911f75934656cbf04a38ff2b60
---

Từ đầu đến giờ, chúng ta viết mọi thứ theo kiểu tuyến tính, Jiki theo từng chỉ dẫn theo thứ tự từ trên xuống dưới.

Giờ chúng ta sẽ xem cách Jiki thoát khỏi luồng từ trên xuống dưới cứng nhắc này, và cụ thể là cách bảo Jiki chạy đi chạy lại cùng một đoạn code nhiều lần liên tiếp.

Ví dụ nhé, tưởng tượng bạn đang ở trong mê cung và muốn tiến lên phía trước 10 bước. Có một hàm `walk` giúp việc đó, nhưng nếu hàm đó không tồn tại thì sao? Nếu bạn chỉ có hàm `move` (di chuyển) thì sao?

Thay vì viết `move` 10 lần liên tiếp, nghe rất nhàm chán, điều chúng ta cần làm là nói: "Này Jiki, làm việc mình nói ngay sau đây 10 lần nhé.

`Move`."

Để làm điều này trong code, chúng ta cần dùng từ khóa (tiếng Anh: _keyword_) đầu tiên. Từ khóa là những chỉ dẫn mà Jiki hiểu. Chúng trông hơi giống những cái máy, nhưng không phải. Khi Jiki thấy một từ khóa, cậu ấy không tìm một cái máy trên kệ, mà chỉ biết là phải làm gì đó. Điều đó nằm sẵn trong não cậu ấy. Trong khóa học này chúng ta sẽ học khoảng 20 từ khóa khác nhau, và từ khóa đầu tiên là `repeat`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-keywords-2.webp"
  alt="Xung quanh Jiki là các từ khóa như repeat, if, else, and, or, kèm ghi chú rằng từ khóa là những chỉ dẫn mà Jiki hiểu"
  width="358"
  height="400"
/>

Từ khóa `repeat` làm đúng điều mình vừa nói. Nó bảo Jiki: "Làm việc mình nói ngay sau đây nhiều lần như thế này." Bạn xem đoạn code này nhé. Đầu tiên, chúng ta dùng từ khóa `repeat` để báo cho Jiki biết cậu ấy sắp làm một việc gì đó nhiều lần. Sau đó, chúng ta ghi số lần muốn Jiki lặp lại việc đó vào trong dấu ngoặc đơn, rồi đến cặp dấu ngoặc nhọn, và bên trong cặp ngoặc nhọn đó là những việc chúng ta muốn Jiki lặp lại. Kiểu mẫu này cực kỳ phổ biến trong lập trình. Chúng ta chỉ ra một từ khóa, thường kèm theo vài thông tin, trong trường hợp này là số lần làm một việc, rồi đến một khối lệnh (tiếng Anh: _code block_) trong dấu ngoặc nhọn. Quay lại với mê cung, thay vì viết `move`, `move`, `move`, `move`, chúng ta chỉ cần viết `repeat` bốn lần rồi `move`.

```javascript
repeat(4) {
  move()
}
```

Jiki sẽ thấy đoạn code đó và dùng cái máy `move` bốn lần liên tiếp.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-running-loop.webp"
  alt="Jiki dùng cái máy move bốn lần liên tiếp, lần này đến lần khác"
  width="421"
  height="400"
/>

Và trong cặp ngoặc nhọn đó, chúng ta cũng không nhất thiết chỉ có một việc. Jiki có thể lặp đi lặp lại nhiều việc. Chúng ta có thể bảo Jiki `move`, rồi `turnLeft`, và lặp lại toàn bộ chừng đó bốn lần. Nếu Jiki thấy đoạn này, cậu ấy sẽ dùng cái máy `move`, rồi cái máy `turnLeft`, rồi cái máy `move`, rồi cái máy `turnLeft`, rồi cái máy `move`, vân vân, cho đến khi làm xong cả hai việc bốn lần.

```javascript
repeat(4) {
  move()
  turnLeft()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/if-else-code.webp"
  alt="Jiki dùng cái máy move rồi đến cái máy turnLeft, lặp lại cặp hành động đó bốn lần"
  width="500"
  height="390"
/>

Chúng ta gọi những chỉ dẫn lặp này là vòng lặp (tiếng Anh: _loop_), và có rất nhiều vòng lặp khác nhau để dùng, mỗi loại hoạt động hơi khác nhau một chút.

Còn một điều nữa cần biết: khi làm việc với vòng lặp, việc giữ code gọn gàng ngăn nắp trở nên thiết yếu. Khi code của bạn có cấu trúc thị giác tốt, bạn rất dễ thấy điều gì đang diễn ra. Còn nếu không, nếu bạn quên thụt lề cho đẹp hoặc thụt lề lung tung, mọi thứ rối lên rất nhanh. Vì vậy trong khóa học này, chúng ta luôn có một quy tắc. Bạn luôn đặt dấu ngoặc nhọn mở trên cùng dòng với câu lệnh `repeat` (tiếng Anh: _statement_). Bạn luôn đặt dấu ngoặc nhọn đóng trên một dòng riêng sau câu lệnh, và luôn thụt lề đoạn code ở giữa hai dấu ngoặc đó hai dấu cách. Như vậy mọi thứ sẽ luôn gọn gàng, và nếu bạn quên hoặc làm theo kiểu khác, bạn sẽ gặp lỗi đấy.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/multiple-things-in-loop.webp"
  alt="Jiki chỉ vào phần thụt lề và dòng mới giúp khối lệnh của vòng lặp gọn gàng"
  width="500"
  height="398"
/>
