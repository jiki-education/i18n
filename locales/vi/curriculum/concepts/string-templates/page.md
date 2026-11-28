---
title: "Mẫu chuỗi"
description: "Dùng dấu backtick và những chỗ trống `${...}` để đặt giá trị vào thẳng trong chuỗi, thay vì nối từng phần bằng `+`."
en_md5: 7fd0e09ac3b32db5f159f8e772872104
---

Chúng ta có thể dùng một thứ gọi là template literal (mẫu chuỗi) để chèn chuỗi này vào chuỗi khác.

Vậy là thay vì cộng các chuỗi lại với nhau, chúng ta có thể có một chuỗi, hay một mẫu, với những chỗ trống bên trong để đặt các chuỗi khác vào.

Để làm vậy, chúng ta dùng dấu backtick (dấu huyền) thay cho dấu ngoặc kép.

Đúng như cái tên, backtick là một dấu tích viết ngược, nhưng rất có thể bạn chưa từng dùng nó bao giờ, nên bạn cần tìm đúng phím trên bàn phím của mình.

Chúng ta dùng chúng để tạo ra một mẫu có thể chứa các chuỗi khác. Rồi để chèn một chuỗi vào mẫu, chúng ta dùng thêm một cú pháp kỳ lạ nữa, gồm dấu đô la và dấu ngoặc nhọn. Ví dụ, để làm đúng điều mà `"hello " + name` vừa làm được với phép nối chuỗi, chúng ta có thể viết:

```javascript
`hello ${name}` // "hello Jeremy" hoặc "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki đang cầm một cái hộp có dán nhãn name, giá trị sẽ được lắp vào mẫu"
  width="207"
  height="400"
/>

Và nó làm đúng y như khi cộng các chuỗi lại với nhau.

Nhưng khi bạn có nhiều chuỗi mà tất cả đều cần ghép vào một chỗ, cách này hiệu quả hơn nhiều.

Bạn sẽ mất một chút thời gian để quen với đúng cú pháp này, nhưng thật ra nó chẳng có gì phức tạp cả.
