---
title: "Màu HSL"
description: "Tạo màu từ tông màu (sắc thái, 0–360), độ bão hòa (mức rực rỡ, 0–100) và độ sáng (mức sáng, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL cho chúng ta một cách nghĩ hoàn toàn khác về màu sắc so với RGB. HSL viết tắt của tông màu (tiếng Anh: *hue (H)*), độ bão hòa (tiếng Anh: *saturation (S)*) và độ sáng (tiếng Anh: *lightness (L)*). Bạn có một hàm tên là `hsl`, nhận vào ba con số: một cho tông màu, một cho độ bão hòa và một cho độ sáng, rồi trả về một màu. Vậy chúng ta cùng xem ba từ đó nghĩa là gì nhé.

```javascript
hsl(hue, saturation, lightness)
```

Tông màu là sắc màu mà bạn muốn, và nó chạy từ 0 lên đến 360. Bạn thử tưởng tượng một cầu vồng nhé. Đây là cách mình hình dung về nó. Ở bên trái là màu đỏ, rồi đến cam, vàng, xanh lá, xanh dương, tím, và thật ra là quay vòng lại về đỏ. Nên nếu bạn nhập 0 thì bạn bắt đầu ở bên trái, và đó là màu đỏ. Nếu bạn nhập `120` thì bạn đang yêu cầu màu xanh lá. `230` là xanh dương. Bạn cũng có thể nghĩ về nó như một vòng tròn màu, và con số 360 thật ra chính là vậy: số độ trong vòng tròn. Mình thì luôn tra cứu những con số mình cần, nên bạn đừng lo phải cố ghi nhớ mấy con số này nhé. Nhưng biết được chuyện gì đang diễn ra thì cũng hay. Vậy đó là tông màu, tức là sắc màu. Tiếp theo là độ bão hòa, tức là mức độ rực rỡ của màu. Nó chạy từ 0 đến 100. Ở mức 0, bạn chỉ nhận được màu xám. Không có chút màu nào, không có chút sắc nào cả. Ở mức 100, bạn có màu đầy đủ, rực rỡ và sống động. Rồi đến độ sáng. Độ sáng là mức độ sáng của màu, và nó cũng chạy từ 0 đến 100. Ở mức 0, bạn nhận được màu đen. Dù bạn chọn tông màu nào thì cũng ra màu đen. Trong đó không có chút ánh sáng nào. Còn ở mức 100, bạn nhận được màu trắng. Bất kể mọi thứ khác thế nào, nó tràn đầy ánh sáng, nên thành màu trắng. Còn 50 nằm ngay chính giữa, là màu bình thường. Bạn có thể nghĩ về nó như một thanh trượt để làm màu sáng hơn hoặc tối hơn.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Một vòng tròn màu và cầu vồng cho thấy 0 là đỏ, 120 là xanh lá và 240 là xanh dương"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Thanh trượt độ bão hòa từ 0 (xám) qua 50 đến 100 (màu rực rỡ đầy đủ)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Thanh trượt độ sáng từ 0 (đen) qua 50 đến 100 (trắng)"
  width="500"
  height="398"
/>

Vậy nếu muốn một hình tròn màu đỏ bình thường, thứ mà với RGB ta sẽ viết là 255, 0, 0 (toàn đỏ, không xanh lá, không xanh dương), thì ở đây ta dùng 0, 100, 50. 0 cho tông màu đỏ, 100 cho độ bão hòa, tức là màu đầy đủ, và 50 cho độ sáng, tức là mức sáng bình thường. Nếu muốn đổi thành hình tròn màu xanh lá, ta chỉ cần đổi tông màu thành `120`. Nếu muốn thành màu xanh lá đậm hơn, ta giảm độ sáng xuống `25`.

```javascript
hsl(0, 100, 50) // đỏ
hsl(120, 100, 50) // xanh lá
hsl(120, 100, 25) // xanh lá đậm
```

Nếu muốn một màu xanh lá kém rực rỡ hơn, ta có thể bớt màu đi, bớt độ bão hòa xuống, ví dụ giảm còn `30`.

Nếu bạn muốn một màu hồng tươi rực, tông màu khoảng 300 là màu hồng, rồi ta tăng độ bão hòa lên 100 cho thật rực rỡ, và cũng đẩy độ sáng lên khoảng 60.

HSL rất tuyệt khi bạn muốn xoay vòng qua các màu. Nếu muốn có một cầu vồng, bạn chỉ cần tăng dần tông màu.
