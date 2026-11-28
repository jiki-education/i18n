---
title: "Nối chuỗi"
description: "Cộng các chuỗi lại với nhau bằng `+` để nối văn bản cố định và các biến thành một chuỗi dài hơn."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Bạn đã biết chuỗi là gì rồi. Chuỗi là những mẩu giấy có ghi chữ trên đó.

Từ đầu đến giờ, chuỗi nào bạn dùng cũng là chuỗi bạn viết ra trực tiếp. Vậy nếu bạn muốn tạo một chuỗi dựa trên các biến hoặc điều kiện thì sao? Chúng ta làm việc đó thế nào?

Có hai cách.

Cách thứ nhất có tên là nối chuỗi (tiếng Anh: _string concatenation_), nghe có vẻ hoa mỹ và hơi khó hiểu, nhưng thực ra chỉ là cộng hai chuỗi lại với nhau.

Hãy tưởng tượng bạn có hai từ, `"hello"` (xin chào) và `"world"` (thế giới), và bạn muốn tạo một chuỗi chứa `"hello world"`.

Bạn có thể chỉ cần viết ra `"hello world"` như một chuỗi, nhưng cũng có thể viết `"hello " + "world"`, và kết quả là chuỗi y hệt.

Dĩ nhiên, trong tình huống này thì cách đó chưa hữu ích lắm. Nhưng nếu chúng ta có một biến chứa tên của ai đó và muốn chào họ thì sao?

Vậy hãy tưởng tượng chúng ta có một biến `name` (tên), lúc thì nó chứa `"Jeremy"` (tên Jeremy), lúc khác lại chứa `"Jiki"` (tên Jiki). Chúng ta muốn dùng biến đó để nói `"hello Jeremy"` hoặc `"hello Jiki"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki đang cầm một cái hộp có nhãn là name, bên trong có thể chứa những giá trị khác nhau"
  width="207"
  height="400"
/>

Chúng ta có thể làm được điều này nhờ khái niệm nối chuỗi:

```javascript
"hello " + name // "hello Jeremy" hoặc "hello Jiki"
```

Kết quả sẽ là `"hello Jeremy"` hoặc `"hello Jiki"`, hoặc lời chào cho bất kỳ ai khác, tùy vào thứ nằm trong hộp `name`.
