---
title: "Thuộc tính"
description: "Những sự thật tĩnh về một giá trị, truy cập bằng ký pháp dấu chấm và không cần dấu ngoặc, như `.length` để biết một chuỗi có bao nhiêu ký tự."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Cho đến giờ, khi nghĩ về chuỗi hay số, chúng ta vẫn xem chúng là những thứ khá tĩnh.

Đúng là chúng tĩnh thật, nhưng bên trong chúng còn có rất nhiều chức năng mà Jiki có thể dùng.

Có hai loại khả năng chúng ta sẽ xem xét: thuộc tính và phương thức.

Thuộc tính là những sự thật về một thứ, và chúng ta có thể nhờ Jiki cho biết. Ví dụ, chuỗi có một thuộc tính tên là `length` (độ dài), Jiki có thể dùng nó để cho chúng ta biết một chuỗi dài bao nhiêu.

Vậy nên thay vì phải lặp qua tất cả các ký tự để tính xem chuỗi lớn cỡ nào, chúng ta chỉ cần nhờ Jiki cho biết.

Và để làm điều đó, chúng ta dùng một dạng cú pháp mới: dấu chấm.

Ví dụ, nếu có chuỗi `"Jeremy"` và muốn biết độ dài của nó, chúng ta viết:

```javascript
"Jeremy".length // 6
```

Khi Jiki tạo một chuỗi, cậu ấy đếm các ký tự rồi kiểu như viết một con số vào góc, ghi số lượng ký tự có trong đó.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki đếm các ký tự của chuỗi Jeremy và viết con số vào góc"
  width="359"
  height="400"
/>

Rồi khi chúng ta dùng thuộc tính `length`, Jiki chỉ việc đi kiểm tra xem con số đó là gì. Vậy trong ví dụ `"Jeremy".length` của chúng ta, khi Jiki tạo chuỗi `"Jeremy"`, cậu ấy đếm các ký tự, viết số sáu vào góc, rồi khi chúng ta viết `"Jeremy".length`, cậu ấy đi kiểm tra con số đó. Vậy bạn có thể nghĩ về thuộc tính giống như những sự thật về thứ đó.
