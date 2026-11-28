---
title: "Màu sắc"
description: "Hai cách để chỉ ra bất kỳ màu nào bạn muốn. RGB trộn ánh sáng đỏ, xanh lá và xanh dương. HSL dùng tông màu, độ bão hòa và độ sáng."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Nếu bạn có bao giờ làm gì đó mang tính hình ảnh bằng code (và kể cả khi bạn muốn trở thành nhà khoa học dữ liệu, thấy mấy chuyện vẽ vời hơi nhàm chán, thì truyền đạt dữ liệu bằng hình ảnh vẫn là một kỹ năng quan trọng), thì có hai cách khác nhau để biểu diễn màu sắc. Bạn đã dùng màu bằng tên gọi như red hay yellow làm đầu vào cuối cùng trong các hàm vẽ của mình rồi, đó là một cách hay để dùng màu nhanh, nhưng nó khá hạn chế. Chỉ có một vài màu có tên là chúng ta dùng được thôi. Vậy nên giờ chúng ta cùng xem hai cách biểu diễn bất kỳ màu nào bạn muốn, và hai cách đó có tên là RGB và HSL.

RGB cho phép chúng ta nghĩ về màu sắc như một hỗn hợp của đỏ, xanh lá và xanh dương. Đó là ý nghĩa của RGB: đỏ (tiếng Anh: _red (R)_), xanh lá (tiếng Anh: _green (G)_), xanh dương (tiếng Anh: _blue (B)_). Nếu bạn còn nhớ chuyện trộn màu vẽ ở trường, thì ý tưởng cũng tương tự, chỉ khác là chúng ta trộn ánh sáng chứ không phải trộn sơn.

Trong nhiều bài tập, bạn sẽ có một hàm tên là `rgb`. Hàm này nhận ba con số làm đầu vào, một cho đỏ, một cho xanh lá, một cho xanh dương, rồi trả về một màu.

Những con số bạn có thể dùng làm đầu vào nằm trong khoảng từ 0 đến `255`. Số 0 nghĩa là mình không muốn chút màu đó nào, còn `255` nghĩa là pha càng nhiều màu đó càng tốt. Vậy nếu chúng ta gọi hàm `rgb` với đầu vào là `255`, 0 và 0, thì điều chúng ta muốn nói là mình muốn toàn bộ màu đỏ. Nhớ rằng `255` là con số lớn nhất bạn có thể đặt vào đó. Nhưng chúng ta không muốn chút xanh lá hay xanh dương nào, nên cả hai đều bằng 0. Thế là chúng ta nhận được màu đỏ, có thể lưu màu đỏ đó vào một biến rồi dùng nó trong hàm `circle`, giống như chúng ta vẫn làm với các chuỗi tên màu. Vậy nếu chúng ta gọi hàm `rgb` với 0, `255` và 0 thì sao? Lúc này chúng ta đang nói: không đỏ, toàn bộ xanh lá, không xanh dương. Thế là ta được một hình tròn màu xanh lá. Còn nếu muốn màu vàng thì sao? Vàng là sự pha trộn của đỏ và xanh lá. Nên chúng ta có thể nói: cho mình toàn bộ đỏ, toàn bộ xanh lá và không xanh dương, thế là ta được màu vàng. Chúng ta cũng có thể dùng những con số nhỏ hơn. Nếu muốn một chút đỏ, không xanh lá và nhiều xanh dương, ta sẽ được màu tím. Còn nhiều đỏ, một chút xanh lá, thêm một chút xanh dương nữa, ta được màu hồng. Đó là RGB. Chúng ta trộn đỏ, xanh lá và xanh dương để có các tổ hợp khác nhau.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Ba vòng tròn chồng lên nhau của ánh sáng đỏ, xanh lá và xanh dương hòa trộn tạo ra vàng, hồng cánh sen, xanh lơ và trắng"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Giờ chúng ta cùng xem HSL, một cách hoàn toàn khác để nghĩ về màu sắc. HSL là viết tắt của tông màu (tiếng Anh: _hue_), độ bão hòa (tiếng Anh: _saturation_) và độ sáng (tiếng Anh: _lightness_). Tương tự như RGB, bạn có một hàm tên là `hsl` nhận ba con số, một cho tông màu, một cho độ bão hòa và một cho độ sáng, rồi trả về một màu. Vậy chúng ta cùng xem ba từ đó nghĩa là gì.

Tông màu là sắc thái (tiếng Anh: _shade_) của màu mà bạn muốn, và nó chạy từ 0 đến 360. Bạn thử tưởng tượng một cầu vồng xem. Đó là cách mình hay nghĩ về nó. Bên trái là màu đỏ, rồi đến cam, vàng, xanh lá, xanh dương, tím, và thật ra là quay vòng lại về đỏ. Nên nếu bạn nói 0 thì bạn bắt đầu ở bên trái, và đó là màu đỏ. Nếu bạn nói `120` thì bạn đang xin màu xanh lá. `230` là xanh dương. Bạn cũng có thể nghĩ về nó như một vòng tròn màu (tiếng Anh: _color wheel_), và 360 thật ra chính là vòng tròn đó: số độ trong một vòng tròn. Mình thì luôn tra cứu những con số mình cần, nên bạn đừng lo phải cố ghi nhớ mấy thứ này, chỉ là biết chuyện gì đang diễn ra thì vẫn hay hơn. Vậy đó là tông màu, tức sắc thái. Tiếp theo là độ bão hòa, tức mức độ sống động của màu. Nó chạy từ 0 đến 100. Ở mức 0, bạn chỉ nhận được màu xám. Không có màu sắc, không có chút sắc độ nào trong đó cả. Ở mức 100, bạn có màu đầy đủ, rực rỡ và sống động. Rồi đến độ sáng. Độ sáng cho biết màu sáng đến đâu, và nó cũng chạy từ 0 đến 100. Ở mức 0, bạn nhận được màu đen. Dù bạn chọn tông màu nào thì vẫn ra màu đen, vì trong đó không có ánh sáng. Còn ở mức 100, bạn nhận được màu trắng. Bất kể mọi thứ khác ra sao, nó chỉ toàn ánh sáng, nên là màu trắng. Còn 50 nằm đúng ở giữa, là mức màu bình thường. Bạn có thể nghĩ về nó như một thanh trượt (tiếng Anh: _slider_) để làm màu sáng hơn hoặc tối hơn.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Một cầu vồng và một vòng tròn màu, cho thấy tông màu đi từ 0 (đỏ) đến 120 (xanh lá) rồi 240 (xanh dương)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Thanh trượt độ bão hòa từ 0 (xám) qua 50 đến 100 (hồng cánh sen rực rỡ)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Thanh trượt độ sáng từ 0 (đen) qua 50 (màu đầy đủ) đến 100 (trắng)"
  width="500"
  height="398"
/>

Vậy nếu muốn một hình tròn màu đỏ bình thường, thứ mà với RGB chúng ta sẽ viết là 255, 0, 0 (toàn bộ đỏ, không xanh lá, không xanh dương), thì ở đây chúng ta sẽ dùng 0, 100, 50. Số 0 cho tông đỏ, 100 cho độ bão hòa, tức màu đầy đủ, và 50 cho độ sáng, một mức sáng bình thường. Nếu muốn đổi thành hình tròn màu xanh lá, chúng ta chỉ cần đổi tông màu thành `120`. Nếu muốn màu xanh lá đậm hơn, chúng ta giảm độ sáng xuống `25`.

Nếu muốn màu xanh lá dịu hơn, chúng ta bớt màu đi, tức là giảm độ bão hòa, ví dụ xuống `30`.

Nếu bạn muốn một màu hồng tươi rực rỡ, thì tông màu khoảng 300 là màu hồng. Sau đó chúng ta nâng độ bão hòa lên 100 cho thật sống động, và cũng đẩy độ sáng lên khoảng 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Vậy là chúng ta có hai cách khác nhau để biểu diễn màu sắc, và chúng hữu ích trong những tình huống khác nhau. RGB rất hợp khi bạn muốn chỉnh một thành phần cụ thể: bao nhiêu đỏ, bao nhiêu xanh lá, bao nhiêu xanh dương. HSL rất hợp khi bạn muốn chuyển dần qua các màu. Nếu bạn muốn có một cầu vồng, bạn chỉ cần tăng dần tông màu.
