---
title: "Dùng `repeat` mà không cần số lần"
description: "Để trống dấu ngoặc đơn của vòng lặp repeat để Jiki cứ tiếp tục cho đến khi có thứ gì đó bảo cậu ấy dừng lại."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Từ trước đến giờ, mỗi khi dùng vòng lặp repeat, bạn luôn chỉ định một con số cho biết cần lặp bao nhiêu lần. Lặp năm lần, 10 lần, 40 lần. Đôi khi bạn cũng dùng một biến để làm việc này. Nhưng lúc nào bạn cũng nói cho Jiki biết chính xác cần lặp bao nhiêu lần. Tuy nhiên, đôi khi chúng ta không biết trước cần lặp bao nhiêu lần. Hãy nghĩ đến mê cung. Ở ngay đầu khóa học này, bạn đã giải mê cung bằng cách viết ra từng bước đi cụ thể. Bạn nhìn thấy mê cung, đếm số bước, rồi viết đúng số bước cần đi.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Một mê cung mà nhân vật nhìn thấy đường đi, đếm được số bước và viết ra chính xác những bước cần đi"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Nhưng nếu mình nói: "Viết cho mình đoạn code giải được bất kỳ mê cung nào mình đưa ra thì sao?" Mê cung đó có thể cần 10 bước, 50 bước, hoặc 200 bước. Bạn không thể biết trước được.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Vài mê cung khác nhau với đủ hình dạng và kích cỡ, Jiki đang băn khoăn không biết làm sao giải được chúng"
  width="402"
  height="400"
/>

Vậy là bạn cần một cách để bảo Jiki cứ tiếp tục. Cứ kiểm tra xem đi được theo hướng nào, cứ ra quyết định, cứ tiến về phía trước, lặp đi lặp lại cho đến khi xong.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki chạy trên máy chạy bộ, cứ tiếp tục mãi không dừng"
  width="428"
  height="400"
/>

Và cách làm thì rất đơn giản. Chỉ cần không đưa số cho từ khóa `repeat`. Cứ để trống hai dấu ngoặc đơn đó. Nếu làm vậy, Jiki sẽ cứ tiếp tục cho đến khi có thứ gì đó bảo cậu ấy dừng lại. Lát nữa, chúng ta sẽ xem những "thứ gì đó" ấy là gì. Nhưng bây giờ thì cậu ấy sẽ cứ tiếp tục cho đến khi bài tập xong, hoặc cho đến khi cậu ấy thấy mình đã chạy quá lâu, muốn nghỉ một chút và quyết định thế là đủ rồi.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki gục xuống vì kiệt sức bên máy chạy bộ sau khi chạy quá lâu, sẵn sàng bỏ cuộc và nghỉ một chút"
  width="500"
  height="378"
/>
