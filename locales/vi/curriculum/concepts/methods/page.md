---
title: "Phương thức"
description: 'Những hàm gắn với một giá trị, gọi bằng cú pháp dấu chấm, như `"Jeremy".includes("e")` hay `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Từ trước đến giờ, khi nghĩ về chuỗi hay số, chúng ta vẫn xem chúng là những thứ khá tĩnh.

Đúng là chúng tĩnh thật, nhưng bên trong chúng còn có rất nhiều chức năng mà Jiki có thể dùng.

Và trong thời gian tới, chúng ta sẽ học về những chức năng này, về những khả năng có sẵn trong chúng giúp cuộc sống của bạn dễ dàng hơn nhiều.

Có hai loại khả năng chúng ta sẽ tìm hiểu: thuộc tính (tiếng Anh: _properties_) và phương thức (tiếng Anh: _methods_).

Phương thức là những hàm thuộc về chuỗi.

Vậy nên thay vì tự viết một hàm rồi đưa chuỗi vào làm đầu vào, chúng ta có thể dùng phương thức trực tiếp trên chuỗi.

Ví dụ, bạn còn nhớ hàm kiểm tra xem một chuỗi có chứa một ký tự nào đó không chứ? Thật ra chuỗi đã có sẵn một phương thức tên là `includes` (bao gồm, tức là kiểm tra xem chuỗi có chứa thứ gì đó) làm đúng việc đó, và chúng ta dùng nó với cú pháp dấu chấm giống như bạn đã thấy với thuộc tính.

Khác với thuộc tính, khi viết phương thức, chúng ta viết như viết hàm: có dấu ngoặc đơn và đầu vào.

Vậy nên chúng ta có thể viết:

```javascript
"Jeremy".includes("e") // true
```

Và chúng ta sẽ nhận lại `true`, vì `"Jeremy"` có chứa `"e"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki đang viết chuỗi Jeremy lên một tờ giấy"
  width="359"
  height="400"
/>

Phương thức khác với thuộc tính ở chỗ chúng không phải những sự thật tĩnh. Chúng thực sự là hàm. Bạn có thể hình dung chúng như những hàm có sẵn một cái hộp chứa chuỗi bên trong.

Cách chúng hoạt động thì chưa cần quan tâm lúc này. Bạn sẽ chưa phải tự xây dựng chúng trong một thời gian dài. Bạn chỉ cần biết là để dùng một phương thức, bạn viết dấu chấm rồi đến cú pháp hàm bình thường.

Một điều cần biết về chuỗi là các phương thức không thay đổi gì bên trong chuỗi. Ví dụ, có một phương thức `toUpperCase` (chuyển thành chữ in hoa), trả về chuỗi với tất cả các chữ cái in hoa. Nhưng nó không thay đổi chuỗi ban đầu. Chuỗi đó vẫn là `"Jeremy"` với chỉ chữ J viết hoa. Thay vào đó, Jiki tạo ra một chuỗi mới toàn chữ in hoa.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
