---
title: "Hiểu về câu lệnh `if`"
description: "Dùng từ khóa `if` để chỉ chạy một khối lệnh khi một điều kiện nào đó đúng, giống như một người gác cửa chỉ cho người ta vào khi ăn mặc phù hợp."
en_md5: 81c99eea67b02e082ca6c9d7988a3914
---

Có một từ khóa giúp chúng ta bảo Jiki chỉ làm một việc trong những tình huống cụ thể. Có thể bạn đang viết code để trông coi cửa vào của một quán bar, có thể bạn chính là người gác cửa, và Jiki chỉ nên mở cửa khi người khách ăn mặc phù hợp. Hoặc có thể bạn đang viết code để phụ trách vẫy cờ ca-rô ở cuối một cuộc đua, nhưng Jiki cần biết rằng cậu ấy chỉ nên vẫy cờ ở vòng cuối cùng. Trong những tình huống như thế, chúng ta sẽ dùng từ khóa `if`.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bar-door-scenario.webp"
  alt="Jiki trong vai người gác cửa, quyết định xem có cho người ta vào hộp đêm hay không"
  width="292"
  height="400"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/if/waving-flag.webp"
  alt="Jiki sẵn sàng vẫy cờ ca-rô ở cuối cuộc đua"
  width="266"
  height="400"
/>

Chúng ta dùng từ khóa `if` theo cách rất giống với từ khóa `repeat`. Chúng ta đặt một chút thông tin vào trong dấu ngoặc đơn. Trong trường hợp này, thông tin đó chính là điều kiện mà chúng ta đang kiểm tra. Sau đó, chúng ta đặt một khối lệnh trong dấu ngoặc nhọn, và khối lệnh đó chỉ chạy khi điều kiện đúng.

```javascript
if (condition) {
}
```

Vậy những điều kiện này trông như thế nào? Thông thường, chúng là một phép so sánh nào đó. Chúng ta so sánh hai số hoặc hai chuỗi với nhau và kiểm tra xem kết quả là đúng hay sai.

Hãy nghĩ về chúng như những mệnh đề (tiếng Anh: _statement_) mà bạn có thể nói thành lời. Ba nhỏ hơn năm. Điều đó đúng. Bảy nhỏ hơn hai. Điều đó sai.

Chúng ta dùng các ký hiệu để viết những phép so sánh này. Bạn có lẽ đã quen với chúng từ môn toán rồi. Chúng ta có nhỏ hơn, lớn hơn, nhỏ hơn hoặc bằng, lớn hơn hoặc bằng, và còn có cả phép kiểm tra xem hai thứ có giống nhau không, có bằng nhau không. Phép này hơi khác với những gì bạn thường gặp, vì chúng ta dùng ba dấu bằng liền nhau để xem hai thứ giống nhau hay khác nhau.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/comparisons-symbols.webp"
  alt="Bảng các toán tử so sánh: nhỏ hơn, lớn hơn, nhỏ hơn hoặc bằng, lớn hơn hoặc bằng, bằng và khác, kèm ví dụ"
  width="449"
  height="400"
/>

Và điều này giúp chúng ta không bị nhầm lẫn với lúc gán hay cập nhật biến, khi chúng ta dùng một dấu bằng để nói rằng hãy đặt giá trị này vào trong hộp. Chỉ cần nhớ ba dấu bằng là để so sánh.

Bạn cũng có thể so sánh chuỗi. Ví dụ `"hello"` bằng `"hello"`. Điều đó đúng. Hai chuỗi giống nhau. Nhưng hãy cẩn thận, vì Jiki so sánh từng ký tự (tiếng Anh: _character_) trong cả hai chuỗi, trên cả hai tờ giấy. Vậy nên `"Hello"` với chữ H in hoa không bằng `"hello"` với chữ h thường. Đó là hai chuỗi khác nhau. So sánh hai chuỗi đó sẽ cho kết quả sai, vì chữ H in hoa và chữ h thường là hai ký tự khác nhau.

À, nhân tiện nhé, đúng và sai được gọi là kiểu logic (tiếng Anh: _Boolean_), và đó lại là một từ nghe có vẻ kỹ thuật nữa. Nhưng thật ra nó rất đơn giản. Đó chỉ là cách nói trang trọng hơn cho việc một thứ hoặc là đúng, hoặc là sai. Vậy nếu bạn bắt gặp từ Boolean ở đâu đó, thì nó chỉ có nghĩa là đúng hoặc sai. Cùng xem nó hoạt động thế nào nhé. Hãy tưởng tượng chúng ta đang chế tạo người gác cửa robot cho một câu lạc bộ, và chúng ta sẽ nói rằng người gác cửa chỉ được mở cửa khi người đó từ 21 tuổi trở lên. Vậy là chúng ta có một hàm `askAge` (hỏi tuổi), dùng để lấy tuổi của một người, và chúng ta sẽ lưu kết quả đó vào một biến tên là `age` (tuổi). Sau đó chúng ta có thể nói rằng, nếu `age` lớn hơn 20 thì chúng ta sẽ mở cửa. Vậy nếu `askAge` trả về `30`, chúng ta mở cửa, còn nếu nó trả về `12` thì chúng ta không mở.

```javascript
let age = askAge()
if (age >= 21) {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bouncer-open-close.webp"
  alt="Jiki mở cửa cho một người đủ tuổi và từ chối một người còn quá trẻ"
  width="410"
  height="400"
/>
