---
title: "Toán tử `||` (hoặc)"
description: "Kết hợp hai điều kiện bằng `||` để cả điều kiện đúng khi ít nhất một trong hai vế đúng."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

Chúng ta cũng có thể dùng `or`, và đáng tiếc là một lần nữa, JavaScript không có một từ khóa `or` tử tế nào cả. Thay vào đó, chúng ta phải dùng hai dấu gạch đứng (tiếng Anh: _bars_) đặt cạnh nhau để chỉ phép hoặc. Trông nó kỳ kỳ, nhưng thật ra không kỳ chút nào. Bạn sẽ quen với nó thôi.

Vậy là chúng ta có thể nói: nếu ai đó trên 20 tuổi hoặc đang mặc đồ disco thì được vào. Thế là chúng ta sẽ có một bữa tiệc vui nhộn với những đứa trẻ mặc đồ disco và những người lớn ăn mặc xuề xòa, nghe cũng hợp lý đấy.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki đón những đứa trẻ mặc đồ disco và những người lớn ăn mặc giản dị qua cánh cửa bước vào bữa tiệc"
  width="327"
  height="400"
/>

Có một điều khiến người ta vấp khi dùng cả and lẫn or, đó là mỗi vế của and/or phải là một phép so sánh hoàn chỉnh. Vì vậy, kể cả khi bạn so sánh cùng một biến ở hai vế, bạn vẫn phải viết lại biến đó. Bạn không thể viết `if age is less than 13 or greater than 20`. Bạn phải viết `if age is less than 13 or age is greater than 20`. Cả hai vế đều phải là những phép so sánh hoàn chỉnh.

```javascript
if (age < 13 || age > 20)
```

Bạn cần nghĩ xem khi nào cả hai điều kiện đều quan trọng, và khi nào chỉ cần một trong hai điều kiện đúng.
