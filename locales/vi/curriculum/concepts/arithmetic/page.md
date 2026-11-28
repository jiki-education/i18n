---
title: "Số học"
description: "Kết hợp biến với các phép toán để những giá trị có thể liên hệ và phụ thuộc vào nhau qua phép cộng, trừ, nhân, chia."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Đến giờ, khi tạo biến, chúng ta mới chỉ dùng những giá trị đơn giản: một số như `50` hay một chuỗi như `"yellow"`. Biến sẽ mạnh hơn nhiều khi ta dùng chúng kết hợp với nhau. Chẳng hạn, ta có thể nói cạnh trái của hình chữ nhật phải cách mép canvas một khoảng nhất định.

Trong lập trình, chúng ta dùng được những phép toán cơ bản quen thuộc như cộng, trừ, nhân, chia, và có thể đưa cả những biến đã tạo vào trong đó.

Chúng ta bắt đầu nhé: giả sử ta muốn vẽ một hình chữ nhật trên canvas, cách mép trái và mép phải 10 đơn vị, cách mép trên và mép dưới 20 đơn vị. Như vậy nó sẽ nằm ở giữa canvas, hơi dài hơn chiều cao của nó.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Một hình chữ nhật màu xanh lam nằm ở giữa canvas, cách mép trái và mép phải 10 đơn vị, cách mép trên và mép dưới 20 đơn vị"
  width="399"
  height="400"
/>

Khi vẽ một hình chữ nhật, ta cần biết `left` (mép trái), `top` (mép trên), `width` (chiều rộng) và `height` (chiều cao) của nó, cùng với màu sắc. Vậy nên ta có thể bắt đầu bằng việc viết chúng ra.

Giờ ta cần tính xem `left`, `top`, `width` và `height` nên bằng bao nhiêu. Cùng đặt giá trị cho chúng nào. `left` là 10, `top` là 20. Còn `width` thì... `width` là kích thước của canvas, tức 100, trừ đi 10 bên trái và 10 bên phải, ra 80. Còn `height` là chiều cao của canvas, cũng là 100, trừ đi 20 ở trên và 20 ở dưới, ra 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Vậy là ta đặt được các biến đó: `left` 10, `top` 20, `width` 80, `height` 60. Nhưng chuyện gì xảy ra nếu giờ ta muốn thu hình chữ nhật vào một chút, làm nó nhỏ đi một chút? Nếu ta muốn nó cách trái phải 20 và cách trên dưới 30 thì sao? Ta lại phải tính lại từ đầu mọi thứ. `width` giờ là 100 trừ 20 trừ 20, còn `height` là 100 trừ 30 trừ 30. Đúng là nhiều việc và nhiều phép tính hơn mình muốn làm. Vậy nên thay vào đó, ta có thể bảo máy tính làm hộ.

Ta có thể đặt `width` bằng 100 trừ `left` trừ `left`, và `height` bằng 100 trừ `top` trừ `top`, vì trên và dưới là như nhau. Hoặc viết gọn lại thành 100 trừ `left` nhân 2, hay 100 trừ `top` nhân 2.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Giờ nếu ta đổi `left` hoặc `top` thì `width` và `height` cũng đổi theo. Mọi thứ bắt đầu có liên hệ với nhau. Còn canvas thì sao? Hiện nó là 100. Nhưng nếu canvas của ta đổi thành rộng 200 và cao 200 thì sao? Khi đó có lẽ ta nên tạo một biến tên là `canvasSize` (kích thước canvas) và gán cho nó giá trị 100. Giờ `width` của ta là `canvasSize` trừ `left` nhân 2, còn `height` là `canvasSize` trừ `top` nhân 2.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Cùng nghĩ xem Jiki làm gì khi ta viết let `height` bằng `canvasSize` trừ `top` nhân 2. Đầu tiên, cậu ấy lấy chiếc hộp `top` xuống khỏi kệ, thấy trong đó có 30, rồi lôi máy tính bỏ túi ra, tính 30 nhân 2, và ghi nhớ trong đầu kết quả là 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki lấy chiếc hộp top xuống khỏi kệ và tính ra 30 nhân 2 bằng 60"
  width="377"
  height="400"
/>

Sau đó cậu ấy lấy chiếc hộp `canvasSize` xuống khỏi kệ, thấy trong đó có 100, và tính ra 100 trừ 60 bằng 40. Giờ cậu ấy hiểu rằng thật ra ta đang nói: let `height` bằng 40. Thế là cậu ấy làm theo lệnh let, lấy một chiếc hộp mới, viết `height` lên đó, rồi đặt 40 vào trong. Về sau, khi cần dùng `height`, cậu ấy chỉ việc lấy 40 ra.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki lấy một chiếc hộp mới, viết height lên đó và đặt 40 vào trong"
  width="462"
  height="400"
/>

Khi mọi thứ trong bài tập đã chạy được, bạn hãy thử đổi giá trị của các biến xem điều gì xảy ra. Xem chúng lớn lên và nhỏ đi thế nào. Cứ từ từ, nghĩ về mối liên hệ giữa mọi thứ.
