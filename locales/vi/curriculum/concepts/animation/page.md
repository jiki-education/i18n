---
title: "Hoạt ảnh"
description: "Đánh lừa mắt để thấy chuyển động bằng cách tô lại nền và vẽ lại từng khung hình ở một vị trí hơi khác."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Đến giờ, khi dùng vòng lặp `repeat` (lặp lại) để vẽ, mỗi thứ mới vẽ ra đều thêm một cái gì đó vào bức hình. Nếu chúng ta vẽ thêm một viên gạch vào bức tường thì nó lấp vào một chỗ trống. Nếu chúng ta vẽ 10 hình tròn thì trên màn hình hiện ra 10 hình tròn. Nó giống như một bức tranh. Một khi bạn đã sơn lên tường thì chỗ sơn đó không biến mất khi bạn vẽ thêm thứ gì khác bên cạnh. Nó vẫn ở đó. Nhưng nếu chúng ta muốn làm cho thứ gì đó trông như đang di chuyển thì sao?

Bạn đã bao giờ thấy một cuốn sách lật chưa? Hồi mình còn nhỏ, loại sách này rất phổ biến, còn bây giờ thì ít hơn. Sách lật là một cuốn sách nhỏ mà mỗi trang có một hình vẽ hơi khác nhau. Khi bạn lật các trang thật nhanh, mắt bạn thấy hình vẽ thay đổi, và não bạn nghĩ rằng có thứ gì đó đang chuyển động. Thật ra nó không hề chuyển động. Đó chỉ là rất nhiều bức hình hơi khác nhau, nối tiếp nhau. Và hoạt ảnh trong code cũng hoạt động đúng như vậy. Mẹo giống hệt nhau. Trước khi vẽ một cảnh mới, chúng ta tô phủ toàn bộ khung vẽ bằng một màu nền, hơi giống như mở một trang mới trong cuốn sách lật của mình, rồi sau đó thay đổi cảnh một chút để trông như đang chuyển động.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Một cuốn sách lật vẽ một hình người que đang chạy, mỗi trang hơi khác nhau nên hình người trông như đang di chuyển"
  width="500"
  height="274"
/>

Vậy nếu lấy một khối lệnh quen thuộc, trong đó chúng ta vẽ các hình tròn ngang màn hình: ta đặt một biến `position` (vị trí), và có một khối `repeat` mà trong đó ta vẽ một hình tròn rồi dịch `position` sang phải một đơn vị. Nếu chạy khối `repeat` đó 100 lần, chúng ta sẽ thấy 100 hình tròn trải ngang màn hình.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Một vệt gồm 100 hình tròn xanh dương vẽ từ trái sang phải trên màn hình"
  width="500"
  height="197"
/>

Giờ hãy xem điều gì xảy ra nếu mỗi lần trước khi vẽ hình tròn, chúng ta thêm vào một hình chữ nhật đơn giản.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Thay vì một vệt các hình tròn, mắt chúng ta giờ bị đánh lừa và thấy một hình tròn như đang lướt ngang màn hình.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Một chuỗi khung hình, mỗi khung là một nền trắng mới với một hình tròn xanh dương nhích thêm một bước sang phải"
  width="500"
  height="187"
/>

Mỗi lần đi qua vòng lặp, chúng ta tô một nền hoàn toàn mới, che đi mọi thứ đã có trước đó, rồi vẽ hình tròn ở vị trí mới của nó.

Mỗi lần lặp giống như một trang mới trong cuốn sách lật.

Và điều quan trọng cần hiểu ở đây là chúng ta không hề di chuyển hình tròn. Hình tròn không phải một vật thể trượt ngang màn hình. Nó chỉ là một hình vẽ. Mỗi lần lặp, chúng ta tô đè lên hình vẽ cũ và tạo ra một hình vẽ hoàn toàn mới, nhích sang phải một chút. Mắt bạn ghép tất cả lại và thấy chuyển động, nhưng thật ra đó chỉ là rất nhiều hình vẽ riêng lẻ, nối tiếp nhau.

Bạn có thể dùng ý tưởng này để tạo ra một cảnh hoàng hôn. Bạn cho mặt trời di chuyển, đổi kích thước, đổi màu sắc. Tất cả đều là cùng một kỹ thuật. Đặt vài biến, tô một nền mới, rồi vẽ mọi thứ. Cập nhật các biến, rồi lặp lại.
