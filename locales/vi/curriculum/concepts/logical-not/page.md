---
title: "Toán tử `!` (phủ định)"
description: "Dùng `!` để lật một giá trị logic: đúng thành sai và sai thành đúng, hữu ích khi cần bật tắt hoặc đảo ngược một phép kiểm tra."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Đến giờ, khi so sánh hai thứ để xem chúng có bằng nhau không, chúng ta đã dùng ba dấu bằng. Nhưng đôi khi, chúng ta muốn kiểm tra xem hai thứ có khác nhau không, và để làm vậy, chúng ta dùng một dấu chấm than theo sau là hai dấu bằng. Và nhìn chung, trong lập trình, dấu chấm than (tiếng Anh: *bang*), như mình nghĩ bạn bè Mỹ vẫn gọi, có nghĩa là not. Vậy thử tưởng tượng bạn làm việc trong một cửa hàng, và ban quản lý quyết định không cho ai ăn mặc kiểu disco bước vào.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Một người bảo vệ đứng ở cửa hàng kiểm tra trang phục của những người đang xếp hàng"
  width="451"
  height="400"
/>

Chúng ta có thể nói: "Nếu trang phục không phải đồ disco thì mở cửa." Câu lệnh if hoạt động y hệt như vậy.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Chỉ có điều là điều kiện trả về đúng nếu hai thứ khác nhau, và trả về sai nếu chúng giống nhau. Vậy nên chúng ta có thể viết y hệt ý đó bằng cách nói: "Nếu trang phục là đồ disco thì không làm gì cả. Ngược lại thì mở cửa." Nhưng nhìn chung, dùng toán tử `not` (tiếng Anh: *operator*) thì dễ hơn và gọn hơn, giúp bạn thực sự hiểu và nói đúng điều mình muốn.

Còn một điều nữa liên quan đến chuyện này. Đôi khi bạn có một biến đang là đúng, và bạn muốn lật nó thành sai; hoặc bạn có một thứ đang là sai, và bạn muốn lật thành đúng. Chúng ta có thể dùng điều này để theo dõi một thứ gì đó. Vậy thử tưởng tượng chúng ta có một thứ nảy từ trái sang phải, và có một biến tên là `movingRight` (đang di chuyển sang phải), biến này là đúng khi bạn cần đi sang phải. Nhưng khi chạm mép phải, bạn lại muốn chuyển đổi (tiếng Anh: *toggle*) nó thành sai.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Một sân kiểu Pong với các thanh vợt và quả bóng nảy qua lại hai bên, minh họa việc chuyển đổi biến movingRight"
  width="500"
  height="352"
/>

Vậy là chúng ta có thể làm điều này bằng cách nói: "Nếu `movingRight` bằng đúng thì `movingRight` bằng sai. Ngược lại, `movingRight` bằng đúng." Đó là một cách chuyển đổi biến. Jiki sẽ nhìn vào `movingRight` để xem nó là đúng hay sai, rồi tính ra giá trị ngược lại và đặt giá trị đó trở lại trong hộp.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Nhưng có một cách gọn gàng hơn để làm việc này, đó là dùng chính dấu chấm than, hay *bang*:

```javascript
movingRight = !movingRight
```

Và thế là nó lật giá trị. `!movingRight` nghĩa là giá trị ngược lại với bất cứ thứ gì trước đó.

Vậy nếu `movingRight` trước đó là đúng thì giờ nó là sai. Nếu trước đó là sai thì giờ nó là đúng. Jiki lấy thứ đang nằm trong hộp, và dấu chấm than đó bảo cậu ấy tìm giá trị ngược lại. Ngược của đúng là sai. Ngược của sai là đúng, rồi cậu ấy đặt nó trở lại trong hộp. Cách này giống hệt câu lệnh if/else dài dòng kia, nhưng viết gọn và súc tích hơn nhiều.
