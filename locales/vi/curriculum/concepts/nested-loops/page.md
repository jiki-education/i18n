---
title: "Vòng lặp trong vòng lặp"
description: "Đặt một vòng lặp bên trong một vòng lặp khác để vòng lặp trong chạy hết một lượt ở mỗi bước của vòng lặp ngoài, rất hợp để vẽ lưới."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Giả sử chúng ta muốn có một hàng hoa. Chúng ta có thể viết đại loại như thế này. Đặt một vị trí, trồng một bông hoa, tăng vị trí thêm 10, lặp lại, và cuối cùng ta có một hàng hoa gọn gàng, đẹp mắt.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki đứng bên bảng, phía dưới là một hàng hoa gọn gàng vừa được trồng"
  width="406"
  height="400"
/>

Nhưng nếu chúng ta muốn một lưới hoa với đủ hàng và cột thì sao? Có thể là bốn hàng, mỗi hàng năm bông hoa.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Một lưới hoa bốn nhân năm, Jiki đang nghĩ xem vẽ nó thế nào"
  width="383"
  height="400"
/>

Chúng ta đã có một vòng lặp vẽ một hàng hoa. Làm sao dùng nó để vẽ bốn hàng? Hay chúng ta có thể làm gì để vẽ bốn hàng?

Một cách là cứ sao chép đoạn vòng lặp đó ra bốn lần rồi đổi vị trí phía trên cho từng đoạn. Cách đó vẫn chạy được. Cũng ổn thôi. Nhưng nó lặp đi lặp lại, và có cách hay hơn. Chúng ta biết rằng khi code bị lặp đi lặp lại thì có thể dùng vòng lặp để làm gọn lại.

Vậy ở đây chúng ta có thể dùng một vòng lặp bên trong một vòng lặp khác. Một vòng lặp cho các hàng, một vòng lặp cho số hoa trên hàng đó. Chúng ta bắt đầu bằng cách bọc một vòng lặp repeat quanh đoạn code hiện có để bạn làm quen nhé. Và mình sẽ chỉ cho lặp một lần thôi. Nghĩa là chúng ta bảo Jiki làm mọi thứ bên trong cặp ngoặc nhọn ngoài cùng đúng một lần. Như vậy thì hiệu quả y hệt như khi không có vòng lặp ngoài này. Bảo Jiki lặp lại một việc đúng một lần cũng giống như bảo cậu ấy làm việc đó mà không có repeat. Nhưng đây chính là cách đoạn code này vận hành. Nó là code hợp lệ. Chúng ta có một vòng lặp nằm trong một vòng lặp khác.

Vậy điều gì xảy ra nếu ta đổi vòng lặp ngoài thành lặp hai lần? Jiki sẽ chạy nguyên cái cụm "`plant` (trồng) năm lần" đó hai lượt. Cậu ấy sẽ trồng 10 bông hoa. Nhưng tất cả số hoa đó đều nằm trên cùng một hàng.

Vậy cũng giống như việc mỗi lần vẽ ta cần dịch vị trí từ trái sang phải một chút, sau khi vẽ xong một hàng hoa, ta cũng cần dịch vị trí theo chiều dọc. Vậy làm thế nào? Chúng ta có thể thêm một biến bên ngoài cho vị trí phía trên, dùng biến đó trong hàm `plant`, rồi tăng nó thêm 10 sau mỗi hàng.

Bạn thử nghĩ xem giá trị đó bằng bao nhiêu ở từng thời điểm. Vị trí phía trên bắt đầu từ 10. Trong năm lần trồng đầu tiên, nó giữ nguyên như vậy. Vị trí bên trái tăng dần. Rồi ta cộng thêm 10 vào vị trí phía trên, và trồng thêm năm bông hoa thấp xuống một chút. Ta đặt vị trí bên trái trở lại 10, rồi lại tăng dần sau mỗi lần.

Và giờ ta chỉ cần nói lặp bốn lần, thế là có bốn hàng, mỗi hàng năm cây hoa.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Lưới hoa bốn nhân năm đã hoàn thành, Jiki vui vẻ giơ hai ngón tay cái"
  width="389"
  height="400"
/>

Điều quan trọng cần hiểu là Jiki làm xong hết mọi việc trong vòng lặp trong (tiếng Anh: _inner loop_) rồi mới quay lại vòng lặp ngoài (tiếng Anh: _outer loop_). Cậu ấy không chạy qua chạy lại giữa hai vòng. Cậu ấy chạy hết vòng lặp trong, rồi mới sang bước tiếp theo của vòng lặp ngoài.

Trong trường hợp này, bạn có thể hình dung vòng lặp ngoài điều khiển các nhóm, tức là các hàng, còn vòng lặp trong điều khiển từng mục trong nhóm đó, tức là từng bông hoa trong hàng. Trong ví dụ của chúng ta, vòng lặp ngoài tạo ra bốn hàng, và vòng lặp trong đặt năm cây hoa, tức năm mục, vào mỗi nhóm.
