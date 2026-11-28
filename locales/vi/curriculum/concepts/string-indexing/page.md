---
title: "Đánh chỉ số chuỗi"
description: "Dùng dấu ngoặc vuông và một con số chỉ vị trí để lấy ra một ký tự từ chuỗi. Nhớ rằng vị trí bắt đầu từ số không."
en_md5: cd31e0366b3090b358494667003f54c9
---

Hãy tưởng tượng bạn có tên của mình, Jeremy, và bạn muốn lấy ra chữ cái đầu J từ đó. Chúng ta sẽ làm thế nào nhỉ?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki đang nghĩ cách lấy ra một ký tự từ một chuỗi"
  width="361"
  height="353"
/>

Bạn có thể hình dung một chuỗi như một dãy các ký tự. Vậy `"Jeremy"` có sáu ký tự, J-E-R-E-M-Y, và mỗi ký tự có một vị trí. `"J"` ở vị trí đầu tiên, `"y"` ở vị trí cuối cùng.

Trong JavaScript và hầu hết các ngôn ngữ lập trình, các vị trí này bắt đầu từ số không. Vậy ký tự đầu tiên `"J"` ở vị trí không, rồi đến `"e"` ở vị trí một, `"r"` ở vị trí hai, `"e"` ở vị trí ba, `"m"` ở vị trí bốn, và `"y"` ở vị trí năm.

Chuyện bắt đầu từ số không này khá kỳ lạ, và thật lòng mà nói, mọi thứ sẽ dễ hơn nếu chúng ta cứ đếm từ một, như ở thế giới bình thường. Nhưng chúng ta không làm vậy. Trong hầu hết các ngôn ngữ lập trình, chúng ta đếm từ số không, nên bạn chỉ cần học thuộc điều đó thôi.

Vậy nếu muốn lấy ký tự ở một vị trí cụ thể, chúng ta dùng dấu ngoặc vuông và đặt con số vào bên trong.

Nếu viết `"Jeremy"[0]`, nghĩa là: cho mình ký tự đầu tiên của từ `"Jeremy"`.

Còn nếu viết `"Jeremy"[1]`, nghĩa là: cho mình ký tự thứ hai.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Và chúng ta cũng có thể làm điều này với biến. Nếu chúng ta tạo một biến tên là `name` (tên) và gán giá trị của nó là chuỗi `"Jeremy"`, thì chúng ta có thể viết `name[0]`, và lại nhận được `"J"`.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Có một điều cần nói rõ: thứ bạn nhận lại từ `name[0]` chỉ là một chuỗi khác. Đó là một tờ giấy khác, chỉ có chữ J trên đó. Không có gì đặc biệt cả. Nó là một chuỗi, giống như `"Jeremy"` cũng là một chuỗi.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki đang cầm một tờ giấy mới, chỉ có chữ J trên đó"
  width="500"
  height="289"
/>

Chỉ là tờ giấy này có một ký tự thay vì sáu ký tự.

Và việc này không ảnh hưởng gì đến chuỗi ban đầu. Chúng ta đâu có xé chữ J ra hay làm gì tương tự. Chúng ta chỉ tìm xem mình muốn ký tự nào, rồi tạo một chuỗi mới chứa ký tự đó.
