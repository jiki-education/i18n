---
title: "Thêm đầu vào cho hàm"
description: "Thêm khe vào hàm của bạn để hàm có thể làm những việc khác nhau tùy theo giá trị bạn truyền vào."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Những hàm bạn tạo từ trước tới giờ lúc nào cũng làm đúng một việc giống hệt nhau. `turnAround` (quay lại) lúc nào cũng quay sang trái hai lần. `shootIfAlienAbove` (bắn nếu có người ngoài hành tinh ở phía trên) lúc nào cũng kiểm tra rồi bắn.

Nhưng bạn thử nghĩ về những hàm bạn vẫn dùng suốt khóa học xem: chúng làm những việc khác nhau tùy theo đầu vào. Rectangle nhận đầu vào là left, top, width, height, rồi vẽ ra một hình chữ nhật khác nhau tùy theo những gì bạn đưa vào.

Giờ chúng ta sẽ thêm khe vào hàm của chính bạn nữa.

Để làm được điều này, bạn cần biết hai thứ. Thứ nhất là nó trông như thế nào, bạn cần viết những gì. Thứ hai là chuyện gì thực sự diễn ra bên trong.

Phần đầu thì khá đơn giản. Bạn chỉ cần thêm một cặp dấu ngoặc đơn bình thường, rồi viết tên của những đầu vào bạn muốn.

Vậy thử tưởng tượng chúng ta tạo một hàm để bắn nhiều lần. Đặt tên nó là `shootMany` (bắn nhiều lần) nhé.

Chúng ta sẽ viết như thế này:

```javascript
function shootMany(numShots) {
  // ...
}
```

Khi muốn dùng hàm này, bạn gọi nó kèm theo số lần bắn bạn muốn:

```javascript
shootMany(5)
shootMany(2)
```

Đây là phần quan trọng nhất. Khi code chạy, bất cứ thứ gì bạn đưa vào khe đó, `5` hay `2`, mini-Jiki đội mũ bên trong hàm sẽ lấy đầu vào đó, đặt vào một cái hộp tên là `numShots` (số lần bắn), rồi đặt cái hộp đó lên kệ bên trong hàm để bạn dùng trong code của hàm.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki bên trong máy shootMany đặt đầu vào vào một cái hộp có nhãn numShots"
  width="500"
  height="376"
/>

Mình nói lại lần nữa nhé.

Khi viết `shootMany(5)` để dùng hàm, Jiki ở bên ngoài đi lấy một số `5` rồi đặt nó vào khe của `shootMany`. Bên trong máy, mini-Jiki lấy số `5` đó ra, đặt vào một cái hộp tên là `numShots`, vì đó là cái tên bạn đã đặt cho khe đó. Rồi cậu ấy đặt cái hộp lên kệ bên trong hàm, bên trong máy.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki đặt hộp numShots lên kệ bên trong máy shootMany"
  width="500"
  height="302"
/>

Sau đó, bên trong hàm, bạn cứ dùng cái hộp `numShots` y như dùng bất kỳ cái hộp nào khác. Cái tên `numShots` không có gì là ma thuật cả. Chúng ta có thể đặt tên nó là bất cứ thứ gì mình muốn. Nó chỉ là một chỉ dẫn cho mini-Jiki: luôn tạo một cái hộp dán nhãn đó bên trong hàm, rồi bỏ bất cứ thứ gì được đưa vào khe vào cái hộp ấy.

Và khi đã có một giá trị trong cái hộp đó, bạn làm được mọi thứ mình vẫn làm với những cái hộp khác. Bạn có thể dùng hộp `numShots` trong một vòng lặp repeat để bắn đúng số lần. Và bạn cũng có thể có nhiều hơn một đầu vào. Chỉ cần ngăn cách chúng bằng dấu phẩy. Vậy nếu có một hàm tên là `drawStar` (vẽ ngôi sao), vẽ ra một ngôi sao dựa trên vị trí góc trên bên trái của nó, thì bạn viết như thế này:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Máy drawStar với hai khe, nhận hai giá trị riêng biệt"
  width="453"
  height="400"
/>

Rồi khi hàm được gọi, mini-Jiki sẽ lưu những giá trị đưa vào khe trong hai cái hộp tên là `left` (bên trái) và `top` (phía trên), rồi đặt chúng lên kệ bên trong hàm.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki lưu hai đầu vào trong hai cái hộp có nhãn left và top trên kệ bên trong máy drawStar"
  width="431"
  height="400"
/>
