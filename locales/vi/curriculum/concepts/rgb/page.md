---
title: "Màu RGB"
description: "Pha trộn ánh sáng đỏ, xanh lá và xanh dương với các giá trị từ 0 đến 255 để tạo ra bất kỳ màu nào bạn muốn trên màn hình."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB cho phép chúng ta nghĩ về màu sắc như một hỗn hợp của đỏ, xanh lá và xanh dương. Đó chính là ý nghĩa của RGB: đỏ (tiếng Anh: _red (R)_), xanh lá (tiếng Anh: _green (G)_), xanh dương (tiếng Anh: _blue (B)_). Nếu bạn còn nhớ cảnh pha màu nước hồi ở trường thì ý tưởng ở đây cũng tương tự, chỉ khác là chúng ta pha ánh sáng chứ không phải pha sơn.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Ba vòng tròn ánh sáng đỏ, xanh lá và xanh dương chồng lên nhau, pha trộn để tạo ra vàng, hồng cánh sen, xanh lơ và trắng"
  width="500"
  height="390"
/>

Trong nhiều bài tập, bạn sẽ gặp một hàm tên là `rgb(red, green, blue)`. Hàm này nhận ba con số làm đầu vào, một cho đỏ, một cho xanh lá, một cho xanh dương, rồi trả về một màu.

Những con số bạn có thể dùng làm đầu vào nằm trong khoảng từ 0 đến `255`. Số 0 nghĩa là mình không muốn chút màu đó nào, còn `255` nghĩa là pha càng nhiều màu đó càng tốt. Vậy nếu gọi hàm `rgb` với đầu vào là `255`, 0 và 0, thì chúng ta đang nói rằng mình muốn tất cả màu đỏ. Nhớ là `255` là con số lớn nhất có thể điền vào đó. Nhưng chúng ta không muốn chút xanh lá hay xanh dương nào, nên cả hai đều bằng 0. Thế là ta nhận được màu đỏ, lưu màu đỏ đó vào một biến rồi dùng trong hàm `circle`, đúng như cách chúng ta vẫn làm với những chuỗi có tên sẵn. Vậy còn khi gọi hàm `rgb` với 0, `255`, 0 thì sao? Lúc này ta nói không đỏ, toàn bộ là xanh lá, không xanh dương. Kết quả là một hình tròn màu xanh lá. Còn nếu bạn muốn màu vàng thì sao? Vàng là hỗn hợp của đỏ và xanh lá. Nên ta có thể nói: cho mình tất cả màu đỏ, tất cả màu xanh lá, và không có xanh dương, thế là ra màu vàng. Và ta cũng có thể dùng những con số nhỏ hơn. Nếu muốn một chút đỏ, không xanh lá và nhiều xanh dương, ta sẽ được màu tím. Còn nhiều đỏ, một chút xanh lá, thêm một chút xanh dương nữa thì ta được màu hồng. Đó là RGB. Chúng ta pha đỏ, xanh lá và xanh dương để có nhiều tổ hợp màu khác nhau.

```javascript
rgb(255, 0, 0) // đỏ
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Một hình tròn màu đỏ do rgb(255, 0, 0) tạo ra, toàn đỏ và không có xanh lá hay xanh dương"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // vàng
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Một hình tròn màu vàng do rgb(255, 255, 0) tạo ra, toàn đỏ và toàn xanh lá, không có xanh dương"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // hồng
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Một hình tròn màu hồng do rgb(230, 50, 170) tạo ra, nhiều đỏ, một chút xanh lá và một ít xanh dương"
  width="436"
  height="400"
/>

RGB rất tiện khi bạn muốn chỉnh một thành phần cụ thể: bao nhiêu đỏ, bao nhiêu xanh lá, bao nhiêu xanh dương.
