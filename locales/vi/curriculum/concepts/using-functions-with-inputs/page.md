---
title: "Đầu vào của hàm"
description: "Đưa giá trị vào các khe đầu vào của hàm để thay đổi việc hàm làm mỗi lần chạy."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Một trong những điều mạnh mẽ hơn của máy, của hàm, là nhiều cái cho phép bạn đưa thông tin vào bên trong. Và khi bạn chạy chúng, thông tin đó sẽ thay đổi việc chúng làm.

Đến giờ, chúng ta đã gặp những cái máy trông hơi giống cái hộp, như máy `move` (di chuyển).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Máy move, một cái hộp trơn không có khe đầu vào"
  width="322"
  height="400"
/>

Nhưng một số máy thì có khe, như máy `walk` (đi bộ) này. Máy `walk` giống hệt máy `move`. Nó đưa ký tự (tiếng Anh: _character_) tiến về phía trước, chỉ khác là Jiki có thể dùng khe để chỉ định ký tự của bạn đi bao nhiêu bước. Vậy nên thay vì phải dùng hàm `move` ba lần liên tiếp, `move`, `move`, `move`, giờ bạn chỉ cần dùng hàm `walk` và bảo Jiki đưa số ba vào máy.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Máy walk, có một khe đầu vào ở trên đỉnh cho số bước"
  width="481"
  height="400"
/>

Để làm điều này trong code, chúng ta vẫn viết tên của hàm, ở đây là `walk`, và vẫn đặt dấu ngoặc đơn mở. Nhưng sau đó, trước dấu ngoặc đơn đóng, chúng ta nói đầu vào (tiếng Anh: _input_) là gì. Trong trường hợp này, chúng ta muốn đầu vào là ba, để nói `walk` tiến ba bước về phía trước:

```javascript
walk(3)
```

Khi Jiki thấy dòng đó, cậu ấy sẽ lấy số ba. Bạn có thể nghĩ số đó giống như một đồng xu nhỏ, và cậu ấy sẽ đặt nó vào khe của máy trước khi vặn tay quay để bật máy lên.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki thả số 3 như một đồng xu vào khe của máy walk, rồi vặn tay quay"
  width="421"
  height="400"
/>

Với những hàm vẽ hình chữ nhật và hình tròn, bạn cần bảo Jiki đưa vào nhiều con số khác nhau, chỉ định những thứ như cách mép trái bao xa, cách mép trên bao xa, chiều rộng của hình chữ nhật, chiều cao của hình chữ nhật.

Trong thế giới của Jiki, đó chỉ là những khe khác nhau, mỗi con số một khe.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Máy hình chữ nhật với các khe left, top, width, height, và máy hình tròn với các khe cx, cy, radius"
  width="396"
  height="400"
/>

Vậy trong code, chúng ta chỉ viết từng con số rồi đặt dấu phẩy ở giữa. Tên của hàm, một dấu ngoặc đơn, một con số cho mỗi đầu vào, tất cả cách nhau bằng dấu phẩy, rồi chúng ta đóng ngoặc:

```javascript
rectangle(10, 20, 30, 40)
```

Nếu bạn dùng một hàm với sai số lượng đầu vào, bạn sẽ nhận được lỗi. Ví dụ, nếu bạn đưa một đầu vào vào một cái máy không có khe, Jiki sẽ bảo bạn là không được. Còn nếu bạn dùng một cái máy có khe đầu vào mà không nói cho Jiki biết phải đưa gì vào, cậu ấy cũng sẽ dừng lại và phàn nàn. Bạn thử xem nếu thấy hơi nổi loạn, rồi xem chuyện gì xảy ra. Bạn sẽ mắc rất nhiều lỗi như vậy khi mọi thứ trở nên phức tạp hơn. Cố đừng căng thẳng hay khó chịu vì điều đó. Chúng ta đều học được từ những lỗi sai. Đó thật sự là cách nhanh nhất để não chúng ta ghi nhớ mọi thứ. Và ai cũng mắc những lỗi này. Chúng ta đều bắt đầu từ con số không, nên đừng căng thẳng nhé.

Còn một điều nữa đáng nhắc: đôi khi trong bài tập, bạn sẽ thấy những dòng bắt đầu bằng hai dấu gạch chéo, `//`. Người ta gọi đó là chú thích (tiếng Anh: _comments_). Đây là những ghi chú riêng chỉ dành cho bạn, và Jiki sẽ hoàn toàn bỏ qua. Nếu Jiki thấy một dòng bắt đầu bằng hai dấu gạch chéo này, cậu ấy sẽ bước qua nó và đi tiếp sang dòng tiếp theo. Những chú thích này cho bạn cách viết ghi chú cho chính mình. Chúng rất hữu ích để nhắc bạn cách mọi thứ hoạt động. Người ta cũng thường viết sẵn chú thích cho bạn, nên khi bạn bắt đầu một bài tập, bạn có thể thấy gợi ý về chỗ cần viết code hoặc cách giải quyết vấn đề. Nhưng bạn cứ thoải mái thêm chú thích của riêng mình.

Ở cuối phần hướng dẫn của bài tập, bạn sẽ thấy thông tin về những hàm bạn có thể dùng, cụ thể là những đầu vào bạn cần đưa vào.
