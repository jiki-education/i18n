---
title: "Những hàm trả về giá trị"
description: "Hứng lấy giá trị bật ra từ máng trượt đầu ra của một hàm và dùng nó trong code của bạn."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Tới giờ, chúng ta đã xem những hàm làm một việc gì đó ở thế giới bên ngoài. Chẳng hạn, hàm `circle` (vẽ hình tròn) cho ra một hình tròn. Hàm `move` (di chuyển) thì đưa nhân vật của bạn sang chỗ khác. Nhưng một số hàm lại hoạt động theo cách khác. Thay vì làm gì đó ra bên ngoài, chúng đưa lại cho bạn một thứ mà bạn có thể dùng ngay trong code. Khi một hàm đưa lại cho Jiki một thứ để dùng trong code, chúng ta nói rằng hàm đó đang trả về (tiếng Anh: _returning_) một thứ gì đó. Nó trả về một thứ cho Jiki. Bạn có thể hình dung những cỗ máy này có thêm một máng trượt ở đầu ra. Chúng ta đã có những khe để đưa đồ vào, nhưng cũng có thể có một khe ra duy nhất, hay một máng trượt để thứ gì đó trượt ra ngoài. Khi Jiki bấm nút trên máy, cỗ máy chạy ù lên, và cuối cùng có thứ gì đó bật ra từ máng trượt. Đó có thể là một số. Có thể là một chuỗi. Đó là thứ mà Jiki có thể hứng lấy và sử dụng.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Một cỗ máy có máng trượt ở bên hông, sẵn sàng đưa một giá trị trở ra cho Jiki"
  width="500"
  height="317"
/>

Hầu hết các hàm, có lẽ tới 95%, đều trả về một thứ gì đó. Chúng có thể làm vài phép tính cho bạn rồi trả về kết quả, hoặc nối vài chuỗi lại với nhau rồi đưa bạn chuỗi kết quả. Hoặc có thể mỗi lần bạn chạy cỗ máy ấy, nó lại đưa cho bạn thời gian hiện tại. Cùng xem trường hợp cuối này nhé. Giả sử chúng ta có một hàm tên là `getCurrentTime` (lấy thời gian hiện tại). Mỗi lần Jiki chạy cỗ máy, một mẩu giấy trượt ra khỏi máng trượt, trên đó ghi thời gian, có thể là 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Cỗ máy getCurrentTime với một mẩu giấy ghi 14:35 đang trượt ra khỏi máng trượt"
  width="500"
  height="312"
/>

Và rồi chúng ta có thể đặt giá trị vừa được trả về đó vào một cái hộp bằng `let`:

```javascript
let time = getCurrentTime()
```

Jiki sẽ chạy cỗ máy, lấy thời gian hiện tại từ máng trượt, rồi cất nó vào một cái hộp tên là `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki đặt mẩu giấy ghi 14:35 lấy từ máng trượt vào một cái hộp có nhãn time"
  width="372"
  height="400"
/>

Giờ, điều quan trọng là bạn hiểu rằng mẩu giấy mà Jiki đặt vào hộp được cố định ngay tại khoảnh khắc đó. Kể cả khi thời gian thật có thay đổi trong lúc chương trình đang chạy, trong hộp vẫn là mẩu giấy ghi 14:35 ấy. Một khi thứ gì đó đã nằm trong hộp thì nó cố định ở đó. Nó không tự dưng mà thay đổi. Nếu sau này muốn đặt thời gian hiện tại vào hộp lần nữa, chúng ta cần gọi lại hàm `getCurrentTime` để lấy.

Hầu hết các hàm trả về giá trị cũng có đầu vào. Ví dụ, chúng ta có thể có một hàm `join` (nối chuỗi) nhận hai chuỗi làm đầu vào và trả về hai chuỗi đó được nối với nhau bằng một dấu cách. Vậy nếu ta dùng cỗ máy `join` với đầu vào là `"Hello"` và `"World"`, thì từ máng trượt sẽ ra một chuỗi duy nhất ghi `"Hello World"`.

```javascript
join("Hello", "World"); // "Hello World"
```
