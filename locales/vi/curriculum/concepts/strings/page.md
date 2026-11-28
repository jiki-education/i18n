---
title: "Giới thiệu về chuỗi"
description: "Những mẩu văn bản được đặt trong dấu ngoặc kép (một chữ cái, một từ, một câu hay cả một đoạn văn) mà Jiki viết ra giấy."
en_md5: 4947f6ac1b3eb8eb85d2dea9b82ffc40
---

Khi muốn dùng một con số, bạn chỉ cần viết con số đó ra là xong, và Jiki sẽ hiểu ý bạn. Nhưng còn khi bạn muốn dùng một chữ cái, một từ hay một câu thì sao? Ví dụ, với hàm `rectangle` (hình chữ nhật) hay hàm `circle` (hình tròn), giả sử bạn có thêm một đầu vào để chỉ định màu thì sao? Chúng ta sẽ viết màu đó thế nào để đưa vào máy? Nếu chúng ta chỉ viết từ `green` (xanh lá) hay `blue` (xanh dương), Jiki sẽ nghĩ rằng chúng ta đang nhắc đến một cái máy nào đó trên kệ, và cậu ấy sẽ nói: "Không có cái máy nào tên là green cả. Mình không biết phải làm gì."

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="Jiki đứng bối rối bên cạnh cái máy hình chữ nhật, với những dấu chấm hỏi trên đầu"
  width="446"
  height="400"
/>

Vậy nên chúng ta có một quy tắc: mỗi khi cần dùng văn bản, chúng ta phải đặt nó trong dấu ngoặc kép, cụ thể là cặp ngoặc kép đôi. Và khi bạn đặt một cái gì đó trong dấu ngoặc kép như thế này, Jiki sẽ lấy ra một mẩu giấy và viết lên đó đúng những gì bạn để trong dấu ngoặc kép. Chúng ta gọi những mẩu giấy đó là chuỗi (tiếng Anh: _string_).

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="Jiki viết từ green lên một mẩu giấy, và nó trở thành một chuỗi"
  width="398"
  height="400"
/>

Chuỗi có thể là một chữ cái, một từ, một câu, một đoạn văn, thậm chí cả một cuốn sách. Quy tắc là: nếu đó là văn bản, chúng ta đặt nó trong dấu ngoặc kép, và nó trở thành một chuỗi.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="Một cái bảng hiển thị các chuỗi có độ dài khác nhau trong dấu ngoặc kép: một chữ cái, một từ, một câu và một địa chỉ nhiều dòng"
  width="500"
  height="398"
/>

Vậy nếu muốn có một hình chữ nhật màu xanh dương, chúng ta viết số cho vị trí bên trái, vị trí phía trên, chiều rộng và chiều cao của nó. Nhưng với đầu vào thứ năm, chúng ta sẽ viết `"blue"` trong dấu ngoặc kép.

```javascript
rectangle(10, 20, 30, 40, "blue")
```

Jiki sẽ lấy cái máy xuống khỏi kệ, bỏ vài đồng xu vào bốn khe đầu tiên. Sau đó cậu ấy viết chữ blue lên một mẩu giấy, đặt mẩu giấy đó vào khe thứ năm rồi chạy máy.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="Jiki đưa mẩu giấy màu xanh dương vào khe thứ năm của cái máy hình chữ nhật, với các đồng xu 10, 20, 30, 40 ở bốn khe đầu tiên"
  width="500"
  height="392"
/>

Chuỗi là một trong những từ kỹ thuật mà thoạt đầu người ta thấy hơi đáng sợ, nhưng thật ra nó chỉ có nghĩa là văn bản. Bạn sẽ quen với nó rất nhanh thôi. Chẳng có gì kỳ diệu ở đây cả.
