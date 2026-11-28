---
title: "Thêm giá trị trả về cho hàm"
description: "Dùng từ khóa `return` để cấp cho hàm của bạn một máng trượt đầu ra, đưa giá trị trả về cho nơi gọi hàm."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Bạn đã biết cách tạo hàm có đầu vào và không có đầu vào. Chỉ còn một điều cuối cùng cần học nữa thôi, và sau đó bạn sẽ trở thành chuyên gia tạo hàm. Đó là cách cho hàm của bạn một máng trượt.

Bạn đã dùng rất nhiều hàm trả về giá trị rồi. `isAlienAbove` (kiểm tra xem phía trên có sinh vật ngoài hành tinh không) trả về cho bạn đúng hoặc sai. `Math.randomInt(1, 10)` (Math nghĩa là toán học, randomInt nghĩa là số nguyên ngẫu nhiên) trả về cho bạn một số ngẫu nhiên.

Khi Jiki dùng những hàm đó, có thứ gì đó nhảy ra từ máng trượt đầu ra, và cậu ấy có thể lấy nó để dùng.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki hứng một giá trị đang nhảy ra từ máng trượt đầu ra của một cỗ máy"
  width="500"
  height="312"
/>

Vậy nên để làm được điều đó, chúng ta cần thêm một từ khóa mới, đó là từ khóa `return`.

Từ khóa `return` bảo Mini Jiki đẩy một thứ gì đó ra khỏi máng trượt.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Mini Jiki ở bên trong cỗ máy đẩy giá trị 42 ra ngoài qua máng trượt đầu ra"
  width="500"
  height="335"
/>

Vậy chúng ta cùng tạo một hàm, đặt tên là `meaningOfLife` (ý nghĩa của sự sống). Công việc của hàm này luôn luôn chỉ là trả về số `42`. Nó không có đầu vào nào. Chúng ta viết như sau:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Cỗ máy meaningOfLife đưa số 42 ra khỏi máng trượt đầu ra"
  width="500"
  height="323"
/>

Giờ thì ở bất cứ đâu trong code, khi dùng `meaningOfLife()`, chúng ta nhận lại số `42` để dùng y như mọi giá trị khác. Chúng ta có thể đặt nó vào một cái hộp bằng `let`, truyền nó làm đầu vào cho hàm khác, hay so sánh nó trong một câu lệnh if.

Hàm có giá trị trả về cũng có thể nhận đầu vào. Bạn có thể viết một hàm `ageBracket(age)` (nhóm tuổi) trả về `"Sorry, too young"` khi `age` nhỏ hơn 18, và `"Welcome"` trong các trường hợp còn lại. Ai gọi hàm cũng nhận lại đúng chuỗi mà hàm đã trả về.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Một giá trị tuổi được thả vào khe của cỗ máy để nó quyết định trả về gì"
  width="487"
  height="400"
/>

Đây chính là cách lập trình vận hành ở tầng cốt lõi. Chúng ta tạo ra thật nhiều khối nhỏ như thế, rồi ghép chúng lại thành chương trình.
